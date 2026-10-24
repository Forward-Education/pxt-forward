/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
/// <reference path="../node_modules/pxt-core/localtypings/pxteditor.d.ts" />
/// <reference path="../node_modules/pxt-core/localtypings/projectheader.d.ts" />

// Forward's device picker (forward/docs/device-picker.md). Only in builds with FWD_BOARDS=1;
// apply-overlay.js copies this file into editor/ (forward/overlay/boards/files).
//
//   - New Project asks "Choose your device" first, then pxt's own name dialog. The project is
//     created on that device and stays on it.
//   - Above the simulator: which device the project is for.
//   - My Projects: a small label in each project card's corner with the project's device.
//   - Opening a project for a different device than the page is set up for reloads the page once.
//
// pxt builds every .js in built/editor into editor.js, so this file runs next to upstream's
// extension.tsx without changing it. It wraps pxt.editor.initExtensionsAsync whichever of the two
// runs first.
//
// A device other than micro:bit is a bundled package with "core": true and a board.json
// (forward/overlay/boards/libs). micro:bit has no board package on purpose, so micro:bit projects
// stay openable on makecode.microbit.org. pxt records a project's board package on its header when
// the project saves (header.board, webapp/src/workspace.ts); no board means micro:bit.

namespace fwdboards {
    const MICROBIT = "microbit";
    const LABEL_ID = "fwd-device-label";
    const PICKER_ID = "fwd-device-picker";
    const BADGE_CLASS = "fwd-board-badge";
    const RELOAD_KEY = "fwd-board-reload";

    interface Board {
        id: string;
        name: string;
        shortName: string;
        summary: string;
        image: string;
        variant?: string;
        downloads: boolean;
    }

    let projectView: pxt.editor.IProjectView;
    let boards: Board[] = [];
    let lastHeaderId: string;
    let pendingBoard: Board;

    function loadBoards(): Board[] {
        const out: Board[] = [{
            id: MICROBIT,
            name: "micro:bit",
            shortName: "micro:bit",
            summary: "BBC micro:bit V1 and V2.",
            image: "/docs/static/microbit.simplified.svg",
            downloads: true,
        }];
        const bundled = pxt.appTarget.bundledpkgs || {};
        for (const id of Object.keys(bundled)) {
            const files = bundled[id];
            const cfg: pxt.PackageConfig = JSON.parse(files[pxt.CONFIG_NAME] || "{}");
            if (!cfg.core || !files["board.json"]) continue;
            const def = JSON.parse(files["board.json"]);
            out.push({
                id,
                name: def.boardName || id,
                shortName: def.fwdShortName || def.boardName || id,
                summary: def.fwdSummary || "",
                image: pxt.bundledSvg(id),
                variant: cfg.compileServiceVariant,
                downloads: def.fwdDownloads !== false,
            });
        }
        return out;
    }

    function boardOf(header: pxt.workspace.Header): Board {
        return boards.find(b => b.id != MICROBIT && b.id == header.board) || boards[0];
    }

    // The device the page is set up for: pxt applies a board's compile variant when its project
    // loads, but keeps it after a micro:bit project loads (pxtlib/package.ts: the reset is skipped
    // for targets with multiVariants). Only a reload clears it.
    function boardOfPage(): Board {
        const variant = pxt.appTargetVariant;
        return (variant && boards.find(b => b.variant == variant)) || boards[0];
    }

    // Reload, at most once per project in 10 seconds, so a page that can't settle never loops.
    function reloadFor(headerId: string) {
        try {
            const last = JSON.parse(window.sessionStorage.getItem(RELOAD_KEY) || "{}");
            if (last.headerId == headerId && Date.now() - last.time < 10000) {
                pxt.log(`fwd-boards: not reloading ${headerId} again`);
                return;
            }
            window.sessionStorage.setItem(RELOAD_KEY, JSON.stringify({ headerId, time: Date.now() }));
        } catch (e) {
            // No session storage (private mode): reload anyway; this only runs on a mismatch.
        }
        // A project opened from the home screen can still have the home address; #editor reopens the
        // most recently used project, which is this one.
        window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search + "#editor");
        window.location.reload();
    }

    // "Choose your device": resolves with the chosen board, or undefined if cancelled.
    function pickBoardAsync(): Promise<Board> {
        return new Promise<Board>(resolve => {
            const previousFocus = document.activeElement as HTMLElement;
            const overlay = document.createElement("div");
            overlay.id = PICKER_ID;
            overlay.setAttribute("role", "dialog");
            overlay.setAttribute("aria-modal", "true");
            overlay.setAttribute("aria-labelledby", PICKER_ID + "-title");

            const close = (board?: Board) => {
                overlay.remove();
                document.removeEventListener("keydown", onKey, true);
                if (previousFocus && previousFocus.focus) previousFocus.focus();
                resolve(board);
            };
            const onKey = (e: KeyboardEvent) => {
                if (e.key == "Escape") {
                    e.stopPropagation();
                    close();
                }
            };

            const panel = document.createElement("div");
            panel.className = "fwd-picker-panel";
            const title = document.createElement("h2");
            title.id = PICKER_ID + "-title";
            title.textContent = "Choose your device";
            const hint = document.createElement("p");
            hint.textContent = "Your project stays on this device.";
            const list = document.createElement("div");
            list.className = "fwd-picker-list";
            for (const b of boards) {
                const card = document.createElement("button");
                card.type = "button";
                card.className = "fwd-picker-card";
                const img = document.createElement("img");
                img.src = b.image;
                img.alt = "";
                const name = document.createElement("span");
                name.className = "fwd-picker-name";
                name.textContent = b.name;
                const summary = document.createElement("span");
                summary.className = "fwd-picker-summary";
                summary.textContent = b.summary + (b.downloads ? "" : " Downloads aren't available yet.");
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(summary);
                card.onclick = () => close(b);
                list.appendChild(card);
            }
            const cancel = document.createElement("button");
            cancel.type = "button";
            cancel.className = "fwd-picker-cancel";
            cancel.textContent = "Cancel";
            cancel.onclick = () => close();
            overlay.onclick = e => { if (e.target === overlay) close(); };

            panel.appendChild(title);
            panel.appendChild(hint);
            panel.appendChild(list);
            panel.appendChild(cancel);
            overlay.appendChild(panel);
            document.body.appendChild(overlay);
            document.addEventListener("keydown", onKey, true);
            (list.firstChild as HTMLElement).focus();
        });
    }

    // Device first: New Project (newUserCreatedProject) asks for the device, then runs pxt's own
    // flow (name dialog, then newProject), which gets the board package as a dependency.
    // newProject takes `dependencies` (pxt.editor.ProjectCreationOptions).
    function wrapNewProject() {
        const pv = projectView as any;
        const upstreamUserCreated = pv.newUserCreatedProject.bind(pv);
        const upstreamNewProject = pv.newProject.bind(pv);
        pv.newUserCreatedProject = async (firstProject: boolean) => {
            const board = await pickBoardAsync();
            if (!board) return;
            pendingBoard = board;
            try {
                await upstreamUserCreated(firstProject);
            } finally {
                pendingBoard = undefined;
            }
        };
        pv.newProject = (options: pxt.editor.ProjectCreationOptions = {}) => {
            const board = pendingBoard;
            pendingBoard = undefined;
            if (board && board.id != MICROBIT)
                options = { ...options, dependencies: { ...(options.dependencies || {}), [board.id]: "*" } };
            return upstreamNewProject(options);
        };
    }

    // Above the simulator: which device the project is for, and a reload when the page is set up
    // for a different one.
    function refresh() {
        const header = projectView && projectView.state && projectView.state.header;
        const boardview = document.getElementById("boardview");
        if (!header || !boardview || !boardview.parentElement || !boardview.parentElement.classList.contains("simPanel")) return;
        const board = boardOf(header);

        if (header.id != lastHeaderId) {
            lastHeaderId = header.id;
            if (board.id != boardOfPage().id) {
                pxt.log(`fwd-boards: project is ${board.id}, page is ${boardOfPage().id}; reloading`);
                reloadFor(header.id);
                return;
            }
        }

        let label = document.getElementById(LABEL_ID);
        if (!label || label.nextElementSibling !== boardview) {
            if (label) label.remove();
            label = document.createElement("div");
            label.id = LABEL_ID;
            label.className = "ui item";
            boardview.parentElement.insertBefore(label, boardview);
        }
        if (label.getAttribute("data-board") == board.id) return;
        label.setAttribute("data-board", board.id);
        label.textContent = "";
        const text = document.createElement("div");
        text.innerHTML = "<strong>Device:</strong> ";
        text.appendChild(document.createTextNode(board.name));
        label.appendChild(text);
        if (!board.downloads) {
            const note = document.createElement("div");
            note.className = "fwd-device-note";
            note.textContent = "Downloads aren't available for this device yet.";
            label.appendChild(note);
        }
    }

    // My Projects: pxt marks the card of a project with a board package as "file board" and shows
    // pxt.bundledSvg(board) as its image (webapp/src/projects.tsx). Cards don't carry the project
    // id, so the image says which board it is; a card without one is a micro:bit project.
    function labelProjectCards() {
        const cards = document.querySelectorAll(".ui.card.file");
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i] as HTMLElement;
            let board = boards[0];
            if (card.classList.contains("board")) {
                const img = card.querySelector(".fileimage");
                const src = img && (img.getAttribute("data-src") || (img as HTMLElement).style.backgroundImage);
                board = boards.find(b => b.id != MICROBIT && src && src.indexOf(b.image) >= 0) || board;
            }
            let badge = card.querySelector("." + BADGE_CLASS) as HTMLElement;
            if (badge && badge.textContent == board.shortName) continue;
            if (!badge) {
                badge = document.createElement("div");
                badge.className = BADGE_CLASS;
                card.appendChild(badge);
            }
            badge.textContent = board.shortName;
            badge.title = board.name;
            badge.classList.toggle("forward", board.id != MICROBIT);
        }
    }

    const CSS = `
#root.miniSim #${LABEL_ID} { display: none !important; }
#${LABEL_ID} { display: block !important; padding: 0.4em 0.2em; }
#${LABEL_ID} .fwd-device-note { font-size: 0.85em; opacity: 0.8; margin-top: 0.2em; }
.ui.card.file .${BADGE_CLASS} { position: absolute; bottom: 0.6em; left: 0.6em; z-index: 1; padding: 0.15em 0.5em; border-radius: 1em; font-size: 0.75em; font-weight: 600; line-height: 1.4; background: #e8e8e8; color: #222; pointer-events: none; }
.ui.card.file .${BADGE_CLASS}.forward { background: #157f4a; color: #fff; }
#${PICKER_ID} { position: fixed; inset: 0; z-index: 2000; background: rgba(0,0,0,0.55); display: flex; align-items: center; justify-content: center; padding: 16px; }
#${PICKER_ID} .fwd-picker-panel { background: #fff; color: #222; border-radius: 0.6em; padding: 1.2em 1.4em; max-width: 46em; width: 100%; max-height: 100%; overflow: auto; }
#${PICKER_ID} h2 { margin: 0 0 0.2em; font-size: 1.4em; }
#${PICKER_ID} p { margin: 0 0 1em; opacity: 0.8; }
#${PICKER_ID} .fwd-picker-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(11em, 1fr)); gap: 0.8em; }
#${PICKER_ID} .fwd-picker-card { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.4em; padding: 0.9em 0.7em; border: 2px solid #ddd; border-radius: 0.5em; background: #fff; cursor: pointer; font: inherit; color: inherit; }
#${PICKER_ID} .fwd-picker-card:hover, #${PICKER_ID} .fwd-picker-card:focus { border-color: #157f4a; outline: none; }
#${PICKER_ID} .fwd-picker-card img { width: 100%; height: 6em; object-fit: contain; }
#${PICKER_ID} .fwd-picker-name { font-weight: 700; }
#${PICKER_ID} .fwd-picker-summary { font-size: 0.85em; opacity: 0.8; }
#${PICKER_ID} .fwd-picker-cancel { margin-top: 1em; float: right; padding: 0.5em 1.2em; border: 1px solid #ccc; border-radius: 0.3em; background: #f4f4f4; cursor: pointer; font: inherit; }
`;

    function start(opts: pxt.editor.ExtensionOptions) {
        boards = loadBoards();
        if (boards.length < 2) return; // micro:bit only: pxt's own New Project, no labels
        projectView = opts.projectView;

        const style = document.createElement("style");
        style.textContent = CSS;
        document.head.appendChild(style);

        wrapNewProject();

        // A timer rather than requestAnimationFrame, which browsers pause while the page isn't shown:
        // the board check must run even if the editor opens in a background tab.
        let queued = false;
        new MutationObserver(() => {
            if (queued) return;
            queued = true;
            window.setTimeout(() => {
                queued = false;
                labelProjectCards();
                refresh();
            }, 50);
        }).observe(document.body, { childList: true, subtree: true });
    }

    // Wrap pxt.editor.initExtensionsAsync, whether upstream's extension.tsx has set it yet or not.
    const editorNs = pxt.editor as any;
    let upstream: (opts: pxt.editor.ExtensionOptions) => Promise<pxt.editor.ExtensionResult> = editorNs.initExtensionsAsync;
    const wrapped = async (opts: pxt.editor.ExtensionOptions) => {
        const res = upstream ? await upstream(opts) : {};
        start(opts);
        return res;
    };
    Object.defineProperty(editorNs, "initExtensionsAsync", {
        configurable: true,
        enumerable: true,
        get: () => wrapped,
        set: (fn) => { upstream = fn; },
    });
}

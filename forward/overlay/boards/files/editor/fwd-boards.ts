/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
/// <reference path="../node_modules/pxt-core/localtypings/pxteditor.d.ts" />

// Forward's device switcher: a "Device" dropdown above the simulator (forward/docs/device-switcher.md,
// phase 2). Only in builds with FWD_BOARDS=1; apply-overlay.js copies this file into editor/ (forward/overlay/boards/files).
//
// pxt builds every .js in built/editor into editor.js, so this file runs next to upstream's
// extension.tsx without changing it. It wraps pxt.editor.initExtensionsAsync whichever of the two
// runs first, then mounts the dropdown once pxt calls it.
//
// A board is a bundled package with "core": true and a board.json (forward/overlay/boards/libs).
// micro:bit has no board package on purpose, so micro:bit projects stay openable on
// makecode.microbit.org: choosing micro:bit removes the board package. Every switch reloads the
// page, because pxt keeps the previous board's compile variant until a reload
// (pxtlib/package.ts: the reset is skipped for targets with multiVariants).

namespace fwdboards {
    const MICROBIT = "microbit";
    const ROOT_ID = "fwd-board-switcher";
    const RELOAD_KEY = "fwd-board-reload";

    interface Board {
        id: string;
        name: string;
        shortName: string;
        variant?: string;
        lacks: string[];
        downloads: boolean;
    }

    let projectView: pxt.editor.IProjectView;
    let confirmAsync: (options: any) => Promise<number>;
    let boards: Board[] = [];
    let lastHeaderId: string;

    // The webapp's package module, which pxt exposes for console use (webapp/src/app.tsx, window.E).
    // Only used to read the project's pxt.json; writes go through projectView.updateFileAsync.
    function editorPkg(): any {
        const e = (window as any).E;
        return e && e.pkg && e.pkg.mainEditorPkg && e.pkg.mainEditorPkg();
    }

    function readProjectConfig(): pxt.PackageConfig {
        const pkg = editorPkg();
        const file = pkg && pkg.lookupFile("this/" + pxt.CONFIG_NAME);
        if (!file) throw new Error("fwd-boards: can't read the project's pxt.json (window.E.pkg changed?)");
        return JSON.parse(file.content);
    }

    function loadBoards(): Board[] {
        const out: Board[] = [{
            id: MICROBIT,
            name: "micro:bit",
            shortName: "micro:bit",
            lacks: [],
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
                variant: cfg.compileServiceVariant,
                lacks: def.fwdLacks || [],
                downloads: def.fwdDownloads !== false,
            });
        }
        return out;
    }

    function boardOfProject(cfg: pxt.PackageConfig): string {
        const deps = Object.keys(cfg.dependencies || {});
        const board = boards.find(b => b.id != MICROBIT && deps.indexOf(b.id) >= 0);
        return board ? board.id : MICROBIT;
    }

    // The board the page is set up for: pxt applies a board's variant when its project loads.
    function boardOfPage(): string {
        const variant = pxt.appTargetVariant;
        const board = variant && boards.find(b => b.variant == variant);
        return board ? board.id : MICROBIT;
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
            // No session storage (private mode): reload anyway; the board check only reloads on a mismatch.
        }
        // A project opened from the home screen can still have the home address; #editor reopens the
        // most recently used project, which is this one.
        window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search + "#editor");
        window.location.reload();
    }

    async function switchToAsync(target: Board) {
        const cfg = readProjectConfig();
        const current = boards.find(b => b.id == boardOfProject(cfg));
        if (current.id == target.id) return;

        const notes: string[] = [];
        if (target.lacks.length)
            notes.push(`The ${target.name} doesn't have: ${target.lacks.join(", ")}. Blocks that use them won't work on it.`);
        if (!target.downloads)
            notes.push(`Downloads to the ${target.name} aren't available yet. You can still write code and run the simulator.`);
        notes.push("The editor reloads to switch.");
        const ok = await confirmAsync({
            header: `Switch to ${target.name}?`,
            body: notes.join(" "),
            agreeLbl: "Switch",
            disagreeLbl: "Cancel",
        });
        if (!ok) return;

        for (const b of boards)
            if (b.id != MICROBIT) delete cfg.dependencies[b.id];
        if (target.id != MICROBIT) cfg.dependencies[target.id] = "*";
        await projectView.updateFileAsync(pxt.CONFIG_NAME, JSON.stringify(cfg, null, 4) + "\n");
        await projectView.saveProjectAsync();
        reloadFor(projectView.state.header && projectView.state.header.id);
    }

    function render(root: HTMLElement, selected: string) {
        if (root.getAttribute("data-board") == selected) return;
        root.setAttribute("data-board", selected);
        root.textContent = "";

        const label = document.createElement("label");
        label.textContent = "Device";
        label.htmlFor = ROOT_ID + "-select";
        label.style.cssText = "font-weight:600;margin-right:0.5em;";

        const select = document.createElement("select");
        select.id = ROOT_ID + "-select";
        select.style.cssText = "flex:1;min-width:0;padding:0.3em 0.4em;border-radius:0.3em;border:1px solid rgba(0,0,0,.3);font:inherit;background:#fff;color:#000;";
        for (const b of boards) {
            const opt = document.createElement("option");
            opt.value = b.id;
            opt.textContent = b.name;
            opt.selected = b.id == selected;
            select.appendChild(opt);
        }
        select.onchange = () => {
            const target = boards.find(b => b.id == select.value);
            switchToAsync(target)
                .catch(e => pxt.reportException(e))
                .then(() => {
                    // Cancelled or failed: show the project's board again.
                    root.removeAttribute("data-board");
                    refresh();
                });
        };

        root.appendChild(label);
        root.appendChild(select);
        const board = boards.find(b => b.id == selected);
        if (board && !board.downloads) {
            const note = document.createElement("div");
            note.textContent = "Downloads aren't available for this device yet.";
            note.style.cssText = "flex-basis:100%;font-size:0.85em;opacity:0.8;margin-top:0.3em;";
            root.appendChild(note);
        }
    }

    function refresh() {
        const header = projectView && projectView.state && projectView.state.header;
        const boardview = document.getElementById("boardview");
        if (!header || !boardview || !boardview.parentElement || !boardview.parentElement.classList.contains("simPanel")) return;

        let cfg: pxt.PackageConfig;
        try {
            cfg = readProjectConfig();
        } catch (e) {
            return; // project still loading
        }
        const projectBoard = boardOfProject(cfg);

        // A project opened from the home screen after a different board: pxt kept that board's
        // variant, so reload once to compile and simulate the right board.
        if (header.id != lastHeaderId) {
            lastHeaderId = header.id;
            if (projectBoard != boardOfPage()) {
                pxt.log(`fwd-boards: project is ${projectBoard}, page is ${boardOfPage()}; reloading`);
                reloadFor(header.id);
                return;
            }
        }

        let root = document.getElementById(ROOT_ID);
        if (!root || root.nextElementSibling !== boardview) {
            if (root) root.remove();
            root = document.createElement("div");
            root.id = ROOT_ID;
            root.className = "ui item";
            root.style.cssText = "display:flex;flex-wrap:wrap;align-items:center;padding:0.4em 0.2em;";
            boardview.parentElement.insertBefore(root, boardview);
        }
        render(root, projectBoard);
    }

    // My Projects: a small label in each project card's corner with the project's board. pxt marks the
    // card of a project with a board package as "file board" and shows pxt.bundledSvg(board) as its
    // image (webapp/src/projects.tsx, workspace.ts sets header.board on save), so the image says
    // which board it is; a project card without one is a micro:bit project.
    const BADGE_CLASS = "fwd-board-badge";
    function labelProjectCards() {
        const cards = document.querySelectorAll(".ui.card.file");
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i] as HTMLElement;
            let board = boards[0];
            if (card.classList.contains("board")) {
                const img = card.querySelector(".fileimage");
                const src = img && (img.getAttribute("data-src") || (img as HTMLElement).style.backgroundImage);
                board = boards.find(b => b.id != MICROBIT && src && src.indexOf(pxt.bundledSvg(b.id)) >= 0) || board;
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

    function start(opts: pxt.editor.ExtensionOptions, res: pxt.editor.ExtensionResult) {
        boards = loadBoards();
        if (boards.length < 2) return; // nothing to switch between
        projectView = opts.projectView;

        // On narrow screens pxt floats a small simulator over the code (#root.miniSim); the dropdown
        // would float with it, so it only shows with the full simulator panel.
        const style = document.createElement("style");
        style.textContent = `#root.miniSim #${ROOT_ID} { display: none !important; }
.ui.card.file .${BADGE_CLASS} { position: absolute; top: 0.4em; right: 0.4em; z-index: 1; padding: 0.15em 0.5em; border-radius: 1em; font-size: 0.75em; font-weight: 600; line-height: 1.4; background: #e8e8e8; color: #222; pointer-events: none; }
.ui.card.file .${BADGE_CLASS}.forward { background: #157f4a; color: #fff; }`;
        document.head.appendChild(style);

        const upstreamInit = res.initAsync;
        res.initAsync = async initOpts => {
            confirmAsync = initOpts.confirmAsync;
            if (upstreamInit) await upstreamInit(initOpts);
        };

        let queued = false;
        new MutationObserver(() => {
            if (queued) return;
            queued = true;
            window.requestAnimationFrame(() => {
                queued = false;
                labelProjectCards();
                refresh();
            });
        }).observe(document.body, { childList: true, subtree: true });
    }

    // Wrap pxt.editor.initExtensionsAsync, whether upstream's extension.tsx has set it yet or not.
    const editorNs = pxt.editor as any;
    let upstream: (opts: pxt.editor.ExtensionOptions) => Promise<pxt.editor.ExtensionResult> = editorNs.initExtensionsAsync;
    const wrapped = async (opts: pxt.editor.ExtensionOptions) => {
        const res = upstream ? await upstream(opts) : {};
        start(opts, res);
        return res;
    };
    Object.defineProperty(editorNs, "initExtensionsAsync", {
        configurable: true,
        enumerable: true,
        get: () => wrapped,
        set: (fn) => { upstream = fn; },
    });
}

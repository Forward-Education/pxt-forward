namespace pxsim.visuals {
    // Forward (device switcher, forward/docs/device-switcher.md): a board whose board.json carries
    // its own picture (visual is an object) is drawn with pxtsim's generic board view, as pxt-maker
    // does. micro:bit keeps upstream's view.
    mkBoardView = (opts: BoardViewOptions): BoardView => {
        if (opts.visual && typeof opts.visual === "object") {
            return new visuals.GenericBoardSvg({
                visualDef: opts.visual as BoardImageDefinition,
                boardDef: opts.boardDef,
                wireframe: opts.wireframe
            });
        }
        return new visuals.MicrobitBoardSvg({
            runtime: runtime,
            theme: visuals.randomTheme(opts.highContrast),
            wireframe: opts.wireframe
        });
    }
}

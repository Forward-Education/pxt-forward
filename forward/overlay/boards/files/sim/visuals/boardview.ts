namespace pxsim.visuals {
    // Forward (device picker, forward/docs/device-picker.md): a board whose board.json carries its own
    // picture (visual is an object) is drawn with pxtsim's generic board view, as pxt-maker does,
    // unless it asks for the micro:bit view with "fwdSimView": "microbit" (a micro:bit-compatible
    // board without its own simulator artwork yet). micro:bit keeps upstream's view.
    mkBoardView = (opts: BoardViewOptions): BoardView => {
        const def = opts.boardDef as any;
        if (opts.visual && typeof opts.visual === "object" && !(def && def.fwdSimView === "microbit")) {
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

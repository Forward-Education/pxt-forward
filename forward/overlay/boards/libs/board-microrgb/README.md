# MicroRGB

Board package for Forward's MicroRGB, the micro:bit-compatible RP2040 board (`hw-breakoutv3`; working
name, 2026-10-24). Projects that depend on it compile with the `fwdrp2040` variant: the micro:bit
blocks, built against Forward's CODAL layer (`Forward-Education/codal-forward-brain`) into a `.uf2`
for the board's FORWARD drive.

- **Simulator:** the micro:bit view (`fwdSimView` in `board.json`), so the display and buttons work,
  until MicroRGB has its own artwork. `board.svg` is a placeholder for the device picker and the
  project cards.
- **Blocks:** no blocks hidden yet. The touch logo is left out of `onboardComponents`; confirm the
  hardware list with the hardware session before hiding any blocks (`toolboxFilter` in `pxt.json`).
- **Downloads:** not available until `codal-forward-brain` builds (plan M7).

Part of the device picker (`forward/docs/device-picker.md`). Only in builds with `FWD_BOARDS=1`.

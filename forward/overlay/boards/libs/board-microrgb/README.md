# MicroRGB

Board package for Forward's MicroRGB, the micro:bit-compatible board (`hw-microbit-clone`; working
name, 2026-10-24; the product name is open and must not contain "micro:bit").

- **Chip:** nRF52833, the same as the micro:bit V2 (512 KB flash, 128 KB RAM), with no interface chip.
- **Build:** the `fwdmicrorgb` variant. The micro:bit blocks are built against Forward's own CODAL
  target, forked from `codal-microbit-v2` and `codal-nrf52`: different chip pins behind the same edge
  connector, a NeoPixel driver for the 5x5 RGB display, and drivers for its accelerometer (SC7A20H)
  and compass (MMC5603NJ). The output is a `.uf2` for the board's own USB drive (a UF2 bootloader on
  the nRF52833's native USB). Not available until that CODAL target exists.
- **Simulator:** the micro:bit view (`fwdSimView` in `board.json`), since the edge connector and the
  on-board parts match a micro:bit V2. `board.svg` is a placeholder for the device picker and the
  project cards.
- **Blocks:** all of the micro:bit's. Colour on the display is a new capability for later blocks.
- **Open (hw-microbit-clone):** USB VID/PID, drive name, Bluetooth name, product name.

Part of the device picker (`forward/docs/device-picker.md`). Only in builds with `FWD_BOARDS=1`.

# Hardware checklist

Run this on staging (`code-staging.forwardedu.com`) before each release, and after any change to the build, the hex cache, the Jacdac simulator pin or the extension pins. Fill in the results table at the end and keep a copy per run.

## Setup

- **Browser:** Chrome or Edge. Test on at least one Windows laptop and one Chromebook if you can; WebUSB policies differ.
- **Fresh profile:** use a new browser profile or a private window, so cached files and old WebUSB pairings don't hide problems.
- **DevTools:** open the Network tab before starting. Every request should go to `code-staging.forwardedu.com`. Note anything else.
- **Kit:**
  - a micro:bit V2 (and a V1 if you still support it), with a data USB cable
  - the FIFA kit (REV_B or later breakout, 3 servos, motors, relay, battery)
  - 2 or 3 Forward Jacdac modules, for example a dial, the LED ring and a sonar sensor, plus Jacdac cables
- **Record versions:** micro:bit DAPLink firmware (open `DETAILS.TXT` on the MICROBIT drive), FIFA board revision, and the staging build (commit shown in the GitHub Actions run).

## 1. Plain micro:bit

| # | Step | Pass if |
|---|---|---|
| 1.1 | New project. `basic.showIcon(IconNames.Heart)` in `on start`. Download, then pair the micro:bit when asked. | It flashes over WebUSB and shows the heart. |
| 1.2 | Change the icon and download again. | It flashes without asking to pair again, noticeably faster (quick flash). |
| 1.3 | Reload the editor, open the same project, download. | It reconnects and flashes. |
| 1.4 | Disconnect from the editor, download, then drag the `.hex` onto the MICROBIT drive. | The micro:bit runs the program. |
| 1.5 | Repeat 1.1 and 1.4 on a micro:bit V1. | Same results. |
| 1.6 | Radio: two micro:bits, `radio.setGroup(1)`, send a number on button A, show it on receive. | Each shows the other's number. |

## 2. FIFA kit

Add the FIFA extension from the Extensions dialog.

| # | Step | Pass if |
|---|---|---|
| 2.1 | `fwdMotors.servoPort1.setAngle(90)` for each of the 3 servo ports, then `fwdMotors.setRelay(true)`. Download over WebUSB. | All 3 servos move to 90° and the relay clicks. |
| 2.2 | Drive forward for 20 cm, then stop. | The car drives roughly 20 cm (within about 2 cm) and stops smoothly. |
| 2.3 | Drive both motors forward, then turn left and right. | Each side turns the right way (checks the v0.1.6 motor side and encoder sign fixes). |
| 2.4 | Show the battery level on the display. | A sensible reading that drops when the battery is low or disconnected. |
| 2.5 | With the micro:bit connected over WebUSB, open the Jacdac panel under the simulator. | One FIFA breakout device appears, with Forward's widget (not the generic one), and its values update live. |
| 2.6 | Drag-and-drop download of the same program. | Same behaviour as 2.1. |

If 2.5 shows the generic widget, note the product id shown in the device details. REV_B to REV_F should report `0x37a2f1fb`; REV_A prototypes report `0x37a2f1fa`, which may not be in the catalog yet.

## 3. Forward Jacdac modules

Add Forward's blocks (all-fwd-blocks) from the Extensions dialog and plug the modules into the breakout's Jacdac port.

| # | Step | Pass if |
|---|---|---|
| 3.1 | Show the dial's position as a number. Download. | Turning the dial changes the number. |
| 3.2 | Set the LED ring colour from the dial. | The ring follows the dial. |
| 3.3 | Show the sonar distance in cm. | Moving your hand changes the reading sensibly. |
| 3.4 | With the micro:bit connected over WebUSB, open the Jacdac panel. | Each module appears with its Forward widget and live values. |
| 3.5 | Unplug one module and plug it back in while the program runs. | It reconnects and the program carries on. |
| 3.6 | Two of the same module (for example two dials), using `dial1` and `dial2`. | Each block controls the module you expect; the binding survives a reset. |

## 4. Data logging

| # | Step | Pass if |
|---|---|---|
| 4.1 | Add the Data Logger extension. Log the dial value every second for 30 seconds, with a Jacdac module connected. Download. | It flashes (this uses a pre-built Jacdac plus datalogger image). |
| 4.2 | Open `MY_DATA.HTM` on the MICROBIT drive. | The logged values are there. |

## 5. Projects moving between editors

| # | Step | Pass if |
|---|---|---|
| 5.1 | Make a FIFA project on makecode.microbit.org, download the `.hex`, and import it into Forward's editor. | It opens with the right blocks and downloads to the board. |
| 5.2 | Do the reverse: a Forward-made `.hex` into makecode.microbit.org. | It opens and downloads. |

## 6. Known gap, check the message

Forward's compile service doesn't exist yet, so only pre-built combinations download. Today those are a plain micro:bit project, and Jacdac (v1.9.41 or v1.9.42) with or without the Data Logger.

| # | Step | Expected today |
|---|---|---|
| 6.1 | A Jacdac project that also adds Bluetooth, or another extension with C++ that isn't in the pre-built set. | Download fails. Note the exact message students would see, so we can decide whether to pre-build more combinations or prioritise the compile service. |

## Results

| Run date | Tester | Build commit | DAPLink | FIFA rev | Browser and OS | Failed steps | Notes |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

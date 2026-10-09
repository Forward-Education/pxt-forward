# Smart Doorbell – Use Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```
```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Up, function () {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Sad)
})
fwdSensors.pir1.onMovement(function () {
    Motion += 1
    datalogger.log(
        datalogger.createCV("Motion", Motion),
        datalogger.createCV("Sunlight", fwdSensors.solar1.lightLevel())
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    datalogger.deleteLog()
})
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    music.ringTone(659)
})
let Motion = 0
fwdLights.ledRing1.setBrightness(10)
Motion = 0
let LightOn = 0
datalogger.setColumnTitles(
    "Motion",
    "Sunlight",
    "LightOn"
)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.mirrorToSerial(true)
basic.forever(function () {
    if (fwdSensors.pir1.motionDetected()) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        LightOn += 1
        datalogger.log(datalogger.createCV("LightOn", LightOn))
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})

/* Reflect:
Q1:
Q2: */
```

## Smart Doorbell - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Smart Doorbell logs data.

1. **Build**: Assemble your Smart Doorbell

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and explore the code

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Smart Doorbell is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Predict & Run: How Does This Program Work?

Look at the code in your workspace. What do you think will happen when you download it?

``|Download|`` your code, then wave your hand in front of the ``||fwdSensors:PIR Motion||`` sensor.

~hint Tell Me More!

Each time motion is detected, the ``||fwdLights:LED Ring||`` lights up, and a new row is logged, including how many times motion has happened, and how bright it is right now.

hint~

## Investigate: Two Kinds of Data

Your log records **two** things every time motion happens: ``||fwdSensors:Motion||`` and ``||fwdSensors:Sunlight||``.

Why might tracking both together tell you more than tracking motion alone?

~hint Tell Me More!

Motion alone only tells you *that* something happened. Adding ``Sunlight`` lets you also ask *when*, was it bright out, or dark? Two attributes together can reveal patterns one alone can't.

hint~

## Investigate: The Doorbell

Press and hold the ``||fwdSensors:Touch Sensor||``. What do you hear? What happens when you let go?

~hint Tell Me More!

Pressing the ``||fwdSensors:Touch Sensor||`` plays one ``||music:Tone||``, while releasing it plays a second ``||music:Tone||``. Holding it down keeps the first ``||music:Tone||`` ringing until you let go. This is an **event**, code that only runs the moment something specific happens.

hint~

## Investigate: Why So Many Rows?

Wave your hand slowly in front of the ``||fwdSensors:PIR Motion||`` sensor for several seconds, without pulling it away.

Now unplug and reconnect your micro:bit, and open **MY_DATA** again. How many new rows were added in that short time? Why does this one small segment of code, checking motion inside your ``||basic:Forever||`` loop, end up creating so many rows on its own?

~hint Tell Me More!

Your ``||basic:Forever||`` loop checks for motion many times every second, and logs a new ``LightOn`` row every single time it sees your hand is still there. That one small segment, checking motion and logging a row, runs constantly, which is exactly why it contributes so much to your overall log, far more than the single-row `Motion` and `Sunlight` entries from the touch and movement events.

hint~

## Investigate: View Your Data

Unplug your micro:bit, then plug it back in. It will appear as a drive called **MICROBIT** on your computer.

Open that drive, and find a file called **MY_DATA**. Double-click it to open it in a web browser.

What do you see? Try clicking **Preview** to see your data as a graph instead of a table.

~hint Tell Me More!

**MY_DATA** shows every row you've logged, as a table. **Preview** turns that same data into a graph, since your log includes a timestamp column, you can view it as a line graph, showing how things changed over time.

hint~

## Investigate: A Full Log

Your micro:bit can only store so many rows. Keep triggering motion until you see a sad icon appear.

Why does a device need to know when it's run out of room to store data?

~hint Tell Me More!

The ``||datalogger:On Log Full||`` event warns you before any new data is silently lost. Without it, you might think your device was still recording, when it had actually stopped.

hint~

## Investigate: A Fresh Start

Press the ``||input:A+B Buttons||`` on the micro:bit. What happens to your log?

~hint Tell Me More!

Pressing the ``||input:A+B Buttons||`` calls ``||datalogger:Delete Log||``, clearing every row you've recorded so far, and shows a check mark to confirm it worked.

hint~

## Reflect

In this tutorial, you logged **motion** and **light level** together, and explored what happens when a log fills up or gets cleared. Record your answers in the workspace.

1. This light turns on for any motion, day or night. Is that always the best design? Why or why not?

2. This log records exactly when someone was near your device. Who do you think should be allowed to see that information?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||fwdSensors:On Movement||``: An **event** that logs a new row the moment motion is detected

- ``||datalogger:Create CV||`` and ``||datalogger:Log||``: Record ``Motion`` and ``Sunlight`` together in the same row

- ``||datalogger:On Log Full||``: Warns you before your device runs out of storage

- ``||datalogger:Delete Log||``: Clears your stored data so you can start fresh

In the next step, click the ``|Done|`` button to exit the tutorial.
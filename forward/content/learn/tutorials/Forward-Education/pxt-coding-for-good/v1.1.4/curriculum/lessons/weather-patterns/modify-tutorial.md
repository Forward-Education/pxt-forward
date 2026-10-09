# Smart Doorbell – Modify Tutorial

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
Q2:
Q3: */
```

## Smart Doorbell - Modify Tutorial @showdialog

In this tutorial, you will **modify** your Smart Doorbell to save energy, and add a doorbell to your log.

1. **Build**: Your Smart Doorbell is ready to modify

2. **Connect**: Pair your micro:bit and download the starter code

3. **Modify**: Add a new sensor and a new log column, and test your changes

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Smart Doorbell is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Investigate: How the Program Works

Take a look at the starter code in your workspace. Can you figure out what each part does?

~hint Tell Me More!

Motion is logged automatically with a light reading, and the ``||fwdLights:LED Ring||`` lights up any time motion is detected.

hint~

## Modify: Add the Doorbell

Right now, pressing the ``||fwdSensors:Touch Sensor||`` plays a ``||music:Tone||``, but nothing gets logged. Let's fix that.

Inside the ``||fwdSensors:Touch Sensor||``'s **up** event, add a ``Doorbell`` counter, and log it in its own row.

~hint Tell Me More!

Adding ``datalogger.log(datalogger.createCV("Doorbell", Doorbell))`` inside the same event that plays your doorbell sound means every time it rings, it's also recorded.

hint~

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Up, function () {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    // @highlight
    Doorbell += 1
    // @highlight
    datalogger.log(datalogger.createCV("Doorbell", Doorbell))
})
```

## Modify: Only Light Up When It's Dark

Your light currently turns on for any motion, day or night, even when there's already plenty of light.

Add a check for ``||fwdSensors:Is Past Threshold||`` on your ``||fwdSensors:Solar Light Level||``, combined with motion using ``||logic:And||``, so the light only turns on when it's genuinely dark.

~hint Tell Me More!

Checking **both** motion **and** low light means the light won't turn on unnecessarily during a bright day, only when it's actually needed.

hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.pir1.motionDetected() && fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        LightOn += 1
        datalogger.log(datalogger.createCV("LightOn", LightOn))
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Run: Try It in Daylight

``|Download|`` your code. Wave your hand in front of the ``||fwdSensors:PIR Motion||`` sensor somewhere bright.

Does the light turn on? Try it again somewhere dark.

~hint Tell Me More!

In bright light, the light should stay off, even with motion, since only one of your two conditions is true. In the dark, both conditions are met, and the light turns on.

hint~

## Investigate: Fewer Rows This Time

Compare how many ``LightOn`` rows appear now, to how many appeared in the Use tutorial's version, waving your hand in front of the ``||fwdSensors:PIR Motion||`` sensor for the same amount of time.

Why did adding a second condition change how much data gets logged?

~hint Tell Me More!

The light, and the log entry that comes with it, now only happens when it's actually dark. Fewer unnecessary triggers means a smaller, more meaningful log.

hint~

## Investigate: Energy, Not Just Light

Your light now only turns on when it's genuinely needed, motion **and** darkness together.

How is this similar to how real motion-sensor lights, like porch lights, are designed to save energy?

~hint Tell Me More!

A light that's always on uses power constantly, whether anyone needs it or not. Checking a condition first means a device only uses energy when it's genuinely useful, a real way computing technology can reduce its impact on natural resources.

hint~

## Modify: Change the Timestamp Format

Find ``||datalogger:Include Timestamp||`` in your code. Change it from **Seconds** to **Minutes**.

``|Download|`` your code again, since this change only takes effect after a fresh download.

~hint Tell Me More!

Changing the timestamp format doesn't change what data you collect, only how precisely each row's time is recorded.

hint~

## Investigate: See the Shape of Your Data

Unplug and reconnect your micro:bit, then open **MY_DATA** from the **MICROBIT** drive. Click **Preview**, and compare your **Seconds** version to your new **Minutes** version as a line graph.

Which timestamp format makes it easier to tell exactly when something happened? Which one might be harder to tell apart, two events close together?

~hint Tell Me More!

A line graph is only available when your log includes a timestamp, which is why changing timestamp format changes the graph too. Seconds gives more precise timing, useful for telling two close-together events apart. Minutes gives a simpler view, easier to read at a glance, but less exact.

hint~

## Reflect

In this tutorial, you **modified** your Smart Doorbell to save energy and log a doorbell. Record your answers in the workspace.

1. Why did combining two conditions with ``||logic:And||`` reduce how much data your device logged?

2. Would you rather have a log with Seconds or Minutes as your timestamp? Why?

3. Your log is stored right on this device. Who could read it if they picked it up, and what would they be able to learn?

## Congratulations!

You've completed this tutorial! Here's a summary of what you added:

- Doorbell: A new column, logged every time the ``||fwdSensors:Touch Sensor||`` is pressed

- ``||logic:And||``: Combines motion and darkness so the light only turns on when it's truly needed

- ``||datalogger:Include Timestamp||``: Changing the format trades precision for simplicity

- A graph view of your data, comparing two timestamp formats side by side

In the next step, click the ``|Done|`` button to exit the tutorial.
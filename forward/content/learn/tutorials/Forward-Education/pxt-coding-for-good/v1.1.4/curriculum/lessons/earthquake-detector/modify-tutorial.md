# Earthquake Detector – Modify Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
datalogger
```

```template
datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
fwdSensors.initializeLcd()
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
let strength = 0
let time = 0
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
})
/* Reflect:
Q1:
Q2:
Q3: */
```

## Earthquake Detector - Modify Tutorial @showdialog

In this tutorial, you will **modify** the code to change how often your Earthquake Detector samples the ground, and to add a rule-based alert for a big shake.

1. **Build**: Assemble the Earthquake Detector

2. **Connect**: Pair your micro:bit and download the starter code

3. **Modify**: Change the sampling rate and add a shake alert

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Earthquake Detector is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Explore: How the Program Works

Take a moment to look at the starter code in your workspace. Can you figure out what each part does?

~hint Tell Me More!

* The micro:bit's built in accelerometer feeds the ``||variables:Strength||`` **variable** every time the ``||basic:Forever||`` **loop** runs

* ``||datalogger:Log Data||`` and ``||datalogger:Include Timestamp||`` save each Strength reading to flash memory along with the time it happened

* The ``||fwdSensors:LCD Display||`` shows the current Strength and Time readings

* ``||input:On Button Pressed||`` (A+B) clears the saved data log, and ``||datalogger:On Log Full||`` shows an X icon once storage runs out of room

hint~

## Modify: Add a Pause Between Readings

Right now your ``||basic:Forever||`` loop samples as fast as the micro:bit can run it. Drag a ``||basic:Pause||`` block to the bottom of the loop, after the LCD lines, and set it to **1000 ms** (1 second).

~hint Tell Me More!

* A **variable** like ``||variables:Strength||`` can only hold one reading at a time. The ``||basic:Pause||`` block controls how often that reading gets replaced

* Without a pause, the loop samples hundreds of times per second, more than a seismic station needs

hint~

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
    // @highlight
    basic.pause(1000)
})
```

## Modify: Try a Different Sampling Rate

Change the ``||basic:Pause||`` value from 1000 to **2000** (2 seconds). Download your program, then tap the micro:bit sharply once and let go.

Does your Earthquake Detector catch that tap, or does it miss it?

~hint Tell Me More!

* At 2000 ms, the loop checks less often, so a quick tap has a better chance of happening in between checks and never getting recorded

* This is a real limit, not a mistake in your code: a slower sampling rate can only detect what is still happening the next time it looks

hint~

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
    // @highlight
    basic.pause(2000)
})
```

## Modify: Settle on a Sampling Rate

Change the ``||basic:Pause||`` value one more time to **5000** (5 seconds), slower than either rate you just tested. Keep it at 5000 for the rest of this tutorial.

~hint Tell Me More!

* 1000 ms and 2000 ms catch brief taps more reliably, but they also fill your data log faster

* 5000 ms is more likely to miss a very brief shake, but it keeps a full day of readings to a manageable size

* Real sensor stations make this same trade-off: sometimes a little less precision is worth the storage and battery you save

hint~

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
    // @highlight
    basic.pause(5000)
})
```

## Modify: Detect a Big Shake

Add an ``||logic:If||`` condition, called a **conditional**, right after the LCD lines and before the ``||basic:Pause||`` block. Set it to check whether ``||variables:Strength||`` is greater than **1500**. Inside it, add a ``||basic:Show Leds||`` block and fill in a full 5 by 5 grid.

~hint Tell Me More!

* This is a **rule-based** check: one fixed number decides whether the shake counts as big, no matter what the reading was a second ago

* Lighting every LED gives a clear, instant alert that a strong shake just happened

hint~

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
    // @highlight
    if (strength > 1500) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(5000)
})
```

## Modify: Show the All-Clear Pattern

Add an **else** branch to your conditional. Inside it, add a ``||basic:Show Leds||`` block with just the center dot lit.

~hint Tell Me More!

* Now your Earthquake Detector shows one pattern for a big shake and a different pattern when things are calm

* The ``||logic:If||`` **conditional** checks Strength every single time the loop runs, so the display always matches the most recent reading

hint~

```blocks
if (strength > 1500) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
// @highlight
} else {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
```

## Modify: Document Your Threshold

Right-click the ``||logic:If||`` block and choose **Add Comment**. Write one sentence explaining why you chose 1500, or change the number and explain your new choice.

~hint Tell Me More!

* A short comment lets you, a partner, or a teacher understand your reasoning later without re-testing everything from scratch

* There is no single correct threshold. A gentler shake test might call for a lower number, a rougher one for a higher number

hint~

```blocks
// Strength above 1500 counts as a big shake.
// @highlight
if (strength > 1500) {
```

## Modify: Test It With a Partner

Trade your Earthquake Detector with a partner. Without telling them your threshold, have them shake it at different strengths and predict, before each shake, whether the LEDs will show the alert pattern.

Ask your partner for one piece of feedback: does 1500 feel like the right number for a "big" shake, or should it be higher or lower?

~hint Tell Me More!

* Testing your threshold on someone else's shakes is a quick way to catch a number that only worked for your own hand

* This kind of feedback, checking your code against someone else's experience, is exactly what professional programmers do during code review

hint~

## Investigate: Sampling Trade-offs

**Investigate:** how does your sampling rate change what your seismic station can and can't detect?

~hint Tell Me More!

* A fast sampling rate, like 1 second, catches brief events but fills up the data log faster and uses more storage

* A slower sampling rate, like 5 seconds, saves storage but can miss a shake that starts and ends between checks

* Real seismic stations face this exact trade-off. Sudden events like earthquakes need fast sampling to catch them, while slower, gradual ground changes can be tracked with far less frequent readings

hint~

## Investigate: Two Ways to Detect a Shake

**Investigate:** why does this program use a rule-based check for an instant alert, but also keep logging raw Strength data for later analysis? When might each approach be better?

~hint Tell Me More!

* The rule-based ``||logic:If||`` conditional gives an immediate answer using one fixed number, useful when you need to react right away

* The raw data saved by ``||datalogger:Log Data||`` keeps every reading, so it can be studied later for patterns that a single fixed threshold would miss entirely, the kind of closer look a civil engineer uses to decide whether a structure needs reinforcement after an event.

hint~

## Reflect

In this tutorial, you **modified** a **variable** value and a **conditional** to change how your Earthquake Detector samples and responds to shaking. Record your answers to the questions below as code comments in the workspace.

1. Think about something in this project that was tricky. How did you figure it out?

2. How did solving that challenge make you feel?

3. What is one more thing you could do to improve your Earthquake Detector?

## Congratulations!

You've completed this tutorial! Here's a summary of what you changed:

- ``||basic:Pause||``: added and adjusted to control how often the program samples the accelerometer

- ``||logic:If||``: added a rule-based conditional that checks Strength against a threshold

- ``||basic:Show Leds||``: added two patterns, one for a big shake and one for calm

- Code comment: documented the reasoning behind your threshold value

In the next step, click the ``|Done|`` button to exit the tutorial.
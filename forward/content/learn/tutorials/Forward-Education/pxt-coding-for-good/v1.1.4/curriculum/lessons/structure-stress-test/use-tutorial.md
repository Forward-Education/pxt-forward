# Structure Stress Test – Use Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
function TableTrue () {
    tableOn = true
    shakeStart = input.runningTime()
    fwdSensors.lcd1.printLineString("Table On", 2)
}
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    TableTrue()
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    TableTrue()
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    tableOn = false
    shakeDuration = Math.round((input.runningTime() - shakeStart) / 1000)
    fwdSensors.lcd1.printLineString("Shook: " + shakeDuration + "s", 2)
})
function Shake () {
    fwdMotors.setSpeed(fwdBase.leftServo, 100)
    basic.pause(100)
    fwdMotors.setSpeed(fwdBase.leftServo, -100)
    basic.pause(100)
}
let tableOn = false
let shakeStart = 0
let shakeDuration = 0
fwdSensors.initializeLcd()
tableOn = false
fwdMotors.setSpeed(fwdBase.leftServo, 0)
basic.pause(1000)
basic.forever(function () {
    if (tableOn) {
        Shake()
    } else {
        fwdMotors.setSpeed(fwdBase.leftServo, 0)
    }
})
/* Reflect:
Q1:
Q2: */
```

## Structure Stress Test - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Stress Test works. You'll learn how the table turns on, shakes at a steady speed, and how to turn it off.

1. **Build**: Assemble the Structure Stress Test

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and control the table

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Structure Stress Test is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Identify: Components and Code

Look at your Structure Stress Test. This **program** uses:

* A ``||fwdButtons:Dial||`` that turns the table on when you rotate it, and off when you press it down

* A ``||fwdMotors:Continuous Servo Motor||`` that shakes the table at a fixed speed

* A ``||fwdSensors:LCD Display||`` that shows whether the table is on. Line 1 stays blank for now. It is reserved for a Strength reading you will add later

In the code, find the ``TableTrue`` and ``Shake`` **functions**. ``TableTrue`` is called from two different places. Where?

~hint Tell Me More!

* Both ``||fwdButtons:On Rotated||`` blocks call ``TableTrue``, one for clockwise and one for counterclockwise

* Instead of repeating the same two lines of code in both places, the program defines them once as a **function** and calls it twice

* ``Shake`` works the same way: the ``||basic:Forever||`` loop calls it instead of writing out the servo pattern directly inside the loop

hint~

## Explore: Predict the Display

Before unplugging, **predict:** what will the ``||fwdSensors:LCD Display||`` show before you have touched the dial at all?

## Explore: Observe the Program

Unplug your micro:bit from your computer and observe the ``||fwdSensors:LCD Display||``.

What shows on line 2, and has the table moved on its own?

~hint Tell Me More!

* Line 2 is blank. Nothing has printed to it yet, because its text only gets written when you rotate or press the ``||fwdButtons:Dial||``.

* The table has not moved, because ``||variables:tableOn||`` starts as false

hint~

## Predict: Turning the Table On

Find the ``TableTrue`` **function**.

```blocks
function TableTrue () {
    tableOn = true
    // @highlight
    shakeStart = input.runningTime()
    fwdSensors.lcd1.printLineString("Table On", 2)
}
```

**Predict:** what will the ``||fwdSensors:LCD Display||`` show the moment you turn the ``||fwdButtons:Dial||``, and what will the table start doing?

## Test Your Prediction

**Test** your prediction. Turn the ``||fwdButtons:Dial||`` in either direction.

What appeared on line 2, and what did the table start doing?

~hint Tell Me More!

* Table On appears right away, since turning the dial runs the ``TableTrue`` **function** immediately

* The table starts shaking back and forth, because the ``||basic:Forever||`` loop is now calling ``Shake`` on every pass

* ``TableTrue`` also quietly records the moment you started, in the ``||variables:shakeStart||`` **variable**. You will not see this on the display yet

hint~

## Predict: Turning the Table Off

Find the ``||fwdButtons:On Button Event||`` block that fires when you press the ``||fwdButtons:Dial||`` down.

```blocks
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    tableOn = false
    // @highlight
    shakeDuration = Math.round((input.runningTime() - shakeStart) / 1000)
    fwdSensors.lcd1.printLineString("Shook: " + shakeDuration + "s", 2)
})
```

**Predict:** what will line 2 show after you press the dial down to stop the table, compared to what it showed while the table was on?

## Test Your Prediction

**Test** your prediction. Let the table shake for a few seconds, then press the ``||fwdButtons:Dial||`` down.

What does line 2 show now?

~hint Tell Me More!

* Instead of Table On, you should see something like Shook: 4s

* That number came from subtracting the moment you started, ``||variables:shakeStart||``, from the moment you stopped

hint~

## Investigate: Why Two Functions?

**Investigate:** why does this program define ``TableTrue`` and ``Shake`` as separate **functions** instead of writing that code directly inside each event and inside the loop?

~hint Tell Me More!

* ``TableTrue`` is called from two different rotate events. Writing it once and reusing it means a future change only has to happen in one place

* ``Shake`` keeps the ``||basic:Forever||`` loop short enough to read at a glance, even though the servo pattern itself takes four lines

hint~

## Investigate: Data Needs Context

**Investigate:** why can't the program simply display how many seconds the table shook for, without first recording the moment it started?

~hint Tell Me More!

* A duration is not a reading you can take directly. It only exists as the difference between two moments in time

* ``||variables:shakeDuration||`` only means something because ``||variables:shakeStart||`` was recorded first. The second number needs the first one to be interpreted at all

hint~

## Reflect

In this tutorial, you used two **functions** and three **variables** to control your Structure Stress Test and time how long it shook. Record your answers to the questions below as code comments in the workspace.

1. Why does the program record the moment the table starts shaking instead of only recording the moment it stops?

2. Line 1 of the display is still blank. What's one thing you could show there if you added another sensor to this project?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``TableTrue``: a **function** that turns the table on and records the moment it started

- ``Shake``: a **function** that runs one back and forth servo pulse, called every time the ``||basic:Forever||`` loop repeats

- ``||fwdButtons:Dial||``: turns the table on when rotated, and off when pressed

- ``||variables:shakeDuration||``: calculated from the difference between a start time and a stop time

In the next step, click the ``|Done|`` button to exit the tutorial.

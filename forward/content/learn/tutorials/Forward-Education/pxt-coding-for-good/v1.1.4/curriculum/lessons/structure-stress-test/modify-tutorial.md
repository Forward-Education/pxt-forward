# Structure Stress Test – Modify Tutorial

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
Q2:
Q3: */
```

## Structure Stress Test - Modify Tutorial @showdialog

In this tutorial, you will **modify** the code so the dial controls how hard your Structure Stress Test shakes, not just whether it shakes at all. Real earthquakes come in different magnitudes, and a testing table that can only shake one way can only ever tell you about one kind of earthquake.

1. **Build**: Assemble the Structure Stress Test

2. **Connect**: Pair your micro:bit and download the starter code

3. **Modify**: Add speed control and move the shake timer

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Structure Stress Test is assembled and your micro:bit is plugged into your computer.

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

* ``TableTrue`` turns the table on and records the moment it started

* ``Shake`` runs one back and forth servo pulse at a fixed speed, called every time the ``||basic:Forever||`` **loop** repeats

* The ``||fwdButtons:On Button Event||`` handler turns the table off and calculates ``||variables:shakeDuration||``

hint~

## Modify: Add a Power Variable

Add a new **variable** called ``Power``, and set it to **0**. Then, inside ``Shake``, replace the fixed 100 and -100 values with ``Power`` and negative ``Power``.

~hint Tell Me More!

* Right now ``Shake`` always runs at the same speed no matter what. A **variable** lets that speed change while the program is running

* You will not feel a difference yet, since nothing sets ``Power`` to anything other than 0

hint~

```blocks
function Shake () {
    // @highlight
    fwdMotors.setSpeed(fwdBase.leftServo, Power)
    basic.pause(100)
    // @highlight
    fwdMotors.setSpeed(fwdBase.leftServo, -1 * Power)
    basic.pause(100)
}
```

## Modify: Add Speed Tiers

Inside ``TableTrue``, after ``shakeStart`` is set, add an ``||logic:If||`` condition, called a **conditional**, that checks ``Math.abs(fwdButtons.dial1.position())``. Build it out with an else if for each speed tier: 1 sets ``Power`` to 33 and shows "Speed 1", 2 sets ``Power`` to 66 and shows "Speed 2", and 3 or more sets ``Power`` to 100 and shows "Speed 3".

~hint Tell Me More!

* ``||fwdButtons:Position||`` counts how many clicks the dial has turned from where it started, in either direction

* ``Math.abs`` strips away the direction, so turning the dial clockwise or counterclockwise by the same amount counts as the same speed tier

* Each branch does two things: sets ``Power`` for ``Shake`` to use, and updates the message on the ``||fwdSensors:LCD Display||``

hint~

```blocks
function TableTrue () {
    tableOn = true
    shakeStart = input.runningTime()
    // @highlight
    if (Math.abs(fwdButtons.dial1.position()) == 1) {
        Power = 33
        fwdSensors.lcd1.printLineString("Speed 1", 2)
    } else if (Math.abs(fwdButtons.dial1.position()) == 2) {
        Power = 66
        fwdSensors.lcd1.printLineString("Speed 2", 2)
    } else if (Math.abs(fwdButtons.dial1.position()) >= 3) {
        Power = 100
        fwdSensors.lcd1.printLineString("Speed 3", 2)
    }
}
```

## Modify: Show Table Off When Centered

Add a final else branch to the same conditional. If the dial is back at its starting position, turn the table off and show "Table Off" instead of a speed.

~hint Tell Me More!

* This covers the one case none of the other branches catch: the dial has not been turned away from its starting position yet

* Setting tableOn to false here means the table actually stops, matching what the display says

hint~

```blocks
} else if (Math.abs(fwdButtons.dial1.position()) >= 3) {
    Power = 100
    fwdSensors.lcd1.printLineString("Speed 3", 2)
// @highlight
} else {
    tableOn = false
    fwdSensors.lcd1.printLineString("Table Off", 2)
}
```

## Modify: Move the Shake Timer

Line 2 of the ``||fwdSensors:LCD Display||`` is now busy showing the speed. Change the ``||fwdButtons:On Button Event||`` handler's ``||fwdSensors:Print Line String||`` block from line 2 to **line 1**.

~hint Tell Me More!

* Line 1 was left blank on purpose in the Use tutorial. Now it has a job: showing how long the table just shook for

hint~

```blocks
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    tableOn = false
    shakeDuration = Math.round((input.runningTime() - shakeStart) / 1000)
    // @highlight
    fwdSensors.lcd1.printLineString("Shook: " + shakeDuration + "s", 1)
})
```

## Modify: Mount a Structure

Download your updated program. With the table turned off, place a simple structure on the table, something like a small block tower, a cup, or a folded paper shape.

## Modify: Test All Three Speeds

Turn the dial to reach Speed 1, and watch your structure for a few seconds. Then turn it further to Speed 2, and then Speed 3, watching closely after each change.

At each speed, note what happens to your structure: does it stay still, wobble, lean, or fall over?

~hint Tell Me More!

* A structure that stays steady at Speed 1 might start to lean or wobble by Speed 3

* Write down what you saw at each speed, as a comment in your code or on paper. You will want this later when you compare different structure designs

* Press the ``||fwdButtons:Dial||`` down between tests to reset ``||variables:shakeDuration||`` and check how long each test ran

hint~

## Investigate: Three Speeds, One Function

**Investigate:** why does ``Shake`` still work correctly for all three speeds, even though you did not change a single line inside it?

~hint Tell Me More!

* ``Shake`` reads whatever value ``Power`` currently holds. It never needed to know where that value came from

* Because the speed logic lives in ``Power``, ``Shake`` stays a single, reusable **function** instead of needing a separate copy for each speed

hint~

## Investigate: A Number That Needs a Label

**Investigate:** if the ``||fwdSensors:LCD Display||`` only showed the number 66, without the word Speed 2 next to it, would that number mean anything to someone walking by?

~hint Tell Me More!

* 66 could be a speed, a temperature, a score, or nothing at all. The number alone carries no meaning

* The label next to it is what turns a bare number into information someone else could actually use

hint~

## Investigate: Testing at Different Magnitudes

**Investigate:** real earthquakes vary in magnitude, some mild, some severe. Based on what you just observed at Speed 1, 2, and 3, why is a Structure Stress Test with three speed tiers more useful for deciding on a safer building design than a table that could only shake one way?

~hint Tell Me More!

* If your structure held up at Speed 1 but wobbled or fell at Speed 3, a single fixed speed would have hidden that difference completely

* Testing across several magnitudes gives a much more complete picture of how a design performs before it's ever built at full scale

hint~

## Reflect

In this tutorial, you **modified** a **conditional** and a **variable** to give your Structure Stress Test three controllable speeds. Record your answers to the questions below as code comments in the workspace.

1. Think about something in this project that was tricky. How did you figure it out?

2. How did solving that challenge make you feel?

3. What is one more thing you could do to improve your Structure Stress Test?

## Congratulations!

You've completed this tutorial! Here's a summary of what you changed:

- ``Power``: added as a new **variable** that controls how fast ``Shake`` runs

- ``||logic:If||``: added a multi branch **conditional** that reads the dial's position and sets both ``Power`` and the display message

- ``||fwdSensors:Print Line String||``: moved the shake timer from line 2 to line 1 to make room for the speed display

In the next step, click the ``|Done|`` button to exit the tutorial.
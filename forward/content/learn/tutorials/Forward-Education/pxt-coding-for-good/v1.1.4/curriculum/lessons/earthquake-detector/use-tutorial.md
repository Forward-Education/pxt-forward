# Earthquake Detector – Use Tutorial

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

## Earthquake Detector - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Earthquake Detector works. Civil engineers need real data about vibration and ground movement to decide whether a building or structure can survive an earthquake. Your Earthquake Detector works the same way, using the micro:bit's accelerometer and a data log to record shaking strength and time together.

1. **Build**: Assemble the Earthquake Detector

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and explore the code

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Earthquake Detector is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Identify: Components and Code

Look at your Earthquake Detector. This **program** uses:

* The micro:bit's built in accelerometer, which senses how hard the board is being moved or shaken

* A ``||fwdSensors:LCD Display||`` that shows two readings at once

In the code, find the ``||variables:Strength||`` and ``||variables:Time||`` **variables** above the ``||basic:Forever||`` **loop**. What are they set to before the program starts running?

~hint Tell Me More!

* Both variables start at 0, since no readings have been taken yet

* They get a new value every time the ``||basic:Forever||`` loop runs

hint~

## Research: Look Up a Block

Right-click the ``||datalogger:Include Timestamp||`` block in your workspace and choose **Help**, or search "microbit datalogger include timestamp" in a search engine.

What unit of time can this block use to stamp each reading?

~hint Tell Me More!

* The MakeCode reference page for this block explains that ``||datalogger:Include Timestamp||`` can stamp readings in milliseconds, seconds, minutes, hours, or days

* This program uses milliseconds, so every logged row is stamped down to the millisecond

hint~

## Explore: Predict the Display

Before unplugging, **predict:** what numbers do you think the ``||fwdSensors:LCD Display||`` will show first.

## Explore: Observe the Program

Unplug your micro:bit from your computer and observe the ``||fwdSensors:LCD Display||``.

What two readings appear, and do they change without you touching anything?

~hint Tell Me More!

* You should see a Strength reading and a Time reading, both updating on their own

* This happens because the ``||basic:Forever||`` loop, called a **loop** because it repeats a set of instructions again and again, keeps running the same steps over and over

hint~

## Predict: Shaking the Device

Find the ``||input:Acceleration (Strength)||`` block inside the ``||basic:Forever||`` loop.

```blocks
basic.forever(function () {
    // @highlight
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
})
```

**Predict:** what will happen to the Strength number if you shake your Earthquake Detector hard, then hold it completely still?

## Test Your Prediction

**Test** your prediction. Shake your Earthquake Detector firmly for a few seconds, then hold it completely still. Watch the ``||fwdSensors:LCD Display||``.

What did the Strength number do in each case?

~hint Tell Me More!

* Shaking hard should push the Strength number up

* Holding still should bring the Strength number back down close to 0

hint~

## Predict: Watching Time Pass

Find the ``||input:Running Time||`` block inside the ``||basic:Forever||`` loop.

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    // @highlight
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
})
```

**Predict:** what will happen to the Time number the longer your Earthquake Detector keeps running, even if you never touch a button?

## Test Your Prediction

**Test** your prediction. Watch the ``||fwdSensors:LCD Display||`` for about 10 seconds without touching anything.

What happened to the Time number, and how often did it change?

~hint Tell Me More!

* The Time number should keep climbing on its own, counted in milliseconds since the program started

* Each new number is one more trip through the ``||basic:Forever||`` loop, so the pattern of updates shows you how often the program is sampling

hint~

## Explore: View Your Logged Data

Reconnect your Earthquake Detector to your computer with the USB cable. It will appear as a USB drive named **MICROBIT**.

Open the file named **MY_DATA** from that drive in a web browser.

What are the names of the two columns in the table, and which one is the metadata rather than the sensor reading itself?

~hint Tell Me More!

* Your table has a Strength column, the sensor reading, and a Time column, the metadata

* Because a timestamp column is present, MY_DATA can even plot your readings as a line graph over time

hint~

## Investigate: Recording More Than a Number

**Investigate:** how does the program record not just a sensor value, but the metadata needed to interpret it later?

~hint Tell Me More!

* Every time the program logs a Strength value with ``||datalogger:Log Data||``, the ``||datalogger:Include Timestamp||`` setting stamps that row with the exact moment it was recorded

* A Strength number by itself cannot tell you when the shaking happened; pairing it with a timestamp turns a single value into data that can actually be interpreted later

hint~

## Investigate: What the Ground Is Telling You

Using your Strength and Time readings as evidence, how could data like this help a civil engineer decide whether a structure built at this location needs extra reinforcement to survive an event like an earthquake or a landslide?

~hint Tell Me More!

* Real earthquake detectors log ground motion the same way your Earthquake Detector logs Strength, as a continuous stream of readings stamped with time

* Comparing Strength values across many rows lets a civil engineer find the exact moment shaking peaked and how long it lasted, evidence they use to decide how strong a structure's foundation needs to be

* Some geoscience processes, like earthquakes, happen suddenly. Others, like slow ground settling, happen gradually over days. A timestamped log can capture both kinds of change, information a civil engineer needs before deciding how to design for a location's risk

hint~

## Reflect

In this tutorial, you used a **loop** and a **variable** to repeatedly sample shaking intensity and store each reading together with the time it happened, like a simplified seismograph. Record your answers to the questions below as code comments in the workspace.

1. Why does the program store a timestamp with every Strength reading instead of saving just the number by itself?

2. What is one other piece of information the program could log alongside Strength and Time to make the data even more useful?

3. How would a civil engineer use logged Strength and Time evidence like yours to decide whether a structure at that location needs to be reinforced?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||basic:Forever||``: repeatedly reads the accelerometer and the running time, then logs and displays both

- ``||fwdSensors:LCD Display||``: shows the current Strength and Time readings

- ``||datalogger:Log Data||``: saves each Strength reading to flash memory along with a timestamp

- ``||input:On Button Pressed||`` (A+B): clears the saved data log

- ``||datalogger:On Log Full||``: shows an X icon once flash storage runs out of room

In the next step, click the ``|Done|`` button to exit the tutorial.
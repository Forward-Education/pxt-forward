# Fire Alarm – Use Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
basic.forever(function () {
    if (fwdSensors.temperature1.isPastThreshold(30, fwdEnums.OverUnder.Over)) {
        for (let index = 0; index < 3; index++) {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Quarter))
        }
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        music.rest(music.beat(BeatFraction.Breve))
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})

/* Reflect:
Q1:
Q2: */
```

## Fire Alarm - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Fire Alarm works.

1. **Build**: Assemble your Fire Alarm

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and explore the code

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Fire Alarm is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Predict & Run: How Does This Program Work?

Look at the code in your workspace. What do you think will happen when you download it?

``|Download|`` your code and try it out! Warm the ``||fwdSensors:Temperature Probe||`` with your hands to test it.

~hint Tell Me More!

Your Fire Alarm keeps checking the temperature. While it's cool, the ``||fwdLights:LED Ring||`` stays off. Once it gets warm enough, the ring flashes red three times with a beep, then turns white for a moment before checking again.

hint~

## Identify: Selection

**Selection** means the program checks something before deciding what to do.

Look at the ``||logic:If||`` block. What does it check? What happens if that check is false?

~hint Tell Me More!

It checks whether the ``||fwdSensors:Temperature Probe||`` reading is over 30°C. If true, the alarm sounds. If false, the ``||logic:Else||`` branch runs instead, and the ``||fwdLights:LED Ring||`` simply turns off.

hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.temperature1.isPastThreshold(30, fwdEnums.OverUnder.Over)) {
        for (let index = 0; index < 3; index++) {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Quarter))
        }
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        music.rest(music.beat(BeatFraction.Breve))
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Identify: Iteration

**Iteration** means the program keeps repeating the same steps.

Which part of your code uses **iteration** to keep checking the temperature, over and over, without ever stopping?

~hint Tell Me More!

The ``||basic:Forever||`` **loop** never stops checking the ``||fwdSensors:Temperature Probe||``. As long as your micro:bit has power, it keeps testing whether it's time to sound the alarm.

hint~

```blocks
// @highlight
basic.forever(function () {
    if (fwdSensors.temperature1.isPastThreshold(30, fwdEnums.OverUnder.Over)) {
        for (let index = 0; index < 3; index++) {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Quarter))
        }
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        music.rest(music.beat(BeatFraction.Breve))
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Investigate: Why Repeat the Alert Three Times?

Inside your ``||logic:If||`` branch is a second loop, one that repeats exactly **3** times.

Why do you think the alarm flashes and beeps three times, instead of just once?

~hint Tell Me More!

A single flash could be missed. Repeating the alert three times makes it much more likely someone notices, without needing to write the same flash-and-beep instructions out three separate times.

hint~

## Investigate: Finding the Right Threshold

Your Fire Alarm triggers at 30°C. Real heat detectors often trigger closer to 57°C, hot enough that only an actual fire could reach it.

Test your ``||fwdSensors:Temperature Probe||`` in three cups of water: cold, room temperature, and warm tap water (not boiling). Record whether your alarm triggers each time.

Why do you think this activity uses a much lower number than a real device would? Based on your three tests, does 30°C reliably separate "safe" from "alert"?

~hint Tell Me More!

30°C is warm enough to reach safely with just warm tap water, so you can test your program in class. A real device uses a much higher threshold, so it's never confused by body heat or a warm room.

Your cold and room-temperature cups should stay off, while your warm cup should trigger the alarm. If it doesn't behave this way, that's a real debugging moment, the threshold value itself might need adjusting.

hint~

## Investigate: Energy on the Move

Watch your Fire Alarm go off. What evidence can you observe that electrical energy is transferring into something else?

~hint Tell Me More!

Every time your alarm sounds, you can observe two kinds of evidence: the ``||fwdLights:LED Ring||`` lighting up is light energy, and the beep is sound energy. Both come from the same electrical energy stored in your micro:bit's battery, released the moment your ``||fwdSensors:Temperature Probe||`` crosses the threshold.

hint~

## Reflect

In this tutorial, you used **selection** and **iteration** to build a Fire Alarm that decides when to sound an alert. Record your answers in the workspace.

1. Why does your Fire Alarm turn completely off, instead of just staying quiet, when the temperature is below the threshold?

2. If you built this for a real garage or attic, what temperature would you choose, and why?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||basic:Forever||``: A **loop** that keeps checking the ``||fwdSensors:Temperature Probe||`` without ever stopping

- ``||logic:If||``: Uses **selection** to decide whether the temperature has crossed the threshold

- The inner loop: repeats the flash-and-beep alert 3 times, so it's hard to miss

- ``||fwdLights:LED Ring||`` and speaker: Both driven by the same electrical energy, released the moment your alarm goes off

In the next step, click the ``|Done|`` button to exit the tutorial.
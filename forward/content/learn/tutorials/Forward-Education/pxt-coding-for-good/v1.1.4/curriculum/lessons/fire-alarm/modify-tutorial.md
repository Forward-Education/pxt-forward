# Fire Alarm – Modify Tutorial

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
Q2:
Q3: */
/* Truth Table:
Probe Ambient Alarm?
False, False: 
False, True: 
True, False: 
True, True: 
*/
```

## Fire Alarm - Modify Tutorial @showdialog

In this tutorial, you will **modify** your Fire Alarm to check two sensors together, so it's harder to fool with a false alarm.

1. **Build**: Add an ambient temperature sensor to your Fire Alarm

2. **Connect**: Pair your micro:bit and download the starter code

3. **Modify**: Combine two sensors and test your changes

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Fire Alarm is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Investigate: How the Program Works

Take a look at the starter code in your workspace. Can you figure out what each part does?

~hint Tell Me More!

Your ``||fwdSensors:Temperature Probe||`` checks the temperature, and your ``||logic:If||`` decides whether to sound the alarm. Right now, only the probe controls it.

hint~

## Modify: Add the Ambient Sensor Check

Real fire alarms often check more than one sensor before sounding, so a single warm spot can't trigger a false alarm on its own.

Change your ``||logic:If||`` so it checks **two** things instead of one: your ``||fwdSensors:Temperature Probe||`` reading is 30 or more, **or** the micro:bit's own onboard temperature is 30 or more.

~hint Tell Me More!

``||input:Temperature||`` reads the temperature of the micro:bit itself, separate from your probe. Combining it with ``||logic:Or||`` means the alarm sounds if **either** sensor reads 30 or higher.

hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.temperature1.temperature() >= 30 || input.temperature() >= 30) {
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

## Run: Try It

``|Download|`` your code. Warm your ``||fwdSensors:Temperature Probe||`` in a cup of warm water, but keep the rest of your micro:bit at normal room temperature.

Does your alarm trigger? Is that what you expected?

~hint Tell Me More!

Your alarm should trigger, even though only the probe is actually warm. With ``||logic:Or||``, only **one** sensor needs to cross 30 for the whole thing to sound.

hint~

## Investigate: Why Did That Trigger?

A real heat detector is valued because it's hard to fool. Right now, your Fire Alarm sounds if just one sensor reads warm, even if the rest of the room is completely normal.

Why might that be a problem for a real safety device? What could cause just one sensor to read warm, without an actual fire happening?

~hint Tell Me More!

A hand resting near the sensor, direct sunlight, or a warm room could all warm up just one sensor without any real danger. Using ``||logic:Or||`` means any one of these could set off a false alarm.

hint~

## Modify: Switch to AND

Let's make your Fire Alarm harder to fool. Change ``||logic:Or||`` to ``||logic:And||``.

~hint Tell Me More!

With ``||logic:And||``, **both** sensors must read 30 or higher at the same time before the alarm sounds. One warm sensor alone is no longer enough.

hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.temperature1.temperature() >= 30 && input.temperature() >= 30) {
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

## Run: Try It Again

``|Download|`` your code. Warm just the ``||fwdSensors:Temperature Probe||`` again, keeping the rest of your micro:bit at room temperature.

Does your alarm trigger this time?

~hint Tell Me More!

It shouldn't! With ``||logic:And||``, warming only one sensor isn't enough anymore. Both the probe and the onboard temperature need to cross 30 at the same time.

hint~

## Modify: Two Ways to Check a Threshold

Your ``||fwdSensors:Temperature Probe||`` check currently reads ``temperature() >= 30``. There's another way to write the exact same check: ``||fwdSensors:Is Past Threshold||``.

Change your probe's check to use ``||fwdSensors:Is Past Threshold||`` set to 30, Over, instead of ``>= 30``.

~hint Tell Me More!

Both versions do exactly the same job, checking if the reading has crossed 30. ``||fwdSensors:Is Past Threshold||`` just says it in a way that reads a little more clearly: "is this sensor past its threshold?"

hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.temperature1.isPastThreshold(30, fwdEnums.OverUnder.Over) && input.temperature() >= 30) {
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

## Modify: Document Your Logic

Right-click your ``||logic:If||`` block and choose **Add Comment**. Write one sentence explaining why your alarm needs both sensors to agree before it sounds.

~hint Tell Me More!

A short comment helps you, a partner, or a teacher understand your reasoning later, without needing to re-test everything from scratch.

hint~

```blocks
// Both sensors must read 30 or higher before the alarm sounds, so one warm spot can't trigger a false alarm.
// @highlight
if (fwdSensors.temperature1.isPastThreshold(30, fwdEnums.OverUnder.Over) && input.temperature() >= 30) {
```

## Investigate: The Truth Table

A truth table lists every possible true/false combination of two conditions, and shows what a program should do for each one.

Find the **Truth Table** comment near the top of your workspace. With a partner, fill in the Alarm? column for each row, right there in the comment.

~hint Tell Me More!

With ``||logic:And||`` logic, only one row actually triggers the alarm, both conditions must be true at once:

- False, False: No
- False, True: No
- True, False: No
- True, True: **Yes**

hint~

## Reflect

In this tutorial, you **modified** your Fire Alarm to combine two sensors, so it's harder to fool with a false alarm. Record your answers in the workspace.

1. Why did your alarm trigger a false alarm when you used ``||logic:Or||``, but not when you switched to ``||logic:And||``?

2. Your probe's check now uses ``||fwdSensors:Is Past Threshold||`` instead of ``>= 30``. Why might one of these be easier for someone else to read than the other?

3. What is one more sensor you could add to make your Fire Alarm even harder to fool, and what condition would it need to check?

## Congratulations!

You've completed this tutorial! Here's a summary of what you changed:

- ``||input:Temperature||``: A second sensor, checking the micro:bit's own onboard temperature

- ``||logic:And||``: Uses **selection** to require both sensors to agree before the alarm sounds

- ``||fwdSensors:Is Past Threshold||``: A second way to write the same threshold check as ``>= 30``

- Code comment: Documents why both sensors need to agree

In the next step, click the ``|Done|`` button to exit the tutorial.
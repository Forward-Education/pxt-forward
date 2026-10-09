# Beat Box – Modify Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    music.changeTempoBy(20)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    music.changeTempoBy(-20)
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    music.setTempo(200)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (On) {
        On = false
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    } else {
        On = true
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    }
})
let On = false
music.setTempo(200)
On = true
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.forever(function () {
    if (On) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
    }
})
loops.everyInterval(5000, function () {
    if (On) {
    	
    }
})

/* Reflect:
Q1:
Q2:
Q3:
Q4:
Q5: */
```

## Beat Box - Modify Tutorial @showdialog

In this tutorial, you will **modify** your Beat Box to add a new sound layer that reacts to how close your hand is, using the sonar sensor.

1. **Build**: Assemble your Beat Box

2. **Connect**: Pair your micro:bit and download the starter code

3. **Modify**: Add a distance-controlled layer and test it

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Beat Box is assembled, including the sonar sensor, and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Investigate: How the Program Works

Take a look at the starter code. Your ``||basic:Forever||`` loop plays a steady kick-kick-hi-hat beat, and the ``||fwdButtons:Dial||`` changes its tempo.

There is also a new, empty ``||loops:Every 5000 ms||`` loop at the bottom. What do you think a second loop like that could let you do?

~hint Tell Me More!

The ``||basic:Forever||`` loop keeps your beat going. The empty ``||loops:Every 5000 ms||`` loop is a **second loop** that runs on its own timer, every 5 seconds, at the same time as your beat. You will use it to add a new sound layer.

hint~

## Modify: A Loop on a Timer

Your two loops will run at the same time: the ``||basic:Forever||`` beat, and the ``||loops:Every 5000 ms||`` layer.

Inside the ``||loops:Every 5000 ms||`` loop, the ``||logic:If On||`` check is already there, so your layer only plays when the beat is on.

~hint Tell Me More!

Running the layer in its own loop is what lets it play *without* interrupting your beat. Two separate loops can run side by side, each on its own schedule.

hint~

## Modify: Sense the Distance

Now let's use the sonar sensor to decide what the layer does.

Inside the ``||loops:Every 5000 ms||`` loop's ``||logic:If On||``, add an ``||logic:If||`` that checks: is the sonar distance past **0.2, Under** (a hand is close)?

~hint Tell Me More!

The sonar measures distance in **metres**, so 0.2 means about 20 cm. "Under 0.2" means something is within 20 cm, like your hand.

hint~

```blocks
loops.everyInterval(5000, function () {
    if (On) {
        // @highlight
        if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {

        }
    }
})
```

## Modify: Layer the Sounds

Give your close condition a sound and colour, played **in background** so your beat keeps going: play a high sound and set the ``||fwdLights:LED Ring||`` to cyan.

``|Download|`` your code. Hold your hand close, then pull it far away. What happens?

~hint Tell Me More!

When your hand is close, you'll hear the sound and see cyan. When it's far away, nothing happens at all, there's no code yet for what to do when nothing's close.

hint~

```blocks
loops.everyInterval(5000, function () {
    if (On) {
        if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
            // @highlight
            music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            // @highlight
            fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
        }
    }
})
```

## Modify: Add the Far Case

Add an ``||logic:Else if||`` that checks if the sonar distance is past **0.2, Over** (nothing close). Play a low sound and set the ``||fwdLights:LED Ring||`` to red.

``|Download|`` and test again, close and far.

~hint Tell Me More!

Now both cases are covered. Testing revealed the missing case, without trying "far away" on purpose, you might not have noticed it was never handled.

hint~

```blocks
loops.everyInterval(5000, function () {
    if (On) {
        if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
            music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
        // @highlight
        } else if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Over)) {
            // @highlight
            music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            // @highlight
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    }
})
```

## Run: Wave to Layer

Watch and listen. Every 5 seconds, hold your hand close to the sonar, then pull it away.

What happens to the sound and the ``||fwdLights:LED Ring||`` each time?

~hint Tell Me More!

Every 5 seconds the layer checks the sonar once. Hand close: a high sound and a cyan ring. Space clear: a low sound and a red ring. Your beat keeps going the whole time.

hint~

## Investigate: Does This Work for Everyone?

Test your 0.2 metre threshold with a few different people, different heights, arm lengths, or seated versus standing.

Does everyone trigger the "close" sound equally easily? If not, how would you change how you test your device to make sure it works well for people with different reach or mobility?

~hint Tell Me More!

A single threshold assumes everyone reaches the same way. Testing with different people is how you'd catch a design that quietly works better for some than others.

hint~

## Investigate: Why a Second Loop?

Your layer lives in its own ``||loops:Every 5000 ms||`` loop and plays its sound **in background**.

What do you think would happen to your beat if you put this same sound inside the ``||basic:Forever||`` loop using "play until done" instead?

~hint Tell Me More!

It would interrupt your beat. "Play until done" pauses everything until the sound finishes, so your steady beat would stutter every time the layer played. A separate loop plus "in background" keeps both running smoothly.

hint~

## Modify: Change the Timer

Change the ``||loops:Every 5000 ms||`` value to a smaller number, like **1000**. ``|Download|`` and test.

How does the layer feel now, compared to every 5 seconds?

~hint Tell Me More!

At 1000 ms the layer checks the sonar every second, so it reacts to your hand much faster and repeats more often. A bigger number makes it a slow, occasional accent; a smaller number makes it a quick, responsive layer.

hint~

## Reflect

In this tutorial, you **modified** your Beat Box by adding a second loop that layers a sonar-controlled sound on top of your beat. Record your answers in the workspace.

1. Why does keeping the beat and the layer in two separate loops let both play at the same time?

2. You played the layer "in background" instead of "until done." What would "until done" have done to your beat?

3. The sonar distance is a small number like 0.2. What does 0.2 mean, and how did you choose your threshold?

4. How did changing the timer from 5000 to 1000 change how your Beat Box feels?

5. What is one more layer or rule you would add if you kept building this, and what would control it?

6. Why did testing with your hand far away, on purpose, matter before you'd added the far case?

## Congratulations!

You've completed this tutorial! Here's a summary of what you added:

- ``||loops:Every 5000 ms||``: a second **loop** that layers a sound on its own timer, in parallel with your beat

- ``||fwdSensors:Sonar||``: senses how close your hand is and chooses which layer plays

- ``||logic:If / Else If||``: **selection** that picks the close sound or the clear sound

- ``||music:Play Sound in Background||``: lets the layer play without stopping the beat

- ``||fwdLights:LED Ring||``: cyan when a hand is near, red when the space is clear

In the next step, click the ``|Done|`` button to exit the tutorial.
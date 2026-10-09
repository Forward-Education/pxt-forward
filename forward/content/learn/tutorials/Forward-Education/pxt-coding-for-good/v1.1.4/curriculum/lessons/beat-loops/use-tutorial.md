# Beat Box – Use Tutorial

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

/* Reflect:
Q1:
Q2: */
```

## Beat Box - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Beat Box works.

1. **Build**: Assemble your Beat Box

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and explore the code

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Beat Box is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Predict & Run: How Does This Program Work?

Look at the code in your workspace. What do you think will happen when you download it to your micro:bit?

``|Download|`` your code and try it out!

~hint Tell Me More!

When your program starts, ``||variables:On||`` is already set to true, so your Beat Box starts playing right away: the ``||fwdLights:LED Ring||`` glows white, and a steady kick-kick-hi-hat beat repeats over and over.

hint~

## Predict & Run: Turning the Dial

Try turning the ``||fwdButtons:Dial||`` one way. What do you think will happen?

~hint Tell Me More!

Turning the ``||fwdButtons:Dial||`` changes your beat's tempo, using ``||music:Change Tempo By||``. Turning it one way speeds the beat up, the other way slows it down.

hint~

## Investigate: The Dial Button

What happens when you press the ``||fwdButtons:Dial Button||``? Why? What is this an example of?

~hint Tell Me More!

Pressing the ``||fwdButtons:Dial Button||`` resets your tempo back to 200, using ``||music:Set Tempo||``. This is an example of an **event**, code that only runs the moment something specific happens, like a button press.

hint~

## Predict & Run: Touching the Logo

What happens to the ``||fwdLights:LED Ring||`` when you press the micro:bit logo?

~hint Tell Me More!

Touching the logo flips ``||variables:On||`` from true to false, or false back to true. The ``||fwdLights:LED Ring||`` turns off when you touch it while it's on, and turns back on if you touch it again.

hint~

## Identify: Iteration

**Iteration** means the program keeps repeating the same steps.

Which part of your code uses **iteration**?

~hint Tell Me More!

The ``||basic:Forever||`` **loop** keeps playing the same three sounds, over and over, for as long as ``||variables:On||`` is true. You already heard this repeating when you first ran your program.

hint~

```blocks
// @highlight
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
```

## Investigate: Watch It Loop

Your ``||basic:Forever||`` loop plays the same three sounds over and over, without you writing them out more than once.

Watch your Beat Box for 10 seconds. How many times does the full kick-kick-hi-hat pattern repeat?

~hint Tell Me More!

The exact number depends on your tempo, a faster tempo means more repeats in the same 10 seconds. That's the power of a loop: one small set of instructions can repeat as many times as needed, without you ever writing the same code twice.

hint~

## Identify: Selection and Sequence

**Selection** means the program checks something before deciding what to do. **Sequence** means it runs steps in order, one after another.

Look at the ``||basic:Forever||`` loop. What does it check before playing the beat? What order do the three sounds play in?

~hint Tell Me More!

The ``||logic:If||`` block checks ``||variables:On||`` first, that's **selection**. If it's true, the program plays three sounds in this **sequence**:

1. A kick sound, then a rest

2. A second kick sound, then a rest

3. A hi-hat sound, then a longer rest

hint~

```blocks
basic.forever(function () {
    // @highlight
    if (On) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
    }
})
```
## Investigate: Sound and Light Together

Your Beat Box makes both sound and light. Where does the energy for each come from?

~hint Tell Me More!

Both come from the same electrical energy: the micro:bit's speaker turns it into sound energy, and the ``||fwdLights:LED Ring||`` turns it into light energy. One power source, two kinds of output energy.

hint~

## Investigate: Loops by Hand

Before code, musician Delia Derbyshire made loops by hand: she recorded a sound onto tape, then cut it and glued the ends into a circle so it played over and over. She built the original Doctor Who theme this way.

Your ``||basic:Forever||`` loop repeats your beat the same way. What does your code do automatically that Delia had to do by hand with scissors and tape?

~hint Tell Me More!

Delia's taped loop and your ``||basic:Forever||`` loop do the same job: repeat a sound without redoing the work each time. She cut and glued tape by hand; your code repeats the steps for you, and you can change the tempo instantly with the ``||fwdButtons:Dial||``.

hint~

## Investigate: The Shape of a Sound

Electronic musicians like Delia change how music *feels* by choosing different **sound waves**. Your beat does the same thing. Look closely at the ``||music:Play Sound||`` blocks inside your ``||basic:Forever||`` loop.

What **wave shape** does each sound use? How does the kick feel different from the hi-hat?

~hint Tell Me More!

Your two kicks use a **Square** wave, which sounds solid and punchy. Your hi-hat uses a **Noise** wave, which sounds like a burst of static, sharp and rattly. Different wave shapes create different feelings, even at the same volume, that is how electronic music sets a mood.

hint~

## Investigate: Why Does Software Decide?

Your ``||fwdButtons:Dial||`` only reports a direction, clockwise or counterclockwise. Why does the tempo change by exactly 20 each time, instead of some other amount?

~hint Tell Me More!

The dial itself doesn't know anything about music or tempo, it just reports which way it turned. Software, the code you wrote, decides what that direction means, in this case, changing the tempo by 20.

hint~

## Reflect

In this tutorial, you used an **event**, **iteration**, **selection**, and **sequence** to build a Beat Box that keeps time and responds to the dial. Record your answers in the workspace.

1. When you touch the logo, the light turns off right away, but the beat finishes the pattern it's in the middle of before going quiet. Why do you think the light and the sound stop at different times?

2. What kind of song or mood do you think this beat sounds like? What would you change to make it sound different?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||fwdButtons:Dial Button||``: An **event** that resets the tempo back to 200 the moment you press it

- ``||basic:Forever||``: A **loop** that repeats the same three sounds, using **selection** to check if the beat is on

- ``||fwdButtons:Dial||``: Changes tempo in real time as you turn it

- ``||variables:On||``: Stores whether your Beat Box is playing or silent

- ``||input:On Logo Event||``: an event that turns the beat and light on or off when you touch the logo

In the next step, click the ``|Done|`` button to exit the tutorial.
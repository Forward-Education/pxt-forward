# Theremin – Modify Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (SoundOn) {
        SoundOn = false
        basic.showIcon(IconNames.No)
    } else {
        SoundOn = true
        basic.showIcon(IconNames.EighthNote)
    }
})
let SoundOn = false
let Pitch = 0
basic.showIcon(IconNames.EighthNote)
SoundOn = true
basic.forever(function () {
    Pitch = Math.map(fwdSensors.sonar1.distance(), 0, 0.5, 262, 523)
    if (SoundOn && fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        music.ringTone(Pitch)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        music.stopAllSounds()
    }
})

/* Reflect:
Q1:
Q2: */
```

## Theremin Machine - Modify Tutorial @showdialog

In this tutorial, you will **modify** your Theremin Machine so the dial switches between two different sound effects.

1. **Build**: Assemble your Theremin Machine

2. **Connect**: Pair your micro:bit and download the starter code

3. **Modify**: Add a new sound effect and test your changes

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Theremin Machine is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Investigate: How the Program Works

Take a look at the starter code in your workspace. Can you figure out what each part does?

~hint Tell Me More!

Your ``||fwdButtons:Dial Button||`` turns the sound on or off. Your ``||basic:Forever||`` loop checks your hand's distance, and plays a pitch with ``||music:Ring Tone||`` when your hand is close enough.

hint~

## Modify: Add an Effect Variable

Add a new **variable** called ``||variables:Effect||``, and set it to **false**. Then, right where ``||variables:SoundOn||`` gets set to true near the top of your program, also set ``||variables:Effect||`` to **true**.

~hint Tell Me More!

``||variables:Effect||`` will store which sound effect is currently selected, true for a new effect you're about to build, false for the plain pitch you already have working.

hint~

## Modify: Turn the Dial into a Switch

Your ``||fwdButtons:Dial||`` hasn't been used yet in this project. Let's give it a job.

Add two ``||fwdButtons:On Rotated||`` events:

1. When the ``||fwdButtons:Dial||`` turns **clockwise**, set ``||variables:Effect||`` to **true**

2. When it turns **counterclockwise**, set ``||variables:Effect||`` to **false**

``|Download|`` your code, and turn the dial. What do you notice?

~hint Tell Me More!

Nothing about the sound changes yet, even though ``||variables:Effect||`` is now flipping between true and false. That's because your ``||basic:Forever||`` loop doesn't check ``||variables:Effect||`` for anything yet.

hint~

```blocks
// @highlight
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    Effect = true
})
// @highlight
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    Effect = false
})
```

## Modify: Add the Wave Effect

Now let's make ``||variables:Effect||`` actually do something. Inside your ``||basic:Forever||`` loop, where you play the pitch, add an ``||logic:If||`` ``||logic:Else||`` that checks ``||variables:Effect||``:

- If **true**, use a ``||music:Play Sound||`` block with a **Square** wave shape, and set the ``||fwdLights:LED Ring||`` to blue

- If **false**, keep your original ``||music:Ring Tone||`` block, and set the ``||fwdLights:LED Ring||`` to green, exactly like before

~hint Tell Me More!

``||music:Ring Tone||`` always plays a smooth, simple tone. A ``||music:Play Sound||`` block with a **Square** wave shape sounds buzzier and more electronic, a completely different wave shape making a completely different sound, at the exact same pitch.

hint~

```blocks
basic.forever(function () {
    Pitch = Math.map(fwdSensors.sonar1.distance(), 0, 0.5, 262, 523)
    if (SoundOn && fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
        // @highlight
        if (Effect) {
            music.play(music.createSoundExpression(WaveShape.Square, Pitch, Pitch, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            fwdLights.ledRing1.setAllPixelsColor(0x007fff)
        } else {
            music.ringTone(Pitch)
            fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        music.stopAllSounds()
    }
})
```

## Run: Try It Again

``|Download|`` your code. Move your hand close, then turn the dial back and forth.

What changes each time you turn the dial?

~hint Tell Me More!

Turning the dial one way switches to a buzzy Square wave sound with a blue ring. Turning it the other way switches back to your original smooth tone with a green ring. The pitch stays controlled by your hand the whole time, only the wave shape changes.

hint~

## Investigate: Comparing Two Sounds

You now have two ways to turn distance into sound: your original ``||music:Ring Tone||``, and the new Square wave effect.

Ask three or four classmates to listen to both sounds, and tell you which one they prefer, and why. Keep track of their answers.

~hint Tell Me More!

There's no single right answer! A smooth tone can make small pitch changes easier to notice. A buzzier wave shape can feel more dramatic, but harder to hear precise changes in.

hint~

## Investigate: Did Everyone Agree?

Look at what your classmates told you.

Did everyone prefer the same sound? If people disagreed, what might explain the difference, hearing sensitivity, music taste, or something else entirely?

~hint Tell Me More!

Different people often experience the same sound differently. Collecting a few opinions, instead of just deciding alone, is one way to notice patterns, or disagreements, you might have missed on your own.

hint~

## Investigate: Why Two Wave Shapes?

Every sound is a wave, and different wave shapes create different sounds, even when they're playing the exact same pitch.

Why do you think a Square wave sounds so different from the smooth tone ``||music:Ring Tone||`` makes, even at the same pitch?

~hint Tell Me More!

Pitch depends on wavelength, how long each wave is. But a wave's **shape**, whether it rises and falls smoothly or jumps sharply up and down, changes how the sound feels, even when the wavelength, and so the pitch, stays exactly the same.

hint~

## Reflect

In this tutorial, you **modified** your Theremin Machine to add a new **variable** and a new **event**, giving the dial control over which wave shape plays. Record your answers in the workspace.

1. Why didn't anything happen the first time you turned the dial, before you finished this tutorial?

2. Did your classmates agree on which sound they preferred? What do you think that shows?

3. If you added a third wave shape, what would you want it to sound like, and when would you want to hear it?

## Congratulations!

You've completed this tutorial! Here's a summary of what you changed:

- ``||variables:Effect||``: A new **variable** that stores which wave shape is selected

- ``||fwdButtons:On Rotated||``: A new **event** that lets the ``||fwdButtons:Dial||`` switch effects

- ``||logic:If||``: Uses **selection** to choose between a Square wave and your original tone

- ``||fwdLights:LED Ring||``: Now shows blue, green, or red, depending on the sound and distance

In the next step, click the ``|Done|`` button to exit the tutorial.
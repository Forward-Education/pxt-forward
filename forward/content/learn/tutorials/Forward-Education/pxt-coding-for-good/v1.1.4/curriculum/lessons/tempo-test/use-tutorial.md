# Theremin – Use Tutorial

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

## Theremin Machine - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Theremin Machine works.

1. **Build**: Assemble your Theremin Machine

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and explore the code

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Theremin Machine is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Predict & Run: How Does This Program Work?

Look at the code in your workspace. What do you think will happen when you download it?

``|Download|`` your code and try it out!

~hint Tell Me More!

Your Theremin Machine starts on, and shows a note icon. But no sound plays yet, the ``||fwdLights:LED Ring||`` stays red until your hand is close enough to the ``||fwdSensors:Sonar||``.

hint~

## Predict & Run: Move Your Hand Close

**Predict:** what will happen if you hold your hand close to the ``||fwdSensors:Sonar||``, then slowly pull it away?

Try it out! Was your prediction right?

~hint Tell Me More!

Close your hand, and the ``||fwdLights:LED Ring||`` turns green and plays a pitch. Moving your hand changes the pitch. Pull away past 0.5 metres, and the ring turns red, and the sound stops.

hint~

## Investigate: The Dial Button

What happens when you press the ``||fwdButtons:Dial Button||``? Why? What is this an example of?

~hint Tell Me More!

Pressing the ``||fwdButtons:Dial Button||`` flips ``||variables:SoundOn||`` between true and false, and shows a different icon each time. This is an **event**, code that only runs the moment something happens, like a button press.

hint~

## Identify: Selection

**Selection** means the program checks something before deciding what to do.

Look at the ``||logic:If||`` block. How many things does it check before playing a sound?

~hint Tell Me More!

It checks two things: is ``||variables:SoundOn||`` true, and is your hand close enough? Both must be true for the sound to play.

hint~

```blocks
basic.forever(function () {
    Pitch = Math.map(fwdSensors.sonar1.distance(), 0, 0.5, 262, 523)
    // @highlight
    if (SoundOn && fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        music.ringTone(Pitch)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        music.stopAllSounds()
    }
})
```

## Identify: Iteration

**Iteration** means the program keeps repeating the same steps.

Why does your ``||basic:Forever||`` loop need to keep checking the ``||fwdSensors:Sonar||``, instead of checking just once?

~hint Tell Me More!

Your hand can move any time. If the loop only checked once, the pitch would freeze forever. Checking again and again is what lets the pitch keep up with your hand.

hint~

```blocks
// @highlight
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
```

## Investigate: Mapping the Distance

Find the ``||math:Map||`` block. What does it do with the sonar's distance reading?

~hint Tell Me More!

``||math:Map||`` stretches or squeezes one range of numbers into another. Here, a distance from 0 to 0.5 metres becomes a pitch from 262 to 523 Hz.

hint~

## Investigate: How Accurate Is the Distance?

Hold your hand as still as you can, right in front of the ``||fwdSensors:Sonar||``. Listen closely.

Does the pitch stay perfectly steady, or does it waver a little?

~hint Tell Me More!

Most sensors waver slightly, even when nothing moves. A reading is rarely perfectly exact every time.

hint~

## Investigate: Sound Waves and Sonar Waves

Sound is a wave. Two things describe a wave: **amplitude**, how big it is, and **wavelength**, how long each wave is. A shorter wavelength means a higher pitch, that's why your hand moving changes what you hear.

Waves can also make things move. Hold your hand very close to a speaker playing a low note, can you feel it shake?

Your ``||fwdSensors:Sonar||`` uses waves too. How do you think it uses them to sense distance?

~hint Tell Me More!

The ``||fwdSensors:Sonar||`` sends out its own sound wave, then times how long the echo takes to bounce back. Farther away means a longer wait.

hint~

## Reflect

In this tutorial, you used an **event**, **selection**, and **iteration** to build a Theremin Machine that turns hand position into pitch. Record your answers in the workspace.

1. Why does the pitch stop the moment your hand moves past 0.5 metres, instead of climbing higher and higher?

2. What do you think would be hardest to build if you made a real theremin out of tape and wire, instead of code?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||fwdButtons:Dial Button||``: An **event** that turns the sound on or off, showing a different icon each time

- ``||basic:Forever||``: A **loop** that keeps checking your hand's distance, so the pitch updates in real time

- ``||logic:If||``: Uses **selection** to check two things: is sound on, and is your hand close enough

- ``||fwdSensors:Sonar||``: Senses distance using sound waves, mapped to a pitch between 262 and 523 Hz

In the next step, click the ``|Done|`` button to exit the tutorial.
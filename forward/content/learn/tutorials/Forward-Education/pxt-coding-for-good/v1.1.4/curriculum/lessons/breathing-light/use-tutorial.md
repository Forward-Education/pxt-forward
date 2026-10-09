# Breathing Light – Use Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (LightOn) {
        LightOn = false
    } else {
        LightOn = true
    }
})
let LightOn = false
let Loudness = 0
LightOn = true
basic.forever(function () {
    if (LightOn) {
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Loudness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})

/* Reflect:
Q1:
Q2: */
```

## Breathing Light - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Breathing Light works.

1. **Build**: Assemble your Breathing Light

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and explore the code

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Breathing Light is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Explore: Observe the Program

Power on your Breathing Light in a quiet room, and look at the ``||fwdLights:LED Ring||``.

What color is it? Does it stay perfectly still, or does anything about it change?

~hint Tell Me More!

Your ``||fwdLights:LED Ring||`` glows blue, calm and steady.

In a quiet room, only a little sound energy reaches the microphone, so the light stays soft.

hint~

## Predict & Run: Touching the Logo

Look at the ``||input:On Logo Event||`` code in your workspace.

**Predict:** what you think will happen to the ``||fwdLights:LED Ring||`` if:

1. You press the ``||input:Logo||`` one time

2. You press the ``||input:Logo||`` a second time

Try it out! Was your prediction right?

~hint Tell Me More!

The ``||input:On Logo Event||`` block is an **event**! It waits until you touch the logo, then it runs.

Touching the ``||input:Logo||`` while the ``||fwdLights:LED Ring||`` is on, turns the light off.

If you press it again, the light turns back on.

hint~

```blocks
// @highlight
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (LightOn) {
        LightOn = false
    } else {
        LightOn = true
    }
})
```

## Predict & Run: Clapping

**Predict:** what do you think will happen to the ``||fwdLights:LED Ring||`` if you clap once, right next to your Breathing Light?

Clap once, right next to your Breathing Light. Watch the ``||fwdLights:LED Ring||``. Was your prediction right?

~hint Tell Me More!

A clap sends a burst of sound energy into the microphone, setting the ``||variables:Loudness||`` variable to a number greater than 1.5.

The ``||fwdLights:LED Ring||`` turns red for a moment, then settles back to blue once the room is quiet again.

hint~

```blocks
basic.forever(function () {
    if (LightOn) {
        // @highlight
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Loudness)
        // @highlight
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Identify: Variable

A **variable** stores a piece of information in your program that can change. There are two variables in this program.

Look at where the variables are in your program, then answer the questions below for each variable: (A) ``||variables:LightOn||``, (B) ``||variables:Loudness||``

1. What information does the variable store?

2. When does the information change?

~hint Tell Me More!

A: ``||variables:LightOn||`` stores whether the light is on or off, true or false. The information changes when you press the ``||input:Logo||``.

B: ``||variables:Loudness||`` stores the ``||input:Sound Level||`` sensed by the microphone, and ``||math:Map||`` converts it to a value between 0 and 3. The information changes every time the program runs.

hint~

## Identify: Sequence

**Sequence** means the program runs its steps in order, one after another, from top to bottom.

Look inside the ``||basic:Forever||`` loop, when ``||variables:LightOn||`` is true. What does the program do first? What happens right after that?

~hint Tell Me More!

The program's **sequence** is:

1. The microphone senses the ``||input:Sound Level||``, and stores it in ``||variables:Loudness||`` variable

2. The ``||fwdLights:LED Ring||``'s brightness is set to the value of the ``||variables:Loudness||`` variable

3. ``||logic:If||`` the ``||variables:Loudness||`` value is greater than 1.5, the ``||fwdLights:LED Ring||`` is set to red

If these steps ran out of order, the brightness or color could end up using an old ``||variables:Loudness||`` value.

hint~

```blocks
basic.forever(function () {
    if (LightOn) {
        // @highlight
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
         // @highlight
        fwdLights.ledRing1.setBrightness(Loudness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
        //@highlight
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Identify: Selection

**Selection** means the program checks for specific criteria before it decides what to do.

Look at the ``||basic:Forever||`` loop. What criteria does the program check, before it decides what the ``||fwdLights:LED Ring||`` should show?

~hint Tell Me More!

There are two criteria, one inside the other.

1. Is ``||variables:LightOn||`` true?

Only if it is, the program makes a second choice:

2. Is ``||variables:Loudness||`` less than or equal to 1.5?

hint~

```blocks
basic.forever(function () {
    if (LightOn) {
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Loudness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Identify: Iteration

**Iteration** means the program keeps repeating the same steps.

Which part of your code uses **iteration**?

~hint Tell Me More!

The ``||basic:Forever||`` **loop** never stops checking.

Every single time it runs, it reads the ``||input:Sound Level||`` block to sense sound energy from the room, and stores it in the ``||variables:Loudness||`` variable.

hint~

```blocks
// @highlight
basic.forever(function () {
    if (LightOn) {
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Loudness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Investigate: Quiet vs. Loud

A Breathing Light is meant to feel calming. Why do you think a **quiet** room gets a calm blue color, while a **loud** sound gets an alert red color?

~hint Tell Me More!

Less sound energy reaching the microphone means less for the program to react to, so the ``||fwdLights:LED Ring||`` can stay soft and steady, like a slow breath.

A sudden burst of sound energy is a bigger signal, so the program responds with a stronger, more alert color. The light's response matches the amount of energy it senses. That's what makes it feel calming instead of random.

hint~

## Investigate: Why Use a Variable?

Why does the program store the ``||input:Sound Level||`` reading in the ``||variables:Loudness||`` variable, instead of checking ``||input:Sound Level||`` twice inside the ``||basic:Forever||`` loop?

~hint Tell Me More!

Storing the reading once in the ``||variables:Loudness||`` variable means both parts of the program, setting the brightness and choosing the color, are always looking at the exact same sound energy reading.

If the program checked ``||input:Sound Level||`` twice instead, the sound could change in between the two checks. Then the color and brightness might disagree with each other.

hint~

## Reflect

In this tutorial, you used an **event**, **sequence**, **selection**, **iteration**, and two **variables** to build a Breathing Light that responds to sound energy. Record your answers in the workspace.

1. Why does a quiet room keep the light calm, while a loud sound makes it react?

2. What's one other quiet, everyday sound your Breathing Light might respond to if you tested it?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||input:On Logo Event||``: An **event** that turns the light on or off when you touch the logo

- ``||basic:Forever||``: A **loop** that runs its steps in **sequence**, turning sound energy into a ``||variables:Loudness||`` reading

- ``||logic:If||``: Uses **selection** to check if the light is on, then how loud the room is

- ``||fwdLights:LED Ring||``: Glows blue when quiet, red when loud, based on real sound energy

In the next step, click the ``|Done|`` button to exit the tutorial.
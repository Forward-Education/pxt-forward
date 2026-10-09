# Mood Light – Use Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
input.onButtonPressed(Button.A, function () {
    Mood = "Happy"
})
input.onButtonPressed(Button.B, function () {
    Mood = "Frustrated"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Mood = "Calm"
})
let Mood = ""
fwdLights.ledRing1.setBrightness(10)
Mood = ""
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})

/* Reflect:
Q1:
Q2: */
```

## Mood Light Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Mood Light works.

1. **Build**: Assemble your Mood Light

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and explore the code


## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Mood Light is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.


## Identify: Events

An **event** runs when something specific happens, like pressing a button. The code within the event will only run when the condition is met.

Look at your code in your workspace, where is an **event** used?

~hint Tell Me More!

The ``||input:On Button Pressed||`` block is an event! It waits until you press a button, then it runs.

hint~

```blocks
// @highlight
input.onButtonPressed(Button.A, function () {
    Mood = "Happy"
})
```

## Explore: Observe the Program

Now that we've found an event, let's test it out in real life!

Unplug your Mood Light and power it on. Look at the ``||fwdLights:LED Ring||``.

Is it showing a color, or is it unlit?

~hint Tell Me More!

The ``||fwdLights:LED Ring||`` stays unlit at first. Nothing has told it what color to show yet.

hint~

## Predict: Happy Mood

Look at the ``||input:On Button Pressed||`` event for Button A. What do you think will happen to the ``||fwdLights:LED Ring||`` when you press it?

```blocks
// @highlight
input.onButtonPressed(Button.A, function () {
    Mood = "Happy"
})
```

## Try It: Happy Mood

Press the ``||input:Button A||`` on your micro:bit. Watch the ``||fwdLights:LED Ring||``.

What color appeared?

~hint Tell Me More!

Pressing the ``||input:Button A||`` sets ``||variables:Mood||`` to "Happy", and the ``||fwdLights:LED Ring||`` turns green.

hint~

## Identify: Selection and Sequence

You just made the ``||fwdLights:LED Ring||`` turn green! Let's look at how the code decided that.

**Selection** means the program checks something before deciding what to do. **Sequence** means it checks things in order, one after another.

Look at the ``||basic:Forever||`` loop. Which condition did the program check first to make the ring turn green?

~hint Tell Me More!

The ``||logic:If||`` block is a **condition**. It checks ``||variables:Mood||`` in this **sequence**:

1. First, is ``||variables:Mood||`` "Happy"?

2. Then, is ``||variables:Mood||`` "Calm"?

3. Last, is ``||variables:Mood||`` "Frustrated"?

Since ``||variables:Mood||`` was "Happy", the first condition matched, so the ring turned green.

hint~

```blocks
basic.forever(function () {
    // @highlight
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
```

## Identify: Iteration

**Iteration** means the program keeps repeating the same steps.

Which part of your code uses **iteration**?

~hint Tell Me More!

The ``||basic:Forever||`` **loop** keeps checking ``||variables:Mood||`` and updating the ``||fwdLights:LED Ring||``.

As long as the micro:bit has power, the code in the ``||basic:Forever||`` **loop** will run.

hint~

```blocks
// @highlight
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
```

## Identify: Variable

A **variable** stores a piece of information in your program that can change.

Find the ``||variables:Mood||`` variable near the top of your program. It's the same one you just set to "Happy" by pressing a button.

~hint Tell Me More!

The ``||variables:Mood||`` **variable** started as an empty piece of text, since no mood had been chosen yet.

That's why the ``||fwdLights:LED Ring||`` was unlit before you pressed anything.

hint~

```blocks
// @highlight
let Mood = ""
```

## Predict: Calm Mood

Look at the ``||input:On Logo Event||``. What do you think will happen to the ``||fwdLights:LED Ring||`` when you press the logo instead?

```blocks
// @highlight
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Mood = "Calm"
})
```

## Try It: Calm Mood

Press the ``||input:Logo||`` on your micro:bit. Watch the ``||fwdLights:LED Ring||``.

What color appeared?

~hint Tell Me More!

Pressing the ``||input:Logo||`` sets ``||variables:Mood||`` to "Calm", so the ``||fwdLights:LED Ring||`` turns blue.

hint~

## Investigate: Why Use a Variable?

Why does the program set ``||variables:Mood||`` inside each button event, instead of changing the ``||fwdLights:LED Ring||`` color directly there?

~hint Tell Me More!

Storing the mood in a **variable** means the ``||basic:Forever||`` loop only needs to check one thing to decide what color to show.

If the color were set directly inside each button event instead, adding a new mood later would mean changing code in more than one place.

The ``||fwdLights:LED Ring||`` itself can't decide what color to show, it can only light up. Software, the code you write, is what decides which color matches which mood.

hint~

## Investigate: More Than One Pattern

Color is one way to send information without using any words.

What's another pattern you could use to show a feeling instead, like a sound or a shape? Why might color work well for a Mood Light specifically?

~hint Tell Me More!

A sound could work too, like a happy chime or a low buzz. A shape or motion could work, like a spinning pattern.

Color works well here because it's silent and easy to see from across a room, useful in a classroom where you don't want to interrupt with noise.

hint~

## Reflect

In this tutorial, you used **events**, **sequence**, **selection**, **iteration**, and a **variable** to build a Mood Light. Record your answers in the workspace.

1. Why does the program check ``||variables:Mood||`` inside a loop instead of checking it just once?

2. What's one more mood you would want to add to your Mood Light, and what color would you choose for it? Why that color?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||input:On Button Pressed||`` and ``||input:On Logo Event||``: **Events** that run when you press a button or the logo, and set the ``||variables:Mood||`` variable

- ``||basic:Forever||``: A **loop** that keeps checking ``||variables:Mood||`` and uses **selection** to decide what color to show

- ``||fwdLights:LED Ring||``: Lights up green, blue, or pink depending on the mood

- ``||variables:Mood||``: Stores the current mood as text; change it by pressing a different button or the logo

In the next step, click the ``|Done|`` button to exit the tutorial.
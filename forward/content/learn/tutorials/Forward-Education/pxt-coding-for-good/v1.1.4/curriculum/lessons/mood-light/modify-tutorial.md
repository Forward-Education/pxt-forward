# Mood Light – Modify Tutorial

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
input.onButtonPressed(Button.AB, function () {
    Mood = ""
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
    else if (Mood == ""){
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
/* What other moods do you feel in your classroom? Write 3 below:
1. 
2. 
3. 
 */

/* Describe your algorithm below. How does your new mood work, from button press to spinning pattern?
Example: When you press A and B, the mood changes to ___, the LEDs are set to ___, then a loop keeps ___.
 */

/* Reflect:
Q1:
Q2: */

```

## Mood Light - Modify Tutorial @showdialog

In this tutorial, you will **modify** the code to add a new mood, and give it its own moving pattern.

1. **Build**: Assemble your Mood Light

2. **Connect**: Pair your micro:bit and download the starter code

3. **Modify**: Name a new mood, give it a pattern, and test your changes

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Mood Light is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Explore: How the Program Works

Take a moment to look at the starter code in your workspace. What does each part of your program do?

~hint Tell Me More!

* Each ``||input:On Button Pressed||`` and ``||input:On Logo Event||`` is an **event** that sets the ``||variables:Mood||`` **variable** to a different word.

* The ``||basic:Forever||`` **loop** keeps checking ``||variables:Mood||`` and uses **selection** to decide what color the ``||fwdLights:LED Ring||`` should be.

* Right now, there are three moods: Happy, Calm, and Frustrated.

hint~

## Modify: What Other Moods Do You Feel?

Happy, Calm, and Frustrated aren't the only moods people feel in a classroom.

Using the comment in your workspace, write 3 more moods, and a color you could use to represent them.

Make sure to describe **why** the feeling represents that color.

~hint Tell Me More!

There's no wrong answer here! One example could be:
* **Excited:** Orange, it feels high energy and fun!

hint~

## Modify: Name Your New Mood

Let's add a new mood to our light! Pick one of the three ideas you just brainstormed.

In your workspace, find the ``||input: On Buttons A+B Pressed||`` event. Type your chosen mood into the blank quotes, where ``||variables:Mood||`` is set.

```blocks
input.onButtonPressed(Button.AB, function () {
    // @highlight
    Mood = "Excited"
})
```

## Modify: Your Mood Conditions

Next, find the incomplete ``||logic:Else If||`` condition in your ``||basic:Forever||`` loop.

Type the same mood from your ``||input: On Buttons A+B Pressed||`` **event** into the blank quotes in this branch. Then pick a new color for your mood in the ``||fwdLights:Set All LEDRing Pixels||`` block.

``|Download|`` your code. What happens to the ``||fwdLights:LED Ring||`` when you press ``||input:A+B Buttons||``?

~hint Tell Me More!

Your micro:bit followed the instructions in the ``||fwdLights:Set All LEDRing Pixels||`` block, and lit up your new color!

If you hadn't changed that color yet, the ``||fwdLights:LED Ring||`` would have **turned off** all 8 pixels instead.

hint~

```blocks
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (Mood == "Excited") {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    }
})
```

## Modify: Add a Pixel Detail

Let's customize our emotion even more!

1. Get a ``||fwdLights:Set LEDRing Pixel [1]||`` block from the ``||fwdLights:Lights||`` drawer.

2. Place the block below the ``||fwdLights:Set All LEDRing Pixels||`` block for your new mood in the ``||basic:Forever||`` loop.

3. Select a second color to represent your new emotion.

4. ``|Download|`` your code.

What happens when you press the ``||input:A+B Buttons||`` now?

~hint Tell Me More!

Your ``||fwdLights:LED Ring||`` displays two colors now!

Your program's sequence is now:

1. **All 8 pixels** on the ``||fwdLights:LED Ring||`` turn on to the first color (e.g. Orange)

2. **Pixel 1** on the ``||fwdLights:LED Ring||`` is changed to the second color (e.g. Pink)

The program repeats this sequence over and over until a new ``||variables:Mood||`` is set.

hint~

```blocks
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (Mood == "Excited") {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0080)
    }
})
```

## Modify: Make It Move

Now let's make our pattern move!

Drag a ``||fwdLights:Rotate Pattern||`` block from the ``||fwdLights:Lights||`` drawer, and place it beneath your ``||fwdLights:Set LEDRing Pixel [1]||`` block.

``|Download|`` your code again. Do you notice anything different when you press ``||input:A+B Buttons||``?

~hint Tell Me More!

The pink pixel has rotated from Pixel 1 to Pixel 2!

hint~

```blocks
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (Mood == "Excited") {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0080)
        // @highlight
        fwdLights.ledRing1.rotate(1)
    }
})
```

## Investigate: Why Doesn't It Move?

All code in a ``||basic:Forever||`` loop runs as long as your micro:bit has power.

Why do you think the pink pixel on your ``||fwdLights:LED Ring||`` never rotates past Pixel 2?

~hint Tell Me More!

Every time the ``||basic:Forever||`` **loop** runs, it does these three things in **sequence**:

1. Set **all pixels** on the ``||fwdLights:LED Ring||`` to the first color (e.g. Orange)

2. Set **Pixel 1** on the ``||fwdLights:LED Ring||`` to the second color (e.g. Pink)

3. ``||fwdLights:Rotate||`` the pattern by **1 pixel** (Pink moves from Pixel 1 to Pixel 2)

Then it starts over, resetting all **8 pixels** back to their original colors, pink back to Pixel 1, before you can see it move any further.

hint~

## Modify: Fix the Bug

Let's change our code so it rotates our pattern smoothly, all the way around the ``||fwdLights:LED Ring||``.

1. Drag both your ``||fwdLights:Set All LEDRing Pixels||`` and ``||fwdLights:Set LEDRing Pixel [1]||`` blocks into your ``||input:On Buttons A+B Pressed||`` **event.**

2. Add a ``||basic:Pause||`` block from the ``||basic:Basic||`` drawer, and place it beneath the ``||fwdLights:Rotate Pattern||`` block in the ``||basic:Forever||`` loop.

3. ``|Download|`` your code and test one more time.

~hint Tell Me More!

Now, when you press ``||input:A+B Buttons||``, your program updates ``||variables:Mood||`` and sets the colors of the ``||fwdLights:LED Ring||`` one time.

Then, the ``||basic:Forever||`` **loop** just rotates the pattern, with a short pause between each step.

If your Mood Light doesn't respond at all when you press the ``||input:A+B Buttons||``, check your hardware first. Is everything connected? If it responds but doesn't move the way you expect, that's a code problem, like the one we just fixed.

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    Mood = "Excited"
    // @highlight
    fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    // @highlight
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0080)
})
```

```blocks
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (Mood == "Excited") {
        // @highlight
        fwdLights.ledRing1.rotate(1)
        // @highlight
        basic.pause(100)
    }
})
```

## Investigate: Describe Your Algorithm

Using the comment in your workspace, describe everything that happens in your program from the moment someone presses ``||input:A+B Buttons||``, to the pattern spinning on the ``||fwdLights:LED Ring||``.

Explain it well enough that a partner could follow along without looking at your code.

~hint Tell Me More!

For example: when you press both buttons, ``||variables:Mood||`` changes to Excited, and the ``||fwdLights:LED Ring||`` pixel colors are set one time.

Then, the ``||basic:Forever||`` loop checks the mood condition, before rotating the pattern, one pixel at a time.

hint~

## Reflect

In this tutorial, you added a new mood to your Mood Light, and debugged why its pattern wouldn't spin. Record your answers to the questions below as code comments in the workspace.

1. How can using patterns, not just single colors, help people increase clarity and communication?

2. What other patterns would you create to customize your Mood Light even further?

## Congratulations!

You've completed this tutorial! Here's a summary of what you changed:

- ``||input: On Buttons A+B Pressed||``: A new **event**, which sets ``||variables:Mood||`` to a value of your choice

- ``||logic:Else If||``: A new branch, called a **condition**, that responds to your new ``||variables:Mood||``

- ``||fwdLights:Set All LEDRing Pixels||`` and ``||fwdLights:Set LEDRing Pixel [1]||``: Set your mood's color pattern once, in **sequence**

- ``||fwdLights:Rotate Pattern||``: Left alone in the ``||basic:Forever||`` **loop**, so it can rotate your pattern smoothly

In the next step, click the ``|Done|`` button to finish.
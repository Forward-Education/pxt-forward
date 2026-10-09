# Breathing Light – Modify Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
let LightOn = false
let Inhale = true
LightOn = true
let Brightness = 0
let Loudness = 0

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (LightOn) {
        LightOn = false
    } else {
        LightOn = true
    }
})

loops.everyInterval(100, function () {
    if (Inhale) {
    
    } else {
     
    }
})

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
Q2:
Q3:
Q4:
Q5: */
```

## Breathing Light - Modify Tutorial @showdialog

In this tutorial, you will **modify** the code so your Breathing Light rises and falls like a slow breath when the room is quiet.

1. **Build**: Assemble your Breathing Light

2. **Connect**: Pair your micro:bit and download the starter code

3. **Modify**: Add a breathing effect and test your changes

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Breathing Light is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Investigate: How the Program Works

Take a moment to look at the starter code in your workspace. Can you describe what each part does?

~hint Tell Me More!

1. The ``||input:On Logo Event||`` turns the light on or off.

2. The ``||basic:Forever||`` **loop** reads the ``||input:Sound Level||`` and stores it in the ``||variables:Loudness||`` variable.

3. Then, the ``||fwdLights:LED Ring||`` brightness is set to the value of ``||variables:Loudness||``.

4. If the ``||input:Sound Level||`` value is less than or equal to 1.5, then the ``||fwdLights:LED Ring||`` turns Blue. Otherwise, the light turns red.

hint~

## Modify: A New Light Feature

Let's add a new feature to our Breathing Light!

- When you breathe in, the light brightens from 0 to 3
- When you breathe out, the light dims from 3 to 0

~hint Tell Me More!

A breathing light can help different people feel more calm by using it to help them take slow, calm breaths.

hint~

## Modify: Time the Breath

Look at the ``||loops:Every 100 ms||`` loop in your workspace.

- When does this code run?
- How often does it happen?

~hint Tell Me More!

``||loops:Every 'x' ms||`` blocks work like a timer, the code inside runs once the time is up.

This ``||loops:Every 100 ms||`` loop runs 10 times a second, since 1000 ms = 1 second.

hint~

```blocks
loops.everyInterval(100, function () {
    if (Inhale) {
          } else {
        }
})
```

## Modify: Add the Brightness Steps

We need to add instructions for the ``||loops:Every 100 ms||`` loop to follow.

- When ``||variables:Inhale||`` is **true**, that means breathing in
- When ``||variables:Inhale||`` is **false**, that means breathing out

1. Drag a ``||variables:Change Variable By||`` block into the true branch. Set it to change ``||variables:Brightness||`` by **1**.

2. Drag a second ``||variables:Change Variable By||`` block into the ``||logic:Else||`` branch. Set it to change ``||variables:Brightness||`` by **-1**.

~hint Tell Me More!

The ``||variables:Change Variable By||`` block adds the number you choose to a variable's current value.

- Setting it to 1 means ``||variables:Brightness||`` goes up by 1 each time the loop runs
- Setting it to -1 means it goes down by 1

hint~

```blocks
loops.everyInterval(100, function () {
    if (Inhale) {
        // @highlight
        Brightness += 1
    } else {
        // @highlight
        Brightness += -1
    }
})
```

## Modify: Change the Forever Loop

1. Find the ``||fwdLights:Set LED Ring Brightness||`` block in your ``||basic:Forever||`` loop.

2. Change the variable from ``||variables:Loudness||`` to ``||variables:Brightness||``.

3. ``|Download|`` your code.

What do you notice happens?

~hint Tell Me More!

When we first download our program, the ``||fwdLights:LED Ring Brightness||`` starts off and gets brighter, but it never turns back off.

Nothing in our program has told the ``||variables:Inhale||`` variable to stop breathing in.

hint~

```blocks
// @highlight
fwdLights.ledRing1.setBrightness(Brightness)
```

## Modify: Add the Bounds Check

Our ``||variables:Brightness||`` variable counts from 0 to 3. It needs a way to know when to turn around.

1. Add an ``||logic:If||`` block: if ``||variables:Brightness||`` is greater than or equal to 3, set ``||variables:Inhale||`` to **false**.

2. Add another ``||logic:If||`` block: if ``||variables:Brightness||`` is less than or equal to 0, set ``||variables:Inhale||`` to **true**.

~hint Tell Me More!

The ``||fwdLights:LED Ring Brightness||`` block can only set a brightness to a number between 0 and 3.

If ``||variables:Brightness||`` counted higher than 3, or lower than 0, the ``||fwdLights:LED Ring||`` wouldn't get any brighter or darker.

hint~

```blocks
loops.everyInterval(100, function () {
    if (Inhale) {
        Brightness += 1
    } else {
        Brightness += -1
    }
    if (Brightness >= 3) {
    // @highlight
        Inhale = false
    } else if (Brightness <= 0) {
    // @highlight
        Inhale = true
    }
})
```

## Run: Try It One More Time

``|Download|`` your code again, and sit quietly for a while.

- How does your Breathing Light act now?
- When you make a loud sound, does anything change?

~hint Tell Me More!

Your ``||fwdLights:LED Ring||`` should now dim and brighten smoothly.

While you make a loud sound, the ``||fwdLights:LED Ring||`` should turn red until it's quiet again.

hint~

## Modify: Change the Step Size

Change your ``||variables:Brightness||`` step size from **1** to **0.1**, both where it increases and where it decreases.

``|Download|`` your code and test it. What does the breath look like now?

~hint Tell Me More!

Changing the step to 0.1 means ``||variables:Brightness||`` needs many more loops to go from 0 to 3, so the breath becomes much smoother, though it also takes longer overall.

hint~

## Modify: Change the Loop Speed

Change your ``||variables:Brightness||`` step size back to **1**. Now change your ``||loops:Every 100 ms||`` block to run every **500 ms** instead.

``|Download|`` your code and test it again.

~hint Tell Me More!

Slowing the loop down to 500 ms keeps the same whole-number steps of 1, so the breath still looks a little choppy, just slower.

Both changes make the breath take longer, but only the smaller step size makes it look smoother.

hint~

## Investigate: Tracing the Breath

Describe what happens to the ``||variables:Brightness||`` and the ``||variables:Inhale||`` variables the next **three times** that the ``||loops:Every 100 ms||`` loop runs.

Scenario: the ``||variables:Brightness||`` variable has a value of **2**, and ``||variables:Inhale||`` is **true**.

Write your answer in the comment in your workspace.

~hint Tell Me More!

1. The ``||variables:Brightness||`` variable changes by 1, and becomes 3. Since it reached 3, ``||variables:Inhale||`` is set to **false**.

2. The ``||variables:Brightness||`` variable changes by -1, and becomes 2. The ``||variables:Inhale||`` variable stays false.

3. The ``||variables:Brightness||`` variable changes by -1 again, and becomes 1. The ``||variables:Inhale||`` variable stays false.

hint~

## Reflect

In this tutorial, you **modified** a program to add two new **variables** and a second **loop** that makes your Breathing Light rise and fall like a slow breath. Record your answers to the questions below as code comments in the workspace.

1. Why did the light get stuck before you added the bounds check, and how did adding it fix the problem?

2. You chose 100 ms and 1 for your breathing steps. Why did you choose those numbers, and would you change them if you built this again?

3. In your own words, describe how your Breathing Light decides whether to get brighter or dimmer. Explain it well enough that a partner could follow along without looking at your code.

4. How did the smoother 0.1 step version feel, compared to your original steps of 1? Would fewer, bigger steps make a Breathing Light feel more calming, or less?

5. Why does the breathing code live in its own separate loop, instead of being added directly inside the ``||basic:Forever||`` loop?

## Congratulations!

You've completed this tutorial! Here's a summary of what you changed:

- ``||variables:Brightness||`` and ``||variables:Inhale||``: track brightness and breathing direction

- ``||loops:Every 100 ms||``: a second **loop** that breathes in the background

- ``||logic:If||``: **selection** flips ``||variables:Inhale||`` at the top or bottom of its range

- ``||fwdLights:LED Ring||``: breathes blue when quiet, flashes red when loud

In the next step, click the ``|Done|`` button to exit the tutorial.


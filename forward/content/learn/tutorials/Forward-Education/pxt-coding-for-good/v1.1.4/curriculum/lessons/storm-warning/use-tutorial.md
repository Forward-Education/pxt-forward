# Emergency Alert – Use Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
input.onButtonPressed(Button.A, function () {
    if (SafetyLevel < 180) {
        SafetyLevel = SafetyLevel + 60
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    if (SafetyLevel > 0) {
        SafetyLevel = SafetyLevel - 60
        basic.pause(500)
    }
})
let SafetyLevel = 0
SafetyLevel = 180
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.leftServo, SafetyLevel)
})

/* Reflect:
Q1:
Q2: */
```

## Emergency Alert - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Emergency Alert works.

1. **Build**: Assemble your Emergency Alert

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and explore the code

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Emergency Alert is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Predict & Run: How Does This Program Work?

Look at the code in your workspace. What do you think will happen when you download it?

``|Download|`` your code and try it out!

~hint Tell Me More!

Your Emergency Alert starts at its safest position. Pressing button A or B moves the sign one step at a time, toward more or less risk.

hint~

## Investigate: The Buttons

What happens when you press button A? What about button B? What is this an example of?

~hint Tell Me More!

Pressing a button is an **event**, code that only runs the moment something specific happens. Button A raises the risk level, button B lowers it.

hint~

## Identify: Selection

**Selection** means the program checks something before deciding what to do.

Look inside each button's code. What does it check before changing ``||variables:SafetyLevel||``?

~hint Tell Me More!

Each ``||logic:If||`` checks whether ``||variables:SafetyLevel||`` is still inside a safe range, under 180, or over 0, before changing it. This stops the sign from being pushed past its highest or lowest position.

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    if (SafetyLevel < 180) {
        SafetyLevel = SafetyLevel + 60
        basic.pause(500)
    }
})
```

## Identify: Iteration

**Iteration** means the program keeps repeating the same steps.

Which part of your code uses **iteration** to keep the sign pointed at the correct position?

~hint Tell Me More!

The ``||basic:Forever||`` **loop** keeps setting the servo's angle to match ``||variables:SafetyLevel||``, over and over, for as long as your micro:bit has power.

hint~

```blocks
// @highlight
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.leftServo, SafetyLevel)
})
```

## Investigate: Why Keep Checking?

``||variables:SafetyLevel||`` usually only changes when someone presses a button, most of the time, nothing changes at all.

Why do you think the ``||basic:Forever||`` loop keeps setting the servo's angle anyway, even when nothing has changed?

~hint Tell Me More!

Setting the angle every pass doesn't hurt anything, and it means the sign will always correct itself back to the right position, even if it were ever bumped or moved by hand.

hint~

## Investigate: A Sign With No Signal

Some remote and northern communities don't have reliable internet or cell service, especially during severe weather, which is exactly when a warning matters most.

Why might a physical sign like this one, with no network connection at all, actually be a more dependable warning than an app or a text alert?

~hint Tell Me More!

A connected alert can fail if the network goes down, which often happens during the exact emergency it's meant to warn about. A physical sign a ranger sets by hand doesn't depend on a signal at all, it works whether or not anything else does.

hint~

## Reflect

In this tutorial, you used an **event**, **selection**, and **iteration** to build an Emergency Alert that a ranger can set by hand. Record your answers in the workspace.

1. Why does the program check ``||variables:SafetyLevel||``'s range before changing it, instead of just always adding or subtracting 60?

2. Who might rely on a sign like this instead of an app or text alert, and why?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||input:On Button Pressed||``: An **event** that raises or lowers the risk level

- ``||logic:If||``: Uses **selection** to keep ``||variables:SafetyLevel||`` inside a safe range

- ``||basic:Forever||``: A **loop** that keeps the servo pointed at the correct position

- ``||fwdMotors:Set Angle||``: Moves the sign to physically show the current risk level

In the next step, click the ``|Done|`` button to exit the tutorial.
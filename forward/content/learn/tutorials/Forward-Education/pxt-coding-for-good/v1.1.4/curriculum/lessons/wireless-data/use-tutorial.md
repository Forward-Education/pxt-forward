# Smart Lock – Use Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
input.onButtonPressed(Button.A, function () {
    if (PressCount < 3) {
        EnteredCode = "" + EnteredCode + "a"
        PressCount += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (PressCount < 3) {
        EnteredCode = "" + EnteredCode + "b"
        PressCount += 1
    }
})
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdSensors.lcd1.printLineString("Door Locked", 1)
    basic.clearScreen()
    basic.pause(5000)
    EnteredCode = ""
    PressCount = 0
})
let EnteredCode = ""
let PressCount = 0
let SecretCode = "abb"
let FailedAttempts = 0
fwdSensors.initializeLcd()
basic.forever(function () {
    if (PressCount == 3) {
        if (EnteredCode == SecretCode) {
            FailedAttempts = 0
            basic.showIcon(IconNames.House)
            fwdSensors.lcd1.printLineString("Door Unlocked", 1)
        } else {
            FailedAttempts += 1
            if (FailedAttempts >= 3) {
                basic.showIcon(IconNames.Skull)
                fwdSensors.lcd1.printLineString("Tampering Alert", 1)
            } else {
                basic.showIcon(IconNames.No)
                fwdSensors.lcd1.printLineString("Access Denied", 1)
            }
        }
    } else {
        fwdSensors.lcd1.printLineString("Enter Code", 1)
    }
})

/* Reflect:
Q1:
Q2:
Q3: */
```

## Smart Lock - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Smart Lock checks a secret code.

1. **Build**: Assemble your Smart Lock

2. **Connect**: Pair your micro:bit and download the starter code

3. **Use**: Run the program and explore the code

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Smart Lock is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Predict & Run: How Does This Program Work?

Look at the code in your workspace. What do you think will happen when you download it?

``|Download|`` your code and try it out!

~hint Tell Me More!

Your Smart Lock starts by showing "Enter Code" on the LCD. Pressing button A or B adds a letter to your entry, once you've pressed 3 times, it checks what you entered against the secret code.

hint~

## Identify: Selection

**Selection** means the program checks something before deciding what to do.

Look at the ``||logic:If||`` block that runs once you've pressed 3 times. What is it comparing?

~hint Tell Me More!

It compares ``||variables:EnteredCode||`` to ``||variables:SecretCode||``. If they match exactly, the door unlocks. If not, access is denied.

hint~

```blocks
basic.forever(function () {
    if (PressCount == 3) {
        // @highlight
        if (EnteredCode == SecretCode) {
            FailedAttempts = 0
            basic.showIcon(IconNames.House)
            fwdSensors.lcd1.printLineString("Door Unlocked", 1)
        } else {
            FailedAttempts += 1
            if (FailedAttempts >= 3) {
                basic.showIcon(IconNames.Skull)
                fwdSensors.lcd1.printLineString("Tampering Alert", 1)
            } else {
                basic.showIcon(IconNames.No)
                fwdSensors.lcd1.printLineString("Access Denied", 1)
            }
        }
    } else {
        fwdSensors.lcd1.printLineString("Enter Code", 1)
    }
})
```

## Identify: Iteration

**Iteration** means the program keeps repeating the same steps.

Why does your ``||basic:Forever||`` loop need to keep checking ``||variables:PressCount||``, instead of checking just once?

~hint Tell Me More!

Button presses can happen at any moment. The ``||basic:Forever||`` **loop** keeps watching so it notices the exact instant your third press completes, and reacts right away.

hint~

## Investigate: Building a Code

Press button A once, then B, then B again. Watch what happens to your entry each time.

What do you think ``||variables:EnteredCode||`` looks like after each press?

~hint Tell Me More!

Each press adds one letter: "a", then "ab", then "abb". After the third press, that full sequence gets compared against your secret code all at once.

hint~

## Investigate: Locking the Door

Press the ``||fwdSensors:Touch Sensor||``. What happens to the screen? What happens to any code you'd already started entering?

~hint Tell Me More!

Touching the sensor shows "Door Locked," clears the screen, and resets your entry back to empty, even if you were partway through typing a code. It's a genuine reset, not just a message.

hint~

## Investigate: Too Many Wrong Guesses

Enter the wrong code three times in a row. What happens differently the third time?

~hint Tell Me More!

The first two wrong guesses just say "Access Denied." But the third one in a row shows "Tampering Alert" instead, since three failed attempts in a row is a real warning sign, not just an honest mistake, someone might be trying to guess their way in.

hint~

## Investigate: A Secret Only Works If It Stays Secret

Your Smart Lock's code, "abb," is written directly into the program.

If someone read your code, would your lock still be secure? Why do real locks and passwords need to stay hidden, not just hard to guess?

~hint Tell Me More!

A secret code only works as security if it's actually kept secret. Anyone who can see the code, whether it's written in a program or taped to a door, can bypass the lock entirely, no matter how clever the code itself is.

hint~

## Investigate: A Lock That Needs Power

Your Smart Lock needs a working battery and micro:bit to function at all. A traditional key-and-deadbolt lock needs neither.

What's one real tradeoff between an electronic lock and a purely mechanical one?

~hint Tell Me More!

An electronic lock is more convenient, no physical key to lose, and can support features like remembering codes. But it also depends on power, if the battery dies, it may need backup power or a mechanical override. A traditional lock never runs out of battery, but also can't offer any of these smart features.

hint~

## Investigate: Who Gets to Live Where You Do

Smart locks are becoming common in real homes and apartment buildings.

What's one way this technology has changed how people share access to their homes, for better or worse?

~hint Tell Me More!

Smart locks let people share access easily, changing a code for a new renter, or checking who used it and when, without ever handing over a physical key. But it also means access now depends on a working system, not something you can simply hold in your hand.

hint~

## Reflect

In this tutorial, you used **selection** and **iteration** to build a Smart Lock that checks a secret code. Record your answers in the workspace.

1. Why does the program wait until exactly 3 presses before checking anything, instead of checking after every single press?

2. What's one way someone could make this code harder to guess, without changing how many buttons it uses?

3. Why might a real smart lock care about *three wrong guesses in a row*, specifically, rather than just one?

4. What's one benefit and one downside of a lock that needs power to work at all?

5. What's one way this kind of technology has changed how people share access to their homes?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``input.onButtonPressed``: An **event** that adds one letter to your entry

- ``||basic:Forever||``: A **loop** that keeps checking whether 3 letters have been entered

- ``||logic:If||``: Uses **selection** to compare your entry to the secret code

- ``||variables:FailedAttempts||``: Tracks repeated wrong guesses, and raises a Tampering Alert after three in a row

- ``||fwdSensors:Touch Sensor||``: Locks the door and resets your entry

In the next step, click the ``|Done|`` button to exit the tutorial.
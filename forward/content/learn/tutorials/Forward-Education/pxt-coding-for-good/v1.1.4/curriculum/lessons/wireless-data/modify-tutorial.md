# Smart Lock – Modify Tutorial

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
Q3:
Q4:
Q5: */
```

## Smart Lock - Modify Tutorial @showdialog
 
In this tutorial, you will **modify** your Smart Lock to add a second, guest code with limited access.
 
1. **Build**: Your Smart Lock is ready to modify
2. **Connect**: Pair your micro:bit and download the starter code
3. **Modify**: Add a guest code and test both access levels
## Setup: Small Screens @showdialog
 
<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">
To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.
 
## Setup: Connect Cables @showdialog
 
IMPORTANT! Make sure your Smart Lock is assembled and your micro:bit is plugged into your computer.
 
<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">
## Setup: Download @showdialog
 
Click the ``|Download|`` button to download the starter code to your micro:bit.
 
<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">
## Investigate: How the Program Works
 
Take a look at the starter code in your workspace. Can you figure out what each part does?
 
~hint Tell Me More!
 
Buttons A and B build a 3-letter entry, and once complete, it's compared against ``||variables:SecretCode||`` to decide whether to unlock the door.
 
hint~
 
## Modify: Add a Guest Code
 
Real smart locks often give visitors, like a dog walker or a delivery driver, their own code, one that lets them in, but isn't the same as the owner's.
 
Add a new **variable** called ``||variables:GuestCode||``, and set it to a different 3-letter combination, like ``"bab"``.
 
~hint Tell Me More!
 
``||variables:GuestCode||`` will be a second, genuinely valid code, separate from ``||variables:SecretCode||``, that you'll give different access to in the next step.
 
hint~
 
```blocks
let GuestCode = "bab"
```
 
## Modify: Check the Guest Code
 
Right now, entering anything other than the exact secret code counts as a failed attempt, even a real guest code would be rejected.
 
Add an ``||logic:Else if||`` that checks whether ``||variables:EnteredCode||`` matches ``||variables:GuestCode||``. If it does, reset ``||variables:FailedAttempts||``, show a different icon, and a message that says the guest was let in.
 
``|Download|`` your code. Try entering the guest code. What happens?
 
~hint Tell Me More!
 
Both the secret code and the guest code are genuinely valid, entering either one is recognized, and neither counts as a failed attempt. But they're treated differently: the owner's code fully unlocks the door, the guest's code lets them in too, with a different message.
 
hint~
 
```blocks
basic.forever(function () {
    if (PressCount == 3) {
        if (EnteredCode == SecretCode) {
            FailedAttempts = 0
            basic.showIcon(IconNames.House)
            fwdSensors.lcd1.printLineString("Door Unlocked", 1)
        // @highlight
        } else if (EnteredCode == GuestCode) {
            // @highlight
            FailedAttempts = 0
            // @highlight
            basic.showIcon(IconNames.Yes)
            // @highlight
            fwdSensors.lcd1.printLineString("Guest: Owner Notified", 1)
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
 
## Run: Try All Three
 
Test your Smart Lock three ways: enter the secret code, enter the guest code, then enter something that matches neither.
 
Does each one produce a different result?
 
~hint Tell Me More!
 
The secret code should unlock the door fully. The guest code should let someone in, but with a different message. Anything else should still count as a failed attempt, exactly as before.
 
hint~
 
## Investigate: Two Codes, Two Kinds of Trust
 
Both your secret code and your guest code are real, working codes, neither one is fake or rejected.
 
What's the actual difference between what happens when each one is entered? Why might a real smart lock want that difference, instead of treating every valid code exactly the same?
 
~hint Tell Me More!
 
Checking whether a code is *valid* is one decision, deciding what that code is *allowed to do* is a separate one. A guest being let in and tracked differently than an owner is a genuine safety feature, not a downgrade, it means an owner always knows when a guest code was used.
 
hint~
 
## Investigate: A Screen Anyone Can Read
 
Your guest message says "Guest: Owner Notified," right on a screen anyone standing at the door can see.
 
Is showing *who* unlocked the door, in public, its own kind of information risk? What might you change about this message?
 
~hint Tell Me More!
 
A screen visible to anyone means passersby could learn there's a guest code in use, or even that someone's expected. Real systems often keep this kind of detail private, only visible to the owner, not displayed publicly at all.
 
hint~
 
## Reflect
 
In this tutorial, you **modified** your Smart Lock to add a second, guest-level code. Record your answers in the workspace.
 
1. Why did entering the guest code still let someone in, instead of being denied like an incorrect code?
2. What's one other kind of access level a real smart lock might need, besides "owner" and "guest"?
3. If you were designing this for your own home, would you want the owner notified every time the guest code is used? Why or why not?
4. Would you keep the guest message visible on the screen, or make it private? Why?
## Congratulations!
 
You've completed this tutorial! Here's a summary of what you added:
 
- ``||variables:GuestCode||``: A second, genuinely valid code with different access
- ``||logic:Else if||``: **Selection** that tells two valid codes apart, and treats them differently
- A message distinguishing owner access from guest access, the real difference between authentication and authorization
In the next step, click the ``|Done|`` button to exit the tutorial.
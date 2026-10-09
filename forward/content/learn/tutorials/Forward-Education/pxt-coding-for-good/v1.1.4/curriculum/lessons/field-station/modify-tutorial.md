# Field Station – Modify Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Loud")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
    if (receivedString == "") {
        }
})
radio.setGroup(1)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})

/* Reflect:
Q1:
Q2:
Q3: */
```

## Field Station - Modify Tutorial @showdialog

In this tutorial, you will **modify** the code to add a second event so your Field Station can tell you when the environment goes quiet.

1. **Build**: Assemble your Field Station and field micro:bit

2. **Connect**: Pair your micro:bits and download the starter code

3. **Modify**: Add a quiet event and test your wireless connection in different spots

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Field Station is assembled and the Breakout Board micro:bit is plugged into your computer. Keep your field micro:bit nearby.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code onto **both** micro:bits. Both devices need the same code.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window. 

## Two-Device Setup

This project uses two micro:bits that work as a team.

* The **field micro:bit** listens for sounds and sends messages wirelessly

* The **Field Station** receives the messages and lights up the ``||fwdLights:LED Ring||``

## Explore: How the Program Works

Test the starter code by clapping near your field micro:bit. What happens to the ``||fwdLights:LED Ring||``?

~hint Tell Me More!

1. The ``||input:On Loud Sound||`` event runs when the field micro:bit hears a loud sound. It sends a "Loud" message wirelessly.

2. The ``||radio:On Received String||`` event runs on the Field Station. It checks the message and flashes the ``||fwdLights:LED Ring||`` red.

hint~

## Modify: Add the Quiet Event

Right now, the field micro:bit only sends a message when it hears a loud sound. 

Drag an ``||input:On Loud Sound||`` event into your workspace. Click on the **Loud** dropdown, and select **Quiet**

~hint Tell Me More!

This is a new **event**. It will run when the microphone detects that the room has gone quiet.

hint~

```blocks
// @highlight
input.onSound(DetectedSound.Quiet, function () {
})
```

## Modify: Send the Quiet Message

Our event needs instructions!

Drag a ``||radio:Send String||`` block from your toolbox, and add it into your ``||input:On Quiet Sound||`` event. 

Set the string to "Quiet".

~hint Tell Me More!

Now both events send a message: "Loud" when loud, "Quiet" when quiet.

hint~

```blocks
input.onSound(DetectedSound.Quiet, function () {
    // @highlight
    radio.sendString("Quiet")
})
```

## Modify: Add the If Condition

Next, find the blank ``||logic:If||`` condition in your workspace. Set the condition to: receivedString = "Quiet".

~hint Tell Me More!

This is a second **condition**. 

The Field Station now checks for two different messages: Loud, and Quiet.

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
    // @highlight
    if (receivedString == "Quiet") {
    }
})
```

## Modify: Add the Green Signal

Our Field Station needs to know *what* it should do when it receives the "Quiet" message from the field. 

Drag ``||fwdLights:Set All LEDRing Pixels To||`` inside your ``||logic:If||`` block. Set the color to green.

~hint Tell Me More!

Green means the environment is safe and quiet.

Now the ``||fwdLights:LED Ring||`` has two states: red when loud, green when quiet.

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
    if (receivedString == "Quiet") {
    // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
})
```

## Test: Try it Nearby

``|Download|`` your updated code to **both** of your micro:bits! 

How does your Field Station react when you make a loud sound near your Field device? What happens when the room is quiet?

~hint Tell Me More!

* The ``||input:On Quiet Sound||`` event fires and sends "Quiet" by radio.

* The Field Station receives "Quiet" and sets the ``||fwdLights:LED Ring||`` to green.

hint~

## Test: Move to a New Spot

Carry the field micro:bit to a different spot. Try somewhere far away or behind a wall.

Make a loud sound, then go quiet. Does the ``||fwdLights:LED Ring||`` still respond?

~hint Tell Me More!

Wireless radio signals can be blocked by walls or lost over distance.

If the ``||fwdLights:LED Ring||`` stops responding, the signal is too weak to get through.

hint~

## Investigate: Wired vs. Wireless

Your two micro:bits talk using radio signals. Radio is wireless — no cable connects them.

What is one good thing about wireless? What is one problem with it?

~hint Tell Me More!

Wireless is good because the field micro:bit can be used far away from your Field Station. 

Wireless signals get weaker over long distances, and through walls. 

hint~

## Reflect

In this tutorial, you **modified** a program to add a new **event** and tested how wireless connections work in the real world. Record your answers in the workspace.

1. Think about something in this project that was tricky. How did you figure it out?

2. What is one good thing and one problem with using a wireless connection for a wildlife station?

3. What is one more change you would make to improve your Field Station?

## Congratulations!

Here's a summary of what you modified:

- ``||input:On Quiet Sound||``: A new **event** that runs when the field micro:bit hears quiet and sends a "Quiet" message wirelessly

- ``||radio:On Received String||``: Updated with a second ``||logic:If||`` condition so the Field Station responds to both "Loud" and "Quiet"

- ``||fwdLights:LED Ring||``: Now shows green when the environment is quiet

In the next step, click the ``|Done|`` button to exit the tutorial.

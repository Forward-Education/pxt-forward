# Field Station – Use Tutorial

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
Q2: */
```

## Field Station - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Field Station works.

1. **Build**: Assemble your Field Station and field micro:bit

2. **Connect**: Pair your micro:bits and download the starter code

3. **Use**: Run the program and explore the code

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

## Identify: Events

An **event** runs when something specific happens, like pressing a button. The code within the event will only run when the condition is met. 

Look at your code in your workspace, where is an **event** used?

~hint Tell Me More!

The ``||input:On Loud Sound||`` block is an event! It waits until the microphone hears a loud sound, then it runs.

hint~

```blocks
// @highlight
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Loud")
})
```

## Identify: Sequence

**Sequence** means the program does things in order. It finishes one step, then starts the next.

What's an example of a **sequence** in this program? 

~hint Tell Me More!

The LED Ring has a sequence!

1. First, the ``||fwdLights:LED Ring||`` turns red.

2. Then, the program waits 1 second.

3. Last, the ``||fwdLights:LED Ring||`` turns off.

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        // @highlight
        basic.pause(1000)
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Identify: Selection

**Selection** means the program checks something before deciding what to do.

Which part of your code uses **selection**?

~hint Tell Me More!

The ``||logic:If||`` block is a **condition**. It checks **if** the message from the Field micro:bit says "Loud".

* If yes, the ``||fwdLights:LED Ring||`` turns red. 

* If not, the ``||fwdLights:LED Ring||`` stays off. 

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    // @highlight
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Identify: Iteration

**Iteration** means the program keeps repeating the same steps.

Which part of your code uses **iteration**?

~hint Tell Me More!

The ``||basic:Forever||`` **loop** keeps reading the sound level and updating the bar graph. 

As long as the micro:bit has power, the code in the ``||basic:Forever||`` **loop** will run.

hint~

```blocks
// @highlight
basic.forever(function () {
    led.plotBarGraph(input.soundLevel(), 255)
})
```

## Explore: Observe the Program

Now that we've investigated how our program works, let's test it out in real life! 

Unplug the Field Station and power on both devices. Look at the ``||basic:microbit Display||`` on your **Field Station**.

What happens when you make a loud noise near the **field micro:bit**?

~hint Tell Me More!

The bar graph on the ``||basic:microbit Display||`` gets bigger when the room is louder. The louder the sound, the taller the bar.

hint~

## Predict: Loud Sound

Look at the ``||input:On Loud Sound||`` event. What do you think will happen on the Field Station when you make a loud sound near the field micro:bit?

```blocks
// @highlight
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Loud")
})
```

## Try It: Loud Sound

Clap or shout near the field micro:bit. Watch the ``||fwdLights:LED Ring||`` on the Field Station.

What colour appeared? How long did it last?

~hint Tell Me More!

The field micro:bit heard the sound and sent a "Loud" message by radio.

The Field Station received the message and flashed the ``||fwdLights:LED Ring||`` red for 1 second.

hint~

## Investigate: How Information Travels

Describe the sequence of your code, starting with the microphone on the field micro:bit. 

Where does the information go next? Where does it end up?

~hint Tell Me More!

1. The microphone detects a loud sound and the ``||input:On Loud Sound||`` event runs.

2. It sends a message wirelessly on group 1, like a shared channel.

3. The Field Station is listening on the same group. It receives the message.

4. The ``||logic:If||`` condition checks the message and lights up the ``||fwdLights:LED Ring||``.

Connected devices on the internet work the same way: one device sends data, another receives it and responds.

hint~

## Reflect

In this tutorial, you used **events**, **sequence**, **selection**, and **iteration** to build a two-device wireless alert system. Record your answers in the workspace.

1. What happens when a loud sound is detected? Which part of the code makes that happen?

2. How does information get from the field micro:bit to the ``||fwdLights:LED Ring||``? Describe each step.

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||input:On Loud Sound||``: An **event** that runs when the field micro:bit hears a loud sound and sends a "Loud" message wirelessly

- ``||radio:On Received String||``: An **event** that receives the message and uses **selection** to decide what colour to show

- ``||basic:Forever||``: A **loop** that keeps reading and displaying the sound level on each micro:bit's display

- ``||radio:Set Group||``: Sets the shared channel so both micro:bits can communicate

In the next step, click the ``|Done|`` button to exit the tutorial.

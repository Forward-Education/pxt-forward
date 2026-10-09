# Avalanche Beacon – Use Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
})
let lastReceived = 0
let Signal = 0
radio.setGroup(1)
fwdSensors.initializeLcd()
Signal = 0
lastReceived = 0
loops.everyInterval(1000, function () {
    radio.sendString("")
})
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
    }
})
/* Reflect:
Q1:
Q2: */
```

## Avalanche Beacon - Use Tutorial @showdialog

In this tutorial, you will **use** a program to explore how your Avalanche System works.

1. **Build**: Assemble your Avalanche Beacon and Search Device

2. **Connect**: Pair your micro:bits and download the starter code

3. **Use**: Run the program and hunt the beacon

## Setup: Avalanche Beacon @showdialog

IMPORTANT! Make sure your Search Device is assembled and the Breakout Board micro:bit is plugged into your computer. Keep your beacon micro:bit nearby.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code onto **both** micro:bits. Both devices need the same code.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window. 

## Two-Device Setup

This project uses two micro:bits that work as a team.

* The **Avalanche Beacon** (powered by a CHARGE for micro:bit). It gets hidden in the search area.

* The **Search Device** (Breakout Board micro:bit) uses the ``||fwdSensors:LCD Screen||`` to search for the avalanche beacon.

## Identify: The Transmitter

In a wireless network, the **transmitter** sends the signal.

Which part of your code is the transmitter?

~hint Tell Me More!

The ``||radio: Radio Send String ||`` block sends a signal from the micro:bit. 

Since we've downloaded the same program to both micro:bits, they both transmit their signal.

hint~

```blocks
loops.everyInterval(1000, function () {
// @highlight
    radio.sendString(" ")
})
```

## Identify: The Channel

In a wireless network, devices need to use the same **channel** to communicate.

Which part of your code sets the channel?

~hint Tell Me More!

``||radio:Set Group||`` sets the radio group to 1. Both micro:bits use the same group, so they can hear each other.

Devices on different groups cannot communicate. A radio group works like a channel on a walkie-talkie.

hint~

```blocks
// @highlight
radio.setGroup(1)
```

## Identify: The Receiver

In a wireless network, the **receiver** picks up signals from the transmitter.

Which part of your code is the receiver?

~hint Tell Me More!

The ``||radio:On Received String||`` block runs every time a signal arrives from the beacon.

It reads the signal strength and records when the signal arrived.

hint~

```blocks
// @highlight
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
})
```

## Explore: Predict the Display

With both the Avalanche Beacon, and the Search Device powered on, look at the ``||fwdSensors:LCD Screen||``. 

What do you see? What number is showing?

~hint Tell Me More!

The ``||fwdSensors:LCD Screen||`` displays the ``||variables:Signal||`` strength, between 0% - 100%

The higher the number, the stronger the ``||variables:Signal||`` and the closer the beacon.

hint~

## Explore: Hide the Avalanche Beacon

What do you think will happen to the ``||variables:Signal||`` if you hide your **Avalanche Beacon** in a drawer or backpack? 

Test it out!

~hint Tell Me More!

When the Avalanche Beacon is blocked by materials, the ``||variables:Signal||`` gets smaller!

Wireless devices don't communicate well between walls and thick materials.

hint~

## Predict: No Signal

Look at the ``||logic:If||`` block in your code. What do you think the ``||fwdSensors:LCD||`` will show if no signal arrives for more than 3 seconds?

```blocks
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
    // @highlight
        fwdSensors.lcd1.printLineString("No Signal", 1)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
    }
})
```

## Try It: Hunt the Beacon

Walk around the room with the Search Device. Watch the ``||variables:Signal||``  on the ``||fwdSensors:LCD Screen||``.

Does the number get bigger when you move closer? What happens when you move far away?

~hint Tell Me More!

The closer you are to the hidden beacon, the stronger the ``||variables:Signal||``.

If the screen shows "No Signal", you have moved too far away or the ``||variables:Signal||`` is blocked.

hint~

## Investigate: How Wireless Signals Work

Think about how the two micro:bits are communicating. There is no cable connecting them.

How is information getting from the beacon to the Search Device?

~hint Tell Me More!

Both micro:bits send and receive on the same radio group, like a shared channel.

The ``||variables:Signal||`` gets weaker over distance or through walls. That is why the number changes as you move.

Real wireless networks, like Wi-Fi, work the same way. The farther you are from the router, the weaker the connection.

hint~

## Reflect

In this tutorial, you investigated how a wireless network connects two devices to track a beacon. Record your answers in the workspace.

1. What does the ``||variables:Signal||`` tell you? How is that useful for finding a beacon?

2. What happens when the micro:bits are too far apart? Why does that happen?

## Congratulations!

You've completed this tutorial! Here's a summary of your program:

- ``||radio:Send String||``: The **transmitter** sends a beacon ``||variables:Signal||`` every second

- ``||radio:Set Group||``: The **channel** sets the shared group so both devices can communicate

- ``||radio:On Received String||``: The **receiver** picks up signals and reads the ``||variables:Signal||`` strength

- ``||basic:Forever||``: Keeps checking the ``||variables:Signal||`` and updating the ``||fwdSensors:LCD||``

- ``||logic:If||``: Shows "No Signal" when the beacon has been quiet for 3 seconds

In the next step, click the ``|Done|`` button to exit the tutorial.

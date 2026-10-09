# Avalanche Beacon – Modify Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
    BeaconName = receivedString
})
let BeaconName = ""
let lastReceived = 0
let Signal = 0
radio.setGroup(1)
fwdSensors.initializeLcd()
Signal = 0
lastReceived = 0
BeaconName = ""
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
Q2:
Q3: */
```

## Avalanche Beacon - Modify Tutorial @showdialog

In this tutorial, you will **modify** the code to upgrade your beacon. Instead of just sending a signal, it will send a name so rescuers know which group needs help.

1. **Build**: Assemble your Avalanche Beacon and Search Device

2. **Connect**: Pair your micro:bits and download the starter code

3. **Modify**: Add a beacon name and test your upgraded system

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your project is assembled and the Breakout Board micro:bit is plugged into your computer. Keep your beacon micro:bit nearby.

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

## Explore: How the Program Works

Test the starter code by placing your Avalanche Beacon on the other side of the room. 

Hold your Search Device in your hand, and walk toward the beacon. What happens to the ``||fwdSensors:LCD Display||`` on your search device?

~hint Tell Me More!

1. The ``||radio:Radio Send String||`` block sends a signal every second.

2. The ``||radio:On Received String||`` event picks up that signal and calculates how strong it is.

3. Right now, the ``||fwdSensors:LCD Screen||`` only displays the ``||variables:Signal||`` strength, out of 100%.

hint~

## Modify: Change the Beacon Message

Right now, our Avalanche Beacon doesn't send any message to the Search Device. 

Find the ``||radio:Radio Send String||`` block in your workspace, and type **Group 1** as the message.

~hint Tell Me More!

Make sure your group name is 8 characters or fewer. Each section of the ``||fwdSensors:LCD Screen||`` can only show 8 characters.

hint~

```blocks
loops.everyInterval(1000, function () {
// @highlight
    radio.sendString("Group 1")
})
```

## Modify: Save the Beacon Name

The Search Device needs to store the beacon name sent from the Avalanche Beacon. 

Drag a ``||variables:Set BeaconName to||`` block inside ``||radio:On Received String||`` event. 

Copy the round ``||variables:receivedString||`` block, and drag it into the empty string.

~hint Tell Me More!

Every time a signal is sent from the Avalanche beacon, the ``||variables:BeaconName||`` variable stores the name the beacon sent.

Storing it in ``||variables:BeaconName||`` means the ``||basic:Forever||`` loop can read and display it.

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
    // @highlight
    BeaconName = receivedString
})
```

## Modify: Display the Beacon Label

Next, we need to add a label to the bottom row of the ``||fwdSensors:LCD Screen||``. 

Drag a ``||fwdSensors:LCD Print String on Quadrant||`` block into the ``||logic:Else||`` branch of the ``||basic:Forever||`` loop. 

set the string to **"Beacon: "**, and Quadrant to **3**. 

~hint Tell Me More!

Quadrant 3 is the bottom-left of the ``||fwdSensors:LCD Screen||``.

This is just the label. The name itself goes in quadrant 4 in the next step.

hint~

```blocks
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
        // @highlight
        fwdSensors.lcd1.printQuadrantString("Beacon:", 3)
    }
})
```

## Modify: Show the Beacon Name

Now display the ``||variables:BeaconName||`` variable! 

Drag another ``||fwdSensors: Print String on Quadrant||`` block into the ``||logic:Else||`` branch of the ``||basic:Forever||`` loop. 

Drag a ``||variables:BeaconName||`` block into the **string** field, and the set the quadrant to **4**

~hint Tell Me More!

Quadrant 4 is the bottom-right of the ``||fwdSensors:LCD Screen||``.

The LCD screen will now show: top row for signal strength, bottom row for the beacon name.

hint~

```blocks
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
        fwdSensors.lcd1.printQuadrantString("Beacon:", 3)
        // @highlight
        fwdSensors.lcd1.printQuadrantString(BeaconName, 4)
    }
})
```

## Modify: Update No Signal

When the signal is lost, the bottom row of the ``||fwdSensors:LCD Screen||`` should clear too. Drag a ``||fwdSensors:Print String on Line||`` block into the ``||logic:If||`` branch in the ``||basic:Forever||`` loop. 

Set the string to **"No Beacon"** on line **2**.

~hint Tell Me More!

Without this step, the old beacon name could stay on screen even after the signal is gone.

"No Beacon" tells the rescuer the signal and the identity are both lost.

hint~

```blocks
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
        // @highlight
        fwdSensors.lcd1.printLineString("No Beacon", 2)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
        fwdSensors.lcd1.printQuadrantString("Beacon:", 3)
        fwdSensors.lcd1.printQuadrantString(BeaconName, 4)
    }
})
```

## Test: Try It Nearby

You're ready to test your changes! ``|Download|`` your program to both your **Avalanche Beacon** and your **Search Device**. 

Keep the beacon micro:bit close to the Search Device. Watch the ``||fwdSensors:LCD Display||``.

Does **Group 1** appear on the bottom row?

~hint Tell Me More!

The **Avalanche Beacon** is now sending the name "Group 1" with every signal.

The **Search Device** receives it and stores it in the ``||variables:BeaconName||`` variable, then displays it on the ``||fwdSensors:LCD Screen||``.

hint~

## Test: Move to a New Spot

Hide the **Avalanche Beacon**, and use your **Search Device** to try to find it. 

Does the name stay on screen as you move? What happens when you go too far?

~hint Tell Me More!

As long as a ``||variables:Signal||`` from the **Avalanche Beacon** reaches the **Search Device** within 3 seconds, the ``||variables:BeaconName||`` displays on the ``||fwdSensors:LCD Screen||``.

When the signal is lost, the ``||fwdSensors:LCD Screen||`` to "No Signal" and "No Beacon".

hint~

## Test: Change the Name

Try changing **"Group 1"** in the ``||loops:Every 1000 ms||`` block to your a new name. ``|Download|`` your updated program to both micro:bits and test it.

What happens if your name is longer than 8 characters?

~hint Tell Me More!

Each quadrant on the ``||fwdSensors:LCD Screen||`` can only display 8 characters. Longer names get cut off.

This is a real design limit of low-power display hardware. Engineers who build rescue devices face the same problem.

hint~

## Investigate: Message vs. Signal

A **signal** tells you where the beacon is. A **message** tells you who it is.

What could a rescue team learn from the beacon name that they could not learn from the signal strength alone? Is there anything a message cannot tell you?

~hint Tell Me More!

The **signal strength** tells you distance and direction. It does not tell you **who** is in trouble.

A **beacon name** tells you which group needs help. A team rescuing multiple groups at once could tell them apart.

But a short name has limits. Eight characters is not much space for detailed information. Real emergency beacons solve this by using unique codes registered to a person or vessel.

hint~

## Reflect

In this tutorial, you **modified** a program to send a group name with every signal. Record your answers in the workspace.

1. What new information does the beacon name give a rescuer? Why does that matter?

2. Why can the name only be 8 characters long? What would you change if you could redesign the display?

3. What is one more piece of information you would want a real avalanche beacon to send?

## Congratulations!

You've completed this tutorial! Here's a summary of what you modified:

- ``||radio:On Received String||``: Updated to receive the group name from the Avalanche Beacon

- ``||fwdSensors:LCD Screen||``: Now shows the ``||variables:BeaconName||`` on the bottom row alongside the signal strength

- ``||logic:If||``: Updated so "No Beacon" appears when the signal is lost

In the next step, click the ``|Done|`` button to exit the tutorial.

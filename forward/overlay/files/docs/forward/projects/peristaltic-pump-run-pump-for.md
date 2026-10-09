# Peristaltic Water Pump: Run Pump For

## Finished project

![Peristaltic Water Pump: Run Pump For](/static/forward/learn/5b2633147d668787.webp)

How to connect and code with the Peristaltic Water Pump using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Peristaltic Water Pump](https://learn.forwardedu.com/peristaltic-pump/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
```

```template
/**
 * When the micro:bit logo is pressed, the pump runs for 1/2 second.
 */
/**
 * Modify & Create: Add an event that runs the pump for 1 second when a button is pressed.
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.pump.timedRun(500)
})
fwdMotors.pump.setOn(false)
```

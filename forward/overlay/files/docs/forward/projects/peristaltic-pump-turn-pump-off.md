# Peristaltic Water Pump: Turn [pump off]

## Finished project

![Peristaltic Water Pump: Turn [pump off]](/static/forward/learn/5b2633147d668787.webp)

How to connect and code with the Peristaltic Water Pump using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Peristaltic Water Pump](https://learn.forwardedu.com/peristaltic-pump/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
```

```template
/**
 * When pressing the A button on the micro:bit, the pump turns off.
 * 
 * When pressing the B button on the micro:bit, the pump turns on.
 */
/**
 * Modify & Create: Add a visual or audio reactions when the pump is turned on or off.
 */
input.onButtonPressed(Button.A, function () {
    fwdMotors.pump.setOn(false)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.pump.setOn(true)
})
fwdMotors.pump.setOn(false)
```

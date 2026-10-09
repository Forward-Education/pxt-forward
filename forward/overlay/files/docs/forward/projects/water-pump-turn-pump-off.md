# Submersible Water Pump: Turn [pump off]

## Finished project

![Submersible Water Pump: Turn [pump off]](/static/forward/learn/0da3ec6d409d8d47.webp)

Learn about how to use the Water Pump in the Climate Action Kit.

This is a finished project from Forward Education's [Submersible Water Pump](https://learn.forwardedu.com/water-pump/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

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

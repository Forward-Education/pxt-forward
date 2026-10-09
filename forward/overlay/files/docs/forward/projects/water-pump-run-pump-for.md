# Submersible Water Pump: Run Pump For

## Finished project

![Submersible Water Pump: Run Pump For](/static/forward/learn/0da3ec6d409d8d47.webp)

Learn about how to use the Water Pump in the Climate Action Kit.

This is a finished project from Forward Education's [Submersible Water Pump](https://learn.forwardedu.com/water-pump/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

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

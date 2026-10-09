# Submersible Water Pump: Pump <is on>

## Finished project

![Submersible Water Pump: Pump <is on>](/static/forward/learn/0da3ec6d409d8d47.webp)

Learn about how to use the Water Pump in the Climate Action Kit.

This is a finished project from Forward Education's [Submersible Water Pump](https://learn.forwardedu.com/water-pump/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
```

```template
/**
 * If the the pump is on, a checkmark icon will display on the micro:bit display, else, an X button will display
 */
/**
 * Modify & Create: Create a timer variable that will track how long the pump has been on for.
 */
fwdMotors.pump.setOn(false)
basic.forever(function () {
    if (fwdMotors.pump.isOn()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```

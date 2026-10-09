# Peristaltic Water Pump: Pump <is on>

## Finished project

![Peristaltic Water Pump: Pump <is on>](/static/forward/learn/5b2633147d668787.webp)

How to connect and code with the Peristaltic Water Pump using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Peristaltic Water Pump](https://learn.forwardedu.com/peristaltic-pump/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

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

# LED Lights: LED Lights <is on>

## Finished project

![LED Lights: LED Lights <is on>](/static/forward/learn/c1686ed440ecbb1a.webp)

How to connect and code with the LED Lights using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [LED Lights](https://learn.forwardedu.com/led-lights/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * If the LED Lights is greater than 0%, show a checkmark icon on the micro:bit display.
 * 
 * Else, show a cross on the micro:bit display.
 */
/**
 * Modify & Create: How would you use this block to create other conditional statements?
 */
fwdLights.lights1.setBrightness(0)
basic.forever(function () {
    if (fwdLights.lights1.isOn()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```

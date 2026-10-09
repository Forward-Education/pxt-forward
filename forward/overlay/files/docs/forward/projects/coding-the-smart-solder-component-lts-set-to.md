# Coding the Smart Solder Component: LTS Set To

## Finished project

![Coding the Smart Solder Component: LTS Set To](/static/forward/learn/995168cbf19704c6.webp)

How to connect and code with the smart solder component using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Coding the Smart Solder Component](https://learn.forwardedu.com/coding-the-smart-solder-component/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-soldering=github:Forward-Education/pxt-smart-soldering#v1.2.3
```

```template
/**
 * Turn on the green, yellow, and red LEDs for 0.5 seconds, and then turn them all off for 0.5 seconds.
 */
/**
 * Modify & Create: How would you create a different pattern with the LEDs?
 */
fwdLights.GREEN.setOnOff(false)
basic.forever(function () {
    fwdLights.GREEN.setOnOff(true)
    fwdLights.YELLOW.setOnOff(true)
    fwdLights.RED.setOnOff(true)
    basic.pause(500)
    fwdLights.GREEN.setOnOff(false)
    fwdLights.YELLOW.setOnOff(false)
    fwdLights.RED.setOnOff(false)
    basic.pause(500)
})
```

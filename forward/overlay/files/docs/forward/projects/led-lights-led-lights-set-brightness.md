# LED Lights: LED Lights [set brightness]

## Finished project

![LED Lights: LED Lights [set brightness]](/static/forward/learn/c1686ed440ecbb1a.webp)

How to connect and code with the LED Lights using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [LED Lights](https://learn.forwardedu.com/led-lights/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * Turn off the LED Lights for 5 seconds, then on for 5 seconds.
 */
/**
 * Modify & Create: How would you create a dimming effect with the LEDs?
 */
fwdLights.lights1.setBrightness(0)
basic.forever(function () {
    fwdLights.lights1.setBrightness(0)
    basic.pause(5000)
    fwdLights.lights1.setBrightness(100)
    basic.pause(5000)
})
```

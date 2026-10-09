# Color Sensor: Set Color Brightness to %

## Finished project

![Color Sensor: Set Color Brightness to %](/static/forward/learn/586c39e8b511d9fc.webp)

How to connect and code with the Color sensor using the breakout board and micro:bit V2

This is a finished project from Forward Education's [Color Sensor](https://learn.forwardedu.com/color-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * On button A pressed: 
 * 
 * Set the color sensor LED to off. 
 * 
 * On button B pressed: Set the color sensor LED to 100% brightness.
 */
input.onButtonPressed(Button.A, function () {
    fwdSensors.colorLED1.setBrightness(0)
})
/**
 * Always use the "set color brightness" block to turn on the LED on the color sensor. The brighter the light, the more accurate the sensor is when detecting a color. 
 * 
 * 0% = black/very little color detected
 * 
 * 100% = white/high amount of color detected
 */
input.onButtonPressed(Button.B, function () {
    fwdSensors.colorLED1.setBrightness(100)
})
```

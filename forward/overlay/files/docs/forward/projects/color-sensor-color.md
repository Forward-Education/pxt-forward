# Color Sensor: Color %

## Finished project

![Color Sensor: Color %](/static/forward/learn/586c39e8b511d9fc.webp)

How to connect and code with the Color sensor using the breakout board and micro:bit V2

This is a finished project from Forward Education's [Color Sensor](https://learn.forwardedu.com/color-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * When a button is pressed on the micro:bit, display the color value (0-100%) on the micro:bit display. 
 * 
 * A: Red
 * 
 * B: Green
 * 
 * Logo: Blue
 * 
 * Modify & Create: Set the LED ring to a detected color.
 */
/**
 * Always use the "set color brightness" block to turn on the LED on the color sensor. The brighter the light, the more accurate the sensor is when detecting a color. 
 * 
 * 0% = black/very little color detected
 * 
 * 100% = white/high amount of color detected
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(fwdSensors.color1.color(fwdSensors.RedGreenBlue.Red))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(fwdSensors.color1.color(fwdSensors.RedGreenBlue.Green))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(fwdSensors.color1.color(fwdSensors.RedGreenBlue.Blue))
})
basic.forever(function () {
    fwdSensors.colorLED1.setBrightness(100)
})
```

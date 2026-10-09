# Color Sensor: Color is between () and ()%

## Finished project

![Color Sensor: Color is between () and ()%](/static/forward/learn/586c39e8b511d9fc.webp)

How to connect and code with the Color sensor using the breakout board and micro:bit V2

This is a finished project from Forward Education's [Color Sensor](https://learn.forwardedu.com/color-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * Modify & Create: On button A pressed, display the value of green detected.
 */
/**
 * Always use the "set color brightness" block to turn on the LED on the color sensor. The brighter the light, the more accurate the sensor is when detecting a color. 
 * 
 * 0% = black/very little color detected
 * 
 * 100% = white/high amount of color detected
 */
/**
 * Set the Color LED Brightness to 100%
 * 
 * If the color blue is between 0-25%, display a single pixel on the micro:bit display
 */
/**
 * Else, if the color blue is between 25.1% - 75%, display a medium square on the micro:bit display
 */
/**
 * Else, (the color blue is 75 - 100%), display a large square on the micro:bit display.
 */
basic.forever(function () {
    fwdSensors.colorLED1.setBrightness(100)
    if (fwdSensors.color1.isBetween(fwdSensors.RedGreenBlue.Blue, 0, 25)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (fwdSensors.color1.isBetween(fwdSensors.RedGreenBlue.Blue, 25.1, 75)) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
```

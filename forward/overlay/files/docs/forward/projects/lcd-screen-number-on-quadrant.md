# LCD Screen: Number on quadrant

## Finished project

![LCD Screen: Number on quadrant](/static/forward/learn/d75e6c60545b2e05.webp)

How to connect and code with the LCD screen using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [LCD Screen](https://learn.forwardedu.com/lcd-screen/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * On quadrant 1, print the number: 12345678. 
 * 
 * On quadrant 2, print the live light level detected by the micro:bit 
 * 
 * On quadrant 3, print a random number between 0 and 10 
 * 
 * If your string is too long, ">8 chars" will display instead of your text.
 * 
 * Text characters are not a valid input.
 */
/**
 * Modify & Create: On button A pressed, print a random number between 0 to 10.
 */
fwdSensors.initializeLcd()
basic.forever(function () {
    fwdSensors.lcd1.printQuadrantNumber(12345678, 1)
    fwdSensors.lcd1.printQuadrantNumber(input.lightLevel(), 2)
    fwdSensors.lcd1.printQuadrantNumber(randint(0, 10), 3)
})
```

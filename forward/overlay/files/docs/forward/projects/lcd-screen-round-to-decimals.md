# LCD Screen: Round to Decimals

## Finished project

![LCD Screen: Round to Decimals](/static/forward/learn/d75e6c60545b2e05.webp)

How to connect and code with the LCD screen using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [LCD Screen](https://learn.forwardedu.com/lcd-screen/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * Modify & Create: On button A pressed, round to a random number between 0 and 15 decimals.
 */
fwdSensors.initializeLcd()
/**
 * Print the square root of 6 on line 1. 
 * 
 * Print the square root of 6, rounded to 2 decimals on line 2. 
 * 
 * Text input is not accepted.
 */
basic.forever(function () {
    fwdSensors.lcd1.printLineNumber(Math.sqrt(6), 1)
    fwdSensors.lcd1.printLineNumber(fwdSensors.round(Math.sqrt(6), 2), 2)
})
```

# LCD Screen: Number on Line

## Finished project

![LCD Screen: Number on Line](/static/forward/learn/d75e6c60545b2e05.webp)

How to connect and code with the LCD screen using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [LCD Screen](https://learn.forwardedu.com/lcd-screen/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * Modify & Create:
 * 
 * On button A pressed, print a random number between 0 to 10.
 */
/**
 * On line, print the number: 123456789012345.
 * 
 * If your string is too long, ">16 chars" will display instead of your text.
 * 
 * Text characters are not a valid input.
 */
fwdSensors.initializeLcd()
basic.forever(function () {
    fwdSensors.lcd1.printLineNumber(123456789012345, 1)
})
```

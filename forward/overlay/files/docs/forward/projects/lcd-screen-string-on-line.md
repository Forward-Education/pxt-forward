# LCD Screen: String on Line

## Finished project

![LCD Screen: String on Line](/static/forward/learn/d75e6c60545b2e05.webp)

How to connect and code with the LCD screen using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [LCD Screen](https://learn.forwardedu.com/lcd-screen/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
fwdSensors.initializeLcd()
/**
 * On line 1, display the text: "Line 1"
 * 
 * On line 2, display the text: "Line 2"
 * 
 * If your string is too long, ">16 chars" will display instead of your text.
 */
/**
 * Modify & Create: If you press a button, display a different message.
 */
basic.forever(function () {
    fwdSensors.lcd1.printLineString("Line 1", 1)
    fwdSensors.lcd1.printLineString("Line 2", 2)
})
```

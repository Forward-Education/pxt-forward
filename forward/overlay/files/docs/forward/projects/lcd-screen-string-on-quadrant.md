# LCD Screen: String on quadrant

## Finished project

![LCD Screen: String on quadrant](/static/forward/learn/d75e6c60545b2e05.webp)

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
 * Modify & Create: If you press a button, move the message to a new quadrant.
 */
/**
 * On quadrant 1, display the text: "Quad 1", repeat for quadrants 2, 3, 4.
 * 
 * If your string is too long, ">8 chars" will display instead of your text.
 */
basic.forever(function () {
    fwdSensors.lcd1.printQuadrantString("Quad 1", 1)
    fwdSensors.lcd1.printQuadrantString("Quad 2", 2)
    fwdSensors.lcd1.printQuadrantString("Quad 3", 3)
    fwdSensors.lcd1.printQuadrantString("Quad 4", 4)
})
```

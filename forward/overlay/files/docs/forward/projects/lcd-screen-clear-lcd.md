# LCD Screen: Clear LCD

## Finished project

![LCD Screen: Clear LCD](/static/forward/learn/d75e6c60545b2e05.webp)

How to connect and code with the LCD screen using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [LCD Screen](https://learn.forwardedu.com/lcd-screen/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
input.onButtonPressed(Button.A, function () {
    fwdSensors.lcd1.printLineString("Hello", 1)
    fwdSensors.lcd1.printLineString("World", 2)
})
input.onButtonPressed(Button.B, function () {
    fwdSensors.lcd1.clearScreen()
})
/**
 * Modify & Create: Clear the screen when shaking the micro:bit
 */
/**
 * OnStart: Initialize LCD, then print "Press A: Hello" on line 1, and "Press B: Clear" on line 2
 * 
 * On Button A Pressed: Print String "Hello" on Line 1 and "World" on line 2. 
 * 
 * On Button B pressed: Clear LCD
 */
fwdSensors.initializeLcd()
fwdSensors.lcd1.printLineString("Press A: Hello", 1)
fwdSensors.lcd1.printLineString("Press B: Clear", 2)
```

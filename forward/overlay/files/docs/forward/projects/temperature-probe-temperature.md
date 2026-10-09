# Temperature Probe: Temperature

## Finished project

![Temperature Probe: Temperature](/static/forward/learn/f079a22fe20609e0.webp)

How to connect and code with the Temperature Probe using the breakout board and micro:bit V2

This is a finished project from Forward Education's [Temperature Probe](https://learn.forwardedu.com/temperature-probe/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * If the micro:bit logo is pressed, the temperature value in degrees celsius will display for 2 seconds, then clear.
 */
/**
 * Modify & Create: Create a variable to calculate the temperature in degrees Fahrenheit when the A button is pressed.
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(fwdSensors.temperature1.temperature())
    basic.pause(2000)
    basic.clearScreen()
})
let Temperature = fwdSensors.temperature1.temperature()
```

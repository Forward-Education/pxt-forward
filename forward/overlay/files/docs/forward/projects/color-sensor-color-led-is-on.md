# Color Sensor: Color LED is On

## Finished project

![Color Sensor: Color LED is On](/static/forward/learn/586c39e8b511d9fc.webp)

How to connect and code with the Color sensor using the breakout board and micro:bit V2

This is a finished project from Forward Education's [Color Sensor](https://learn.forwardedu.com/color-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * Set the color sensor LED brightness to 100% 
 * 
 * If the color sensor LED is between 1-100%, display a checkmark on the micro:bit display.
 * 
 * Else (it is 0%), display an X on the micro:bit display.
 */
/**
 * Modify & Create: On button A pressed, set color led brightness to 0%. 
 * 
 * On button b pressed, set color LED brightness to 100%. What happens to your X & checkmark?
 */
basic.forever(function () {
    fwdSensors.colorLED1.setBrightness(100)
    if (fwdSensors.colorLED1.isOn()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```

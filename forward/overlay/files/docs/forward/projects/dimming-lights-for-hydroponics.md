# Dimming Lights for Hydroponics

## Finished project

![Dimming Lights for Hydroponics](/static/forward/learn/1dd5757a964732bf.webp)

Create a light cycle to help plants grow with the Smart Hydroponics Kit.

This is a finished project from Forward Education's [Dimming Lights for Hydroponics](https://learn.forwardedu.com/dimming-lights-for-hydroponics/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * Remember to plug in your Breakout Board battery to a power source using a micro USB cable if you are using this project for more than one day at a time.
 */
// When pressing "A" on the micro:bit
// 
// Decrease the light brightness by 25%
// 
// If the value is already at 0%, play a low sound.
input.onButtonPressed(Button.A, function () {
    if (Brightness > 0) {
        Brightness = Brightness - 25
    }
})
// When pressing "B" on the micro:bit
// 
// Increase the light brightness by 25%. 
// 
// If the brightness is already 100%, play a high sound.
input.onButtonPressed(Button.B, function () {
    if (Brightness < 100) {
        Brightness = Brightness + 25
    }
})
let Brightness = 0
Brightness = 0
fwdLights.lights1.setBrightness(Brightness)
// Set the brightness of the light to the value of the Brightness Variable 
// 
// Display the brightness value on the micro:bit display
basic.forever(function () {
    fwdLights.lights1.setBrightness(Brightness)
    basic.showNumber(Brightness)
})
```

# pH Probe: pH (pH)

## Finished project

![pH Probe: pH (pH)](/static/forward/learn/f6a02cc76ad804e0.webp)

How to connect and code with the pH probe using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [pH Probe](https://learn.forwardedu.com/ph-probe/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * When the micro:bit logo is pressed, display the value of pH.
 */
/**
 * Modify & Create: Add a condition that makes a noise when the pH is over a certain value.
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(fwdSensors.ph1.ph())
})
let pH = fwdSensors.ph1.ph()
```

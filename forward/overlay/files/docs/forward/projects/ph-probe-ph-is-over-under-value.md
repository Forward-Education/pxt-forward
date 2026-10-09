# pH Probe: pH is over/under value

## Finished project

![pH Probe: pH is over/under value](/static/forward/learn/f6a02cc76ad804e0.webp)

How to connect and code with the pH probe using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [pH Probe](https://learn.forwardedu.com/ph-probe/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * If the pH is over 4, an arrow pointing up displays on the micro:bit. 
 * 
 * If the pH is under 4, an arrow pointing dow on the micro:bit displays.
 */
/**
 * Modify & Create: Create an alert for a specific pH value.
 */
let pH = fwdSensors.ph1.ph()
basic.forever(function () {
    if (fwdSensors.ph1.isPastThreshold(4, fwdEnums.OverUnder.Over)) {
        basic.showArrow(ArrowNames.North)
    }
    if (fwdSensors.ph1.isPastThreshold(4, fwdEnums.OverUnder.Under)) {
        basic.showArrow(ArrowNames.South)
    }
})
```

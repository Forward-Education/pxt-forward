# pH Probe: calibrate pH

## Finished project

![pH Probe: calibrate pH](/static/forward/learn/f6a02cc76ad804e0.webp)

How to connect and code with the pH probe using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [pH Probe](https://learn.forwardedu.com/ph-probe/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * Calibrate the pH value.
 * 
 * Use two pH calibration solutions to measure your pH probe. Change the number displayed in the "measures" field.
 * 
 * We recommend a 7.0, followed by 4.0 solution
 */
/**
 * Modify & Create: If the state is raised (1), create a sound reaction until the float sensor is lowered (0).
 */
input.onButtonPressed(Button.AB, function () {
    fwdSensors.ph1.calibrate(
    0,
    7,
    0,
    4
    )
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
})
```

# Tracking Seedlings with Plant Stakes

## Finished project

![Tracking Seedlings with Plant Stakes](/static/forward/learn/176bac1b4ef4a0c7.webp)

Create a plant stake to personalize smart agricultural projects using a laser cutter.

This is a finished project from Forward Education's [Tracking Seedlings with Plant Stakes](https://learn.forwardedu.com/tracking-seedlings-with-plant-stakes/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.3
```

```template
/**
 * Modify & Create: Write your code's moisture settings on your plant stake!
 */
/**
 * Press the A button to turn the project on. 
 * 
 * Press the micro:bit logo to turn the project off.
 * 
 * If the moisture is less than 20%, water the plant.
 */
input.onButtonPressed(Button.A, function () {
    if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.pump.setActive(false)
})
fwdMotors.pump.setActive(false)
```

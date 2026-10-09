# Energy Sensor: Energy Sensor <current over/under>

## Finished project

![Energy Sensor: Energy Sensor <current over/under>](/static/forward/learn/c8e6c3f1e3fbf50a.webp)

How to connect and code with the Energy Sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Energy Sensor](https://learn.forwardedu.com/energy-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-solar=github:Forward-Education/pxt-smart-solar#v2.0.3
```

```template
/**
 * If the current (mA) is greater than 1, display a :).
 * 
 * If it is less than 1, display a :(.
 */
/**
 * Modify & Create: Add other conditions, noises, or sensors to this conditional statement!
 */
let Current = fwdSensors.current1.current()
let Voltage = fwdSensors.voltage1.voltage()
/**
 * Make sure you are using a USB cable on the load side of the energy sensor for this code.
 */
basic.forever(function () {
    if (fwdSensors.current1.isPastThreshold(1, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    }
    if (fwdSensors.current1.isPastThreshold(1, fwdEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.Sad)
    }
})
```

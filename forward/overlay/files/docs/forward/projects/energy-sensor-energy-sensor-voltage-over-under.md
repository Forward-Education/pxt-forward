# Energy Sensor: Energy Sensor <voltage over/under>

## Finished project

![Energy Sensor: Energy Sensor <voltage over/under>](/static/forward/learn/c8e6c3f1e3fbf50a.webp)

How to connect and code with the Energy Sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Energy Sensor](https://learn.forwardedu.com/energy-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-solar=github:Forward-Education/pxt-smart-solar#v2.0.3
```

```template
/**
 * If the voltage (V) is greater than 1, display a :).
 * 
 * If it is less than 1, display a :(.
 */
/**
 * Modify & Create: Add a condition that makes a noise when the voltage is over a certain value.
 */
let Voltage = fwdSensors.voltage1.voltage()
/**
 * Make sure you are using a micro USB cable on the energy side of the energy sensor connected to a solar panel or battery for this code.
 */
basic.forever(function () {
    if (fwdSensors.voltage1.isPastThreshold(1, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Happy)
    }
    if (fwdSensors.voltage1.isPastThreshold(1, fwdEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.Happy)
    }
})
```

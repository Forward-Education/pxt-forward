# Energy Sensor: Energy Sensor (voltage)

## Finished project

![Energy Sensor: Energy Sensor (voltage)](/static/forward/learn/c8e6c3f1e3fbf50a.webp)

How to connect and code with the Energy Sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Energy Sensor](https://learn.forwardedu.com/energy-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-solar=github:Forward-Education/pxt-smart-solar#v2.0.3
```

```template
/**
 * When you press the micro:bit logo, the value of voltage appears on the micro:bit display.
 */
/**
 * Modify & Create: Add a condition that makes a noise when the voltage is over a certain value.
 */
/**
 * Make sure you are using a micro USB cable on the energy side of the energy sensor connected to a solar panel or battery for this code.
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(fwdSensors.voltage1.voltage())
})
let Current = fwdSensors.current1.current()
let Voltage = fwdSensors.voltage1.voltage()
```

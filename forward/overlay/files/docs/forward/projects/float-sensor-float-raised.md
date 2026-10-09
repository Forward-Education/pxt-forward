# Float Sensor: Float <Raised>

## Finished project

![Float Sensor: Float <Raised>](/static/forward/learn/9356ccd09a75483d.webp)

How to connect and code with the Float Sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Float Sensor](https://learn.forwardedu.com/float-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * If the float sensor is raised, display an up arrow on the micro:bit display.
 * 
 * If the sensor is lowered, display a down arrow on the micro:bit display.
 */
/**
 * Modify & Create: Submerge the sensor in water and create an alerting sound when the water level is low.
 */
let float = fwdSensors.float1.floatState()
basic.forever(function () {
    if (fwdSensors.float1.floatStateConditional(fwdEnums.RaisedLowered.Lowered)) {
        basic.showArrow(ArrowNames.North)
    }
    if (fwdSensors.float1.floatStateConditional(fwdEnums.RaisedLowered.Raised)) {
        basic.showArrow(ArrowNames.South)
    }
})
```

# Moisture Sensor

## Finished project

![Moisture Sensor](/static/forward/learn/06f6aa907612f6f4.webp)

How to connect and code with the Moisture Sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Moisture Sensor](https://learn.forwardedu.com/moisture-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.3
```

```template
fwdSensors.moisture1.onReadingChangedBy(5, function () {
    basic.showIcon(IconNames.SmallDiamond)
})
fwdSensors.moisture1.onReadingChangedBy(25, function () {
    basic.showIcon(IconNames.Diamond)
})
basic.forever(function () {
    let variable = 0
    if (fwdSensors.moisture1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        basic.showIcon(IconNames.Yes)
    } else if (fwdSensors.moisture1.moistureLevel() < variable) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```

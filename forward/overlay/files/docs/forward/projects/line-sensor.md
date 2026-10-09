# Line Sensor

## Finished project

![Line Sensor](/static/forward/learn/64a409d5cac13b15.webp)

How to connect and code with the Line Sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Line Sensor](https://learn.forwardedu.com/line-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.3
```

```template
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (fwdSensors.line1.lineSensorState()))
})
fwdSensors.line1.onLineSensorStateChange(function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
fwdSensors.line2.onLineSensorStateChange(function () {
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . # . . .
        . # # # .
        `)
})
fwdSensors.line3.onLineSensorStateChange(function () {
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # # .
        . . . # .
        . # # . .
        `)
})
basic.forever(function () {
    if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```

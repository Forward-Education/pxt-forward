# Kick Power Tracker with CHARGE Power Pack: Single-Round Kick Strength Data Logger

## Finished project

![Kick Power Tracker with CHARGE Power Pack: Single-Round Kick Strength Data Logger](/static/forward/learn/02311837dc238f3f.webp)

Track your soccer ball kicking power with a micro:bit and the CHARGE power pack.

This is a finished project from Forward Education's [Kick Power Tracker with CHARGE Power Pack](https://learn.forwardedu.com/kick-strength/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
datalogger
```

```template
datalogger.onLogFull(function () {
    logging = false
    basic.showIcon(IconNames.Diamond)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
})
let logging = false
input.setAccelerometerRange(AcceleratorRange.EightG)
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles("strength")
```

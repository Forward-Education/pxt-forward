# Kick Power Tracker with CHARGE Power Pack: Multi-Round Kick Strength Data Logger

## Finished project

![Kick Power Tracker with CHARGE Power Pack: Multi-Round Kick Strength Data Logger](/static/forward/learn/02311837dc238f3f.webp)

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
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = false
    basic.pause(100)
    Round_Number += 1
    logging = true
    basic.showNumber(Round_Number)
})
input.onButtonPressed(Button.AB, function () {
    if (input.logoIsPressed()) {
        logging = false
        basic.showIcon(IconNames.Skull)
        datalogger.deleteLog()
    }
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
})
let Round_Number = 0
let logging = false
input.setAccelerometerRange(AcceleratorRange.EightG)
logging = false
Round_Number = 0
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"strength",
"Round"
)
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("strength", input.acceleration(Dimension.Strength)),
        datalogger.createCV("Round", Round_Number)
        )
    }
})
```

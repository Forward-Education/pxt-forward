# Solar Data Logger

## Finished project

![Solar Data Logger](/static/forward/learn/0e5e3727ddac4eb0.webp)

Build a data logger to track your solar panel’s performance over time and in response to different variables using the Smart Solar Energy kit.

This is a finished project from Forward Education's [Solar Data Logger](https://learn.forwardedu.com/solar-data-logger/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
datalogger
```

```template
// When log is full, logging is turned off and an exclamation point appears on the LEDs to notify the user.
datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
// When Button A is pressed, it toggles (starts/stops) the data logging.
// 
// If logging is enabled, you will see a sun on the LED screen. Otherwise, the screen will be blank.
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.clearScreen()
    }
})
// When Button A+B is pressed, it clears all previous log data and resets.
// Specifically, an 'X' is shown, logging is disabled, the current log is cleared, and columns are reset for new data.
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
    logging = false
    datalogger.deleteLog()
    datalogger.setColumnTitles("Voltage")
})
let logging = false
// Logging is turned off when the micro:bit is first powered on.
logging = false
// Sets the titles for each column in your data log. In this case, we will have one column to store voltage data collected from the energy sensor.
datalogger.setColumnTitles("Voltage")
// As long as logging has been enabled, a new voltage reading from the energy sensor will be saved every 500 ms.
loops.everyInterval(500, function () {
    if (logging) {
        datalogger.log(datalogger.createCV("Voltage", fwdSensors.voltage1.voltage()))
    }
})
```

# Calibrate & Log pH

## Finished project

![Calibrate & Log pH](/static/forward/learn/8dfab710e7ba34f5.webp)

Calibrate your pH probe and log your hydroponics pH levels.

This is a finished project from Forward Education's [Calibrate & Log pH](https://learn.forwardedu.com/calibrate-log-ph/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
datalogger
```

```template
// When the micro:bit cannot store any more data, display an X icon.
datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
})
// Step 1: Press the A button when you have set up the pH probe in the 6.86 solution. 
// 
// We recommend only pressing this button once each time you conduct an experiment.
input.onButtonPressed(Button.A, function () {
    _686 = fwdSensors.ph1.ph()
    basic.showString("as 6.86")
    basic.showNumber(_686)
})
// Step 3: Press the A+B button to set up your pH probe calibration, and delete all logs from your previous experiment. 
// 
// The pH probe will calibrate, followed by a checkmark displayed for 2 seconds.
// 
// We recommend only pressing this button once each time you conduct an experiment.
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    fwdSensors.ph1.calibrate(
    _686,
    6.86,
    _40,
    4
    )
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
})
// Step 2: Press the B button when you have set up the pH probe in the 4.0 solution. 
// 
// We recommend only pressing this button once each time you conduct an experiment.
input.onButtonPressed(Button.B, function () {
    _40 = fwdSensors.ph1.ph()
    basic.showNumber(_40)
    basic.showString("as 4.0")
})
// Step 4: When pressing the logo, the pH value displays, and the micro:bit logs the value of the pH.
// 
// Press this button each time you want to log the pH of your water.
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(fwdSensors.ph1.ph())
    datalogger.log(datalogger.createCV("pH", fwdSensors.ph1.ph()))
})
// When turning on the micro:bit, set up a table to log pH values over time.
// 
// While the micro:bit is plugged into the computer, select the "show data" button to view the serial data.
let _40 = 0
let _686 = 0
basic.showNumber(fwdSensors.ph1.ph())
datalogger.setColumnTitles("pH")
datalogger.mirrorToSerial(true)
```

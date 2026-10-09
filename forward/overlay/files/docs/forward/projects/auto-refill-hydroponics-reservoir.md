# Auto-Refill Hydroponics Reservoir

## Finished project

![Auto-Refill Hydroponics Reservoir](/static/forward/learn/f6c1adcfbc0a8157.webp)

Automatically refill your reservoir using the Smart Hydroponics Kit.

This is a finished project from Forward Education's [Auto-Refill Hydroponics Reservoir](https://learn.forwardedu.com/auto-refill-hydroponics-reservoir/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * Every 1000 ms (1 second)
 * 
 * If the float switch is in the lowered position (the water level is low).
 * 
 * Turn the pump on for 1 second, pause for .5 seconds
 * 
 * Display an umbrella on the micro:bit display
 */
/**
 * If the float switch is in the raised position (the water level is high).
 * 
 * Turn the pump off
 * 
 * Display a :) on the micro:bit display.
 */
fwdMotors.pump.setOn(false)
/**
 * Remember to plug in your Breakout Board battery to a power source using a micro USB cable if you are using this project for more than one day at a time.
 */
loops.everyInterval(1000, function () {
    if (fwdSensors.float1.floatState() == 1) {
        fwdMotors.pump.setOn(true)
        fwdMotors.pump.timedRun(1000)
        basic.pause(500)
        basic.showIcon(IconNames.Umbrella)
    } else {
        fwdMotors.pump.setOn(false)
        basic.showIcon(IconNames.Happy)
    }
})
```

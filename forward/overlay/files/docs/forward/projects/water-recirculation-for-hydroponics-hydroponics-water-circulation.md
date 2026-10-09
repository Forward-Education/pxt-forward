# Water Recirculation for Hydroponics: Hydroponics Water Circulation

## Finished project

![Water Recirculation for Hydroponics: Hydroponics Water Circulation](/static/forward/learn/50d4305559b849e7.webp)

Circulate water to keep plant nutrients healthy with the Smart Hydroponics Kit.

This is a finished project from Forward Education's [Water Recirculation for Hydroponics](https://learn.forwardedu.com/water-recirculation-for-hydroponics/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * Every 60 seconds, turn the pump on.
 * 
 * Turn the pump on for 30 seconds (5 seconds x 6 = 30)
 * 
 * Turn the pump off
 */
/**
 * Remember to plug in your Breakout Board battery to a power source using a micro USB cable if you are using this project for more than one day at a time.
 */
fwdMotors.pump.setOn(false)
loops.everyInterval(60000, function () {
    fwdMotors.pump.setOn(true)
    for (let index = 0; index < 6; index++) {
        fwdMotors.pump.timedRun(5000)
    }
    fwdMotors.pump.setOn(false)
})
```

# Water Recirculation for Hydroponics: LTS Traffic Light

## Finished project

![Water Recirculation for Hydroponics: LTS Traffic Light](/static/forward/learn/50d4305559b849e7.webp)

Circulate water to keep plant nutrients healthy with the Smart Hydroponics Kit.

This is a finished project from Forward Education's [Water Recirculation for Hydroponics](https://learn.forwardedu.com/water-recirculation-for-hydroponics/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-soldering=github:Forward-Education/pxt-smart-soldering#v1.2.3
```

```template
/**
 * This traffic light runs on a loop forever!
 * 
 * 1. Turn on only the green light for 5 seconds 
 * 
 * 2. Turn on only the yellow light for 2 seconds 
 * 
 * 3. Turn on only the red light for 5 seconds
 */
fwdLights.RED.setOnOff(false)
fwdLights.YELLOW.setOnOff(false)
fwdLights.GREEN.setOnOff(false)
basic.forever(function () {
    fwdLights.RED.setOnOff(false)
    fwdLights.YELLOW.setOnOff(false)
    fwdLights.GREEN.setOnOff(true)
    basic.pause(5000)
    fwdLights.RED.setOnOff(false)
    fwdLights.YELLOW.setOnOff(true)
    fwdLights.GREEN.setOnOff(false)
    basic.pause(2000)
    fwdLights.RED.setOnOff(false)
    fwdLights.YELLOW.setOnOff(false)
    fwdLights.GREEN.setOnOff(true)
    basic.pause(5000)
})
```

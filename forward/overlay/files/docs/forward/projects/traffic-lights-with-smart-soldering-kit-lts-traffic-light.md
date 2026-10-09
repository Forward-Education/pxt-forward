# Traffic Lights with Smart Soldering Kit: LTS Traffic Light

## Finished project

![Traffic Lights with Smart Soldering Kit: LTS Traffic Light](/static/forward/learn/c07027e21e51d842.webp)

Create a traffic light model with the Smart Solder component.

This is a finished project from Forward Education's [Traffic Lights with Smart Soldering Kit](https://learn.forwardedu.com/traffic-lights-with-smart-soldering-kit/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
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
    fwdLights.RED.setOnOff(true)
    fwdLights.YELLOW.setOnOff(false)
    fwdLights.GREEN.setOnOff(false)
    basic.pause(5000)
})
```

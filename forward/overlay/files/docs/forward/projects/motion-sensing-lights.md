# Motion Sensing Lights

## Finished project

![Motion Sensing Lights](/static/forward/learn/0d50f214721348b3.webp)

Reduce electricity waste and carbon footprints by using the PIR sensor to put classroom lights on a timer.

This is a finished project from Forward Education's [Motion Sensing Lights](https://learn.forwardedu.com/motion-sensing-lights/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * Using the timer variable, add 1 each second that passes. 
 * 
 * If motion is detected, reset the timer to 0.
 * 
 * If motion has been detected in the last minute, turn on the LED ring and print "Lights On" on the LCD. 
 * 
 * If no motion has been detected in the last 60 seconds, turn the LED ring off, and print "Lights Off" on the LCD.
 */
fwdSensors.pir1.onMovement(function () {
    Timer = 0
})
let Timer = 0
Timer = 60
fwdSensors.initializeLcd()
loops.everyInterval(1000, function () {
    Timer += 1
})
basic.forever(function () {
    if (Timer < 60) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        fwdSensors.lcd1.printLineString("Lights On", 1)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
        fwdSensors.lcd1.printLineString("Lights Off", 1)
    }
})
```

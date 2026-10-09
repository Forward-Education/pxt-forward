# PIR (Motion) Sensor: PIR Detects Motion

## Finished project

![PIR (Motion) Sensor: PIR Detects Motion](/static/forward/learn/d7496e0916d75568.webp)

How to connect and code with the PIR motion sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [PIR (Motion) Sensor](https://learn.forwardedu.com/pir-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * If the PIR sensor detects motion within the last 3 seconds (block = true)
 * 
 * Display a checkmark icon on the micro:bit display. 
 * 
 * Otherwise (block = false), display an X icon on the micro:bit display.
 */
/**
 * Modify & Create: Make a light turn on when motion is detected.
 */
basic.forever(function () {
    if (fwdSensors.pir1.motionDetected()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```

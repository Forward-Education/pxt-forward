# Low-Water Alarm for Hydroponics

## Finished project

![Low-Water Alarm for Hydroponics](/static/forward/learn/119001e6aa1e4302.webp)

Set up an alarm to detect when water levels are low using the Smart Hydroponics Kit.

This is a finished project from Forward Education's [Low-Water Alarm for Hydroponics](https://learn.forwardedu.com/low-water-alarm-for-hydroponics/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * If the float sensor is lowered (the water level is low), a repeating alarm plays every 5 seconds.
 */
let Float = fwdSensors.float1.floatState()
/**
 * Remember to plug in your Breakout Board Battery to a power source using a micro USB cable if you are using this project for more than one day at a time.
 */
basic.forever(function () {
    if (fwdSensors.float1.floatState() == 0) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(5000)
    }
})
```

# Float Sensor: Float [Raised]

## Finished project

![Float Sensor: Float [Raised]](/static/forward/learn/9356ccd09a75483d.webp)

How to connect and code with the Float Sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Float Sensor](https://learn.forwardedu.com/float-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * When the float switch is raised, play a high tone for 1 beat.
 * 
 * When the float sensor is lowered, play a low tone for 1 beat.
 */
/**
 * Modify & Create: If the state is raised (0), create a sound reaction until the float sensor is lowered (1).
 */
fwdSensors.float1.onFloatChange(fwdEnums.RaisedLowered.Raised, function () {
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
fwdSensors.float1.onFloatChange(fwdEnums.RaisedLowered.Lowered, function () {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
let float = fwdSensors.float1.floatState()
```

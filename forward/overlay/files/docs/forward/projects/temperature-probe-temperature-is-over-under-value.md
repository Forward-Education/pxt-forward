# Temperature Probe: Temperature is over/under value

## Finished project

![Temperature Probe: Temperature is over/under value](/static/forward/learn/f079a22fe20609e0.webp)

How to connect and code with the Temperature Probe using the breakout board and micro:bit V2

This is a finished project from Forward Education's [Temperature Probe](https://learn.forwardedu.com/temperature-probe/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * If the temperature probe is warmer than 15 degrees Celsius, a happy tone will play. 
 * 
 * If the temperature probe is cooler than 15 degrees Celsius, a sad tone will play
 */
let Temperature = fwdSensors.temperature1.temperature()
/**
 * Modify & Create: Design a hot icon and a warm icon for the micro:bit display.
 */
basic.forever(function () {
    if (fwdSensors.temperature1.isPastThreshold(15, fwdEnums.OverUnder.Over)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
    if (fwdSensors.temperature1.isPastThreshold(15, fwdEnums.OverUnder.Under)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    }
})
```

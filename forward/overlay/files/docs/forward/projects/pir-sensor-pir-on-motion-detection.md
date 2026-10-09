# PIR (Motion) Sensor: PIR On Motion Detection

## Finished project

![PIR (Motion) Sensor: PIR On Motion Detection](/static/forward/learn/d7496e0916d75568.webp)

How to connect and code with the PIR motion sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [PIR (Motion) Sensor](https://learn.forwardedu.com/pir-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * When motion is detected, the "Hello" sound will play. This will trigger again after a period of no movement detected.
 */
/**
 * Modify & Create: Create a variable to time how long it has been since motion has been detected.
 * 
 * Challenge: Test how far away your sensor detects movement!
 */
fwdSensors.pir1.onMovement(function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
})
```

# Monitoring the Ha:shañ

## Finished project

![Monitoring the Ha:shañ](/static/forward/learn/e527c3eea5a4710d.webp)

Understand the impact of extreme heat in the desert with this FIIRE Indigenous Perspectives project.

This is a finished project from Forward Education's [Monitoring the Ha:shañ](https://learn.forwardedu.com/monitoring-the-hashan/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.3
```

```template
/**
 * Modify & Create: Add a condition to detect excessively dry, hot weather using the "temperature" and "moisture sensor blocks.
 */
fwdLights.ledRing1.setAllPixelsColor(0x000000)
/**
 * If the Ha:shañ is recieving too much direct sunlight, play a warning sound and change the LED ring to brown.
 * 
 * Otherwise, set the LED ring to green.
 */
basic.forever(function () {
    if (fwdSensors.solar1.isPastThreshold(90, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setAllPixelsColor(0x65471f)
        basic.showIcon(IconNames.No)
        music.play(music.stringPlayable("C5 - G - - C - - ", 120), music.PlaybackMode.UntilDone)
        basic.showString("HEAT WARNING")
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
})
```

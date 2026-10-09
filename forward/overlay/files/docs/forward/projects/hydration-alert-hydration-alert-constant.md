# Hydration Alert with CHARGE Power Pack: Hydration Alert - Constant

## Finished project

![Hydration Alert with CHARGE Power Pack: Hydration Alert - Constant](/static/forward/learn/e4a3d6beb2ad1a65.webp)

Get reminded to drink water with this micro:bit interval alarm. Attach it to your water bottle easily with the CHARGE power pack.

This is a finished project from Forward Education's [Hydration Alert with CHARGE Power Pack](https://learn.forwardedu.com/hydration-alert/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
loops.everyInterval(600000, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
```

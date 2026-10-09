# Hydration Alert with CHARGE Power Pack: Hydration Alert

## Finished project

![Hydration Alert with CHARGE Power Pack: Hydration Alert](/static/forward/learn/e4a3d6beb2ad1a65.webp)

Get reminded to drink water with this micro:bit interval alarm. Attach it to your water bottle easily with the CHARGE power pack.

This is a finished project from Forward Education's [Hydration Alert with CHARGE Power Pack](https://learn.forwardedu.com/hydration-alert/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
let Timer = 0
Timer = 600000
loops.everyInterval(Timer, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    music.play(music.stringPlayable("C5 C5 A F B G G G ", 180), music.PlaybackMode.UntilDone)
    Timer = randint(60, 90) * 10000
    basic.clearScreen()
})
```

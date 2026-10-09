# Guitar with CHARGE Power Pack

## Finished project

![Guitar with CHARGE Power Pack](/static/forward/learn/facce26c338de0ab.webp)

Create and code a guitar with the with the CHARGE for micro:bit

This is a finished project from Forward Education's [Guitar with CHARGE Power Pack](https://learn.forwardedu.com/guitar-with-charge-power-pack/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
/**
 * When you press the foil attached to P0 & ground at the same time, play the note C while displaying the note on the micro:bit display, then clear the screen.
 */
input.onPinPressed(TouchPin.P0, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
})
/**
 * When you press the A button, play a melody, while showing 3 different icons in a repeating loop. When the melody is done, clear the screen.
 */
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.InBackground)
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(200)
        basic.showIcon(IconNames.Target)
        basic.pause(200)
        basic.showIcon(IconNames.Diamond)
        basic.pause(200)
    }
    basic.clearScreen()
})
/**
 * When you press the foil attached to P2 & ground at the same time, play the note G while displaying the note on the micro:bit display, then clear the screen.
 */
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # # # # #
        # . . . #
        # # . . #
        . . . . #
        # # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
})
/**
 * When you press the foil attached to P1 & ground at the same time, play the note E while displaying the note on the micro:bit display, then clear the screen.
 */
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # # # # #
        . . . . #
        . # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(200)
    basic.clearScreen()
})
```

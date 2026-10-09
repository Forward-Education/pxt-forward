# Smart Crosswalk with Smart Soldering Kit: LTS Crosswalk

## Finished project

![Smart Crosswalk with Smart Soldering Kit: LTS Crosswalk](/static/forward/learn/e2e465a11f14f54c.webp)

Create a smart crosswalk model with the Smart Solder component.

This is a finished project from Forward Education's [Smart Crosswalk with Smart Soldering Kit](https://learn.forwardedu.com/smart-crosswalk-with-smart-soldering-kit/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
```

```template
// If there are no pedestrians, the light stays green.
function Yellow_Light () {
    fwdLights.RED.setOnOff(false)
    fwdLights.YELLOW.setOnOff(true)
    fwdLights.GREEN.setOnOff(false)
}
// When a pedestrian presses the button, change the traffic light to yellow for 2 seconds, then start a countdown timer on the micro:bit while the traffic light is red.
function Red_Light () {
    fwdLights.RED.setOnOff(true)
    fwdLights.YELLOW.setOnOff(false)
    fwdLights.GREEN.setOnOff(false)
    basic.showNumber(Timer)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    Timer = 7
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    while (Timer > 5) {
        Yellow_Light()
        basic.pause(1000)
        Timer += -1
    }
    while (Timer <= 5 && Timer > 0) {
        Red_Light()
        Timer += -1
    }
})
// When a pedestrian presses the button, change the traffic light to yellow for 2 seconds, then start a countdown timer on the micro:bit while the traffic light is red.
function Green_Light () {
    fwdLights.RED.setOnOff(false)
    fwdLights.YELLOW.setOnOff(false)
    fwdLights.GREEN.setOnOff(true)
}
let Timer = 0
fwdLights.RED.setOnOff(false)
fwdLights.YELLOW.setOnOff(false)
fwdLights.GREEN.setOnOff(false)
Timer = 0
basic.forever(function () {
    while (Timer == 0) {
        Green_Light()
        basic.showIcon(IconNames.No)
    }
})
```

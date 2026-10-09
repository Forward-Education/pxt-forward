# Water Bottle Signal with CHARGE Power Pack

## Finished project

![Water Bottle Signal with CHARGE Power Pack](/static/forward/learn/b70daedcecd0cf16.webp)

Strap micro:bit and then CHARGE power pack to your water bottle and have it notify you if someone takes a drink.

This is a finished project from Forward Education's [Water Bottle Signal with CHARGE Power Pack](https://learn.forwardedu.com/water-bottle-signal/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Duck)
})
basic.showIcon(IconNames.Duck)
```

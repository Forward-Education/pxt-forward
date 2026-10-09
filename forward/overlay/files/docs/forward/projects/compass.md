# Compass with CHARGE Power Pack

## Finished project

![Compass with CHARGE Power Pack](/static/forward/learn/603d71184a610613.webp)

Make a compass out of your micro:bit and use it conveniently with the CHARGE power pack.

This is a finished project from Forward Education's [Compass with CHARGE Power Pack](https://learn.forwardedu.com/compass/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
```

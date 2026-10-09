# Step Counter with CHARGE Power Pack

## Finished project

![Step Counter with CHARGE Power Pack](/static/forward/learn/a56cec89cd174ac6.webp)

Code your own step counter with MakeCode or MicroCode!

This is a finished project from Forward Education's [Step Counter with CHARGE Power Pack](https://learn.forwardedu.com/step-counter/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
let steps = 0
steps = 0
```

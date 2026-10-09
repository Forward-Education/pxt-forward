# Rotary Dial

## Finished project

![Rotary Dial](/static/forward/learn/3ac172abf6abcfba.webp)

How to connect and code with the Rotary Dial using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Rotary Dial](https://learn.forwardedu.com/dial/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.3
```

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showIcon(IconNames.Heart)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    basic.showNumber(fwdButtons.dial1.position())
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(fwdButtons.dial1.position() / fwdButtons.dial1.clicksPerTurn())
})
```

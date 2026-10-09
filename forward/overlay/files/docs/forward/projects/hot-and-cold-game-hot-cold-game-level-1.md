# Hot-Cold Game with CHARGE Power Pack: Hot Cold Game Level 1

## Finished project

![Hot-Cold Game with CHARGE Power Pack: Hot Cold Game Level 1](/static/forward/learn/cad265373db34092.webp)

Play the Hot or Cold game using wireless micro:bits to communicate! Use it conveniently with the CHARGE power pack.

This is a finished project from Forward Education's [Hot-Cold Game with CHARGE Power Pack](https://learn.forwardedu.com/hot-and-cold-game/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
input.onButtonPressed(Button.A, function () {
    radio.sendString("warmer")
    basic.showString("warmer")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("HOT")
    basic.showString("HOT")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("colder")
    basic.showString("colder")
})
radio.setGroup(8)
```

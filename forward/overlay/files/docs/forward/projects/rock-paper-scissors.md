# Rock-Paper-Scissors with CHARGE Power Pack

## Finished project

![Rock-Paper-Scissors with CHARGE Power Pack](/static/forward/learn/806e567c18cbd41c.webp)

Play Rock-Paper-Scissors where your fate is left up to the micro:bit to decide! Use it conveniently with the CHARGE power pack.

This is a finished project from Forward Education's [Rock-Paper-Scissors with CHARGE Power Pack](https://learn.forwardedu.com/rock-paper-scissors/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
let choice = 0
input.onGesture(Gesture.Shake, function () {
    choice = randint(0, 2)
    if (choice == 0) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (choice == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
```

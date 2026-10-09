# Hot-Cold Game with CHARGE Power Pack: Rock Paper Scissors

## Finished project

![Hot-Cold Game with CHARGE Power Pack: Rock Paper Scissors](/static/forward/learn/cad265373db34092.webp)

Play the Hot or Cold game using wireless micro:bits to communicate! Use it conveniently with the CHARGE power pack.

This is a finished project from Forward Education's [Hot-Cold Game with CHARGE Power Pack](https://learn.forwardedu.com/hot-and-cold-game/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

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

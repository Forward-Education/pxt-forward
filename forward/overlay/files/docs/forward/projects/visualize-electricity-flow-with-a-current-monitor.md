# Visualize Electricity Flow with a Current Monitor

## Finished project

![Visualize Electricity Flow with a Current Monitor](/static/forward/learn/245b9e0ccb518fd2.webp)

Build a monitor for your solar panel to see how much current is being generated in real-time!

This is a finished project from Forward Education's [Visualize Electricity Flow with a Current Monitor](https://learn.forwardedu.com/visualize-electricity-flow-with-a-current-monitor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-solar=github:Forward-Education/pxt-smart-solar#v2.0.3
```

```template
let onstart = fwdSensors.current1.current()
/**
 * Shine a flashlight at your solar panel, or point it toward the sun. If you're testing your code in a dim room, try replacing the <current is under> blocks with <voltage is under> and download  your code again.
 */
loops.everyInterval(500, function () {
    if (fwdSensors.current1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    } else if (fwdSensors.current1.isPastThreshold(40, fwdEnums.OverUnder.Under)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
```

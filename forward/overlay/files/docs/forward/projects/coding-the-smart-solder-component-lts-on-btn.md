# Coding the Smart Solder Component: LTS [On BTN]

## Finished project

![Coding the Smart Solder Component: LTS [On BTN]](/static/forward/learn/995168cbf19704c6.webp)

How to connect and code with the smart solder component using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Coding the Smart Solder Component](https://learn.forwardedu.com/coding-the-smart-solder-component/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-soldering=github:Forward-Education/pxt-smart-soldering#v1.2.3
```

```template
/**
 * When button 2 is released, an up arrow displays on the micro:bit.
 */
/**
 * Modify & Create: Try turning on different LEDs when you press or release a button!
 */
/**
 * When button 3 is held, a heart icon displays on the micro:bit.
 */
fwdButtons.BTN3.onEvent(jacdac.ButtonEvent.Hold, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
fwdButtons.BTN2.onEvent(jacdac.ButtonEvent.Up, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(2000)
    basic.clearScreen()
})
/**
 * When button 1 is pressed, a down arrow displays on the micro:bit.
 */
fwdButtons.BTN1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showArrow(ArrowNames.South)
    basic.pause(2000)
    basic.clearScreen()
})
let Button_Pressed = fwdButtons.BTN1.holdDuration()
```

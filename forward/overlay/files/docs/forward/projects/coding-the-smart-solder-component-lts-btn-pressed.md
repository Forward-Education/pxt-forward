# Coding the Smart Solder Component: LTS <BTN Pressed>

## Finished project

![Coding the Smart Solder Component: LTS <BTN Pressed>](/static/forward/learn/995168cbf19704c6.webp)

How to connect and code with the smart solder component using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Coding the Smart Solder Component](https://learn.forwardedu.com/coding-the-smart-solder-component/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-soldering=github:Forward-Education/pxt-smart-soldering#v1.2.3
```

```template
/**
 * If button 1 is pressed, the number 1 will display on the micro:bit.
 */
/**
 * Modify & Create: Add a condition to display the number 2 when button 2 is pressed!
 */
let Button_Pressed = fwdButtons.BTN1.isPressed()
basic.forever(function () {
    if (fwdButtons.BTN1.isPressed()) {
        basic.showNumber(1)
    } else {
        basic.clearScreen()
    }
})
```

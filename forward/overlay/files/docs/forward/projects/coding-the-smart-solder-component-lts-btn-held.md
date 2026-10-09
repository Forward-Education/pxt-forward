# Coding the Smart Solder Component: LTS (BTN Held)

## Finished project

![Coding the Smart Solder Component: LTS (BTN Held)](/static/forward/learn/995168cbf19704c6.webp)

How to connect and code with the smart solder component using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Coding the Smart Solder Component](https://learn.forwardedu.com/coding-the-smart-solder-component/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-soldering=github:Forward-Education/pxt-smart-soldering#v1.2.3
```

```template
/**
 * If button one is pressed and held, display the length of time it has been held, in seconds.
 * 
 * 1 second = 1000 ms
 */
/**
 * Modify & Create: Can you add a condition to make a sound when button 1 is held for 5 seconds?
 */
let Button_Pressed = fwdButtons.BTN1.holdDuration()
basic.forever(function () {
    if (fwdButtons.BTN1.isPressed()) {
        basic.showNumber(fwdButtons.BTN1.holdDuration() / 1000)
    }
    basic.clearScreen()
})
```

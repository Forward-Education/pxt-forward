# Coding the Smart Solder Component: LTS Is On

## Finished project

![Coding the Smart Solder Component: LTS Is On](/static/forward/learn/995168cbf19704c6.webp)

How to connect and code with the smart solder component using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Coding the Smart Solder Component](https://learn.forwardedu.com/coding-the-smart-solder-component/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-soldering=github:Forward-Education/pxt-smart-soldering#v1.2.3
```

```template
/**
 * If the green light is on, display a checkmark. If the green light is off, display an X
 */
/**
 * Modify & Create: How would you use this block to create other conditional statements?
 */
fwdLights.GREEN.setOnOff(false)
basic.forever(function () {
    if (fwdLights.GREEN.isOn()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
```

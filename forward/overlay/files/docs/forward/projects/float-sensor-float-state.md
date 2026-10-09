# Float Sensor: Float (State)

## Finished project

![Float Sensor: Float (State)](/static/forward/learn/9356ccd09a75483d.webp)

How to connect and code with the Float Sensor using the breakout board and micro:bit V2.

This is a finished project from Forward Education's [Float Sensor](https://learn.forwardedu.com/float-sensor/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * If the micro:bit logo is pressed, the float state will display on the micro:bit display for 2 seconds, before clearing the screen.
 */
/**
 * Modify & Create: If the state is raised (0), create a sound reaction until the float sensor is lowered (1).
 */
let float = fwdSensors.float1.floatState()
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showNumber(fwdSensors.float1.floatState())
        basic.pause(2000)
        basic.clearScreen()
    }
})
```

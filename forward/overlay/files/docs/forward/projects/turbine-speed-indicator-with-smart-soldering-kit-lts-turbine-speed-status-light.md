# Turbine Speed Indicator With Smart Soldering Kit: LTS - Turbine Speed Status Light

## Finished project

![Turbine Speed Indicator With Smart Soldering Kit: LTS - Turbine Speed Status Light](/static/forward/learn/cb034bc597f7948c.webp)

Create a wind turbine speed indicator for the Powerful Force of the Wind Lesson using the Smart Solder component.

This is a finished project from Forward Education's [Turbine Speed Indicator With Smart Soldering Kit](https://learn.forwardedu.com/turbine-speed-indicator-with-smart-soldering-kit/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.3
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
```

```template
/**
 * If the dial is turned three clicks, the motor will turn at 100% speed and the GREEN LED turns on.
 */
/**
 * Otherwise, turn off all LEDs
 */
fwdMotors.setSpeed(fwdBase.middleServo, 0)
fwdLights.RED.setOnOff(false)
fwdLights.YELLOW.setOnOff(false)
fwdLights.GREEN.setOnOff(false)
/**
 * If the dial is turned one click, the motor will turn at 50% speed and the RED LED turns on.
 */
/**
 * If the dial is turned two clicks, the motor will turn at 75% speed and the YELLOW LED turns on.
 */
basic.forever(function () {
    if (fwdButtons.dial1.position() == 1) {
        fwdMotors.setSpeed(fwdBase.middleServo, -50)
        fwdLights.RED.setOnOff(true)
        fwdLights.YELLOW.setOnOff(false)
        fwdLights.GREEN.setOnOff(false)
    } else if (fwdButtons.dial1.position() == 2) {
        fwdMotors.setSpeed(fwdBase.middleServo, -75)
        fwdLights.RED.setOnOff(false)
        fwdLights.YELLOW.setOnOff(true)
        fwdLights.GREEN.setOnOff(false)
    } else if (fwdButtons.dial1.position() >= 3) {
        fwdMotors.setSpeed(fwdBase.middleServo, -100)
        fwdLights.RED.setOnOff(false)
        fwdLights.YELLOW.setOnOff(false)
        fwdLights.GREEN.setOnOff(true)
    } else {
        fwdMotors.setSpeed(fwdBase.middleServo, 0)
        fwdLights.RED.setOnOff(false)
        fwdLights.YELLOW.setOnOff(false)
        fwdLights.GREEN.setOnOff(false)
    }
})
```

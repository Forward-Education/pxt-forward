# Artemis II – Lunar Rover Design

## Finished project

![Artemis II – Lunar Rover Design](/static/forward/learn/8cbd133f064f9818.webp)

Artemis II Challenge 2 of 3: Design and code your own Moon Rover using motors and a line-sensor to follow a path on the Moon.

This is a finished project from Forward Education's [Artemis II – Lunar Rover Design](https://learn.forwardedu.com/artemis-ii-lunar-rover-exploration/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
```

```template
/**
 * When the A button is pressed, turn left for 2 seconds & show a left arrow. 
 * 
 * When the B button is pressed, turn right for 2 seconds & show a right arrow.
 */
/**
 * Challenges: 
 * 
 * 1 | Change the distance that your rover drives when pressing the micro:bit logo. 
 * 
 * 2 | With the help of a meter stick, measure your rover's distance when it drives for one second. 
 * 
 * Using the distance collected above, and using the formula speed=distance/time, can you determine how fast your rover is moving in meters per second and kilometers per hour?
 * 
 * 3 | Add a sonar sensor, and use it to turn or stop when there is an obstacle 0.8 M away.
 */
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
    fwdMotors.drive(0, -50, 2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
    fwdMotors.drive(50, 0, 2000)
    basic.clearScreen()
})
/**
 * When the micro:bit logo is pressed, drive straight for 2 seconds, and show an arrow forward. 
 * 
 * If your rover isn't driving straight, change the "left" and "right" motor values and download your code again.
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showArrow(ArrowNames.North)
    fwdMotors.drive(20, -33, 2000)
    basic.clearScreen()
})
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
```

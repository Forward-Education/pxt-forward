# Robot Tour

## Finished project

![Robot Tour](/static/forward/learn/bf6ac11cc16b834f.webp)

Build and program a tour vehicle to navigate a unique path.

This is a finished project from Forward Education's [Robot Tour](https://learn.forwardedu.com/robot-tour/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-robot-tour=github:Forward-Education/pxt-robot-tour#v1.0.4
```

```template
input.onButtonPressed(Button.A, function () {
    drivingEnabled = true
})
// Drag the sequence of 'set left and right motor' blocks into the 'on button A+B pressed' event to see a demo of what programming a fixed path might look like.
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    drivingEnabled = false
})
// Press the logo to stop the car.
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.leftServo.setSpeed(0)
    fwdMotors.rightServo.setSpeed(0)
})
/**
 * With this code, you can choose to make your robot drive a fixed path or operate autonomously with obstacle avoidance.
 * 
 * You must drag one of the two code snippets into the empty block below to make your vehicle work. You can only choose one at a time. Please review the comments for clarification.
 */
let drivingEnabled = false
// At the start of the program, driving is set to false.
drivingEnabled = false
// At the start of the program, the driving is initialized. We have set the right and left motors.
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
// Drag the 'if drivingEnabled' conditional into the 'forever' loop to see a demo of what autonomous driving might look like.
basic.forever(function () {
	
})
```

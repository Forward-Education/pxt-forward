# Automatic Light Timer for Hydroponics

## Finished project

![Automatic Light Timer for Hydroponics](/static/forward/learn/6fdeb5ae4a982e5b.webp)

Create a cycle to simulate day and night with the Smart Hydroponics Kit.

This is a finished project from Forward Education's [Automatic Light Timer for Hydroponics](https://learn.forwardedu.com/automatic-light-timer-for-hydroponics/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
```

```template
/**
 * Repeat the function every second, until the number of seconds that have passed is equal to the number of seconds in the cycle. 
 * 
 * Display a visual bar graph on the micro:bit LED display that lights more LEDs as the day or night passes. 
 * 
 * Increase the seconds passed variable by 1. 
 * 
 * When Seconds passed = Cycle length, seconds passed is reset to 0, and the micro:bit display is cleared.
 */
/**
 * Remember to plug in your Breakout Board battery to a power source using a micro USB cable if you are using this project for more than one day at a time.
 */
// Press A+B on the micro:bit to restart the light cycle. 
input.onButtonPressed(Button.AB, function () {
    Hours_Passed = 1
})
let Hours_Passed = 0
Hours_Passed = 1
// Change this number depending on the type of plant you are growing. Lettuce grown from seed needs 16 hours of light in a 24 hour day. 
let Hours_of_Light = 16
// Display a visual graph on the micro:bit display to see how much time has passed.
basic.forever(function () {
    led.plotBarGraph(
    Hours_Passed,
    24
    )
})
// Runs once every hour. 
loops.everyInterval(3600000, function () {
    Hours_Passed += 1
    // Resets the hours passed variable each day.
    if (Hours_Passed <= 24) {
        // If the hours the light has been on is less than the hours the plants needs, the light will stay on. 
        if (Hours_Passed <= Hours_of_Light) {
            fwdLights.lights1.setBrightness(100)
        } else {
            fwdLights.lights1.setBrightness(0)
        }
    } else {
        Hours_Passed = 1
    }
})
```

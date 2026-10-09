# Entry Alert

## Finished project

![Entry Alert](/static/forward/learn/eb063eb4c64fd386.webp)

Increase accessibility for those with limited mobility or hearing by using the PIR sensor to send an alert when someone enters a room.

This is a finished project from Forward Education's [Entry Alert](https://learn.forwardedu.com/entry-alert/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * Download this code to two micro:bits.
 * 
 * When the PIR sensor detects motion, the breakout board micro:bit sends a message to the CHARGE micro:bit. 
 * 
 * A repeating pattern will display 4 times on both micro:bits.
 * 
 * Place your motion sensor in a doorway, or other location you want to monitor. 
 * 
 * Place your second micro:bit in a CHARGE on your wrist, or your desk.
 */
radio.onReceivedNumber(function (receivedNumber) {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
    }
    basic.clearScreen()
})
fwdSensors.pir1.onMovement(function () {
    radio.sendNumber(1)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
    }
    basic.clearScreen()
})
radio.setGroup(1)
```

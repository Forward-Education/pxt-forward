# Artemis II – Hello Moon with micro:bit

## Finished project

![Artemis II – Hello Moon with micro:bit](/static/forward/learn/0dadc57093c4482e.webp)

Artemis II Challenge 1 of 3: Use two micro:bits to communicate wirelessly between the Artemis II crew and Mission Control!

This is a finished project from Forward Education's [Artemis II – Hello Moon with micro:bit](https://learn.forwardedu.com/artemis-ii-hello-moon-with-microbit/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
/**
 * Instructions: Download your code to 2 micro:bits. Use your "Moon" micro:bit to send messages to your "Earth" micro:bit.
 */
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello Earth!")
    basic.showIcon(IconNames.Yes)
})
/**
 * Challenges: 
 * 
 * 1. Did you know that it takes 2.5 seconds to send a signal to the Moon and another 2.5 seconds to send a signal back from the Moon?
 * 
 * Can you set a time delay to represent this real experience?
 * 
 * 2. What if the Moon was on the other side of the planet Earth? 
 * 
 * Imagine that you are working remotely in Australia. How does that change the timing?
 * 
 * 3. What if we wanted an automated message for rough terrain? This would only affect the micro:bit sending a message. 
 * 
 * Hint: Look for input options such as “shake” and “tilt”!
 * 
 * 4. What if we wanted to talk to a different rover on the Moon? 
 * 
 * Hint: You can use the command “On Logo Up and Down” to change the radio set group to a new number.
 */
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Mayday! We've hit something! Send Help!")
    basic.showIcon(IconNames.Sad)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
/**
 * Activity: 
 * 
 * 1. What other inputs could you use to send a message?
 * 
 * 2. How could you use different LED symbols from the basic drawer to confirm which message has been sent from the Moon?
 */
input.onButtonPressed(Button.B, function () {
    radio.sendString("We see some craters ahead")
    basic.showIcon(IconNames.Square)
})
// If you are working in groups, you and your partner(s) should have the same number (in this case 1), while the other groups should select a different number (between 0 and 255). This is so your radio signals won't interfere with one another.
radio.setGroup(1)
```

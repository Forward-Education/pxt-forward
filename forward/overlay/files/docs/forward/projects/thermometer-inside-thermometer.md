# Indoor-Outdoor Thermometer with CHARGE Power Pack: Inside Thermometer

## Finished project

![Indoor-Outdoor Thermometer with CHARGE Power Pack: Inside Thermometer](/static/forward/learn/a4de7f7936a413f2.webp)

Check the outside temperature remotely with 2 micro:bits and CHARGE power packs.

This is a finished project from Forward Education's [Indoor-Outdoor Thermometer with CHARGE Power Pack](https://learn.forwardedu.com/thermometer/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
radio.onReceivedNumber(function (receivedNumber) {
    outsideTemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(outsideTemp)
})
let outsideTemp = 0
radio.setGroup(5)
```

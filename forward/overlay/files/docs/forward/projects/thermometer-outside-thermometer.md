# Indoor-Outdoor Thermometer with CHARGE Power Pack: Outside Thermometer

## Finished project

![Indoor-Outdoor Thermometer with CHARGE Power Pack: Outside Thermometer](/static/forward/learn/a4de7f7936a413f2.webp)

Check the outside temperature remotely with 2 micro:bits and CHARGE power packs.

This is a finished project from Forward Education's [Indoor-Outdoor Thermometer with CHARGE Power Pack](https://learn.forwardedu.com/thermometer/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
```

```template
radio.setGroup(5)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(10000)
})
```

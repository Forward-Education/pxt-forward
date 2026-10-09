# Traffic Lights with Smart Soldering Kit: LED Ring Traffic Light

## Finished project

![Traffic Lights with Smart Soldering Kit: LED Ring Traffic Light](/static/forward/learn/c07027e21e51d842.webp)

Create a traffic light model with the Smart Solder component.

This is a finished project from Forward Education's [Traffic Lights with Smart Soldering Kit](https://learn.forwardedu.com/traffic-lights-with-smart-soldering-kit/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
```

```template
fwdLights.ledRing1.setAllPixelsColor(0x000000)
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    basic.pause(2000)
    fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    basic.pause(5000)
})
```

# Smart Crosswalk with Smart Soldering Kit: LED Ring Crosswalk

## Finished project

![Smart Crosswalk with Smart Soldering Kit: LED Ring Crosswalk](/static/forward/learn/e2e465a11f14f54c.webp)

Create a smart crosswalk model with the Smart Solder component.

This is a finished project from Forward Education's [Smart Crosswalk with Smart Soldering Kit](https://learn.forwardedu.com/smart-crosswalk-with-smart-soldering-kit/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
all-fwd-blocks=github:Forward-Education/pxt-all-fwd-blocks#v2.1.2
```

```template
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Timer = 7
    while (Timer > 5) {
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
        basic.pause(1000)
        Timer += -1
    }
    while (Timer <= 5 && Timer > 0) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.showNumber(Timer)
        Timer += -1
    }
})
let Timer = 0
fwdLights.ledRing1.setAllPixelsColor(0x000000)
Timer = 0
basic.forever(function () {
    while (Timer > 0) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        basic.showIcon(IconNames.No)
    }
})
```

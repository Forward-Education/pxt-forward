# Simple pH Monitoring

## Finished project

![Simple pH Monitoring](/static/forward/learn/4893f802a7c71213.webp)

Adjust pH for healthy plant growth with the Smart Hydroponics Kit.

This is a finished project from Forward Education's [Simple pH Monitoring](https://learn.forwardedu.com/simple-ph-monitoring/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-smart-hydroponics=github:Forward-Education/pxt-smart-hydroponics#v1.2.3
datalogger
```

```template
// When pressing the logo, the pH value displays. The miro:bit plays a happy or sad sound, and lists the pH value to indicate the range.
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (fwdSensors.ph1.isPastThreshold(Low_Plant_pH, fwdEnums.OverUnder.Under)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        basic.showString("Low")
    } else if (fwdSensors.ph1.isPastThreshold(High_Plant_pH, fwdEnums.OverUnder.Over)) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        basic.showString("High")
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Heart)
    }
    basic.showNumber(fwdSensors.ph1.ph())
    basic.clearScreen()
})
// When turning on the micro:bit, set up a table to log pH values over time.
// 
// While the micro:bit is plugged into the computer, select the "show data" button to view the serial data.
let Low_Plant_pH = 0
let High_Plant_pH = 0
basic.showNumber(fwdSensors.ph1.ph())
// This is the highest pH that your plant will still grow in. Research ideal pH for hydroponics to meet your seed's needs.
// 
// This range is for lettuce
High_Plant_pH = 6.8
// This is the lowest pH that your plant will still grow in.
// 
// Change both the high and low pH values based on your seeds.
Low_Plant_pH = 5.5
```

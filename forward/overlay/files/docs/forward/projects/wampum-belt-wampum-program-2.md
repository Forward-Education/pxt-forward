# Design a Wampum Belt: Wampum Program

## Finished project

![Design a Wampum Belt: Wampum Program](/static/forward/learn/8c61ec254a912269.webp)

Design and create a Wampum Belt with this FIIRE Indigenous Perspectives project.

This is a finished project from Forward Education's [Design a Wampum Belt](https://learn.forwardedu.com/wampum-belt/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.3
```

```template
/**
 * Design your Wampum belt by selecting a colour for each pixel on the LED ring.
 */
/**
 * Select one of the inputs below, and drag it into the forever loop.
 * 
 * Remember to plug in a sensor you've selected to your breakout board to test your code.
 */
function Wampum () {
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0000)
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel2, 0xff8000)
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel3, 0xffff00)
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel4, 0x00ff00)
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel5, 0x00ffff)
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel6, 0x0000ff)
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel7, 0x7f00ff)
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel8, 0xff00ff)
}
// If you'd like to use this block, drag the "Call Wampum" block into the space within the block.
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
	
})
// If you'd like to use this block, drag the "Call Wampum" block into the space within the block.
input.onSound(DetectedSound.Loud, function () {
	
})
fwdLights.ledRing1.setAllPixelsColor(0x000000)
basic.forever(function () {
    // Replace this block with a diamond shaped block below.
    if (fwdButtons.touch1.isPressed()) {
        // This block displays your Wampum Belt design
        Wampum()
    }
})
```

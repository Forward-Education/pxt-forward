# Soil Temperature Testing

## Finished project

![Soil Temperature Testing](/static/forward/learn/ffea88e54b086025.webp)

Use the temperature probe to check the soil temperature at root depth before planting seedlings outdoors.

This is a finished project from Forward Education's [Soil Temperature Testing](https://learn.forwardedu.com/soil-temperature-testing/) activity. Click ``|Done|`` to open the code, then download it to your micro:bit.

```package
radio
microphone
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.4
```

```template
/**
 * This is the ideal soil temperature for Bell Peppers. Change this number if using other seeds, using resources like the Farmer's Almanac. 
 * 
 * To use this project, dig a small hole in the soil, 3-4 inches deep. Put your temperature probe into it & watch the LCD display. If the LCD displays "Soil Ready", your soil is warm enough to safely plant!
 * 
 * Make sure to wipe the soil off your temperature probe after each use.
 */
let Ideal_Soil_Temp = 18
fwdSensors.initializeLcd()
basic.forever(function () {
    if (fwdSensors.temperature1.isPastThreshold(Ideal_Soil_Temp, fwdEnums.OverUnder.Over)) {
        fwdSensors.lcd1.printLineString("Soil Ready: " + fwdSensors.temperature1.temperature(), 2)
    } else {
        fwdSensors.lcd1.printLineString("Soil Cold: " + fwdSensors.temperature1.temperature(), 2)
    }
})
```

# Emergency Alert – Modify Tutorial

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
input.onButtonPressed(Button.A, function () {
    if (SafetyLevel < 180) {
        SafetyLevel = SafetyLevel + 60
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    if (SafetyLevel > 0) {
        SafetyLevel = SafetyLevel - 60
        basic.pause(500)
    }
})
let SafetyLevel = 0
SafetyLevel = 180
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.leftServo, SafetyLevel)
})

/* Reflect:
Q1:
Q2: 
Q3: 
Q4: */
```

## Emergency Alert - Modify Tutorial @showdialog

In this tutorial, you will **modify** your Emergency Alert so it can be seen from farther away, even in low light.

1. **Build**: Your Emergency Alert is ready to modify

2. **Connect**: Pair your micro:bit and download the starter code

3. **Modify**: Add a second way to show the risk level, and test your changes

## Setup: Small Screens @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="While hovering over the grey bar, click and drag to expand the instruction window." style="display: block; max-width: 650px; width: 100%; margin:auto;">

To use this tutorial with a small screen, hover over the grey bar, then click and drag to expand the instruction window.

## Setup: Connect Cables @showdialog

IMPORTANT! Make sure your Emergency Alert is assembled and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connect USB cable to micro:bit and computer, turn breakout board on" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Setup: Download @showdialog

Click the ``|Download|`` button to download the starter code to your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Click the download button in the bottom of your screen." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Investigate: How the Program Works

Take a look at the starter code in your workspace. Can you figure out what each part does?

~hint Tell Me More!

Buttons A and B raise or lower ``||variables:SafetyLevel||``, and a ``||basic:Forever||`` loop keeps the servo pointed at the matching position.

hint~

## Modify: Add a Second Output

A servo position only helps if you're standing close enough to see it clearly. Let's add a second way to show the risk level, one that's visible from farther away, or in low light.

Inside your ``||basic:Forever||`` loop, add an ``||logic:If||`` ``||logic:Else if||`` chain that checks ``||variables:SafetyLevel||``, and sets the ``||fwdLights:LED Ring||`` to a different colour for each position:

- 0: red
- 60: orange
- 120: yellow
- 180: green

~hint Tell Me More!

Checking ``||variables:SafetyLevel||`` against each exact position lets you assign a different colour to each one, red for the least safe position, green for the safest.

hint~

```blocks
basic.forever(function () {
    fwdMotors.setAngle(fwdBase.leftServo, SafetyLevel)
    // @highlight
    if (SafetyLevel == 0) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (SafetyLevel == 60) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (SafetyLevel == 120) {
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    } else if (SafetyLevel == 180) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
})
```

## Run: Try It

``|Download|`` your code. Press buttons A and B to move through all four positions.

Does the ``||fwdLights:LED Ring||`` match the servo's position every time?

~hint Tell Me More!

Both outputs should always agree, whatever position the servo points to, the ``||fwdLights:LED Ring||`` should show the matching colour.

hint~

## Investigate: Comparing Two Signs

You now have two ways to show the risk level: the servo's position, and the ``||fwdLights:LED Ring||``'s colour.

Who might be better served by the servo alone? Who might be better served by adding the coloured light?

~hint Tell Me More!

Someone standing close by can read the servo's position clearly. Colour can help in low light, and can communicate across language barriers too, a colour doesn't need to be read as a word to be understood. Adding a second output means the sign works for more people, in more conditions, than either output alone.

hint~

## Investigate: What If the Power Fails?

Adding the ``||fwdLights:LED Ring||`` made your sign more useful, but it also made it depend on power in a new way, a light can't glow at all without electricity.

If your Emergency Alert's battery ran out, what would happen to each output, the servo's position, and the LED Ring's colour?

Discuss as a group: between a servo-only sign, a servo-and-light sign, and a hand-painted sign with no electronics at all, which one is the most likely to still work during a real emergency, when power can fail exactly when it's needed most? Why?

~hint Tell Me More!

A completely tech-free sign, like a hand-painted dial someone turns by hand, can never lose power, so it's the most dependable fallback of all. Your electronic sign gains real advantages, colour, visibility in the dark, but it also gains a new way to fail that a tech-free version never has. There's rarely one perfect design, only real tradeoffs.

hint~

## Investigate: Tracing SafetyLevel

Pick one position, like 120. Trace exactly what happens to ``||variables:SafetyLevel||`` as your program runs, from the button press, through the ``||basic:Forever||`` loop, to the moment the ``||fwdLights:LED Ring||`` changes colour.

~hint Tell Me More!

Pressing a button changes ``||variables:SafetyLevel||`` to 120. The ``||basic:Forever||`` loop then reads that same value twice, once to set the servo's angle, and once to check it against each ``||logic:Else if||``, until it finds the matching colour.

hint~

## Reflect

In this tutorial, you **modified** your Emergency Alert to add a second output, so it can be read from farther away or in low light. Record your answers in the workspace.

1. Why does using two different outputs make your sign more useful than a single output alone?

2. What could go wrong if the servo and the ``||fwdLights:LED Ring||`` ever showed different risk levels at the same time?

3. What is one more way you could show the current risk level, without adding a new sensor?

4. Your electronic sign can lose power. A hand-painted sign never can. Why might a community still choose the electronic version anyway, despite that risk?

## Congratulations!

You've completed this tutorial! Here's a summary of what you added:

- ``||logic:If||`` ``||logic:Else if||``: Uses **selection** to match each ``||variables:SafetyLevel||`` position to a colour

- ``||fwdLights:LED Ring||``: A second output, readable from farther away or in low light

- Two outputs working together: the servo and the light always agree, so the sign works for more people in more conditions

In the next step, click the ``|Done|`` button to exit the tutorial.
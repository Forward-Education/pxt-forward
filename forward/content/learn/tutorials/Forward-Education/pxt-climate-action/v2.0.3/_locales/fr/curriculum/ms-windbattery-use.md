# Stockage d'énergie de l'éolienne - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setEnabled(false)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(-50)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(batteryLevel)
})
batteryLevel = 0
basic.forever(function () {
    if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
        `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
        }
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
        `)
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons notre éolienne! Nous allons faire cela en trois parties :

1. **Construire** ton éolienne
2. **Ajouter du code** pour lui donner vie
3. **Utiliser** et **tester** ton éolienne pour voir comment elle fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-render.webp" alt="Rendu complet de l'éolienne" style="display: block; width: 70%; margin:auto;">

## Construction, étape 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs01.webp)

## Construction, étape 2 @showdialog

![sbs2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs02.webp)

## Construction, étape 3 @showdialog

![sbs3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs03.webp)

## Construction, étape 4 @showdialog

![sbs4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs04.webp)

## Construction, étape 5 @showdialog

![sbs5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs05.webp)

## Construction, étape 6 @showdialog

![sbs6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs06.webp)

## Construction, étape 7 @showdialog

![sbs7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs07.webp)

## Construction, étape 8 @showdialog

![sbs8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs08.webp)

## Construction, étape 9 @showdialog

![sbs9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs09.webp)

## Construction, étape 10 @showdialog

![sbs10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs10.webp)

## Activité 2 : Programme ton projet @showdialog

Il est temps de donner vie à ton éolienne avec du code!

Le code sera les instructions qui indiquent à notre micro:bit quoi faire.

## Programmation, étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 40%; margin:auto;">

## Programmation, étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Programmation, étape 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêts à **tester** notre éolienne pour voir comment elle fonctionne.

**Astuces du tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu es prêt pour plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule!**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Utiliser, étape 1

Regarde attentivement l'éolienne. Peux-tu nommer toutes ses parties? Que représente chaque partie?

~hint Dis-m'en plus!
Ce modèle utilise :

-   **Blocs de construction :** une plaque de base, un connecteur cube, un long cadre blanc, un cercle vert, quatre petits cadres verts, quatre connecteurs dos à dos. Les blocs de construction aident à créer la structure de l'éolienne.
-   **Composants robotiques :** une plaque de connexion, un micro:bit, un moteur à servo continu et un cadran. Ces composants feront bouger notre éolienne!
    hint~

## Utiliser, étape 2

Avant de tester le code, faisons quelques _prédictions_ :

-   Selon toi, que se passera-t-il quand tu tournes le cadran dans le sens horaire? Antihoraire?
-   Que se passera-t-il si tu appuies sur le cadran vers le bas?

Regarde le code ci-dessous, si cela peut aider!

## Utiliser, étape 3

Testons-le!

Tourne le cadran dans le sens horaire ou antihoraire. Ensuite, appuie dessus. Que se passe-t-il?

~hint Dis-m'en plus!

-   Quand tu tournes le cadran, l'éolienne tourne dans la même direction. Une maison s'affiche aussi sur les DEL.
-   Quand tu appuies sur le cadran, l'éolienne arrête de tourner et la maison disparaît.
-   Cela simule comment les éoliennes génèrent de l'électricité pour alimenter des maisons pendant qu'elles tournent!
    hint~

## Utiliser, étape 4

Nous utilisons deux **événements** `||fwdSensors:on dial turned||` pour faire tourner l'éolienne. L'**événement** `||fwdSensors:on touch down||` arrête l'éolienne.

Dans ce scénario, le cadran représente le vent!

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(-50)
})

fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setEnabled(false)
})
```

## Utiliser, étape 5

Nous utilisons une **instruction conditionnelle** pour allumer les lumières de la maison chaque fois que l'éolienne génère de l'électricité.

Peux-tu trouver l'instruction conditionnelle dans notre code?

~hint Dis-m'en plus!

-   Les instructions conditionnelles sont des règles si/alors qui aident notre micro:bit à prendre des décisions selon certains critères. Nous utilisons des règles si/alors dans la vraie vie tout le temps! Par exemple, « S'il pleut, alors j'ouvre mon parapluie! »
-   Ici, nous avons dit au micro:bit : « Si l'éolienne tourne, alors illumine la maison! »
    hint~

```block
if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
```

## Utiliser, étape 6

Regarde ton code une fois de plus. Selon toi, que se passera-t-il quand tu appuies sur A?

Essaie-le maintenant.

~hint Dis-m'en plus!

-   Appuyer sur A affichera brièvement un nombre sur les DEL du micro:bit.
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(batteryLevel)
})
```

## Utiliser, étape 7

Laisse ton éolienne fonctionner pendant 10 secondes. Ensuite, appuie de nouveau sur A. Qu'est-il arrivé au nombre sur les DEL?

~hint Dis-m'en plus!

-   Le nombre a augmenté!
    hint~

## Utiliser, étape 8

Chaque fois que notre éolienne tourne, elle alimente la maison, mais elle « charge » aussi lentement une pile.

Nous avons créé une **variable** dans notre programme pour suivre la charge de la pile. Au début du programme, le `||variables:batteryLevel||` est « 0 ». Pendant que l'éolienne tourne, la charge augmente de 1 % toutes les 2 secondes.

~hint Dis-m'en plus!

-   Le bloc `||variables:change batteryLevel by 1||` augmente la variable de 1. Cela se produit toutes les 2 secondes à cause du bloc `||basic:pause||`.
-   Cela simule comment les vraies éoliennes stockent l'énergie dans des piles pour une utilisation ultérieure.
    hint~

```blocks
// @highlight
batteryLevel = 0
basic.forever(function () {
    if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        // @highlight
        batteryLevel += 1
        // @highlight
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
```

## Utiliser, étape 9

Si la pile commence vide (0 %) et se charge d'un autre 1 % toutes les 2 secondes, combien de temps faudra-t-il pour qu'elle soit complètement chargée (100 %)?

Comment pourrais-tu résoudre ce problème?

## Utiliser, étape 10

Retélécharge le code pour réinitialiser ta pile. Ensuite, tourne le cadran et observe combien de temps il faut pour que la pile atteigne 100 %. Ton calcul était-il exact?

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Liste 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose que tu aimerais approfondir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

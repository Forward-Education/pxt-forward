# Agriculture intelligente basée sur les données - Tutoriel d'utilisation

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
let pumpStart = 0
let pumpStop = 0
input.onButtonPressed(Button.A, function () {
    pumpStart = input.runningTime()
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
    pumpStop = input.runningTime()
})


// @collapsed
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```

## Projet d'agriculture intelligente basée sur les données @showdialog

Construisons un système d'agriculture hydroponique intelligent! Nous allons faire cela en 3 parties :

1. **Construire** notre système d'agriculture intelligente
2. **Ajouter du code** pour lui donner vie
3. **Utiliser** le système pour apprendre comment il fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-projectrender.webp" alt="Rendu complet de la ferme intelligente" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs01.webp)

## Étape de construction 2 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs02.webp)

## Étape de construction 3 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs03.webp)

## Étape de construction 4 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs04.webp)

## Étape de construction 5 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs05.webp)

## Étape de construction 6 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs06.webp)

## Étape de construction 7 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs07.webp)

## Étape de construction 8 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs08.webp)

## Étape de construction 9 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs09.webp)

_Note : Pour l'instant, tu peux placer le capteur d'humidité dans une tasse vide._

## Étape de construction 10 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs10.webp)

## Étape de construction 11 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs11.webp)

## Étape de construction 12 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs12.webp)

## Étape de construction 13 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs13.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de codage 1 @showdialog

IMPORTANT! Assure-toi que la carte d'extension de ta trousse Action Climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Allumer la carte d'extension" style="display: block; width: 40%; margin:auto;">

## Étape de codage 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet du feu de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de codage 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes prêts à **utiliser** notre système d'agriculture hydroponique intelligent!

**Astuces**

1. Suis les instructions en haut de l'écran.
2. Chaque fois que tu es prêt à en savoir plus, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

## Étape d'utilisation 1

Regarde bien ta construction physique. Peux-tu nommer toutes ses pièces ou composants?

~hint Dis-m'en plus!
Notre système d'agriculture comprend :

-   **Blocs de construction :** une plaque de base, trois longs cadres blancs, deux connecteurs cubiques, deux connecteurs d'angle
-   **Composants robotiques :** un micro:bit, une carte d'extension, une pile, une pompe à eau avec tubulure, un capteur d'humidité et un anneau de DEL
-   Deux longs connecteurs de câbles
    hint~

## Étape d'utilisation 2

Quel est le rôle de chaque pièce? Comment interagissent-elles entre elles?

~hint Dis-m'en plus!

-   Les **blocs de construction** sont comme les os de notre projet. Ils soutiennent tout le reste, comme les pièces robotiques et les plantes!
-   Le **micro:bit** est comme le cerveau de notre projet. Il conserve toutes les instructions (autrement dit le code!) qui indiquent à notre système d'agriculture quoi faire.
-   La **carte d'extension** envoie ces instructions du micro:bit vers la **pompe**, le **capteur d'humidité** et les **lumières** à travers des **câbles**.
-   La **pile** sur la carte d'extension alimente notre projet lorsqu'il n'est pas branché à l'ordinateur.
    hint~

## Étape d'utilisation 3

Jetons un coup d'œil aux instructions (autrement dit le code!) que nous avons données à notre ferme intelligente. Cela va nous aider à comprendre comment elle fonctionne!

## Étape d'utilisation 4

Trouve le bloc `||input:on button A pressed||` dans l'espace de travail et lis le code qui le suit.

D'après cela, quand penses-tu que la pompe à eau s'allumera? Quand s'éteindra-t-elle?

```block
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
```

## Étape d'utilisation 5

Testons-le! Assure-toi que la pompe est dans une tasse avec de l'eau, que le capteur d'humidité est dans une tasse vide, et que la tubulure est bien fixée.

Appuie sur A sur le micro:bit et regarde ce qui se passe! Tes prédictions étaient-elles justes?

~hint Dis-m'en plus!

-   Appuyer sur A est un **événement** qui déclenche le code en dessous, dans l'ordre. Chaque fois que nous appuyons sur A, nous vérifions le taux d'humidité de notre plante et déterminons si elle a besoin d'être arrosée.
-   Tant que le taux d'humidité reste sous les 20 %, la pompe reste allumée. Nous faisons cela à l'aide d'une boucle `||loops:while||`. Une boucle `||loops:while||` répète une série d'instructions jusqu'à ce qu'une certaine condition soit remplie.
-   Lorsque le taux d'humidité atteint 20 % ou plus, la boucle se termine et la pompe s'éteint!
    hint~

```block
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        // @highlight
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
```

## Étape d'utilisation 6

Regarde le code sous `||input:on button B pressed||`. Que penses-tu que cela fait?

~hint Dis-m'en plus!

-   Appuie sur la flèche à côté du bloc pour voir le code!
    hint~

## Étape d'utilisation 7

Essayons-le! Appuie sur le bouton « B » du micro:bit. Que s'est-il passé?

~hint Dis-m'en plus!

-   Lorsque tu appuies sur B, tu vois d'abord une horloge sur les DEL du micro:bit. Ensuite, tu vois un nombre. Le nombre s'affiche pendant 2 secondes, puis disparaît.
    hint~

## Étape d'utilisation 8

Lorsque tu appuies sur B, un nombre s'affiche sur le micro:bit. Que penses-tu que ce nombre représente?

~hint Dis-m'en plus!
Ce nombre représente combien de temps la pompe a fonctionné, en secondes, la dernière fois qu'elle a été activée.
hint~

```block
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
```

## Étape d'utilisation 9

Essaie d'identifier tous les blocs de code qui pourraient être impliqués dans le calcul de la durée de fonctionnement de la pompe.

~hint Dis-m'en plus!

-   Nous utilisons des `||variables:Variables||` pour déterminer combien de temps la pompe fonctionne. Pense aux variables comme à des boîtes où nous conservons de l'information pour l'utiliser plus tard.
-   Dans MakeCode, les blocs de variables sont rouges.
-   Vérifie l'ampoule pour la réponse!
    hint~

```blocks
let pumpStop = 0
let pumpStart = 0
input.onButtonPressed(Button.A, function () {
    // @highlight
    pumpStart = input.runningTime()

    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
    // @highlight
    pumpStop = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    // @highlight
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```

## Étape d'utilisation 10

Réfléchis à l'endroit où se trouvent les blocs `||variables:set pumpStart||`, `||variables:set pumpStop||`, et `||basic:show number||` `||math:round||` par rapport à la `||loops:loop||` et aux `||input:events||` dont nous avons parlé plus tôt.

Pourquoi l'ordre ou le placement de ces blocs est-il important?

~hint Dis-m'en plus!
L'ordre de ces blocs est vraiment important, tout comme il est important de suivre l'ordre des opérations en mathématiques. Si nous changeons l'ordre, nous obtiendrons un résultat différent. Voici comment cela devrait se dérouler :

1. Tous les micro:bits suivent automatiquement depuis combien de temps ils sont allumés, dans une variable appelée `||input:running time (ms)||`.
2. Dès que A est pressé, nous enregistrons ce temps de fonctionnement dans une autre variable appelée `||variables:pumpStart||`.
3. Une fois que la boucle se termine et que la pompe s'éteint, nous enregistrons le temps de fonctionnement dans une variable appelée `||variables:pumpStop||`.
4. Lorsque B est pressé, nous découvrons combien de temps la pompe a fonctionné en soustrayant le temps dans `||variables:pumpStart||` du temps dans `||variables:pumpStop||`. Ce nombre est en millisecondes, alors nous le divisons par 1000 pour le convertir en secondes.
   hint~

```blocks
let pumpStop = 0
let pumpStart = 0
input.onButtonPressed(Button.A, function () {
    // @highlight
    pumpStart = input.runningTime()

    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
    // @highlight
    pumpStop = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    // @highlight
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```

## Félicitations ! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris à propos de ce projet?

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose sur laquelle tu aimerais en apprendre davantage?

## Réflexion @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

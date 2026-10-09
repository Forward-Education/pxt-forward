# Forward Education Concevoir des maisons intelligentes durables - Tutoriel de modification

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
radio=radio
```

```template
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        Temperature += -1
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 1) {
        Temperature += 1
        basic.showArrow(ArrowNames.North)
    }
    basic.showNumber(Temperature)
})
input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    radio.sendString(openDoor)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.getAngle(fwdBase.leftServo) < 100) {
            fwdMotors.setAngle(fwdBase.leftServo, 100)
        } else {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})

let Temperature = 0
let openDoor = ""
openDoor = "openDoor"
Temperature = 17
fwdMotors.setAngle(fwdBase.leftServo, 0)
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(Temperature)
})
```

## Tutoriel de modification - Maison intelligente @showdialog

Aujourd'hui, nous construisons et programmons une **maison intelligente**!

Pour l'instant, nous avons un modèle de maison intelligente automatisée avec un thermostat à distance et une porte qui se déverrouille. Explorons comment optimiser notre projet en **modifiant** notre code!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-smarthome-render.webp" alt="Rendu complet de la maison intelligente" style="display: block; width: 80%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT! Assure-toi que la carte d'extension de ta trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de jumelage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ dans ton projet sur **les deux** micro:bits de ton projet.

## Étape 4

Place un micro:bit dans la **carte d'extension du modèle**, et garde l'autre micro:bit **dans ta main** tout au long de ce projet.

## Étape 5

Pense à la façon dont les maisons intelligentes de notre leçon fonctionnaient.

Selon toi, que représente le micro:bit dans ton **modèle** à l'intérieur de ta maison?

Selon toi, que représente le micro:bit dans ta main?

~hint Dis-m'en plus!

-   Le micro:bit dans ton **modèle** représente un thermostat intelligent dans notre maison.

-   Le micro:bit dans ta **main** représente un téléphone ou une application intelligente qui peut contrôler des fonctions automatisées dans notre maison.

-   Ces micro:bits communiquent à l'aide d'**ondes radio**, un peu comme la plupart des applications intelligentes qui contrôlent les lumières d'une maison.

hint~

## Étape 6

Repense à notre leçon sur la communication sans fil. Selon toi, quels blocs les deux micro:bits utilisent-ils pour communiquer entre eux à l'aide d'**ondes radio**?

~hint Dis-m'en plus!

Le bloc `||Radio:radio set group||` s'assure que les deux micro:bits communiquent sur le même canal radio.

Les blocs `||Radio:radio send||` numéro ou chaîne **envoient** un message du micro:bit sur lequel tu as appuyé sur un bouton, au deuxième micro:bit.

Les blocs `||Radio:radio received||` numéro ou chaîne **écoutent** les instructions provenant du micro:bit sur lequel tu as appuyé sur un bouton.

hint~

```blocks
// @highlight
radio.setGroup(1)

input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
   // @highlight
    radio.sendNumber(-1)
})

// @highlight
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        basic.showArrow(ArrowNames.South)
        Temperature += -1
    }
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.North)
        Temperature += 1
    }
    basic.showNumber(Temperature)
})
```

## Étape 7

Testons notre modèle de maison intelligente automatisée et voyons comment il fonctionne!

Regarde la différence dans le code lorsqu'on appuie sur **A**, comparativement à quand on appuie sur **B** sur l'un ou l'autre des micro:bits.

Selon toi, pourquoi y a-t-il des nombres positifs et négatifs dans les blocs `||variables:change Temperature by||`?

~hint Dis-m'en plus!

Lorsque tu appuies sur le bouton **A** sur l'un ou l'autre des micro:bits, la variable `||variables:Temperature||` diminue de 1. Le thermostat est maintenant réglé **1 degré Celsius plus froid.**

Lorsque tu appuies sur le bouton **B** sur l'un ou l'autre des micro:bits, la variable `||variables:Temperature||` augmente de 1. Le thermostat est maintenant réglé **1 degré Celsius plus chaud.**

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        Temperature += -1
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 1) {
        Temperature += 1
        basic.showArrow(ArrowNames.North)
    }
    basic.showNumber(Temperature)
})
basic.forever(function () {
    basic.showNumber(Temperature)
})
```

## Étape 8

Selon toi, que se passera-t-il si on change le nombre dans le bloc `||variables:change Temperature by||` de 1 à 5?

~hint Dis-m'en plus!

Appuyer sur **A** ou **B** augmente et diminue maintenant le thermostat de **5 degrés Celsius** chaque fois!

N'oublie pas de `|télécharger|` ton code sur **les deux** micro:bits lorsque tu es prêt à tester ton code.

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    Temperature += -5
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})
input.onButtonPressed(Button.B, function () {
    // @highlight
    Temperature += 5
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        // @highlight
        Temperature += -5
        basic.showArrow(ArrowNames.South)
    }
    if (receivedNumber == 1) {
        // @highlight
        Temperature += 5
        basic.showArrow(ArrowNames.North)
    }
    basic.showNumber(Temperature)
})
```

## Étape 9

Maintenant que tu comprends comment ajuster le **thermostat** à l'aide des deux micro:bits, selon toi, quels blocs de code **déverrouillent la porte** et **allument les lumières**?

~hint Dis-m'en plus!

Appuyer sur **A+B** sur le **micro:bit dans ta main** déverrouille la porte et allume les lumières à distance, un peu comme se réveiller le matin, ou rentrer à la maison à la fin de la journée!

Si la porte est verrouillée, le `||fwdMotors:leftServo||` tourne à 100 degrés, ce qui nous permet de faire glisser la porte pour l'ouvrir.

En même temps, le `||fwdSensors:LED ring||` s'allume pour qu'on puisse voir à l'intérieur de notre maison!

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    radio.sendString(openDoor)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.getAngle(fwdBase.leftServo) < 100) {
            fwdMotors.setAngle(fwdBase.leftServo, 100)
        } else {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```

## Étape 10

Maintenant que nous avons **modifié** notre code pour comprendre comment fonctionne le modèle de maison intelligente automatisée, nous allons réaliser un petit défi!

## Étape 11

Pour rendre notre maison plus durable, nous pouvons **détecter** la quantité de lumière solaire qui entre par les fenêtres afin de nous aider à ajuster automatiquement les **lumières** à l'intérieur de notre maison!

Quel type de capteur devrions-nous ajouter à notre projet?

~hint Dis-m'en plus!

Le capteur `||fwdSensors:solar||` peut détecter la lumière dans une pièce!

hint~

```block
fwdSensors.solar1.isPastThreshold(,fwdEnums.OverUnder.Under)
```

## Étape 12

Réfléchissons à la fonctionnalité que nous voulons ajouter à notre modèle :

1. Quand il fait **nuit**, notre `||fwdSensors:LED light||` allumera tous les pixels de l'anneau.

2. Quand il fait **nuageux**, `||fwdSensors:LED light||` allumera la moitié des pixels.

3. Quand il fait **ensoleillé**, `||fwdSensors:LED light||` éteindra tous les pixels.

Quel type de bloc pourrais-tu ajouter à ton code pour satisfaire ces **conditions**?

~hint Dis-m'en plus!

Une `||logic:conditional statement||`! Cherche dans le tiroir logique le bloc « if/else » et glisse-le sous le bloc `||basic:showNumber||` dans la boucle `||basic:forever||`.

Clique sur le bouton + sous ton bloc `||logic:if/else||` pour ajouter une autre condition à ton code.

hint~

```blocks
basic.forever(function () {
    basic.showNumber(Temperature)
    // @highlight
    if (true) {
    	
    } else if (true){}
    else {
    	
    }
})
```

## Étape 13

S'il fait sombre dehors, on devra allumer toutes les lumières de notre pièce pour pouvoir voir!

Quels blocs dois-tu ajouter à ton code pour créer la condition suivante?

Si le taux d'ensoleillement est **sous 25 %**, allume **tous les pixels**.

~hint Dis-m'en plus!

Tu auras besoin d'un bloc `||fwdSensors:solar||` pour détecter si le taux d'ensoleillement est **sous 25 %**.

Tu auras besoin d'un bloc `||fwdSensors:set all ledRing LEDs||` pour allumer toutes les DEL en même temps.

Choisis n'importe quelle couleur de DEL; nous avons choisi le blanc pour ce projet.

hint~

```blocks
    if (fwdSensors.solar1.isPastThreshold(25, fwdEnums.OverUnder.Under)) {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    }
    else if(true) {}
    else {
    	
    }
```

## Étape 14

S'il fait nuageux dehors, il y a encore un peu de soleil, mais il se peut qu'on doive allumer nos lumières faiblement.

Quels blocs dois-tu ajouter à ton code pour créer la condition suivante?

Si le taux d'ensoleillement est **sous 50 %**, allume **la moitié des pixels**.

~hint Dis-m'en plus!

Tu auras besoin d'un bloc `||fwdSensors:solar||` pour détecter si le taux d'ensoleillement est **sous 50 %**.

Tu auras besoin de quatre blocs `||fwdSensors:set ledRing to||` pour allumer quatre des huit pixels de DEL.

N'oublie pas, les pixels de DEL sont numérotés de 0 à 7!

hint~

```blocks
    if (fwdSensors.solar1.isPastThreshold(25, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    }
    else if (fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Under)) {
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(1, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(2, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(3, 0xffffff)
    } else {
    	
    }
```

## Étape 15

S'il fait ensoleillé dehors, on n'a pas du tout besoin d'allumer les lumières dans notre maison!

Quel bloc devras-tu ajouter à ton code pour créer la condition suivante?

Sinon, éteins **tous les pixels**

~hint Dis-m'en plus!

Tu auras besoin d'un bloc `||fwdSensors:set all ledRing LEDs||` pour éteindre toutes les DEL en même temps.

Choisis la couleur noir pour éteindre les DEL de ton projet.

`|Télécharger|` ton code sur **les deux** micro:bits lorsque tu es prêt à tester ton système d'éclairage automatisé!

hint~

```blocks
    if (fwdSensors.solar1.isPastThreshold(25, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else if (fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setPixelColor(0, 0xffffff)
        fwdLights.ledRing1.setPixelColor(1, 0xffffff)
        fwdLights.ledRing1.setPixelColor(2, 0xffffff)
        fwdLights.ledRing1.setPixelColor(3, 0xffffff)
    }
    else {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape 16

Que remarques-tu qui arrive au `||fwdSensors:LED ring||` lorsque tu couvres le capteur `||fwdSensors:solar||` avec ta main?

Qu'arrive-t-il au `||fwdSensors:LED ring||` lorsque tu déplaces ton projet dans une autre pièce?

~hint Dis-m'en plus!

Lorsque tu couvres le capteur `||fwdSensors:solar||` avec ta main, il y a moins de lumière détectée par le capteur, et le `||fwdSensors:LED ring||` s'allumera!

Lorsque tu déplaces ton projet dans une autre pièce, le `||fwdSensors:LED ring||` peut s'allumer ou s'éteindre selon la différence d'éclairage.

hint~

## Réflexion

Avant de terminer :

-   Selon toi, un changement de `||variables:change Temperature by||` de 1 ou de 5 degrés Celsius est-il plus écologique? Explique ton raisonnement.
-   Comment pourrais-tu intégrer un capteur tactile à ton modèle de maison intelligente pour ouvrir une porte manuellement?
-   Quelles autres fonctionnalités pourrais-tu adapter pour rendre ta maison intelligente automatisée plus durable?

## Terminé

Clique sur `|Terminé|` pour terminer le tutoriel.

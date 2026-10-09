# Forward Education - Conception de maisons intelligentes durables - Tutoriel d'utilisation

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
            fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        } else {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
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
fwdLights.ledRing1.setAllPixelsColor(0x000000)
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(Temperature)
})
```

## Maison intelligente - Tutoriel d'utilisation @showdialog

Aujourd'hui, on construit une maquette de maison intelligente pour réduire la consommation d'énergie!

Ajoutons du **code de départ** pour lui donner vie!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-smarthome-render.webp" alt="Rendu complet de la maison intelligente" style="display: block; width: 80%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT! Assure-toi que ta plaque d'expérimentation de la trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Brancher le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de jumelage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ dans ton projet sur **les deux** micro:bits de ton projet.

## Étape 4

Place un micro:bit dans la **plaque d'expérimentation de la maquette**, et tiens l'autre micro:bit **dans ta main** tout au long de ce projet.

## Étape 5

Regarde de près le projet physique que tu viens de construire.

Quels composants robotiques remarques-tu? Comment penses-tu qu'ils vont fonctionner ensemble pour faire fonctionner notre maquette comme prévu?

~hint Dis-m'en plus !
La maquette de maison intelligente automatisée comprend :

-   Un `||fwdMotors:servo motor||` qui tourne pour déverrouiller la porte d'entrée.

-   Un `||fwdSensors:LED ring||` pour allumer et éteindre les lumières de la pièce.

-   Un `||fwdSensors:touch sensor||` et un `||fwdSensors:solar sensor||` que nous n'utilisons **pas encore**, mais que nous utiliserons dans le tutoriel de **modification**.

-   Ces pièces sont connectées à la **plaque d'expérimentation** au moyen de **câbles**.

-   La plaque d'expérimentation est connectée à un **micro:bit** qui contient tout le code qui indique à nos capteurs quoi faire et quand le faire.

-   Un deuxième **micro:bit** contient le même code et communique sans fil dans les deux sens!

hint~

## Étape 6

Repense à la façon dont les maisons intelligentes fonctionnaient dans notre leçon.

Selon toi, que représente le micro:bit dans ta **maquette** à l'intérieur de ta maison?

Selon toi, que représente le micro:bit dans ta main?

~hint Dis-m'en plus !

-   Le micro:bit dans ta **maquette** représente un thermostat intelligent dans notre maison.

-   Le micro:bit dans ta **main** représente un téléphone ou une application intelligente qui peut contrôler les fonctions automatisées de notre maison.

-   Ces micro:bits communiquent au moyen d'**ondes radio**, un peu comme la plupart des applications intelligentes qui contrôlent les lumières d'une maison.

hint~

## Étape 7

Repense à notre leçon sur la communication sans fil. Selon toi, quels blocs les deux micro:bits utilisent-ils pour communiquer entre eux au moyen d'**ondes radio**?

~hint Dis-m'en plus !

Le bloc `||Radio:radio set group||` s'assure que les deux micro:bits communiquent sur le même canal radio.

Les blocs `||Radio:radio send||` de nombre ou de chaîne **envoient** un message du micro:bit sur lequel tu as appuyé sur un bouton vers le deuxième micro:bit.

Les blocs `||Radio:radio received||` de nombre ou de chaîne **écoutent** les instructions provenant du micro:bit sur lequel tu as appuyé sur un bouton.

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

## Étape 8

Testons le fonctionnement de notre **thermostat à l'intérieur de notre maison**!

Appuie sur le bouton **A** du micro:bit à l'intérieur de ta maquette. Que remarques-tu?

~hint Dis-m'en plus !

Le bouton **A** est une **entrée** qui déclenche une série d'instructions :

1. 1 degré est soustrait de la variable `||Variables:temperature||` sur le premier micro:bit.

2. Le micro:bit `||Basic:displays||` une flèche pointant vers le bas.

3. Le micro:bit de la maquette `||radio:sends||` le nombre « -1 » au micro:bit dans ta main.

4. Le micro:bit dans ta main `||Radio:receives||` le nombre « -1 » et répète les étapes 2 et 3 sur son `||Basic:LED display||`.

5. Les deux micro:bits affichent la nouvelle valeur de `||Variables:temperature||` sur leurs `||Basic:LED dispalys||`.

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    Temperature += -1
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(-1)
})

radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == -1) {
        Temperature += -1
        basic.showArrow(ArrowNames.South)
    }
    basic.showNumber(Temperature)
})

basic.forever(function () {
    basic.showNumber(Temperature)
})
```

## Étape 9

Maintenant, testons la même fonctionnalité avec notre **application de télécommande**.

Appuie sur le bouton **A** avec le micro:bit dans **ta main**. Que remarques-tu?

~hint Dis-m'en plus !
Le micro:bit dans ta main envoie le même message qu'à l'étape précédente!

Le thermostat est maintenant réglé **1 degré Celsius plus froid.**
hint~

```blocks
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})

radio.onReceivedNumber(function (receivedNumber) {
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

## Étape 10

Comment peut-on **augmenter** la température de notre thermostat?

~hint Dis-m'en plus !

Si on appuie sur le bouton **B** de l'un ou l'autre des micro:bits, la variable `||variables:Temperature||` augmente de 1 degré Celsius!

hint~

```blocks
input.onButtonPressed(Button.B, function () {
    Temperature += 1
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(1)
})

radio.onReceivedNumber(function (receivedNumber) {
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

## Étape 11

Maintenant que tu comprends comment ajuster le **thermostat** à l'aide des deux micro:bits, quels blocs de code penses-tu qui **déverrouillent la porte** et **allument les lumières**?

~hint Dis-m'en plus !

Appuyer sur **A+B** sur le **micro:bit dans ta main** déverrouille la porte et allume les lumières à distance, un peu comme se réveiller le matin ou revenir à la maison après la journée!

Si la porte est verrouillée, le `||fwdMotors:leftServo||` tourne à 100 degrés, ce qui permet de faire glisser la porte pour l'ouvrir.

En même temps, le `||fwdSensors:LED ring||` s'allume pour qu'on puisse voir à l'intérieur de notre maison!

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    // @highlight
    radio.sendString(openDoor)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.getAngle(fwdBase.leftServo) < 100) {
            // @highlight
            fwdMotors.setAngle(fwdBase.leftServo, 100)
            // @highlight
            fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        } else {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
        }
    }
})
```

## Étape 12

Que va-t-il se passer si on appuie une deuxième fois sur **A+B**?

~hint Dis-m'en plus !

Si la porte est déverrouillée, appuyer sur **A+B** règle le `||fwdMotors:leftServo||` à 0 degré et le `||fwdSensors:LEDRing||` au noir.

C'est particulièrement utile pour économiser de l'énergie quand on **va se coucher** ou qu'on **quitte la maison**.
hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    // @highlight
    radio.sendString(openDoor)
})

radio.onReceivedString(function (receivedString) {
    if (receivedString == openDoor) {
        if (fwdMotors.getAngle(fwdBase.leftServo) < 100) {
            fwdMotors.setAngle(fwdBase.leftServo, 100)
            fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        } else {
            // @highlight
            fwdMotors.setAngle(fwdBase.leftServo, 0)
            // @highlight
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
        }
    }
})
```

## Réflexion

Avant de terminer :

1. Selon toi, comment l'utilisation de la télécommande ou des fonctions automatisées aide-t-elle à réduire la consommation d'énergie dans notre maison?
2. Quelles autres fonctions pourrais-tu adapter pour rendre ta maison intelligente automatisée encore plus durable?

## Terminé

Clique sur le bouton `|Terminé|` pour terminer ce tutoriel.

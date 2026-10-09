# Turbidimètres - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
input.onButtonPressed(Button.A, function () {
    basic.showNumber(fwdSensors.solar1.lightLevel())
})
fwdLights.ledRing1.setBrightness(10)
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
```

## Turbidimètres - Tutoriel Modifier @showdialog

Aujourd'hui, nous allons construire et programmer notre propre **capteur NTU**!

Nous allons ajouter du **code de départ** qui nous permet de mesurer la turbidité d'échantillons d'eau! Ensuite, nous allons modifier le code pour ajouter plus de fonctionnalités.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-turbidity-render.webp" alt="Rendu complet du turbidimètre" style="display: block; width: 100%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code sur ton micro:bit.

## Étape 4

Regarde ton projet physique. Peux-tu identifier les principales parties du capteur NTU?

~hint Dis-m'en plus!

Rappelle-toi :

-   Les **capteurs NTU** nécessitent une _source_ de lumière et un _capteur_ de lumière.

-   Nous utilisons l'**anneau de DEL** comme source de lumière et le **capteur solaire** comme capteur de lumière.

-   L'anneau de DEL fera briller une lumière directement à travers l'échantillon d'eau.

-   Le capteur solaire est placé perpendiculairement à l'anneau de DEL pour capter toute lumière dispersée par les particules en suspension dans l'échantillon! Regarde l'indice de l'ampoule pour un visuel.

hint~

![Dispersion de la lumière dans les capteurs NTU](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/NTUsensor-cloudysample.png)

## Étape 5

Regarde le code dans l'espace de travail. Selon toi, que fera ce code?

~hint Dis-m'en plus!

-   Les deux blocs `||fwdSensors:LED ring||` dans `||basic:on start||` indiquent au micro:bit de régler la source de lumière de notre capteur NTU à pleine luminosité.

-   `||input:on button A pressed||` : la valeur captée par le capteur solaire s'affichera sur les DEL du micro:bit. C'est ainsi que nous pouvons prendre une lecture de notre échantillon!

hint~

```blocks
fwdLights.ledRing1.setBrightness(10)
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
input.onButtonPressed(Button.A, function () {
    basic.showNumber(fwdSensors.solar1.lightLevel())
})
```

## Étape 6

Prends un verre d'eau du robinet à tester. Place l'échantillon entre l'anneau de DEL et le capteur solaire comme montré dans l'indice de l'ampoule. Assure-toi que l'échantillon d'eau est stable et ne se renversera pas.

![Échantillon à faible turbidité](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-turbidity-water-render.webp)

## Étape 7

Appuie sur A. Quelle est la lecture pour cet échantillon d'eau du robinet? Note-la.

## Étape 8

Note plusieurs autres lectures du même échantillon. Ensuite, calcule le score NTU moyen.

## Étape 9

Modifions le code pour arrondir la lecture au nombre entier le plus proche avant qu'elle soit affichée. Cela rendra la sortie plus facile à lire.

Fais glisser le bloc `||math:round||` par-dessus le bloc `||fwdSensors:solar light level||` et relâche.

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    basic.showNumber(Math.round(fwdSensors.solar1.lightLevel()))
})
```

## Étape 10

Une lecture brute du capteur ne nous indique pas immédiatement si l'eau est claire ou trouble.

Ensuite, modifions le code pour classifier la turbidité et fournir une sortie encore plus conviviale. Nous classerons les lectures comme « Claire » ou « Trouble » _par rapport à notre échantillon d'eau du robinet_.

## Étape 11

Puisque tu as mesuré l'eau du robinet aux étapes 7 et 8, considérons cette lecture comme notre référence « Claire ». Nous allons ajouter une **instruction conditionnelle** pour afficher « CLAIRE » quand la lecture du capteur est _inférieure ou égale_ à ta lecture de l'eau du robinet.

~hint Dis-m'en plus!

-   Nous allons utiliser une **instruction conditionnelle** pour vérifier si la lecture du capteur répond à notre critère « Claire ».
-   Les instructions conditionnelles permettent au programme de prendre des décisions. Le code à l'intérieur de la condition ne s'exécutera que si la condition est vraie.
    hint~

## Étape 12

Fais glisser un bloc `||logic:if then||` de la catégorie `||Logic||`. Ajoute-le sous le bloc `||basic:show number||`.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(fwdSensors.solar1.lightLevel()))
    // @highlight
    if (true) {
    	
    }
})
```

## Étape 13

Fais glisser un bloc `||logic: 0 < 0||` dans ton instruction conditionnelle. Change l'opérateur « inférieur à » pour « inférieur ou égal à ».

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(fwdSensors.solar1.lightLevel()))
    // @highlight
    if (0 <= 0) {
    	
    }
})
```

## Étape 14

Fais glisser un bloc `||fwdSensors:solar light level||` dans le premier espace de ton expression. Ensuite, remplace le deuxième « 0 » par la lecture moyenne que tu as notée pour l'eau du robinet à l'étape 8.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(fwdSensors.solar1.lightLevel()))
    // @highlight
    if (fwdSensors.solar1.lightLevel() <= 70) {
    	
    }
})
```

## Étape 15

Ajoute un bloc `||basic:show string||` dans la condition. Modifie « Hello! » pour « CLAIRE ».

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(fwdSensors.solar1.lightLevel()))
    // @highlight
    if (fwdSensors.solar1.lightLevel() <= 70) {
        basic.showString("CLEAR")
    }
})
```

## Étape 16

Appuie sur le « + » sous ton instruction conditionnelle. Ajoute une instruction « sinon » pour afficher « TROUBLE » pour toutes les autres lectures.

```block
if (fwdSensors.solar1.lightLevel() <= 70) {
        basic.showString("CLEAR")
    } else {
        // @highlight
        basic.showString("TURBID")
    }
```

## Étape 17

Ajoute un bloc `||music:play tone||` pour jouer un son quand l'eau est considérée trouble.

```block
if (fwdSensors.solar1.lightLevel() <= 70) {
        basic.showString("CLEAR")
    } else {
        basic.showString("TURBID")
        // @highlight
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
```

## Étape 18

Personnalise ton alerte sonore en utilisant d'autres blocs des catégories `||Music||` et `||Loops||`.

```block
if (fwdSensors.solar1.lightLevel() <= 70) {
        basic.showString("CLEAR")
    } else {
        basic.showString("TURBID")
        // @highlight
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
```

## Teste et améliore

Teste ton alarme avec différents échantillons d'eau! Ajuste ton seuil et ton alarme au besoin pour qu'ils fonctionnent efficacement.

## Terminé

Clique sur le bouton `|Terminé|` pour terminer ce tutoriel.

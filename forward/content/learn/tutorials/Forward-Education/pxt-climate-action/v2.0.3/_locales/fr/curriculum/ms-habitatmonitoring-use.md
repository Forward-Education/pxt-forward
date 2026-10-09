# Suivi d'habitat - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(fwdSensors.moisture1.moistureLevel()))
    basic.clearScreen()
    basic.showString("%")
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(fwdSensors.solar1.lightLevel()))
    basic.clearScreen()
    basic.showString("%")
    basic.pause(1000)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
})
```

## Suivi d'habitat - Tutoriel Utiliser @showdialog

Aujourd'hui, nous construisons un appareil de suivi d'habitat pour collecter des données sur le terrain!

Ajoutons du code de départ pour nous assurer que notre appareil collecte des données quand nous appuyons sur un bouton!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-habitatmonitoring-render.webp" alt="Rendu complet du montage de suivi d'habitat" style="display: block; width: 60%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton micro:bit.

## Étape 4

Testons le fonctionnement de notre **appareil de suivi d'habitat**!

Selon toi, que se passera-t-il quand tu appuieras sur le bouton **A** du micro:bit?

~hint Dis-m'en plus!

1. Le bouton **A** est une **entrée** qui envoie les instructions au micro:bit.

2. Le micro:bit **affiche en sortie** une icône symbolisant le sol sur l'`||basic:display||` du micro:bit.

3. L'`||basic:display||` du micro:bit s'efface.

4. La valeur du `||fwdSensors:soil moisture||` s'affiche sur l'`||basic:display||` du micro:bit, arrondie au **nombre entier** le plus proche, sur 100 %.

5. Le micro:bit fait une pause d'une seconde.

6. Le micro:bit revient aux instructions de la fonction `||basic:forever||`.

hint~

```blocks
    // @highlight
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(fwdSensors.moisture1.moistureLevel()))
    basic.clearScreen()
    basic.showString("%")
    basic.pause(1000)
})
```

## Étape 5

Essaie de retirer le capteur d'humidité de ton appareil de suivi de terrain et de le tenir doucement dans ton poing.

Avec ton autre main, appuie de nouveau sur le bouton **A**. Qu'as-tu remarqué?

~hint Dis-m'en plus!

Le `||fwdSensors:moisture sensor||` a mesuré la quantité d'humidité sur ta main!

Plus tes mains sont sèches, plus le pourcentage d'humidité est bas!

hint~

## Étape 6

Maintenant que nous comprenons comment le `||fwdSensors:moisture sensor||` collecte des données, explorons d'autres **capteurs** dans notre code!

D'après les blocs de notre code, que penses-tu qu'il se passera quand nous appuierons sur le bouton **B** de notre micro:bit?

~hint Dis-m'en plus!

1. Le bouton **B** est une **entrée** qui envoie les instructions au micro:bit.

2. Le micro:bit **affiche en sortie** une icône symbolisant le soleil sur l'`||basic:display||` du micro:bit.

3. L'`||basic:display||` du micro:bit s'efface.

4. La valeur du `||fwdSensors:solar light level||` s'affiche sur l'`||basic:display||` du micro:bit, arrondie au **nombre entier** le plus proche, sur 100 %.

5. Le micro:bit fait une pause d'une seconde.

6. Le micro:bit revient aux instructions de la fonction `||basic:forever||`.

hint~

```blocks
    // @highlight
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(fwdSensors.solar1.lightLevel()))
    basic.clearScreen()
    basic.showString("%")
    basic.pause(1000)
})
```

## Étape 7

Essaie de retirer le `||fwdSensors:solar sensor||` et le **bloc de construction circulaire** de ton appareil de suivi de terrain et tiens-le près d'une lumière vive ou d'une lampe de poche.

Que remarques-tu à propos de la valeur du `||fwdSensors:solar light level||` quand tu appuies sur le bouton **B**?

~hint Dis-m'en plus!

Le `||fwdSensors:solar sensor||` a mesuré la quantité de lumière dans la pièce!

Plus il fait clair, plus le pourcentage solaire est élevé!

hint~

## Sortie sur le terrain! @showdialog

Maintenant que tu comprends comment ton code **fonctionne**, il est temps de penser comme un écologiste et d'apporter ton appareil de suivi d'habitat sur le terrain!

Apporte un stylo et du papier pendant que tu collectes des données sur les niveaux `||fwdSensors:solar||` et `||fwdSensors:moisture||` dans tes habitats locaux.

## Étape 8

À l'aide de ton appareil de suivi d'habitat, crée un tableau avec au moins 5 points de données différents provenant d'un habitat.

Utilise **les deux capteurs** pour recueillir des relevés **toutes les 5 minutes** au même endroit.

~hint Dis-m'en plus!

N'oublie pas de noter d'autres observations sur l'habitat pendant que tu collectes tes données!

Par exemple :

1. Quelle était l'heure de chaque relevé?
2. Dans quel endroit as-tu collecté tes données?
3. Quel temps faisait-il quand tu as collecté tes données?
4. Quels types de plantes et d'animaux font partie de l'habitat où tu as collecté tes données?

hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

Quelque chose t'a-t-il surpris à propos du projet?

## Réflexion @showdialog

1. Quelles tendances as-tu remarquées dans les données que tu as collectées?
2. Comment pourrais-tu améliorer le **code** de ton modèle?
3. Comment penses-tu que l'appareil de suivi d'habitat aide à collecter des données sur un **écosystème** au fil du temps?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

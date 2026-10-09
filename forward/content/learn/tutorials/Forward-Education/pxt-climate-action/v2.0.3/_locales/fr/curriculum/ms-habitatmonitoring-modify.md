# Suivi d'habitat - Tutoriel Modifier

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
input.onButtonPressed(Button.AB, function () {
	
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

## Suivi d'habitat - Tutoriel Modifier @showdialog

Aujourd'hui, nous construisons un appareil de suivi d'habitat pour collecter des données sur le terrain!

Nous allons ajouter du code de départ pour nous assurer que notre appareil collecte des données quand nous appuyons sur un bouton. Ensuite, nous modifierons le code pour le personnaliser!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-habitatmonitoring-render.webp" alt="Rendu complet du montage de suivi d'habitat" style="display: block; width: 60%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur le micro:bit.

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

## Étape 6

Nous avons un appareil de suivi d'habitat qui collecte des données sur l'`||fwdSensors:soil moisture||` et le `||fwdSensors:sunlight||`.

Collectons maintenant des données sur l'`||input:temperature||` de nos habitats!

~hint Dis-m'en plus!

Nous allons ajouter du code à l'événement vide `||input: on button A+B||` dans notre espace de travail, qui collectera des données de notre `||input:thermometer||`.

hint~

```blocks
// @highlight
input.onButtonPressed(Button.AB, function () {
	
})
```

## Étape 7

D'abord, nous devrons concevoir un **symbole** pour informer les écologistes que nous recueillons des données sur l'`||input:temperature||` de l'habitat.

~hint Dis-m'en plus!

1. Fais glisser un bloc `||basic:show leds||` de la boîte à outils dans l'événement `||input:on button A+B pressed||`.

2. Sois créatif! Conçois n'importe quel symbole qui représentera la **température** pour un écologiste sur le terrain.

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
// @highlight
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
})
```

## Étape 8

Ensuite, nous devrons `||display:afficher||` la `||input:temperature||` de notre habitat!

~hint Dis-m'en plus!

1. Fais glisser un bloc `||basic:clear screen||` de la boîte à outils dans l'événement `||input:on button A+B pressed||` de l'espace de travail.
2. Fais glisser un bloc `||basic:show number||` de la boîte à outils sous ton bloc `||basic:clear screen||`.

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
        // @highlight
    basic.clearScreen()
   // @highlight
    basic.showNumber()
})
```

## Étape 9

Nous voulons que les écologistes collectent des données de manière **cohérente**!

Quel bloc de code devrions-nous utiliser pour afficher notre valeur de `||input:temperature||` en **nombre entier**?

~hint Dis-m'en plus!

Nous avons besoin du bloc `||math:round||`!

1. Fais glisser le bloc de la boîte à outils dans l'espace vide du bloc `||basic:show number||` dans notre espace de travail.

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
    //@highlight
    basic.showNumber(Math.round())
})
```

## Étape 10

Quel bloc de code penses-tu que nous devrions utiliser pour afficher la `||input:temperature||` d'un habitat avant d'**effacer l'écran** de l'`||basic:display||` du micro:bit?

~hint Dis-m'en plus!

1. Fais glisser le bloc `||input:temperature||` du tiroir `||input:input||` de ta boîte à outils dans le bloc `||math:round||` de ton espace de travail.
2. Utilise un bloc `||basic:clear screen||` pour réinitialiser l'`||basic:display||` de ton micro:bit.

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
    //@highlight
    basic.showNumber(Math.round(input.temperature()))
    //@highlight
    basic.clearScreen()
})
```

## Étape 11

Rendons nos données plus claires! Nous devons préciser à nos utilisateurs que la valeur de `||input:temperature||` s'affiche en degrés **Celsius (C)**

~hint Dis-m'en plus!

Tout comme nos capteurs `||fwdSensors:moisture||` et `||fwdSensors:solar||`, nous pouvons utiliser le bloc `||basic:show string||` pour afficher l'**unité de température**.

1. Fais glisser un bloc `||basic:show string||` de la boîte à outils dans ton événement `||input:on button A+B pressed||`.

2. Dans le champ vide, tape « C » pour « Celsius »

3. Ajoute un bloc `||basic:pause||` à ton événement et règle l'intervalle à **1000 ms**

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # # # .
        . # # # .
        `)
    basic.clearScreen()
    basic.showNumber(Math.round(input.temperature()))
    basic.clearScreen()
    //@highlight
    basic.showString("C")
    //@highlight
    basic.pause(1000)
})
```

## Étape 12

Testons notre code! N'oublie pas d'appuyer sur le bouton `|Télécharger|` quand tu es prêt à tester ta nouvelle fonctionnalité de collecte de température.

## Sortie sur le terrain! @showdialog

Maintenant que tu comprends comment ton code **fonctionne**, et que nous avons ajouté une **nouvelle source de données** à notre appareil, il est temps de penser comme un écologiste et d'apporter ton appareil de suivi d'habitat sur le terrain!

Apporte un stylo et du papier pendant que tu collectes des données sur les niveaux `||fwdSensors:solar||`, `||fwdSensors:moisture||` et `||input:temperature||` dans tes habitats locaux.

## Étape 13

À l'aide de ton appareil de suivi d'habitat, crée un tableau avec au moins 5 points de données différents provenant d'un habitat.

Utilise **les trois capteurs** pour recueillir des relevés **toutes les 5 minutes** au même endroit.

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
2. Quels autres types de **capteurs** pourraient améliorer ton appareil?
3. Comment penses-tu que l'appareil de suivi d'habitat aide à collecter des données sur un **écosystème** au fil du temps?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

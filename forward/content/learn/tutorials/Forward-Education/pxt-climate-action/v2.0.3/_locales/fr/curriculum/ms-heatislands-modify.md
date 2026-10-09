# Îlots de chaleur urbains - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    datalogger.deleteLog()
})
datalogger.setColumnTitles("Temperature")
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
```

## Îlots de chaleur urbains - Tutoriel Modifier @showdialog

Dans cette activité, nous allons améliorer notre appareil de suivi de température afin qu'il enregistre les températures les plus hautes et les plus basses et qu'il ait une alerte de température.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-heatislands-render.webp" alt="Rendu complet de la ville modèle" style="display: block; width: 100%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code sur ton micro:bit.

## Étape 4

Regarde le code dans l'espace de travail.

1. Que fait le bloc `||Loops:every 60000 ms||`?
2. Que mesure `||Input:temperature||`?
3. Que fait `||DataLogger:log data||`?

~hint Dis-m'en plus!

1. La boucle `||Loops:every 60000 ms||` répète le code qu'elle contient toutes les 60000 millisecondes (1 minute).

2. `||Input:temperature||` obtient la température actuelle à partir du capteur du micro:bit.

3. `||DataLogger:log data||` enregistre les données de température sur le micro:bit.

Ensemble, ce code nous permettra de suivre la température de notre modèle dans le temps.
hint~

```block
    loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
})
```

## Étape 5

Améliorons notre appareil de suivi de température en ajoutant du code pour enregistrer les températures les plus hautes et les plus basses.

## Étape 6

Crée deux **variables** nommées `||Variables:maxTemp||` et `||Variables:minTemp||`.

Au début du code, règle `||Variables:maxTemp||` et `||Variables:minTemp||` à la température actuelle.

~hint Dis-m'en plus!

-   Une **variable** est comme un contenant qui peut garder une valeur. On lui donne un nom (comme maxTemp) pour pouvoir s'y référer plus tard dans notre code.

-   Dans ce cas, `||Variables:maxTemp||` gardera en mémoire la température la plus haute enregistrée, et `||Variables:minTemp||` gardera la plus basse.

hint~

```blocks
let minTemp = 0
let maxTemp = 0
maxTemp = input.temperature()
minTemp = input.temperature()
```

## Étape 7

À l'intérieur de la boucle `||Loops:every 60000 ms||`, ajoute une **instruction conditionnelle** pour vérifier si la `||Input:temperature||` actuelle est plus grande que `||Variables:maxTemp||`. Si c'est le cas, mets à jour `||Variables:maxTemp||` avec la `||Input:temperature||` actuelle.

~hint Dis-m'en plus!

-   Une **instruction conditionnelle** (comme un « if ») permet à notre code de prendre des décisions.
-   Elle vérifie si une condition est vraie (par exemple, « la température est-elle plus grande que maxTemp? ») et n'exécute alors certain code que si c'est le cas!
    hint~

```blocks
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
    // @highlight
    if (input.temperature() > maxTemp) {
        // @highlight
        maxTemp = input.temperature()
    }
})
```

## Étape 8

Ajoute une autre condition « if » pour vérifier si la `||Input:temperature||` actuelle est plus petite que `||Variables:minTemp||`. Si c'est le cas, mets à jour `||Variables:minTemp||`.

```blocks
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
    basic.showNumber(input.temperature())
    if (input.temperature() > maxTemp) {
        maxTemp = input.temperature()
    }
    // @highlight
    if (input.temperature() < minTemp) {
        // @highlight
        minTemp = input.temperature()
    }
})
```

## Étape 9

Maintenant, ajoutons du code pour afficher `||Variables:minTemp||` quand le bouton A est pressé et `||Variables:maxTemp||` quand le bouton B est pressé.

```block
input.onButtonPressed(Button.A, function () {
    basic.showNumber(minTemp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(maxTemp)
})
```

## Étape 10 : Défi optionnel

Utilise une autre instruction conditionnelle et une variable pour jouer un son quand la température dépasse un seuil (par ex. 40 °C).

~hint Dis-m'en plus!

1. Crée une **variable** appelée `||Variables:tempThreshold||` et règle-la à la température seuil.

2. Utilise une **instruction conditionnelle** à l'intérieur de la `||Loop:loop||` pour vérifier si la `||Input:temperature||` actuelle est plus grande que `||Variables:tempThreshold||`.

3. Si c'est le cas, utilise le bloc `||Music:play tone||` pour jouer un son.

hint~

```blocks
let minTemp = 0
let maxTemp = 0
datalogger.setColumnTitles("Temperature")
maxTemp = input.temperature()
minTemp = input.temperature()
// @highlight
let tempThreshold = 30

loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
    basic.showNumber(input.temperature())
    if (input.temperature() > maxTemp) {
        maxTemp = input.temperature()
    }
    if (input.temperature() < minTemp) {
        minTemp = input.temperature()
    }
    // @highlight
    if (input.temperature() > tempThreshold) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
```

## Étape 11

Clique sur le bouton `|Télécharger|` pour télécharger le code sur ton micro:bit.

## Étape 12

Prépare ton expérience!

Débranche le micro:bit. Place ta première ville modèle sous la source de lumière que tu as choisie (par ex. lampe chauffante, rebord de fenêtre, extérieur). Positionne-la pour qu'elle reçoive la lumière directement.

## Étape 13

Appuie sur le logo du micro:bit pour effacer les anciennes données. Ensuite, laisse le micro:bit recueillir des relevés de température pendant une période donnée (par ex. 2 heures).

## Étape 14

Après l'expérience, télécharge tes données en rebranchant le micro:bit à ton ordinateur et en suivant [ces instructions](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

## Étape 15

Répète les étapes 11 à 14 avec la deuxième ville modèle. Assure-toi que le modèle est à la même distance de la source de lumière qu'avant.

## Étape 16

Analyse tes données\* :

1. Compare les données de température du modèle humide et clair avec celles du modèle sec et sombre.
2. Quelles différences observes-tu dans les relevés de température?
3. Quelle était la température de départ de chaque modèle?
4. À quelle vitesse chaque modèle s'est-il réchauffé?
5. Quelle a été la température la plus élevée atteinte par chaque modèle?
6. Peux-tu expliquer ces différences?

\*[Ou jette un coup d'œil à nos données d'exemple](https://docs.google.com/spreadsheets/d/1BZM0QFmotUuUeRaMSvCKPePYzB9TCcv0LGryT8MtGmc/edit?usp=sharing)

## Réflexion

Avant de terminer :

-   Pourquoi est-il important de comparer les données de deux modèles différents dans cette expérience?
-   Que nous apprend cette expérience sur la façon dont la couleur et l'humidité influencent le réchauffement des environnements urbains?
-   Quels autres facteurs pourraient influencer la température que nous _n'avons pas_ inclus dans nos modèles?
-   Quels sont certains moyens que les villes pourraient utiliser cette information pour concevoir des espaces urbains plus frais et plus durables?

## Terminé

Clique sur le bouton `|Terminé|` pour finir ce tutoriel.

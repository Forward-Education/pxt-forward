# Îlots de chaleur urbains - Tutoriel Utiliser

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

## Îlots de chaleur urbains - Tutoriel Utiliser @showdialog

Aujourd'hui, nous allons comparer à quelle vitesse une ville modèle humide et claire, et une ville modèle sèche et sombre, se réchauffent.

Nous allons utiliser le capteur de température du micro:bit pour collecter des données et en apprendre davantage sur la façon dont la couleur et les niveaux d'humidité influencent l'effet d'îlot de chaleur urbain.

<p float="middle">
  <img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-heatislands-render.webp" alt="Rendu de la ville modèle de base" width="33%"/>
  <img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-heatislands-white-render.webp" alt="Rendu de la ville modèle blanche" width="33%"/> 
  <img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-heatislands-black-render.webp" alt="Rendu de la ville modèle noire" width="33%"/>
</p>

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

Regarde le code dans l'espace de travail. Selon toi, que va faire ce code?

~hint Dis-m'en plus!

-   Nous utilisons l'[extension Data Logger](https://microbit.org/get-started/user-guide/data-logging/) pour suivre et sauvegarder les données du [capteur de température](https://microbit.org/get-started/features/sensors/#temperature-sensor) du micro:bit.
-   Toutes les _60 000 millisecondes (60 secondes ou 1 minute)_, le micro:bit prendra un relevé de température et l'enregistrera dans le journal de données.

-   La boucle `||basic:forever||` fera en sorte que le micro:bit affiche continuellement la température actuelle sur son écran DEL.

-   Le bloc `||input:on logo pressed||` effacera toutes les données enregistrées précédemment quand le logo du micro:bit est pressé.

hint~

```block
loops.everyInterval(60000, function () {
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
})
basic.forever(function () {
    basic.showNumber(input.temperature())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    datalogger.deleteLog()
})
```

## Étape 5

Il est temps de préparer notre expérience!

Débranche ton micro:bit. Place ta première ville modèle sous la source de lumière que tu as choisie (par ex. lampe chauffante, rebord de fenêtre, extérieur). Positionne-la pour qu'elle reçoive la lumière directement.

## Étape 6

Appuie sur le logo du micro:bit pour effacer les anciennes données. Ensuite, laisse le micro:bit recueillir des relevés de température pendant une période donnée (par ex. 2 heures).

## Étape 7

Après l'expérience, télécharge tes données en rebranchant le micro:bit à ton ordinateur et en suivant [ces instructions](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

## Étape 8

Répète les étapes 1 à 7 avec la deuxième ville modèle. Assure-toi que le modèle est à la même distance de la source de lumière qu'avant.

## Étape 9

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

# Turbidimètres - Tutoriel Utiliser

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

## Turbidimètres - Tutoriel Utiliser @showdialog

Aujourd'hui, nous allons construire notre propre **capteur NTU** pour mesurer la turbidité d'échantillons d'eau!

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

Prends tes échantillons d'eau préparés.

Rappelle-toi, notre échantillon à faible turbidité devrait être de l'eau du robinet, tandis que le deuxième échantillon, à turbidité plus élevée, sera de l'eau du robinet mélangée avec une cuillère à soupe de bicarbonate de soude.

## Étape 7

Place l'échantillon à faible turbidité entre l'anneau de DEL et le capteur solaire comme montré dans l'indice de l'ampoule. Assure-toi que l'échantillon d'eau est stable et ne se renversera pas.

![Échantillon à faible turbidité](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-turbidity-water-render.webp)

## Étape 8

Appuie sur A. Quelle a été la lecture pour cet échantillon? Note-la.

## Étape 9

Place l'échantillon à haute turbidité entre l'anneau de DEL et le capteur solaire comme montré dans l'indice de l'ampoule. Assure-toi que l'échantillon d'eau est stable.

Comment prédis-tu que la lecture de cet échantillon différera de la première? Pourquoi?

![Échantillon à haute turbidité](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-turbidity-dirty-render.webp)

## Étape 10

Appuie sur A. Note la lecture. Ta prédiction était-elle exacte?

## Étape 11

Analyse tes données :

1. Quel échantillon avait une lecture de turbidité plus élevée?
2. Que t'indique cette différence de lectures sur la clarté des deux échantillons?
3. Que t'indique cette différence sur la quantité de particules dans chaque échantillon?

## Réflexion

Avant de terminer :

-   Pourquoi est-il important de tester plus d'un échantillon d'eau lors de la mesure de la turbidité?
-   Comment la quantité de lumière dispersée est-elle liée à la turbidité d'un échantillon d'eau?
-   Quelles sont certaines situations réelles où il est important de mesurer la turbidité?
-   Si tu trouvais une lecture de turbidité élevée dans un échantillon d'eau local, quelles pourraient être certaines sources des particules causant cette turbidité?

## Terminé

Clique sur le bouton `|Terminé|` pour terminer ce tutoriel.

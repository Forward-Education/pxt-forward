# Suivi des glaciers par satellite - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
fwdLights.ledRing1.setBrightness(10)
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.forever(function () {
    datalogger.log(datalogger.createCV("Light Level", fwdSensors.solar1.lightLevel()))
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un satellite de glacier! Nous allons faire cela en trois parties :

1. **Construis** ton satellite
2. **Ajoute du code** à ton satellite pour le faire prendre vie
3. **Utilise** ton satellite pour apprendre comment il fonctionne

Avant de commencer, assure-toi d'avoir tes fournitures : papier blanc, papier noir et papier jaune.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-thumbnail-render.webp" alt="Rendu complet du glacier" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs1.webp)

## Étape de construction 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs2.webp)

## Étape de construction 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs3.webp)

## Étape de construction 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs4.webp)

## Étape de construction 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs5.webp)

## Étape de construction 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs6.webp)

## Étape de construction 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs7.webp)

## Étape de construction 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs8.webp)

## Étape de construction 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs9.webp)

## Étape de construction 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs10.webp)

## Étape de construction 11 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs11.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour le faire prendre vie avec du code!

Le code sera les instructions qui disent à notre micro:bit quoi faire.

_Note : Pour l'instant, laisse la plaque de connexion **éteinte**._

## Étape de code 1 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de code 2

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code dans ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêts à **utiliser** notre satellite!

Conseils

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

## Étape d'utilisation 1

Le code ci-dessous permettra à notre satellite de mesurer la quantité de lumière réfléchie par différentes surfaces!

Regarde ton projet physique et pense à cette question : Quelle partie de ce projet représente le soleil?

~hint Dis-m'en plus!

-   Ici, l'anneau DEL représente les rayons du soleil.
    hint~

```block
fwdLights.ledRing1.setBrightness(10)
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
```

## Étape d'utilisation 2

Maintenant regarde de nouveau : Quelle partie penses-tu représente la surface de la Terre? Quelle partie est censée être le satellite lui-même?

~hint Dis-m'en plus!

-   Dans ce projet, nous utilisons la plaque de base pour représenter la surface de la Terre.
-   Le capteur solaire agit comme un satellite, recueillant des données sur la réflectivité de la surface à l'aide du simulateur de données en direct.
    hint~

```block
datalogger.log(datalogger.createCV("Light Level", fwdSensors.solar1.lightLevel()))
```

## Étape d'utilisation 3

Commençons à regarder nos données! En bas à gauche de la page, clique sur `|Show Data Simulator|`. C'est ici que tu verras les données en direct recueillies par ton projet.

_Note : Si tu ne vois pas le bouton, tu devras peut-être diminuer le zoom. Appuie sur **Ctrl** et **-** (Windows, Linux ou Chrome OS) ou **Commande** et **-** (Mac)._

## Étape d'utilisation 4

Allume ta plaque de connexion pour commencer à recueillir des données de ton projet. Clique sur « Console » pour voir les données en direct du système de surveillance des glaciers.

~hint Dis-m'en plus!

-   Ce graphique nous aide à comprendre combien de lumière est réfléchie par la surface de la Terre au fil du temps.
-   Il nous aidera à visualiser comment différents types de surfaces pourraient affecter l'albédo de la Terre. Souviens-toi, l'albédo fait référence à la réflectivité d'une surface donnée.
-   En regardant les valeurs de l'axe Y, tu peux voir la quantité de lumière que le capteur solaire recueille sous forme décimale.
-   Quand tu multiplies cette décimale par 100, tu peux la convertir en _pourcentage_.
    hint~

## Étape d'utilisation 5

Faisons une expérience! D'abord, faisons quelques prédictions. Comment penses-tu que le niveau de lumière changera quand tu places le papier suivant sur la plaque de base :

-   papier blanc (pour représenter la neige et la glace)
-   papier noir (pour représenter les océans foncés ou la terre)
-   papier jaune (pour représenter la neige partiellement fondue)

## Étape d'utilisation 6

Commence par placer une feuille de papier blanc sur la plaque de base. Que remarques-tu à propos des données ci-dessous? Tes prédictions étaient-elles correctes?

~hint Dis-m'en plus!

-   Remarque comment les valeurs du niveau de lumière changent.
-   La couleur blanche réfléchit toute la lumière visible, alors tu devrais voir une augmentation du niveau de lumière recueilli par le capteur solaire.
    hint~

## Étape d'utilisation 7

Place une feuille de papier noir sur la plaque de base. Que remarques-tu à propos des données ci-dessous? Tes prédictions étaient-elles correctes?

~hint Dis-m'en plus!

-   Remarque comment les valeurs du niveau de lumière changent.
-   Le papier noir absorbe toute la lumière visible, alors tu devrais voir une diminution du niveau de lumière recueilli par le capteur solaire.
    hint~

## Étape d'utilisation 8

Essayons une couleur différente. Place une feuille de papier jaune sur la plaque de base. Que remarques-tu à propos des données ci-dessous?

~hint Dis-m'en plus!

-   Observe comment les chiffres du niveau de lumière changent.
-   Le papier jaune réfléchit _une partie_ de la lumière.
-   Tu devrais voir le niveau de lumière augmenter, mais pas autant qu'avec le papier blanc.
    hint~

## Étape d'utilisation 9

Essayons d'autres couleurs et matériaux (par exemple, du papier d'aluminium)! Place chaque objet que tu veux tester sur la plaque de base et observe ce qui se passe. Peux-tu expliquer les changements?

## Félicitations! @showdialog

Tu as terminé l'activité! Est-ce que quelque chose t'a surpris dans ce projet?

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui. Quelle est une chose que tu aimerais apprendre davantage?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

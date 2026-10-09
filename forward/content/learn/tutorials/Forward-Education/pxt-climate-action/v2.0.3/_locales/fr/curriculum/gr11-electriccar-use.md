# Véhicules électriques autonomes du futur - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Construisons un véhicule électrique! Nous allons le faire en 3 parties :

1. **Construire** notre véhicule électrique
2. **Ajouter du code** pour le faire bouger
3. **Utiliser** notre véhicule électrique dans différents contextes pour comprendre son fonctionnement

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-render.png" alt="Rendu complet du véhicule électrique" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs1edit.png)

## Étape de construction 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs2.png)

## Étape de construction 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs3.png)

## Étape de construction 3B @showdialog

![sbs3b](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs3b.png)

## Étape de construction 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs4.png)

## Étape de construction 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs5.png)

## Étape de construction 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs6.png)

## Étape de construction 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs7.png)

## Étape de construction 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs8.png)

## Étape de construction 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs9.png)

## Étape de construction 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs10.png)

## Étape de construction 11 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs11.png)

## Étape de construction 12 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs12.png)

## Étape de construction 13 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs13.png)

## Étape de construction 14 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs14.png)

## Étape de construction 15 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs15.png)

## Étape de construction 16 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs16.png)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de programmation 1 @showdialog

IMPORTANT! Assure-toi que la carte d'extension du kit d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 50%; margin:auto;">

## Étape de programmation 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet du feu de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de programmation 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton projet.

```template
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            basic.pause(1000)
            fwdMotors.drive(-50, 50, 1000)
            // TODO: calibrate duration -- was turn(10) degrees in place
            fwdMotors.drive(50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêts à **utiliser** notre véhicule électrique.

**Astuces pour le tutoriel**

En parcourant les prochaines étapes :

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt pour plus d'informations, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

## Utilisation, étape 1

Regarde ton projet physique.

Quelle partie de ce projet fonctionne comme le module de commande électronique (ECU) d'un véhicule, agissant essentiellement comme le « cerveau » du véhicule?

~hint Dis-m'en plus!

-   Le micro:bit fonctionne comme le « cerveau » de notre projet, un peu comme le module de commande électronique (ECU) fonctionne dans les vrais véhicules.
    hint~

## Utilisation, étape 2

Quelle partie de ton projet agit comme la batterie des véhicules électriques? Qu'en est-il des capteurs ultrasoniques du véhicule électrique?

~hint Dis-m'en plus!

-   La carte d'extension a une batterie intégrée qui fonctionne comme la batterie d'un véhicule électrique. Elle fournit toute l'énergie dont ton projet a besoin pour fonctionner, tout comme la batterie d'un véhicule alimente tout, des phares à la radio.
-   Le capteur sonar imite les capteurs ultrasoniques que l'on trouve dans les véhicules électriques. Ces capteurs détectent les obstacles autour du véhicule, ce qui aide à éviter les collisions.
    hint~

## Utilisation, étape 3

Regarde le code dans l'espace de travail. Pourquoi penses-tu que nous utilisons la variable `||Variables:IsDrivingEnabled||`? Que pourrait-il se passer si nous ne l'avions pas?

~hint Dis-m'en plus!

-   La variable `||variables:IsDrivingEnabled||` agit comme un interrupteur qui contrôle si ton véhicule peut bouger.
-   Sans cette variable, nous n'aurions pas de moyen simple de démarrer ou d'arrêter le véhicule.
-   Si la carte d'extension était allumée sans cette variable, elle commencerait à bouger immédiatement et continuerait jusqu'à ce qu'elle soit éteinte.
    hint~

## Utilisation, étape 4

Que penses-tu qu'il se passera lorsque le bouton « A » est pressé? Qu'en est-il lorsque le bouton « B » est pressé?

~hint Dis-m'en plus!

-   Lorsque tu appuies sur le bouton « A », cela active la fonction de conduite du véhicule, un peu comme appuyer sur la pédale d'accélérateur d'une voiture.
-   Appuyer sur le bouton « B » arrête la voiture, un peu comme utiliser la pédale de frein ou couper le contact.
-   Cette configuration te permet de contrôler quand le véhicule bouge et quand il reste immobile.
-   Nous avons créé la variable `||variables:IsDrivingEnabled||` exactement pour cette raison — pour te donner plus de contrôle sur le véhicule.
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
```

## Utilisation, étape 5

Regarde le code dans la boucle `||basic:forever||`. Que penses-tu que cela va accomplir?

Une fois que tu as fait une hypothèse, débranche ton projet de l'ordinateur, place-le sur le sol, puis teste-le! Que se passe-t-il? Rappelle-toi, tu dois appuyer sur le bouton « A » pour commencer à rouler.

```blocks
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            basic.pause(1000)
            fwdMotors.drive(-50, 50, 1000)
            // TODO: calibrate duration -- was turn(10) degrees in place
            fwdMotors.drive(50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Utilisation, étape 6

Dans ce projet, le capteur sonar fonctionne comme les capteurs ultrasoniques utilisés dans des applications réelles.

Regarde la deuxième conditionnelle dans ton code. Que penses-tu que `||fwdSensors:sonar1 distance is under 0.5 m||` signifie pour notre projet?

~hint Dis-m'en plus!

-   Ce bloc de code vérifie s'il y a des objets sur le chemin.
-   Il regarde spécifiquement si quelque chose se trouve à moins de 0,5 mètre du capteur.
-   S'il détecte quelque chose d'aussi proche, il déclenche les actions définies dans la partie « alors » de la conditionnelle pour réagir à l'obstacle.
    hint~

```block
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            basic.pause(1000)
            fwdMotors.drive(-50, 50, 1000)
            // TODO: calibrate duration -- was turn(10) degrees in place
            fwdMotors.drive(50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
```

## Utilisation, étape 7

En regardant le code, que se passe-t-il réellement lorsqu'un objet se trouve sur le chemin de ton véhicule?

~hint Dis-m'en plus!
Lorsque quelque chose bloque le chemin de ton véhicule, cela déclenche une séquence d'actions :

1. Pause : D'abord, le véhicule fera une pause de 1000 millisecondes (1 seconde).
2. Marche arrière : Ensuite, il roule en marche arrière.
3. Virage : Enfin, le véhicule tourne de 10 degrés pour l'aider à s'éloigner de l'obstacle.
   hint~

```block
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            // @highlight
            basic.pause(1000)
            // @highlight
            fwdMotors.drive(-50, 50, 1000)
            // @highlight
            // TODO: calibrate duration -- was turn(10) degrees in place
            fwdMotors.drive(50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
```

## Utilisation, étape 8

Mettons nos véhicules électriques à l'épreuve.

Rassemble des objets pour servir d'obstacles à ton véhicule électrique. Place-les sur son chemin pour vérifier à quel point le capteur sonar dans le code fonctionne bien. Fais ce test plusieurs fois, puis reviens ici pour la prochaine étape!

## Utilisation, étape 9

Bon retour!

Quel type d'obstacles as-tu utilisé? Comment ton véhicule électrique a-t-il réussi à éviter ces obstacles? Qu'as-tu remarqué sur sa performance? Peux-tu penser à des façons d'améliorer le fonctionnement du véhicule électrique?

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris dans ce projet?

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose que tu voudrais approfondir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

# Détection des feux de forêt avec des véhicules autonomes - Utilisation

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Construisons un véhicule de détection des feux de forêt! Nous allons faire ça en 3 parties :

1. **Construire** notre véhicule de détection des feux de forêt
2. **Ajouter du code** pour le faire bouger
3. **Utiliser** notre véhicule de détection des feux de forêt pour apprendre comment il fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Project%20Render%20Forest%20Fires%20three%20quarter%20build.png" alt="Rendu complet du véhicule de détection des feux de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs1.png)

## Étape de construction 2 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs2.png)

## Étape de construction 3 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs3.png)

## Étape de construction 4 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs4.png)

## Étape de construction 5 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs5.png)

## Étape de construction 6 @showdialog

![wildfiresb](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs6.png)

## Étape de construction 7 @showdialog

![wildfiresb](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs7.png)

## Étape de construction 8 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs8.png)

## Étape de construction 9 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs9.png)

## Étape de construction 10 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs10.png)

## Étape de construction 11 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs11.png)

## Étape de construction 12 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs12.png)

## Étape de construction 13 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs13.png)

## Étape de construction 14 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs14.png)

## Étape de construction 15 & 16 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs15.png)

## Étape de construction 17 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs17.png)

## Étape de construction 18 @showdialog

![wildfiresb](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs18.png)

## Étape de construction 19 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs19.png)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour le faire prendre vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

```template
input.onButtonPressed(Button.A, function () {
    isDrivingEnabled = true
})

input.onButtonPressed(Button.B, function () {
    isDrivingEnabled = false
})

let isDrivingEnabled = false
isDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.rightServo,
fwdBase.leftServo
)

basic.forever(function () {
    if (isDrivingEnabled) {
        fwdMotors.drive(50, -50, 1000)
        if (input.lightLevel() > 200) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Étape de codage 1 @showdialog

IMPORTANT! Assure-toi que ta carte d'extension de la trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Allumer la carte d'extension" style="display: block; width: 40%; margin:auto;">

## Étape de codage 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet du véhicule de détection des feux de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de codage 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes prêts à **utiliser** notre véhicule de détection des feux de forêt!

Astuces

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt à en savoir plus, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

## Étape d'utilisation 1

Pense à l'objectif d'un véhicule de détection des feux de forêt. Quelles sont les 5 principales tâches qu'il devrait pouvoir accomplir?

~hint Dis-m'en plus!
Le véhicule devrait pouvoir :

-   Démarrer (rouler!)
-   S'arrêter (freiner!)
-   Se déplacer à travers une forêt pour patrouiller une zone
-   Envoyer une alerte s'il détecte un feu
-   Éviter le feu!
    hint~

## Étape d'utilisation 2

Passons directement à l'action pour voir comment notre véhicule démarre et s'arrête. Débranche ton projet de l'ordinateur, place-le sur le sol et appuie sur le bouton A du micro:bit. A, c'est comme notre pédale d'accélérateur!

Une fois que tu as laissé la voiture rouler quelques secondes, appuie sur le bouton B pour l'arrêter. Le bouton B, c'est comme nos freins.

## Étape d'utilisation 3

Regardons de plus près les instructions (c'est-à-dire le code!) que nous avons données à notre véhicule de détection des feux de forêt.

Peux-tu repérer les blocs de code qui font en sorte que le bouton A agit comme notre pédale d'accélérateur et que le bouton B agit comme nos freins?

~hint Dis-m'en plus!

-   D'abord, on assigne notre **variable** `||variables:isDrivingEnabled||` à `||logic:true||` si A est appuyé, ou à `||logic:false||` si B est appuyé.
-   Ensuite, il y a une **instruction conditionnelle** qui aide le micro:bit à décider s'il doit avancer ou non. Si `||variables:isDrivingEnabled||` est `||logic:true||`, la voiture avance. Sinon, la voiture reste immobile ou s'arrête.
-   Donc, appuyer sur A démarre la voiture et appuyer sur B l'arrête!
    hint~

```block
let isDrivingEnabled = false
    // @highlight
    if (isDrivingEnabled) {
        fwdMotors.drive(50, -50, 1000)
    } else {
        fwdMotors.drive(0, 0, 0)
    }

input.onButtonPressed(Button.A, function () {
    isDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    isDrivingEnabled = false
})
```

## Étape d'utilisation 4

Nous avons aussi besoin que notre véhicule de détection des feux de forêt envoie une alerte s'il détecte un feu. Comme les feux sont lumineux, nous allons utiliser le capteur de lumière du micro:bit pour recueillir des informations sur les niveaux de lumière et nous aider à déterminer s'il y a un feu à proximité.

## Étape d'utilisation 5

Nous avons déjà programmé le système de détection de feu.

Regarde le code ci-dessous. Selon toi, quelle partie est responsable de surveiller les niveaux de lumière et d'envoyer des alertes de feu? Fais une hypothèse!

~hint Dis-m'en plus!

-   Une alerte devrait être envoyée chaque fois que le véhicule détecte des lumières vives. Ça pourrait indiquer un feu!
-   Il y a une autre **instruction conditionnelle** qui surveille le niveau de lumière.
-   Si le `||input:niveau de lumière||` est supérieur à « 200 », le véhicule enverra une alerte.
    hint~

```block
        if (input.lightLevel() > 200) {
        	
        }
```

## Étape d'utilisation 6

Testons comment le véhicule de détection des feux de forêt réagit à des changements _intentionnels_ des niveaux de lumière.

Démarre ta voiture, puis utilise une lampe de poche pour simuler différentes conditions de luminosité. Observe le comportement du véhicule.

~hint Dis-m'en plus!

-   Pointe une lampe de poche directement sur le capteur de lumière à l'avant du micro:bit. Ça simule la lumière d'un feu.
-   Quand la lampe de poche éclaire le capteur, le véhicule devrait s'arrêter et jouer une note.
-   Cette séquence est la façon dont le véhicule nous alerte lorsqu'il a détecté un feu potentiel!
    hint~

```block
        if (input.lightLevel() > 200) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
```

## Étape d'utilisation 7

Bonus : Demande à quelques personnes de s'asseoir en demi-cercle avec leurs lampes de poche. Ça représentera un mur de feu.

Place la voiture à une certaine distance devant toi. Appuie sur A pour qu'elle commence à rouler vers le mur de feu. Que se passe-t-il?

~hint Dis-m'en plus!

-   Tu devrais remarquer que la voiture s'approche du mur de feu. Quand elle s'en approche assez, elle s'arrête, envoie une alerte, puis tourne pour essayer d'éviter le feu!
-   Elle répétera ce comportement le long du mur de feu jusqu'à ce qu'elle trouve une ouverture (pas de lumière!).
-   À ce moment-là, elle tentera de traverser l'ouverture pour échapper au feu.
    hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris dans ce projet?

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose sur laquelle tu aimerais en apprendre davantage?

## Terminé! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

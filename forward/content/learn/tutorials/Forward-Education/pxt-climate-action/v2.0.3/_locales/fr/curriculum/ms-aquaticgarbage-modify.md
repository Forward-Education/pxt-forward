# Forward Education Collecteur de déchets aquatiques - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
input.onButtonPressed(Button.AB, function () {
    fwdBase.leftServo.setSpeed(25)
    fwdBase.rightServo.setSpeed(-25)
    basic.showIcon(IconNames.Yes)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdBase.leftServo.setSpeed(0)
    fwdBase.rightServo.setSpeed(0)
    basic.showIcon(IconNames.No)
})
basic.clearScreen()
fwdBase.leftServo.setSpeed(0)
fwdBase.rightServo.setSpeed(0)
```

## Activité 1 : Construis ton projet @showdialog

Construisons un collecteur de déchets aquatiques pour aider au nettoyage des cours d'eau! Nous allons faire cela en quatre parties :

1. **Construire** notre collecteur de déchets aquatiques
2. **Ajouter du code** pour donner vie à notre projet
3. **Modifier** notre projet pour découvrir d'autres capteurs
4. Appliquer ce que nous avons appris avec un petit **défi**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-render.webp" alt="Collecteur de déchets aquatiques complet" style="display: block; width: 60%; margin:auto;">

## Composants électroniques requis @showdialog

![Composants électroniques requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs0A.webp)

## Blocs de construction requis @showdialog

![Blocs de construction requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs0B.webp)

## Étape de construction 1 @showdialog

![Étape de construction 1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs01.webp)

## Étape de construction 2 @showdialog

![Étape de construction 2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs02.webp)

## Étape de construction 3 @showdialog

![Étape de construction 3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs03.webp)

## Étape de construction 4 @showdialog

![Étape de construction 4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs04.webp)

## Étape de construction 5 @showdialog

![Étape de construction 5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs05.webp)

## Étape de construction 6 @showdialog

![Étape de construction 6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs06.webp)

## Étape de construction 7 @showdialog

![Étape de construction 7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs07.webp)

## Étape de construction 8 @showdialog

![Étape de construction 8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs08.webp)

## Étape de construction 9 @showdialog

![Étape de construction 9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs09.webp)

## Étape de construction 10 @showdialog

![Étape de construction 10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs10.webp)

## Étape de construction 11 @showdialog

![Étape de construction 11](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs11.webp)

## Étape de construction 12 @showdialog

![Étape de construction 12](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs12.webp)

## Étape de construction 13 @showdialog

![Étape de construction 13](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs13.webp)

## Étape de construction 14 @showdialog

![Étape de construction 14](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs14.webp)

## Étape de construction 15 @showdialog

![Étape de construction 15](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs15.webp)

## Étape de construction 16 @showdialog

![Étape de construction 16](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs16.webp)

## Étape de construction 17 @showdialog

![Étape de construction 17](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs17.webp)

## Étape de construction 18 @showdialog

![Étape de construction 18](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs18.webp)

## Étape de construction 19 @showdialog

![Étape de construction 19](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs19.webp)

## Étape de construction 20 @showdialog

![Étape de construction 20](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs20.webp)

## Étape de construction 21 @showdialog

![Étape de construction 21](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs21.webp)

## Étape de construction 22 @showdialog

![Étape de construction 22](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-aquaticgarbage-sbs22.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous avons un modèle de collecteur de déchets aquatiques avec des moteurs rotatifs. Explorons comment optimiser notre projet en **modifiant** notre code!

Pendant que tu avances dans les prochaines étapes :

-   Utilise les instructions en haut de l'écran pour **modifier** ton code.
-   Quand tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!

## Étape de modification 1

Pense aux caractéristiques des collecteurs de déchets aquatiques et à ce qu'ils devraient pouvoir faire.

~hint Dis-m'en plus!
Pour aider à nettoyer les cours d'eau, notre collecteur de déchets a besoin de pouvoir :

1. Avoir une source d'alimentation et un moyen de contrôler le collecteur
2. Déplacer les déchets vers le collecteur
3. Collecter les déchets dans un filet
4. Permettre aux petits débris comme les poissons et les plantes de s'échapper du filet
   hint~

## Étape de modification 2

Testons notre collecteur de déchets aquatiques pour voir comment il fonctionne!

Si tes moteurs se mettent en marche tout de suite, appuie sur le logo pour les arrêter. Cela fonctionne à tout moment durant ton projet.

## Étape de modification 3

Avec ton modèle sur une table, appuie sur **A+B** en même temps!

Que se passe-t-il?

~hint Dis-m'en plus!

-   Le bouton **A+B** est un événement qui déclenche un ensemble unique d'instructions.

-   Les moteurs tournent dans des directions opposées pour aider à déplacer les débris vers le **filet** intégré du modèle

-   Le servomoteur gauche tourne dans une direction à 25 % de puissance.

-   Le servomoteur droit tourne à 25 % de puissance dans la direction opposée.

-   Un `||basic:checkmark||` s'affiche sur l'écran DEL du micro:bit.

hint~

## Étape de modification 4

Observe la différence dans les instructions pour les `||fwdMotors:servomoteurs||` **gauche** et **droit**

Selon toi, pourquoi y a-t-il des nombres positifs et négatifs?

~hint Dis-m'en plus!

-   Les servomoteurs continus fonctionnent de -100 % à 100 %!
-   Les **nombres négatifs** font tourner dans une direction, tandis que les **nombres positifs** font tourner dans la direction opposée.
-   Quand un moteur est réglé à 0, il ne tourne dans aucune direction.
    hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    // @highlight
    fwdBase.leftServo.setSpeed(25)
    // @highlight
    fwdBase.rightServo.setSpeed(-25)
    basic.showIcon(IconNames.Yes)
})
```

## Étape de modification 5

Que se passe-t-il quand on change la vitesse des moteurs?

Choisis un autre nombre entre 0 et 100, et change la valeur du `||fwdMotors:moteur||`.

N'oublie pas de `|télécharger|` tous tes changements pour les tester!

~hint Dis-m'en plus!

-   Si le nombre est **plus grand que 25**, le moteur tournera plus vite qu'avant
-   Si le nombre est **plus petit que 25**, le moteur tournera plus lentement qu'avant
-   S'il y a **deux nombres différents** pour les moteurs gauche et droit, les moteurs tourneront à deux vitesses différentes
    hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    // @highlight
    fwdBase.leftServo.setSpeed(50)
    // @highlight
    fwdBase.rightServo.setSpeed(-20)
    basic.showIcon(IconNames.Yes)
})
```

## Activité 4 : Défi

Maintenant que nous avons **modifié** notre code pour comprendre le fonctionnement de notre collecteur de déchets aquatiques, nous allons relever un petit défi!

## Étape de défi 1

Plusieurs collecteurs de déchets aquatiques fonctionnent à l'énergie solaire, qui se recharge grâce à la puissance du soleil! Imaginons que notre modèle solaire ajoute une fonctionnalité pour **détecter les niveaux de lumière**.

Quel type de capteur devrions-nous ajouter à notre projet?

~hint Dis-m'en plus!

Le `||fwdSensors:capteur solaire||` peut détecter la lumière dans une pièce!

hint~

## Étape de défi 2

Ajoute ton capteur solaire à ton modèle, et fixe-le quelque part sur ton projet qui reçoit beaucoup de lumière!

~hint Dis-m'en plus!

-   Nous te recommandons de placer le capteur solaire devant ta plaque de connexion, sur le dessus de ton modèle.
-   N'oublie pas de brancher ton capteur solaire dans le **port de capteur**
    hint~

## Étape de défi 3

Pensons à la fonctionnalité que nous voulons ajouter à notre modèle :

1. Quand il fait **nuageux**, nos moteurs ne tourneront pas.
2. Quand il fait **ensoleillé**, nos moteurs tourneront!

Quel type de bloc pourrais-tu ajouter à ton code pour satisfaire ces **conditions**?

~hint Dis-m'en plus!

Une `||logic:instruction conditionnelle||`! Cherche le bloc « if/else » dans le tiroir logique et fais-le glisser sous ton code dans l'événement A+B.

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    fwdBase.leftServo.setSpeed(25)
    fwdBase.rightServo.setSpeed(-25)
    basic.showIcon(IconNames.Yes)
    // @highlight
    if (true) {
    	
    }
    else{
    	
    }
})
```

## Étape de défi 4

Quel bloc as-tu besoin pour créer la condition suivante?

-   Si l'ensoleillement est **supérieur à 50 %**, allume les deux moteurs

~hint Dis-m'en plus!

Tu auras besoin d'un bloc `||fwdSensors:solar||` pour détecter si l'ensoleillement est **supérieur à 50 %**!

hint~

```block
fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Over)
```

## Étape de défi 5

Si l'ensoleillement est **supérieur à 50 %**, nous voulons que notre collecteur de déchets aquatiques s'allume.

Quels blocs devrions-nous placer dans notre condition `||logic:if||` pour faire fonctionner notre code?

~hint Dis-m'en plus!

Nous pouvons faire glisser les blocs des moteurs depuis l'événement **A+B**!
hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    if (fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        // @highlight
        fwdBase.leftServo.setSpeed(25)
        // @highlight
        fwdBase.rightServo.setSpeed(-25)
        // @highlight
        basic.showIcon(IconNames.Yes)
    }
    else {
    	
    }
})
```

## Étape de défi 6

Si l'ensoleillement n'est **pas supérieur à 50 %**, nous voulons que notre collecteur de déchets aquatiques s'éteigne.

Quels blocs devrions-nous placer dans notre condition `||logic:else||` pour faire fonctionner notre code?

~hint Dis-m'en plus!

Nous pouvons copier les blocs de l'événement **on logo pressed**!
hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    if (fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        fwdBase.leftServo.setSpeed(25)
        fwdBase.rightServo.setSpeed(-25)
        basic.showIcon(IconNames.Yes)
    } else {
        // @highlight
        fwdBase.leftServo.setSpeed(0)
        // @highlight
        fwdBase.rightServo.setSpeed(0)
        // @highlight
        basic.showIcon(IconNames.No)
    }
})
```

## Étape de défi 7

Nous sommes prêts à **automatiser** entièrement notre collecteur de déchets aquatiques!

Éliminons le besoin d'appuyer sur le bouton **A+B** en utilisant une boucle `||basic:forever||`.

~hint Dis-m'en plus!

Fais glisser une boucle `||basic:forever||` dans l'espace de travail, et déplace tous les blocs de code de l'événement A+B dans ta nouvelle boucle.

N'oublie pas de `|Télécharger|` le code de ce défi pour tester ton travail.

hint~

```blocks
// @highlight
basic.forever(function () {
    if (fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
        fwdBase.leftServo.setSpeed(25)
        fwdBase.rightServo.setSpeed(-25)
        basic.showIcon(IconNames.Yes)
    } else {
        fwdBase.leftServo.setSpeed(0)
        fwdBase.rightServo.setSpeed(0)
        basic.showIcon(IconNames.No)
    }
})
```

## Félicitations! @showdialog

Tu as terminé l'activité!

Quelque chose t'a-t-il surpris à propos du projet?

## Réflexion @showdialog

1. Comment la valeur du capteur `||fwdSensors:solar||` interagit-elle avec la comparaison `||logic:if/else||` pour contrôler les moteurs?
2. Comment pourrais-tu ajouter un autre réglage pour faire bouger les moteurs plus vite lors d'une journée **très ensoleillée**?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

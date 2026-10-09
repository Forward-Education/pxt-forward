# Forward Education Collecteur de déchets aquatiques - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
input.onButtonPressed(Button.A, function () {
    fwdBase.leftServo.setSpeed(25)
    fwdBase.rightServo.setSpeed(0)
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    fwdBase.leftServo.setSpeed(25)
    fwdBase.rightServo.setSpeed(-25)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    fwdBase.leftServo.setSpeed(0)
    fwdBase.rightServo.setSpeed(-25)
    basic.showArrow(ArrowNames.East)
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

Construisons un collecteur de déchets aquatiques pour aider au nettoyage des cours d'eau! Nous allons faire cela en trois parties :

1. **Construire** notre collecteur de déchets aquatiques
2. **Ajouter du code** pour donner vie à notre projet
3. **Utiliser** ton projet pour comprendre son fonctionnement

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

## Activité 3 : Utilise ton projet @showdialog

Maintenant que nous avons construit notre collecteur de déchets aquatiques pour aider au nettoyage des cours d'eau, nous allons commencer par **utiliser** le code d'exemple pour voir comment il fonctionne.

Pendant que tu avances dans les prochaines étapes :

-   **Utilise** les instructions en haut de l'écran.
-   Quand tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule!**

## Étape d'utilisation 1

Pense aux caractéristiques des collecteurs de déchets aquatiques et à ce qu'ils devraient pouvoir faire.

~hint Dis-m'en plus!
Pour aider à nettoyer les cours d'eau, notre collecteur de déchets a besoin de pouvoir :

1. Avoir une source d'alimentation et un moyen de contrôler le collecteur
2. Déplacer les déchets vers le collecteur
3. Collecter les déchets dans un filet
4. Permettre aux petits débris comme les poissons et les plantes de s'échapper du filet
   hint~

## Étape d'utilisation 2

Regarde le projet physique que tu viens de construire.

Quels composants robotiques remarques-tu? Comment penses-tu qu'ils travailleront ensemble pour faire fonctionner notre modèle comme prévu?

~hint Dis-m'en plus!
Le collecteur de déchets possède :

-   Deux `||fwdMotors:servomoteurs continus||` qui tournent dans des directions opposées pour déplacer les débris dans l'eau.

-   L'`||basic:écran DEL||` du micro:bit pour montrer quel moteur du collecteur de déchets tourne.

-   Ces pièces sont connectées à la **plaque de connexion** par des **câbles**.

-   La plaque de connexion est connectée au **micro:bit**, qui contient tout le code qui indique à nos capteurs quoi faire et quand le faire!

hint~

## Étape d'utilisation 3

Testons notre collecteur de déchets aquatiques pour voir comment il fonctionne!

Si tes moteurs se mettent en marche tout de suite, appuie sur le logo pour les arrêter. Cela fonctionne à tout moment durant ton projet.

## Étape d'utilisation 4

Avec ton modèle sur une table, appuie sur le bouton **A** du micro:bit.

Que se passe-t-il?

~hint Dis-m'en plus!

-   Le bouton **A** est une **entrée** qui déclenche un ensemble d'instructions

-   Le servomoteur gauche tourne à 25 % de puissance.

-   Le servomoteur droit ne tourne pas.

-   Une `||basic:flèche gauche||` s'affiche sur l'écran DEL du micro:bit.

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    fwdBase.leftServo.setSpeed(25)
    fwdBase.rightServo.setSpeed(0)
    basic.showArrow(ArrowNames.West)
})
```

## Étape d'utilisation 5

Maintenant, appuyons sur le bouton **B**.

Dans quelle direction tes moteurs tournent-ils maintenant? Est-ce la même direction, ou une direction différente?

~hint Dis-m'en plus!

-   Le bouton **B** est une **entrée** qui déclenche un ensemble d'instructions différent

-   Le servomoteur gauche ne tourne pas.

-   Le servomoteur droit tourne à 25 % de puissance dans la direction opposée.

-   Une `||basic:flèche droite||` s'affiche sur l'écran DEL du micro:bit.

hint~

```blocks
input.onButtonPressed(Button.B, function () {
    fwdBase.leftServo.setSpeed(0)
    fwdBase.rightServo.setSpeed(-25)
    basic.showArrow(ArrowNames.East)
})
```

## Étape d'utilisation 6

Ensuite, appuyons sur **A+B** en même temps! Que se passe-t-il maintenant?

~hint Dis-m'en plus!

-   Le bouton **A+B** est une **entrée** qui déclenche un ensemble d'instructions différent de A ou de B

-   Les moteurs tournent dans des directions opposées pour aider à déplacer les débris vers le **filet** intégré du modèle

-   Le servomoteur gauche tourne dans une direction à 25 % de puissance

-   Le servomoteur droit tourne à 25 % de puissance dans la direction opposée.

-   Un `||basic:checkmark||` s'affiche sur l'écran DEL du micro:bit.

hint~

## Étape d'utilisation 7

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

## Félicitations! @showdialog

Tu as terminé l'activité!

Quelque chose t'a-t-il surpris à propos du projet?

## Réflexion @showdialog

1. Comment penses-tu que la rotation des moteurs dans deux directions différentes aide le collecteur de déchets aquatiques à ramasser les débris?
2. Quelles autres caractéristiques pourrais-tu adapter pour rendre ton collecteur de déchets aquatiques plus efficace?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

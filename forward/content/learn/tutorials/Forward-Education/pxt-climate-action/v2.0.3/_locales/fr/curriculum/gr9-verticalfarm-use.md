# Optimiser la croissance des plantes avec des lampes de culture DEL - Tutoriel d'utilisation

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Construisons un prototype de ferme verticale! Nous allons faire ça en trois parties :

1. **Construire** notre prototype
2. **Ajouter du code** pour lui donner vie
3. **Utiliser** notre ferme verticale pour apprendre comment elle fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-thumbnail-render.webp" alt="Rendu complet de la ferme verticale" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs01.webp)

## Étape de construction 2 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs02.webp)

## Étape de construction 3 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs03.webp)

## Étape de construction 4 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs04.webp)

## Étape de construction 5 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs05.webp)

## Étape de construction 6 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs06.webp)

## Étape de construction 7 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs07.webp)

## Étape de construction 8 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs08.webp)

## Étape de construction 9 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs09.webp)

## Étape de construction 10 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs10.webp)

## Étape de construction 11 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs11.webp)

## Étape de construction 12 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs12.webp)

## Étapes de construction 13 + 14 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs13.webp)

## Étape de construction 15 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs15.webp)

## Étape de construction 16 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs16.webp)

## Étape de construction 17 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs17.webp)

## Étape de construction 18 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs18.webp)

## Étape de construction 19 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs19.webp)

## Étape de construction 20 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs20.webp)

## Étape de construction 21 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-verticalfarm-sbs21.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

```template
input.onButtonPressed(Button.A, function () {
    fwdBase.leftServo.setAngleAndWait(10)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
})
input.onButtonPressed(Button.B, function () {
    fwdBase.leftServo.setAngleAndWait(60)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
})
input.onButtonPressed(Button.AB, function () {
    fwdBase.leftServo.setAngleAndWait(120)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
})

fwdBase.leftServo.setAngleAndWait(0)

// @collapsed
function lightPlant (location: number, colour: number) {
    fwdBase.leftServo.setAngleAndWait(location)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(colour)
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}

// @collapsed
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    lightPlant(10, 16711680)
})
```

## Étape de codage 1 @showdialog

IMPORTANT! Assure-toi que la planche d'extension de ta trousse Action Climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Allumer la planche d'extension" style="display: block; width: 40%; margin:auto;">

## Étape de codage 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_. Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet du feu de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de codage 3

Clique sur le bouton `|Télécharger|` pour télécharger le code vers ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes prêts à **utiliser** notre prototype de ferme verticale!

Astuces

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt à en savoir plus, clique sur **« En savoir plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

## Étape d'utilisation 1

Regarde bien ton prototype de ferme verticale. Peux-tu nommer toutes ses pièces physiques?

~hint En savoir plus!
Notre ferme verticale comprend :

-   **Blocs de construction** : une plaque de base, deux longs cadres, un cadre moyen, quatre petits cadres, un cercle, trois connecteurs cubiques et trois connecteurs d'angle
-   **Composants robotiques** : un micro:bit, une planche d'extension, une pile, un servomoteur positionnel et un anneau DEL
-   Un long connecteur de câble
    hint~

## Étape d'utilisation 2

Selon toi, quel est le rôle de chaque pièce? Comment interagissent-elles entre elles?

~hint En savoir plus!

-   Les **blocs de construction** forment les piles qui soutiennent les plantes de notre ferme verticale ainsi que le bras à DEL qui éclairera nos plantes.
-   Le **micro:bit** contient tout le code qui indique à notre prototype de ferme verticale comment fonctionner.
-   La **planche d'extension** envoie ces instructions du micro:bit vers l'**anneau DEL** et le **servomoteur positionnel**. Le servomoteur positionnel fera pivoter notre bras à DEL pour qu'il puisse se déplacer vers une rangée précise de plantes et l'éclairer.
-   La **pile** sur la planche d'extension alimente notre projet lorsqu'il n'est pas branché à l'ordinateur.
    hint~

## Étape d'utilisation 3

Commençons par tester notre ferme verticale.

Que se passe-t-il quand tu appuies sur A? Appuie dessus quelques fois et écris une liste ordonnée de tout ce que tu remarques.

_Remarque : Attends 5 secondes entre chaque pression de bouton._

~hint En savoir plus!
Quand tu appuies sur A :

1. Le bras à DEL se déplace près de la rangée du haut de plantes.
2. Le micro:bit affiche une icône de soleil sur son afficheur à DEL.
3. L'anneau DEL devient rouge pendant environ 5 secondes.
4. L'anneau DEL s'éteint.
5. L'afficheur à DEL du micro:bit s'efface.
6. Le bras à DEL revient à sa position initiale.

Il s'agit du traitement lumineux idéal pour la plante située sur la pile du haut de notre ferme verticale.
hint~

## Étape d'utilisation 4

Que se passe-t-il quand tu appuies sur B? Appuie dessus quelques fois et écris une liste ordonnée de tout ce que tu remarques.

_Remarque : Attends 5 secondes entre chaque pression de bouton._

~hint En savoir plus!
Quand tu appuies sur B :

1. Le bras à DEL se déplace près de la rangée du milieu de plantes.
2. Le micro:bit affiche une icône de soleil sur son afficheur à DEL.
3. L'anneau DEL devient bleu pendant environ 5 secondes.
4. L'anneau DEL s'éteint.
5. L'afficheur à DEL du micro:bit s'efface.
6. Le bras à DEL revient à sa position initiale.

Il s'agit du traitement lumineux idéal pour la plante située sur la pile du milieu de notre ferme verticale.
hint~

## Étape d'utilisation 5

Que se passe-t-il quand tu appuies sur A+B? Appuie dessus quelques fois et écris une liste ordonnée de tout ce que tu remarques.

_Remarque : Attends 5 secondes entre chaque pression de bouton._

~hint En savoir plus!
Quand tu appuies sur A+B :

1. Le bras à DEL se déplace près de la rangée du bas de plantes.
2. Le micro:bit affiche une icône de soleil sur son afficheur à DEL.
3. L'anneau DEL devient blanc pendant environ 5 secondes.
4. L'anneau DEL s'éteint.
5. L'afficheur à DEL du micro:bit s'efface.
6. Le bras à DEL revient à sa position initiale.

Il s'agit du traitement lumineux idéal pour la plante située sur la pile du bas de notre ferme verticale.
hint~

## Étape d'utilisation 6

Compare ces traitements lumineux. Qu'est-ce qui est différent? Qu'est-ce qui est pareil?

À ce stade, tu peux jeter un coup d'œil au code sous les blocs `||input:on button A pressed||`, `||input:on button B pressed||` et `||input:on button A+B pressed||` dans notre espace de travail, si ça peut t'aider!

~hint En savoir plus!
Le traitement lumineux pour chaque plante est presque identique. Les seules différences sont :

1. l'endroit où le bras à DEL se rend pour mieux atteindre les plantes en question (l'angle du servomoteur positionnel)
2. la couleur des DEL
   hint~

## Étape d'utilisation 7

Écrire la même série d'instructions plusieurs fois n'est pas très efficace! De plus, sans nom, le but de toutes ces étapes pourrait être difficile à comprendre pour quelqu'un qui jette un simple coup d'œil au code.

Comment pourrais-tu écrire une seule séquence d'étapes qui pourrait être utilisée pour traiter toutes les plantes? Comment appellerais-tu ce processus? Essaie maintenant!

~hint En savoir plus!
Disons que nous appelons ce processus : Traitement lumineux des plantes.

Nous pourrions utiliser des valeurs de remplacement pour les valeurs qui pourraient changer selon l'espèce de plante ou son stade de vie! Par exemple, pour éclairer une plante :

1. Le bras à DEL se déplace près de la (**position**) des plantes.
2. Le micro:bit affiche une icône de soleil sur son afficheur à DEL.
3. L'anneau DEL devient (**couleur**) pendant environ 5 secondes.
4. L'anneau DEL s'éteint.
5. L'afficheur à DEL du micro:bit s'efface.
6. Le bras à DEL revient à sa position initiale.
   hint~

## Étape d'utilisation 8

Nous pouvons accomplir ceci en programmation en écrivant une **fonction**! Une fonction est un bloc de code réutilisable qui exécute une seule action. Dans ce cas, cette action consiste à éclairer nos différentes plantes!

Nous avons pré-écrit une fonction pour toi. Clique sur la flèche à côté du bloc bleu pour développer le code!

~hint En savoir plus!

-   Remarque comment la séquence d'étapes est la même que celle sous chaque événement, sauf que maintenant nous utilisons des variables pour toute valeur qui change!
    hint~

```blocks
function lightPlant (location: number, colour: number) {
    fwdBase.leftServo.setAngleAndWait(location)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(colour)
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}
```

## Étape d'utilisation 9

Quand tu veux utiliser une fonction dans ton code, tu dois l'appeler.

~hint En savoir plus!

-   Tu peux trouver le bloc `||functions:call lightPlant||` sous la catégorie `||functions:Functions||`.
    hint~

## Étape d'utilisation 10

Nous avons déjà ajouté un bloc `||functions:call lightPlant||` à notre code sous l'événement `||input:on logo touched||`. Développe ce code en cliquant sur la flèche vers le bas.

Appuie de nouveau sur A, puis touche le logo à l'avant du micro:bit. Que remarques-tu?

_Remarque : Attends 5 secondes entre la pression du bouton et le toucher du logo._

~hint En savoir plus!

-   Tu as sans doute remarqué que le traitement lumineux est le même qu'avant!
    hint~

```blocks
// @hide
function lightPlant (location: number, colour: number) {
    fwdBase.leftServo.setAngleAndWait(location)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(colour)
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}


input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    lightPlant(10, 16711680)
})
```

## Étape d'utilisation 11

Tu vois à quel point le code est plus facile à interpréter maintenant?

En utilisant une fonction, nous pouvons simplifier notre code, le rendre plus facile à lire et réduire le nombre de blocs utilisés! Chaque événement ne nécessite plus qu'un seul bloc au lieu de 8!

## Félicitations ! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris dans ce projet?

## Réflexion @showdialog

Écris 2 nouvelles choses que tu as apprises aujourd'hui.

Sur quoi aimerais-tu en apprendre davantage?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

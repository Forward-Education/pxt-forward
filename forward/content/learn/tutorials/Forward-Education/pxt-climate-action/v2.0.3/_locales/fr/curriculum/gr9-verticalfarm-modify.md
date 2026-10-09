# Optimiser la croissance des plantes avec des lampes de culture DEL - Tutoriel de modification

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Créons un prototype de ferme verticale ! Nous allons faire cela en 4 parties :

1. **Construire** notre ferme verticale
2. **Ajouter du code** pour lui donner vie
3. **Modifier** le code pour comprendre son fonctionnement
4. Compléter un **défi** pour prendre soin d'encore _plus_ d'espèces de plantes dans notre ferme

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

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code !

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

```template
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
input.onButtonPressed(Button.A, function () {
    lightPlant(10, 16711680)
})
input.onButtonPressed(Button.B, function () {
    lightPlant(60, 255)
})
input.onButtonPressed(Button.AB, function () {
    lightPlant(120, 16777215)
})
fwdBase.leftServo.setAngleAndWait(0)
```

## Étape de codage 1 @showdialog

IMPORTANT ! Assure-toi que ta carte d'extension de la trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Allumer la carte d'extension" style="display: block; width: 40%; margin:auto;">

## Étape de codage 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet des feux de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de codage 3

Clique sur le bouton `|Télécharger|` pour télécharger le code vers ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes prêts à **modifier** notre prototype de ferme verticale !

Trucs

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt à en savoir plus, clique sur **« Dis-m'en plus ! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule !
4. N'oublie pas de `|Télécharger|` et de tester tous les changements que tu fais !

## Étape de modification 1

Commençons par tester notre ferme verticale. Que se passe-t-il quand tu appuies sur A ? B ? A+B ?

_Remarque : Attends 5 secondes entre chaque appui de bouton._

~hint Dis-m'en plus !
Peu importe le bouton sur lequel tu appuies (A, B ou A+B) :

1. Le bras à DEL se déplace vers une rangée précise de plantes.
2. Le micro:bit affiche une icône de soleil sur son écran à DEL.
3. L'anneau de DEL change vers une couleur précise pendant environ 5 secondes.
4. L'anneau de DEL s'éteint.
5. L'écran à DEL du micro:bit s'éteint.
6. Le bras à DEL retourne à sa position de départ.

Cette séquence de **sortie** représente le traitement lumineux des plantes dans notre ferme verticale ! La rangée et la couleur des DEL changent avec chaque bouton, car les plantes des rangées du haut, du milieu et du bas ont besoin de différents types de lampes de culture à DEL.
hint~

## Étape de modification 2

Regarde le code que nous avons donné à ta ferme verticale.

Il y a une **fonction** appelée `||functions:lightPlant||` qui contient toutes les étapes nécessaires au traitement lumineux des plantes.

~hint Dis-m'en plus !

-   Une fonction est un bloc de code réutilisable qui accomplit une tâche ou une action précise.
-   Il est important de nommer ta fonction clairement selon ce qu'elle fait. Cela rend notre code plus facile à comprendre.
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

## Étape de modification 3

Quand nous voulons que le micro:bit utilise le code de notre fonction, nous devons l'**appeler**.

Dans ce projet, nous utilisons ou appelons la fonction `||functions:plantLight||` 3 fois différentes : `||input:on button A pressed||`, `||input:on button B pressed||` et `||input:on button A+B pressed||`.

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

input.onButtonPressed(Button.A, function () {
    lightPlant(10, 16711680)
})
input.onButtonPressed(Button.B, function () {
    lightPlant(60, 255)
})
input.onButtonPressed(Button.AB, function () {
    lightPlant(120, 16777215)
})
```

## Étape de modification 4

Chaque bloc `||functions:call||` a quelques nombres différents. Selon toi, que représentent ces nombres ?

Change le **premier nombre** dans le bloc `||functions:call||` sous `||input:on button A pressed||` pour une valeur entre « 10 » et « 60 ». Ensuite, retéléverse ton code et teste-le ! Que s'est-il passé ?

~hint Dis-m'en plus !

-   Quand on appuie sur A, le bras à DEL se déplace maintenant vers un nouvel emplacement.
-   Ce nombre contrôle l'angle du servomoteur positionnel et détermine quelle rangée notre bras à DEL peut atteindre dans la pile de la ferme verticale.
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

input.onButtonPressed(Button.A, function () {
    lightPlant(30, 16711680)
})
```

## Étape de modification 5

Change le deuxième nombre dans le bloc `||functions:call||` sous `||input:on button A pressed||`.

Retéléverse ton code et teste-le ! Que s'est-il passé ? Essaie quelques nombres différents si tu n'es pas certain.

~hint Dis-m'en plus !

-   Ce nombre contrôle la couleur des DEL de l'anneau de DEL.
-   Quand on appuie sur A, l'anneau de DEL ne devient plus rouge. C'est une nouvelle couleur.
-   Tu peux choisir une couleur précise en allant sur le [sélecteur de couleurs de Google](https://g.co/kgs/Nwxqe7V) et en cliquant sur la couleur que tu souhaites. Copie le code HEX (p. ex. #00ffff pour le cyan). Écris « 0x00ffff » dans le deuxième espace du bloc `||functions:call lightPlant||` et il se convertira automatiquement en nombre.
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

input.onButtonPressed(Button.A, function () {
    lightPlant(30, 65535)
})
```

## Étape de modification 6

Remets les deux nombres à leurs valeurs d'origine : « 10 » et « 16711680 ».

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


input.onButtonPressed(Button.A, function () {
    lightPlant(10, 16711680)
})
```

## Étape de modification 7

Les substituts dans la fonction `||functions:lightPlant||` (`||variables:location||` et `||variables:colour||`) sont appelés des **paramètres**.

Chaque fois que nous appelons notre fonction, nous devons fournir de vrais nombres pour chaque paramètre. Ces nombres sont ceux écrits dans les blocs `||functions:call lightPlant||` et sont appelés des **arguments**. La fonction remplacera automatiquement les paramètres par les arguments lors de son exécution.

```blocks
// @highlight
function lightPlant (location: number, colour: number) {
    // @highlight
    fwdBase.leftServo.setAngleAndWait(location)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    // @highlight
    fwdLights.ledRing1.setAllPixelsColor(colour)
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}

input.onButtonPressed(Button.A, function () {
    // @highlight
    lightPlant(10, 16711680)
})
```

## Étape de modification 8

Imagine une ferme verticale avec de nombreuses plantes différentes, chacune dans une rangée différente avec ses propres besoins d'éclairage. Nous voudrions sauvegarder toute cette information quelque part, non ?

En programmation, nous pouvons utiliser des **structures de données** pour organiser et stocker les données sur nos plantes. Un type de structure de données est une **liste**. Les listes nous permettent de stocker une collection d'éléments dans un ordre précis. Aujourd'hui, nous allons créer deux listes pour sauvegarder les données que nous avons sur l'emplacement des plantes et la couleur des DEL.

## Étape de modification 9

Créons une liste appelée « location » pour stocker l'« adresse » de chaque plante dans notre ferme verticale.

Clique sur `||arrays:Arrays||` et glisse le bloc `||variables:set list to||` dans l'espace de travail. Appuie sur la flèche vers le bas à côté de `||variables:list||` et sélectionne « New variable » pour nommer ta liste « location ».

Transfère les arguments de location de nos blocs `||functions:call||` dans cette liste. Souviens-toi, l'ordre est important !

```block
let location = [10, 60, 120]
```

## Étape de modification 10

Créons une liste appelée « colour » pour stocker la couleur de DEL requise pour chaque plante dans notre ferme verticale.

Clique sur `||arrays:Arrays||` et glisse le bloc `||variables:set list to||` dans l'espace de travail. Appuie sur la flèche vers le bas à côté de `||variables:list||` et sélectionne « New variable » pour nommer ta liste « colour ».

Transfère les arguments de couleur de nos blocs `||functions:call||` dans cette liste. Utilise le même ordre que tu as utilisé pour la liste `||variables:location||`.

```block
let colour = [16711680, 255, 16777215]
```

## Étape de modification 11

Ajoute les deux blocs `||variables:set list to||` au bloc `||basic:on start||`.

```blocks
fwdBase.leftServo.setAngleAndWait(0)
let location = [10, 60, 120]
let colour = [16711680, 255, 16777215]
```

## Étape de modification 12

Maintenant, changeons la fonction pour qu'elle puise ses données directement de nos listes.

## Étape de modification 13

Glisse deux blocs `||variables:list||` `||arrays:get value at 0||` de la catégorie `||arrays:Array||` dans l'espace de travail. Glisse-les et dépose-les dans la fonction, en remplaçant les paramètres `||variables:location||` et `||variables:colour||`.

~hint Dis-m'en plus !

-   Ce bloc te permet de puiser un nombre _précis_ de ta liste. Plus de détails bientôt !
    hint~

```blocks
function lightPlant (location: number, colour: number) {
    // @highlight
    fwdBase.leftServo.setAngleAndWait(list[0])
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    // @highlight
    fwdLights.ledRing1.setAllPixelsColor(list[0])
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}
```

## Étape de modification 14

Alors, nous avons ajouté nos listes à la fonction, mais le micro:bit ne sait toujours pas _quel_ nombre puiser dans chacune.

Heureusement, les listes sont ordonnées ! Nous pouvons utiliser un concept appelé **index** pour cibler un nombre précis dans chaque liste. Dans la plupart des langages de programmation, le premier élément d'une liste a un index de 0, le deuxième élément a un index de 1, et ainsi de suite.

~hint Dis-m'en plus !
Aujourd'hui, nous avons stocké les données dans cet ordre :

-   Les données pour les plantes de la rangée du _haut_ dans notre ferme sont toujours le premier nombre dans nos listes (c.-à-d. index 0).
-   Les données pour les plantes de la rangée du _milieu_ dans notre ferme sont toujours le deuxième nombre dans nos listes (c.-à-d. index 1).
-   Les données pour les plantes de la rangée du _bas_ dans notre ferme sont toujours le troisième nombre dans nos listes (c.-à-d. index 2).
    hint~

## Étape de modification 15

Puisque chaque rangée est liée à un index précis, `||variables:index||` peut devenir notre nouveau paramètre.

Clique avec le bouton droit sur le bloc de fonction et clique sur « Edit Function ». Supprime le paramètre « colour » en cliquant dessus et en sélectionnant la corbeille qui apparaît. Renomme le paramètre « location » en « index ».

```blocks
// @highlight
function lightPlant (index: number) {
    fwdBase.leftServo.setAngleAndWait(location[0])
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(colour[0])
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}
```

## Étape de modification 16

Glisse `||variables:index||` du bloc de fonction et ajoute-le aux deux blocs `||arrays:get value at 0||`.

C'est ainsi que nous indiquons au micro:bit de puiser les données de location et de couleur pour la rangée du haut de plantes (index = 0), la rangée du milieu de plantes (index = 1) ou la rangée du bas de plantes (index = 2).

```blocks
function lightPlant (index: number) {
    // @highlight
    fwdBase.leftServo.setAngleAndWait(location[index])
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    // @highlight
    fwdLights.ledRing1.setAllPixelsColor(colour[index])
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}
```

## Étape de modification 17

Finalement, nous devons mettre à jour nos blocs `||functions:call||` pour refléter ces changements.

Quand on appuie sur A, nous voulons éclairer les plantes de la _rangée du haut_ de notre ferme verticale. Quelle valeur devrions-nous utiliser pour `||variables:index||` dans le `||functions:call lightPlant||` sous `||input:on button A pressed||` ?

~hint Dis-m'en plus !

-   Les données pour les plantes de la rangée du haut sont toujours le premier élément de nos listes. Cela signifie que nous pouvons y accéder en utilisant l'index 0.
    hint~

```blocks
// @hide
function lightPlant (index: number) {
    let list: number[] = []
    fwdBase.leftServo.setAngleAndWait(location[index])
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(colour[index])
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}

input.onButtonPressed(Button.A, function () {
    lightPlant(0)
})
```

## Étape de modification 18

Quel argument devrions-nous utiliser pour `||variables:index||` dans le bloc `||functions:call lightPlant||` sous `||input:on button B pressed||` ? `||input:On button A+B pressed||` ?

~hint Dis-m'en plus !

-   Quand on appuie sur B, nous voulons éclairer les plantes de la _rangée du milieu_ de notre ferme verticale. Les données pour cette rangée de plantes sont toujours stockées à l'index 1.
-   Quand on appuie sur A+B, nous voulons éclairer les plantes de la _rangée du bas_ de notre ferme verticale. Les données pour cette rangée de plantes sont toujours stockées à l'index 2.
-   Chaque rangée de plantes que nous ajoutons à notre construction augmenterait la longueur de nos listes de un !
    hint~

```blocks
// @hide
function lightPlant (index: number) {
    let list: number[] = []
    fwdBase.leftServo.setAngleAndWait(location[index])
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(colour[index])
    basic.pause(5000)
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}

input.onButtonPressed(Button.B, function () {
    lightPlant(1)
})
input.onButtonPressed(Button.AB, function () {
    lightPlant(2)
})
```

## Étape de modification 19

Télécharge ton code pour le tester ! Que remarques-tu ?

~hint Dis-m'en plus !

-   Les traitements des plantes devraient être les mêmes qu'au début de l'activité; cependant, en arrière-plan, nous avons maintenant une façon organisée de stocker nos données sur les plantes.
    hint~

## Activité 4 : C'est le temps du défi ! @showdialog

En ce moment, toutes les plantes sont traitées pendant 5 secondes. En réalité, certaines plantes pourraient s'épanouir avec des durées d'exposition à la lumière différentes. Par exemple, pour fleurir, les plantes de jours longs ont besoin d'une exposition à la lumière plus longue que les plantes de jours courts !

Suppose que chaque rangée de plantes a les exigences suivantes :

-   **Rangée du haut** : 5 secondes d'exposition aux DEL
-   **Rangée du milieu** : 10 secondes d'exposition aux DEL
-   **Rangée du bas** : 7 secondes d'exposition aux DEL

Personnalisons davantage notre traitement lumineux pour intégrer ces données !

## Étape du défi 1

Crée une nouvelle liste pour stocker les données sur la durée d'éclairage.

~hint Dis-m'en plus !

-   Assure-toi de convertir les secondes (s) en millisecondes (ms) en multipliant par 1000.
    hint~

```blocks
fwdBase.leftServo.setAngleAndWait(0)
location = [10, 60, 120]
colour = [16711680, 255, 16777215]
// @highlight
let duration = [5000, 10000, 7000]
```

## Étape du défi 2

Modifie la fonction `||functions:plantLight||` pour qu'elle utilise ces données.

~hint Dis-m'en plus !

-   Nous allons ajouter un bloc `||variables:duration||` `||arrays:get value at||` `||variables:index||` au premier bloc `||basic:pause (ms)||` de notre fonction.
-   Puisque ce bloc `||basic:pause||` vient immédiatement après le bloc `||fwdSensors:set all ledRing LEDs to||`, il influencera la durée pendant laquelle les DEL restent allumées.
-   Retéléverse et teste ton code !
    hint~

```blocks
function lightPlant (index: number) {
    fwdBase.leftServo.setAngleAndWait(location[index])
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    fwdLights.ledRing1.setAllPixelsColor(colour[index])
    // @highlight
    basic.pause(duration[index])
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}
```

## Étape du défi 3

Certaines espèces de plantes ont besoin d'une lumière plus intense ou plus vive que d'autres.

Comment pourrions-nous personnaliser la _luminosité_ de nos DEL ?

~hint Dis-m'en plus !

-   Crée une autre liste appelée `||variables:brightness||`.
-   Ajoute un bloc `||fwdSensors:set ledRing brightness to||` juste avant le premier bloc `||fwdSensors:set all ledRing LEDs to||` dans la fonction principale.
-   Assure-toi que le bloc `||fwdSensors:set ledRing brightness to||` puise ses données de la liste `||variables:brightness||`.
    hint~

```blocks
fwdBase.leftServo.setAngleAndWait(0)
location = [10, 60, 120]
colour = [16711680, 255, 16777215]
duration = [5000, 10000, 7000]
// @highlight
brightness = [10, 1, 5]

function lightPlant (index: number) {
    fwdBase.leftServo.setAngleAndWait(location[index])
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    // @highlight
    fwdLights.ledRing1.setBrightness(brightness[index])
    fwdLights.ledRing1.setAllPixelsColor(colour[index])
    basic.pause(duration[index])
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    basic.clearScreen()
    fwdBase.leftServo.setAngleAndWait(0)
    basic.pause(5000)
}
```

## Explore

Y a-t-il des parties du code que tu ne comprends pas encore ? C'est le moment d'explorer !

~hint Dis-m'en plus !
Suis ces étapes :

1. Trouve une partie du code sur laquelle tu aimerais en apprendre plus
2. Fais un seul changement à ce bloc (ou retire-le complètement)
3. Télécharge le nouveau code
4. Teste-le et observe ce qui a changé
5. Recommence
   hint~

## Félicitations ! @showdialog

Tu as terminé l'activité !

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis au défi.

Comment as-tu surmonté ce défi ? Comment cela t'a-t-il fait sentir ?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

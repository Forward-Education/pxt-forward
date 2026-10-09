# Poubelles intelligentes - Tutoriel de modification

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 45)
})
fwdMotors.setAngle(fwdBase.rightServo, 0)
let fillLevel = 0
basic.forever(function () {
    led.plotBarGraph(
    fillLevel,
    100
    )
    if (fwdSensors.sonar1.isPastThreshold(0.03, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fillLevel = 75
        basic.pause(500)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fillLevel = 0
        basic.pause(500)
    }
})
```

## Poubelle intelligente : Tutoriel de modification @showdialog

Aujourd'hui, on construit et on programme une poubelle intelligente !

On va ajouter du code de départ pour s'assurer que notre poubelle s'ouvre et se ferme grâce à un bouton. Ensuite, on va modifier le code pour se l'approprier !

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-smartbin-render.webp" alt="Rendu complet de la poubelle intelligente" style="display: block; width: 60%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT ! Assure-toi que la carte d'extension de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Brancher le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connect Device_.
Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="GIF de jumelage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur le micro:bit.

## Étape 4

Pense à la façon dont les poubelles intelligentes de notre leçon fonctionnaient.

Selon toi, que représentent les blocs de construction et les composants électroniques de ton **modèle** ?

~hint Dis-m'en plus !

-   Les **blocs de construction** représentent le contenant qui retient les déchets.

-   Le `||fwdMotors:servo||` ouvre et ferme le contenant à déchets pour le protéger des nuisibles ou des éléments environnementaux comme le vent et la pluie.

-   Le `||fwdSensors:sonar sensor||` mesure le pourcentage de déchets dans le contenant.

-   L'**écran du micro:bit** et l'`||fwdSensors:LED ring||` communiquent à quel point le contenant est plein.

-   Ces composants aident à communiquer aux **spécialistes de la gestion des déchets** si la poubelle devrait être vidée pendant leur tournée de collecte.

hint~

## Étape 5

Testons le fonctionnement de notre **poubelle intelligente** !

Appuie sur le bouton **B** du micro:bit. Que remarques-tu ?

~hint Dis-m'en plus !

Le bouton **B** est une **entrée** qui déclenche les instructions `||fwdMotors:set rightServo to 45 degrees||`

Quand le `||fwdMotors:servo||` tourne, la poubelle s'ouvre !

hint~

```blocks
input.onButtonPressed(Button.B, function () {
// @highlight
 fwdMotors.setAngle(fwdBase.rightServo, 45)
})
```

## Étape 6

Testons maintenant comment la poubelle intelligente **détecte** à quel point elle est pleine.

~hint Dis-m'en plus !

Le `||fwdSensors:sonar sensor||` mesure la **distance entre** les déchets et le haut de la poubelle intelligente.

S'il y a **moins de 3 cm** d'espace entre le `||fwdSensors:sonar sensor||` et les déchets dans la poubelle intelligente, la poubelle est pleine à 75 % !

hint~

```blocks
basic.forever(function () {
      if (fwdSensors.sonar1.isPastThreshold(0.03, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        //@highlight
        fillLevel = 75
        basic.pause(500)
      }
})
```

## Étape 7

On doit savoir quand la poubelle est pleine à 0 %, 25 % et 75 %.

Quel bloc de code va nous aider à ajouter d'autres **conditions** à la variable `||variables:fillLevel||` de notre poubelle intelligente ?

~hint Dis-m'en plus !

On sait déjà quand la poubelle est **vide**, et quand elle est **pleine à 75 %** !

On doit ajouter une autre condition à l'aide d'un bloc `||logic:else if||`.

Clique sur le bouton **+** sous la condition `||logic:else||` dans la boucle `||basic:forever||` de l'espace de travail.

hint~

```blocks
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.03, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fillLevel = 75
        basic.pause(500)
    }
// @highlight
else if (false) {
    	
    }
else {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fillLevel = 0
    }
})
```

## Étape 8

Quelle est la lecture moyenne du `||fwdSensors:sonar sensor||` quand la poubelle est **pleine au quart** ?

~hint Dis-m'en plus !

1. À l'aide d'une règle, mesure la distance en centimètres entre le fond de ta poubelle et le `||fwdSensors:sonar sensor||`.

2. Assure-toi de regarder le **simulateur** pour obtenir des lectures en direct de la distance entre tes déchets et le `||fwdSensors:sonar sensor||`.

3. On sait que quand la poubelle est **pleine aux trois quarts**, il y a moins de **trois centimètres** entre le `||fwdSensors:sonar sensor||` et les déchets dans la poubelle.

4. Si la poubelle est **pleine à 25 %**, il devrait y avoir moins de **sept centimètres** d'espace entre le `||fwdSensors:sonar sensor||` et les déchets dans la poubelle !

hint~

## Étape 9

Quels blocs de code devrait-on utiliser pour avertir un spécialiste de la gestion des déchets que notre poubelle est **pleine à 25 %** ?

~hint Dis-m'en plus !

1. Glisse un bloc `||fwdSensors:sonar distance is under||` dans une condition `||logic:if else||` vide.
2. Règle la valeur de la `||fwdSensors:sonar distance||` à 0,07 mètre
3. Change la couleur de l'`||fwdSensors:LED ring||` pour une autre couleur !
4. Règle la valeur de la variable `||variables:fillLevel||` à 25
5. Ajoute un bloc `||basic:pause||` et règle l'intervalle de temps à 500 ms

hint~

```blocks
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.03, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fillLevel = 75
        basic.pause(500)
    } else if (fwdSensors.sonar1.isPastThreshold(0.07, fwdEnums.OverUnder.Under)) {
// @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
// @highlight
        fillLevel = 25
        // @highlight
        basic.pause(500)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fillLevel = 0
    }
})
```

## Étape 10

Testons notre code ! N'oublie pas d'appuyer sur le bouton `|Télécharger|` quand tu es prêt ou prête à tester tes nouveaux réglages.

## Félicitations ! @showdialog

Tu as terminé l'activité !

Est-ce qu'un aspect du projet t'a surpris ?

## Réflexion @showdialog

Comment le fait d'avoir quatre niveaux de remplissage plutôt que deux aide-t-il les spécialistes de la gestion des déchets à faire des choix de collecte plus durables ?

Quelles autres fonctionnalités pourrais-tu adapter pour rendre ta poubelle intelligente encore plus durable pour la communauté ?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

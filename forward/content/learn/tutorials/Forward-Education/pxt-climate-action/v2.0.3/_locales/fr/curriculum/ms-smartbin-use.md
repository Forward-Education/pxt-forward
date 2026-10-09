# Poubelles intelligentes - Tutoriel d'utilisation

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

## Poubelles intelligentes - Tutoriel d'utilisation @showdialog

Aujourd'hui, nous allons construire une poubelle intelligente !

Ajoutons d'abord du code de départ pour nous assurer que notre poubelle s'ouvre et se ferme lorsqu'on appuie sur un bouton !

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-smartbin-render.webp" alt="Rendu complet de la poubelle intelligente" style="display: block; width: 60%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT ! Assure-toi que ta plaque d'interface de la trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Brancher le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de jumelage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton micro:bit.

## Étape 4

Repense à la façon dont les poubelles intelligentes fonctionnaient dans notre leçon.

Selon toi, que représentent les blocs de construction et les composants électroniques de ton **modèle** ?

~hint Dis-m'en plus !

-   Les **blocs de construction** représentent le contenant qui retient les déchets.

-   Le `||fwdMotors:servo||` ouvre et ferme le contenant à déchets pour le protéger des nuisibles ou des éléments environnementaux comme le vent et la pluie.

-   Le `||fwdSensors:sonar sensor||` mesure le pourcentage de déchets dans le contenant.

-   L'**écran du micro:bit** et le `||fwdSensors:LED ring||` indiquent à quel point le contenant est plein.

-   Ces composants aident à communiquer aux **spécialistes en gestion des déchets** si la poubelle devrait être vidée pendant leur tournée de collecte des déchets.

hint~

## Étape 5

Testons le fonctionnement de notre **poubelle intelligente** !

Appuie sur le bouton **B** du micro:bit. Que remarques-tu ?

~hint Dis-m'en plus !

Le bouton **B** est une **entrée** qui déclenche l'instruction `||fwdMotors:set rightServo to 45 degrees||`

Lorsque le `||fwdMotors:servo||` tourne, la poubelle s'ouvre !

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

S'il y a **moins de 3 cm** d'espace entre le `||fwdSensors:sonar sensor||` et les déchets dans la poubelle intelligente, la poubelle est remplie à 75 % !

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

Pendant que la porte de la poubelle est encore ouverte, tiens délicatement un bout de papier près du `||fwdSensors:sonar sensor||`.

Que remarques-tu sur la poubelle intelligente lorsque ton papier est **très près** du `||fwdSensors:sonar sensor||` ?

~hint Dis-m'en plus !

-   Le `||fwdSensors:LED ring||` de la poubelle intelligente passe du **vert** au **rouge**.
-   Le graphique de l'**écran du micro:bit** fait passer la variable `||variables:fillLevel||` de 0 % à 75 % de remplissage.

hint~

```blocks
basic.forever(function () {
// @highlight
led.plotBarGraph(
    fillLevel,
    100
    )
    if (fwdSensors.sonar1.isPastThreshold(0.03, fwdEnums.OverUnder.Under)) {
// @highlight
  fwdLights.ledRing1.setAllPixelsColor(0xff0000)
  fillLevel = 75
  basic.pause(500)
    }
})
```

## Étape 8

Maintenant que tu comprends comment ajuster la variable `||variables:fillLevel||` avec ton bout de papier, remplissons notre poubelle de déchets jusqu'à ce qu'elle soit pleine à 75 % !

~hint Dis-m'en plus !

Pense aux déchets que tu places dans la poubelle. S'ils sont **plus petits**, combien de morceaux supplémentaires peux-tu ajouter à ta poubelle intelligente avant que le `||fwdSensors:LED ring||` devienne rouge ?

hint~

## Étape 9

Maintenant que ta poubelle est pleine, quel bloc de code penses-tu contrôle la fermeture de la porte ?

~hint Dis-m'en plus !

Le bouton **A** ramène le `||fwdMotors:servo||` à 0 degré !

hint~
Une fois que ta poubelle intelligente est pleine, appuie sur le bouton **A** pour fermer la porte !

```blocks
input.onButtonPressed(Button.A, function () {
// @highlight
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
```

## Défi @showdialog

Maintenant que nous avons **utilisé** notre modèle pour comprendre comment fonctionne notre poubelle intelligente, nous allons réaliser un petit **défi**.

Notre poubelle intelligente est un **prisme rectangulaire** ! Calculons l'aire, l'aire totale et le volume de notre contenant pour comprendre la quantité de déchets que nos **spécialistes en gestion des déchets** récoltent de notre modèle.

## Étape 10

À l'aide d'une règle ou d'un **cube connecteur dos à dos** de la trousse d'action climatique, détermine la **longueur, la largeur et la hauteur** de notre contenant de poubelle intelligente.

~hint Dis-m'en plus !

À l'aide d'un cube connecteur dos à dos de la trousse d'action climatique, nous avons mesuré les valeurs suivantes pour notre prisme rectangulaire :

-   Largeur : 3 cubes connecteurs dos à dos
-   Longueur : 4 cubes connecteurs dos à dos
-   Hauteur : 4 cubes connecteurs dos à dos

N'oublie pas que notre **modèle** comprend des composants électroniques qui ne font pas partie du **contenant** de notre poubelle intelligente.

hint~

## Étape 11

Maintenant que tu connais la longueur, la largeur et la hauteur de ta poubelle intelligente, représente ton prisme rectangulaire sous forme de **patron**.

N'oublie pas d'indiquer la **longueur, la largeur et la hauteur** sur ton dessin !

~hint Dis-m'en plus !

À l'aide des mesures de l'**étape 1 du défi**, nous avons créé le patron suivant :

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-smartbin-net.webp" alt="Patron du prisme rectangulaire avec les indications de longueur, largeur et hauteur" style="display: block; width: 60%; margin:auto;">
hint~

## Étape 12

Quelle est l'aire totale de notre poubelle intelligente ?

~hint Dis-m'en plus

Utilise la formule suivante pour calculer l'**aire totale** d'un prisme rectangulaire :

**Aire totale = 2(Longueur x Largeur) + 2(Longueur + Largeur)Hauteur**

1. Aire totale = 2(4 x 3) + 2(4 + 3)4
2. Aire totale = 2(12) + 2(7)4
3. Aire totale = 24 + (14x4)
4. Aire totale = 24 + 56
5. Aire totale = 80 unités carrées

N'oublie pas, avec l'**aire totale**, nous additionnons les aires de chaque face, donc nous multiplions seulement par deux dimensions, ce qui explique pourquoi nos unités sont **carrées**.

hint~

## Étape 13

Quel est le **volume** de notre poubelle intelligente ?

~hint Dis-m'en plus !

**L'une ou l'autre** des formules ci-dessous peut être utilisée pour calculer le **volume** d'un prisme rectangulaire :

**Volume = Longueur x Largeur x Hauteur**

-   Volume = 4 x 3 x 4
-   Volume = 48 unités cubes

**Volume = Aire de la base x Hauteur**

-   Volume = (Longueur x Largeur) x Hauteur
-   Volume = (4 x 3) x 4
-   Volume = 12 x 4
-   Volume = 48 unités cubes

N'oublie pas, puisque nous multiplions par **trois dimensions**, nos unités sont **cubes**.

hint~

## Étape 14

Si un spécialiste en gestion des déchets vide notre poubelle intelligente lorsqu'elle est **pleine à 75 %**, quel est le volume de déchets qu'il récolte ?

~hint Dis-m'en plus !

Utilise la formule suivante pour calculer **75 % du volume** de notre poubelle intelligente :

-   Volume x 0,75
-   48 x 0,75
-   36 unités cubes

Lorsque la poubelle intelligente contient **plus de 36 unités cubes** de déchets, le spécialiste en gestion des déchets l'inclura dans sa tournée de collecte des déchets.

hint~

## Félicitations ! @showdialog

Tu as terminé l'activité !

Y a-t-il quelque chose qui t'a surpris à propos du projet ?

## Réflexion @showdialog

1. Comment pourrais-tu améliorer la **structure physique** de ta poubelle intelligente ?
2. Comment pourrais-tu améliorer le **code** de ton modèle ?
3. Selon toi, comment la poubelle intelligente aide-t-elle à réduire l'**impact environnemental** d'une communauté ?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

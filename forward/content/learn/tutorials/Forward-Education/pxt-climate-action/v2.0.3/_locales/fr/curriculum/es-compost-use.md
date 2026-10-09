# Composteur rotatif solaire - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
basic.forever(function () {
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
        fwdBase.leftServo.setEnabled(true)
        basic.pause(2000)
        fwdBase.leftServo.setEnabled(false)
        basic.pause(5000)
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un composteur rotatif alimenté par le soleil! Nous allons faire cela en trois parties :

1. **Construis** ton composteur
2. **Ajoute du code** à ton composteur pour lui donner vie
3. **Utilise** ton composteur pour comprendre comment il fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-render.webp" alt="Rendu complet du composteur rotatif" style="display: block; width: 70%; margin:auto;">

## Construction Étape 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs01.webp)

## Construction Étape 2 @showdialog

![sbs2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs02.webp)

## Construction Étape 3 @showdialog

![sbs3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs03.webp)

## Construction Étape 4 @showdialog

![sbs4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs04.webp)

## Construction Étape 5 @showdialog

![sbs5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs05.webp)

## Construction Étape 6 @showdialog

![sbs6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs06.webp)

## Construction Étape 7 @showdialog

![sbs7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs07.webp)

## Construction Étape 8 @showdialog

![sbs8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs08.webp)

## Construction Étape 9 @showdialog

![sbs9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs09.webp)

## Construction Étape 10 @showdialog

![sbs10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs10.webp)

## Construction Étape 11 @showdialog

![sbs11](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs11.webp)

## Construction Étape 12 @showdialog

![sbs12](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-compost-sbs12.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Codage Étape 1 @showdialog

IMPORTANT! Assure-toi que la carte de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Codage Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Codage Étape 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêts à **utiliser** notre composteur rotatif!

**Conseils pour le tutoriel**

1. **Suis les** étapes en haut de l'écran.
2. Quand tu es prêt pour plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule!**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Utilisation Étape 1

Regarde de près le composteur rotatif que tu viens de construire. Peux-tu nommer les différentes pièces que tu as utilisées pour le fabriquer? Sois précis!

~hint Dis-m'en plus!
Ce composteur utilise :

-   **Blocs de construction :** Une plaque de base, un cercle, trois connecteurs cubiques, trois cadres blancs moyens, deux cadres blancs moyens avec des trous pour le servomoteur, et un cadre vert mince
-   **Pièces robotiques :** Une carte de connexion, un micro:bit, un servomoteur et un capteur solaire
    hint~

## Utilisation Étape 2

Comment penses-tu que toutes ces pièces travaillent ensemble pour transformer nos déchets en terreau?

~hint Dis-m'en plus!

-   Les **blocs de construction** créent le composteur qui contient les déchets. Le cadre vert mince est notre porte!
-   Le **moteur** fait tourner le composteur pour mélanger les déchets, ce qui aide l'air à entrer pour que les décomposeurs puissent décomposer les déchets.
-   Le **capteur solaire** vérifie s'il y a assez de lumière du soleil pour alimenter le moteur. Utiliser la lumière du soleil rend le composteur encore plus écologique.
    hint~

## Utilisation Étape 3

Comment fait-on fonctionner notre composteur rotatif?

~hint Dis-m'en plus!

-   Nous écrivons du code (des instructions) qui dit au composteur quoi faire et nous le sauvegardons sur notre micro:bit.
-   Quand tout est connecté, le code est envoyé du micro:bit (le cerveau) à la carte de connexion (la colonne vertébrale) puis au moteur et aux capteurs (les membres). Il leur dit exactement quoi faire.
    hint~

## Utilisation Étape 4

Regarde le code ci-dessous. Quand penses-tu que notre composteur va tourner?

Teste-le! Avais-tu raison?

~hint Dis-m'en plus!

-   Le capteur solaire mesure constamment la quantité de lumière dans l'environnement.
-   Le composteur ne tourne que lorsque le capteur solaire détecte _beaucoup_ de lumière du soleil (plus de 95 %).
-   Tu peux essayer d'éclairer le capteur avec une lampe de poche pour voir comment ça fonctionne.
    hint~

```block
    // @highlight
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
        // @highlight
        fwdBase.leftServo.setEnabled(true)
        basic.pause(2000)
        fwdBase.leftServo.setEnabled(false)
        basic.pause(5000)
    }
```

## Utilisation Étape 5

Nous utilisons des **boucles** pour vérifier s'il y a assez de lumière pour faire tourner le composteur.

Peux-tu identifier les deux boucles dans ce code?

~hint Dis-m'en plus!

Les boucles font en sorte que des choses se produisent plus d'une fois. Dans ce code :

-   La boucle `||basic:forever||` continue de s'exécuter tout le temps. Elle répète le code à l'intérieur encore et encore. Dans notre projet, la boucle « forever » surveille le niveau de lumière du soleil en tout temps.

-   Le code à l'intérieur de la boucle `||loops:while||` s'exécute tant qu'une certaine condition est vraie. Ici, il ne s'exécutera que lorsque le capteur solaire détecte _assez_ de lumière du soleil (plus de 95 %).

hint~

```blocks
// @highlight
basic.forever(function () {
    // @highlight
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
        fwdBase.leftServo.setEnabled(true)
        basic.pause(2000)
        fwdBase.leftServo.setEnabled(false)
        basic.pause(5000)
    }
})
```

## Utilisation Étape 6

Regarde de nouveau ton projet.

Quelle est la taille de ton composteur? Combien de déchets peut-il contenir?

~hint Dis-m'en plus!

-   Mesure la longueur, la largeur et la hauteur de ton composteur avec une règle.
-   Ensuite, calcule combien de déchets il peut contenir en calculant son volume.
-   Souviens-toi : Volume = Longueur x Largeur x Hauteur
    hint~

## Utilisation Étape 7

Imagine que ton école a 720 mL de déchets à composter. Combien de composteurs comme le tien te faudrait-il pour tout composter?

~hint Dis-m'en plus!

-   Divise 720 mL par le volume de ton composteur.
    hint~

## Utilisation Étape 8

Que se passerait-il si tu voulais fabriquer un composteur plus grand pour contenir 720 mL au lieu d'utiliser plusieurs petits?

Quelle taille (longueur, largeur, hauteur) ton composteur devrait-il avoir pour contenir les 720 mL au complet?

~hint Dis-m'en plus!

1. **Connais le volume :** Ton composteur doit contenir 720 mL de déchets.
2. **Utilise la formule du volume :** Volume = Longueur × Largeur × Hauteur.
3. **Devine un côté :** Commence avec une longueur, comme 10 cm. Puis choisis une largeur, comme 6 cm.
4. **Trouve la hauteur :** Utilise la formule pour trouver la hauteur. Divise 720 mL par le produit des deux autres côtés : Hauteur = 720 mL ÷ (10 cm × 6 cm).
5. **Vérifie :** Assure-toi que tes mesures donnent le bon volume : 10 cm × 6 cm × 12 cm = 720 mL.
   hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose sur laquelle tu aimerais en apprendre plus?

## Terminé! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

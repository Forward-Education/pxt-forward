# Ferme d'algues intelligente - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
radio=radio
```

```template
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # . # # .
        # # # . #
        # . # # .
        . . . . .
        `)
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons une ferme d'algues intelligente! Nous ferons cela en quatre parties :

1. **Construis** ta ferme
2. **Ajoute du code** pour qu'elle puisse détecter les mouvements
3. **Modifie** ta ferme pour apprendre comment elle fonctionne
4. Complète un **défi** pour l'améliorer encore plus

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-render.webp" alt="Rendu complet du modèle de ferme d'algues" style="display: block; width: 70%; margin:auto;">

## Fournitures pour la construction @showdialog

![sbs0A](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs0B.webp)

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs01.webp)

## Étape de construction 2 @showdialog

![sbs2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs02.webp)

## Étape de construction 3 @showdialog

![sbs3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs03.webp)

## Étape de construction 4 @showdialog

![sbs4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs04.webp)

## Étape de construction 5 @showdialog

![sbs5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs05.webp)

## Étape de construction 6 @showdialog

![sbs6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs06.webp)

## Étape de construction 7 @showdialog

![sbs7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs07.webp)

## Étape de construction 8 @showdialog

![sbs8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs08.webp)

## Étape de construction 9 @showdialog

![sbs9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs09.webp)

## Étape de construction 10 (facultative) @showdialog

![sbs10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs10.webp)

_Remarque : Si tu as le CHARGE pour micro:bit, tu peux l'utiliser ici!_

## Activité 2 : Programme ton projet @showdialog

Il est maintenant temps de donner vie à ton modèle de ferme avec du code! Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de programmation 1 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de programmation 2

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code dans ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêts à **modifier** notre ferme d'algues!

**Astuces pour le tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu veux plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!
4. Après chaque changement, `|télécharge|` le nouveau code sur ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Étape de modification 1

Commence par secouer doucement la corde attachée à ton micro:bit.

Que remarques-tu? Regarde l'écran DEL de ton micro:bit.

~hint Dis-m'en plus!

-   **Entrée** : Ton micro:bit peut détecter les mouvements grâce à son [accéléromètre](https://microbit.org/get-started/features/sensors/#accelerometer).
-   **Sortie** : En ce moment, quand il détecte une secousse, il s'allume avec un symbole de poisson!
    hint~

```blocks
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # . # # .
        # # # . #
        # . # # .
        . . . . .
        `)
})
```

## Étape de modification 2

Changeons ce qui s'affiche à l'écran quand le micro:bit détecte un mouvement.

En ce moment, il affiche un poisson. Essaie plutôt de créer un symbole d'avertissement ou un tout autre dessin!

~hint Dis-m'en plus!

-   Modifie le code à l'intérieur du bloc ``||input:on shake||`` pour le remplacer par ton propre dessin, comme un point d'exclamation!
-   Clique sur les DEL pour les allumer ou les éteindre.
-   Télécharge ton nouveau code pour le tester.
    hint~

```blocks
input.onGesture(Gesture.Shake, function () {
    // @highlight
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
```

## Étape de modification 3

Dans de vraies fermes d'algues, l'alerte ne s'afficherait pas sous l'eau, elle serait envoyée à un fermier sur terre! Nous pouvons utiliser la [radio](https://microbit.org/get-started/features/radio-and-pins/) du micro:bit pour envoyer cette alerte.

## Étape de modification 4

D'abord, nous devons ajouter le bloc ``||radio:set group||`` dans un bloc ``||basic:on start||`` pour nous assurer que les deux micro:bit sont sur le même canal radio. Ainsi, ils peuvent « se parler ».

```blocks
// @highlight
radio.setGroup(5)
```

## Étape de modification 5

Ensuite, nous devons envoyer une alerte radio au fermier _quand les cordes sont secouées._

Fais glisser le bloc ``||radio:radio send string||`` dans le bloc ``||input:on shake||``. Écris « ALERT » dans l'espace vide.

```blocks
input.onGesture(Gesture.Shake, function () {
    // @highlight
    radio.sendString("ALERT")
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
```

## Étape de modification 6

Maintenant, ajoute un deuxième événement qui indique au micro:bit du fermier quoi faire quand un signal « ALERT » est reçu.

~hint Dis-m'en plus!

-   Va dans la catégorie ``||radio:Radio||`` et fais glisser le bloc ``||radio:on radio received||`` dans l'espace de travail.
    hint~

```block
radio.onReceivedString(function (receivedString) {
	
})
```

## Étape de modification 7

Déplace le bloc ``||basic:show LEDs||`` vers ce nouvel événement.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("ALERT")
})
```

## Étape de modification 8

Télécharge ce nouveau code sur le micro:bit attaché à ta ferme. Ensuite, télécharge le même code sur un deuxième micro:bit qui restera avec le fermier.

Assure-toi que les deux micro:bit ont une source d'alimentation. Ensuite, teste l'alerte en secouant les cordes à nouveau!

~hint Dis-m'en plus!

-   Le micro:bit attaché à la ferme n'affiche plus le symbole d'alerte. Le micro:bit qui reste avec le fermier l'affiche!
    hint~

## Défi! @showdialog

Améliorons encore ton système d'alerte!

1. Ajoute un son pour attirer l'attention du fermier.
2. Ajoute un moyen d'effacer l'alerte après que le fermier a libéré l'animal.

## Étape du défi 1

Pour ajouter un son, fais glisser un bloc ``||music:play tone||`` dans l'événement ``||radio:on received string||``.

Ajuste la note et le nombre de temps pour que le son attire l'attention!

```blocks
radio.onReceivedString(function (receivedString) {
basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    // @highlight
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
```

## Étape du défi 2

Nous devons _effacer_ l'alerte une fois que le fermier l'a vue.

Ajoute un événement d'appui sur bouton de la catégorie ``||input:Input||``. Ensuite, fais glisser un bloc ``||basic:clear screen||`` à l'intérieur.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
```

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose de difficile dans ce projet.

Comment as-tu réussi à le résoudre? Comment t'es-tu senti?

Quelle est une autre chose que tu pourrais faire pour améliorer ta ferme?

## Terminer et approfondir @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

Une fois que tu sors du tutoriel, tu auras accès à plus de blocs MakeCode. Essaie d'utiliser de nouveaux blocs pour améliorer encore plus ton système d'alerte! Voici quelques idées :

-   Ajoute une animation DEL _clignotante_ quand l'alerte est active pour la rendre plus visible
-   Change la mélodie pour un son plus fort ou plus urgent, comme une sirène

# Ferme d'algues intelligente - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
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

Construisons notre ferme d'algues intelligente! Nous ferons cela en trois parties :

1. **Construis** ton modèle
2. **Ajoute du code** pour qu'il puisse détecter les mouvements
3. **Utilise** et **teste** ton modèle pour voir comment il fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-render.webp" alt="Rendu complet du modèle de ferme d'algues" style="display: block; width: 70%; margin:auto;">

## Fournitures pour la construction @showdialog

![sbs0A](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-seaweedfarming-sbs0A.webp)

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

Il est maintenant temps de donner vie à ton modèle avec du code! Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de programmation 1 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de programmation 2

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code dans ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêts à **tester** notre modèle de ferme pour voir comment il détecte quand des animaux s'emmêlent dans ses cordes.

**Astuces pour le tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu veux plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule!**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Étape 1

Observe attentivement le modèle que tu viens de construire. Peux-tu nommer toutes ses parties?

~hint Dis-m'en plus!
Ce modèle utilise :

-   **Blocs de construction :** une plaque de base, deux cadres blancs moyens, quatre cadres blancs longs et quatre connecteurs cubiques
-   **Fournitures artisanales :** de la corde, de l'élastique, de la laine ou de la ficelle et du papier de bricolage
-   **Pièces robotiques :** un micro:bit avec un [accéléromètre](https://microbit.org/get-started/features/sensors/#accelerometer)
    hint~

## Étape 2

Imagine que c'est une vraie ferme d'algues dans l'océan.

Que représentent ces différentes parties? Pourquoi penses-tu que le micro:bit est suspendu aux cordes?

~hint Dis-m'en plus!

-   Les cordes représentent les lignes où poussent les algues. Nous avons fabriqué nos propres algues avec du papier de bricolage!
-   Les blocs de construction représentent les poteaux qui ancrent les lignes d'algues. Ils gardent les cordes stables dans l'eau.
-   Le micro:bit est suspendu à l'une des cordes afin de pouvoir détecter chaque mouvement de la corde. Par exemple, cela pourrait arriver si un animal s'y emmêlait.
    hint~

## Étape 4

Il est temps de tester le modèle.

Essaie de tirer doucement ou de secouer différentes parties de la corde. Quand le micro:bit réagit-il?

~hint Dis-m'en plus!

-   Le capteur réagit le mieux quand tu secoues la corde la plus proche de lui. Si le mouvement est trop éloigné, il n'est pas toujours détecté.
-   Quand le micro:bit détecte un mouvement, il affiche un poisson sur les DEL.
    hint~

```blocks
input.onGesture(Gesture.Shake, function () {
    // @highlight
    basic.showLeds(`
        . . . . .
        # . # # .
        # # # . #
        # . # # .
        . . . . .
        `)
})
```

## Étape 5

De vraies fermes d'algues pourraient aussi être touchées par les _vagues_. Testons si ton capteur peut faire la différence entre les vagues et un animal coincé.

Balance doucement ta corde ou ton modèle d'avant en arrière, en imitant le mouvement des vagues de l'océan. Le micro:bit réagit-il?

~hint Dis-m'en plus!

-   Le capteur devrait être capable de faire la différence entre les mouvements prévisibles des vagues et une secousse soudaine et imprévisible.
-   En ce moment, le bloc ``||input:on shake||`` est utilisé pour envoyer l'alerte. Ce bloc est conçu pour détecter un mouvement soudain et inhabituel, comme un animal qui heurte les cordes à répétition.
    hint~

```blocks
// @highlight
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

## Étape 6

Prenons une minute pour réfléchir.

Qu'est-ce que ton modèle fait bien?

~hint Dis-m'en plus!

-   Il peut faire la différence entre le doux balancement des vagues et la secousse soudaine causée par un animal.
    hint~

## Étape 7

Qu'est-ce qui pourrait être amélioré dans ce modèle? Comment pourrais-tu le rendre encore meilleur?

~hint Dis-m'en plus!
Nous pourrions :

-   ajouter plus de capteurs le long des cordes pour aider à détecter les mouvements partout dans la ferme.
-   utiliser des cordes de couleurs vives pour qu'il soit plus facile pour les animaux de les voir et de les éviter.
-   resserrer les cordes! Des recherches montrent que les animaux sont moins susceptibles de rester coincés dans des cordes bien tendues.
    hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Fais la liste de 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose que tu aimerais approfondir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

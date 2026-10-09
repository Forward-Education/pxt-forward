# Stockage d'énergie de l'éolienne - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setEnabled(false)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(-50)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(batteryLevel)
})
batteryLevel = 0
basic.forever(function () {
    if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
        `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
        }
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
        `)
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons notre éolienne! Nous allons faire cela en quatre parties :

1. **Construire** ton éolienne
2. **Ajouter du code** pour lui donner vie
3. **Modifier** le code pour apprendre comment il fonctionne
4. Compléter un **défi** pour améliorer l'éolienne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-render.webp" alt="Rendu complet de l'éolienne" style="display: block; width: 70%; margin:auto;">

## Construction, étape 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs01.webp)

## Construction, étape 2 @showdialog

![sbs2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs02.webp)

## Construction, étape 3 @showdialog

![sbs3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs03.webp)

## Construction, étape 4 @showdialog

![sbs4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs04.webp)

## Construction, étape 5 @showdialog

![sbs5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs05.webp)

## Construction, étape 6 @showdialog

![sbs6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs06.webp)

## Construction, étape 7 @showdialog

![sbs7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs07.webp)

## Construction, étape 8 @showdialog

![sbs8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs08.webp)

## Construction, étape 9 @showdialog

![sbs9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs09.webp)

## Construction, étape 10 @showdialog

![sbs10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-windsample-sbs10.webp)

## Activité 2 : Programme ton projet @showdialog

Il est temps de donner vie à ton éolienne avec du code!

Le code sera les instructions qui indiquent à notre micro:bit quoi faire.

## Programmation, étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 40%; margin:auto;">

## Programmation, étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Programmation, étape 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêts à **modifier** notre éolienne!

**Astuces du tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu es prêt pour plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!
4. Après chaque changement, `|Télécharger|` le nouveau code sur ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modifier, étape 1

Prends un moment pour réviser le code de départ. Repère les éléments suivants :

-   Comment l'éolienne tourne : trouve les **événements** `||fwdSensors:on dial turned||` et `||fwdSensors:on touch down||` qui contrôlent le moteur.
-   Comment la maison s'illumine : trouve l'**instruction conditionnelle** (si/alors) qui allume les lumières de la maison si l'éolienne tourne (c'est-à-dire qu'elle génère de l'électricité!)

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setEnabled(false)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(-50)
})

basic.forever(function () {
    // @highlight
    if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
        `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
        `)
    }
})
```

## Modifier, étape 2

Notre éolienne possède aussi une pile pour stocker de l'énergie pour plus tard.

Au début du programme, la variable `||variables:batteryLevel||` est réglée à « 0 » ou 0 %. Pendant que l'éolienne tourne, elle recharge lentement la pile et le nombre dans la variable augmente de 1 % toutes les 2 secondes. Quand la pile est pleine, elle s'arrête à 100 %.

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    basic.showNumber(batteryLevel)
})
// @highlight
batteryLevel = 0
basic.forever(function () {
    if (fwdBase.middleServo.enabled() == true) {
        // @highlight
        batteryLevel += 1
        // @highlight
        if (batteryLevel > 100) {
            batteryLevel = 100
        }
        // @highlight
        basic.pause(2000)
    }
})
```

## Modifier, étape 3

En ce moment, il n'y a aucun signe évident pour nous indiquer quand la pile a atteint sa pleine charge. Ajoutons un bloc `||music:play tone||` au code pour jouer une note quand la pile atteint 100 %.

Où devrions-nous placer ce bloc dans notre code existant?

~hint Dis-m'en plus!

-   Ajoute le bloc à l'intérieur de l'**instruction conditionnelle** qui empêche le `||variables:batteryLevel||` de dépasser 100 %.
-   Dès que le `||variables:batteryLevel||` est réglé à 100 %, la note jouera.
    hint~

```block
 if (batteryLevel > 100) {
    batteryLevel = 100
    // @highlight
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
```

## Modifier, étape 4

En ce moment, la pile se charge de 1 % toutes les 2 secondes. Comment pourrions-nous faire en sorte que la charge se fasse plus _rapidement_?

~hint Dis-m'en plus!

-   Tu pourrais _augmenter_ la valeur dans le bloc `||variables:change batteryLevel by||` ou _diminuer_ la valeur dans le bloc `||pause||`.
-   Essaie l'une de ces options maintenant!
    hint~

```block
    if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
        `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        // @highlight
        basic.pause(500)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
        `)
    }
```

## Modifier, étape 5

En ce moment, la maison ne s'illumine que quand l'éolienne tourne. Comme nous l'avons appris, nous pouvons aussi alimenter la maison avec notre pile, tant qu'il y a de la charge!

Comment pourrions-nous écrire une autre instruction conditionnelle pour dire au micro:bit de faire cela?

~hint Dis-m'en plus!

-   Rappelle-toi : les vraies éoliennes stockent l'énergie dans des piles pour garder les lumières et les machines en marche même quand il n'y a pas de vent.
    hint~

## Modifier, étape 6

Nous pouvons agrandir notre instruction conditionnelle existante en appuyant sur l'icône « + » en bas. Cela ajoutera une instruction **sinon si** qui ne s'exécutera que quand l'éolienne est éteinte!

```block
 if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(500)
    } else if (false) {
    	
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
```

## Modifier, étape 7

Cette nouvelle instruction conditionnelle devrait vérifier si le niveau de la pile est plus grand que 0.

Fais glisser un bloc `||variables:batteryLevel||` et un bloc `||logic:>||` dans l'espace de travail. Comment devrais-tu combiner ceux-ci avec la nouvelle instruction conditionnelle?

~hint Dis-m'en plus!

-   Combine ces blocs pour créer l'expression suivante à l'intérieur de l'instruction conditionnelle : **batteryLevel > 0**
    hint~

```block
if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(500)
    } else if (batteryLevel > 0) {
    	
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
```

## Modifier, étape 8

Fais un clic droit sur le bloc `||basic:show LEDs||` et duplique-le. Ajoute le nouveau bloc à l'intérieur de la nouvelle condition.

```block
if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(500)
    } else if (batteryLevel > 0) {
        // @highlight
    	basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
```

## Modifier, étape 9

Pour rendre les choses réalistes, la pile devrait se _décharger_ pendant qu'elle est utilisée pour alimenter la maison.

Nous avons utilisé le bloc `||variables:change batteryLevel by||` pour _augmenter_ la charge de la pile au fil du temps. Comment pourrions-nous utiliser ce bloc pour _diminuer_ la charge au fil du temps?

~hint Dis-m'en plus!

-   Ajoute un bloc `||variables:change batteryLevel by||` à la nouvelle instruction conditionnelle. Change la valeur à « -1 » pour diminuer la charge.
-   Ajoute un bloc `||basic:pause||` pour contrôler la vitesse à laquelle la pile se décharge.
    hint~

```block
if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(2000)
    } else if (batteryLevel > 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        // @highlight
        batteryLevel += -1
        // @highlight
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
```

## Modifier, étape 10

Testons cette nouvelle instruction conditionnelle.

Télécharge ton nouveau code. Ensuite, tourne le cadran pour faire tourner l'éolienne et charger la pile. Ensuite, arrête de faire tourner l'éolienne. Que se passe-t-il quand la pile a de l'énergie stockée?

~hint Dis-m'en plus!

-   Tant que la pile a une charge, elle pourra continuer à illuminer la maison même quand l'éolienne arrête de tourner.
-   Une fois que la pile atteint 0 %, les lumières s'éteignent.
-   Rappelle-toi, tu peux appuyer sur le bouton A en tout temps pour voir le niveau de la pile!
    hint~

## C'est l'heure du défi! @showdialog

Améliorons encore plus ton éolienne. Peux-tu :

1. ajouter une alerte sonore quand la maison risque de ne plus avoir d'électricité du tout?
2. ajuster la vitesse à laquelle la pile se décharge?

## Défi, étape 1

Pour ajouter une alerte quand la pile atteint 0 %, ajoute un bloc `||music:play tone||` dans la condition finale **sinon**.

Change la note pour qu'elle soit différente de la note jouée quand la pile est pleine!

```block
if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(2000)
    } else if (batteryLevel > 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        batteryLevel += -1
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        // @highlight
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)

    }
```

## Défi, étape 3

Enfin, pour ajuster la vitesse à laquelle la pile se décharge, change les nombres à l'intérieur des blocs `||variables:change batteryLevel by||` et `||basic:pause||`.

Essaie d'ajuster ces nombres pour que la pile se charge deux fois plus vite qu'elle ne se décharge.

```block
if (fwdBase.middleServo.enabled() == true) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        batteryLevel += 1
        if (batteryLevel > 100) {
            batteryLevel = 100
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        basic.pause(500)
    } else if (batteryLevel > 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # . # .
            . # # # .
            `)
        // @highlight
        batteryLevel += -1
        // @highlight
        basic.pause(1000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
```

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui était difficile.

Comment l'as-tu résolu? Comment cela t'a-t-il fait sentir?

Quelle est une chose supplémentaire que tu pourrais faire pour améliorer ta ferme?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

# Composteur rotatif solaire - Tutoriel Modifier

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

Construisons un composteur rotatif alimenté par le soleil! Nous allons faire cela en quatre parties :

1. **Construis** ton composteur
2. **Ajoute du code** pour lui donner vie
3. **Modifie** ton composteur pour comprendre comment il fonctionne
4. Relève un **défi** pour l'améliorer

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

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Codage Étape 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêts à **modifier** notre composteur rotatif!

**Conseils pour le tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu es prêt pour plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!
4. Après chaque changement, `|Télécharge|` le nouveau code sur ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modification Étape 1

Testons notre composteur rotatif! Éclaire le capteur solaire pendant 10 à 30 secondes. Cette lumière représente la lumière du soleil.

Note ce que tu observes avec autant de détails que possible. Remarques-tu des motifs?

~hint Dis-m'en plus!
Pendant que la lumière est sur le capteur, le moteur :

1. S'allume
2. Tourne pendant 2 secondes
3. S'éteint
4. Reste immobile pendant 5 secondes

Ce cycle se répète encore et encore.
hint~

## Modification Étape 2

Que se passe-t-il quand tu éloignes la lumière du capteur solaire?

~hint Dis-m'en plus!

-   Le composteur arrête de tourner.
    hint~

## Modification Étape 3

Quel bloc de code penses-tu fait tourner le composteur _quand la lumière est présente_?

~hint Dis-m'en plus!

-   La boucle `||loops:while||` contrôle le moteur.

-   Quand le capteur solaire détecte une forte lumière du soleil (plus de 95 %), alors le moteur s'allume.

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

## Modification Étape 4

Que penses-tu qu'il arrivera si tu changes le seuil (le niveau de lumière) pour le capteur solaire?

Change le nombre dans le bloc `||fwdSensors:solar1 light level over||` à une valeur plus basse. Que remarques-tu?

~hint Dis-m'en plus!

-   Le seuil contrôle quand le composteur commence à tourner.
-   Si tu baisses le seuil, le composteur tournera même s'il y a moins de lumière du soleil.
    hint~

```block
    // @highlight
    while (fwdSensors.solar1.isPastThreshold(50, fwdEnums.OverUnder.Over)) {
    	
    }
```

## Modification Étape 5

Remets le seuil à 95 %.

```block
    // @highlight
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
    	
    }
```

## Modification Étape 6

Quels blocs de code précis penses-tu font tourner et arrêter le composteur?

~hint Dis-m'en plus!

-   Le bloc `||fwdMotors:set leftServo ON||` allume le moteur et fait tourner le composteur.

-   Le bloc `||fwdMotors:set leftServo OFF||` éteint le moteur et arrête le composteur.

hint~

```block
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
        // @highlight
        fwdBase.leftServo.setEnabled(true)
        basic.pause(2000)
        // @highlight
        fwdBase.leftServo.setEnabled(false)
        basic.pause(5000)
    }
```

## Modification Étape 7

Pourquoi penses-tu qu'il y a deux blocs `||basic:pause||`?

Essaie de les retirer et observe ce qui se passe!

~hint Dis-m'en plus!

-   Les pauses contrôlent combien de temps le moteur tourne et combien de temps il attend avant la prochaine rotation.
-   Sans les pauses, le moteur s'allumerait et s'éteindrait si vite qu'on ne pourrait même pas le voir!
    hint~

```blocks
basic.forever(function () {
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
        fwdBase.leftServo.setEnabled(true)
        fwdBase.leftServo.setEnabled(false)
    }
})
```

## Modification Étape 8

Remets les blocs `||basic:pause||` dans le code.

```block
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
        fwdBase.leftServo.setEnabled(true)
        // @highlight
        basic.pause(2000)
        fwdBase.leftServo.setEnabled(false)
        // @highlight
        basic.pause(5000)
    }
```

## Modification Étape 9

Repense à ce que nous avons appris dans la leçon. Le composteur doit tourner assez pour mélanger le compost, mais pas _trop_ souvent, sinon il gaspille de l'énergie. Combien de temps le composteur devrait-il tourner? Combien de temps devrait-il faire une pause?

Fais une recherche rapide et ajuste les nombres dans les blocs `||basic:pause||` selon ce que tu apprends.

## C'est l'heure du défi! @showdialog

Ajoutons une sortie visuelle pour montrer à quelle étape du cycle de compostage nous sommes.

## Défi Étape 1

Fais glisser un bloc `||basic:show LEDs||` et un bloc `||basic:clear screen||` dans l'espace de travail. Où devrions-nous les ajouter dans notre code existant pour montrer une animation _pendant_ que le composteur tourne?

~hint Dis-m'en plus!

-   Ajoute le bloc `||basic:show LEDs||` juste après que le moteur s'allume pour montrer que le composteur tourne.

-   Ajoute le bloc `||basic:clear screen||` après que le moteur s'éteigne pour montrer que le composteur s'est arrêté.

hint~

```block
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
        fwdBase.leftServo.setEnabled(true)
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(2000)
        fwdBase.leftServo.setEnabled(false)
        // @highlight
        basic.clearScreen()
        basic.pause(5000)
    }
```

## Défi Étape 2

Quel genre de symbole devrions-nous utiliser pour l'animation?

Tu pourrais créer une roue qui tourne, un visage souriant, ou autre chose. Sois créatif et dessine le tien!

```block
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
        fwdBase.leftServo.setEnabled(true)
        // @highlight
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
        fwdBase.leftServo.setEnabled(false)
        basic.clearScreen()
        basic.pause(5000)
    }
```

## Défi Étape 3

Au lieu d'effacer l'animation, quel symbole pourrait représenter la deuxième étape du compostage (quand le composteur se repose)?

Essaie par toi-même, puis vérifie l'ampoule pour voir notre solution!

```block
    while (fwdSensors.solar1.isPastThreshold(95, fwdEnums.OverUnder.Over)) {
        fwdBase.leftServo.setEnabled(true)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
        fwdBase.leftServo.setEnabled(false)
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
    }
```

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui était difficile.

Comment l'as-tu résolu? Comment cela t'a-t-il fait sentir?

Quelle est une chose que tu pourrais faire pour améliorer ton composteur rotatif?

## Réflexion @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

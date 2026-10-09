# Ferme intelligente axée sur les données - Tutoriel de modification

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
let pumpStop = 0
let pumpStart = 0
input.onButtonPressed(Button.A, function () {
    pumpStart = input.runningTime()
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
    pumpStop = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un système agricole hydroponique intelligent! Nous allons faire cela en 4 parties :

1. **Construis** notre système agricole intelligent
2. **Ajoute du code** pour le faire prendre vie
3. **Modifie** le code pour comprendre comment il fonctionne
4. Complète un **défi** pour améliorer notre système agricole

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-projectrender.webp" alt="Rendu complet du feu de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs01.webp)

## Étape de construction 2 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs02.webp)

## Étape de construction 3 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs03.webp)

## Étape de construction 4 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs04.webp)

## Étape de construction 5 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs05.webp)

## Étape de construction 6 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs06.webp)

## Étape de construction 7 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs07.webp)

## Étape de construction 8 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs08.webp)

## Étape de construction 9 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs09.webp)

_Note : Pour l'instant, tu peux placer le capteur d'humidité dans une tasse vide._

## Étape de construction 10 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs10.webp)

## Étape de construction 11 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs11.webp)

## Étape de construction 12 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs12.webp)

## Étape de construction 13 @showdialog

![smartfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-smartfarm-sbs13.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour le faire prendre vie avec du code!

Le code sera les instructions qui disent à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Allumer la plaque de connexion" style="display: block; width: 40%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet de la ferme intelligente" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes prêts à **modifier** le code de notre système agricole intelligent!

**Astuces**

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!
4. N'oublie pas de retélécharger tous les changements que tu apportes au code!

## Étape de modification 1

Regardons les instructions (autrement dit le code!) que nous avons ajoutées à notre système agricole intelligent. Pense aux questions suivantes :

-   Quand penses-tu que la pompe à eau s'allumera? Quand s'éteindra-t-elle?
-   Que se passe-t-il quand tu appuies sur B?

## Étape de modification 2

Testons-le! Assure-toi que la pompe est dans une tasse avec de l'eau, que le capteur d'humidité est dans une tasse vide, et que le tuyau est bien fixé.

Appuie sur A et observe ce qui se passe! Tes prédictions étaient-elles bonnes?

~hint Dis-m'en plus!

-   Appuyer sur A est un **événement** qui déclenche le code en dessous, dans l'ordre.
-   Tant que le niveau d'humidité reste sous 20 %, la pompe reste allumée pour arroser la plante. Nous faisons cela à l'aide d'une boucle `||loops:while||`. Une boucle `||loops:while||` répète une série d'instructions jusqu'à ce qu'une certaine condition soit atteinte.
-   Quand le niveau d'humidité atteint 20 % ou plus, le code _après_ la boucle `||loops:while||` s'exécute, alors la pompe s'éteint.
    hint~

```block
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        // @highlight
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
```

## Étape de modification 3

Une fois que la pompe s'est arrêtée, appuie sur B. Que s'est-il passé? Ta prédiction était-elle bonne?

~hint Dis-m'en plus!

-   Quand tu appuies sur B, tu vois une horloge sur les DEL du micro:bit. Ensuite, tu vois un nombre.
-   Ce nombre est la durée pendant laquelle la pompe a fonctionné (en secondes).
-   Cela a été calculé en gardant une trace du moment où la pompe s'est allumée et éteinte à l'aide des `||variables:Variables||`. Nous avons soustrait le temps de `||variables:pumpStart||` du temps de `||variables:pumpStop||` et divisé le résultat par 1000 pour convertir en secondes.
    hint~

```blocks
let pumpStart = 0
let pumpStop = 0
input.onButtonPressed(Button.A, function () {
    // @highlight
    pumpStart = input.runningTime()
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
    // @highlight
    pumpStop = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # # #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    // @highlight
    basic.showNumber(Math.round((pumpStop - pumpStart) / 1000))
    basic.pause(2000)
    basic.clearScreen()
})
```

## Étape de modification 4

Que penses-tu qu'il arrivera si tu soulèves la partie inférieure de ton capteur d'humidité hors de l'eau et que tu la maintiens là? Essaie maintenant.

Est-ce ce à quoi tu t'attendais?

~hint Dis-m'en plus!

-   Tu as peut-être remarqué que rien ne s'est passé! C'est parce que la boucle `||loops:while||` se trouve à l'intérieur du bloc `||input:on A pressed||`.
-   Cela signifie que le capteur ne vérifie l'humidité qu'une seule fois, quand A est pressé.
    hint~

```blocks
let pumpStart = 0
let pumpStop = 0
// @highlight
input.onButtonPressed(Button.A, function () {
    pumpStart = input.runningTime()
    // @highlight
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
    pumpStop = input.runningTime()
})
```

## Étape de modification 5

Nous voulons que notre système agricole intelligent vérifie _automatiquement_ les niveaux d'humidité _régulièrement_. Essaie de déplacer ce segment de code dans une boucle `||basic:forever||` de la catégorie `||basic:Basic||`. Télécharge le nouveau code.

Maintenant, déplace le bas du capteur d'humidité dans l'eau et hors de l'eau. Qu'est-ce qui a changé? Que se passe-t-il quand tu appuies sur B?

~hint Dis-m'en plus!

-   Le capteur mesure maintenant les niveaux d'humidité _constamment_. La pompe devrait démarrer _n'importe quand_ que l'humidité est sous 20 %.
-   Utiliser une boucle `||basic:forever||` brise cependant le chronomètre de la pompe. Si tu appuies sur B, tu ne verras toujours que « 0 » sur les DEL. Pourquoi penses-tu que cela se produit?
-   Peux-tu penser à une autre boucle que nous pourrions utiliser à la place de `||basic:forever||` qui ne briserait peut-être pas le chronomètre?
    hint~

```blocks
let pumpStop = 0
let pumpStart = 0
// @highlight
basic.forever(function () {
    pumpStart = input.runningTime()
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
    pumpStop = input.runningTime()
})
```

## Étape de modification 6

Essayons de déplacer le code dans une boucle `||loops: every 500 ms||`. Disons que nous voulons vérifier l'humidité toutes les 2 minutes. Combien de millisecondes cela représente-t-il?

Essaie ton nouveau code!

~hint Dis-m'en plus!

-   Change « 500 ms » à « 120000 ms » pour exécuter la boucle toutes les 2 minutes.
    hint~

```blocks
let pumpStop = 0
let pumpStart = 0
// @highlight
loops.everyInterval(120000, function () {
    pumpStart = input.runningTime()
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
    pumpStop = input.runningTime()
})
```

## C'est le temps du défi ! @showdialog

Attendre 2 minutes pour voir si le système d'arrosage redémarre peut être un peu stressant. On ne peut pas vraiment savoir si le code fonctionne encore à moins de rester là à regarder. Ce n'est pas très utile pour un fermier et cela va à l'encontre du but d'avoir un système automatisé.

Ajoutons des sons et des visuels pour indiquer à notre fermier où nous en sommes dans le programme. Cela améliorera l'expérience utilisateur et le rassurera que le système agricole fait toujours son travail.

## Étape du défi 1

D'abord, utilisons un son pour indiquer à l'utilisateur que la boucle principale a commencé. Va dans la catégorie `||music:Music||` et glisse le bloc `||music:play tone middle C for 1 beat until done||` dans l'espace de travail.

Où devrions-nous placer ce bloc?

~hint Dis-m'en plus!

-   Ce bloc devrait être le premier bloc sous la boucle `||loops:every 120000 ms||`.
-   Maintenant, chaque fois que le capteur est sur le point de vérifier le niveau d'humidité, l'utilisateur entendra un bip.
    hint~

```blocks
let pumpStop = 0
let pumpStart = 0
loops.everyInterval(120000, function () {
    // @highlight
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    pumpStart = input.runningTime()
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
    }
    pumpStop = input.runningTime()
})
```

## Étape du défi 2

Ensuite, utilisons l'anneau de DEL pour montrer que l'arrosage est en cours. Va dans la catégorie `||fwdSensors:Sensors||` et glisse les blocs `||fwdSensors:set ledRing ‘0’ to red||` et `||fwdSensors:rotate ledRing pattern by ‘1’||` dans l'espace de travail.

~hint Dis-m'en plus!

-   Le bloc `||fwdSensors:set ledRing '0' to red||` allumera une seule DEL sur l'anneau de DEL.
-   Le bloc `||fwdSensors:rotate ledRing pattern by '1'||` éteindra la DEL actuelle et allumera celle à sa droite.
    hint~

## Étape du défi 3

Ton but est de faire bouger le point rouge autour de l'anneau de DEL _pendant que la plante est arrosée_. Où devrais-tu placer ces deux blocs pour que cela se produise?

Essaie-le maintenant. N'oublie pas de télécharger ton code pour tester tes changements.

~hint Dis-m'en plus!

-   Nous voulons que la seule DEL s'allume au début de la boucle principale - `||loops:every 120000ms||`. Place ce bloc sous le bloc `||music:play tone||`.
-   Pour faire bouger la DEL allumée autour de l'anneau de DEL _pendant_ l'arrosage, nous allons ajouter le bloc `||fwdSensors:rotate ledRing pattern by '1'||` à l'intérieur de la boucle `||loops:while||`.
-   Que se passe-t-il si tu places les deux blocs à l'intérieur de la boucle `||loops:while||`? Essaie-le!
    hint~

```blocks
let pumpStop = 0
let pumpStart = 0
loops.everyInterval(120000, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // @highlight
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    pumpStart = input.runningTime()
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
        // @highlight
        fwdLights.ledRing1.rotate(1)
    }
    pumpStop = input.runningTime()
})
```

## Étape du défi 4

Une fois que la plante a été arrosée avec succès, nous voulons changer toutes les DEL de l'anneau de DEL en vert.

Quel bloc devrais-tu utiliser pour cela et où devrait-il être placé dans le code?

~hint Dis-m'en plus!

-   Pour mettre _toutes_ les DEL de l'anneau de DEL en vert _après_ que la plante a été arrosée, ajoute le bloc `||fwdSensors:set all ledRing LEDs to green||` tout en bas de notre code.
    hint~

```blocks
let pumpStop = 0
let pumpStart = 0
loops.everyInterval(120000, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    pumpStart = input.runningTime()
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
        fwdLights.ledRing1.rotate(1)
    }
    pumpStop = input.runningTime()
    // @highlight
    fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
})
```

## Étape du défi 5

Tu remarqueras peut-être maintenant que les DEL restent vertes lors du deuxième tour de la boucle principale. Nous pouvons ajuster cela en ajoutant un bloc `||fwdSensors:set all ledRing LEDs to black||`.

~hint Dis-m'en plus!

-   Cela réinitialise les DEL au noir pour chaque itération de la boucle principale.
    hint~

```blocks
let pumpStop = 0
let pumpStart = 0
loops.everyInterval(120000, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // @highlight
    fwdLights.ledRing1.setAllPixelsColor(0x000000)
    fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    pumpStart = input.runningTime()
    // @collapsed
    while (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Under)) {
        fwdMotors.pump.timedRun(500)
        basic.pause(1000)
        fwdLights.ledRing1.rotate(1)
    }
    pumpStop = input.runningTime()
    fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
})
```

## Explore

Y a-t-il des parties du code que tu ne comprends pas encore? C'est le moment d'explorer!

~hint Dis-m'en plus!
Suis ces étapes :

1. Trouve une partie du code sur laquelle tu aimerais en apprendre plus
2. Fais un seul changement à ce bloc
3. Télécharge le nouveau code
4. Essaie-le et observe ce qui a changé
5. Répète!
   hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis au défi.

Comment as-tu surmonté ce défi? Comment cela t'a-t-il fait sentir?

## Réflexion @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

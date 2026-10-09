# La force puissante du vent - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Construisons une éolienne! Nous allons le faire en quatre parties :

1. **Construire** notre éolienne
2. **Ajouter du code** pour la faire bouger
3. **Modifier** notre code pour comprendre son fonctionnement
4. Relever un petit **défi** de programmation

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-render.webp" alt="Rendu complet de l'éolienne" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![Prends un long cadre blanc. Passe un servomoteur continu à travers le trou de servo du cadre. Assure-toi que le fil du servo est le plus proche de l'extrémité longue du cadre.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs01.webp)

## Étape de construction 2 @showdialog

![Connecte un bloc circulaire au servomoteur continu.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs02.webp)

## Étape de construction 3 @showdialog

![Ajoute un connecteur cube au bas du long cadre.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs03.webp).

## Étape de construction 4 @showdialog

![Connecte le long cadre à la plaque de base, de façon à ce qu'il se tienne debout comme une éolienne.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs04.webp)

## Étape de construction 5 @showdialog

![Fixe la carte d'extension au milieu d'un bloc de construction long. Connecte le servomoteur au port de moteur du milieu.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs05.webp)

## Étape de construction 6 @showdialog

![Prends la molette et un câble court. Connecte-les. Branche l'autre extrémité du câble dans un port de capteur de la carte d'extension.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs06.webp)

## Étape de construction 7 @showdialog

![Connecte ton micro:bit à l'ordinateur via le port USB.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs07.webp)

## Étape de construction 8 @showdialog

![Glisse le micro:bit dans la carte d'extension.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs08.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
```

## Étape de programmation 1 @showdialog

IMPORTANT! Assure-toi que la carte d'extension du kit d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 45%; margin:auto;">

## Étape de programmation 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de programmation 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes prêts à **modifier** notre éolienne!

**Astuces pour le tutoriel**

En parcourant les prochaines étapes :

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt pour plus d'informations, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!
4. Assure-toi de `|télécharger|` tout code modifié sur ton micro:bit pour le tester.

## Modification, étape 1

Le code ci-dessous fera tourner notre éolienne.

Testons-le d'abord. Que se passe-t-il quand tu tournes la molette vers la droite? Que se passe-t-il quand tu appuies sur la molette?

~hint Dis-m'en plus!

-   Le bloc de construction vert commence à tourner quand tu tournes la molette vers la droite. Il s'arrête quand tu appuies sur la molette.
    hint~

## Modification, étape 2

Que se passe-t-il quand tu augmentes le nombre dans `||fwdMotors:set middleServo to 50%||`? Essaie de le changer à 100 %!

~hint Dis-m'en plus!

-   Le bloc bleu représente la sortie ou le résultat de notre code. Quand nous augmentons le nombre, l'éolienne tourne plus vite!
-   N'oublie pas de télécharger le nouveau code sur ton micro:bit.
-   Si tu ne vois pas le changement tout de suite, essaie d'appuyer sur la molette pour arrêter l'éolienne. Puis essaie de la tourner à nouveau.
    hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    // @highlight
    fwdBase.middleServo.setSpeed(100)
})
```

## Modification, étape 3

Que se passe-t-il quand tu diminues le nombre dans `||fwdMotors:set middleServo to 100%||`? Essaie-le!

~hint Dis-m'en plus!

-   Quand nous diminuons le nombre, l'éolienne tourne plus lentement.
    hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    // @highlight
    fwdBase.middleServo.setSpeed(20)
})
```

## Modification, étape 3

Que se passe-t-il quand tu rends le nombre dans `||fwdMotors:set middleServo to 20%||` négatif? Essaie-le!

~hint Dis-m'en plus!

-   Quand tu ajoutes un signe « - » devant le nombre, l'éolienne tourne dans la direction opposée.
    hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    // @highlight
    fwdBase.middleServo.setSpeed(-20)
})
```

## Modification, étape 4

Que se passe-t-il quand tu changes la direction de la flèche dans `||fwdSensors:on dial1 turned difference||`? Essaie-le!

~hint Dis-m'en plus!

-   Le bloc vert représente un événement dans notre code. Cela nous montre comment nous devons interagir avec notre projet pour faire arriver quelque chose.
-   Quand nous changeons la flèche de direction, nous devrons maintenant tourner la molette dans la direction opposée pour déclencher notre code/résultat.
    hint~

```blocks
// @highlight
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(-20)
})
```

## C'est l'heure du défi!

Peux-tu ajouter un autre événement à ton code pour faire tourner l'éolienne dans les deux directions? Réfléchis à comment tu pourrais faire cela, puis passe à l'étape suivante!

## Défi, étape 1

La première chose que nous voulons, c'est faire tourner l'éolienne dans une autre direction. Ouvre la catégorie `||fwdMotors:Motors||` et fais glisser et dépose `||fwdMotors:set leftServo to 50 %||` dans l'espace de travail.

_Remarque : Assure-toi de changer **leftServo** pour **middleServo**, car notre servomoteur est connecté au port du milieu!_

~hint Dis-m'en plus!

-   C'est la sortie que nous voulons obtenir!
-   Remarque : Le bloc sera gris ou hachuré pour l'instant.
    hint~

```block
fwdBase.middleServo.setSpeed(50)
```

## Défi, étape 2

Le nouveau bloc est hachuré parce que nous n'avons pas encore indiqué au micro:bit _quand_ il devrait exécuter ce bloc de sortie. Rappelle-toi, indiquer au micro:bit _quand_ faire quelque chose s'appelle un événement. Ouvre la catégorie `||fwdSensors:Sensors||` et fais glisser et dépose l'événement `||fwdSensors:on dial1 turned difference||` dans l'espace de travail.

~hint Dis-m'en plus!

-   C'est le bloc qui va déclencher la rotation de l'éolienne.
    hint~

```block
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
	
})
```

## Défi, étape 3

Ensuite, comment peux-tu assembler ces deux blocs pour t'assurer que l'éolienne peut tourner dans les deux directions?

## Défi, étape 4

Comment peux-tu changer le code pour que la molette et l'éolienne tournent dans la _même direction_ afin d'imiter la force du vent?

## Défi, étape 5

As-tu réussi? Vérifie l'ampoule avant de cliquer sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(-50)
})
```

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis au défi.

Comment as-tu surmonté ce défi?

Comment cela t'a-t-il fait sentir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

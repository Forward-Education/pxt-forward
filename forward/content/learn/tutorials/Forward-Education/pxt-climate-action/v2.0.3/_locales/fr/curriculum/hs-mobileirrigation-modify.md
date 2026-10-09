# Système d'irrigation mobile - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(25, -25, 1000)
        basic.pause(3000)
        fwdMotors.drive(0, 0, 0)
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fwdMotors.pump.timedRun(1500)
        basic.pause(3000)
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
fwdMotors.setupDriving(fwdBase.rightServo, fwdBase.leftServo)
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.075, fwdEnums.OverUnder.Over)) {
    	
    } else {
    	
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Créons un système d'irrigation mobile! Nous allons le faire en quatre parties :

1. **Construire** notre système d'irrigation mobile
2. **Ajouter du code** pour lui donner vie
3. **Modifier** le code pour comprendre comment il fonctionne
4. Compléter un **défi** pour améliorer la conservation de l'eau

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-render.webp" alt="Rendu complet du système d'irrigation mobile" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs01.webp)

## Étape de construction 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs02.webp)

## Étape de construction 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs03.webp)

## Étape de construction 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs04.webp)

## Étape de construction 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs05.webp)

## Étape de construction 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs06.webp)

## Étape de construction 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs07.webp)

## Étape de construction 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs08.webp)

## Étape de construction 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs09.webp)

## Étape de construction 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs10.webp)

## Étape de construction 11 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs11.webp)

## Étape de construction 12 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs12.webp)

## Étape de construction 13 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs13.webp)

## Étape de construction 14 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs14.webp)

## Étape de construction 15 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs15.webp)

_Remarque : place simplement la pompe sur le dessus du véhicule. Nous n'utiliserons pas d'eau pendant le test du prototype._

## Étape de construction 16 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs16.webp)

## Étape de construction 17 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs17.webp)

_Remarque : si tu veux fixer le tube en plastique à la pompe, tu peux le fixer autour de ce cadre moyen et le faire passer par le trou du servo. Cela permettra à l'eau de sortir par l'arrière du véhicule._

## Étape de construction 18 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs18.webp)

## Étape de construction 19 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs19.webp)

## Étape de construction 20 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs20.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui diront à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climat est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêt·e·s à **modifier** notre système d'irrigation mobile!

**Astuces pour le tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu es prêt·e à en savoir plus, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!
4. N'oublie pas de `|Télécharger|` et de tester chaque changement que tu apportes!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Étape 1

Fais démarrer le véhicule en appuyant sur le capteur tactile. Observe et note ce qui se passe.

Porte attention à la façon dont le véhicule réagit. Quand s'arrête-t-il pour arroser? Que signalent les DEL?

~hint Dis-m'en plus!
Quand le capteur tactile est activé, le véhicule suit ces étapes :

1. Avance pendant 3 secondes.
2. S'arrête.
3. Allume les DEL vertes pour indiquer que l'arrosage est sur le point de commencer.
4. Fait fonctionner la pompe pendant 1,5 seconde pour arroser les cultures.
5. Allume les DEL rouges pour indiquer que l'arrosage est terminé.

Ce processus se répète 4 fois.
hint~

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(25, -25, 1000)
        basic.pause(3000)
        fwdMotors.drive(0, 0, 0)
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fwdMotors.pump.timedRun(1500)
        basic.pause(3000)
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
```

## Étape 2

Que penses-tu qu'il se passerait si tu changeais les valeurs dans les blocs `||basic:pause||`? Fais une prédiction.

## Étape 3

Expérimentons en changeant la valeur d'un bloc `||basic:pause||` à la fois.

Change la durée de la pause dans un bloc, `|Télécharge|` le nouveau code et observe comment cela influence le comportement du véhicule. Teste différentes valeurs et note ce qui se passe.

```block
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(25, -25, 1000)
        // @highlight
        basic.pause(10000)
        fwdMotors.drive(0, 0, 0)
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fwdMotors.pump.timedRun(1500)
        // @highlight
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
```

## Étape 4

Comment ces changements influencent-ils la quantité d'eau produite par le véhicule? Que se passe-t-il quand tu augmentes ou diminues le temps de pause?

~hint Dis-m'en plus!

-   Le premier bloc `||basic:pause||` vient avant le bloc `||fwdMotors:stop motors||`. Il contrôle la distance parcourue par le véhicule avant qu'il s'arrête pour arroser les cultures. Augmenter la pause ici signifie que le véhicule roule plus loin entre les points d'arrosage, ce qui utilise moins d'eau.
-   Le deuxième bloc `||basic:pause||` vient après le bloc `||fwdMotors:run pump||`. Il permet un délai approprié entre l'arrosage et le fait d'avancer. Diminuer trop cette valeur (p. ex. 500 ms) fait avancer le véhicule alors que la pompe fonctionne encore. Cela rend l'arrosage moins précis.
    hint~

```block
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(25, -25, 1000)
        // @highlight
        basic.pause(10000)
        fwdMotors.drive(0, 0, 0)
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fwdMotors.pump.timedRun(1500)
        // @highlight
        basic.pause(500)
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
```

## Étape 5

En ce moment, le véhicule s'arrête à intervalles réguliers pour arroser les cultures. Que se passerait-il s'il ne s'arrêtait _qu'après avoir détecté une plante_? Cela permettrait d'économiser encore plus d'eau!

Quels changements devrais-tu apporter au code pour t'assurer que le véhicule ne s'arrête pour arroser _que lorsqu'une culture est détectée_?

## Étape 6

Regarde l'instruction conditionnelle déjà fournie dans le code.

Quelle condition est évaluée? Comment cela peut-il nous aider à détecter les plantes?

~hint Dis-m'en plus!

-   Rappelle-toi : les capteurs sonar déterminent la distance d'un objet (comme une plante) en émettant des ondes sonores et en mesurant le temps qu'elles mettent à rebondir.
-   L'instruction conditionnelle déjà écrite vérifie la distance mesurée par le capteur sonar. Elle demande si cette distance est supérieure à 0,075 m (7,5 cm).
-   Dans cette construction, le capteur se trouve à environ 0,1 m (10 cm) au-dessus du sol. S'il n'y a pas de plante, le capteur mesurera une distance de 0,1 m, ce qui déclenche le code de l'instruction conditionnelle.
-   S'il y a une plante, le capteur mesurera une distance inférieure à 0,1 m. Cela déclenche la partie `||logic:else||` de l'instruction conditionnelle.
    hint~

```block
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.075, fwdEnums.OverUnder.Over)) {
    	
    } else {
    	
    }
})
```

## Étape 7

Ta tâche consiste à déplacer les blocs à l'intérieur de la boucle `||loops:repeat 4 times||` dans le bloc `||logic:if-then-else||`, pour que le véhicule ne s'arrête pour arroser _que lorsqu'il détecte une plante sous le capteur sonar._

## Étape 8

Réfléchis d'abord à quels blocs à l'intérieur de la boucle doivent être déplacés dans la partie principale de l'instruction conditionnelle.

Autrement dit, que devrait-il se passer quand _aucune plante n'est présente_?

~hint Dis-m'en plus!

-   Quand aucune plante n'est présente, le véhicule devrait continuer à avancer.
    hint~

```block
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.075, fwdEnums.OverUnder.Over)) {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        // @highlight
        fwdMotors.drive(25, -25, 1000)
    } else {
    	
    }
})
```

## Étape 9

Maintenant, réfléchis à quels blocs à l'intérieur de la boucle devraient s'exécuter quand il _y a une plante_.

~hint Dis-m'en plus!

-   Quand une plante est détectée, le véhicule doit s'arrêter et l'arroser.
-   Les blocs qui exécutent ces actions devraient être placés dans la partie `||logic:else||` de l'instruction conditionnelle.
    hint~

```block
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.075, fwdEnums.OverUnder.Over)) {
    	
    } else {
        // @highlight
        basic.pause(2000)
        // @highlight
        fwdMotors.drive(0, 0, 0)
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        // @highlight
        fwdMotors.pump.timedRun(1500)
        // @highlight
        basic.pause(3000)
    }
})
```

## C'est le moment du défi! @showdialog

Prenons un moment pour optimiser notre véhicule afin de conserver encore plus d'eau!

## Défi étape 1

Nous avons choisi arbitrairement 0,075 m comme seuil pour la détection des plantes, mais tu peux ajuster la distance dans l'instruction conditionnelle selon les objets que tu utilises pour représenter les plantes.

À quelle distance le sommet de ta « plante » se trouve-t-il du capteur sonar? Expérimente avec différentes valeurs pour trouver la distance optimale de détection d'une plante. Quelle distance permet au véhicule de détecter la plante de façon fiable? Une détection plus fiable entraînera de plus grandes économies d'eau.

```block
basic.forever(function () {
    // @highlight
    if (fwdSensors.sonar1.isPastThreshold(0.06, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdMotors.drive(25, -25, 1000)
    } else {
        basic.pause(2000)
        fwdMotors.drive(0, 0, 0)
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fwdMotors.pump.timedRun(1500)
        basic.pause(3000)
    }
})
```

## Défi étape 2

Comme l'eau est pompée à l'arrière du véhicule, il ne devrait pas s'arrêter dès qu'il détecte une plante. Le véhicule devrait avancer légèrement avant d'allumer la pompe.

Ajuste combien de temps le véhicule avance après avoir détecté une plante. Expérimente avec le délai pour trouver le meilleur réglage pour un arrosage efficace. Quel délai assure un arrosage efficace de la plante après sa détection?

```block
basic.forever(function () {
    // @hightlight
    if (fwdSensors.sonar1.isPastThreshold(0.075, fwdEnums.OverUnder.Over)) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        fwdMotors.drive(25, -25, 1000)
    } else {
        // @highlight
        basic.pause(2000)
        fwdMotors.drive(0, 0, 0)
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fwdMotors.pump.timedRun(1500)
        basic.pause(3000)
    }
})
```

## Défi étape 3

Installe un champ de « cultures » avec tes objets. Ensuite, fais fonctionner le véhicule avec le code modifié.

Observe son comportement. S'arrête-t-il pour arroser quand il détecte une plante? Sinon, ajuste ton code.

## Défi étape 4

Réfléchis à la quantité d'eau que ce prototype permettra de conserver par rapport à un véhicule qui arrose en continu ou à intervalles réguliers.

Comment pourrais-tu modéliser mathématiquement la consommation d'eau de ce prototype?

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Quels défis as-tu rencontrés pendant cette activité? Comment les as-tu surmontés?

Qu'as-tu appris sur l'utilisation d'instructions conditionnelles et de délais pour contrôler un système?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

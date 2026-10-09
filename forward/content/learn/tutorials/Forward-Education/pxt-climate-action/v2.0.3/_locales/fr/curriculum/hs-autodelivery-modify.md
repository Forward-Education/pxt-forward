# Forward Education Véhicule d'entrepôt intelligent - Tutoriel de modification

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
input.onButtonPressed(Button.A, function () {
  IsDrivingEnabled = false
})
input.onButtonPressed(Button.B, function () {
  IsDrivingEnabled = true
})
let IsDrivingEnabled = false
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
fwdMotors.setupDriving(
fwdBase.leftServo,
fwdBase.rightServo
)
basic.forever(function () {
  if (IsDrivingEnabled == false) {
      fwdMotors.drive(0, 0, 0)
      basic.showIcon(IconNames.No)
  }
  if (IsDrivingEnabled == true) {
      if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off)) {
          basic.showArrow(ArrowNames.North)
          fwdMotors.drive(20, -20, 1000)
      } else if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) || fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
          basic.showLeds(`
              . . # . .
              . . . # .
              . . . . #
              . . . # .
              . . # . .
              `)
          // TODO: calibrate duration -- was turn(2) degrees in place
          fwdMotors.drive(50, 50, 1000)
          if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On) && (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On))) {
              basic.showArrow(ArrowNames.East)
              // TODO: calibrate duration -- was turn(1) degrees in place
              fwdMotors.drive(50, 50, 1000)
          }
      } else if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) || fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
          basic.showLeds(`
              . . # . .
              . # . . .
              # . . . .
              . # . . .
              . . # . .
              `)
          // TODO: calibrate duration -- was turn(-2) degrees in place
          fwdMotors.drive(-50, -50, 1000)
          if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On) && (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On))) {
              basic.showArrow(ArrowNames.West)
              // TODO: calibrate duration -- was turn(-1) degrees in place
              fwdMotors.drive(-50, -50, 1000)
          }
      } else {
          fwdMotors.drive(0, 0, 0)
          basic.showIcon(IconNames.Square)
      }
  }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un véhicule d'entrepôt intelligent! Nous allons le faire en quatre parties :

1. **Construire** notre véhicule d'entrepôt intelligent
2. **Ajouter du code** pour faire bouger notre projet
3. **Modifier** notre projet pour découvrir d'autres capteurs
4. Appliquer ce que nous avons appris avec un petit **défi**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-render.webp" alt="Rendu complet du véhicule d'entrepôt intelligent" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![Étape de construction 1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs01.webp)

## Étape de construction 2 @showdialog

![Étape de construction 2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs02.webp)

## Étape de construction 3 @showdialog

![Étape de construction 3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs03.webp)

## Étape de construction 4 @showdialog

![Étape de construction 4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs04.webp)

## Étape de construction 5 @showdialog

![Étape de construction 5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs05.webp)

## Étape de construction 6 @showdialog

![Étape de construction 6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs06.webp)

## Étape de construction 7 @showdialog

![Étape de construction 7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs07.webp)

## Étape de construction 8 @showdialog

![Étape de construction 8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs08.webp)

## Étape de construction 9 @showdialog

![Étape de construction 9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs09.webp)

## Étape de construction 10 @showdialog

![Étape de construction 10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs10.webp)

## Étape de construction 11 @showdialog

![Étape de construction 11](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs11.webp)

## Étape de construction 12 @showdialog

![Étape de construction 12](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs12.webp)

## Étape de construction 13 @showdialog

![Étape de construction 13](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs13.webp)

## Étape de construction 14 @showdialog

![Étape de construction 14](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs14.webp)

## Étape de construction 15 @showdialog

![Étape de construction 15](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs15.webp)

## Étape de construction 16 @showdialog

![Étape de construction 16](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs16.webp)

## Étape de construction 17 @showdialog

![Étape de construction 17](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs17.webp)

## Étape de construction 18 @showdialog

![Étape de construction 18](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-sbs18.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de codage 1 @showdialog

IMPORTANT! Assure-toi que ta carte d'extension de la trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Brancher le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de codage 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de jumelage" style="display: block; width: 60%; margin:auto;">

## Étape de codage 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ dans ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous avons un véhicule d'entrepôt intelligent qui **suit une ligne droite** et **signale sa direction**; explorons comment optimiser nos capteurs en **modifiant** notre code!

Au fil des prochaines étapes :

-   Utilise les instructions en haut de l'écran pour **modifier** ton code.
-   Lorsque tu es prêt·e pour plus d'information, clique sur **« En savoir plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!

## Étape de modification 1

Repense à la leçon sur l'automatisation dans les entrepôts industriels. Notre véhicule d'entrepôt intelligent est un exemple de [véhicule à guidage automatique (AGV)](https://youtu.be/qahujJ-8vdk?si=2v8G7Mf5MFFAhvWM).

Que devrait-il être capable de faire?

~hint En savoir plus!
Pour déplacer des produits dans un entrepôt, le véhicule d'entrepôt intelligent devrait être capable de :

1. **Suivre** un trajet prédéfini (ou une ligne noire)
2. **Communiquer** la direction dans laquelle il se déplacera

Nous allons aussi **modifier** notre code pour améliorer encore plus notre projet en : 3. **Détectant** un obstacle sur son chemin et en arrêtant de rouler
hint~

## Étape de modification 2

Testons-le!

Débranche ton projet de ton ordinateur, place-le sur une ligne noire droite et appuie sur **B**. Que se passe-t-il?

~hint En savoir plus!

-   Le micro:bit recueille des données du `||fwdSensors:line follower||`. Le critère pour faire tourner les `||fwdMotors:motors||` est :

-   `||logic:If||` le côté gauche OU droit de la ligne détecte le papier blanc, faire tourner le moteur dans la direction opposée.

-   C'est ce qu'on appelle une **expression conditionnelle**.

-   C'est un **booléen**, ce qui signifie qu'il doit être évalué comme `||logic:true||` ou `||locig:false||`.

hint~

```blocks
input.onButtonPressed(Button.B, function () {
//@highlight
 IsDrivingEnabled = true
})
```

## Étape de modification 3

Que va-t-il se passer si on augmente la vitesse de déplacement dans le bloc `||fwdMotors:drive forward||` de **20** à **40**?

Appuie sur le bouton `|Télécharger|` pour mettre à jour le code sur ton micro:bit, redépose ton véhicule sur la ligne et appuie sur **B** pour le tester.

~hint En savoir plus!
Le véhicule avance deux fois plus vite!
hint~

```block
fwdMotors.drive(40, -40, 1000)
```

## Étape de modification 4

As-tu remarqué si le changement de vitesse a eu un impact sur la fiabilité du suivi de la ligne?

Combien de fois le véhicule a-t-il dû se réajuster avant d'atteindre la fin de la ligne droite?

~hint En savoir plus!
Le micro:bit a besoin de temps pour traiter les données recueillies par le capteur de ligne. Plus le véhicule se déplace vite, moins le micro:bit a de temps pour détecter sa position par rapport à la ligne.
hint~

## Étape de modification 5

Mettre à jour notre programme ne le rend pas _toujours_ plus efficace. Comment pourrais-tu améliorer ou ajuster le code pour que le véhicule détecte quand même la ligne correctement?

Ajuste ton code et note combien de fois le véhicule a dû se réajuster avant d'atteindre la fin de la ligne droite.

~hint En savoir plus

N'oublie pas de `|télécharger|` ton code sur ton micro:bit après avoir modifié ton code!

Nous pourrions augmenter la précision de notre suiveur de ligne de plusieurs façons :

-   Remettre le bloc `||fwdMotors:drive forward||` à 20 (ou un autre nombre!)
-   Ajouter un bloc `||basic:pause||` après chaque instruction conditionnelle

hint~

```blocks
basic.forever(function () {
   if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) || fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
           basic.showLeds(`
               . . # . .
               . . . # .
               . . . . #
               . . . # .
               . . # . .
               `)
           // TODO: calibrate duration -- was turn(2) degrees in place
           fwdMotors.drive(50, 50, 1000)
           //@highlight
           basic.pause(1000)
           if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On) && (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On))) {
               basic.showArrow(ArrowNames.East)
               // TODO: calibrate duration -- was turn(1) degrees in place
               fwdMotors.drive(50, 50, 1000)
           //@highlight
               basic.pause(1000)
           }
       }
   })
```

## Étape de modification 6

Testons un autre composant qu'utilise notre véhicule d'entrepôt intelligent!

Comment penses-tu que l'`||fwdSensors:LED ring||` aide notre véhicule d'entrepôt à rouler sur la ligne noire?

~hint En savoir plus!
Notre suiveur de ligne détecte le contraste entre le noir et le blanc.

L'`||fwdSensors:LED ring||` aide à éclairer la ligne **noire** sur le papier **blanc** dans différentes conditions d'éclairage.

hint~

```block
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
```

## Étape de modification 7

D'après ta compréhension du comportement du véhicule lors de ton premier test, comment penses-tu qu'il va naviguer sur une ligne noire lorsque la DEL est réglée à différentes conditions d'éclairage?

1. Régler l'`||fwdSensors:LED ring||` au blanc
2. Régler l'`||fwdSensors:LED ring||` au rouge
3. Éteindre l'`||fwdSensors:LED ring||`
4. Éteindre les lumières de la pièce avec l'`||fwdSensors:LED ring||` éteint

Note ta prédiction!

## Étape de modification 8

C'est maintenant le temps de tester ta prédiction!

Teste chacune des quatre conditions d'éclairage 5 fois sur la ligne droite et note tes observations dans un tableau.

N'oublie pas de `|télécharger|` le code chaque fois que tu changes les conditions d'éclairage.

~hint En savoir plus!
Tu voudras peut-être recueillir des données sur :

1. Combien de temps faut-il pour compléter le parcours?
2. Combien de fois le véhicule doit-il ajuster sa position?
3. Combien de fois le véhicule a-t-il complété le parcours avec succès?
   hint~

## C'est le temps du défi ! @showdialog

Notre projet inclut un capteur `||fwdSensors:sonar||` que nous n'utilisons pas encore.

Maintenant que notre véhicule d'entrepôt intelligent roule sur une ligne dans différentes conditions d'éclairage, ajoute la capacité de détecter son environnement et de **patienter jusqu'à ce que la voie soit libre**!

## Étape du défi 1

Réfléchis à l'endroit dans ton `||logic:conditional statement||` où tu devrais ajouter le capteur `||fwdSensors:sonar||` pour que ton véhicule détecte un obstacle et attende en sécurité que la voie soit libre.

N'oublie pas de `|télécharger|` ton code une fois que tu as ajouté le bloc sonar à ton instruction conditionnelle.

~hint En savoir plus!

Le capteur `||fwdSensors:sonar||` devrait seulement dire au véhicule d'avancer si :

-   Les obstacles sont **au-dessus** d'une certaine distance devant ton véhicule.

-   **Après** que `||fwdMotors:IsDrivingEnabled||` soit réglé à vrai (true)

-   **Avant** d'avancer ou de tourner sur une ligne.

hint~

```block
fwdSensors.sonar1.isPastThreshold(0, fwdEnums.OverUnder.Over)
```

## Étape du défi 2

Teste à nouveau ton véhicule sur la ligne droite. Se comporte-t-il comme tu t'y attendais?

As-tu inclus une façon pour ton véhicule de signaler qu'un obstacle est sur son chemin?

~hint En savoir plus!

Clique sur l'ampoule pour voir un exemple d'ajout d'un capteur `||fwdSensors:sonar||` et de signalement dans notre code!

hint~

```blocks
basic.forever(function () {
  if (IsDrivingEnabled == true) {
   //@highlight
      if (fwdSensors.sonar1.isPastThreshold(1, fwdEnums.OverUnder.Over)) {
          if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off)) {
              basic.showArrow(ArrowNames.North)
              fwdMotors.drive(20, -20, 1000)
          } else if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) || fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On)) {
              basic.showLeds(`
                  . . # . .
                  . . . # .
                  . . . . #
                  . . . # .
                  . . # . .
                  `)
              // TODO: calibrate duration -- was turn(2) degrees in place
              fwdMotors.drive(50, 50, 1000)
              if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On) && (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On))) {
                  basic.showArrow(ArrowNames.East)
                  // TODO: calibrate duration -- was turn(1) degrees in place
                  fwdMotors.drive(50, 50, 1000)
              }
          } else if (fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) || fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On)) {
              basic.showLeds(`
                  . . # . .
                  . # . . .
                  # . . . .
                  . # . . .
                  . . # . .
                  `)
              // TODO: calibrate duration -- was turn(-2) degrees in place
              fwdMotors.drive(-50, -50, 1000)
              if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.On) && (fwdSensors.line2.isLineSensorState(fwdEnums.OnOff.On) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.On))) {
                  basic.showArrow(ArrowNames.West)
                  // TODO: calibrate duration -- was turn(-1) degrees in place
                  fwdMotors.drive(-50, -50, 1000)
              }
          } else {
              fwdMotors.drive(0, 0, 0)
              basic.showIcon(IconNames.Square)
          }
      }
      //@highlight
      else {
         //@highlight
          basic.showIcon(IconNames.Sad)
          //@highlight
          fwdMotors.drive(0, 0, 0)
      }
  }
})
```

## Étape du défi 3

Maintenant que ton véhicule détecte un obstacle, nous devons décider **à quelle distance** il devrait s'arrêter d'un obstacle!

À l'aide de ta règle, mesure la distance à laquelle le véhicule devrait détecter un obstacle. Notre véhicule utilise le mètre comme unité de mesure. Tu devras peut-être convertir ta mesure.

~hint En savoir plus!
Par exemple : si nous voulons que le véhicule détecte les obstacles à moins de 30 cm, notre bloc de code devrait être 0,3 m.

Si ton véhicule est branché à ton ordinateur, tu peux utiliser le **visualiseur en direct** pour voir à quelle distance ton capteur sonar détecte les objets!

N'oublie pas de `|télécharger|` le code chaque fois que tu modifies le code.
hint~

```blocks
basic.forever(function () {
  if (IsDrivingEnabled == true) {
  //@highlight
      if (fwdSensors.sonar1.isPastThreshold(.3, fwdEnums.OverUnder.Over)) {
          if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off)) {
              basic.showArrow(ArrowNames.North)
              fwdMotors.drive(20, -20, 1000)
          }
      }
      else {
          basic.showIcon(IconNames.Sad)
          fwdMotors.drive(0, 0, 0)
      }
  }
})
```

## Défi terminé !

Tu as réussi!

Réfléchis à comment tu testerais l'efficacité du capteur sonar. Quels tests devrais-tu effectuer pour vérifier que ton véhicule suit toujours une ligne?

~hint En savoir plus!
Tu voudras peut-être réfléchir à :

-   À quelle distance le capteur `||fwdSensors:sonar||` devrait-il détecter?

-   Comment devrait-il signaler qu'il détecte un obstacle?

-   Comment devrais-tu tester que le suiveur de ligne existant est toujours précis?

hint~

## Félicitations ! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris·e à propos du projet?

## Réflexion @showdialog

Comment l'utilisation de prédictions et de la collecte de données t'a-t-elle aidé·e à mieux comprendre ton code?

Quelles différences as-tu trouvées dans la précision du suiveur de ligne?

Qu'aimerais-tu modifier d'autre pour améliorer encore plus la construction de ton véhicule?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

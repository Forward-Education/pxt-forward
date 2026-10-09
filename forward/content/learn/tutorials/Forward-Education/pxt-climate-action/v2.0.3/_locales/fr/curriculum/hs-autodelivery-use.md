# Véhicule intelligent d'entrepôt Forward Education - Tutoriel Utiliser

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

Construisons un véhicule intelligent d'entrepôt! Nous allons le faire en quatre parties :

1. **Construire** notre véhicule intelligent d'entrepôt
2. **Ajouter du code** pour faire bouger notre projet
3. **Utiliser** ou tester notre suiveur de ligne pour comprendre comment il fonctionne
4. Appliquer ce que nous avons appris avec un petit **défi**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-autodelivery-render.webp" alt="Rendu complet du véhicule intelligent d'entrepôt" style="display: block; width: 60%; margin:auto;">

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

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui diront à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climat est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

Maintenant que nous avons construit notre véhicule intelligent d'entrepôt, nous allons commencer par **utiliser** un exemple de code pour voir comment il fonctionne.

Pendant que tu avances dans les prochaines étapes :

-   **Utilise** les instructions en haut de l'écran.
-   Quand tu es prêt·e à en savoir plus, clique sur **« Dis-m'en plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!

## Étape 1

Repense à la leçon sur l'automatisation dans les entrepôts industriels. Notre véhicule intelligent d'entrepôt est un exemple de [véhicule à guidage automatique (AGV)](https://youtu.be/qahujJ-8vdk?si=2v8G7Mf5MFFAhvWM).

Que devrait-il pouvoir faire?

~hint Dis-m'en plus!
Pour déplacer des produits dans un entrepôt, le véhicule intelligent d'entrepôt devrait pouvoir :

1. **Suivre** un chemin prédéfini (ou une ligne noire)
2. **Communiquer** la direction dans laquelle il va se déplacer

D'autres produits d'automatisation d'entrepôt peuvent avoir plus de fonctionnalités, mais ce sont ici les exigences minimales.
hint~

## Étape 2

Regarde de plus près le projet physique que tu viens de construire.

Quels composants robotiques remarques-tu? Comment penses-tu qu'ils vont travailler ensemble pour que le véhicule intelligent d'entrepôt fonctionne comme prévu?

~hint Dis-m'en plus!
Le véhicule intelligent d'entrepôt possède :

-   Deux `||fwdMotors:moteurs servo continus||` qui font une rotation complète de 360 degrés. Ils font tourner les roues pour permettre au véhicule d'avancer.

-   Un `||fwdSensors:suiveur de ligne||` avec trois capteurs pour distinguer le noir et le blanc. Ils déterminent si le robot est sur la ligne, s'il dérive d'un côté ou de l'autre, et s'il est arrivé à la fin d'un chemin.

-   Un `||fwdSensors:anneau DEL||` pour éclairer le chemin et aider le suiveur de ligne à voir le noir et le blanc.

-   Un `||fwdSensors:capteur sonar||` que tu peux utiliser pour voir s'il y a un objet sur le chemin du véhicule.

-   Toutes ces pièces sont connectées à la **plaque de connexion** par des **câbles**.

-   Enfin, la plaque de connexion est reliée au **micro:bit**, qui contient tout le code disant à nos moteurs quoi faire et quand le faire!

hint~

## Étape 3

Testons-le!

Débranche ton projet de l'ordinateur, place-le sur une ligne noire droite et appuie sur **B**. Que se passe-t-il?

~hint Dis-m'en plus!

Le micro:bit recueille des données provenant du `||fwdSensors:suiveur de ligne||`. Le critère pour faire tourner les `||fwdMotors:moteurs||` est le suivant :

-   `||logic:Si||` le côté gauche OU le côté droit de la ligne détecte le papier blanc, fais tourner le moteur dans la direction opposée.

-   C'est ce qu'on appelle une **expression conditionnelle**.

-   C'est un **booléen**, ce qui veut dire qu'elle doit être évaluée comme `||logic:vrai||` ou `||logic:faux||`.

hint~

```blocks
input.onButtonPressed(Button.B, function () {
//@highlight
  IsDrivingEnabled = true
})
```

## Étape 4

Peux-tu expliquer comment le véhicule arrive à suivre la ligne?

~hint Dis-m'en plus!

-   Nous contrôlons le véhicule avec une **instruction conditionnelle imbriquée**.
-   Les instructions conditionnelles imbriquées sont des règles « **si-alors** » utilisées en programmation pour les programmes ayant **plusieurs chemins possibles**.
-   Elles ajoutent des points de contrôle à nos programmes et disent à l'ordinateur quoi faire selon différentes situations, comme afficher un message différent selon qu'il fait soleil, qu'il pleut ou que le ciel est nuageux.
    hint~

## Étape 5

Peux-tu identifier une des **conditions imbriquées** qui aide le véhicule à suivre une ligne droite?

Quels _critères_ aident le micro:bit à décider quoi faire?

~hint Dis-m'en plus!
Il y a plusieurs conditions imbriquées dans ce code!

1. Si le **bouton B est enfoncé** > active la conduite
2. Si le véhicule **détecte une ligne** > signale avec les DEL du micro:bit et avance
3. Si le véhicule détecte qu'il a **dérivé à droite ou à gauche de la ligne** > signale avec les DEL du micro:bit et tourne de 2 degrés vers la ligne
4. Si le véhicule **n'est toujours pas sur la ligne** > signale avec les DEL du micro:bit et tourne de 1 degré vers la ligne
5. Si le véhicule détecte la **fin de la ligne** > signale avec les DEL du micro:bit et arrête d'avancer
   hint~

```blocks
basic.forever(function () {
  if (IsDrivingEnabled == true) {
  //@highlight
      if (fwdSensors.line1.isLineSensorState(fwdEnums.OnOff.Off) && fwdSensors.line3.isLineSensorState(fwdEnums.OnOff.Off)) {
          basic.showArrow(ArrowNames.North)
          fwdMotors.drive(20, -20, 1000)
}
}
})
```

## C'est le moment du défi! @showdialog

Maintenant que nous avons **utilisé** du code pour créer un véhicule intelligent d'entrepôt qui **suit une ligne droite** et **signale sa direction**, nous devons recueillir des données pour évaluer quels autres types de lignes il peut suivre!

## Défi étape 1

Selon la façon dont le véhicule s'est comporté lors de ton premier test, comment penses-tu qu'il se comportera sur les types de lignes suivants :

1. Une ligne droite
2. Une ligne droite avec un virage à 45 degrés
3. Une large courbe

Note ta prédiction!

## Défi étape 2

C'est maintenant le moment de tester ta prédiction!

Teste chacun des trois parcours 5 fois et note tes résultats dans un tableau.

~hint Dis-m'en plus!
Tu peux vouloir recueillir des données sur :

1. Combien de temps faut-il pour compléter le parcours?
2. Combien de fois le véhicule doit-il ajuster sa position?
3. Combien de fois le véhicule a-t-il réussi à compléter chaque parcours?
   hint~

## Défi étape 3

Le véhicule dérive-t-il plus souvent d'un côté que de l'autre? Pourquoi penses-tu que c'est le cas?

Y a-t-il une partie de ton parcours où ton robot reste « coincé » à chaque fois?

Essaie de créer une nouvelle ligne pour ton robot en tenant compte de ce que tu as appris de tes données.

~hint Dis-m'en plus!
Les véhicules suiveurs de ligne ont besoin de beaucoup de tests pour rendre le parcours plus fiable!

Tu as peut-être remarqué qu'une ligne longue et droite peut être suivie plus fidèlement qu'une courbe serrée ou qu'un virage brusque à 90 degrés.
hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris·e à propos du projet?

## Réflexion @showdialog

Comment le fait d'utiliser des prédictions et de recueillir des données t'a-t-il aidé·e à mieux comprendre ton code?

Quelles différences as-tu trouvées dans la précision du suiveur de ligne?

Que voudrais-tu modifier d'autre pour améliorer encore plus la construction de ton véhicule?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

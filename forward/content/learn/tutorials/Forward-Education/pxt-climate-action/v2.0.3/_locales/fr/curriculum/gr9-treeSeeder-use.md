# Replanter nos forêts avec des semeuses d'arbres automatisées - Tutoriel d'utilisation

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(50, -50, 1000)
        basic.pause(1000)
        fwdMotors.drive(0, 0, 0)
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
    fwdMotors.drive(0, 0, 0)
})
fwdMotors.setAngle(fwdBase.middleServo, 45)
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
```

## Activité 1 : Construis ton projet @showdialog

Construisons une semeuse d'arbres automatisée. Nous allons procéder en quatre parties :

1. **Construire** la semeuse d'arbres automatisée
2. **Ajouter du code** pour la faire bouger
3. **Utiliser** la semeuse d'arbres pour comprendre son fonctionnement
4. Devenir propriétaire d'une entreprise et **relever un défi de mathématiques**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-thumbnail-render.webp" alt="Rendu complet de la semeuse d'arbres" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs01.webp)

## Étape de construction 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs02.webp)

## Étape de construction 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs03.webp)

## Étape de construction 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs04.webp)

## Étape de construction 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs05.webp)

## Étape de construction 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs06.webp)

## Étape de construction 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs07.webp)

## Étape de construction 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs08.webp)

## Étape de construction 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs09.webp)

## Étape de construction 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs10.webp)

## Étape de construction 11 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs11.webp)

## Étape de construction 12 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs12.webp)

## Étape de construction 13 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs13.webp)

## Étape de construction 14 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs14.webp)

## Étape de construction 15 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs15.webp)

## Étape de construction 16 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs16.webp)

## Étape de construction 17 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs17.webp)

## Étape de construction 18 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs18.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie grâce au code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de codage 1 @showdialog

IMPORTANT! Assure-toi que ta carte d'extension de la trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Brancher le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de codage 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de jumelage" style="display: block; width: 60%; margin:auto;">

## Étape de codage 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêts à **utiliser** notre semeuse d'arbres!

Astuces

1. Suis les instructions en haut de l'écran.
2. Lorsque tu es prêt à en savoir plus, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

## Étape d'utilisation 1

Repense à la leçon ou [regarde cette vidéo](https://youtu.be/KpPWcFukGIM?feature=shared).

Que devrait pouvoir faire une semeuse d'arbres automatisée?

~hint Dis-m'en plus!
La semeuse d'arbres automatisée devrait pouvoir :

1. Se déplacer continuellement
2. Planter des graines uniformément sur un champ

D'autres produits peuvent avoir plus de fonctionnalités, mais ces deux-là sont l'exigence minimale.
hint~

## Étape d'utilisation 2

Regarde le projet physique que tu viens de construire.

Quelles composantes robotiques remarques-tu? Comment penses-tu qu'elles vont fonctionner ensemble pour que la semeuse d'arbres fonctionne comme prévu?

~hint Dis-m'en plus!
La semeuse d'arbres automatisée comprend :

-   Deux **moteurs servo continus** qui tournent sur 360 degrés complets. Ils font tourner les roues pour permettre à la semeuse d'avancer.
-   Un **moteur servo positionnel** qui se déplace selon un angle précis. Chaque fois qu'il bouge, il plante une graine.
-   Ces pièces sont toutes connectées à la **carte d'extension** par des **câbles connecteurs**.
-   Enfin, la carte d'extension est connectée au **micro:bit** qui contient tout le code qui indiquera à nos moteurs _quoi_ faire et _quand_ le faire!
    hint~

## Étape d'utilisation 3

Testons-la. Débranche ton projet de l'ordinateur. Ensuite, place-le au sol dans un espace dégagé.

Appuie sur « A ». Que remarques-tu? Fais-le quelques fois, si nécessaire, puis note tes observations.

## Étape d'utilisation 4

Qu'as-tu remarqué? Y avait-il des tendances?

~hint Dis-m'en plus!
Tu as sans doute remarqué qu'il y avait effectivement une tendance. La semeuse d'arbres a exécuté les étapes suivantes 4 fois de suite :

1. Avancer
2. S'arrêter
3. Déplacer le bras vers le sol
4. S'arrêter
5. Éloigner le bras du sol
   hint~

## Étape d'utilisation 5

Regarde le code dans l'espace de travail.

D'après ce que tu viens d'apprendre et d'observer, peux-tu deviner quel(s) bloc(s) font bouger ou avancer la semeuse d'arbres?

~hint Dis-m'en plus!

-   Nous configurons la fonction de conduite à l'aide du bloc `||fwdMotors:setup driving||`.
-   Nous faisons avancer la semeuse d'arbres à une certaine vitesse à l'aide du bloc `||fwdMotors:drive forward||`.
    hint~

```blocks
fwdMotors.setAngle(fwdBase.middleServo, 45)
// @highlight
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
    // @highlight
        fwdMotors.drive(50, -50, 1000)
        basic.pause(1000)
        fwdMotors.drive(0, 0, 0)
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
    fwdMotors.drive(0, 0, 0)
})
```

## Étape d'utilisation 6

Peux-tu deviner quel(s) bloc(s) sont responsables de déposer ou de planter la graine?

~hint Dis-m'en plus!

-   Les blocs `||fwdMotors:set middleServo||` sont responsables de faire osciller le bras/crayon d'avant en arrière. Cette action simule la plantation d'une graine.
    hint~

```blocks
// @highlight
fwdMotors.setAngle(fwdBase.middleServo, 45)
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(50, -50, 1000)
        basic.pause(1000)
        fwdMotors.drive(0, 0, 0)
        // @highlight
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        // @highlight
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
    fwdMotors.drive(0, 0, 0)
})
```

## Défi @showdialog

Imagine que tu es propriétaire de l'entreprise qui construit ces semeuses d'arbres automatisées. Tu as un client qui souhaite planter 1000 arbres sur son champ.

D'après ce que tu viens d'apprendre :

1. Combien de _temps_ faudra-t-il à la semeuse pour planter autant d'arbres?
2. Quelle _distance_ devra-t-elle parcourir pour atteindre cet objectif?
3. Comment le sais-tu?

Essaie de trouver une solution avant de passer à l'étape suivante.

## Solution 1

Puisque nous avons accès au code, nous savons exactement ce que le véhicule doit faire pour planter chaque arbre! Cela nous permettra d'estimer le temps nécessaire pour planter un arbre simplement en examinant chaque bloc.

## Solution 1 (suite)

Le micro:bit exécute chaque bloc très rapidement, donc la contribution de chacun au temps d'exécution est presque négligeable. Il y a toutefois une exception : les blocs `||basic:pause||`!

## Solution 1 (suite)

Dans ce programme, nous avons 3 blocs `||basic:pause||` qui totalisent 1500 millisecondes (soit 1,5 seconde!) par boucle. Nous savons aussi qu'une graine est plantée à chaque boucle. En fin de compte, cela signifie qu'il faut 1,5 seconde pour planter chaque graine :

<img src="https://latex.codecogs.com/svg.image?\frac{1.5\;seconds}{1\;\cancel{loop}}\times\frac{1\;\cancel{loop}}{1\;seed}=\frac{1.5\;seconds}{seed}" alt="Une équation mathématique : 1,5 seconde divisée par 1 boucle multipliée par 1 boucle divisée par 1 graine égale 1,5 seconde par graine" style="width: 400px;">

```block
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(50, -50, 1000)
        // @highlight
        basic.pause(1000)
        fwdMotors.drive(0, 0, 0)
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        // @highlight
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        // @highlight
        basic.pause(250)
    }
    fwdMotors.drive(0, 0, 0)
```

## Solution 1 (suite)

Sachant cela, nous pouvons calculer que 1000 graines prendront 1500 secondes (soit 25 minutes!) à planter!

<img src="https://latex.codecogs.com/svg.image?1000\;\cancel{seeds}\times\frac{1.5\;seconds}{1\;\cancel{seed}}=1500\;seconds" alt="Une équation mathématique : 1000 graines multipliées par 1,5 seconde divisée par 1 graine égale 1500 secondes." style="width: 450px;">

## Solution 1 (suite)

Malheureusement, nous n'avons aucun moyen d'estimer la distance parcourue à partir du code seul.

## Solution 2

Lorsque le code ne peut pas nous aider, nous pouvons exécuter notre programme et prendre des mesures physiques à l'aide d'un chronomètre et d'une règle. Ensuite, nous pouvons extrapoler les données!

Essaie-le :

1. Installe ta semeuse d'arbres et marque son point de départ.
2. Appuie sur A et démarre un chronomètre en même temps.
3. Arrête le chronomètre lorsque la semeuse plante sa première graine.
4. Mesure la distance entre ces deux points.

Voici le temps et la distance nécessaires pour planter 1 graine. Multiplie chaque valeur par 1000 pour extrapoler le temps et la distance nécessaires pour en planter 1000.

## Une autre façon ?

As-tu utilisé une autre approche pour résoudre ce problème?

Astuce : Tu pourrais aussi utiliser une extension MakeCode comme le Data Logger pour suivre les données en direct de ta semeuse d'arbres!

## Réflexion @showdialog

Comment les réponses se comparent-elles entre chaque solution?

Pourquoi pourrait-il y avoir de légères différences?

Comment pouvons-nous rendre nos estimations plus précises?

## Félicitations ! @showdialog

Tu as terminé l'activité!

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

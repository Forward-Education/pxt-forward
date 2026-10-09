# Véhicules électriques autonomes du futur - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Construisons un véhicule électrique! Nous allons le faire en 4 parties :

1. **Construire** notre véhicule électrique
2. **Ajouter du code** pour le faire bouger
3. **Modifier** le code pour comprendre son fonctionnement
4. Relever un **défi** pour améliorer notre véhicule électrique

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-render.png" alt="Rendu complet du véhicule électrique" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs1edit.png)

## Étape de construction 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs2.png)

## Étape de construction 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs3.png)

## Étape de construction 3B @showdialog

![sbs3b](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs3b.png)

## Étape de construction 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs4.png)

## Étape de construction 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs5.png)

## Étape de construction 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs6.png)

## Étape de construction 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs7.png)

## Étape de construction 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs8.png)

## Étape de construction 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs9.png)

## Étape de construction 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs10.png)

## Étape de construction 11 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs11.png)

## Étape de construction 12 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs12.png)

## Étape de construction 13 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs13.png)

## Étape de construction 14 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs14.png)

## Étape de construction 15 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs15.png)

## Étape de construction 16 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr11-electriccar-sbs16.png)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de programmation 1 @showdialog

IMPORTANT! Assure-toi que la carte d'extension du kit d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 50%; margin:auto;">

## Étape de programmation 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet du feu de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de programmation 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton projet.

_Remarque : Tu voudras peut-être surélever ton véhicule électrique sur quelque chose pour qu'il ne roule pas ailleurs pendant qu'il est encore branché à l'ordinateur._

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêts à **modifier** notre véhicule électrique.

**Astuces pour le tutoriel**

En parcourant les prochaines étapes :

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt pour plus d'informations, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!
4. Assure-toi de `|télécharger|` tout code modifié sur ton micro:bit pour le tester.

```template
input.onButtonPressed(Button.A, function () {
    IsDrivingEnabled = true
})
input.onButtonPressed(Button.B, function () {
    IsDrivingEnabled = false
})
let IsDrivingEnabled = false
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
basic.forever(function () {
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Modification, étape 1

Dans ce projet, nous utilisons le capteur sonar pour détecter les obstacles sur le chemin de notre véhicule électrique.

Regarde le code dans l'espace de travail ci-dessous. Que penses-tu qu'il se passera lorsqu'il y a un obstacle? Fais une prédiction!

~hint Dis-m'en plus!

-   Le capteur sonar fonctionne un peu comme les chauves-souris trouvent leur chemin. Il émet des ondes sonores et vérifie combien de temps elles mettent à revenir après avoir frappé un objet.
-   Selon les informations que le micro:bit et le capteur captent de l'environnement, notre véhicule électrique peut « décider » de continuer, de ralentir ou de tourner pour éviter de heurter quelque chose.
    hint~

```blocks
basic.forever(function () {
    let IsDrivingEnabled = 0
    if (IsDrivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            // @highlight
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        } else {
            // @highlight
            fwdMotors.drive(50, -50, 1000)
        }
    } else {
        // @highlight
        fwdMotors.drive(0, 0, 0)
    }
})
```

## Modification, étape 2

Le code ci-dessous demande au véhicule électrique de `||fwdMotors:turn 15 degrees in place||` lorsqu'il rencontre un obstacle.

Peux-tu identifier le type de bloc que l'on utilise pour faire cela?

~hint Dis-m'en plus!

-   Nous ajoutons un point de décision au code. Quel type de bloc nous permet de faire cela?
    hint~

## Modification, étape 3

Dans le code, nous utilisons un énoncé conditionnel pour aider le véhicule électrique à décider quoi faire lorsqu'il rencontre un obstacle. Dans ce cas, il s'éloignera de l'objet en tournant.

Testons cela : débranche ton véhicule électrique de ton ordinateur, place-le sur le sol, puis appuie sur le bouton « A » pour commencer à rouler! Appuie sur « B » une fois que tu es prêt à arrêter le véhicule.

~hint Dis-m'en plus!

-   Une conditionnelle est un bloc de code qui déclenche une action si certaines conditions sont remplies.
-   Nous utilisons aussi des conditionnelles dans la vie réelle. Par exemple, « S'il pleut, alors je prendrai un parapluie. »
    hint~

```block
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            // TODO: calibrate duration -- was turn(10) degrees in place
            fwdMotors.drive(50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
```

## Modification, étape 4

Dans notre deuxième conditionnelle, le bloc `||fwdSensors:sonar1 distance is under 0.5 m||` indique à notre véhicule électrique de déclencher un événement lorsque quelque chose se trouve à moins de 0,5 mètre.

Que penses-tu qu'il arrivera si nous diminuons cette distance?

Essaie-le! Change la valeur dans `||fwdSensors:sonar1 distance is under 0.5 m||` à « 0,2 m ».

~hint Dis-m'en plus!

-   Rebranche ton véhicule électrique à ton ordinateur.
-   Pour appliquer tes changements, clique sur `|Télécharger|` en bas de la page.
-   Ensuite, débranche ton projet de l'ordinateur pour tester le nouveau code.
    hint~

```block
// @highlight
if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
            // TODO: calibrate duration -- was turn(10) degrees in place
            fwdMotors.drive(50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
```

## Modification, étape 5

As-tu testé ton véhicule électrique? Ta prédiction était-elle exacte?

En abaissant le seuil de 0,5 à 0,2 mètre, ton véhicule électrique s'approche maintenant davantage des objets avant de tourner. Ce changement apporte plusieurs avantages, dont moins de faux déclenchements du capteur sonar!

~hint Dis-m'en plus!

-   Un réglage de distance plus petit peut être avantageux dans des environnements où le véhicule pourrait réagir à des objets éloignés qui ne sont pas directement sur son chemin.
-   Il ignorera maintenant les objets à plus de 0,2 mètre, se concentrant uniquement sur ceux qui sont juste devant lui.
    hint~

## Modification, étape 6

Maintenant que tu as vu comment ajuster la distance du sonar affecte le comportement du véhicule électrique, expérimentons davantage.

## Modification, étape 7

Ajuste le bloc `||fwdSensors:sonar1 distance is under 0.2 m||` à différentes valeurs comme 0,1, 0,3 et 0,7 mètre, et observe comment le véhicule réagit dans divers scénarios.

Que prédis-tu qu'il se passera à chaque changement? Comment la forme d'un obstacle pourrait-elle faire une différence avec le sonar?

~hint Dis-m'en plus!

-   Essaie de tester ton projet au même endroit après chaque ajustement pour recueillir des données cohérentes.
-   Pense à ajouter ou à retirer des obstacles pour un autre tour de tests afin de voir comment le véhicule s'adapte à différents environnements.
-   N'oublie pas de cliquer sur le bouton `|Télécharger|` en bas de la page pour mettre à jour ton code à chaque changement.
    hint~

## Modification, étape 8

Laquelle de ces valeurs a donné le meilleur résultat à ton véhicule électrique? Mets à jour ton bloc `||fwdSensors:sonar1 distance is under||` avec la mesure qui fonctionne le mieux.

## C'est l'heure du défi! @showdialog

Tu as peut-être remarqué qu'avec une distance de sonar plus courte, ton véhicule électrique se retrouve dans des endroits plus serrés. Simplement tourner n'est pas toujours la meilleure réponse. Apprenons à notre véhicule électrique de nouveaux trucs pour quand il rencontre des obstacles.

Pense aux instructions que nous pourrions ajouter au code pour résoudre ce problème.

## Défi, étape 1

Commençons par faire en sorte que le véhicule électrique _fasse une pause_ avant son prochain mouvement.

Ouvre la catégorie `||basic:Basic||`, fais glisser et dépose le bloc `||Basic:pause (ms) 100||` juste au-dessus du bloc `||fwdMotors:turn 15° in place||`. Change la valeur dans `||basic:pause (ms) 100||` à « 1000 ms ».

~hint Dis-m'en plus!

-   Le bloc `||basic:pause (ms) 1000||` retarde la prochaine action du véhicule de 1000 millisecondes, soit 1 seconde.
-   Cette courte pause te permet de mieux gérer la réaction du véhicule aux obstacles.
-   Clique sur `|Télécharger|` en bas de la page pour mettre à jour le nouveau code sur ton micro:bit. Teste-le!
    hint~

```block
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            // @highlight
            basic.pause(1000)
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
```

## Défi, étape 2

Améliorons cela en ajoutant un deuxième bloc `||basic:pause||` pour encadrer notre action `||fwdMotors:turn 15° in place||`.

Clique sur `||basic:Basic||`, fais glisser et dépose un autre bloc `||basic:pause (ms) 100||` juste sous le bloc `||fwdMotors:turn 15° in place||`. Change la valeur dans `||basic:pause (ms) 100||` à « 1000 ms ».

~hint Dis-m'en plus!

-   Ajouter une pause avant _et_ après l'action de tourner peut aider à simuler un scénario de conduite plus réaliste.
-   Cela donne au véhicule un moment pour « décider » de son prochain mouvement, un peu comme un conducteur à une intersection.
-   Cette configuration rend non seulement les mouvements du véhicule plus délibérés, mais aussi plus faciles à observer et à ajuster pendant les tests.
    hint~

```block
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            basic.pause(1000)
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
            // @highlight
            basic.pause(1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
```

## Défi, étape 3

Maintenant, aidons le véhicule électrique à réellement sortir de ces situations serrées.

Clique sur `||fwdMotors:Motors||`, fais glisser et dépose le bloc `||fwdMotors:drive forward at 50||` sous le deuxième bloc `||basic:pause 1000||`. À l'aide de la flèche déroulante, change `||fwdMotors:forward||` en `||fwdMotors:reverse||`.

~hint Dis-m'en plus!

-   En ajoutant ce bloc de marche arrière, nous permettons au véhicule électrique de reculer face aux obstacles, ce qui lui donne une meilleure stratégie pour éviter de rester coincé.
-   N'oublie pas de brancher ton micro:bit pour `|télécharger|` et tester le code mis à jour!
    hint~

```block
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            basic.pause(1000)
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
            basic.pause(1000)
            // @highlight
            fwdMotors.drive(-50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
```

## Défi, étape 4

Que penses-tu du code mis à jour?

Pour un défi supplémentaire, clique sur `||fwdMotors:Motors||` et fais glisser le bloc `||fwdMotors:stop motors||` dans l'espace de travail. Où penses-tu qu'il serait préférable de le placer?

~hint Dis-m'en plus!

-   Place le bloc `||fwdMotors:stop motors||` comme première action que la voiture entreprend après avoir rencontré un obstacle.
-   En positionnant le bloc `||fwdMotors:stop motors||` au début, nous nous assurons que le véhicule électrique s'arrête immédiatement, ce qui permet à tout obstacle de se dégager de son chemin.
-   C'est une excellente fonction de sécurité, semblable aux systèmes d'arrêt d'urgence utilisés dans les véhicules réels.
    hint~

```block
        if (fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
            // @highlight
            fwdMotors.drive(0, 0, 0)
            basic.pause(1000)
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
            basic.pause(1000)
            fwdMotors.drive(-50, 50, 1000)
        } else {
            fwdMotors.drive(50, -50, 1000)
        }
```

## Félicitations @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis au défi.

Comment as-tu surmonté ce défi?

Comment cela t'a-t-il fait sentir?

## Terminé

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

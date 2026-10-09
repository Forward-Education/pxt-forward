# Forward Education Satellite de montée du niveau de la mer - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    Logging = true
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
datalogger.onLogFull(function () {
    Logging = false
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
let WaterLevel = 0
let Logging = false
datalogger.setColumnTitles("Water Level")
Logging = false
loops.everyInterval(1000, function () {
    if (Logging == true) {
    	
    }
})
basic.forever(function () {
    WaterLevel = fwdSensors.sonar1.distance()
    basic.pause(1000)
    led.plotBarGraph(
    WaterLevel,
    0.3
    )
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un satellite pour surveiller la montée du niveau de la mer! Nous allons faire cela en quatre parties :

1. **Construire** notre satellite
2. **Ajouter du code** pour donner vie à notre projet
3. **Modifier** notre projet pour découvrir d'autres capteurs
4. Appliquer ce que nous avons appris avec une petite **expérience**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-render.webp" alt="Rendu complet du satellite de montée du niveau de la mer" style="display: block; width: 60%; margin:auto;">

## Composants électroniques requis @showdialog

![Composants électroniques requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs0A.webp)

## Blocs de construction requis @showdialog

![Blocs de construction requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs0B.webp)

## Matériaux de bricolage supplémentaires @showdialog

![Matériaux de bricolage supplémentaires](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs0C.webp)

## Étape de construction 1 @showdialog

![Étape de construction 1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs01.webp)

## Étape de construction 2 @showdialog

![Étape de construction 2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs02.webp)

## Étape de construction 3 @showdialog

![Étape de construction 3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs03.webp)

## Étape de construction 4 @showdialog

![Étape de construction 4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs04.webp)

## Étape de construction 5 @showdialog

![Étape de construction 5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs05.webp)

## Étape de construction 6 @showdialog

![Étape de construction 6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs06.webp)

## Étape de construction 7 @showdialog

![Étape de construction 7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs07.webp)

## Étape de construction 8 @showdialog

![Étape de construction 8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs08.webp)

## Étape de construction 9 @showdialog

![Étape de construction 9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs09.webp)

## Étape de construction 10 @showdialog

![Étape de construction 10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs10.webp)

## Étape de construction 11 @showdialog

![Étape de construction 11](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs11.webp)

## Étape de construction 12 @showdialog

![Étape de construction 12](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs12.webp)

## Étape de construction 13 @showdialog

![Étape de construction 13](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs13.webp)

## Étape de construction 14 @showdialog

![Étape de construction 14](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs14.webp)

## Étape de construction 15 @showdialog

![Étape de construction 15](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs15.webp)

## Étape de construction 16 @showdialog

![Étape de construction 16](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs16.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous avons un satellite qui **détecte le niveau de l'eau** et **visualise le niveau de l'eau à l'aide de l'écran DEL**. Explorons comment optimiser nos capteurs en **modifiant** notre code!

Pendant que tu avances dans les prochaines étapes :

-   Utilise les instructions en haut de l'écran pour **modifier** ton code.
-   Quand tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!

## Étape de modification 1

Testons notre satellite pour voir comment il peut surveiller la montée du niveau de la mer!

Avec ton modèle sur une table, déplace doucement ta main entre la table et le capteur `||fwdSensors:sonar||` tout en regardant l'`||led:LED display||` du micro:bit.

Que se passe-t-il?

~hint Dis-m'en plus!

-   Quand la distance entre la table et le capteur sonar est **plus grande**, plus de DEL s'allument!
-   Quand la distance entre ta main et le capteur sonar est **plus petite**, moins de DEL s'allument!
    hint~

## Étape de modification 2

Peux-tu identifier le **bloc de code** qui indique au code de contrôler l'`||led:LED display||` du micro:bit?

~hint Dis-m'en plus!

-   Le micro:bit recueille des données du capteur `||fwdSensors:sonar||`.

-   Le code crée un `||led:graph||` entre 0,3 mètre et ta main.

hint~

```blocks
basic.forever(function () {
    WaterLevel = fwdSensors.sonar1.distance()
    basic.pause(1000)
   //@highlight
   led.plotBarGraph(
    WaterLevel,
    0.3
    )
})
```

## Étape de modification 3

Configurons `||Datalogger:data logging||` pour suivre la montée du niveau de l'eau de mer.

L'enregistrement de données nous permettra de comparer la quantité de glace fondue à la montée de notre océan. Ces données peuvent nous aider à repérer des tendances, comme des différences entre la glace terrestre et la glace de mer, ou comment la température influence la vitesse de fonte de la glace.

## Étape de modification 4

Nous pouvons utiliser les blocs de l'[extension Data Logger](https://microbit.org/get-started/user-guide/data-logging/) pour enregistrer le niveau de l'eau de mer pendant que la glace fond.

Dans notre code, nous nous sommes déjà assurés d'avoir un moyen d'activer les journaux de données avec la variable `||variables:Logging||`, et de supprimer les anciennes données avec le bloc `||Datalogger:delete log||`.

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    // @highlight
    Logging = true
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})

input.onButtonPressed(Button.AB, function () {
  // @highlight
    datalogger.deleteLog()
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
})
```

## Étape de modification 5

Utilise le bloc `||Datalogger:log data||` pour enregistrer la valeur de `||variables:WaterLevel||` pendant que ta glace fond. N'oublie pas de nommer ta colonne **« Water Level »**.

```blocks
loops.everyInterval(1000, function () {
    if (Logging == true) {
    // @highlight
    datalogger.log(datalogger.createCV("Water Level", WaterLevel))
    }
})
```

## Étape de modification 6

Réduisons la fréquence à laquelle nos données sont enregistrées.

Sélectionne le menu déroulant du bloc `||loops:everyInterval||`. Selon toi, quelle serait une meilleure fréquence pour enregistrer la fonte de notre glace?

~hint Dis-m'en plus!
Essaie de sélectionner une fois par minute, soit 60 000 millisecondes.
hint~

```blocks
// @highlight
    loops.everyInterval(60000, function () {
       datalogger.log(datalogger.createCV("Water Level", WaterLevel))
})
```

## Activité 4 : Expérience sur le niveau de la mer

Maintenant que nous avons **modifié** notre code pour comprendre comment notre satellite **recueille des données**, nous allons ajouter de l'eau!

N'oublie pas d'appuyer sur le bouton `|Télécharger|` pour télécharger notre code modifié.

**Important!** N'oublie pas que notre projet utilise des fils électroniques et des capteurs qui ne doivent pas se mouiller! Si une partie autre que les blocs de construction se mouille, éteins ton projet et sèche-le complètement avant de continuer.

## Étape d'expérience 1

À l'aide de matériaux de bricolage, ou de blocs de construction de la trousse Action climatique, construisons un **plateau de terre** pour que notre glace puisse s'y poser!

-   La **glace terrestre**, comme les glaciers, repose gelée sur la terre, et **s'écoule** dans l'océan.
-   La **glace de mer**, comme les icebergs, flotte dans l'eau, et se trouve **déjà** dans l'océan quand elle fond.

~hint Dis-m'en plus

Quand nous construisons un **plateau de terre** pour que notre glace puisse s'y poser, nous pouvons voir comment la fonte d'un **glacier** influence la montée du niveau de la mer.

1. Construis ton plateau de terre
2. Place ta glace dessus
3. Remplis d'eau pour que la glace repose au-dessus du niveau de l'eau.
   hint~

## Étape de construction 17 @showdialog

Pour aider ton bloc de construction circulaire vert à flotter dans l'eau, enveloppe-le de pellicule plastique.

![Étape de construction 17](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs17.webp)

## Étape de construction 18 @showdialog

Place ton modèle dans un contenant étanche rempli au quart d'**eau froide.**

Fais attention de ne pas laisser tomber de composants électroniques dans l'eau.

![Étape de construction 18](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs18.webp)

## Étape de construction 19 @showdialog

Remplis un côté de ton contenant de glace sur le dessus du plateau de terre que tu as construit.

Le grand bloc de construction rectangulaire vert devrait empêcher la glace d'atteindre l'autre côté du contenant.

![Étape de construction 19](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs19.webp)

## Étape de construction 20 @showdialog

Place ton bloc de construction circulaire vert du côté opposé du contenant.

Le bloc circulaire est comme **notre main**, il devrait se trouver dans le contenant sous le capteur sonar.

![Étape de construction 20](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs20.webp)

## Étape d'expérience 2

Pense à ce qui arrivera au niveau de l'eau pendant que ta glace fond :

1. Est-ce que l'eau va monter, rester la même, ou baisser?
2. De combien va-t-elle monter ou baisser?

Écris ta prédiction!

## Étape d'expérience 3

Il est maintenant temps de tester ta prédiction!

Appuie sur les boutons **A et B** de ton micro:bit pour `||datalogger:delete||` les anciens journaux. Ensuite, appuie sur le `||fwdSensors:touch sensor||` pour activer ton journal de données.

~hint Dis-m'en plus!
Quand tu supprimes ton journal de données et que tu commences à collecter des journaux de données, le micro:bit fera deux sons différents!

Pendant que la glace fond et que l'eau monte :

-   Notre `||datalogger:data logger||` enregistrera le niveau du capteur `||fwdSensors:sonar||` grâce à la variable `||variables:WaterLevel||` dans un tableau que nous pourrons consulter plus tard.
-   Moins de `||led:leds||` sur le micro:bit s'allumeront.

Selon la taille de ton contenant et de ton plateau de terre, l'eau montera plus ou moins fortement pendant que ta glace fond.
hint~

## Étape d'expérience 4

À quelle vitesse la glace a-t-elle fondu avec l'eau froide?

Rebranche le micro:bit et [consulte les données du journal](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

Fais une copie de ton journal de données, et sauvegarde-la quelque part sur ton ordinateur pour plus tard.

## Étape d'expérience 5

Prends un nouveau contenant avec la **même quantité de glace**, mais cette fois, utilise de l'**eau chaude**.

À quelle vitesse penses-tu que ta glace fondra sur ton plateau de terre avec l'eau plus chaude? Écris ta prédiction!

~hint Dis-m'en plus!
N'oublie pas d'utiliser la même quantité de glace et d'eau pour pouvoir comparer le niveau de montée de l'eau dans le temps.
hint~

## Étape d'expérience 6

Une fois que ta glace a fondu, rebranche ton micro:bit à ton ordinateur et [consulte les données du journal](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

Sauvegarde ton journal de données sur ton ordinateur pour la prochaine étape.

## Étape d'expérience 7

Comment tes deux journaux de données se comparent-ils? Crée un graphique pour visualiser ton expérience sur le niveau de l'eau.

~hint Dis-m'en plus!
Tu peux choisir de créer un graphique à barres ou un graphique linéaire, avec les axes suivants :

-   X : Temps
-   Y : Pourcentage de glace fondue
-   Couleur de la ligne/barre : Eau froide contre eau chaude
    hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

Quelque chose t'a-t-il surpris à propos du projet?

## Réflexion @showdialog

1. Comment le fait d'utiliser des prédictions et la collecte de données t'a-t-il aidé à mieux comprendre ton code?

2. Comment penses-tu qu'une quantité différente de glace changerait les résultats de ton expérience?

3. Comment la température de l'eau a-t-elle influencé la vitesse de fonte de la glace?

4. Comment le fait de créer un plateau de terre dans ton contenant pour que la glace puisse s'y poser change-t-il l'ampleur de la montée de ta mer?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

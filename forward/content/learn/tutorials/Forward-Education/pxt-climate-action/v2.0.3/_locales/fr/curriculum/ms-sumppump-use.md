# Pompe de puisard - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
input.onButtonPressed(Button.AB, function () {
    fwdMotors.pump.setActive(false)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.pump.timedRun(500)
})
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Over)) {
        fwdMotors.pump.timedRun(500)
        for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
```

## Pompe de puisard - Tutoriel Utiliser @showdialog

Aujourd'hui, nous construisons un modèle de pompe de puisard pour protéger nos maisons des inondations!

Ajoutons du code de départ pour que notre pompe s'active quand le niveau d'eau monte!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-sumppump-render.webp" alt="Rendu de la construction de la pompe de puisard" style="display: block; width: 60%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton micro:bit.

## Étape 4

Apprenons comment fonctionne notre modèle de pompe de puisard **avant** d'y ajouter de l'eau.

Repense à ce que nous avons appris sur les pompes de puisard. Selon toi, que représentent les composants électroniques et les contenants étanches dans ton **modèle**?

~hint Dis-m'en plus!

-   Le **contenant étanche** contenant le `||fwdSensors:capteur d'humidité||` et la `||fwdMotors:pompe à eau||` représente le **puisard** où l'eau s'accumule.

-   Le `||fwdSensors:capteur d'humidité||` mesure le pourcentage d'eau dans le puisard.

-   Le **micro:bit** contrôle la `||fwdMotors:pompe à eau||` et communique la quantité d'eau dans le puisard.

-   La `||fwdMotors:pompe à eau||` déplace l'eau hors de notre puisard vers un **égout pluvial ou une zone gazonnée**.

-   La **plaque de connexion** alimente le modèle grâce à sa **pile**.

-   Ces composants aident à communiquer aux **plombiers** et aux propriétaires si la **pompe de puisard** doit être activée pour aider à abaisser la **nappe phréatique**.

hint~

## Étape 5

Regarde certains des **blocs de code** dans l'espace de travail. Selon toi, que se passera-t-il quand tu appuies sur le **logo du micro:bit**?

~hint Dis-m'en plus!

La `||fwdMotors:pompe à eau||` fonctionne pendant une demi-seconde avant de se rééteindre!

hint~

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
// @highlight
 fwdMotors.pump.timedRun(500)
})
```

## Étape 6

Testons le fonctionnement du `||fwdSensors:capteur d'humidité||`. Avec le câble du capteur branché, essaie de saisir doucement le `||fwdSensors:capteur d'humidité||` dans ton poing.

Que remarques-tu?

~hint Dis-m'en plus!

Le `||fwdSensors:capteur d'humidité||` mesure l'humidité dans ta main, ce qui active le reste du code qui contrôle notre modèle de pompe de puisard.

hint~

## Étape 7

Regardons le code dans la boucle `||basic:forever||`.

Quel pourcentage d'humidité le `||fwdSensors:capteur d'humidité||` doit-il détecter avant d'activer la **pompe de puisard**?

~hint Dis-m'en plus!

Quand le `||fwdSensors:moisutre sensor||` détecte que le puisard est **rempli à plus de 20 %**, la pompe de puisard s'active!

hint~

```blocks
basic.forever(function () {
// @highlight
    if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Over)) {
        	
        }
})
```

## Étape 8

Quels blocs de code dans la boucle `||basic:forever||` contrôlent la **durée** pendant laquelle la pompe à eau fonctionne?

~hint Dis-m'en plus!

Le bloc `||fwdMotors: run pump for||` contrôle combien de temps la pompe reste allumée.

500 ms équivaut à 1/2 seconde!

hint~

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Over)) {
// @highlight
 fwdMotors.pump.timedRun(500)
}
})
```

## Étape 9

Peux-tu décrire comment fonctionne la boucle `||loops:repeat||`?

~hint Dis-m'en plus!

Le bloc `||loops:repeat||` répète les blocs de code imbriqués à l'intérieur de la boucle deux fois!

Les blocs `||music:play tone||` jouent un son grâce au **micro:bit** pour communiquer à un **plombier** ou à un propriétaire que la pompe de puisard est allumée.

hint~

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(20, fwdEnums.OverUnder.Over)) {
        fwdMotors.pump.timedRun(500)
// @highlight
  for (let index = 0; index < 2; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
```

## Étape 10 @showdialog

Maintenant que nous avons **utilisé** notre code pour comprendre comment notre **pompe de puisard** détecte à quel point le puisard est rempli grâce à notre main, nous allons ajouter de l'eau!

N'oublie pas de rattacher ton `||fwdSensors:capteur d'humidité||` à ton **modèle de pompe de puisard**

Assure-toi que ton tube d'eau est bien connecté à ta pompe à eau, et positionne le bout du tube dans ton deuxième contenant étanche.

## Étape 11 @showdialog

Important! Rappelle-toi que notre projet utilise des fils électroniques et des capteurs qui ne devraient pas devenir mouillés! Si une partie autre que les blocs de construction devient mouillée, éteins ton projet et sèche-le complètement avant de continuer.

## Étape 12

Verse délicatement de l'eau dans le contenant contenant ton `||fwdSensors:capteur d'humidité||` et ta `||fwdMotors:pompe à eau||`.

Que remarques-tu quand tu remplis le contenant à **plus de 20 %**?

~hint Dis-m'en plus!

La pompe de puisard s'active jusqu'à ce que le contenant soit rempli à moins de 20 %!

hint~

## Étape 13

Repense à ce que tu as appris sur les pompes de puisard.

Que représente **l'eau que tu as ajoutée à ton puisard**?

~hint Dis-m'en plus!

L'eau que tu as ajoutée à ton modèle représente une journée pluvieuse! Quand la pluie s'infiltre dans le sol, elle ajoute de la pression sur les fondations d'une maison et fait monter la nappe phréatique.

L'eau s'écoule dans le puisard jusqu'à ce que la pompe de puisard s'active pour l'éloigner de la maison.

hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris à propos du projet?

## Réflexion @showdialog

1. Notre modèle de pompe de puisard utilise un **son** pour communiquer quand elle est allumée. Comment pourrait-elle communiquer autrement quand la pompe de puisard est activée?
2. Comment l'utilisation de ton modèle de pompe de puisard pourrait-elle aider à rendre ta ville plus durable?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

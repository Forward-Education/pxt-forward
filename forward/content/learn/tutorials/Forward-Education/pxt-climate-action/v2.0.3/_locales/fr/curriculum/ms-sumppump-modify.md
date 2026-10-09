# Pompes de puisard - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
let threshold = 0
threshold = 25

input.onButtonPressed(Button.A, function () {
   	
   })

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

## Pompe de puisard - Tutoriel Modifier @showdialog

Aujourd'hui, nous construisons un modèle de pompe de puisard pour protéger nos maisons des inondations!

Nous allons ajouter du code de départ pour que notre pompe s'active lorsque le niveau d'eau monte. Ensuite, nous allons modifier le code pour le personnaliser!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-sumppump-render.webp" alt="Rendu complet de la construction de la pompe de puisard" style="display: block; width: 60%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur le micro:bit.

## Étape 4

Apprenons comment fonctionne notre modèle de pompe de puisard **avant** d'y ajouter de l'eau.

Avec le câble du capteur branché, essaie de saisir doucement le `||fwdSensors:capteur d'humidité||` dans ton poing.

Que remarques-tu?

~hint Dis-m'en plus!

Le `||fwdSensors:capteur d'humidité||` mesure l'humidité dans ta main, ce qui active le reste du code qui contrôle notre modèle de pompe de puisard.

hint~

## Étape 5

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

## Étape 6

Maintenant que nous comprenons quand le `||fwdSensors:capteur d'humidité||` active la pompe de puisard dans la boucle `||basic:forever||`, **modifions** notre code pour ajouter plus de fonctionnalités.

Notre code inclut une variable `||variables:threshold||` dans l'événement `||basic:on start||` qui est réglée à la valeur **25**.

Quel bloc de code devrions-nous utiliser pour activer la pompe de puisard quand le `||fwdSensors:capteur d'humidité||` est égal au `||variables:threshold||`?

~hint Dis-m'en plus!

Fais glisser un bloc `||variables:threshold||` pour remplacer la valeur **20** dans le bloc `||fwdSensors:moisture sensor is over||`.

N'oublie pas de `|Télécharger|` ton code et de tester ton `||fwdSensors:capteur d'humidité||` pour vérifier que ta pompe s'active encore avec ta main!

hint~

```blocks
//@highlight
let threshold = 25
basic.forever(function () {
 // @highlight
  if (fwdSensors.moisture1.isPastThreshold(threshold, fwdEnums.OverUnder.Over)) {
	
}
})
```

## Étape 7

Ajoutons une fonctionnalité pour **diminuer** le seuil qui active la pompe de puisard.

Nous allons utiliser l'événement vide `||input:on button A||` dans notre espace de travail pour le faire.

Quel bloc de code devrions-nous utiliser pour **changer** la valeur de la variable `||variables:threshold||` de **-5** quand le bouton **A** est pressé?

~hint Dis-m'en plus!

Nous pouvons utiliser un bloc `||variables:change threshold by||` dans le `||input:on button A||`

Change la valeur de **1** à **-5**

hint~

```blocks

input.onButtonPressed(Button.A, function () {
// @highlight
threshold += -5
 })
```

## Étape 8

Maintenant que nous pouvons **abaisser** manuellement la valeur du `||variables:threshold||`, nous devons mettre à jour notre code pour communiquer la valeur à mesure qu'elle change.

Quel bloc de code devrais-tu utiliser pour **afficher la valeur du seuil** chaque fois que le bouton **A** est pressé? Le nombre devrait **s'afficher pendant 1 seconde**, avant que l'**écran du micro:bit s'efface**.

~hint Dis-m'en plus!

Nous devons ajouter des blocs de code à notre événement `||event:on button A||`.

1. Fais glisser un bloc `||basic:showNumber||` et dépose-le sous le bloc `||variables:change Threshold||`.
2. Fais glisser et dépose un bloc `||variables:threshold||` dans le champ vide du bloc `||basic:showNumber||`.
3. Ajoute un bloc `||basic:pause||`, et règle la valeur à **1 seconde**.
4. Ajoute un bloc `||basic:clear screen||` sous le bloc `||basic:pause||`.

N'oublie pas de `|Télécharger|` ton code sur ton micro:bit et de tester son fonctionnement en appuyant sur le bouton **A** de ton micro:bit!

hint~

```blocks
input.onButtonPressed(Button.A, function () {
    threshold += -5
// @highlight
 basic.showNumber(threshold)
// @highlight
basic.pause(1000)
// @highlight
   basic.clearScreen()
})
```

## Étape 9

Notre pompe de puisard peut maintenant être mise à jour manuellement pour abaisser le `||variables:threshold||` qui active la `||fwdMotors:pompe à eau||`.

Comment pouvons-nous ajouter la fonctionnalité pour **augmenter** la variable de seuil de **5** quand le bouton **B** est pressé?

~hint Dis-m'en plus!

Nous pouvons dupliquer l'événement `||input:on button A||` et modifier une partie du code.

1. Fais un clic droit sur l'événement `||input:on button A||` et duplique le code.
2. Clique sur le menu déroulant dans `||input: on button A pressed||` et change-le pour **B**
3. Change la valeur du bloc `||variables:change threshold by||` de **-5** à **5**

N'oublie pas de `|Télécharger|` ton code sur ton micro:bit pour tester son fonctionnement en appuyant sur le bouton **B** de ton micro:bit!

hint~

```blocks
input.onButtonPressed(Button.B, function () {
// @highlight
   threshold += 5
basic.showNumber(threshold)
basic.pause(1000)
basic.clearScreen()
})
```

## Étape 10

Regarde le code dans la boucle `||basic:forever||`. Quels blocs de code contrôlent la **durée** pendant laquelle la pompe à eau fonctionne lorsqu'elle est activée?

~hint Dis-m'en plus!

Le bloc `||fwdMotors: run pump for||` contrôle combien de temps la pompe reste allumée.

500 ms équivaut à 1/2 seconde!

hint~

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(threshold, fwdEnums.OverUnder.Over)) {
// @highlight
 fwdMotors.pump.timedRun(500)
}
})
```

## Étape 11

Augmentons la quantité d'eau retirée du puisard quand la pompe de puisard s'active.

Quel bloc de code devrais-tu modifier pour que la `||fwdMotors:pompe à eau||` fonctionne **deux fois plus longtemps**?

~hint Dis-m'en plus!

En ce moment, notre `||fwdMotors:pompe à eau||` fonctionne pendant 1/2 seconde chaque fois qu'elle est activée.

Nous devons changer notre bloc `||fwdMotors:run pump for||` à 1 seconde.

N'oublie pas d'appuyer sur le bouton `|Télécharger|` quand tu es prêt à retester ton code.

hint~

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.isPastThreshold(threshold, fwdEnums.OverUnder.Over)) {
// @highlight
 fwdMotors.pump.timedRun(1000)
}
})
```

## Étape 12 @showdialog

Maintenant que nous avons **modifié** notre code pour améliorer la façon dont notre **pompe de puisard** détecte à quel point le puisard est rempli grâce à notre main, nous allons ajouter de l'eau!

N'oublie pas de rattacher ton `||fwdSensors:capteur d'humidité||` à ton **modèle de pompe de puisard**

Assure-toi que ton tube d'eau est bien connecté à ta pompe à eau, et positionne le bout du tube dans ton deuxième contenant étanche.

## Étape 13 @showdialog

Important! Rappelle-toi que notre projet utilise des fils électroniques et des capteurs qui ne devraient pas devenir mouillés! Si une partie autre que les blocs de construction devient mouillée, éteins ton projet et sèche-le complètement avant de continuer.

## Étape 14

Verse délicatement de l'eau dans le contenant contenant ton `||fwdSensors:capteur d'humidité||` et ta `||fwdMotors:pompe à eau||`.

Que remarques-tu quand tu remplis le contenant à **plus de 25 %**?

~hint Dis-m'en plus!

La pompe de puisard s'active jusqu'à ce que le contenant soit rempli à moins de 25 %!

hint~

## Étape 15

Essaie d'appuyer sur le bouton **A** ou **B** de ton micro:bit. Que remarques-tu qui change dans la rapidité avec laquelle ta `||fwdMotors:pompe à eau||` s'active?

~hint Dis-m'en plus!

Quand tu appuies sur le bouton **A**, le `||variables:threshold||` diminue de 5, ce qui fait que le `||fwdSensors:capteur d'humidité||` active la `||fwdMotors:pompe à eau||` **plus souvent**.

Quand tu appuies sur le bouton **B**, le `||variables:threshold||` augmente de 5, ce qui fait que le `||fwdSensors:capteur d'humidité||` active la `||fwdMotors:pompe à eau||` **moins souvent**.

hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris à propos du projet?

## Réflexion @showdialog

1. Selon toi, quelle est la valeur d'avoir la possibilité de changer **manuellement** le seuil de notre pompe de puisard?
2. Notre modèle de pompe de puisard utilise un **son** pour communiquer quand elle est allumée. Comment pourrait-elle communiquer autrement quand la pompe de puisard est activée?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

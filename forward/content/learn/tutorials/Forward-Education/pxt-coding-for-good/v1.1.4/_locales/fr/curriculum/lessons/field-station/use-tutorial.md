# Station de terrain – Tutoriel d'utilisation

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Loud")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
radio.setGroup(1)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
/* Reflect:
Q1:
Q2: */
```

## Station de terrain - Tutoriel d'utilisation @showdialog

Dans ce tutoriel, tu vas **utiliser** un programme pour explorer comment ta station de terrain fonctionne.

1. **Construis** : Assemble ta station de terrain et ton micro:bit de terrain

2. **Connecte** : Couple tes micro:bit et télécharge le code de départ

3. **Utilise** : Lance le programme et explore le code

## Préparation : Connecte les câbles @showdialog

IMPORTANT ! Assure-toi que ta station de terrain est assemblée et que le micro:bit de la plaque de connexion est branché à ton ordinateur. Garde ton micro:bit de terrain à portée de main.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connecte le câble USB au micro:bit et à l'ordinateur, allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur **les deux** micro:bit. Les deux appareils ont besoin du même code.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel avec un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions. 

## Configuration à deux appareils

Ce projet utilise deux micro:bit qui travaillent en équipe.

* Le **micro:bit de terrain** écoute les sons et envoie des messages sans fil

* La **station de terrain** reçoit les messages et allume l'``||fwdLights:LED Ring||``

## Repère : Les événements

Un **événement** s'exécute quand quelque chose de précis se produit, comme appuyer sur un bouton. Le code dans l'événement s'exécute seulement quand la condition est remplie. 

Regarde ton code dans ton espace de travail : où un **événement** est-il utilisé ?

~hint Dis-m'en plus !

Le bloc ``||input:On Loud Sound||`` est un événement ! Il attend que le microphone entende un son fort, puis il s'exécute.

hint~

```blocks
// @highlight
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Loud")
})
```

## Repère : La séquence

**Séquence** signifie que le programme fait les choses dans l'ordre. Il termine une étape, puis commence la suivante.

Quel est un exemple de **séquence** dans ce programme ? 

~hint Dis-m'en plus !

L'anneau LED a une séquence !

1. D'abord, l'``||fwdLights:LED Ring||`` devient rouge.

2. Ensuite, le programme attend 1 seconde.

3. Enfin, l'``||fwdLights:LED Ring||`` s'éteint.

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        // @highlight
        basic.pause(1000)
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Repère : La sélection

**Sélection** signifie que le programme vérifie quelque chose avant de décider quoi faire.

Quelle partie de ton code utilise la **sélection** ?

~hint Dis-m'en plus !

Le bloc ``||logic:If||`` est une **condition**. Il vérifie **si** le message du micro:bit de terrain dit « Loud ».

* Si oui, l'``||fwdLights:LED Ring||`` devient rouge. 

* Sinon, l'``||fwdLights:LED Ring||`` reste éteint. 

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    // @highlight
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Repère : L'itération

**Itération** signifie que le programme répète sans cesse les mêmes étapes.

Quelle partie de ton code utilise l'**itération** ?

~hint Dis-m'en plus !

La **boucle** ``||basic:Forever||`` continue de lire le niveau sonore et de mettre à jour le graphique à barres. 

Tant que le micro:bit est alimenté, le code dans la **boucle** ``||basic:Forever||`` s'exécute.

hint~

```blocks
// @highlight
basic.forever(function () {
    led.plotBarGraph(input.soundLevel(), 255)
})
```

## Explore : Observe le programme

Maintenant que nous avons examiné comment notre programme fonctionne, testons-le dans la vraie vie ! 

Débranche la station de terrain et allume les deux appareils. Regarde l'``||basic:microbit Display||`` de ta **station de terrain**.

Que se passe-t-il quand tu fais un bruit fort près du **micro:bit de terrain** ?

~hint Dis-m'en plus !

Le graphique à barres sur l'``||basic:microbit Display||`` grandit quand la pièce est plus bruyante. Plus le son est fort, plus la barre est haute.

hint~

## Prédis : Son fort

Regarde l'événement ``||input:On Loud Sound||``. Que penses-tu qu'il va se passer sur la station de terrain quand tu feras un son fort près du micro:bit de terrain ?

```blocks
// @highlight
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Loud")
})
```

## Essaye : Son fort

Tape des mains ou crie près du micro:bit de terrain. Observe l'``||fwdLights:LED Ring||`` de la station de terrain.

Quelle couleur est apparue ? Combien de temps a-t-elle duré ?

~hint Dis-m'en plus !

Le micro:bit de terrain a entendu le son et a envoyé un message « Loud » par radio.

La station de terrain a reçu le message et a fait clignoter l'``||fwdLights:LED Ring||`` en rouge pendant 1 seconde.

hint~

## Enquête : Comment l'information voyage

Décris la séquence de ton code, en commençant par le microphone du micro:bit de terrain. 

Où va l'information ensuite ? Où finit-elle ?

~hint Dis-m'en plus !

1. Le microphone détecte un son fort et l'événement ``||input:On Loud Sound||`` s'exécute.

2. Il envoie un message sans fil sur le groupe 1, comme un canal partagé.

3. La station de terrain écoute sur le même groupe. Elle reçoit le message.

4. La condition ``||logic:If||`` vérifie le message et allume l'``||fwdLights:LED Ring||``.

Les appareils connectés sur Internet fonctionnent de la même façon : un appareil envoie des données, un autre les reçoit et réagit.

hint~

## Réfléchis

Dans ce tutoriel, tu as utilisé des **événements**, la **séquence**, la **sélection** et l'**itération** pour construire un système d'alerte sans fil à deux appareils. Note tes réponses dans l'espace de travail.

1. Que se passe-t-il quand un son fort est détecté ? Quelle partie du code rend cela possible ?

2. Comment l'information passe-t-elle du micro:bit de terrain à l'``||fwdLights:LED Ring||`` ? Décris chaque étape.

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ton programme :

- ``||input:On Loud Sound||`` : Un **événement** qui s'exécute quand le micro:bit de terrain entend un son fort et envoie un message « Loud » sans fil

- ``||radio:On Received String||`` : Un **événement** qui reçoit le message et utilise la **sélection** pour décider quelle couleur afficher

- ``||basic:Forever||`` : Une **boucle** qui continue de lire et d'afficher le niveau sonore sur l'écran de chaque micro:bit

- ``||radio:Set Group||`` : Définit le canal partagé pour que les deux micro:bit puissent communiquer

À la prochaine étape, clique sur le bouton ``|Done|`` pour quitter le tutoriel.

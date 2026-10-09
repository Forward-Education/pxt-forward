# Station de terrain – Tutoriel Modifier

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
    if (receivedString == "") {
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
Q2:
Q3: */
```

## Station de terrain - Tutoriel Modifier @showdialog

Dans ce tutoriel, tu vas **modifier** le code pour ajouter un deuxième événement afin que ta station de terrain puisse te dire quand l'environnement devient silencieux.

1. **Construis** : Assemble ta station de terrain et ton micro:bit de terrain

2. **Connecte** : Couple tes micro:bit et télécharge le code de départ

3. **Modifie** : Ajoute un événement « silence » et teste ta connexion sans fil à différents endroits

## Préparation : Connecter les câbles @showdialog

IMPORTANT ! Assure-toi que ta station de terrain est assemblée et que le micro:bit de la plaque de connexion est branché à ton ordinateur. Garde ton micro:bit de terrain à proximité.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Branche le câble USB au micro:bit et à l'ordinateur, puis allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur les **deux** micro:bit. Les deux appareils ont besoin du même code.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Installation à deux appareils

Ce projet utilise deux micro:bit qui travaillent en équipe.

* Le **micro:bit de terrain** écoute les sons et envoie des messages sans fil

* La **station de terrain** reçoit les messages et allume l'``||fwdLights:LED Ring||``

## Explore : Comment le programme fonctionne

Teste le code de départ en tapant des mains près de ton micro:bit de terrain. Que se passe-t-il avec l'``||fwdLights:LED Ring||`` ?

~hint Dis-m'en plus !

1. L'événement ``||input:On Loud Sound||`` s'exécute quand le micro:bit de terrain entend un son fort. Il envoie un message « Loud » sans fil.

2. L'événement ``||radio:On Received String||`` s'exécute sur la station de terrain. Il vérifie le message et fait clignoter l'``||fwdLights:LED Ring||`` en rouge.

hint~

## Modifie : Ajouter l'événement silencieux

Pour l'instant, le micro:bit de terrain envoie un message seulement quand il entend un son fort.

Fais glisser un événement ``||input:On Loud Sound||`` dans ton espace de travail. Clique sur le menu déroulant **Loud** et sélectionne **Quiet**.

~hint Dis-m'en plus !

C'est un nouvel **événement**. Il s'exécutera quand le microphone détectera que la pièce est devenue silencieuse.

hint~

```blocks
// @highlight
input.onSound(DetectedSound.Quiet, function () {
})
```

## Modifie : Envoyer le message « Quiet »

Notre événement a besoin d'instructions !

Fais glisser un bloc ``||radio:Send String||`` depuis ta boîte à outils et ajoute-le dans ton événement ``||input:On Quiet Sound||``.

Règle le texte sur « Quiet ».

~hint Dis-m'en plus !

Maintenant, les deux événements envoient un message : « Loud » quand c'est fort, « Quiet » quand c'est silencieux.

hint~

```blocks
input.onSound(DetectedSound.Quiet, function () {
    // @highlight
    radio.sendString("Quiet")
})
```

## Modifie : Ajouter la condition Si

Ensuite, trouve la condition ``||logic:If||`` vide dans ton espace de travail. Règle la condition sur : receivedString = "Quiet".

~hint Dis-m'en plus !

C'est une deuxième **condition**.

La station de terrain vérifie maintenant deux messages différents : « Loud » et « Quiet ».

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
    // @highlight
    if (receivedString == "Quiet") {
    }
})
```

## Modifie : Ajouter le signal vert

Notre station de terrain a besoin de savoir *ce qu'elle* doit faire quand elle reçoit le message « Quiet » du terrain.

Fais glisser ``||fwdLights:Set All LEDRing Pixels To||`` à l'intérieur de ton bloc ``||logic:If||``. Règle la couleur sur vert.

~hint Dis-m'en plus !

Le vert signifie que l'environnement est sûr et silencieux.

Maintenant, l'``||fwdLights:LED Ring||`` a deux états : rouge quand c'est fort, vert quand c'est silencieux.

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
    if (receivedString == "Quiet") {
    // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
})
```

## Teste : Essaye à proximité

``|Télécharger|`` ton code mis à jour sur tes **deux** micro:bit !

Comment ta station de terrain réagit-elle quand tu fais un son fort près de ton appareil de terrain ? Que se passe-t-il quand la pièce est silencieuse ?

~hint Dis-m'en plus !

* L'événement ``||input:On Quiet Sound||`` se déclenche et envoie « Quiet » par radio.

* La station de terrain reçoit « Quiet » et met l'``||fwdLights:LED Ring||`` en vert.

hint~

## Teste : Déplace-toi vers un nouvel endroit

Emporte le micro:bit de terrain à un autre endroit. Essaye un endroit éloigné ou derrière un mur.

Fais un son fort, puis reste silencieux. Est-ce que l'``||fwdLights:LED Ring||`` répond toujours ?

~hint Dis-m'en plus !

Les signaux radio sans fil peuvent être bloqués par des murs ou perdus avec la distance.

Si l'``||fwdLights:LED Ring||`` arrête de répondre, le signal est trop faible pour passer.

hint~

## Enquête : Filaire ou sans fil

Tes deux micro:bit communiquent grâce à des signaux radio. La radio est sans fil — aucun câble ne les relie.

Quel est un avantage du sans fil ? Quel est un de ses problèmes ?

~hint Dis-m'en plus !

Le sans fil est pratique parce que le micro:bit de terrain peut être utilisé loin de ta station de terrain.

Les signaux sans fil s'affaiblissent sur de longues distances et à travers les murs.

hint~

## Réfléchis

Dans ce tutoriel, tu as **modifié** un programme pour ajouter un nouvel **événement** et tu as testé comment les connexions sans fil fonctionnent dans le monde réel. Note tes réponses dans l'espace de travail.

1. Pense à quelque chose qui a été difficile dans ce projet. Comment as-tu trouvé la solution ?

2. Quel est un avantage et un problème d'une connexion sans fil pour une station d'observation de la faune ?

3. Quel autre changement ferais-tu pour améliorer ta station de terrain ?

## Félicitations !

Voici un résumé de ce que tu as modifié :

- ``||input:On Quiet Sound||`` : un nouvel **événement** qui s'exécute quand le micro:bit de terrain entend le silence et envoie un message « Quiet » sans fil

- ``||radio:On Received String||`` : mis à jour avec une deuxième condition ``||logic:If||`` pour que la station de terrain réponde à la fois à « Loud » et à « Quiet »

- ``||fwdLights:LED Ring||`` : affiche maintenant du vert quand l'environnement est silencieux

À l'étape suivante, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

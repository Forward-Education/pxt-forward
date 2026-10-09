# Balise d'avalanche – Tutoriel Utiliser

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
})
let lastReceived = 0
let Signal = 0
radio.setGroup(1)
fwdSensors.initializeLcd()
Signal = 0
lastReceived = 0
loops.everyInterval(1000, function () {
    radio.sendString("")
})
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
    }
})
/* Reflect:
Q1:
Q2: */
```

## Balise d'avalanche - Tutoriel Utiliser @showdialog

Dans ce tutoriel, tu vas **utiliser** un programme pour explorer comment ton système d'avalanche fonctionne.

1. **Construis** : Assemble ta balise d'avalanche et ton appareil de recherche

2. **Connecte** : Couple tes micro:bit et télécharge le code de départ

3. **Utilise** : Lance le programme et pars à la chasse à la balise

## Préparation : Balise d'avalanche @showdialog

IMPORTANT ! Assure-toi que ton appareil de recherche est assemblé et que le micro:bit de la plaque de connexion est branché à ton ordinateur. Garde ton micro:bit balise à proximité.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Branche le câble USB au micro:bit et à l'ordinateur, puis allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur les **deux** micro:bit. Les deux appareils ont besoin du même code.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Installation à deux appareils

Ce projet utilise deux micro:bit qui travaillent en équipe.

* La **balise d'avalanche** (alimentée par un CHARGE pour micro:bit). Elle est cachée dans la zone de recherche.

* L'**appareil de recherche** (micro:bit de la plaque de connexion) utilise l'``||fwdSensors:LCD Screen||`` pour chercher la balise d'avalanche.

## Identifie : L'émetteur

Dans un réseau sans fil, l'**émetteur** envoie le signal.

Quelle partie de ton code est l'émetteur ?

~hint Dis-m'en plus !

Le bloc ``||radio: Radio Send String ||`` envoie un signal depuis le micro:bit.

Comme nous avons téléchargé le même programme sur les deux micro:bit, ils transmettent tous les deux leur signal.

hint~

```blocks
loops.everyInterval(1000, function () {
// @highlight
    radio.sendString(" ")
})
```

## Identifie : Le canal

Dans un réseau sans fil, les appareils doivent utiliser le même **canal** pour communiquer.

Quelle partie de ton code définit le canal ?

~hint Dis-m'en plus !

``||radio:Set Group||`` règle le groupe radio sur 1. Les deux micro:bit utilisent le même groupe, alors ils peuvent s'entendre.

Les appareils sur des groupes différents ne peuvent pas communiquer. Un groupe radio fonctionne comme un canal sur un talkie-walkie.

hint~

```blocks
// @highlight
radio.setGroup(1)
```

## Identifie : Le récepteur

Dans un réseau sans fil, le **récepteur** capte les signaux de l'émetteur.

Quelle partie de ton code est le récepteur ?

~hint Dis-m'en plus !

Le bloc ``||radio:On Received String||`` s'exécute chaque fois qu'un signal arrive de la balise.

Il lit la force du signal et enregistre le moment où le signal est arrivé.

hint~

```blocks
// @highlight
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
})
```

## Explore : Prédis l'affichage

Avec la balise d'avalanche et l'appareil de recherche tous les deux allumés, regarde l'``||fwdSensors:LCD Screen||``.

Que vois-tu ? Quel nombre s'affiche ?

~hint Dis-m'en plus !

L'``||fwdSensors:LCD Screen||`` affiche la force du ``||variables:Signal||``, entre 0 % et 100 %.

Plus le nombre est élevé, plus le ``||variables:Signal||`` est fort et plus la balise est proche.

hint~

## Explore : Cache la balise d'avalanche

Que penses-tu qu'il arrivera au ``||variables:Signal||`` si tu caches ta **balise d'avalanche** dans un tiroir ou un sac à dos ?

Teste-le !

~hint Dis-m'en plus !

Quand la balise d'avalanche est bloquée par des matériaux, le ``||variables:Signal||`` devient plus petit !

Les appareils sans fil communiquent mal à travers les murs et les matériaux épais.

hint~

## Prédis : Pas de signal

Regarde le bloc ``||logic:If||`` dans ton code. Que penses-tu que l'``||fwdSensors:LCD||`` affichera si aucun signal n'arrive pendant plus de 3 secondes ?

```blocks
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
    // @highlight
        fwdSensors.lcd1.printLineString("No Signal", 1)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
    }
})
```

## Essaye : Chasse à la balise

Promène-toi dans la pièce avec l'appareil de recherche. Observe le ``||variables:Signal||`` sur l'``||fwdSensors:LCD Screen||``.

Est-ce que le nombre augmente quand tu t'approches ? Que se passe-t-il quand tu t'éloignes ?

~hint Dis-m'en plus !

Plus tu es proche de la balise cachée, plus le ``||variables:Signal||`` est fort.

Si l'écran affiche « No Signal », tu t'es trop éloigné ou le ``||variables:Signal||`` est bloqué.

hint~

## Enquête : Comment fonctionnent les signaux sans fil

Réfléchis à la façon dont les deux micro:bit communiquent. Aucun câble ne les relie.

Comment l'information passe-t-elle de la balise à l'appareil de recherche ?

~hint Dis-m'en plus !

Les deux micro:bit envoient et reçoivent sur le même groupe radio, comme un canal partagé.

Le ``||variables:Signal||`` s'affaiblit avec la distance ou à travers les murs. C'est pour cela que le nombre change quand tu te déplaces.

Les vrais réseaux sans fil, comme le Wi-Fi, fonctionnent de la même façon. Plus tu es loin du routeur, plus la connexion est faible.

hint~

## Réfléchis

Dans ce tutoriel, tu as étudié comment un réseau sans fil connecte deux appareils pour suivre une balise. Note tes réponses dans l'espace de travail.

1. Que t'indique le ``||variables:Signal||`` ? En quoi est-ce utile pour trouver une balise ?

2. Que se passe-t-il quand les micro:bit sont trop éloignés ? Pourquoi cela arrive-t-il ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ton programme :

- ``||radio:Send String||`` : l'**émetteur** envoie un ``||variables:Signal||`` de balise chaque seconde

- ``||radio:Set Group||`` : le **canal** définit le groupe partagé pour que les deux appareils puissent communiquer

- ``||radio:On Received String||`` : le **récepteur** capte les signaux et lit la force du ``||variables:Signal||``

- ``||basic:Forever||`` : vérifie sans arrêt le ``||variables:Signal||`` et met à jour l'``||fwdSensors:LCD||``

- ``||logic:If||`` : affiche « No Signal » quand la balise est restée silencieuse pendant 3 secondes

À l'étape suivante, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

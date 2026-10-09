# Balise d'avalanche – Tutoriel Modifier

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
    BeaconName = receivedString
})
let BeaconName = ""
let lastReceived = 0
let Signal = 0
radio.setGroup(1)
fwdSensors.initializeLcd()
Signal = 0
lastReceived = 0
BeaconName = ""
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
Q2:
Q3: */
```

## Balise d'avalanche - Tutoriel Modifier @showdialog

Dans ce tutoriel, tu vas **modifier** le code pour améliorer ta balise. Au lieu de simplement envoyer un signal, elle enverra un nom pour que les secouristes sachent quel groupe a besoin d'aide.

1. **Construire** : Assemble ta balise d'avalanche et ton appareil de recherche

2. **Connecter** : Couple tes micro:bit et télécharge le code de départ

3. **Modifier** : Ajoute un nom de balise et teste ton système amélioré

## Préparation : Connecter les câbles @showdialog

IMPORTANT ! Assure-toi que ton projet est assemblé et que le micro:bit de la plaque de connexion est branché à ton ordinateur. Garde le micro:bit de la balise à portée de main.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connecte le câble USB au micro:bit et à l'ordinateur, allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Télécharger @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur les **deux** micro:bit. Les deux appareils ont besoin du même code.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions. 


## Installation à deux appareils

Ce projet utilise deux micro:bit qui travaillent en équipe.

* La **balise d'avalanche** (alimentée par un CHARGE pour micro:bit). Elle est cachée dans la zone de recherche.

* L'**appareil de recherche** (micro:bit sur la plaque de connexion) utilise le ``||fwdSensors:LCD Screen||`` pour chercher la balise d'avalanche.

## Explorer : Comment fonctionne le programme

Teste le code de départ en plaçant ta balise d'avalanche de l'autre côté de la pièce. 

Tiens ton appareil de recherche dans ta main et marche vers la balise. Que se passe-t-il sur le ``||fwdSensors:LCD Display||`` de ton appareil de recherche ?

~hint Dis-m'en plus !

1. Le bloc ``||radio:Radio Send String||`` envoie un signal chaque seconde.

2. L'événement ``||radio:On Received String||`` capte ce signal et calcule sa force.

3. Pour l'instant, le ``||fwdSensors:LCD Screen||`` affiche seulement la force du ``||variables:Signal||``, sur 100 %.

hint~

## Modifier : Change le message de la balise

Pour l'instant, notre balise d'avalanche n'envoie aucun message à l'appareil de recherche. 

Trouve le bloc ``||radio:Radio Send String||`` dans ton espace de travail, et tape **Group 1** comme message.

~hint Dis-m'en plus !

Assure-toi que le nom de ton groupe fait 8 caractères ou moins. Chaque section du ``||fwdSensors:LCD Screen||`` ne peut afficher que 8 caractères.

hint~

```blocks
loops.everyInterval(1000, function () {
// @highlight
    radio.sendString("Group 1")
})
```

## Modifier : Sauvegarde le nom de la balise

L'appareil de recherche doit stocker le nom de balise envoyé par la balise d'avalanche. 

Fais glisser un bloc ``||variables:Set BeaconName to||`` à l'intérieur de l'événement ``||radio:On Received String||``. 

Copie le bloc ovale ``||variables:receivedString||`` et fais-le glisser dans la chaîne vide.

~hint Dis-m'en plus !

Chaque fois qu'un signal est envoyé par la balise d'avalanche, la variable ``||variables:BeaconName||`` stocke le nom envoyé par la balise.

Le stocker dans ``||variables:BeaconName||`` permet à la boucle ``||basic:Forever||`` de le lire et de l'afficher.

hint~

```blocks
radio.onReceivedString(function (receivedString) {
    lastReceived = input.runningTime()
    Signal = Math.map(radio.receivedPacket(RadioPacketProperty.SignalStrength), -128, -28, 0, 100)
    // @highlight
    BeaconName = receivedString
})
```

## Modifier : Affiche l'étiquette de la balise

Ensuite, nous devons ajouter une étiquette à la rangée du bas du ``||fwdSensors:LCD Screen||``. 

Fais glisser un bloc ``||fwdSensors:LCD Print String on Quadrant||`` dans la branche ``||logic:Else||`` de la boucle ``||basic:Forever||``. 

Règle la chaîne à **"Beacon: "** et le quadrant à **3**. 

~hint Dis-m'en plus !

Le quadrant 3 est en bas à gauche du ``||fwdSensors:LCD Screen||``.

Ce n'est que l'étiquette. Le nom lui-même ira dans le quadrant 4 à la prochaine étape.

hint~

```blocks
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
        // @highlight
        fwdSensors.lcd1.printQuadrantString("Beacon:", 3)
    }
})
```

## Modifier : Affiche le nom de la balise

Maintenant, affiche la variable ``||variables:BeaconName||`` ! 

Fais glisser un autre bloc ``||fwdSensors: Print String on Quadrant||`` dans la branche ``||logic:Else||`` de la boucle ``||basic:Forever||``. 

Fais glisser un bloc ``||variables:BeaconName||`` dans le champ **chaîne**, et règle le quadrant à **4**

~hint Dis-m'en plus !

Le quadrant 4 est en bas à droite du ``||fwdSensors:LCD Screen||``.

L'écran LCD affichera maintenant : la rangée du haut pour la force du signal, la rangée du bas pour le nom de la balise.

hint~

```blocks
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
        fwdSensors.lcd1.printQuadrantString("Beacon:", 3)
        // @highlight
        fwdSensors.lcd1.printQuadrantString(BeaconName, 4)
    }
})
```

## Modifier : Mets à jour No Signal

Quand le signal est perdu, la rangée du bas du ``||fwdSensors:LCD Screen||`` doit aussi s'effacer. Fais glisser un bloc ``||fwdSensors:Print String on Line||`` dans la branche ``||logic:If||`` de la boucle ``||basic:Forever||``. 

Règle la chaîne à **"No Beacon"** sur la ligne **2**.

~hint Dis-m'en plus !

Sans cette étape, l'ancien nom de balise pourrait rester à l'écran même après la perte du signal.

« No Beacon » indique au secouriste que le signal et l'identité sont tous les deux perdus.

hint~

```blocks
basic.forever(function () {
    if (input.runningTime() - lastReceived > 3000) {
        fwdSensors.lcd1.printLineString("No Signal", 1)
        // @highlight
        fwdSensors.lcd1.printLineString("No Beacon", 2)
    } else {
        fwdSensors.lcd1.printQuadrantString("Signal %", 1)
        fwdSensors.lcd1.printQuadrantNumber(Math.round(Signal), 2)
        fwdSensors.lcd1.printQuadrantString("Beacon:", 3)
        fwdSensors.lcd1.printQuadrantString(BeaconName, 4)
    }
})
```

## Tester : Essaye de près

Tu es prêt à tester tes changements ! ``|Télécharger|`` ton programme sur ta **balise d'avalanche** et ton **appareil de recherche**. 

Garde le micro:bit de la balise près de l'appareil de recherche. Observe le ``||fwdSensors:LCD Display||``.

Est-ce que **Group 1** apparaît sur la rangée du bas ?

~hint Dis-m'en plus !

La **balise d'avalanche** envoie maintenant le nom « Group 1 » avec chaque signal.

L'**appareil de recherche** le reçoit et le stocke dans la variable ``||variables:BeaconName||``, puis l'affiche sur le ``||fwdSensors:LCD Screen||``.

hint~

## Tester : Déplace-toi vers un nouvel endroit

Cache la **balise d'avalanche**, et utilise ton **appareil de recherche** pour essayer de la retrouver. 

Est-ce que le nom reste à l'écran pendant que tu te déplaces ? Que se passe-t-il quand tu vas trop loin ?

~hint Dis-m'en plus !

Tant qu'un ``||variables:Signal||`` de la **balise d'avalanche** atteint l'**appareil de recherche** en moins de 3 secondes, le ``||variables:BeaconName||`` s'affiche sur le ``||fwdSensors:LCD Screen||``.

Quand le signal est perdu, le ``||fwdSensors:LCD Screen||`` passe à « No Signal » et « No Beacon ».

hint~

## Tester : Change le nom

Essaye de changer **"Group 1"** dans le bloc ``||loops:Every 1000 ms||`` pour un nouveau nom. ``|Télécharger|`` ton programme mis à jour sur les deux micro:bit et teste-le.

Que se passe-t-il si ton nom fait plus de 8 caractères ?

~hint Dis-m'en plus !

Chaque quadrant du ``||fwdSensors:LCD Screen||`` ne peut afficher que 8 caractères. Les noms plus longs sont coupés.

C'est une vraie limite de conception du matériel d'affichage basse consommation. Les ingénieurs qui construisent des appareils de sauvetage font face au même problème.

hint~

## Enquêter : Message ou signal

Un **signal** te dit où se trouve la balise. Un **message** te dit qui elle est.

Que pourrait apprendre une équipe de secours grâce au nom de la balise qu'elle ne pourrait pas apprendre avec la force du signal seule ? Y a-t-il quelque chose qu'un message ne peut pas te dire ?

~hint Dis-m'en plus !

La **force du signal** t'indique la distance et la direction. Elle ne te dit pas **qui** est en difficulté.

Un **nom de balise** te dit quel groupe a besoin d'aide. Une équipe qui secourt plusieurs groupes en même temps pourrait les distinguer.

Mais un nom court a ses limites. Huit caractères, ce n'est pas beaucoup d'espace pour des informations détaillées. Les vraies balises d'urgence résolvent ce problème en utilisant des codes uniques enregistrés au nom d'une personne ou d'un navire.

hint~

## Réfléchir

Dans ce tutoriel, tu as **modifié** un programme pour envoyer un nom de groupe avec chaque signal. Note tes réponses dans l'espace de travail.

1. Quelle nouvelle information le nom de la balise donne-t-il à un secouriste ? Pourquoi est-ce important ?

2. Pourquoi le nom ne peut-il faire que 8 caractères ? Que changerais-tu si tu pouvais repenser l'affichage ?

3. Quelle autre information voudrais-tu qu'une vraie balise d'avalanche envoie ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ce que tu as modifié :

- ``||radio:On Received String||`` : mis à jour pour recevoir le nom du groupe envoyé par la balise d'avalanche

- ``||fwdSensors:LCD Screen||`` : affiche maintenant le ``||variables:BeaconName||`` sur la rangée du bas, à côté de la force du signal

- ``||logic:If||`` : mis à jour pour que « No Beacon » apparaisse quand le signal est perdu

À la prochaine étape, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

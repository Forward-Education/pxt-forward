# Test de résistance des structures – Tutoriel d'utilisation

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
function TableTrue () {
    tableOn = true
    shakeStart = input.runningTime()
    fwdSensors.lcd1.printLineString("Table On", 2)
}
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    TableTrue()
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    TableTrue()
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    tableOn = false
    shakeDuration = Math.round((input.runningTime() - shakeStart) / 1000)
    fwdSensors.lcd1.printLineString("Shook: " + shakeDuration + "s", 2)
})
function Shake () {
    fwdMotors.setSpeed(fwdBase.leftServo, 100)
    basic.pause(100)
    fwdMotors.setSpeed(fwdBase.leftServo, -100)
    basic.pause(100)
}
let tableOn = false
let shakeStart = 0
let shakeDuration = 0
fwdSensors.initializeLcd()
tableOn = false
fwdMotors.setSpeed(fwdBase.leftServo, 0)
basic.pause(1000)
basic.forever(function () {
    if (tableOn) {
        Shake()
    } else {
        fwdMotors.setSpeed(fwdBase.leftServo, 0)
    }
})
/* Reflect:
Q1:
Q2: */
```

## Test de résistance des structures - Tutoriel d'utilisation @showdialog

Dans ce tutoriel, tu vas **utiliser** un programme pour explorer le fonctionnement de ton Test de résistance. Tu apprendras comment la table s'allume, comment elle secoue à une vitesse constante, et comment l'éteindre.

1. **Construire** : Assemble le Test de résistance des structures

2. **Connecter** : Couple ton micro:bit et télécharge le code de départ

3. **Utiliser** : Exécute le programme et contrôle la table

## Préparation : Connecter les câbles @showdialog

IMPORTANT ! Assure-toi que ton Test de résistance des structures est assemblé et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connecte le câble USB au micro:bit et à l'ordinateur, allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Télécharger @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Identifier : Les composants et le code

Regarde ton Test de résistance des structures. Ce **programme** utilise :

* Un ``||fwdButtons:Dial||`` qui allume la table quand tu le tournes, et l'éteint quand tu appuies dessus

* Un ``||fwdMotors:Continuous Servo Motor||`` qui secoue la table à une vitesse fixe

* Un ``||fwdSensors:LCD Display||`` qui montre si la table est allumée. La ligne 1 reste vide pour l'instant. Elle est réservée à une mesure de solidité que tu ajouteras plus tard

Dans le code, trouve les **fonctions** ``TableTrue`` et ``Shake``. ``TableTrue`` est appelée depuis deux endroits différents. Lesquels ?

~hint Dis-m'en plus !

* Les deux blocs ``||fwdButtons:On Rotated||`` appellent ``TableTrue``, un pour le sens des aiguilles d'une montre et un pour le sens inverse

* Au lieu de répéter les deux mêmes lignes de code aux deux endroits, le programme les définit une seule fois dans une **fonction** et l'appelle deux fois

* ``Shake`` fonctionne de la même façon : la boucle ``||basic:Forever||`` l'appelle au lieu d'écrire le mouvement du servo directement à l'intérieur de la boucle

hint~

## Explorer : Prédis l'affichage

Avant de débrancher, **prédis** : que va montrer le ``||fwdSensors:LCD Display||`` avant même que tu aies touché au sélecteur ?

## Explorer : Observe le programme

Débranche ton micro:bit de ton ordinateur et observe le ``||fwdSensors:LCD Display||``.

Que montre la ligne 2, et la table a-t-elle bougé toute seule ?

~hint Dis-m'en plus !

* La ligne 2 est vide. Rien n'y a encore été écrit, parce que son texte n'apparaît que lorsque tu tournes ou appuies sur le ``||fwdButtons:Dial||``.

* La table n'a pas bougé, parce que ``||variables:tableOn||`` commence à faux

hint~

## Prédire : Allumer la table

Trouve la **fonction** ``TableTrue``.

```blocks
function TableTrue () {
    tableOn = true
    // @highlight
    shakeStart = input.runningTime()
    fwdSensors.lcd1.printLineString("Table On", 2)
}
```

**Prédis** : que va montrer le ``||fwdSensors:LCD Display||`` au moment où tu tournes le ``||fwdButtons:Dial||``, et que va commencer à faire la table ?

## Teste ta prédiction

**Teste** ta prédiction. Tourne le ``||fwdButtons:Dial||`` dans un sens ou dans l'autre.

Qu'est-ce qui est apparu sur la ligne 2, et qu'a commencé à faire la table ?

~hint Dis-m'en plus !

* Table On apparaît tout de suite, puisque tourner le sélecteur exécute immédiatement la **fonction** ``TableTrue``

* La table commence à secouer d'avant en arrière, parce que la boucle ``||basic:Forever||`` appelle maintenant ``Shake`` à chaque passage

* ``TableTrue`` enregistre aussi discrètement le moment où tu as commencé, dans la **variable** ``||variables:shakeStart||``. Tu ne le verras pas encore sur l'affichage

hint~

## Prédire : Éteindre la table

Trouve le bloc ``||fwdButtons:On Button Event||`` qui se déclenche quand tu appuies sur le ``||fwdButtons:Dial||``.

```blocks
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    tableOn = false
    // @highlight
    shakeDuration = Math.round((input.runningTime() - shakeStart) / 1000)
    fwdSensors.lcd1.printLineString("Shook: " + shakeDuration + "s", 2)
})
```

**Prédis** : que va montrer la ligne 2 après que tu auras appuyé sur le sélecteur pour arrêter la table, par rapport à ce qu'elle montrait pendant que la table était allumée ?

## Teste ta prédiction

**Teste** ta prédiction. Laisse la table secouer quelques secondes, puis appuie sur le ``||fwdButtons:Dial||``.

Que montre la ligne 2 maintenant ?

~hint Dis-m'en plus !

* Au lieu de Table On, tu devrais voir quelque chose comme Shook: 4s

* Ce nombre vient de la soustraction du moment où tu as commencé, ``||variables:shakeStart||``, du moment où tu as arrêté

hint~

## Enquêter : Pourquoi deux fonctions ?

**Enquête** : pourquoi ce programme définit-il ``TableTrue`` et ``Shake`` comme des **fonctions** séparées au lieu d'écrire ce code directement dans chaque événement et dans la boucle ?

~hint Dis-m'en plus !

* ``TableTrue`` est appelée depuis deux événements de rotation différents. L'écrire une seule fois et la réutiliser veut dire qu'un futur changement n'aura à être fait qu'à un seul endroit

* ``Shake`` garde la boucle ``||basic:Forever||`` assez courte pour être lue d'un coup d'œil, même si le mouvement du servo prend quatre lignes

hint~

## Enquêter : Les données ont besoin de contexte

**Enquête** : pourquoi le programme ne peut-il pas simplement afficher combien de secondes la table a secoué, sans d'abord enregistrer le moment où elle a commencé ?

~hint Dis-m'en plus !

* Une durée n'est pas une mesure que tu peux prendre directement. Elle n'existe que comme la différence entre deux moments dans le temps

* ``||variables:shakeDuration||`` n'a de sens que parce que ``||variables:shakeStart||`` a été enregistré d'abord. Le deuxième nombre a besoin du premier pour pouvoir être interprété

hint~

## Réflexion

Dans ce tutoriel, tu as utilisé deux **fonctions** et trois **variables** pour contrôler ton Test de résistance des structures et chronométrer combien de temps il a secoué. Note tes réponses aux questions ci-dessous sous forme de commentaires de code dans l'espace de travail.

1. Pourquoi le programme enregistre-t-il le moment où la table commence à secouer au lieu d'enregistrer seulement le moment où elle s'arrête ?

2. La ligne 1 de l'affichage est encore vide. Quelle information pourrais-tu y montrer si tu ajoutais un autre capteur à ce projet ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ton programme :

- ``TableTrue`` : une **fonction** qui allume la table et enregistre le moment où elle a commencé

- ``Shake`` : une **fonction** qui exécute un mouvement de va-et-vient du servo, appelée à chaque répétition de la boucle ``||basic:Forever||``

- ``||fwdButtons:Dial||`` : allume la table quand on le tourne, et l'éteint quand on appuie dessus

- ``||variables:shakeDuration||`` : calculée à partir de la différence entre un temps de départ et un temps d'arrêt

À l'étape suivante, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

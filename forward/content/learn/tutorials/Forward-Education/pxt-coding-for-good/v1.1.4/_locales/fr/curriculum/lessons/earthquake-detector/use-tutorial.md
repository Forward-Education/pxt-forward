# Détecteur de séismes – Tutoriel Utiliser

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
datalogger
```

```template
datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
fwdSensors.initializeLcd()
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
let strength = 0
let time = 0
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
})
/* Reflect:
Q1:
Q2:
Q3: */
```

## Détecteur de séismes - Tutoriel Utiliser @showdialog

Dans ce tutoriel, tu vas **utiliser** un programme pour explorer le fonctionnement de ton détecteur de séismes. Les ingénieurs civils ont besoin de données réelles sur les vibrations et les mouvements du sol pour décider si un bâtiment ou une structure peut résister à un séisme. Ton détecteur de séismes fonctionne de la même façon : il utilise l'accéléromètre du micro:bit et un journal de données pour enregistrer ensemble la force des secousses et le temps.

1. **Construire** : Assemble le détecteur de séismes

2. **Connecter** : Couple ton micro:bit et télécharge le code de départ

3. **Utiliser** : Exécute le programme et explore le code

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Préparation : Connecter les câbles @showdialog

IMPORTANT ! Assure-toi que ton détecteur de séismes est assemblé et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connecte le câble USB au micro:bit et à l'ordinateur, allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Télécharger @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Identifier : Composants et code

Regarde ton détecteur de séismes. Ce **programme** utilise :

* L'accéléromètre intégré du micro:bit, qui détecte avec quelle force la carte est déplacée ou secouée

* Un ``||fwdSensors:LCD Display||`` (écran LCD) qui affiche deux mesures en même temps

Dans le code, trouve les **variables** ``||variables:Strength||`` et ``||variables:Time||`` au-dessus de la **boucle** ``||basic:Forever||``. À quoi sont-elles réglées avant que le programme démarre ?

~hint Dis-m'en plus !

* Les deux variables commencent à 0, puisqu'aucune mesure n'a encore été prise

* Elles reçoivent une nouvelle valeur à chaque fois que la boucle ``||basic:Forever||`` s'exécute

hint~

## Rechercher : Se renseigner sur un bloc

Fais un clic droit sur le bloc ``||datalogger:Include Timestamp||`` dans ton espace de travail et choisis **Aide**, ou cherche « microbit datalogger include timestamp » dans un moteur de recherche.

Quelle unité de temps ce bloc peut-il utiliser pour horodater chaque mesure ?

~hint Dis-m'en plus !

* La page de référence MakeCode de ce bloc explique que ``||datalogger:Include Timestamp||`` peut horodater les mesures en millisecondes, secondes, minutes, heures ou jours

* Ce programme utilise les millisecondes, donc chaque ligne enregistrée est horodatée à la milliseconde près

hint~

## Explorer : Prédis l'affichage

Avant de débrancher, **prédis** : quels nombres penses-tu que le ``||fwdSensors:LCD Display||`` affichera en premier ?

## Explorer : Observe le programme

Débranche ton micro:bit de ton ordinateur et observe le ``||fwdSensors:LCD Display||``.

Quelles sont les deux mesures affichées, et changent-elles sans que tu touches à quoi que ce soit ?

~hint Dis-m'en plus !

* Tu devrais voir une mesure Strength (force) et une mesure Time (temps), qui se mettent à jour toutes seules

* Cela se produit parce que la boucle ``||basic:Forever||``, appelée **boucle** parce qu'elle répète une série d'instructions encore et encore, exécute les mêmes étapes sans arrêt

hint~

## Prédire : Secouer l'appareil

Trouve le bloc ``||input:Acceleration (Strength)||`` à l'intérieur de la boucle ``||basic:Forever||``.

```blocks
basic.forever(function () {
    // @highlight
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
})
```

**Prédis** : que va-t-il arriver au nombre Strength si tu secoues fort ton détecteur de séismes, puis si tu le tiens parfaitement immobile ?

## Teste ta prédiction

**Teste** ta prédiction. Secoue fermement ton détecteur de séismes pendant quelques secondes, puis tiens-le parfaitement immobile. Observe le ``||fwdSensors:LCD Display||``.

Qu'a fait le nombre Strength dans chaque cas ?

~hint Dis-m'en plus !

* Secouer fort devrait faire monter le nombre Strength

* Le tenir immobile devrait ramener le nombre Strength près de 0

hint~

## Prédire : Regarder le temps passer

Trouve le bloc ``||input:Running Time||`` à l'intérieur de la boucle ``||basic:Forever||``.

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    // @highlight
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
})
```

**Prédis** : que va-t-il arriver au nombre Time plus ton détecteur de séismes continue de fonctionner, même si tu ne touches jamais un bouton ?

## Teste ta prédiction

**Teste** ta prédiction. Observe le ``||fwdSensors:LCD Display||`` pendant environ 10 secondes sans toucher à rien.

Qu'est-il arrivé au nombre Time, et à quelle fréquence a-t-il changé ?

~hint Dis-m'en plus !

* Le nombre Time devrait continuer d'augmenter tout seul, compté en millisecondes depuis le démarrage du programme

* Chaque nouveau nombre correspond à un tour de plus dans la boucle ``||basic:Forever||``, donc le rythme des mises à jour te montre à quelle fréquence le programme prend des mesures

hint~

## Explorer : Consulte tes données enregistrées

Rebranche ton détecteur de séismes à ton ordinateur avec le câble USB. Il apparaîtra comme un lecteur USB nommé **MICROBIT**.

Ouvre le fichier nommé **MY_DATA** de ce lecteur dans un navigateur web.

Quels sont les noms des deux colonnes du tableau, et laquelle est la métadonnée plutôt que la mesure du capteur elle-même ?

~hint Dis-m'en plus !

* Ton tableau a une colonne Strength, la mesure du capteur, et une colonne Time, la métadonnée

* Comme une colonne d'horodatage est présente, MY_DATA peut même tracer tes mesures sous forme de graphique linéaire dans le temps

hint~

## Enquêter : Enregistrer plus qu'un nombre

**Enquête** : comment le programme enregistre-t-il non seulement une valeur de capteur, mais aussi les métadonnées nécessaires pour l'interpréter plus tard ?

~hint Dis-m'en plus !

* Chaque fois que le programme enregistre une valeur Strength avec ``||datalogger:Log Data||``, le réglage ``||datalogger:Include Timestamp||`` horodate cette ligne avec le moment exact où elle a été enregistrée

* Un nombre Strength tout seul ne peut pas te dire quand la secousse s'est produite ; l'associer à un horodatage transforme une simple valeur en données qu'on peut vraiment interpréter plus tard

hint~

## Enquêter : Ce que le sol te raconte

En utilisant tes mesures Strength et Time comme preuves, comment des données comme celles-ci pourraient-elles aider un ingénieur civil à décider si une structure construite à cet endroit a besoin de renforts supplémentaires pour résister à un événement comme un séisme ou un glissement de terrain ?

~hint Dis-m'en plus !

* Les vrais détecteurs de séismes enregistrent les mouvements du sol de la même façon que ton détecteur de séismes enregistre Strength : un flux continu de mesures horodatées

* Comparer les valeurs Strength sur de nombreuses lignes permet à un ingénieur civil de trouver le moment exact où les secousses ont atteint leur maximum et combien de temps elles ont duré, des preuves qu'il utilise pour décider de la solidité nécessaire des fondations d'une structure

* Certains processus géologiques, comme les séismes, se produisent soudainement. D'autres, comme le tassement lent du sol, se produisent graduellement sur plusieurs jours. Un journal horodaté peut capturer les deux types de changement, des informations dont un ingénieur civil a besoin avant de concevoir en fonction des risques d'un lieu

hint~

## Réfléchir

Dans ce tutoriel, tu as utilisé une **boucle** et une **variable** pour mesurer de façon répétée l'intensité des secousses et stocker chaque mesure avec le moment où elle s'est produite, comme un sismographe simplifié. Note tes réponses aux questions ci-dessous sous forme de commentaires de code dans l'espace de travail.

1. Pourquoi le programme stocke-t-il un horodatage avec chaque mesure Strength au lieu de sauvegarder seulement le nombre tout seul ?

2. Quelle autre information le programme pourrait-il enregistrer en plus de Strength et Time pour rendre les données encore plus utiles ?

3. Comment un ingénieur civil utiliserait-il des preuves de Strength et Time enregistrées comme les tiennes pour décider si une structure à cet endroit doit être renforcée ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ton programme :

- ``||basic:Forever||`` : lit sans arrêt l'accéléromètre et le temps écoulé, puis enregistre et affiche les deux

- ``||fwdSensors:LCD Display||`` : affiche les mesures actuelles de Strength et Time

- ``||datalogger:Log Data||`` : sauvegarde chaque mesure Strength dans la mémoire flash avec un horodatage

- ``||input:On Button Pressed||`` (A+B) : efface le journal de données sauvegardé

- ``||datalogger:On Log Full||`` : affiche une icône X quand la mémoire flash est pleine

À la prochaine étape, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

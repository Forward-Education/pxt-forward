# Détecteur de séismes – Tutoriel de modification

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

## Détecteur de séismes - Tutoriel de modification @showdialog

Dans ce tutoriel, tu vas **modifier** le code pour changer la fréquence à laquelle ton détecteur de séismes mesure les secousses du sol, et pour ajouter une alerte basée sur une règle en cas de grosse secousse.

1. **Construis** : Assemble le détecteur de séismes

2. **Connecte** : Couple ton micro:bit et télécharge le code de départ

3. **Modifie** : Change la fréquence d'échantillonnage et ajoute une alerte de secousse

## Préparation : Connecte les câbles @showdialog

IMPORTANT ! Assure-toi que ton détecteur de séismes est assemblé et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connecte le câble USB au micro:bit et à l'ordinateur, puis allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement au bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Explore : Comment le programme fonctionne

Prends un moment pour regarder le code de départ dans ton espace de travail. Peux-tu deviner ce que fait chaque partie ?

~hint Dis-m'en plus !

* L'accéléromètre intégré au micro:bit alimente la **variable** ``||variables:Strength||`` chaque fois que la **boucle** ``||basic:Forever||`` s'exécute

* ``||datalogger:Log Data||`` et ``||datalogger:Include Timestamp||`` enregistrent chaque lecture de Strength dans la mémoire flash avec l'heure à laquelle elle a eu lieu

* Le ``||fwdSensors:LCD Display||`` affiche les lectures actuelles de Strength et de Time

* ``||input:On Button Pressed||`` (A+B) efface le journal de données enregistré, et ``||datalogger:On Log Full||`` affiche une icône X quand la mémoire est pleine

hint~

## Modifie : Ajoute une pause entre les lectures

Pour l'instant, ta boucle ``||basic:Forever||`` échantillonne aussi vite que le micro:bit peut l'exécuter. Fais glisser un bloc ``||basic:Pause||`` au bas de la boucle, après les lignes du LCD, et règle-le à **1000 ms** (1 seconde).

~hint Dis-m'en plus !

* Une **variable** comme ``||variables:Strength||`` ne peut contenir qu'une seule lecture à la fois. Le bloc ``||basic:Pause||`` contrôle la fréquence à laquelle cette lecture est remplacée

* Sans pause, la boucle échantillonne des centaines de fois par seconde, bien plus qu'une station sismique n'en a besoin

hint~

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
    // @highlight
    basic.pause(1000)
})
```

## Modifie : Essaye une autre fréquence d'échantillonnage

Change la valeur du bloc ``||basic:Pause||`` de 1000 à **2000** (2 secondes). Télécharge ton programme, puis tapote le micro:bit d'un coup sec une seule fois et lâche-le.

Est-ce que ton détecteur de séismes capte ce tapotement, ou est-ce qu'il le rate ?

~hint Dis-m'en plus !

* À 2000 ms, la boucle vérifie moins souvent, alors un tapotement rapide a plus de chances de se produire entre deux vérifications et de ne jamais être enregistré

* C'est une vraie limite, pas une erreur dans ton code : une fréquence d'échantillonnage plus lente ne peut détecter que ce qui est encore en train de se produire la prochaine fois qu'elle regarde

hint~

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
    // @highlight
    basic.pause(2000)
})
```

## Modifie : Choisis une fréquence d'échantillonnage

Change la valeur du bloc ``||basic:Pause||`` une dernière fois à **5000** (5 secondes), plus lent que les deux fréquences que tu viens de tester. Garde 5000 pour le reste de ce tutoriel.

~hint Dis-m'en plus !

* 1000 ms et 2000 ms captent les tapotements brefs de façon plus fiable, mais ils remplissent aussi ton journal de données plus vite

* 5000 ms risque davantage de rater une secousse très brève, mais garde une journée complète de lectures à une taille raisonnable

* Les vraies stations de capteurs font le même compromis : parfois, un peu moins de précision vaut bien le stockage et la batterie économisés

hint~

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
    // @highlight
    basic.pause(5000)
})
```

## Modifie : Détecte une grosse secousse

Ajoute une condition ``||logic:If||``, appelée une **instruction conditionnelle**, juste après les lignes du LCD et avant le bloc ``||basic:Pause||``. Règle-la pour vérifier si ``||variables:Strength||`` est supérieure à **1500**. À l'intérieur, ajoute un bloc ``||basic:Show Leds||`` et remplis toute la grille de 5 par 5.

~hint Dis-m'en plus !

* C'est une vérification **basée sur une règle** : un seul nombre fixe décide si la secousse compte comme grosse, peu importe la lecture d'il y a une seconde

* Allumer toutes les LED donne une alerte claire et instantanée qu'une forte secousse vient de se produire

hint~

```blocks
basic.forever(function () {
    strength = input.acceleration(Dimension.Strength)
    time = input.runningTime()
    datalogger.log(datalogger.createCV("Strength", strength))
    fwdSensors.lcd1.printLineString("Strength: ", 1)
    fwdSensors.lcd1.printQuadrantNumber(strength, 2)
    fwdSensors.lcd1.printLineString("Time: ", 3)
    fwdSensors.lcd1.printQuadrantNumber(time, 4)
    // @highlight
    if (strength > 1500) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(5000)
})
```

## Modifie : Affiche le signal « tout va bien »

Ajoute une branche **else** (sinon) à ton instruction conditionnelle. À l'intérieur, ajoute un bloc ``||basic:Show Leds||`` avec seulement le point du centre allumé.

~hint Dis-m'en plus !

* Maintenant, ton détecteur de séismes montre un motif pour une grosse secousse et un motif différent quand tout est calme

* L'**instruction conditionnelle** ``||logic:If||`` vérifie Strength à chaque exécution de la boucle, alors l'affichage correspond toujours à la lecture la plus récente

hint~

```blocks
if (strength > 1500) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
// @highlight
} else {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
```

## Modifie : Documente ton seuil

Fais un clic droit sur le bloc ``||logic:If||`` et choisis **Ajouter un commentaire**. Écris une phrase qui explique pourquoi tu as choisi 1500, ou change le nombre et explique ton nouveau choix.

~hint Dis-m'en plus !

* Un court commentaire te permet, à toi, à un partenaire ou à un enseignant, de comprendre ton raisonnement plus tard sans tout retester depuis le début

* Il n'y a pas un seul seuil correct. Un test de secousse plus doux pourrait demander un nombre plus bas, un test plus fort un nombre plus élevé

hint~

```blocks
// Strength above 1500 counts as a big shake.
// @highlight
if (strength > 1500) {
```

## Modifie : Teste-le avec un partenaire

Échange ton détecteur de séismes avec un partenaire. Sans lui dire ton seuil, demande-lui de le secouer à différentes intensités et de prédire, avant chaque secousse, si les LED afficheront le motif d'alerte.

Demande à ton partenaire un commentaire : est-ce que 1500 semble être le bon nombre pour une « grosse » secousse, ou devrait-il être plus haut ou plus bas ?

~hint Dis-m'en plus !

* Tester ton seuil avec les secousses de quelqu'un d'autre est un moyen rapide de repérer un nombre qui ne fonctionnait qu'avec ta propre main

* Ce genre de rétroaction, vérifier ton code face à l'expérience de quelqu'un d'autre, c'est exactement ce que font les programmeurs professionnels pendant une revue de code

hint~

## Enquête : Les compromis de l'échantillonnage

**Enquête :** comment ta fréquence d'échantillonnage change-t-elle ce que ta station sismique peut détecter, ou non ?

~hint Dis-m'en plus !

* Une fréquence d'échantillonnage rapide, comme 1 seconde, capte les événements brefs, mais remplit le journal de données plus vite et utilise plus de stockage

* Une fréquence d'échantillonnage plus lente, comme 5 secondes, économise du stockage, mais peut rater une secousse qui commence et se termine entre deux vérifications

* Les vraies stations sismiques font face à ce compromis exact. Les événements soudains comme les tremblements de terre demandent un échantillonnage rapide pour être captés, alors que les changements du sol lents et graduels peuvent être suivis avec des lectures beaucoup moins fréquentes

hint~

## Enquête : Deux façons de détecter une secousse

**Enquête :** pourquoi ce programme utilise-t-il une vérification basée sur une règle pour une alerte instantanée, tout en continuant d'enregistrer les données brutes de Strength pour les analyser plus tard ? Quand chaque approche est-elle la meilleure ?

~hint Dis-m'en plus !

* L'instruction conditionnelle ``||logic:If||`` basée sur une règle donne une réponse immédiate avec un seul nombre fixe, utile quand tu dois réagir tout de suite

* Les données brutes enregistrées par ``||datalogger:Log Data||`` gardent chaque lecture pour pouvoir être étudiées plus tard, à la recherche de tendances qu'un seul seuil fixe raterait complètement, le genre d'analyse approfondie qu'un ingénieur civil utilise pour décider si une structure a besoin d'être renforcée après un événement.

hint~

## Réfléchis

Dans ce tutoriel, tu as **modifié** la valeur d'une **variable** et une **instruction conditionnelle** pour changer la façon dont ton détecteur de séismes échantillonne et réagit aux secousses. Note tes réponses aux questions ci-dessous sous forme de commentaires de code dans l'espace de travail.

1. Pense à quelque chose qui était difficile dans ce projet. Comment as-tu trouvé la solution ?

2. Comment t'es-tu senti en surmontant ce défi ?

3. Quelle est une autre chose que tu pourrais faire pour améliorer ton détecteur de séismes ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ce que tu as changé :

- ``||basic:Pause||`` : ajouté et ajusté pour contrôler la fréquence à laquelle le programme échantillonne l'accéléromètre

- ``||logic:If||`` : ajouté une instruction conditionnelle basée sur une règle qui compare Strength à un seuil

- ``||basic:Show Leds||`` : ajouté deux motifs, un pour une grosse secousse et un pour le calme

- Commentaire de code : documenté le raisonnement derrière ta valeur de seuil

À la prochaine étape, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

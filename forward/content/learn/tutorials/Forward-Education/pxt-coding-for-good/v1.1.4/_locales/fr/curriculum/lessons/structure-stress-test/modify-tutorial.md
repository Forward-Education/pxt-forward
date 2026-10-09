# Test de résistance des structures – Tutoriel Modifier

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
Q2:
Q3: */
```

## Test de résistance des structures - Tutoriel Modifier @showdialog

Dans ce tutoriel, tu vas **modifier** le code pour que le sélecteur contrôle la force des secousses de ton test de résistance des structures, et pas seulement s'il secoue ou non. Les vrais séismes ont des magnitudes différentes, et une table d'essai qui ne peut secouer que d'une seule façon ne peut te renseigner que sur un seul type de séisme.

1. **Construire** : Assemble le test de résistance des structures

2. **Connecter** : Couple ton micro:bit et télécharge le code de départ

3. **Modifier** : Ajoute le contrôle de la vitesse et déplace le chronomètre des secousses

## Préparation : Connecter les câbles @showdialog

IMPORTANT ! Assure-toi que ton test de résistance des structures est assemblé et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connecte le câble USB au micro:bit et à l'ordinateur, allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Télécharger @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Explorer : Comment fonctionne le programme

Prends un moment pour regarder le code de départ dans ton espace de travail. Peux-tu deviner ce que fait chaque partie ?

~hint Dis-m'en plus !

* ``TableTrue`` allume la table et enregistre le moment où elle a démarré

* ``Shake`` exécute une impulsion de servomoteur en va-et-vient à vitesse fixe, appelée à chaque répétition de la **boucle** ``||basic:Forever||``

* Le gestionnaire ``||fwdButtons:On Button Event||`` éteint la table et calcule ``||variables:shakeDuration||``

hint~

## Modifier : Ajoute une variable de puissance

Ajoute une nouvelle **variable** appelée ``Power``, et règle-la à **0**. Ensuite, à l'intérieur de ``Shake``, remplace les valeurs fixes 100 et -100 par ``Power`` et ``Power`` négatif.

~hint Dis-m'en plus !

* Pour l'instant, ``Shake`` tourne toujours à la même vitesse quoi qu'il arrive. Une **variable** permet à cette vitesse de changer pendant que le programme s'exécute

* Tu ne sentiras pas encore de différence, puisque rien ne règle ``Power`` à autre chose que 0

hint~

```blocks
function Shake () {
    // @highlight
    fwdMotors.setSpeed(fwdBase.leftServo, Power)
    basic.pause(100)
    // @highlight
    fwdMotors.setSpeed(fwdBase.leftServo, -1 * Power)
    basic.pause(100)
}
```

## Modifier : Ajoute des niveaux de vitesse

À l'intérieur de ``TableTrue``, après le réglage de ``shakeStart``, ajoute une condition ``||logic:If||``, appelée une **conditionnelle**, qui vérifie ``Math.abs(fwdButtons.dial1.position())``. Complète-la avec un « sinon si » pour chaque niveau de vitesse : 1 règle ``Power`` à 33 et affiche « Speed 1 », 2 règle ``Power`` à 66 et affiche « Speed 2 », et 3 ou plus règle ``Power`` à 100 et affiche « Speed 3 ».

~hint Dis-m'en plus !

* ``||fwdButtons:Position||`` compte de combien de crans le sélecteur a tourné depuis sa position de départ, dans un sens ou dans l'autre

* ``Math.abs`` enlève la direction, donc tourner le sélecteur dans le sens des aiguilles d'une montre ou dans le sens inverse de la même quantité compte comme le même niveau de vitesse

* Chaque branche fait deux choses : elle règle ``Power`` pour que ``Shake`` l'utilise, et elle met à jour le message sur le ``||fwdSensors:LCD Display||``

hint~

```blocks
function TableTrue () {
    tableOn = true
    shakeStart = input.runningTime()
    // @highlight
    if (Math.abs(fwdButtons.dial1.position()) == 1) {
        Power = 33
        fwdSensors.lcd1.printLineString("Speed 1", 2)
    } else if (Math.abs(fwdButtons.dial1.position()) == 2) {
        Power = 66
        fwdSensors.lcd1.printLineString("Speed 2", 2)
    } else if (Math.abs(fwdButtons.dial1.position()) >= 3) {
        Power = 100
        fwdSensors.lcd1.printLineString("Speed 3", 2)
    }
}
```

## Modifier : Affiche Table Off au centre

Ajoute une branche « sinon » finale à la même conditionnelle. Si le sélecteur est revenu à sa position de départ, éteins la table et affiche « Table Off » au lieu d'une vitesse.

~hint Dis-m'en plus !

* Cela couvre le seul cas qu'aucune autre branche n'attrape : le sélecteur n'a pas encore été tourné depuis sa position de départ

* Régler tableOn à faux ici fait que la table s'arrête vraiment, en accord avec ce que dit l'affichage

hint~

```blocks
} else if (Math.abs(fwdButtons.dial1.position()) >= 3) {
    Power = 100
    fwdSensors.lcd1.printLineString("Speed 3", 2)
// @highlight
} else {
    tableOn = false
    fwdSensors.lcd1.printLineString("Table Off", 2)
}
```

## Modifier : Déplace le chronomètre des secousses

La ligne 2 du ``||fwdSensors:LCD Display||`` est maintenant occupée à afficher la vitesse. Change le bloc ``||fwdSensors:Print Line String||`` du gestionnaire ``||fwdButtons:On Button Event||`` de la ligne 2 à la **ligne 1**.

~hint Dis-m'en plus !

* La ligne 1 avait été laissée vide exprès dans le tutoriel Utiliser. Maintenant elle a un rôle : afficher combien de temps la table vient de secouer

hint~

```blocks
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    tableOn = false
    shakeDuration = Math.round((input.runningTime() - shakeStart) / 1000)
    // @highlight
    fwdSensors.lcd1.printLineString("Shook: " + shakeDuration + "s", 1)
})
```

## Modifier : Installe une structure

Télécharge ton programme mis à jour. Avec la table éteinte, place une structure simple sur la table, comme une petite tour de blocs, un gobelet ou une forme en papier plié.

## Modifier : Teste les trois vitesses

Tourne le sélecteur pour atteindre la vitesse 1, et observe ta structure pendant quelques secondes. Puis tourne-le encore jusqu'à la vitesse 2, puis la vitesse 3, en observant attentivement après chaque changement.

À chaque vitesse, note ce qui arrive à ta structure : reste-t-elle immobile, vacille-t-elle, penche-t-elle ou tombe-t-elle ?

~hint Dis-m'en plus !

* Une structure qui reste stable à la vitesse 1 peut commencer à pencher ou à vaciller à la vitesse 3

* Note ce que tu as vu à chaque vitesse, en commentaire dans ton code ou sur papier. Tu en auras besoin plus tard pour comparer différentes conceptions de structures

* Appuie sur le ``||fwdButtons:Dial||`` entre les tests pour réinitialiser ``||variables:shakeDuration||`` et vérifier combien de temps chaque test a duré

hint~

## Enquêter : Trois vitesses, une seule fonction

**Enquête** : pourquoi ``Shake`` fonctionne-t-elle encore correctement pour les trois vitesses, alors que tu n'as pas changé une seule ligne à l'intérieur ?

~hint Dis-m'en plus !

* ``Shake`` lit la valeur que ``Power`` contient à ce moment-là. Elle n'a jamais eu besoin de savoir d'où venait cette valeur

* Comme la logique de vitesse vit dans ``Power``, ``Shake`` reste une seule **fonction** réutilisable au lieu d'avoir besoin d'une copie séparée pour chaque vitesse

hint~

## Enquêter : Un nombre qui a besoin d'une étiquette

**Enquête** : si le ``||fwdSensors:LCD Display||`` affichait seulement le nombre 66, sans les mots Speed 2 à côté, ce nombre voudrait-il dire quelque chose pour quelqu'un qui passe par là ?

~hint Dis-m'en plus !

* 66 pourrait être une vitesse, une température, un score, ou rien du tout. Le nombre seul ne veut rien dire

* C'est l'étiquette à côté qui transforme un simple nombre en information que quelqu'un d'autre peut vraiment utiliser

hint~

## Enquêter : Tester à différentes magnitudes

**Enquête** : les vrais séismes varient en magnitude, certains légers, d'autres violents. D'après ce que tu viens d'observer aux vitesses 1, 2 et 3, pourquoi un test de résistance des structures avec trois niveaux de vitesse est-il plus utile pour choisir une conception de bâtiment plus sûre qu'une table qui ne pourrait secouer que d'une seule façon ?

~hint Dis-m'en plus !

* Si ta structure a tenu à la vitesse 1 mais a vacillé ou est tombée à la vitesse 3, une seule vitesse fixe aurait complètement caché cette différence

* Tester à plusieurs magnitudes donne une image beaucoup plus complète des performances d'une conception avant qu'elle soit construite en taille réelle

hint~

## Réfléchir

Dans ce tutoriel, tu as **modifié** une **conditionnelle** et une **variable** pour donner à ton test de résistance des structures trois vitesses contrôlables. Note tes réponses aux questions ci-dessous sous forme de commentaires de code dans l'espace de travail.

1. Pense à quelque chose qui était difficile dans ce projet. Comment as-tu trouvé la solution ?

2. Comment t'es-tu senti en résolvant ce défi ?

3. Quelle est une autre chose que tu pourrais faire pour améliorer ton test de résistance des structures ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ce que tu as changé :

- ``Power`` : ajoutée comme nouvelle **variable** qui contrôle la vitesse d'exécution de ``Shake``

- ``||logic:If||`` : ajout d'une **conditionnelle** à plusieurs branches qui lit la position du sélecteur et règle à la fois ``Power`` et le message affiché

- ``||fwdSensors:Print Line String||`` : déplacement du chronomètre des secousses de la ligne 2 à la ligne 1 pour faire de la place à l'affichage de la vitesse

À la prochaine étape, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

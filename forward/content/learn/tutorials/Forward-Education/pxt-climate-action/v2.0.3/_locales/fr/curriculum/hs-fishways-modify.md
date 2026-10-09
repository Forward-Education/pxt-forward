# Préserver les voies de migration des poissons avec des passes migratoires - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    FishCount += 1
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    fwdMotors.setAngle(fwdBase.rightServo, fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdMotors.setAngle(fwdBase.rightServo, fwdButtons.dial1.position())
})
let FishCount = 0
fwdMotors.setAngle(fwdBase.rightServo, 0)
basic.forever(function () {
    basic.showNumber(FishCount)
})
```

## Activité 1 : Construis ton projet @showdialog

Explorons la migration des poissons! Nous allons le faire en quatre parties :

1. **Construire** notre passe migratoire
2. **Ajouter du code** pour donner vie à notre projet
3. **Modifier** notre projet pour en apprendre plus sur d'autres capteurs
4. Appliquer ce que nous avons appris avec un petit **défi**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-render.webp" alt="Rendu complet de la passe migratoire" style="display: block; width: 60%; margin:auto;">

## Composants électroniques requis @showdialog

![Composants électroniques requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs0A.webp)

## Blocs de construction requis @showdialog

![Blocs de construction requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs0B.webp)

## Étape de construction 1 @showdialog

![Étape de construction 1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs01.webp)

## Étape de construction 2 @showdialog

![Étape de construction 2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs02.webp)

## Étape de construction 3 @showdialog

![Étape de construction 3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs03.webp)

## Étape de construction 4 @showdialog

![Étape de construction 4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs04.webp)

## Étape de construction 5 @showdialog

![Étape de construction 5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs05.webp)

## Étape de construction 6 @showdialog

![Étape de construction 6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs06.webp)

## Étape de construction 7 @showdialog

![Étape de construction 7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs07.webp)

## Étape de construction 8 @showdialog

![Étape de construction 8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs08.webp)

## Étape de construction 9 @showdialog

![Étape de construction 9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs09.webp)

## Étape de construction 10 @showdialog

![Étape de construction 10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs10.webp)

## Étape de construction 11 @showdialog

![Étape de construction 11](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs11.webp)

## Étape de construction 12 @showdialog

![Étape de construction 12](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs12.webp)

## Étape de construction 13 @showdialog

![Étape de construction 13](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs13.webp)

## Étape de construction 14 @showdialog

![Étape de construction 14](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs14.webp)

## Étape de construction 15 @showdialog

![Étape de construction 15](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs15.webp)

## Étape de construction 16 @showdialog

![Étape de construction 16](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs16.webp)

## Étape de construction 17 @showdialog

![Étape de construction 17](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs17.webp)

## Étape de construction 18 @showdialog

IMPORTANT! Assure-toi de fixer tes blocs de construction circulaire vert et long blanc sur le moteur servo positionnel orienté à **90 degrés vers la gauche**, comme sur l'image.
![Étape de construction 18](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs18.webp)

## Étape de construction 19 @showdialog

![Étape de construction 19](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs19.webp)

## Étape de construction 20 @showdialog

![Étape de construction 20](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs20.webp)

## Étape de construction 21 @showdialog

![Étape de construction 21](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs21.webp)

## Étape de construction 22 @showdialog

![Étape de construction 22](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs22.webp)

## Étape de construction 23 @showdialog

![Étape de construction 23](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-fishways-sbs23.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui diront à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climat est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous avons une station de passe migratoire qui **dirige les types de poissons à l'aide d'un moteur**. Explorons comment améliorer notre projet en **modifiant** notre code!

Pendant que tu avances dans les prochaines étapes :

-   Utilise les instructions en haut de l'écran pour **modifier** ton code.
-   Quand tu es prêt·e à en savoir plus, clique sur **« Dis-m'en plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!

## Étape 1

Repense à la leçon sur la façon dont les écologistes utilisent les passes migratoires pour suivre la migration des poissons et les types de poissons présents dans un écosystème. Notre projet reproduit des sanctuaires et des aires de conservation comme le [marais Cootes Paradise](https://www.rbg.ca/plants-conservation/nature-sanctuaries/fishway/) en Ontario, au Canada.

Que devrait pouvoir faire la passe migratoire?

~hint Dis-m'en plus!

Pour aider les poissons à migrer d'un plan d'eau à un autre **et** pour aider les écologistes à suivre la santé de l'écosystème, notre modèle devrait pouvoir :

1. **Compter** combien de poissons ont migré à travers la passe migratoire.

2. Utiliser une **porte** pour empêcher les poissons de sortir de la passe migratoire tant que les écologistes n'ont pas recueilli leurs données.

3. **Faire pivoter la porte** pour permettre aux poissons de traverser la passe migratoire.

hint~

## Étape 2

En utilisant ta main, ou en fixant un petit poisson à un bloc de construction avec du matériel de bricolage, déplace le poisson le long de la passe migratoire!

**Fais la liste** de toutes les étapes qu'un poisson doit franchir pour sortir de la passe migratoire.

~hint Dis-m'en plus!

1. Un petit poisson indigène entre dans la passe migratoire par la **grille blanche** à la base de la passe migratoire.

2. Le poisson remonte la passe migratoire, en se reposant dans les deux **bassins de repos verts**.

3. Le poisson arrive à la **porte fermée**, les écologistes notent manuellement des données comme la taille et le type de poisson ayant traversé la passe migratoire.

4. L'écologiste ouvre la porte en tournant le `||fwdSensors:cadran||` **dans le sens horaire**, et appuie manuellement sur le `||fwdSensors:cadran||` pour suivre le nombre de poissons ayant utilisé la passe migratoire aujourd'hui.

5. Le poisson sort de la passe migratoire et entre dans le barrage!

6. L'écologiste ferme la porte en tournant le `||fwdSensors:cadran||` **dans le sens antihoraire** pour se préparer à accueillir d'autres poissons migrateurs.

hint~

## Étape 3

Réfléchis aux étapes que tu viens de **lister**.

Lesquelles de ces tâches se produisent **automatiquement** grâce aux instructions du code et à la conception physique?

Lesquelles se produisent **manuellement**?

~hint Dis-m'en plus!

**Étapes automatiques :**
Afficher le nombre de poissons à l'aide de la variable `||variables:FishCount||` sur le micro:bit

Empêcher les grandes espèces envahissantes de migrer

**Étapes manuelles :**

Tourner le `||fwdSensors:cadran||` pour ouvrir et fermer la porte

Appuyer sur le `||fwdSensors:cadran||` pour compter le nombre de poissons.

Fermer la porte une fois qu'un poisson a traversé la passe migratoire

Noter des données comme le type de poisson et son poids

hint~

## Étape 4

Automatisons une des étapes manuelles!

En ce moment, la porte s'ouvre lentement lorsque tu tournes le `||fwdSensors:cadran||` dans une direction ou dans l'autre.

Comment pourrions-nous mettre à jour le code pour que la porte s'ouvre et se ferme complètement **automatiquement** lorsque le `||fwdSensors:cadran||` est tourné?

~hint Dis-m'en plus!

Nous pouvons mettre à jour les deux événements `||fwdSensors:dial turned||` pour régler le moteur servo à un angle précis.

Supprime le bloc `||fwdSensors:dial absolute position||` de chaque bloc `||fwdMotors:set motor||`.

hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, )
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, )
})
```

## Étape 5

Maintenant, automatisons le mouvement!

-   Quand la porte est complètement **fermée**, notre cadran devrait aller à **0 degré**

-   Quand la porte est complètement **ouverte**, notre cadran devrait aller à **100 degrés**

~hint Dis-m'en plus!

Tape les nombres « 0 » et « 100 » dans chaque espace où tu as supprimé les deux blocs `||fwdSensors:dial absolute position||`.

N'oublie pas de connecter ton micro:bit et de cliquer sur le bouton `|Télécharger|` pour tester ton code mis à jour.
hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, 100)
})
```

## Étape 6

Maintenant que notre porte s'ouvre et se ferme plus rapidement, automatisons notre variable `||variables:FishCount||` pour qu'elle augmente chaque fois que la porte **s'ouvre**.

~hint Dis-m'en plus!

1. Nous devons glisser notre variable `||variables:FishCount||` de l'événement `||fwdSensors:on touch down||` vers l'événement `||fwdSensors:on dial turned by||`.

2. Quand le bloc `||fwdMotors:set rightServo||` est réglé à 100, la porte est ouverte.

3. Nous pouvons maintenant supprimer notre bloc `||fwdSensors:on touch down||`!

hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
        fwdMotors.setAngle(fwdBase.rightServo, 100)
        // @highlight
        FishCount += 1
})
```

## Étape 7

N'oublie pas de connecter ton micro:bit et de cliquer sur le bouton `|Télécharger|` pour tester ton code mis à jour.

Comment penses-tu que l'automatisation de ces étapes aide les écologistes à faire leur travail plus efficacement?

~hint Dis-m'en plus!

Quand une tâche est réalisée **automatiquement** grâce à un programme, il peut y avoir moins d'**erreurs humaines** dans les données que nous enregistrons, donc nous avons des **données plus précises** sur notre écosystème.

La porte tourne plus rapidement, donc plus de poissons peuvent migrer en utilisant la passe migratoire en une journée!
hint~

## Activité 4 : Défi @showdialog

Maintenant que nous avons **modifié notre code** pour compter automatiquement plus de poissons, nous allons compléter un petit défi!

## Défi étape 1

Repense aux étapes manuelles et automatiques réalisées par notre passe migratoire.

Peux-tu **automatiser** une autre étape manuelle?

~hint Dis-m'en plus!

**Étapes automatiques modifiées :**

1. Afficher le nombre de poissons à l'aide de la variable `||variables:FishCount||` sur le micro:bit
2. Empêcher les grandes espèces envahissantes de migrer
3. **Modifié :** augmenter `||variables:FishCount||` quand la porte s'ouvre
4. **Modifié :** ouvrir et fermer la porte à une position précise à l'aide du `||fwdSensors:cadran||`

**Étapes manuelles :**

1. Fermer la porte une fois qu'un poisson a traversé la passe migratoire
2. Noter des données comme le type de poisson et son poids
   hint~

## Défi étape 2

En ce moment, même si la porte s'ouvre et se ferme complètement, les écologistes doivent **déclencher l'événement** en tournant le `||fwdSensors:cadran||` **manuellement**.

Réfléchis à quel type de capteur pourrait **détecter** quand un poisson a réussi à traverser la porte.

~hint Dis-m'en plus!

Un capteur `||fwdSensors:sonar||` peut détecter quand un poisson n'est plus sur le chemin de la porte!

hint~

```block
fwdSensors.sonar1.isPastThreshold()
```

## Défi étape 3

D'abord, nous devons ajouter le capteur à notre construction physique!

Essaie de brancher le capteur `||fwdSensors:sonar||` à ton micro:bit et de l'ajouter dans un endroit stable de ton modèle. Tiens compte des critères suivants :

1. Le capteur doit voir le poisson en haut de la passe migratoire
2. Le capteur devrait rester dans une seule position

~hint Dis-m'en plus!

-   Essaie de fixer le capteur `||fwdSensors:sonar||` en haut de ta station de surveillance à distance (les blocs de construction avec le moteur et le micro:bit)

-   Tu devras peut-être ajouter un **petit bloc blanc** de construction, et un connecteur **bleu à 90 degrés**.

hint~

## Défi étape 4

Maintenant que tu as ajouté un capteur `||fwdSensors:sonar||` à ton modèle, réfléchis à comment tu vas coder ton projet!

Ton code devrait respecter les critères suivants :

1. Détecter si un objet est à **plus de 0,2 m**
2. `||basic:pause||` pendant 1 seconde
3. Faire pivoter le `||fwdMotors:moteur||` à 0 degré.

N'oublie pas de connecter ton micro:bit et de cliquer sur le bouton `|Télécharger|` pour tester ton code mis à jour.

~hint Dis-m'en plus!

Regarde les blocs de code d'exemple si tu te sens coincé·e!
hint~

```blocks
basic.forever(function () {
    basic.showNumber(FishCount)
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Over)) {
        basic.pause(1000)
        fwdMotors.setAngle(fwdBase.rightServo, 0)
    }
})
```

## Défi étape 5

N'oublie pas de connecter ton micro:bit et de cliquer sur le bouton `|Télécharger|` pour tester ton code mis à jour.

Testons-le!

Essaie de tenir ta main devant le capteur sonar, comme si c'était un poisson dans ta passe migratoire, puis retire ta main. Est-ce que ta porte se referme?

~hint Dis-m'en plus!

Chaque fois que nous installons de nouveaux capteurs, comme notre capteur `||fwdSensors:sonar||`, nous devons calibrer notre code.

Assure-toi d'utiliser le simulateur en direct pour observer la distance détectée par ton capteur sonar.

Ajuste la distance sonar de 0,2 m à un autre nombre, et télécharge ton code sur ton micro:bit chaque fois pour le tester!
hint~

## Défi étape 6

Voyons quel type de poisson notre porte automatique détecte le plus fidèlement!

Essaie d'utiliser la passe migratoire avec deux types de poissons différents :

1. Utilise ta **main** pour couvrir complètement le capteur sonar
2. Utilise un **long bloc blanc** de construction de la trousse Action Climat, avec un poisson attaché au bout

Note tes résultats sur une feuille de papier.

## Défi étape 7

Quel type de poisson le capteur sonar a-t-il détecté le plus fidèlement?

Est-ce que la vitesse à laquelle ta main ou le bloc de construction se déplace fait une différence dans la fermeture automatique de la porte?

~hint Dis-m'en plus!

Notre capteur sonar détecte plus facilement les **poissons plus gros et plus lents** que les **petits poissons rapides**.

Parfois, automatiser une technologie est une excellente idée, mais les limites peuvent parfois dépasser les avantages.

En fonction des **avantages et des inconvénients**, penses-tu que les écologistes garderaient la fonction de **fermeture automatique de la porte**, ou préféreraient-ils **la fermer manuellement**?
hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris·e à propos du projet?

## Réflexion @showdialog

1. Repense aux données sur les passes migratoires que nous avons explorées dans la section des grandes idées :

    - Comment pourrions-nous afficher le nombre de poissons quand 100 poissons sont passés par la passe migratoire chaque jour?
    - Comment afficherions-nous 1000 poissons?

2. Comment pourrais-tu adapter la construction physique et le code de ta passe migratoire avec du matériel de bricolage pour que l'eau puisse s'y écouler?

3. Quels sont les avantages et les inconvénients d'automatiser des fonctionnalités comme l'ajout d'un capteur sonar à notre passe migratoire?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

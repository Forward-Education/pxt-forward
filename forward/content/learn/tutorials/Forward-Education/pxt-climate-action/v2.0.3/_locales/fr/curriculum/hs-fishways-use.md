# Préserver les voies de migration des poissons avec des passes migratoires - Tutoriel Utiliser

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

Explorons la migration des poissons! Nous allons le faire en trois parties :

1. **Construire** notre passe migratoire
2. **Ajouter du code** pour donner vie à notre projet
3. **Utiliser** les capteurs pour comprendre comment ils fonctionnent

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

## Activité 3 : Utilise ton projet @showdialog

Maintenant que nous avons construit notre passe migratoire, nous allons commencer par **utiliser** l'exemple de code pour voir comment il fonctionne.

Pendant que tu avances dans les prochaines étapes :

-   **Utilise** les instructions en haut de l'écran.
-   Quand tu es prêt·e à en savoir plus, clique sur **« Dis-m'en plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule!**

## Étape 1

Repense à la leçon sur la façon dont les ingénieurs conçoivent les passes migratoires pour qu'elles s'adaptent à leur écosystème.

Quelles caractéristiques physiques remarques-tu dans la conception de la passe migratoire?

~hint Dis-m'en plus!

La passe migratoire est **inclinée** pour aller du bas d'un plan d'eau jusqu'au sommet d'un barrage.

Une **grille blanche** à la base de la passe migratoire empêche les grandes espèces envahissantes comme les poissons rouges d'y entrer.

Des **pièces horizontales** vertes sur la pente inclinée forment des fentes verticales qui créent des bassins de repos pour les poissons.

Une station de collecte de données avec un `||fwdSensors:cadran||` et un `||fwdMotors:servo||` connectés au micro:bit.

Une **porte blanche** en position **fermée** qui empêche les poissons de sortir de la passe migratoire jusqu'à ce que les écologistes l'ouvrent.

Un tube connecté à la **pompe à eau** que nous n'utilisons pas maintenant, mais que nous utiliserons dans la phase **création**.

hint~

## Étape 2

Repense à la leçon sur la façon dont les écologistes utilisent les passes migratoires pour suivre la migration des poissons et les types de poissons présents dans un écosystème. Notre projet reproduit des sanctuaires et des aires de conservation comme le [marais Cootes Paradise](https://www.rbg.ca/plants-conservation/nature-sanctuaries/fishway/) en Ontario, au Canada.

Que devrait pouvoir faire la passe migratoire?

~hint Dis-m'en plus!

Pour aider les poissons à migrer d'un plan d'eau à un autre **et** pour aider les écologistes à suivre la santé de l'écosystème, notre modèle devrait pouvoir :

1. **Compter** combien de poissons ont migré à travers la passe migratoire.

2. Utiliser une **porte** pour empêcher les poissons de sortir de la passe migratoire tant que les écologistes n'ont pas recueilli leurs données.

3. **Faire pivoter la porte** pour permettre aux poissons de traverser la passe migratoire.
   hint~

## Étape 3

Débranche ton modèle de l'ordinateur et place-le sur une table.

Avant de commencer à tester notre code, assure-toi que la **porte** de la **station de collecte de données** est en position **fermée** sur ta passe migratoire.

~hint Dis-m'en plus!

Si la **porte** est dans une position différente, retire délicatement le bloc de construction **circulaire vert** de ton `||fwdMotors:servo||` et refixe-le pour qu'il soit orienté à 90 degrés vers la gauche, au-dessus de ta passe migratoire.

La **porte** est le bloc de construction **long blanc** fixé au bloc **circulaire vert**.

La **station de collecte de données** est l'ensemble de blocs, du moteur `||fwdMotors:servo||` et du `||fwdSensors:cadran||` reliés au micro:bit.

hint~

## Étape 4

Testons-le!

Tourne le `||fwdSensors:cadran||` vers la **droite** de plusieurs tours complets, puis vers la **gauche** de plusieurs tours complets.

Que se passe-t-il?

~hint Dis-m'en plus!

-   **Si** le `||fwdSensors:cadran||` tourne dans une direction, la porte de la station de collecte de données **s'ouvre**

-   **Si** le `||fwdSensors:cadran||` tourne dans l'autre direction, la porte de la station de collecte de données **se ferme**

hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, fwdButtons.dial1.position())
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, fwdButtons.dial1.position())
})
```

## Étape 5

Peux-tu identifier la `||variables:variable||` qui représente le nombre de poissons traversant la passe migratoire?

~hint Dis-m'en plus!

-   L'**événement** `||fwdSensors:on touch down||` s'exécute chaque fois que le cadran est enfoncé.

-   Chaque fois que la boucle d'événement s'exécute, la variable `||variables:FishCount||` augmente de 1.

hint~

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    // @highlight
    FishCount += 1
})
```

## Étape 6

En utilisant ta main, ou en fixant un petit poisson à un bloc de construction avec du matériel de bricolage, déplace le poisson le long de la passe migratoire!

**Fais la liste** de toutes les étapes qu'un poisson doit franchir pour sortir de la passe migratoire.

~hint Dis-m'en plus!

1. Un petit poisson indigène entre dans la passe migratoire par la **grille blanche** à la base de la passe migratoire.

2. Le poisson remonte la passe migratoire, en se reposant dans les deux **bassins de repos verts**.

3. Le poisson arrive à la **porte fermée**, les écologistes notent manuellement des données comme la taille et le type de poisson ayant traversé la passe migratoire.

4. L'écologiste ouvre la porte en tournant le `||fwdSensors:cadran||` **dans une direction**, et appuie manuellement sur le `||fwdSensors:cadran||` pour suivre le nombre de poissons ayant utilisé la passe migratoire aujourd'hui.

5. Le poisson sort de la passe migratoire et entre dans le barrage!

6. L'écologiste ferme la porte en tournant le `||fwdSensors:cadran||` **dans l'autre direction** pour se préparer à accueillir d'autres poissons migrateurs.

hint~

## Étape 7

Réfléchis aux étapes que tu viens de **lister**.

Lesquelles de ces tâches se produisent **automatiquement** grâce aux instructions du code et à la conception physique?

Lesquelles se produisent **manuellement**?

~hint Dis-m'en plus!

**Étapes automatiques :**

1. Afficher le nombre de poissons à l'aide de la variable `||variables:FishCount||` sur le micro:bit
2. Empêcher les grandes espèces envahissantes de migrer

**Étapes manuelles :**

1. Tourner le `||fwdSensors:cadran||` pour ouvrir et fermer la porte
2. Appuyer sur le `||fwdSensors:cadran||` pour compter le nombre de poissons.
3. Fermer la porte une fois qu'un poisson a traversé la passe migratoire
4. Noter des données comme le type de poisson et son poids

Dans le tutoriel **Modifier**, nous allons commencer à automatiser certaines de ces étapes!
hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris·e à propos du projet?

## Réflexion @showdialog

1. Quelles autres conceptions pourrais-tu intégrer à ta passe migratoire pour aider les poissons à migrer plus facilement?

2. Comment les passes migratoires aident-elles à restaurer les habitats et à soutenir la migration des poissons?

3. Selon toi, à quel point notre passe migratoire devrait-elle être précise pour compter et détecter les poissons? Quelles adaptations peux-tu proposer pour augmenter la précision de la collecte de données?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

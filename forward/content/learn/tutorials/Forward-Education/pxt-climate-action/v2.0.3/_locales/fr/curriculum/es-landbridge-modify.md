# Passages fauniques sécuritaires - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
let animalCount = 0
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 90)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
input.onButtonPressed(Button.AB, function () {
    animalCount += 1
})
basic.forever(function () {
    basic.showNumber(animalCount)
})
basic.forever(function () {
    if (fwdSensors.solar1.isPastThreshold(70, fwdEnums.OverUnder.Under)) {
    	
    } else {
    	
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un passage faunique avec un pont et un tunnel! Nous allons faire cela en trois parties :

1. **Construis** ton passage
2. **Ajoute du code** pour lui donner vie
3. **Modifie** ton passage pour apprendre comment il fonctionne
4. Complète un **défi** pour l'améliorer

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-render.webp" alt="Rendu complet du passage faunique" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs01.webp)

## Étape de construction 2 @showdialog

![sbs2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs02.webp)

## Étape de construction 3 @showdialog

![sbs3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs03.webp)

## Étape de construction 4 @showdialog

![sbs4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs04.webp)

## Étape de construction 5 @showdialog

![sbs5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs05.webp)

## Étape de construction 6 @showdialog

![sbs6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs06.webp)

## Étape de construction 7 @showdialog

![sbs7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs07.webp)

## Étape de construction 8 @showdialog

![sbs8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs08.webp)

## Étape de construction 9 @showdialog

![sbs9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs09.webp)

## Étape de construction 10 @showdialog

![sbs10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs10.webp)

## Étape de construction 11 @showdialog

![sbs11](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs11.webp)

## Étape de construction 12 @showdialog

![sbs12](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs12.webp)

## Étape de construction 13 @showdialog

![sbs13](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs13.webp)

## Étape de construction 14 @showdialog

![sbs14](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs14.webp)

## Étape de construction 15 @showdialog

![sbs15](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs15.webp)

## Étape de construction 16 @showdialog

![sbs16](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs16.webp)

## Étape de construction 17 @showdialog

![sbs17](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs17.webp)

## Étape de construction 18 @showdialog

![sbs18](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs18.webp)

## Étape de construction 19 @showdialog

![sbs19](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs19.webp)

## Étape de construction 20 @showdialog

![sbs120](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs20.webp)

## Étape de construction 21 @showdialog

![sbs21](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs21.webp)

## Étape de construction 22 @showdialog

![sbs22](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs22.webp)

## Étape de construction 23 @showdialog

![sbs23](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-landbridge-sbs23.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de programmation 1 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de programmation 2

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code dans ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêts à **modifier** notre passage faunique!

**Astuces pour le tutoriel**

1. Suis les étapes en haut de l'écran.
2. Quand tu veux plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!
4. Après chaque changement, `|télécharge|` le nouveau code sur ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Étape de modification 1

Observe attentivement le passage faunique que tu as construit. Ensuite, révise le code ci-dessous.

## Étape de modification 2

Selon toi, que va-t-il se passer quand tu :

-   appuies sur A
-   appuies sur B
-   appuies sur A+B en même temps?

Essaie-le maintenant pour voir si tes prédictions étaient correctes!

~hint Dis-m'en plus!

-   Appuyer sur A, B et A+B sont des **événements** qui font bouger la barrière ou changent le compte d'animaux.
-   Quand on appuie sur A, le moteur tourne à 90° et la barrière s'ouvre.
-   Quand on appuie sur B, le moteur tourne à 0° et la barrière se ferme.
-   Quand on appuie sur A+B, le nombre sur le micro:bit augmente de 1. C'est ainsi que nous comptons les animaux qui traversent.
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 90)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
input.onButtonPressed(Button.AB, function () {
    animalCount += 1
})
```

## Étape de modification 3

En ce moment, nous devons appuyer sur les boutons pour ouvrir et fermer la barrière ou compter les animaux.

Imagine ce qui arriverait si personne n'était là pour surveiller et appuyer sur les boutons. Pourquoi penses-tu que cela pourrait poser problème?

~hint Dis-m'en plus!

-   **Barrière :** Si personne n'était là, la barrière resterait ouverte ou fermée. Si elle reste fermée, certains gros animaux pourraient rester coincés à attendre. Si elle reste ouverte, des prédateurs pourraient piéger leurs proies dans le tunnel.
-   **Comptage des animaux :** Si personne n'était là pour appuyer sur les boutons, le compte d'animaux serait faux. Nous n'aurions alors pas les bonnes données pour savoir si le passage aide vraiment à les garder en sécurité!
    hint~

## Étape de modification 4

Appuyer sur A ou B ouvre et ferme la barrière _manuellement_.

Nous pourrions plutôt faire en sorte que la barrière s'ouvre ou se ferme _automatiquement_ à l'aide d'un capteur et d'une **instruction conditionnelle**.

~hint Dis-m'en plus!

-   Une instruction conditionnelle indique au micro:bit de vérifier la situation, puis de décider quoi faire.
    hint~

## Étape de modification 5

Modifions le code pour que le capteur solaire contrôle la barrière. Au lieu d'appuyer sur des boutons, le capteur vérifiera la quantité de lumière et décidera s'il faut ouvrir la barrière ou non.

Pourquoi penses-tu que nous voulons utiliser la lumière pour contrôler la barrière? Fais une hypothèse!

~hint Dis-m'en plus!

-   Nous fermons la barrière la nuit (quand il fait noir!) pour protéger les proies. Les gros prédateurs qui chassent la nuit, comme les animaux nocturnes, pourraient utiliser le tunnel pour piéger leurs proies. Fermer la barrière la nuit garde les proies en sécurité.
-   Le jour, il fait clair dehors. Les proies sont plus en sécurité, car les prédateurs nocturnes sont moins actifs, alors la barrière peut rester ouverte pour que plus d'animaux puissent l'utiliser.
    hint~

## Étape de modification 6

Regarde l'instruction conditionnelle incomplète ci-dessous.

Essaie de déplacer les blocs ``||fwdMotors:set rightServo to||`` dans le bloc ``||logic:if then else||``. Ton objectif est de faire en sorte que la barrière s'ouvre le jour (quand il fait clair dehors!)

Ensuite, vérifie l'ampoule pour connaître la bonne réponse!

```block
basic.forever(function () {
    // @highlight
    if (fwdSensors.solar1.isPastThreshold(70, fwdEnums.OverUnder.Under)) {
        fwdMotors.setAngle(fwdBase.rightServo, 0)
    } else {
        fwdMotors.setAngle(fwdBase.rightServo, 90)
    }
})
```

## Étape de modification 7

Teste les changements que tu as faits! La barrière s'ouvre-t-elle et se ferme-t-elle automatiquement selon le niveau de lumière?

Couvre le capteur solaire avec ta main. Que se passe-t-il?

~hint Dis-m'en plus!

-   Quand tu couvres le capteur, c'est comme s'il faisait nuit. La barrière devrait se fermer pour protéger les proies des prédateurs qui chassent la nuit.
    hint~

```block
basic.forever(function () {
    if (fwdSensors.solar1.isPastThreshold(70, fwdEnums.OverUnder.Under)) {
        // @highlight
        fwdMotors.setAngle(fwdBase.rightServo, 0)
    } else {
        fwdMotors.setAngle(fwdBase.rightServo, 90)
    }
})
```

## Défi! @showdialog

Écrivons une autre instruction conditionnelle pour compter automatiquement les animaux lorsqu'ils traversent, à l'aide du capteur sonar.

Rappelle-toi que les capteurs sonar mesurent la distance des objets qui s'en approchent.

## Étape du défi 1

Fais glisser un nouveau bloc ``||logic:if then||`` et un bloc ``||fwdSensors:sonar1 distance is over||`` dans l'espace de travail.

## Étape du défi 2

Essaie d'ajouter ces blocs à ton code. Ton objectif est d'écrire une nouvelle instruction conditionnelle qui augmente notre compte d'animaux chaque fois que quelque chose s'approche du capteur sonar.

Vérifie l'ampoule pour connaître la réponse!

~hint Dis-m'en plus!

-   L'instruction conditionnelle vérifie si quelque chose est proche du capteur (comme un animal sur le point de traverser).
-   Si quelque chose est proche (moins de 0,1 m ou 10 cm), le compte d'animaux augmente de 1.
    hint~

```blocks
basic.forever(function () {
    basic.showNumber(animalCount)
    // @highlight
    if (fwdSensors.sonar1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
        animalCount += 1
    }
})
```

## Étape du défi 3

Teste-le! Mets ta main près du capteur solaire pour imiter un animal qui traverse.

Le nombre sur le micro:bit a-t-il augmenté?

## Étape du défi 4

Si le nombre augmente de plus de 1 à chaque fois, ajoute un bloc ``||basic:pause||`` après le bloc ``||variables:change animalCount by||``.

Cela empêchera le capteur de compter deux fois le même animal.

```blocks
basic.forever(function () {
    basic.showNumber(animalCount)
    if (fwdSensors.sonar1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
        animalCount += 1
        // @highlight
        basic.pause(1000)
    }
})
```

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose de difficile dans ce projet.

Comment as-tu réussi à le résoudre? Comment t'es-tu senti?

Quelle est une chose que tu pourrais faire pour améliorer ton passage faunique?

## Réflexion @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

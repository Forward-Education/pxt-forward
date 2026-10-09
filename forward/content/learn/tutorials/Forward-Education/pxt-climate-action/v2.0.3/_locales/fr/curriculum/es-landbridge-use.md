# Passages fauniques sécuritaires - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
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
```

## Activité 1 : Construis ton projet @showdialog

Construisons un passage faunique avec un pont et un tunnel! Nous allons faire cela en trois parties :

1. **Construis** ton passage
2. **Ajoute du code** à ton passage pour lui donner vie
3. **Utilise** ton passage pour apprendre comment il fonctionne

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

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêts à **utiliser** notre passage faunique!

**Astuces pour le tutoriel**

1. Suis les étapes en haut de l'écran.
2. Quand tu veux plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Étape 1

Observe attentivement le passage faunique que tu viens de construire. Peux-tu nommer les différentes parties qui le composent?

~hint Dis-m'en plus!
Ce passage faunique utilise :

-   des **blocs de construction** pour faire le pont et le tunnel.
-   des **pièces robotiques** pour contrôler le passage avec du code.
-   des **moteurs** pour ouvrir et fermer la barrière.
-   des **capteurs** pour détecter la lumière et les mouvements à proximité.
    hint~

## Étape 2

Explorons comment ces parties travaillent ensemble pour aider les animaux à traverser en sécurité!

Selon toi, comment les gros animaux utilisent-ils le passage comparativement aux petits animaux? Pourquoi penses-tu qu'il y a une barrière?

~hint Dis-m'en plus!

-   Les blocs de construction créent le pont et le tunnel, offrant aux animaux un moyen sécuritaire de passer au-dessus ou en dessous de la route.
-   Les gros animaux pourraient choisir d'utiliser le pont parce qu'il est large et ouvert.
-   Les petits animaux pourraient se sentir plus en sécurité dans le tunnel parce qu'il est plus fermé et caché.
-   La barrière protège les petits animaux en empêchant les prédateurs de les suivre dans le tunnel.
    hint~

## Étape 3

La barrière est reliée à un servomoteur positionnel, qui déplace la barrière à différents angles (ou positions!) Décortiquons notre code pour voir comment il fonctionne.

Selon toi, comment peut-on lever et abaisser la barrière? Essaie-le maintenant!

~hint Dis-m'en plus!

-   Appuyer sur A et sur B sont des **événements** distincts qui font se produire autre chose.
-   Quand tu appuies sur A, le servomoteur déplace la barrière à 90°. La barrière est ouverte.
-   Quand tu appuies sur B, le servomoteur déplace la barrière à 0°. La barrière est fermée.
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 90)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
```

## Étape 4

Nous avons besoin d'un moyen de compter combien d'animaux utilisent le passage.

Regarde le code. Selon toi, comment pouvons-nous garder une trace du nombre d'animaux?

~hint Dis-m'en plus!

-   Chaque fois qu'un animal traverse, tu peux appuyer sur A+B en même temps pour augmenter le compte d'animaux de 1. Ce nombre est stocké dans une **variable**.
-   Une **variable** est comme une boîte qui contient un nombre. Ici, elle suivra le nombre d'animaux qui ont traversé.
    hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    animalCount += 1
})
```

## Étape 5

Testons ce qui se passe quand tu appuies sur A+B plusieurs fois de suite. Selon toi, qu'est-ce qui va s'afficher sur les DEL du micro:bit?

Essaie-le maintenant! Avais-tu raison?

~hint Dis-m'en plus!

-   Chaque fois que tu appuies sur A+B, tu devrais voir le nombre sur l'écran du micro:bit augmenter de 1.
-   Le micro:bit affiche _toujours_ le nombre contenu dans la variable sur l'écran DEL. C'est parce que le bloc ``||basic:show number||`` se trouve dans une **boucle** ``||basic:forever||``.
    hint~

```blocks
basic.forever(function () {
    basic.showNumber(animalCount)
})
```

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense aux questions suivantes :

1. Pourquoi penses-tu que des scientifiques voudraient compter le nombre d'animaux qui utilisent le passage?
2. Comment des capteurs pourraient-ils être utilisés pour suivre automatiquement les animaux quand ils traversent?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

# Modèle de récif corallien - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    temperature += -1
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    temperature += 1
})
let temperature = 28
basic.forever(function () {
    basic.showNumber(temperature)
})
basic.forever(function () {
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0080)
    }
    basic.pause(100)
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons notre modèle de récif corallien! Nous allons faire cela en trois parties :

1. **Construis** ton modèle
2. **Ajoute du code** à ton modèle pour lui donner vie
3. **Utilise** ton modèle pour simuler le blanchissement du corail

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-render.webp" alt="Rendu complet du modèle de récif corallien" style="display: block; width: 70%; margin:auto;">

## Construction Étape 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs01.webp)

## Construction Étape 2 @showdialog

![sbs2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs02.webp)

## Construction Étape 3 @showdialog

![sbs3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs03.webp)

## Construction Étape 4 @showdialog

![sbs4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs04.webp)

## Construction Étape 5 @showdialog

![sbs5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs05.webp)

## Construction Étape 6 @showdialog

![sbs6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs06.webp)

## Construction Étape 7 @showdialog

![sbs7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs07.webp)

## Construction Étape 8 @showdialog

![sbs8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs08.webp)

## Construction Étape 9 @showdialog

![sbs9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs09.webp)

## Construction Étape 10 @showdialog

![sbs10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs10.webp)

## Construction Étape 11 @showdialog

![sbs11](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs11.webp)

## Construction Étape 12 @showdialog

![sbs12](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-coralreef-sbs12.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre modèle à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Codage Étape 1 @showdialog

IMPORTANT! Assure-toi que la carte de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Codage Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Codage Étape 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêts à **utiliser** notre modèle de récif corallien pour voir comment le blanchissement du corail se produit quand l'eau devient trop chaude.

**Conseils pour le tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu es prêt pour plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule!**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Utilisation Étape 1

Regarde de près le modèle que tu viens de construire. Peux-tu nommer les différentes pièces que tu as utilisées pour le fabriquer? Sois précis!

~hint Dis-m'en plus!
Ce modèle utilise :

-   **Blocs de construction :** Une plaque de base, un cercle, quatre connecteurs cubiques et deux cadres blancs moyens
-   **Matériel d'artisanat :** Du papier de soie
-   **Pièces robotiques :** Une carte de connexion, un micro:bit, un cadran et un anneau de DEL
    hint~

## Utilisation Étape 2

Que penses-tu que représentent les différentes parties de ton modèle?

~hint Dis-m'en plus!

-   L'anneau de DEL représente le corail. Sa couleur montrera si le corail est en santé ou blanchi. Nous utilisons du papier de soie pour que l'anneau de DEL ressemble davantage à du corail. Il représente les tentacules du polype corallien!
    hint~

## Utilisation Étape 4

Il est temps de tester le modèle en tournant lentement le cadran d'un cran vers la droite.

Que remarques-tu?

~hint Dis-m'en plus!

-   Le nombre sur l'écran de DEL du micro:bit a augmenté de 1.
-   Ce nombre va représenter la température actuelle de l'océan.
    hint~

## Utilisation Étape 5

Nous utilisons une **variable** pour stocker la température. Les variables sont comme des boîtes qui contiennent de l'information pour nous.

Chaque fois que tu tournes le cadran, la variable de température change selon la direction dans laquelle tu la tournes. Essaie de tourner le cadran d'un cran vers la gauche. Que se passe-t-il?

~hint Dis-m'en plus!
Voici comment ça fonctionne :

-   La variable contient la température actuelle. Dans ce programme, la température commence à 28 °C.
-   Quand tu tournes le cadran, la variable change. Tourner le cadran vers la droite augmente la température, et le tourner vers la gauche la diminue.
-   Le micro:bit vérifie continuellement le nombre à l'intérieur de la variable de température et l'affiche à l'écran.
    hint~

```block
let temperature = 28

fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    temperature += 1
})

fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    temperature += -1
})

basic.forever(function () {
    basic.showNumber(temperature)
})
```

## Utilisation Étape 6

Continue à tourner le cadran jusqu'à ce que la température soit _au-dessus de 30 °C_.

Que remarques-tu?

~hint Dis-m'en plus!

-   Quand la température dépasse 30 °C, les DEL de l'anneau de DEL deviennent blanches.
-   Cela représente le blanchissement du corail à mesure que l'océan se réchauffe.
    hint~

## Utilisation Étape 7

Nous avons utilisé quelque chose appelé une **instruction conditionnelle** pour changer la couleur de notre anneau de DEL (notre corail!)

Une instruction conditionnelle est une règle qui dit au micro:bit quoi faire quand certaines conditions sont remplies. Dans ce modèle, l'instruction conditionnelle change la couleur de l'anneau de DEL selon la température.

## Utilisation Étape 8

Peux-tu trouver la condition dans le code ci-dessous?

~hint Dis-m'en plus!

-   Si la température dépasse 30 °C, le corail blanchit (la DEL devient blanche).
-   Si la température est de 30 °C ou moins, le corail reste en santé (la DEL reste rose).
    hint~

```block
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0080)
    }
```

## Utilisation Étape 9

Maintenant que tu as testé ton modèle de récif corallien, réfléchissons.

En quoi ceci est-il un bon modèle du blanchissement du corail dans la vraie vie?

~hint Dis-m'en plus!
Points forts :

-   Ce modèle montre clairement comment une eau plus chaude peut causer le blanchissement du corail.
-   Il montre qu'une petite augmentation de température peut causer le blanchissement du corail.
-   Le modèle utilise la couleur de façon utile. Dans la vraie vie, le corail commence coloré mais devient blanc en blanchissant - tout comme notre anneau de DEL!
-   Dans notre modèle, les humains peuvent influencer la température de l'océan en tournant le cadran. Bien que nous ne puissions pas tourner un cadran dans la vraie vie, nous pouvons poser des gestes comme réduire la pollution pour aider à abaisser la température de l'océan et protéger les récifs coralliens.
    hint~

## Utilisation Étape 10

Quelles sont certaines limites de ce modèle? Montre-t-il _tout_ ce qui se passe dans un vrai récif corallien?

~hint Dis-m'en plus!

-   Dans ce modèle, le blanchissement se produit soudainement. Dans la vraie vie, le blanchissement du corail se produit lentement, au fil du temps, à mesure que la température de l'eau augmente.
-   Le modèle ne montre que les changements de température, mais dans la vraie vie, des facteurs comme la pollution ou trop de lumière du soleil peuvent aussi causer le blanchissement du corail.
-   Ce modèle ne montre pas comment les coraux peuvent récupérer et redevenir en santé.
-   Le modèle ne montre pas comment le blanchissement du corail affecte les autres animaux qui vivent dans le récif.

Choisis une de ces limites. Comment pourrions-nous améliorer le modèle pour y remédier? Quels composants de la trousse d'action climatique ajouterais-tu?
hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose sur laquelle tu aimerais en apprendre plus?

## Terminé! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

# Modèle de récif corallien - Tutoriel Modifier

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
    if (temperature > 32) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0080)
    }
    basic.pause(100)
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un modèle de récif corallien! Nous allons faire cela en quatre parties :

1. **Construis** ton modèle
2. **Ajoute du code** à ton modèle pour simuler le blanchissement du corail
3. **Modifie** ton code pour comprendre comment il fonctionne
4. Relève un **défi** pour rendre le modèle plus réaliste

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

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêts à **modifier** le code de notre modèle de récif corallien.

**Conseils pour le tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu es prêt pour plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!
4. Après chaque changement, `|Télécharge|` le nouveau code sur ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Modification Étape 1

Testons notre modèle! Tourne lentement le cadran vers la droite. Que remarques-tu?

~hint Dis-m'en plus!

-   Le nombre sur le micro:bit augmente à mesure que tu tournes le cadran. Ce nombre représente la température de l'océan.
-   Quand la température dépasse 32 °C, l'anneau de DEL passe du rose au blanc. Cela représente le blanchissement du corail!
    hint~

```block
let temperature = 28

fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    temperature += -1
})

fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    temperature += 1
})

basic.forever(function () {
    basic.showNumber(temperature)
})
```

## Modification Étape 2

Nous avons utilisé quelque chose appelé une **instruction conditionnelle** pour changer la couleur de notre anneau de DEL (notre corail!) quand la température était élevée.

Peux-tu trouver la condition dans le code ci-dessous?

~hint Dis-m'en plus!
Notre instruction conditionnelle dit au micro:bit :

-   Si la température dépasse 32 °C, le corail blanchit (les DEL deviennent blanches).
-   Si la température est de 32 °C ou moins, le corail reste en santé (les DEL restent roses).
    hint~

```block
    // @highlight
    if (temperature > 32) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0080)
    }
```

## Modification Étape 3

Maintenant, changeons _quand_ le blanchissement se produit. Modifie ton code pour que le corail commence à blanchir à 30 °C.

Télécharge ton nouveau code et teste-le. Que se passe-t-il quand tu tournes le cadran maintenant?

```block
    // @highlight
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0080)
    }
```

## Modification Étape 4

Les coraux peuvent avoir plusieurs couleurs différentes.

Essaie de changer la couleur de ton corail _en santé_ pour autre chose que le rose!

```block
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    }
```

## C'est l'heure du défi! @showdialog

Rendons notre modèle plus réaliste en programmant le corail pour qu'il blanchisse _plus lentement_.

Nous voulons :

-   **2/8** DEL deviennent blanches à **29 °C**.
-   **4/8** DEL deviennent blanches à **30 °C**.
-   **8/8** DEL deviennent blanches quand la température est **au-dessus de 30 °C**.

## Défi Étape 1

Nous devrons ajouter plus de conditions pour montrer un blanchissement graduel à mesure que la température augmente.

## Défi Étape 2

Commençons par ajouter une autre condition à notre code. Clique sur le symbole « + » en bas du bloc `||logic:if then else||`.

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else if (false) {
    	
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    }
    basic.pause(100)
})
```

## Défi Étape 2

Nous voulons que cette nouvelle condition fasse passer **4 DEL** au blanc quand la température est _exactement_ **30 °C**.

Clique sur la partie **temperature > 30** du code. Puis, fais un clic droit et sélectionne « Dupliquer ».

## Défi Étape 3

Fais glisser cette nouvelle expression dans l'instruction conditionnelle vide. Change **>** en **=**.

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else if (temperature == 30) {
    	
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    }
    basic.pause(100)
})
```

## Défi Étape 4

Va dans la catégorie `||fwdSensors:Sensors||`. Fais glisser 8 blocs `||fwdSensors:set ledRing 0 to red||` dans la nouvelle condition.

~hint Dis-m'en plus!

-   Le bloc `||fwdSensors:set ledRing 0 to red||` nous permettra de changer la couleur de chaque DEL.
    hint~

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else if (temperature == 30) {
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    }
    basic.pause(100)
})
```

## Défi Étape 5

Chaque DEL de l'anneau est numérotée de 0 à 7.

Indique au micro:bit quelle DEL nous voulons contrôler en changeant le nombre dans chaque bloc `||fwdSensors:set ledRing 0 to red||`.

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else if (temperature == 30) {
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(1, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(2, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(3, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(4, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(5, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(6, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(7, 0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    }
    basic.pause(100)
})
```

## Défi Étape 6

Maintenant, change les couleurs des DEL pour que **4/8** DEL deviennent blanches à **30 °C**.

Les 4 autres DEL devraient rester de la couleur en santé!

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else if (temperature == 30) {
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(1, 0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(2, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(3, 0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(4, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(5, 0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(6, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(7, 0xff8000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    }
    basic.pause(100)
})
```

## Défi Étape 7

Ajoute une autre condition pour que **2/8** DEL deviennent blanches à **29 °C**.

Vérifie l'ampoule pour voir notre solution.

```block
basic.forever(function () {
    if (temperature > 30) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else if (temperature == 30) {
        fwdLights.ledRing1.setPixelColor(0, 0xffffff)
        fwdLights.ledRing1.setPixelColor(1, 0xff8000)
        fwdLights.ledRing1.setPixelColor(2, 0xffffff)
        fwdLights.ledRing1.setPixelColor(3, 0xff8000)
        fwdLights.ledRing1.setPixelColor(4, 0xffffff)
        fwdLights.ledRing1.setPixelColor(5, 0xff8000)
        fwdLights.ledRing1.setPixelColor(6, 0xffffff)
        fwdLights.ledRing1.setPixelColor(7, 0xff8000)
    } else if (temperature == 29) {
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(1, 0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(2, 0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(3, 0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(4, 0xffffff)
        // @highlight
        fwdLights.ledRing1.setPixelColor(5, 0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(6, 0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(7, 0xff8000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    }
    basic.pause(100)
})
```

## Félicitations @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui était difficile.

Comment l'as-tu résolu? Comment cela t'a-t-il fait sentir?

Comment pourrais-tu autrement améliorer ton modèle de blanchissement du récif corallien? Pourrais-tu représenter les différentes étapes du blanchissement d'une autre façon?

## Réflexion @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

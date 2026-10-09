# Panneaux solaires - Tutoriel de modification

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Construisons un prototype de panneau solaire ! Nous allons faire ça en 4 parties :

1. **Construire** notre panneau solaire
2. **Ajouter du code** pour lui donner vie
3. **Modifier** le code pour apprendre comment il fonctionne
4. Compléter un **défi** pour améliorer la fonction de notre panneau solaire

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-render.webp" alt="Rendu complet du panneau solaire" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs01.webp)

## Étape de construction 2 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs02.webp)

## Étape de construction 3 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs03.webp)

## Étape de construction 4 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs04.webp)

## Étape de construction 5 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs05.webp)

## Étape de construction 6 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs06.webp)

## Étape de construction 7 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs07.webp)

## Étape de construction 8 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs08.webp)

## Étape de construction 9 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs09.webp)

## Étape de construction 10 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs10.webp)

## Étape de construction 11 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs11.webp)

## Étape de construction 12 @showdialog

![verticalfarmsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs12.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code !

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

```template
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
input.onButtonPressed(Button.B, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 180)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 90)
})
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
```

## Étape de codage 1 @showdialog

IMPORTANT ! Assure-toi que ta carte d'extension de la trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 40%; margin:auto;">

## Étape de codage 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet de l'incendie de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de codage 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ dans ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes prêts à **modifier** nos panneaux solaires !

**Conseils pour le tutoriel**

Au fil des prochaines étapes :

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt à obtenir plus d'information, clique sur **« Dis-m'en plus ! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule !
4. N'oublie pas, tu dois retélécharger le code après chaque changement que tu fais.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 70%; margin:auto;">

## Étape de modification 1

Les panneaux solaires captent la lumière du soleil et la convertissent en électricité. Pour bien fonctionner, ils doivent faire face au soleil afin d'absorber le plus de lumière possible.

Qu'arrive-t-il au micro:bit quand tu éclaires le capteur solaire de ton projet avec une lumière ?

~hint Dis-m'en plus !

-   Quand tu éclaires le capteur solaire, tu devrais remarquer qu'un grand losange apparaît sur l'affichage à DEL du micro:bit.
-   Il y a un **énoncé conditionnel** qui indique au micro:bit d'afficher cette icône chaque fois qu'il détecte une lumière vive (au-dessus de 90 %).
-   Cette sortie visuelle aide l'utilisateur à savoir que les panneaux solaires reçoivent assez de lumière !
    hint~

```block
if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
```

## Étape de modification 2

Essaie de modifier l'expression dans l'énoncé conditionnel. Qu'arrive-t-il quand tu diminues ou augmentes le nombre ?

~hint Dis-m'en plus !

-   N'oublie pas de retélécharger ton code après chaque changement pour le tester.
-   Augmenter le nombre signifie qu'il nous faut _encore plus_ de lumière pour déclencher le changement d'affichage du micro:bit. Si tu le changes à « 100 % », il se pourrait que tu ne puisses jamais déclencher le changement !
-   Diminuer le nombre rend le changement d'affichage du micro:bit plus facile à déclencher. À un certain point, le nombre peut devenir assez petit pour que le grand losange devienne l'icône par défaut.
    hint~

```block
if (fwdSensors.solar1.lightLevel() > 70) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
```

## Étape de modification 3

Ajuste le nombre dans l'expression de l'énoncé conditionnel à la valeur que tu juges la plus appropriée pour la pièce où tu te trouves. Pourquoi as-tu choisi ce nombre ?

## Étape de modification 4

Regarde le reste du code de tes panneaux solaires. Selon toi, qu'arrivera-t-il quand tu :

-   appuies sur « A » ?
-   touches le logo du micro:bit ?
-   appuies sur « B » ?

Essaie-le maintenant.

~hint Dis-m'en plus !

-   Nous utilisons différents **événements** ou **entrées** pour contrôler l'angle de rotation du servomoteur positionnel.
-   Quand tu appuies sur « A », le panneau solaire fait face à gauche (0°) !
-   Quand tu touches le logo du micro:bit, le panneau solaire fait face vers l'extérieur (90°) !
-   Quand tu appuies sur « B », le panneau solaire fait face à droite (180°) !
-   N'oublie pas : le soleil se lève à l'est et se couche à l'ouest ! Nous avons écrit le code de sorte que tu puisses changer manuellement la position du servomoteur pour t'assurer que le panneau solaire reçoit toujours le plus de soleil possible.
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 90)
})

input.onButtonPressed(Button.B, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 180)
})
```

## Étape de modification 5

En réalité, n'avoir que 3 positions fixes est limité. Que se passerait-il si nous voulions que les panneaux solaires suivent _plus de_ 3 positions dans le ciel ?

## Étape de modification 6

D'abord, il sera utile de voir jusqu'où le servomoteur peut réellement tourner. Ses limites se situent entre 0° et 270°.

Change le nombre dans le bloc `||fwdMotors:set rightServo to||` sous `||input:on button B pressed||` à 270°. Retélécharge ton code sur le micro:bit, puis observe ce qui se passe quand tu appuies sur « B ».

~hint Dis-m'en plus !

-   Le panneau solaire fait maintenant face à l'arrière de notre projet chaque fois que nous appuyons sur « B ».
    hint~

```blocks
input.onButtonPressed(Button.B, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, 270)
})
```

## Étape de modification 7

Nous n'avons encore que 3 positions possibles pour notre moteur.

Comment pourrions-nous remplacer le nombre unique dans le bloc `||fwdMotors:set rightServo to||` par un bloc qui représente plusieurs nombres ?

## Étape de modification 8

Une solution possible est d'utiliser le bloc `||math:pick random||`. Ce bloc permet de choisir une valeur aléatoire dans une plage donnée. Si nous fixons notre plage de 0 à 270, nous devrions pouvoir demander au servomoteur de tourner aléatoirement vers une nouvelle position dans toute sa plage chaque fois que nous appuyons sur « B ».

Modifie et retélécharge ton code. Appuie sur « B » quelques fois pour le tester !

~hint Dis-m'en plus !

-   `||math:pick random||` nous permet d'explorer toute la plage du servomoteur, mais ce n'est pas très pratique. Il se pourrait qu'on doive appuyer sur « B » _plusieurs_ fois pour trouver un endroit avec assez de soleil.
    hint~

```blocks
input.onButtonPressed(Button.B, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, randint(0, 270))
})
```

## Étape de modification 9

Puisque nous savons que le mouvement apparent du soleil n'est _pas_ aléatoire, nous pouvons probablement trouver un autre bloc dans la catégorie `||math:Math||` qui est plus approprié.

Ouvre la catégorie `||math:Math||`. Si nous voulons suivre le mouvement lent et unidirectionnel du soleil dans le ciel tout au long de la journée, quel bloc `||math:Math||` utiliserais-tu ? Explique ton choix.

~hint Dis-m'en plus !

-   Utiliser les blocs `||math:+||` ou `||math:-||` nous permettra d'augmenter ou de diminuer lentement la position (en degrés) du servomoteur avec le temps. Cela permettra de suivre plus précisément le mouvement apparent du soleil tout au long de la journée.
-   Le bloc que nous choisissons dépendra du fait que nous partions de 0° ou de 180°.
    hint~

## Étape de modification 10

Supposons que notre point de départ soit 0°. Nous voudrons donc _additionner_ à cette valeur, puisque le servomoteur ne peut pas descendre sous 0°.

Remplace le bloc `||math:pick random||` par le bloc `||math:+||`.

```block
input.onButtonPressed(Button.B, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, 0 + 0)
})
```

## Étape de modification 11

Chaque fois que nous appuyons sur « B », nous voulons que le panneau solaire se déplace de 20° à partir de _sa position actuelle_.

Ouvre la catégorie `||fwdMotors:Motors||`. Quel bloc pouvons-nous utiliser pour déterminer la position actuelle du servomoteur ?

~hint Dis-m'en plus !

-   Le bloc `||fwdMotors:rightServo angle(°)||` est une variable qui suit la position actuelle du servomoteur.
-   Les **variables** sont des espaces réservés pour des valeurs qui peuvent changer.
    hint~

## Étape de modification 12

Glisse le bloc `||fwdMotors:rightServo angle(°)||` dans l'espace de travail.

Comment pourrais-tu modifier le bloc `||math:+||` pour que chaque fois que nous appuyons sur « B », le panneau solaire se déplace de 20° à partir de _sa position actuelle_ ?

Essaie-le maintenant. N'oublie pas de retélécharger ton code pour le tester.

_Remarque : tu devras peut-être attendre quelques secondes entre chaque pression de bouton._

~hint Dis-m'en plus !

-   Nous voulons _additionner_ (`||math:+||`) 20° à la position actuelle du servomoteur (`||fwdMotors:rightServo angle(°)||`).
-   Ce mouvement est beaucoup plus approprié pour suivre le soleil. Par exemple, nous pourrions appuyer sur « B » chaque heure et suivre le mouvement du soleil tout au long de la journée.
    hint~

```block
input.onButtonPressed(Button.B, function () {
    // @highlight
    fwdMotors.setAngle(fwdBase.rightServo, fwdMotors.getAngle(fwdBase.rightServo) + 20)
})
```

## Défi ! @showdialog

As-tu remarqué des limites dans notre conception ?

Une limite est que nous devons appuyer sur « B » assez souvent pour réajuster notre panneau solaire tout au long de la journée. Que se passe-t-il si l'utilisateur n'est pas à la maison ?

Une autre limite est que lorsque le servomoteur dépasse 180°, il commence à faire face au sol. Ce n'est pas utile pour un outil qui a besoin d'accéder à la lumière du soleil !

Améliorons le code afin que notre panneau solaire :

1. se déplace _automatiquement_ tout au long de la journée, selon le niveau d'exposition au soleil, et
2. reste dans certaines limites !

## Étape de défi 1

Nous n'avons pas vraiment besoin d'ajouter d'autres blocs pour que le panneau solaire se déplace automatiquement. Nous devons seulement réorganiser ce que nous avons déjà écrit.

Où pourrais-tu déplacer le bloc `||fwdMotors:set rightServo to 'rightServo angle (°)'||` `||math: + 20||` pour t'assurer que le panneau solaire se repositionne automatiquement _quand il ne reçoit pas assez de lumière du soleil_ ?

Essaie quelques options, puis vérifie l'ampoule pour voir notre solution !

~hint Dis-m'en plus !

-   Nous avons déjà un énoncé conditionnel qui évalue le niveau de lumière.
-   Si le niveau de lumière est _au-dessus_ de notre seuil (90 %), alors le micro:bit affiche un grand losange. Sinon, il affiche un petit losange.
-   Nous pouvons ajouter notre bloc `||fwdMotors:set rightServo to 'rightServo angle (°)||` `||math: + 20||` dans la **condition sinon**, sous le bloc `||basic:show icon||`.
-   N'oublie pas, tu peux réinitialiser la position du panneau solaire à 0° en appuyant sur « A ».
    hint~

```blocks
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        // @highlight
        fwdMotors.setAngle(fwdBase.rightServo, fwdMotors.getAngle(fwdBase.rightServo) + 20)
    }
})
```

## Étape de défi 3

Change la deuxième valeur dans le bloc `||math:+||`.

Qu'arrive-t-il quand tu augmentes ou diminues ce nombre ?

~hint Dis-m'en plus !

-   Plus le nombre est petit, plus souvent les panneaux solaires s'arrêtent pour évaluer le niveau de lumière du soleil.
-   Quels sont les avantages et les inconvénients d'avoir un très petit nombre ? Un grand nombre ?
    hint~

```blocks
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        // @highlight
        fwdMotors.setAngle(fwdBase.rightServo, fwdMotors.getAngle(fwdBase.rightServo) + 10)
    }
})
```

## Étape de défi 4

Créons quelques limites pour notre panneau solaire. Supposons que nous ne voulons pas que le panneau dépasse 180°.

Glisse les blocs suivants dans l'espace de travail :

-   `||logic: if then||`
-   `||logic: <||`
-   `||fwdMotors:rightServo angle (°)||`
-   `||fwdMotors:set rightServo to||`

_Remarque : ils apparaîtront hachurés pour l'instant._

## Étape de défi 5

Comment pourrais-tu combiner et modifier ces nouveaux blocs pour créer un nouvel énoncé conditionnel qui réinitialise la position du servomoteur à 0° chaque fois qu'elle dépasse 180° ?

Vérifie l'ampoule pour voir notre solution.

```block
if (fwdMotors.getAngle(fwdBase.rightServo) > 180) {
        fwdMotors.setAngle(fwdBase.rightServo, 0)
    }
```

## Étape de défi 6

Où devrais-tu ajouter cet énoncé conditionnel dans notre code existant ?

Essaie quelques positions, puis vérifie l'ampoule pour voir une solution possible.

~hint Dis-m'en plus !

-   Si tu ajoutes ce nouveau conditionnel immédiatement après le bloc `||fwdMotors:set rightServo to 'rightServo angle (°)||` `||math: + 10||`, nous vérifierons toujours si la nouvelle position dépasse 180°. Si c'est le cas, le servomoteur sera réinitialisé à 0°.
    hint~

```blocks
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        fwdMotors.setAngle(fwdBase.rightServo, fwdMotors.getAngle(fwdBase.rightServo) + 10)
        // @highlight
        if (fwdMotors.getAngle(fwdBase.rightServo) > 180) {
            fwdMotors.setAngle(fwdBase.rightServo, 0)
        }
    }
})
```

## Essaie-le !

Prends une lampe de poche et déplace-la lentement autour de ton projet comme si c'était le soleil dans le ciel. Comment le panneau solaire réagit-il ?

## Félicitations @showdialog

Tu as terminé l'activité !

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis au défi.

Comment as-tu surmonté ce défi ?

Comment cela t'a-t-il fait sentir ?

## Terminé

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

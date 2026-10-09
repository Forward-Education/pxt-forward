# Désinfection solaire de l'eau - Tutoriel de modification

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Créons notre minuterie SODIS ! Nous allons faire ceci en 4 parties :

1. **Construire** notre minuterie SODIS
2. **Ajouter du code** pour lui donner vie
3. **Modifier** la minuterie pour mieux comprendre son fonctionnement
4. Réaliser des **défis** pour améliorer la minuterie

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/sodis-prototype.png" alt="Prototype SODIS complet" style="display: block; width: 10%; margin:auto;">

## Étapes de construction 1 à 3 @showdialog

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/sodis-threebottles.webp" style="display: block; width: 75%; margin:auto;">

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code !

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

```template
exposure_sec = 0

input.onButtonPressed(Button.A, function () {
    control.reset()
})

basic.forever(function () {
    basic.showNumber(exposure_sec)
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
    }
})
```

## Étape de codage 1 @showdialog

Branche le micro:bit à ton ordinateur.

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet du feu de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de codage 2

Clique sur le bouton `|Télécharger|` pour télécharger le code vers ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes prêts à **modifier** notre minuterie SODIS !

Astuces

1. Suis les instructions en haut de l'écran.
2. Lorsque tu es prêt à en savoir plus, clique sur **« Dis-m'en plus ! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule !
4. Après chaque changement, tu devras `|Télécharger|` le code mis à jour vers ton micro:bit.

## Étape de modification 1

Une minuterie SODIS nous aide à suivre depuis combien de temps notre eau a été exposée aux rayons UV du soleil et nous indique quand elle est prête à boire !

Regarde ta minuterie en ce moment. Qu'observes-tu ? Que penses-tu qu'il se passera lorsque nous éclairerons la minuterie avec une lumière ?

~hint Dis-m'en plus !
Pour l'instant, tu devrais voir un « 0 » sur le micro:bit !
hint~

## Étape de modification 2

Essaie d'éclairer ta bouteille d'eau et ta minuterie SODIS avec une lumière vive. Maintiens la lumière pendant quelques secondes, puis éteins-la. Qu'as-tu remarqué ?

~hint Dis-m'en plus !

-   Tant que la lumière brille, le nombre affiché sur le micro:bit augmente de « 1 » chaque seconde.
-   Le nombre cesse d'augmenter lorsque la lumière est éteinte.
-   En supposant que la lampe de poche représente le soleil, le nombre affiché sur le micro:bit correspond au nombre de secondes pendant lesquelles l'eau a été exposée à la lumière UV !
-   Si ton nombre n'augmente pas, essaie de rapprocher ta lumière du micro:bit.
    hint~

## Étape de modification 3

Regardons le code maintenant.

Nous utilisons une **instruction conditionnelle** et une **variable** pour créer notre minuterie SODIS. Regarde l'ampoule pour mettre ces blocs en surbrillance.

```block
// @highlight
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        // @highlight
        exposure_sec += 1
    }
```

## Étape de modification 4

Les variables nous permettent de stocker des informations pour une utilisation ultérieure. Dans ce programme, nous avons créé une variable nommée `||variables:exposure_sec||` pour suivre depuis combien de temps notre eau est au soleil (en secondes) !

## Étape de modification 5

Change le nombre dans le bloc `||variables:change exposure_sec by||` à « 3 ». Que se passe-t-il lorsque tu éclaires l'eau et la minuterie SODIS maintenant ?

~hint Dis-m'en plus !

-   Le nombre affiché augmente maintenant de « 3 » chaque seconde.
-   Rien n'a changé ? N'oublie pas de retélécharger ton nouveau code vers le micro:bit !
    hint~

```block
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        // @highlight
        exposure_sec += 3
    }
```

## Étape de modification 6

Chaque seconde, la variable augmente de « 3 ». Ce n'est pas très logique. Nous voulons que le nombre affiché représente le nombre de secondes qui se sont _réellement_ écoulées.

Y a-t-il un autre bloc que nous pourrions modifier pour régler ce problème ? Essaie maintenant, puis vérifie l'ampoule !

~hint Dis-m'en plus !

-   Changer la valeur du bloc `||basic:pause||` à « 3000 » fera en sorte que le micro:bit fasse une pause de 3 secondes avant d'augmenter la variable `||variables:exposure_sec||` de « 3 ».
-   Autrement dit, la variable et le décompte du temps sont de nouveau synchronisés !
    hint~

```block
    if (input.lightLevel() > 200) {
        // @highlight
        basic.pause(3000)
        exposure_sec += 3
    }
```

## Étape de modification 7

Remarques-tu quelque chose d'inattendu à propos de la minuterie maintenant ? Comment ce comportement pourrait-il affecter le processus de désinfection ?

~hint Dis-m'en plus !

-   Augmenter la valeur du bloc `||basic:pause||` a rendu la minuterie moins réactive. Il y a parfois un délai entre le décompte et le temps réellement écoulé.
-   Par exemple, tu pourrais remarquer que si tu exposes ta minuterie à la lumière pendant 4 secondes, le décompte monte quand même jusqu'à « 6 » !
-   Un rapport inexact de l'exposition au soleil signifie que des gens pourraient boire de l'eau non sécuritaire !
    hint~

## Étape de modification 8

Remettons la valeur du bloc `||variables:change exposure_sec by||` à « 1 » et la valeur du bloc `||basic:pause||` à « 1000 » pour régler ce bogue dangereux.

```block
    if (input.lightLevel() > 200) {
        // @highlight
        basic.pause(1000)
        // @highlight
        exposure_sec += 1
    }
```

## Étape de modification 9

Passons maintenant à l'instruction conditionnelle.

L'instruction conditionnelle dans notre code agit comme un point de décision et nous permet de contrôler _quand_ la variable `||variables:exposure_sec||` augmente. Rappelle-toi, nous voulons que la variable augmente chaque fois que le soleil brille.

```block
    // @highlight
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
    }
```

## Étape de modification 10

Selon toi, que va-t-il arriver à ta minuterie SODIS si tu diminues le nombre dans le bloc `||input:light level||` `||logic:> 200||` ? Essaie maintenant !

Pourquoi voudrait-on faire ce changement ?

~hint Dis-m'en plus !

-   Diminuer la valeur dans l'instruction conditionnelle permet à la minuterie SODIS de réagir à des niveaux de lumière plus faibles. Tu pourrais même remarquer que le niveau de lumière de ta pièce suffit à faire augmenter le décompte !
-   Nous pourrions changer cette valeur pour que la minuterie SODIS fonctionne encore par une journée nuageuse, lorsque le soleil est moins intense.
    hint~

```block
    // @highlight
    if (input.lightLevel() > 100) {
        basic.pause(1000)
        exposure_sec += 1
    }
```

## Étape de modification 11

Remets la valeur dans le bloc `||input:light level||` `||logic:> 100||` à « 200 »

```block
    // @highlight
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
    }
```

## Activité 4 : L'heure du défi ! @showdialog

Maintenant que nous comprenons un peu mieux le code, créons un indicateur visuel clair qui informe l'utilisateur _quand_ l'eau est prête à boire.

Rappelle-toi, cette décision dépendra du fait qu'il s'agisse d'une journée ensoleillée ou nuageuse. Par exemple, par temps ensoleillé, l'eau n'a besoin que de 6 heures d'exposition au soleil pour être désinfectée. Lorsqu'il fait nuageux, l'eau devra être exposée au soleil pendant 48 heures pour être considérée comme sécuritaire !

Mettons à jour notre code pour tenir compte des deux situations.

## Étape de défi 1

Suppose que la minuterie SODIS est utilisée dans un climat majoritairement ensoleillé. Les conditions ensoleillées seront notre réglage par défaut !

## Étape de défi 2

Pour créer un indicateur visuel lorsque l'eau est prête à boire par une journée ensoleillée, nous devons écrire un autre point de décision, ou instruction conditionnelle. Cette condition permettra au micro:bit d'évaluer si le seuil d'exposition a été atteint. Par temps ensoleillé, ce seuil est de 6 heures.

Réfléchis à la façon dont tu pourrais formuler ce point de décision à l'aide d'une instruction si/alors.

~hint Dis-m'en plus !

-   Tu pourrais dire « Si l'eau a été exposée aux UV pendant 6 heures, alors affiche un visage souriant sur les DEL du micro:bit. »
-   L'indicateur visuel n'a pas à être un visage souriant, il pourrait s'agir de n'importe quoi !
    hint~

## Étape de défi 3

Glisse un bloc `||logic:if then||` et un bloc `||logic:<||` depuis la catégorie `||logic:Logic||` et dépose-les dans l'espace de travail. Ensuite, glisse un bloc `||variables:exposure_sec||` depuis la catégorie `||variables:Variables||` et un bloc `||basic:show icon||` depuis la catégorie `||basic:Basic||`.

Comment peux-tu combiner ces blocs pour créer une instruction conditionnelle qui vérifie si le temps d'exposition recommandé est écoulé ? Essaie maintenant, puis vérifie l'ampoule pour voir la solution.

~hint Dis-m'en plus !
Bien que 6 heures représentent techniquement 21 600 secondes, nous allons laisser le nombre dans la condition à « 6 » pour l'instant afin de faciliter les tests ! Sinon, nous devrions attendre très longtemps.
hint~

```block
if (exposure_sec >= 6) {
    basic.showIcon(IconNames.Happy)
}
```

## Étape de défi 4

Où devrions-nous placer cette instruction conditionnelle dans notre code existant ?

~hint Dis-m'en plus !

-   Plaçons-la juste après le bloc `||variables:change exposure_sec by||`, imbriquée dans la première condition. Ainsi, l'ordinateur vérifiera si le seuil a été atteint chaque fois que la variable `||variables:exposure_sec||` change.
-   Retélécharge ton code pour le tester !
    hint~

```block
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
        // @highlight
        if (exposure_sec >= 6) {
            basic.showIcon(IconNames.Happy)
        }
    }
```

## Étape de défi 5

Nous avons maintenant deux instructions conditionnelles dans notre code. Les critères des _deux_ changeront selon la météo. Par une journée nuageuse, l'intensité du soleil sera _plus faible_ et le temps d'exposition requis sera _plus élevé_ que par une journée ensoleillée.

Créons deux nouvelles variables afin de pouvoir suivre et modifier ces valeurs au jour le jour.

```block
// @highlight
if (input.lightLevel() > 200) {

        // @highlight
        if (exposure_sec >= 6) {
        	
        }
    }
```

## Étape de défi 6

Tout d'abord, nous allons créer une variable appelée `||variables:lightThreshold||` pour suivre l'intensité de lumière requise pour déclencher notre minuterie. Rappelle-toi, ce nombre devrait être _plus faible_ par une journée nuageuse et _plus élevé_ par une journée ensoleillée.

Va dans la catégorie `||variables:Variables||` et clique sur « Créer une variable ». Nomme cette variable « lightThreshold » et clique sur « OK ».

## Étape de défi 7

Glisse le bloc `||variables:lightThreshold||` et remplace « 200 » dans le bloc `||input:light level||` `||logic: > 200||`.

```block
// @highlight
if (input.lightLevel() > lightThreshold) {
        basic.pause(1000)
        exposure_sec += 1
        if (exposure_sec >= 6) {
            basic.showIcon(IconNames.Happy)
        }
    }
```

## Étape de défi 8

Lorsqu'il fait ensoleillé, nous voulons que `||variables:lightThreshold||` soit réglé à « 200 ». Ce sera le réglage par défaut.

Déplace le bloc `||variables:set lightThreshold to||` dans le bloc `||basic: on start||`. Change « 0 » à « 200 ».

```blocks
let lightThreshold = 0
exposure_sec = 0
// @highlight
lightThreshold = 200
```

## Étape de défi 9

C'est à ton tour !

Crée une autre variable qui représente le seuil d'exposition au soleil et nomme-la `||variables:exposureThreshold||`. Par une journée ensoleillée, cette valeur devrait être de 6 heures !

~hint Dis-m'en plus !

-   Bien que 6 heures représentent techniquement 21 600 secondes, nous allons laisser `||variables:exposureThreshold||` à « 6 » pour l'instant afin de faciliter les tests !
    hint~

## Étape de défi 10

Comment pouvons-nous ajouter cette nouvelle variable à notre code existant ? Essaie maintenant, puis vérifie l'ampoule !

```blocks
let exposureThreshold = 0
let lightThreshold = 0
exposure_sec = 0
lightThreshold = 200
// @highlight
exposureThreshold = 6

basic.forever(function () {
    basic.showNumber(exposure_sec)
    if (input.lightLevel() > lightThreshold) {
        basic.pause(1000)
        exposure_sec += 1
        // @highlight
        if (exposure_sec >= exposureThreshold) {
            basic.showIcon(IconNames.Happy)
        }
    }
})
```

## Étape de défi 11

Nous avons besoin d'un moyen de changer la valeur des deux variables lorsqu'il fait nuageux. Ajoute du code pour que les valeurs changent lorsque le bouton « B » est pressé.

Lorsque « B » est pressé, nous voulons régler `||variables:lightThreshold||` et `||variables:exposureThreshold||` à « 100 » et « 48 », respectivement.

~hint Dis-m'en plus !

-   Nous réglons la variable `||variables:lightThreshold||` à « 100 » parce que c'est plus bas que « 200 ». Tu peux choisir une autre valeur ici tant qu'elle est inférieure à « 200 ».
-   Nous réglons la variable `||variables:exposureThreshold||` à « 48 » parce que l'eau a besoin de 48 heures d'exposition au soleil par une journée nuageuse pour être désinfectée correctement. Bien que 48 heures représentent techniquement 172 800 secondes, nous allons laisser le seuil à « 48 » pour l'instant afin de faciliter les tests !
    hint~

```blocks
input.onButtonPressed(Button.B, function () {
    lightThreshold = 100
    exposureThreshold = 48
})
```

## Étape de défi 12

Testons cela ! Télécharge ton nouveau code et :

1. Éclaire la minuterie SODIS pendant 6 secondes.
2. Appuie sur « A » pour réinitialiser la minuterie.
3. Appuie sur « B » pour activer le « mode journée nuageuse ». Éclaire la minuterie pendant 48 secondes.

Que remarques-tu après chaque étape ? S'est-il passé quelque chose d'inattendu ? Si oui, peux-tu expliquer pourquoi ?

## Étape de défi 13

En ce moment, l'affichage et les seuils d'exposition sont tous en secondes. En réalité, nous savons que pour que le SODIS fonctionne, l'eau doit être exposée aux rayons UV pendant 6 _heures_ par une journée ensoleillée et 48 _heures_ par une journée nuageuse. Comment pourrais-tu modifier ton programme pour avoir des seuils d'exposition plus précis et afficher les _heures_ écoulées sur les DEL ?

_Astuce : pour convertir entre les heures et les secondes, tu peux utiliser les blocs de multiplication et de division de la catégorie `||math:Math||`._

Essaie ceci par toi-même, puis vérifie l'ampoule pour voir notre solution.

```blocks
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    lightThreshold = 100
    // @highlight
    exposureThreshold = 48 * 3600
})
let exposureThreshold = 0
let lightThreshold = 0
exposure_sec = 0
lightThreshold = 200
// @highlight
exposureThreshold = 6 * 3600
basic.forever(function () {
    // @highlight
    basic.showNumber(Math.round(exposure_sec / 3600))
    if (input.lightLevel() > lightThreshold) {
        basic.pause(1000)
        exposure_sec += 1
        if (exposure_sec >= exposureThreshold) {
            basic.showIcon(IconNames.Happy)
        }
    }
})
```

## Félicitations ! @showdialog

Tu as terminé l'activité ! Comme prochaine étape, tu pourrais toujours tester le fonctionnement de la minuterie SODIS dans le monde réel en la plaçant dans un endroit ensoleillé, comme près d'une fenêtre !

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/sodis-windowbottles.webp" style="display: block; width: 70%; margin:auto;">

## Réflexion @showdialog

Pense à un aspect de ce projet qui t'a mis au défi.

Comment as-tu surmonté ce défi ? Comment cela t'a-t-il fait sentir ?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

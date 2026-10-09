# Désinfection solaire de l'eau - Tutoriel d'utilisation

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Créons notre minuteur SODIS ! Nous allons faire cela en 3 parties :

1. **Construire** notre minuteur SODIS
2. **Ajouter du code** pour lui donner vie
3. **Utiliser** le minuteur pour apprendre comment il fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/sodis-prototype.png" alt="Prototype SODIS complet" style="display: block; width: 10%; margin:auto;">

## Étapes de construction 1 à 3 @showdialog

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/sodis-threebottles.webp" style="display: block; width: 75%; margin:auto;">

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code !

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

```template
let exposure_sec = 0

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

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connect Device_. Suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet du feu de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de codage 2

Clique sur le bouton `|Télécharger|` pour télécharger le code vers ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes prêts à **utiliser** notre minuteur SODIS !

Astuces

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt à en savoir plus, clique sur **« Dis-m'en plus ! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule !

## Étape d'utilisation 1

Rappelle-toi que notre minuteur va nous aider à suivre combien de temps notre eau a été exposée aux rayons UV du soleil.

Regarde ton minuteur. Que vois-tu sur les DEL du micro:bit ? Que penses-tu que ce nombre représente ?

~hint Dis-m'en plus !
Pour l'instant, tu devrais voir un « 0 » sur le micro:bit ! Nous allons explorer ce que ce nombre signifie à la prochaine étape.
hint~

## Étape d'utilisation 2

Dirige une lumière vive sur ta bouteille d'eau et ton minuteur SODIS. Maintiens-la là, puis éteins-la. Qu'as-tu remarqué ?

~hint Dis-m'en plus !

-   Tant que la lumière brille directement sur les DEL, le nombre sur le micro:bit augmente lentement.
-   Les DEL du micro:bit font deux choses ! Elles servent d'écran et de [capteur de lumière](https://www.youtube.com/watch?v=ii0U_FMr-Z4).
-   Si ton minuteur SODIS ne s'est pas comporté comme prévu, essaie de rapprocher ta lumière des DEL.
    hint~

## Étape d'utilisation 3

Appuie sur « A » pour réinitialiser le minuteur. Ensuite, dirige une lumière vive sur la bouteille d'eau et le minuteur SODIS pendant 10 secondes. À quelle fréquence le nombre augmente-t-il ?

~hint Dis-m'en plus !

-   Tant que la lumière reste allumée, le nombre augmente de « 1 » _chaque seconde_. Essaie de compter en même temps que le minuteur.
-   En supposant que la lampe de poche représente le soleil, le nombre sur le micro:bit indique combien de secondes l'eau a été exposée à la lumière UV !
    hint~

## Étape d'utilisation 4

Regardons le code maintenant.

Peux-tu deviner quels blocs nous permettent d'afficher le temps d'exposition sur les DEL du micro:bit ?

## Étape d'utilisation 5

D'abord, nous avons besoin d'un endroit pour stocker le temps d'exposition. Les **variables** nous permettent de conserver de l'information pour une utilisation ultérieure. Dans ce programme, nous avons créé une variable appelée `||variables:exposure_sec||` pour suivre combien de temps l'eau a été exposée aux rayons UV.

Ensuite, nous avons besoin d'un moyen d'augmenter le nombre dans la variable chaque seconde (ou 1000 millisecondes). Nous faisons cela avec le bloc `||basic:pause||`.

```block
    basic.pause(1000)
    exposure_sec += 1
```

## Étape d'utilisation 6

Bien sûr, nous voulons seulement que la variable `||variables:exposure_sec||` augmente lorsque l'eau a été exposée au soleil.

Nous utilisons une **structure conditionnelle** pour contrôler _quand_ le nombre dans `||variables:exposure_sec||` augmente. Peux-tu repérer la structure conditionnelle dans le code ?

~hint Dis-m'en plus !

-   Les conditions nous aident à ajouter des points de décision à notre code et suivent généralement une structure `||logic:if/then||`.
-   Dans ce programme, la condition dit : si le niveau de lumière ambiante est supérieur à 200, alors mets le programme en pause pendant 1000 ms (1 seconde) et augmente le nombre dans la variable `||variables:exposure_sec||` de « 1 ».
-   Cela nous permet de créer un minuteur de base qui suit l'exposition au soleil en secondes.
    hint~

```block
// @highlight
 if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
 }
```

## Étape d'utilisation 7

Puisque tout ce code se trouve dans une boucle `||basic:forever||`, nous allons vérifier de façon répétée si la condition est vraie. Tant que c'est le cas, le nombre continuera d'augmenter.

```blocks
// @highlight
basic.forever(function () {
    if (input.lightLevel() > 200) {
        basic.pause(1000)
        exposure_sec += 1
    }
})
```

## Étape d'utilisation 8

Finalement, nous devons afficher le nombre contenu dans la variable `||variables:exposure_sec||` sur les DEL du micro:bit. Nous utilisons le bloc `||basic:show number||` pour y arriver.

```block
basic.showNumber(exposure_sec)
```

## Félicitations ! @showdialog

Tu as terminé l'activité ! Comme prochaine étape, tu pourrais toujours tester comment le minuteur SODIS fonctionne dans le monde réel en le plaçant dans un endroit ensoleillé - comme près d'une fenêtre !

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/sodis-windowbottles.webp" style="display: block; width: 70%; margin:auto;">

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose sur laquelle tu aimerais en apprendre davantage ?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

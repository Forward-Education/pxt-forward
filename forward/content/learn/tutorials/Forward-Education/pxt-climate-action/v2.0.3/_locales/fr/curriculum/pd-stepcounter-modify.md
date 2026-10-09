# Tutoriel du compteur de pas

## Activité : Construisons un compteur de pas! @showdialog

Dans ce tutoriel, tu vas apprendre à programmer un compteur de pas en utilisant le micro:bit.

<img src="https://i0.wp.com/learn.forwardedu.com/wp-content/uploads/2024/09/project-step-counter.webp?resize=1170%2C780&ssl=1" alt="Compteur de pas micro:bit attaché à la cheville d'un enfant" style="display: block; width: 50%; margin:auto;">

Ce projet te présentera le format des tutoriels de la trousse Action Climatique, en détaillant comment des étapes structurées et des fonctionnalités comme « Dis-m'en plus! » et les indices de l'ampoule peuvent guider tes élèves à travers le processus de programmation.

Clique sur « Ok » pour commencer!

## Astuces @showdialog

Pendant que tu passes à travers les prochaines étapes :

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt pour plus d'informations, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 70%; margin:auto;">

## Étape 0

Les instructions pour construire ton compteur de pas apparaîtront en haut de l'écran. Si les instructions sont trop longues, tu devras peut-être faire glisser le bas de cette fenêtre pour l'agrandir!

## Étape 1

Pense à comment fonctionne un compteur de pas. Que doit-il pouvoir faire?

~hint Dis-m'en plus!
Un compteur de pas devrait pouvoir :

-   augmenter le compte de pas chaque fois que tu marches vers l'avant
-   afficher le compte de pas actuel sur l'écran à DEL
    hint~

## Étape 2

La première chose que nous devons faire est de créer une `||variables:Variable||` pour suivre nos pas.

~hint Dis-m'en plus!

-   Une **variable** est comme un contenant de stockage. Elle peut stocker de l'information que le programme peut référencer plus tard. Dans ce cas, nous allons utiliser la variable pour suivre le nombre de pas.
    hint~

## Étape 3

Ouvre la catégorie `||variables:Variables||` et sélectionne « Créer une variable ». Nomme-la « steps ».

~hint Dis-m'en plus!

-   Si tu cliques sur n'importe quel texte coloré ou souligné dans ce tutoriel, cela ouvrira automatiquement la catégorie de blocs appropriée. Essaie-le maintenant!
    hint~

## Étape 4

Fais glisser le bloc `||variables:change steps by 1||` dans la zone de code. Selon toi, pourquoi est-il hachuré ou grisé?

~hint Dis-m'en plus!

-   Le code est incomplet! Nous avons dit au micro:bit d'augmenter notre compte de pas, mais nous ne lui avons pas dit _quand_ le faire!
-   Rappelle-toi : les blocs hachurés indiquent une erreur dans la logique de ton programme.
    hint~

```block
steps += 1
```

## Étape 5

_Quand_ devrions-nous augmenter notre compte de pas?

~hint Dis-m'en plus!

-   Chaque fois que nous faisons un pas vers l'avant.
    hint~

## Étape 6

Comment penses-tu que le micro:bit peut détecter quand nous avons fait un pas?

~hint Dis-m'en plus!

-   Le micro:bit possède un [accéléromètre](https://microbit.org/get-started/features/sensors/#accelerometer) et peut détecter quand il est déplacé.
-   Puisque l'appareil sera attaché à notre cheville ou à notre poignet, il va _vibrer_ légèrement chaque fois que nous faisons un pas vers l'avant.
    hint~

## Étape 7

Peux-tu trouver un bloc d'**événement** dans la catégorie `||input:Input||` que nous pouvons utiliser pour déclencher l'augmentation de notre compte de pas?

~hint Dis-m'en plus!

-   Les **événements** sont des déclencheurs qui font exécuter à ton programme des morceaux de code spécifiques quand quelque chose d'autre se produit. Dans ce cas, l'événement `||input:on shake||` est déclenché quand le micro:bit détecte un mouvement de secousse.
    hint~

```blocks
// @highlight
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
```

## Étape 8

Nous pouvons tester ton code sur le simulateur en cliquant sur le bouton de secousse.

Que prédis-tu qu'il se passera? Que se passe-t-il _réellement_?

~hint Dis-m'en plus!

-   Tu t'attendais peut-être à voir le compte de pas sur les DEL, mais nous n'avons pas encore écrit de code qui dit au micro:bit d'afficher le nombre! Par conséquent, nous ne verrons rien se passer!
    hint~

## Étape 9

Bien que le compte _augmente_ en arrière-plan, ajoutons du code pour qu'il soit visible pour l'utilisateur!

Fais glisser un bloc `||basic:show number||` dans l'espace de travail.

## Étape 10

Dans la catégorie `||variables:Variables||`, il y a un bloc `||variables:steps||`. Fais-le glisser par-dessus le « 0 » dans `||basic:show number||`.

~hint Dis-m'en plus!

-   Rappelle-toi : tu peux consulter l'ampoule pour voir à quoi cela devrait ressembler!
    hint~

```block
basic.showNumber(steps)
```

## Étape 11

Ce nouveau bloc est encore hachuré. _Quand_ voulons-nous que le micro:bit affiche le nombre à l'intérieur de la variable `||variables:steps||`?

~hint Dis-m'en plus!

-   Nous voulons que le micro:bit affiche le compte de pas actuel _en tout temps_.
-   Nous pouvons envelopper une boucle `||basic:forever||` autour de ce bloc pour y arriver.
    hint~

```blocks
basic.forever(function () {
    basic.showNumber(steps)
})
```

## Étape 12

Nous avons encore un bloc `||basic:on start||` vide. Quel devrait être le compte de pas au début de notre programme?

~hint Dis-m'en plus!

-   Le compte de pas devrait toujours commencer à « 0 ».
-   Ajoute un bloc `||variables:set steps to 0||` dans le bloc `||basic:on start||`.
    hint~

```blocks
let steps = 0
```

## Étape 12

Regarde le simulateur du micro:bit. Vois-tu le nombre augmenter de 1 chaque fois que tu appuies sur le bouton « secousse »? Excellent travail!

## Étape 13

Si tu as un micro:bit physique sous la main, téléchargeons notre code et testons-le!

Connecte le micro:bit à ton ordinateur en utilisant le port USB, puis clique sur le bouton `|Télécharger|`. Suis les instructions pour transférer ton code sur le micro:bit. Que se passe-t-il quand tu secoues l'appareil?

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis au défi.

Comment as-tu surmonté ce défi?

Comment cela t'a-t-il fait sentir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

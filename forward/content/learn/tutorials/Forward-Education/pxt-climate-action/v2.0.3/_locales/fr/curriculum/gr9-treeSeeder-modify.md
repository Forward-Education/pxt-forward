# Replanter nos forêts avec des semeurs d'arbres automatisés - Tutoriel de modification

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 < 4; index2++) {
        fwdMotors.drive(50, -50, 1000)
        basic.pause(1000)
        fwdMotors.drive(0, 0, 0)
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
    fwdMotors.drive(0, 0, 0)
})
// @collapsed
input.onButtonPressed(Button.B, function () {
    if (index < 3) {
        index += 1
    } else {
        index = 0
    }
})
let index = 0
index = 0
fwdMotors.setAngle(fwdBase.middleServo, 45)
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
// @collapsed
basic.forever(function () {
    basic.showNumber(index)
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un semeur d'arbres automatisé. Nous allons faire cela en quatre parties :

1. **Construire** le semeur d'arbres automatisé
2. **Ajouter du code** pour le faire bouger
3. **Modifier** le code du semeur d'arbres pour comprendre son fonctionnement
4. Compléter un **défi** pour améliorer sa fonction

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-thumbnail-render.webp" alt="Rendu complet du semeur d'arbres" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs01.webp)

## Étape de construction 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs02.webp)

## Étape de construction 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs03.webp)

## Étape de construction 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs04.webp)

## Étape de construction 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs05.webp)

## Étape de construction 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs06.webp)

## Étape de construction 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs07.webp)

## Étape de construction 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs08.webp)

## Étape de construction 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs09.webp)

## Étape de construction 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs10.webp)

## Étape de construction 11 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs11.webp)

## Étape de construction 12 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs12.webp)

## Étape de construction 13 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs13.webp)

## Étape de construction 14 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs14.webp)

## Étape de construction 15 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs15.webp)

## Étape de construction 16 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs16.webp)

## Étape de construction 17 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs17.webp)

## Étape de construction 18 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr9-treeseeder-sbs18.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de codage 1 @showdialog

IMPORTANT! Assure-toi que ta carte d'extension de la trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Brancher le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de codage 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de jumelage" style="display: block; width: 60%; margin:auto;">

## Étape de codage 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code vers ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêts à **modifier** notre semeur d'arbres!

Astuces

1. Suis les instructions en haut de l'écran.
2. Lorsque tu es prêt·e pour plus d'information, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!
4. Après chaque changement, tu devras `|Télécharger|` le code mis à jour vers ton micro:bit.

## Étape de modification 1

Repense à la leçon ou [regarde cette vidéo](https://youtu.be/KpPWcFukGIM?feature=shared).

Que devrait pouvoir faire un semeur d'arbres automatisé?

~hint Dis-m'en plus!
Le semeur d'arbres automatisé devrait pouvoir :

1. Se déplacer continuellement
2. Planter des graines de façon uniforme dans un champ

Différents produits peuvent avoir plus de fonctionnalités, mais ces deux-là sont les exigences minimales.
hint~

## Étape de modification 2

Testons le semeur d'arbres. Débranche-le de l'ordinateur. Ensuite, place-le sur le sol dans un espace ouvert.

Appuie sur « A ». Que remarques-tu? Fais-le quelques fois, si nécessaire, puis note tes observations.

~hint Dis-m'en plus!
Tu as probablement remarqué qu'il y avait effectivement un modèle. Le semeur d'arbres a complété les étapes suivantes 4 fois de suite :

1. Avancer
2. S'arrêter
3. Déplacer le crayon/bras vers le sol
4. S'arrêter
5. Éloigner le crayon/bras du sol
6. S'arrêter
   hint~

## Étape de modification 3

Le servomoteur positionnel contrôle le crayon/bras de notre projet. Chaque fois qu'il oscille d'avant en arrière, cela simule la plantation d'une graine.

Peux-tu identifier les blocs de code ci-dessous qui sont responsables de ce mouvement d'oscillation?

~hint Dis-m'en plus!

-   Les blocs `||fwdMotors:set middleServo to||` contrôlent la position du bras.
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 < 4; index2++) {
        fwdMotors.drive(50, -50, 1000)
        basic.pause(1000)
        fwdMotors.drive(0, 0, 0)
        // @highlight
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        // @highlight
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
    fwdMotors.drive(0, 0, 0)
})
let index = 0
index = 0
// @highlight
fwdMotors.setAngle(fwdBase.middleServo, 45)
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
```

## Étape de modification 4

Essaie de changer la valeur dans le premier bloc `||fwdMotors:set middleServo to||` de « 0 degré » à un nombre entre « 60 degrés » et « 180 degrés ». Selon toi, qu'est-ce qui va changer?

Télécharge ton code et teste-le. Que s'est-il passé?

~hint Dis-m'en plus!

-   Lorsque le servomoteur positionnel est à « 0 degré », le crayon ou stylo pointe vers le bas. Lorsque le nombre est supérieur à « 45 degrés », le crayon se déplace vers le haut, loin du sol.
-   Dans ce cas, aucun arbre n'a été planté. Nous avons besoin que le bras touche le sol pour simuler la plantation d'un arbre!
    hint~

```block
    for (let index2 = 0; index2 < 4; index2++) {
        fwdMotors.drive(50, -50, 1000)
        basic.pause(1000)
        fwdMotors.drive(0, 0, 0)
        // @highlight
        fwdMotors.setAngle(fwdBase.middleServo, 100)
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
```

## Étape de modification 5

Remets ta valeur à « 0 degré ».

```block
    for (let index2 = 0; index2 < 4; index2++) {
        fwdMotors.drive(50, -50, 1000)
        basic.pause(1000)
        fwdMotors.drive(0, 0, 0)
        // @highlight
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
```

## Étape de modification 6

Selon toi, que se passera-t-il si tu modifies le nombre dans la boucle `||loops:repeat 4 times||`? Essaie-le maintenant!

~hint Dis-m'en plus!

-   Le semeur d'arbres automatisé plantera maintenant un nombre différent de graines.
-   Par exemple : si tu changes le nombre à « 5 », le semeur plantera 5 arbres!
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    for (let index2 = 0; index2 < 5; index2++) {
        fwdMotors.drive(50, -50, 1000)
        basic.pause(1000)
        fwdMotors.drive(0, 0, 0)
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
    fwdMotors.drive(0, 0, 0)
})
```

## Étape de modification 7

Selon toi, que se passera-t-il si tu modifies le nombre dans le premier bloc `||basic:pause||`? Essaie quelques nombres différents entre « 200 ms » et « 3000 ms ».

Qu'as-tu observé?

~hint Dis-m'en plus!

-   Plus le nombre est petit, plus les arbres seront plantés près les uns des autres. Plus le nombre est grand, plus les arbres sont plantés loin les uns des autres.
-   Remets le nombre à « 1000 ms » une fois tes tests terminés.
-   Tu ne remarques pas de changement? N'oublie pas de retélécharger le code à chaque fois!
    hint~

```block
    for (let index2 = 0; index2 < 5; index2++) {
        fwdMotors.drive(50, -50, 1000)
        // @highlight
        basic.pause(200)
        fwdMotors.drive(0, 0, 0)
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
```

## Défi @showdialog

Imagine que tu es propriétaire de l'entreprise qui construit ces semeurs d'arbres automatisés.

Tu as une cliente qui possède plusieurs champs différents qu'elle veut remplir d'arbres. Elle aimerait que les arbres du champ A soient plantés très densément; cependant, elle exige beaucoup d'espace entre les arbres cultivés dans le champ B.

Ce serait beaucoup de travail de modifier le code pour chaque client ou champ. Comment pourrions-nous écrire le code dès le départ pour qu'il s'adapte à ce type de demandes?

## Étape du défi 1

Nous avons vu que changer la valeur dans le premier bloc `||basic:pause||` nous permettait de planter des graines plus près ou plus loin les unes des autres.

Et si, au lieu de changer le code manuellement, nous incluions plusieurs niveaux préprogrammés parmi lesquels l'utilisateur·rice pourrait choisir selon ses besoins?

Supposons que ces niveaux soient : « Densité extrêmement élevée », « Densité élevée », « Densité moyenne » et « Densité faible » de plantation de graines.

## Étape du défi 2

Nous allons stocker les valeurs pour chaque niveau dans quelque chose appelé un **tableau**. Un tableau est une liste d'éléments. Dans ce cas, nous allons créer une liste de nombres appelée « seedDensity ».

## Étape du défi 3

Ouvre la catégorie `||array:Array||`. Crée un nouveau tableau en glissant un bloc `||variables:set list to||` `||array:array of||` dans le bloc `||basic:on start||`.

Clique sur la flèche vers le bas à côté de `||variables:list||`. Sélectionne « Renommer la variable... » et tape « seedDensity ».

```blocks
let index = 0
index = 0
let seedDensity = [
0,
1
]
fwdMotors.setAngle(fwdBase.middleServo, 45)
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
```

## Étape du défi 4

Quels 4 nombres devrions-nous ajouter à ce tableau? Suppose que le premier nombre représentera le niveau « Densité faible » et que le dernier sera le niveau « Densité extrêmement élevée ».

~hint Dis-m'en plus!
Rappelle-toi :

-   Pour planter des arbres éloignés les uns des autres (faible densité), le nombre dans le bloc `||basic:pause||` doit être _grand_.
-   Pour planter des arbres rapprochés (haute densité), le nombre doit être _petit_.
-   Essaie quelque chose comme « 2000 », « 1000 », « 500 », « 200 ». Tu peux appuyer sur le bouton + du bloc pour ajouter plus d'espaces.
    hint~

```blocks
let index = 0
index = 0
let seedDensity = [
2000,
1000,
500,
200
]
fwdMotors.setAngle(fwdBase.middleServo, 45)
fwdMotors.setupDriving(fwdBase.leftServo, fwdBase.rightServo)
```

## Étape du défi 5

Tu peux identifier un élément précis dans un tableau en te référant à son **index**.

Le premier nombre dans un tableau a un index de « 0 », le deuxième nombre a un index de « 1 », et ainsi de suite.

~hint Dis-m'en plus!
Ce qui suit est vrai pour la liste `||variables:seedDensity||` :

-   Index 0 = 2000 = Densité faible
-   Index 1 = 1000 = Densité moyenne
-   Index 2 = 500 = Densité élevée
-   Index 3 = 200 = Densité extrêmement élevée
    hint~

## Étape du défi 6

Maintenant, nous devons permettre à l'utilisateur·rice de basculer entre ces options. Nous avons commencé ce processus pour toi.

Ouvre l'événement `||input:on button B pressed||` et la boucle `||basic:forever||` maintenant en cliquant sur la flèche vers le bas à côté de chacun. Lis ce nouveau code. Que prédis-tu qu'il fera?

Teste-le en appuyant sur « B » quelques fois. Ta prédiction était-elle correcte?

~hint Dis-m'en plus!

-   Il y a une **variable** appelée `||variables:index||` qui est réglée à « 0 » au début du programme.
-   Chaque fois que tu appuies sur « B », le nombre dans cette variable augmente de « 1 » jusqu'à ce qu'il atteigne « 3 ». À ce moment, la variable reviendra à « 0 » la prochaine fois que « B » sera pressé.
-   La valeur actuelle de la variable `||variables:index||` est affichée sur les DEL du micro:bit afin que l'utilisateur·rice sache à quel niveau il/elle se trouve.
    hint~

```blocks
let index = 0
index = 0

input.onButtonPressed(Button.B, function () {
    if (index < 3) {
        index += 1
    } else {
        index = 0
    }
})

basic.forever(function () {
    basic.showNumber(index)
})
```

## Étape du défi 7

Télécharge ton nouveau code.

Appuie sur « B » quelques fois pour régler le semeur d'arbres au niveau 3, puis relance ton programme de plantation en appuyant sur « A ».

Appuie sur « B » pour régler le niveau à 1. Relance ton programme de plantation en appuyant sur « A ».

Que s'est-il passé? Est-ce ce à quoi tu t'attendais?

~hint Dis-m'en plus!

-   Tu t'attendais peut-être à ce que changer le niveau ait un impact sur la fréquence de plantation des graines. En réalité, rien n'a changé... pour l'instant!
-   C'est parce que nous devons intégrer la variable `||variables:index||` dans notre programme de plantation d'arbres.
    hint~

## Étape du défi 8

Glisse un bloc `||variables:list||` `||array:get value at||` de la catégorie `||array:Array||` dans le premier bloc `||basic:pause||`.

Assure-toi de changer `||variables:list||` pour `||variables:seedDensity||`.

```block
    for (let index2 = 0; index2 < 4; index2++) {
        let seedDensity: number[] = []
        fwdMotors.drive(50, -50, 1000)
        // @highlight
        basic.pause(seedDensity[0])
        fwdMotors.drive(0, 0, 0)
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
```

## Étape du défi 9

À ce stade, nous récupérons constamment la première valeur du tableau, car l'index est réglé à « 0 » dans le nouveau bloc `||variables:seedDensity||` `||array:get value at||`.

Va dans la catégorie `||variables:Variables||` et remplace la valeur « 0 » par `||variables:index||`.

~hint Dis-m'en plus!

-   Maintenant, le micro:bit récupérera une valeur différente de la liste selon la variable `||variables:index||` ou le niveau sélectionné par l'utilisateur·rice.
    hint~

```block
for (let index2 = 0; index2 < 4; index2++) {
        fwdMotors.drive(50, -50, 1000)
        // @highlight
        basic.pause(seedDensity[index])
        fwdMotors.drive(0, 0, 0)
        fwdMotors.setAngle(fwdBase.middleServo, 0)
        basic.pause(250)
        fwdMotors.setAngle(fwdBase.middleServo, 45)
        basic.pause(250)
    }
```

## Étape du défi 10

Télécharge ton nouveau code. Ensuite, teste quelques niveaux de densité différents :

1. Règle le niveau de densité d'arbres désiré en appuyant sur « B ».
2. Appuie sur « A » pour lancer le programme de plantation.
3. Répète avec un niveau de densité différent.

Le programme fonctionne-t-il comme tu t'y attendais?

## Explore

Y a-t-il des parties du code que tu ne comprends pas encore? C'est le moment d'explorer!

~hint Dis-m'en plus!
Suis ces étapes :

1. Trouve une partie du code sur laquelle tu aimerais en apprendre plus
2. Fais un seul changement à ce bloc (ou retire-le complètement)
3. Télécharge le nouveau code
4. Teste-le et observe ce qui a changé
5. Répète
   hint~

## Félicitations ! @showdialog

Tu as complété l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis·e au défi.

Comment as-tu surmonté ce défi? Comment cela t'a-t-il fait sentir?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

# Suivre les pollinisateurs avec un compteur d'abeilles

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Bienvenue au projet du compteur d'abeilles! Nous allons faire cela en 4 étapes!

1. **Construis** ton projet
2. **Code** ton projet
3. **Modifie** ton projet
4. Complète un petit défi de programmation
   ![projectrender](https://github.com/Jessica-forwardedu/pxt-fwd-edu/assets/136100569/d25249a4-4f21-41ff-8e30-f4d36f6e7288)

## Étape de construction 1 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bee-sbs1.png)

## Étape de construction 2 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs2.png)

## Étape de construction 3 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs3.png)

## Étape de construction 4 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs4.png)

## Étape de construction 5 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs5.png)

## Étape de construction 6 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs6.png)

## Étape de construction 7 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs7.png)

## Étape de construction 8 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs8.png)

## Étape de construction 9 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs9.png)

## Étape de construction 10 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs10.png)

## Étape de construction 11 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs11.png)

## Étape de construction 12 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs12.png)

## Étape de construction 13 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs13.png)

## Étape de construction 14 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs14.png)

## Étape de construction 15 @showdialog

![beesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Gr4-bees-sbs15.png)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour le faire prendre vie avec du code!

Le code sera les instructions qui disent à notre micro:bit quoi faire.

```template
let bugVisits = 0
bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})
```

## Étape de code 1 @showdialog

Assure-toi que la plaque de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.
<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" width="400">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour coupler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Étape de code 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code dans ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes prêts à modifier notre compteur d'abeilles!

Suis les instructions en haut de l'écran. Quand tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
Après chaque changement, tu devras `|télécharger|` ton code mis à jour dans ton projet.

## Étape de modification 1

Dans ce projet, nous comptons le nombre d'abeilles qui visitent notre fleur - comme un scientifique!

Nous allons utiliser quelque chose appelé une `||Variables:Variable||` pour compter ce nombre. Dans ce programme, notre variable s'appelle « bugVisits ».

~hint Dis-m'en plus!

-   En programmation, nous pouvons stocker de l'information à l'aide de **variables**.
-   Pense à une variable comme ta tirelire. L'argent peut y entrer et en sortir. Chaque fois que tu veux savoir combien d'argent tu as, tu regardes à l'intérieur.
    hint~

## Étape de modification 2

Regardons les variables en action.

Quel nombre vois-tu sur le micro:bit en ce moment? Que penses-tu que ce nombre signifie?

~hint Dis-m'en plus!

-   Le nombre que nous voyons sur le micro:bit est « 0 ».
-   C'est le nombre d'abeilles qui ont visité notre fleur jusqu'à maintenant.
-   Nous avons mis ce nombre à « 0 » en plaçant le bloc `||variables:set bugVisits to 0||`
    à l'intérieur de l'événement `||basic:on start||`.
    hint~

```blocks
let bugVisits = 0
bugVisits = 0
```

## Étape de modification 3

Essaie de changer le nombre à l'intérieur du bloc `||variables:set bugVisits to 0||` pour un nombre entre 1 et 5. Que se passe-t-il?

~hint Dis-m'en plus!

-   Le nombre que nous voyons sur le micro:bit change aussi.
-   Tu ne vois pas le changement? N'oublie pas de télécharger le nouveau code.
    hint~

## Étape de modification 4

Appuyons sur le capteur tactile quelques fois.

Que vois-tu?

~hint Dis-m'en plus!

-   Notre toucher, c'est comme une abeille qui se pose sur le capteur.
-   Chaque fois que tu appuies sur le capteur tactile, le nombre affiché sur le micro:bit augmente de « 1 ».
-   Cela signifie que le nombre dans notre variable change de « 1 ».
-   Nous utilisons une **instruction conditionnelle** dans notre code pour que cela fonctionne.
    hint~

## Étape de modification 5

Les **instructions conditionnelles** sont des bouts de code qui aident notre micro:bit à prendre des décisions. Nous utilisons des instructions conditionnelles dans notre propre vie. Par exemple, « Si la cloche sonne à la récréation, alors je me mets en ligne pour rentrer! »

Peux-tu trouver l'instruction conditionnelle dans notre code? Vérifie l'ampoule pour la réponse!

```block
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
```

## Étape de modification 6

Que se passe-t-il quand tu augmentes le nombre dans `||Variables:change bugVisits by 1||`?

Essaie de le changer à « 3 » maintenant, puis `|télécharge|` le nouveau code. Quand tu es prêt, appuie sur le capteur tactile.

~hint Dis-m'en plus!

-   Maintenant, chaque fois que tu appuies sur le capteur tactile, le nombre sur le micro:bit augmente de « 3 ».
-   Ce bloc change le nombre dans notre variable.
-   Tu te souviens de la tirelire? C'est comme lorsqu'on y ajoute de l'argent!
    hint~

## Étape de modification 7

Maintenant que tu as compris comment fonctionnent les variables, réajustons le nombre dans `||Variables:change bugVisits by 3||` à « 1 » et `||Variables:set bugVisits to 3||` à « 0 » de nouveau.

~hint Dis-m'en plus!

-   Nous voulons compter chaque visite d'abeille comme une seule.
-   Garder le nombre à « 3 » fausserait notre compte! C'est comme compter chaque abeille comme si elle valait 3 abeilles.
    hint~

```blocks
let bugVisits = 0
bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        basic.showNumber(bugVisits)
    }
})
```

## Activité 4 : Défi @showdialog

Essayons d'utiliser les lumières DEL! Peux-tu faire allumer les lumières DEL chaque fois qu'une abeille se pose?

## Étape du défi 1

D'abord, nous devons contrôler les lumières DEL. Va dans `||fwdSensors:Sensors||` et glisse-dépose le bloc `||fwdSensors:set all ledRing LEDs to||` dans l'espace de travail.

~hint Dis-m'en plus!

-   Tout comme un peintre choisit le bon pinceau pour un coup de pinceau, nous avons besoin du bon bloc pour contrôler nos lumières DEL.
-   Ce bloc dit à toutes les DEL quoi faire en même temps.
    hint~

## Étape du défi 2

Maintenant, pense à quand tu veux que ces lumières s'allument. Après qu'une abeille se pose, non? Où devrions-nous placer ce bloc pour que cela arrive?

Utilise l'icône de l'ampoule pour vérifier ton travail!

~hint Dis-m'en plus!

-   Souviens-toi, l'ordre dans lequel nous plaçons nos blocs est très important, tout comme les pas dans une chorégraphie!
-   Ce bloc devrait aller juste après que nous comptons une visite d'abeille, sous le bloc `||variables:change bugVisits by 1||`.
    hint~

```blocks
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.showNumber(bugVisits)
    }
})
```

## Étape du défi 3

Peux-tu faire allumer la lumière en vert? Utilise l'icône de l'ampoule pour vérifier ton travail!

~hint Dis-m'en plus!

-   N'oublie pas de tester ton code modifié en le téléchargeant!
    hint~

```blocks
basic.forever(function () {
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        basic.showNumber(bugVisits)
    }
})
```

## Étape du défi 4

Nous avons le vert pour dire « allez-y » - quand les abeilles visitent. Que dirais-tu du rouge pour quand notre jardin est calme, sans abeilles autour? Prenons un autre bloc `||fwdSensors:set all ledRing LEDs to||` de `||fwdSensors:Sensors||`. Pense au meilleur endroit pour placer ce bloc.

Vérifie ton travail avec l'ampoule!

~hint Dis-m'en plus!

-   Nous voulons que les lumières soient d'une couleur différente AVANT qu'une bestiole ne visite. Ce bloc devrait être placé à l'intérieur du bloc `||basic:forever||`, au-dessus du bloc `||logic:if then||`.
-   N'oublie pas de télécharger ton code modifié sur le micro:bit.
    hint~

```blocks
let bugVisits = 0
bugVisits = 0
basic.showNumber(bugVisits)
basic.forever(function () {
    fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        basic.showNumber(bugVisits)
    }
})
```

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis au défi.

Comment as-tu surmonté ce défi?

Comment cela t'a-t-il fait sentir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

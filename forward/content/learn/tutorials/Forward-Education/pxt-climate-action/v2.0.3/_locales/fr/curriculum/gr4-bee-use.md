# Suivre les pollinisateurs avec un compteur d'abeilles

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Construisons un compteur d'abeilles! Nous allons faire cela en trois parties :

1. **Construis** ton compteur d'abeilles.
2. **Ajoute du code** pour le faire prendre vie.
3. **Utilise** le compteur d'abeilles pour apprendre comment il fonctionne.

![projectrender](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr4-bees-projectrender.webp)

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

## Étape de code 1 @showdialog

Assure-toi que la plaque de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.
<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" width="400">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour coupler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Étape de code 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code dans ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes prêts à utiliser notre compteur d'abeilles. Suis les instructions en haut de l'écran. Quand tu es prêt pour plus d'information, clique sur _« Dis-m'en plus! »_

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

## Étape d'utilisation 1

Regarde le projet de compteur d'abeilles que tu viens de construire et réfléchis à ces questions.

Quelles sont toutes ses parties?

~hint Dis-m'en plus!

-   Ce projet a des blocs de construction qui forment la structure.
-   Il a aussi un capteur tactile, un micro:bit, des DEL, une plaque de connexion et des connecteurs.
    hint~

## Étape d'utilisation 2

En regardant ton projet terminé, que penses-tu qu'il devrait faire?

~hint Dis-m'en plus!

-   Ton compteur d'abeilles devrait garder une trace du nombre de fois qu'une abeille visite une fleur et nous dire le total!
-   En comptant, nous pouvons savoir si les abeilles aiment notre fleur!
-   Si peu d'abeilles visitent, que pourrions-nous faire pour rendre notre fleur plus populaire?
    hint~

## Étape d'utilisation 3

Comment penses-tu que chaque partie travaille ensemble pour que tout cela arrive?

~hint Dis-m'en plus!

-   Le micro:bit agit comme le cerveau de ton projet. Il prend des décisions et dit aux autres parties quoi faire.
-   Les capteurs sont comme les organes. Ils détectent ce qui se passe et envoient cette information au micro:bit.
-   Les blocs de construction sont les os qui maintiennent tout en place.
    hint~

## Étape d'utilisation 4

Essaie de lire les blocs de code ci-dessous. Que penses-tu qu'il arrivera quand tu toucheras le capteur? Essaie de le toucher plusieurs fois de suite.

~hint Dis-m'en plus!

-   Chaque fois que tu appuies sur le capteur tactile, le nombre sur le micro:bit augmente de 1.
-   Nous avons fait cela avec une **instruction conditionnelle** dans notre code.
    hint~

## Étape d'utilisation 5

Nous utilisons des **instructions conditionnelles** pour nous aider à prendre des décisions tout le temps dans la vraie vie. Par exemple, « S'il pleut, alors j'ouvre mon parapluie. »

Peux-tu identifier l'instruction conditionnelle dans le code ci-dessous?

~hint Dis-m'en plus!

-   Vérifie l'ampoule pour voir si tu avais raison!
    hint~

```block
    if (fwdButtons.touch1.isPressed()) {
        bugVisits += 1
    }
```

## Étape d'utilisation 6

Clique sur le bouton `|Télécharger|` pour retélécharger le code dans ton projet.

Que se passe-t-il avec le nombre sur les DEL?

~hint Dis-m'en plus!

-   Le nombre sur le micro:bit revient à « 0 » chaque fois que nous téléchargeons le code.
-   C'est ainsi que nous réinitialisons notre compteur d'abeilles.
    hint~

## Étape d'utilisation 7

Peux-tu deviner quelle partie de notre code est utilisée pour réinitialiser le compteur d'abeilles?

~hint Dis-m'en plus!

-   Le bloc `||variables:set bugVisits to 0||` réinitialise le nombre quand notre programme démarre!
    hint~

```blocks
let bugVisits = 0
bugVisits = 0
basic.showNumber(bugVisits)
```

## Étape d'utilisation 8

Testons la réinitialisation du nombre! Appuie sur le capteur tactile jusqu'à ce qu'il affiche le nombre 10, puis `|télécharge|` le code de nouveau pour réinitialiser le compte.

## Félicitations! @showdialog

Tu as terminé l'activité! Est-ce que quelque chose t'a surpris dans ce projet?

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose que tu aimerais apprendre davantage?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

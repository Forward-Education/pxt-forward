# Suivi des glaciers par satellite - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
datalogger.setColumnTitles("Light Level (%)")
fwdLights.ledRing1.setBrightness(10)
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.lightLevel()))
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un satellite de glacier! Nous allons faire cela en cinq parties :

1. **Construis** ton satellite
2. **Ajoute du code** à ton satellite pour le faire prendre vie
3. **Modifie** le code de ton satellite pour apprendre comment il fonctionne
4. Complète quelques petits **défis** de programmation
5. **Mène une expérience** pour mieux comprendre l'impact des changements climatiques sur l'albédo de la Terre

Avant de commencer, assure-toi d'avoir du papier blanc et du papier noir. Tu auras aussi besoin de petits rectangles de papier blanc, pliés en deux. Ceux-ci représenteront nos glaciers.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-thumbnail-render.webp" alt="Rendu complet du glacier" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs1.webp)

## Étape de construction 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs2.webp)

## Étape de construction 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs3.webp)

## Étape de construction 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs4.webp)

## Étape de construction 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs5.webp)

## Étape de construction 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs6.webp)

## Étape de construction 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs7.webp)

## Étape de construction 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs8.webp)

## Étape de construction 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs9.webp)

## Étape de construction 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs10.webp)

## Étape de construction 11 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-sbs11.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour le faire prendre vie avec du code!

Le code sera les instructions qui disent à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code dans ton projet.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêts à **modifier** notre satellite!

Conseils

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!
4. Après chaque changement, tu devras `|télécharger|` le code mis à jour sur ton micro:bit.

## Étape de modification 1

Regardons notre satellite de glacier.

Quelles sont les différentes parties de ce projet? Comment ces parties travailleront-elles ensemble pour suivre la quantité de lumière réfléchie par différentes surfaces?

~hint Dis-m'en plus!

-   Dans ce projet, l'anneau DEL agit comme le soleil et projette de la lumière vers la plaque de base qui agit comme la surface de la Terre.
-   Nous allons placer du papier de différentes couleurs sur la plaque de base pour représenter différentes surfaces, comme un glacier, l'océan, le sol, etc.
-   Le capteur solaire agira comme notre satellite et mesurera la quantité de lumière réfléchie par la Terre.
-   Ces données nous donneront de l'information sur la fonte des glaciers.
    hint~

## Étape de modification 2

Nous allons recueillir des données sur les niveaux de lumière en utilisant quelque chose appelé une **instruction conditionnelle**. Peux-tu trouver l'instruction conditionnelle dans notre code?

Vérifie l'ampoule pour la réponse.

~hint Dis-m'en plus!

-   Les instructions conditionnelles disent à notre micro:bit quoi faire quand une certaine condition est remplie.
-   Dans ce cas, nous utilisons une instruction conditionnelle pour dire à notre micro:bit de recueillir des données du capteur solaire quand le bouton B est appuyé. C'est ce qu'on appelle une **entrée** de l'utilisateur.
    hint~

```block
    if (input.buttonIsPressed(Button.B)) {
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.lightLevel()))
    }
```

## Étape de modification 3

Changeons _quand_ notre micro:bit recueille des données en changeant `||input:on button B pressed||` pour `||input:on button A pressed||`.

~hint Dis-m'en plus!

-   N'oublie pas de télécharger ton nouveau code!
    hint~

```block
    if (input.buttonIsPressed(Button.A)) {
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.lightLevel()))
    }
```

## Étape de modification 4

Essayons de recueillir des données.

Débranche le micro:bit de l'ordinateur, puis appuie et maintiens « A » pendant 10 secondes. Les données recueillies seront stockées sur notre micro:bit.

## Étape de modification 5 @showdialog

Il est temps de voir les données que nous venons d'enregistrer. Pour y accéder :

1. Rebranche le micro:bit à ton ordinateur.
2. Ouvre l'Explorateur de fichiers ou Poste de travail sur ton appareil.
3. Sélectionne ton micro:bit.
4. Ouvre le fichier appelé « MY_DATA ».
5. Une nouvelle fenêtre affichera toutes tes données!
6. Clique sur « Aperçu visuel » pour voir sous forme de graphique, où l'axe Y est « Niveau de lumière » et l'axe X est « Temps (secondes) ».

**Complète ces étapes, puis reviens ici pour un défi.**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/MyDataWalkthrough.webp" style="width: 100%;">

**Besoin de plus d'aide?** Consulte cette [ressource micro:bit sur l'enregistrement de données](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

## Activité 4 : Défi @showdialog

Améliorons l'expérience utilisateur de notre satellite de glacier. Nous allons :

1. Ajouter une sortie visuelle pour indiquer à l'utilisateur quand des données sont recueillies
2. Utiliser une instruction conditionnelle pour supprimer les anciennes données

## Étape du défi 1

En tant qu'utilisateur, nous devions faire confiance que nos données avaient été enregistrées. Nous ne pouvions confirmer que cela s'était _réellement_ produit qu'une fois le fichier MY_DATA ouvert.

Ajoutons un signal visuel ou une **sortie** sur l'écran de notre micro:bit pour rassurer l'utilisateur que des données sont recueillies.

## Étape du défi 2

Glisse un bloc `||basic:show icon||` de la catégorie `||basic:Basic||` et ajoute-le à l'espace de travail.

Si nous voulons que l'icône apparaisse _pendant_ que des données sont recueillies, où devrions-nous placer ce bloc dans notre code?

~hint Dis-m'en plus!

-   Tu ajouteras le bloc `||basic:show icon||` juste avant le bloc `||datalogger:log data||` à l'intérieur de l'instruction conditionnelle.
-   N'hésite pas à changer l'icône.
-   Télécharge ton code et teste-le!
    hint~

```block
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.lightLevel()))
    }
```

## Étape du défi 3

Tu as probablement remarqué que l'icône reste visible en tout temps maintenant! C'est parce que nous n'avons pas dit au micro:bit quoi afficher quand A n'est _pas_ appuyé.

Développe ton instruction conditionnelle en cliquant sur l'icône + en dessous. Cela révèle une condition `||logic:else||`. Ajoutons un bloc `||basic:show icon||` ici aussi.

~hint Dis-m'en plus!

-   Si A est appuyé, nous afficherons un crochet et recueillerons des données, _sinon_ nous afficherons une icône « X ».
-   Télécharge ton code et teste-le!
    hint~

```block
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.lightLevel()))
    } else {
        basic.showIcon(IconNames.No)
    }
```

## Étape du défi 4

Nous avons recueilli des données aléatoires en testant notre code, mais nous ne voulons pas vraiment les sauvegarder. Pour l'instant, il n'y a aucun moyen de supprimer des données de notre journal.

Ajoutons une autre instruction conditionnelle pour effacer les données.

## Étape du défi 5

D'abord, nous devons configurer notre entrée, qui déclenchera notre code. Va à la section `||input:Input||` et glisse le bloc `||input:on button A pressed||` dans l'espace de travail. Change A pour B.

_Note : Le bloc sera grisé._

## Étape du défi 6

Ensuite, nous devons construire une autre instruction conditionnelle. Clique sur `||logic:Logic||` et glisse un bloc `||logic:if true then||` dans l'espace de travail. Tu remarqueras que ce bloc est aussi grisé.

## Étape du défi 7

Comment relions-nous ces deux blocs pour faire quelque chose se produire _quand_ nous appuyons sur « B »? Aussi, où devrions-nous placer l'instruction conditionnelle terminée dans notre code?

Penses-tu avoir bien répondu? Clique sur l'ampoule pour vérifier ta réponse.

~hint Dis-m'en plus!

-   Le bloc `||logic:if then||` a un espace vide destiné à un autre bloc.
-   Le bloc `||input:on button B pressed||` a une forme différente et doit s'insérer dans un autre bloc pour fonctionner. Nous pouvons l'insérer dans l'espace vide de notre conditionnelle.
-   Ensuite, place cette nouvelle conditionnelle à l'intérieur du bloc `||basic:forever||`. Cela fera en sorte que notre micro:bit vérifie continuellement si les boutons ont été appuyés.
    hint~

```blocks
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(datalogger.createCV("Light Level (%)", fwdSensors.solar1.lightLevel()))
    } else {
        basic.showIcon(IconNames.No)
    }
    // @highlight
    if (input.buttonIsPressed(Button.B)) {
    	
    }
})
```

## Étape du défi 8

Enfin, nous devons préciser ce qui se passe après que le bouton B est appuyé. Va à la catégorie `||datalogger:Data Logger||` et ajoute le bloc `||datalogger:delete log||` à l'intérieur du bloc `||logic:if then||`.

~hint Dis-m'en plus!

-   `||datalogger:delete log||` efface toutes les données enregistrées.
-   Télécharge ton nouveau code.
-   Teste-le : débranche ton micro:bit, enregistre des données, puis efface-les en appuyant sur B!
    hint~

```block
    if (input.buttonIsPressed(Button.B)) {
        datalogger.deleteLog()
    }
```

## Étape du défi 9 @showdialog

Voyons si cela a fonctionné! Rebranche ton micro:bit à ton ordinateur. Ensuite, ouvre ton fichier MY_DATA pour confirmer que le journal de données est vide.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/MyDataWalkthrough.webp" style="width: 100%;">

## Activité 5 : Expérience @showdialog

Nous sommes maintenant prêts à mener notre expérience sur l'albédo.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr6-glacier-thumbnail-render.webp" alt="Rendu complet du glacier" style="display: block; width: 60%; margin:auto;">

Nous allons enregistrer la quantité de lumière réfléchie vers le capteur solaire (aussi appelé le satellite) dans quelques scénarios :

1. Plaque de base seule
2. Papier blanc (glacier enneigé)
3. Papier noir avec quatre rectangles blancs (océan ou terre avec glaciers en fonte)
4. Papier noir avec trois rectangles blancs
5. Papier noir avec deux rectangles blancs
6. Papier noir avec un rectangle blanc
7. Papier noir (océan ou terre foncée)

Comment penses-tu que le niveau de lumière changera dans ces scénarios? Fais une prédiction!

## Étape de l'expérience 1

Commençons à enregistrer de vraies données. Assure-toi qu'il n'y a rien sur ta plaque de base. Ensuite, débranche ton projet de l'ordinateur. Ensuite, maintiens le bouton A du micro:bit pendant 10 secondes. Relâche.

~hint Dis-m'en plus!

-   Nous recueillons d'abord les niveaux de lumière sans aucun papier sur la plaque de base pour voir à quoi ressemble la « normale ». C'est notre témoin.
-   Maintenir le bouton A pendant 10 secondes nous permet de recueillir beaucoup de données.
    hint~

## Étape de l'expérience 2

Maintenant, prends ta feuille de papier blanc et couvre la plaque de base avec. Maintiens « A » pendant 10 secondes. Relâche.

~hint Dis-m'en plus!

-   Le papier blanc représente un glacier enneigé en bonne santé. Les glaciers sont blancs et brillants, alors ils ont un albédo élevé et réfléchissent beaucoup de lumière solaire vers l'espace.
    hint~

## Étape de l'expérience 3

Prends ta feuille de papier noir et ajoute-la à la plaque de base. Ensuite, ajoute les rectangles blancs pliés au hasard par-dessus. Maintiens « A » pendant 10 secondes pour recueillir des données sur cette condition.

~hint Dis-m'en plus!

-   Le papier noir représente l'océan et le sol parce qu'il est foncé. Il a un albédo faible et absorbera beaucoup de lumière du soleil.
-   Les rectangles blancs représentent des glaciers qui commencent à fondre. Tu peux commencer à voir l'océan et le sol en dessous.
    hint~

## Étape de l'expérience 4

Maintenant, enlève un « glacier » à la fois. Chaque fois que tu enlèves un glacier, appuie sur « A » pendant 10 secondes pour enregistrer des données sur la nouvelle condition.

~hint Dis-m'en plus!

-   Cela représente des glaciers qui fondent avec le temps.
-   Que penses-tu qu'il arrivera à la quantité de lumière réfléchie vers le capteur solaire chaque fois que tu enlèves un glacier?
    hint~

## Étape de l'expérience 5

Une fois que tous les rectangles blancs ont été enlevés, prends une dernière mesure de ton papier noir seul. Maintiens « A » pendant 10 secondes. Relâche.

~hint Dis-m'en plus!

-   Cette condition représente l'océan ou le sol sans _aucun_ glacier.
    hint~

## Étape de l'expérience 6 @showdialog

Comparons nos vraies données à nos prédictions.

1. Rebranche le micro:bit à ton ordinateur.
2. Ouvre l'Explorateur de fichiers ou Poste de travail sur ton appareil.
3. Sélectionne ton micro:bit.
4. Ouvre le fichier appelé « MY_DATA ».
5. Une nouvelle fenêtre affichera toutes tes données!
6. Clique sur « Aperçu visuel » pour voir sous forme de graphique, où l'axe Y est « Niveau de lumière » et l'axe X est « Temps (secondes) ».

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/MyDataWalkthrough.webp" style="width: 100%;">

## Réflexion @showdialog

Comment les données que tu as recueillies se comparent-elles à tes prédictions?

Peux-tu expliquer les différences?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

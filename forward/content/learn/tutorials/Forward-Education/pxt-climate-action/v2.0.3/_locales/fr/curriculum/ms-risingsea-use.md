# Forward Education Satellite de montée du niveau de la mer - Tutoriel d'utilisation

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
let WaterLevel = 0
basic.forever(function () {
    WaterLevel = fwdSensors.sonar1.distance()
    basic.pause(1000)
    led.plotBarGraph(
    WaterLevel,
    0.3,
    true
    )
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons un satellite pour surveiller le changement du niveau de la mer ! Nous allons faire ça en quatre parties :

1. **Construire** notre satellite
2. **Ajouter du code** pour donner vie à notre projet
3. **Utiliser** des capteurs pour comprendre comment ils fonctionnent
4. Appliquer ce que nous avons appris avec une petite **expérience**

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-render.webp" alt="Rendu complet du satellite de montée du niveau de la mer" style="display: block; width: 60%; margin:auto;">

## Composants électroniques requis @showdialog

![Composants électroniques requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs0A.webp)

## Blocs de construction requis @showdialog

![Blocs de construction requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs0B.webp)

## Matériel de bricolage supplémentaire @showdialog

![Matériel de bricolage supplémentaire](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs0C.webp)

## Étape de construction 1 @showdialog

![Étape de construction 1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs01.webp)

## Étape de construction 2 @showdialog

![Étape de construction 2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs02.webp)

## Étape de construction 3 @showdialog

![Étape de construction 3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs03.webp)

## Étape de construction 4 @showdialog

![Étape de construction 4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs04.webp)

## Étape de construction 5 @showdialog

![Étape de construction 5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs05.webp)

## Étape de construction 6 @showdialog

![Étape de construction 6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs06.webp)

## Étape de construction 7 @showdialog

![Étape de construction 7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs07.webp)

## Étape de construction 8 @showdialog

![Étape de construction 8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs08.webp)

## Étape de construction 9 @showdialog

![Étape de construction 9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs09.webp)

## Étape de construction 10 @showdialog

![Étape de construction 10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs10.webp)

## Étape de construction 11 @showdialog

![Étape de construction 11](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs11.webp)

## Étape de construction 12 @showdialog

![Étape de construction 12](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs12.webp)

## Étape de construction 13 @showdialog

![Étape de construction 13](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs13.webp)

## Étape de construction 14 @showdialog

![Étape de construction 14](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs14.webp)

## Étape de construction 15 @showdialog

![Étape de construction 15](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs15.webp)

## Étape de construction 16 @showdialog

![Étape de construction 16](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs16.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code !

Le code sera l'ensemble des instructions qui dit à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT ! Assure-toi que ta plaque d'interface de la trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de jumelage" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ dans ton projet.

## Activité 3 : Utilise ton projet @showdialog

Maintenant que nous avons construit notre satellite pour surveiller le changement du niveau de la mer, nous allons commencer par **utiliser** le code d'exemple pour voir comment il fonctionne.

Pendant que tu suis les prochaines étapes :

-   **Utilise** les instructions en haut de l'écran.
-   Quand tu es prêt·e pour plus d'informations, clique sur **« Dis-m'en plus ! »**
-   Si tu as besoin d'aide avec le code, clique sur **l'ampoule !**

## Étape d'utilisation 1

Repense à la leçon sur la façon dont les satellites suivent le niveau de la mer autour du monde. Notre projet reproduit l'altimétrie radar satellitaire comme celle de [Jason-3](https://www.youtube.com/watch?v=snhFHZlbYOk).

Que devrait-il être capable de faire ?

~hint Dis-m'en plus !
Pour mesurer le changement du niveau de la mer, notre modèle devrait être capable de :

**Détecter** la distance entre le dessus de l'eau et le capteur `||fwdSensors:sonar||`

**Visualiser** le changement du niveau de l'eau à l'aide du micro:bit ou de l'enregistreur de données

hint~

## Étape d'utilisation 2

Regarde de près le projet physique que tu viens de construire.

Quels composants robotiques remarques-tu ? Comment penses-tu qu'ils vont travailler ensemble pour faire fonctionner notre modèle comme prévu ?

~hint Dis-m'en plus !
Le satellite possède :

-   Un `||fwdSensors:sonar sensor||` qui détecte le bloc de construction circulaire qui flotte à la surface de l'eau.

-   Un `||fwdSensors:touch sensor||` que nous n'utilisons **pas encore** dans notre code, mais que nous utiliserons dans le tutoriel de modification.

-   Ces pièces sont toutes connectées à la **plaque d'interface** grâce à des **câbles**.

-   Enfin, la plaque d'interface est connectée au **micro:bit**, qui contient tout le code qui dira à nos capteurs quoi faire et quand le faire !

hint~

## Étape d'utilisation 3

Testons notre satellite pour voir comment il peut surveiller le changement du niveau de la mer !

Avec ton modèle sur une table, déplace doucement ta main entre la table et le capteur `||fwdSensors:sonar||` tout en regardant l'`||led:LED display||` sur le micro:bit.

Que se passe-t-il ?

Regarde l'`||led:LED display||` du micro:bit, que se passe-t-il ?

~hint Dis-m'en plus !

Quand la distance entre la table et le capteur sonar est **plus grande**, plus de `||led:LEDs||` s'allument !

hint~

## Étape d'utilisation 4

Place ta main sur la table sous le capteur `||fwdSensors:sonar||` et déplace-la doucement vers le capteur `||fwdSensors:sonar||`.

Qu'arrive-t-il aux `||led:LEDs||` du micro:bit ?

~hint Dis-m'en plus !

Quand la distance entre ta main et le capteur sonar est **plus petite**, moins de `||led:LEDs||` s'allument !

hint~

## Étape d'utilisation 5

Peux-tu identifier le **bloc de code** qui indique au code de contrôler les `||led:LEDs||` sur le micro:bit ?

~hint Dis-m'en plus !

-   Le micro:bit recueille des données du capteur `||fwdSensors:sonar||`.

-   Le code crée un `||led:graph||` entre 0,3 mètre et ta main.

hint~

```blocks
basic.forever(function () {
    WaterLevel = fwdSensors.sonar1.distance()
    basic.pause(1000)
   //@highlight
   led.plotBarGraph(
    WaterLevel,
    0.3,
    true
    )
})
```

## Activité 4 : Expérience sur le niveau de la mer @showdialog

Maintenant que nous avons **utilisé** notre code pour comprendre comment notre satellite **recueille des données** avec notre main, nous allons ajouter de l'eau !

**Important !**
Rappelle-toi que notre projet utilise des fils électriques et des capteurs qui ne doivent pas être mouillés ! Si une partie autre que les blocs de construction devient mouillée, **éteins ton projet et sèche-le complètement avant de continuer.**

## Étape d'expérience 1

À l'aide de matériel de bricolage, ou de blocs de construction de la trousse d'action climatique, construisons une **plateforme de terre** pour que notre glace puisse s'y poser !

-   La **glace terrestre**, comme les glaciers, repose gelée sur la terre et **s'écoule** vers l'océan.
-   La **glace de mer**, comme les icebergs, flotte dans l'eau et **se trouve déjà** dans l'océan quand elle fond.

~hint Dis-m'en plus
Quand nous construisons une **plateforme de terre** pour que notre glace puisse s'y poser, nous pouvons voir comment la fonte d'un **glacier** influence la montée du niveau de la mer.

1. Construis ta plateforme de terre
2. Place ta glace dessus
3. Remplis d'eau pour que la glace repose au-dessus du niveau de l'eau.
   hint~

## Étape de construction 17 @showdialog

Pour aider ton bloc de construction circulaire vert à flotter dans l'eau, enveloppe-le de pellicule plastique.

![Étape de construction 17](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs17.webp)

## Étape de construction 18 @showdialog

Place ton modèle dans un contenant étanche rempli au 1/4 d'**eau à température ambiante.**

Fais attention à ne pas laisser tomber de composants électroniques dans l'eau.

![Étape de construction 18](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs18.webp)

## Étape de construction 19 @showdialog

Remplis un côté de ton contenant de glace, sur la plateforme de terre que tu as construite.

Le grand bloc de construction rectangulaire vert devrait empêcher la glace d'atteindre l'autre côté du contenant.

![Étape de construction 19](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs19.webp)

## Étape de construction 20 @showdialog

Place ton bloc de construction circulaire vert du côté opposé du contenant.

Le bloc circulaire est comme **notre main** : il devrait se trouver dans le contenant, sous le capteur `||fwdSensors:sonar||`.

![Étape de construction 20](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-risingsea-sbs20.webp)

## Étape d'expérience 2

Laisse ton micro:bit allumé dans ton contenant de glace et d'eau. Que penses-tu qu'il va arriver aux `||led:LEDs||` à mesure que la glace fond ?

Note ta prédiction !

## Étape d'expérience 3

Il est maintenant temps de tester ta prédiction !

Pendant que la glace fond, crée un tableau pour noter combien de `||led:LEDs||` sont allumées sur le micro:bit :

1. Quand la glace n'a pas fondu
2. Quand la glace est fondue à 50 %
3. Quand la glace est complètement fondue

~hint Dis-m'en plus !
À mesure que la glace fond et que l'eau monte, moins de DEL s'allumeront.

Selon la taille de ton contenant, l'eau montera plus ou moins à mesure que ta glace fond.
hint~

## Étape d'expérience 4

De combien le niveau de l'eau a-t-il changé ?

Crée un graphique pour visualiser ton expérience sur le niveau de l'eau.

~hint Dis-m'en plus !
Tu peux choisir de créer un graphique à barres ou un graphique linéaire, avec les axes suivants :

-   X : Pourcentage de glace fondue
-   Y : Niveau de l'eau (nombre de DEL allumées)
    hint~

## Félicitations ! @showdialog

Tu as terminé l'activité !

Y a-t-il quelque chose qui t'a surpris·e à propos du projet ou de l'expérience que tu as réalisée ?

## Réflexion @showdialog

1. Comment l'utilisation de prédictions et la collecte de données t'ont-elles aidé·e à mieux comprendre ton code ?

2. Comment penses-tu qu'une quantité de glace différente changerait les résultats de ton expérience ?

3. Quelles différences as-tu trouvées dans la précision du capteur sonar ?

4. Comment la création d'une plateforme de terre dans ton contenant pour que la glace s'y pose change-t-elle à quel point ta mer est montée ?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

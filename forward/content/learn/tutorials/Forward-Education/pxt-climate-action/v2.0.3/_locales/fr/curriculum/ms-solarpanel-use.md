# Panneaux solaires - Tutoriel d'utilisation

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Construisons un prototype de panneau solaire ! On va faire ça en 3 parties :

1. **Construire** notre panneau solaire
2. **Ajouter du code** pour lui donner vie
3. **Utiliser** notre panneau solaire pour apprendre comment il fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-render.webp" alt="Rendu complet du panneau solaire" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs01.webp)

## Étape de construction 2 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs02.webp)

## Étape de construction 3 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs03.webp)

## Étape de construction 4 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs04.webp)

## Étape de construction 5 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs05.webp)

## Étape de construction 6 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs06.webp)

## Étape de construction 7 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs07.webp)

## Étape de construction 8 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs08.webp)

## Étape de construction 9 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs09.webp)

## Étape de construction 10 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs10.webp)

## Étape de construction 11 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs11.webp)

## Étape de construction 12 @showdialog

![solarpanelsbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-sbs12.webp)

## Activité 2 : Code ton projet @showdialog

On doit connecter notre projet à l'ordinateur pour lui donner vie avec du code !

Le code sera l'ensemble des instructions qui disent à notre micro:bit quoi faire.

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

```customts
namespace phantomFix {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
}
```

## Étape de codage 1 @showdialog

IMPORTANT ! Assure-toi que ta plaque d'extension de la trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 40%; margin:auto;">

## Étape de codage 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Suis les étapes pour jumeler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Gif de jumelage" style="display: block; width: 60%; margin:auto;">

## Étape de codage 3

Clique sur le bouton `|Télécharger|` pour télécharger le code vers ton projet.

## Activité 3 : Utilise ton projet @showdialog

On est prêts à **utiliser** nos panneaux solaires !

**Conseils pour le tutoriel**

Pendant que tu suis les prochaines étapes :

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt à en savoir plus, clique sur **« Dis-m'en plus ! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule !

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Étape d'utilisation 1

Prenons un instant pour réviser les panneaux solaires. Comment fonctionnent-ils ?

~hint Dis-m'en plus !

-   Les panneaux solaires captent la lumière du soleil et la convertissent en électricité. Pour bien fonctionner, ils doivent faire face au soleil afin d'absorber le plus de lumière possible.
    hint~

## Étape d'utilisation 2

Regarde bien ton panneau solaire. Peux-tu nommer toutes ses pièces physiques ?

~hint Dis-m'en plus !
Notre panneau solaire est composé de :

-   **Blocs de construction** : une plaque de base, trois cadres moyens, deux connecteurs cubiques et trois connecteurs d'angle
-   **Composants robotiques** : un micro:bit, une plaque d'extension, un servomoteur positionnel et un capteur solaire
-   Un long câble connecteur
    hint~

## Étape d'utilisation 3

Selon toi, quel est le rôle de chaque pièce ? Comment pourraient-elles fonctionner ensemble pour créer un prototype de panneau solaire fonctionnel ?

~hint Dis-m'en plus !

-   Les **blocs de construction** forment une structure qui incline les panneaux solaires vers le ciel pour une exposition maximale à la lumière !
-   Le **capteur solaire** recueille des données sur la quantité de lumière présente dans la zone.
-   Le **servomoteur positionnel** fait pivoter nos panneaux solaires vers le soleil pour qu'ils reçoivent le plus de lumière possible.
-   Enfin, le **micro:bit** stocke tout le code qui indique à nos panneaux solaires comment fonctionner. La **plaque d'extension** connecte notre micro:bit à nos autres composants robotiques.
    hint~

## Étape d'utilisation 4

Commençons par tester les différents composants robotiques de notre projet de panneau solaire. En premier : le servomoteur positionnel !

Regarde les simulateurs à gauche de l'éditeur MakeCode, sous le simulateur du micro:bit. Que se passe-t-il avec ton projet quand tu appuies sur le bouton d'alimentation et déplaces le curseur sous rightServo de gauche à droite ?

~hint Dis-m'en plus !

-   Lorsque le curseur est déplacé de gauche à droite, la valeur augmente et le panneau solaire tourne dans le sens antihoraire !
-   Si tu ne trouves pas les simulateurs, regarde [cette vidéo d'aide](https://youtu.be/gi5Olzmk2zk) !
    hint~

## Étape d'utilisation 5

Calibrons la position de départ de nos panneaux solaires. Commence par déposer le projet devant toi, face à toi. Les panneaux solaires doivent être le plus proche de toi, avec la plaque d'extension derrière eux.

## Étape d'utilisation 6

Ensuite, règle le servomoteur positionnel à « 0° » sur le simulateur. À cette position, les panneaux solaires _devraient pointer vers ta gauche_ comme montré dans l'indice de l'ampoule. Si ce n'est pas le cas, détache doucement le connecteur d'angle qui tient les panneaux et rattache-le correctement !

![image](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/ms-solarpanel-render.webp)

## Étape d'utilisation 7

Maintenant, regardons le code de notre panneau solaire et commençons à le tester.

Selon toi, que va-t-il se passer quand tu appuies sur « A » ? Essaie maintenant !

~hint Dis-m'en plus !

-   Quand tu appuies sur « A », les panneaux solaires font face à la gauche (0°) !
-   Puisque les panneaux étaient déjà à 0°, rien ne changera !
    hint~

```blocks
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 0)
})
```

## Étape d'utilisation 8

Selon toi, que va-t-il se passer quand tu touches le logo du micro:bit ? Essaie maintenant !

~hint Dis-m'en plus !

-   Quand tu touches le logo du micro:bit, les panneaux solaires font face vers l'extérieur (90°) !
    hint~

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 90)
})
```

## Étape d'utilisation 9

Selon toi, que va-t-il se passer quand tu appuies sur « B » ? Essaie maintenant !

~hint Dis-m'en plus !

-   Quand tu appuies sur « B », les panneaux solaires font face à la droite (180°) !
    hint~

```blocks
input.onButtonPressed(Button.B, function () {
    fwdMotors.setAngle(fwdBase.rightServo, 180)
})
```

## Étape d'utilisation 10

Quel est l'avantage de pouvoir contrôler la position des panneaux solaires ?

~hint Dis-m'en plus !

-   La position du soleil change tout au long de la journée. Il se lève dans une partie du ciel, se déplace à travers le ciel, puis se couche dans une autre partie du ciel.
-   En appuyant sur un certain bouton ou sur le logo, on peut contrôler manuellement la position et s'assurer que les panneaux solaires font toujours face au soleil.
    hint~

## Étape d'utilisation 11

Imaginons que tu vas installer les panneaux solaires sur le toit du bâtiment où tu te trouves en ce moment.

1. D'après ce que tu sais du mouvement apparent du soleil dans le ciel, dans quelle direction installerais-tu l'appareil ?
2. Quels boutons devrais-tu appuyer le matin, l'après-midi et le soir pour t'assurer que les panneaux ont toujours une exposition maximale au soleil ? Explique ton raisonnement.

~hint Dis-m'en plus !

-   Rappelle-toi que, comme la Terre tourne sur son propre axe dans le sens antihoraire, le soleil _semble_ se lever à l'est et se coucher à l'ouest.
-   Quelles techniques peux-tu utiliser pour déterminer l'est de l'ouest ?
    hint~

## Étape d'utilisation 12

Testons-le. Positionne tes panneaux solaires. Tiens une lumière pour représenter la position du soleil au lever du jour. Appuie sur un bouton pour tourner les panneaux vers la source de lumière.

As-tu remarqué un changement sur le micro:bit quand le panneau solaire s'est tourné vers le soleil (la lumière) ?

~hint Dis-m'en plus !

-   Quand le panneau solaire fait face à une lumière vive comme le soleil, le diamant sur les DEL du micro:bit devient plus grand. Cela nous aide à savoir que la position est idéale.
    hint~

## Étape d'utilisation 13

Selon toi, quelle partie du code est responsable de ce changement sur les DEL ?

~hint Dis-m'en plus !

-   Il y a une **instruction conditionnelle** dans notre code qui change l'icône selon la lecture du capteur solaire. Cette instruction précise que si le niveau de lumière solaire est supérieur à 90 %, un grand diamant s'affiche sur les DEL. Sinon, un petit diamant s'affiche.
    hint~

```blocks
basic.forever(function () {
    // @highlight
    if (fwdSensors.solar1.lightLevel() > 90) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
```

## Étape d'utilisation 14

Peux-tu penser à des avantages et des limites de déplacer _manuellement_ les panneaux solaires tout au long de la journée ?

## Félicitations ! @showdialog

Tu as terminé l'activité !

Est-ce que quelque chose t'a surpris à propos de ce projet ?

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose que tu aimerais approfondir ?

## Terminé ! @showdialog

À la prochaine étape, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

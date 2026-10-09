# Station de surveillance Hope Spot - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
input.onButtonPressed(Button.A, function () {
    stationOn = true
})
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}
input.onButtonPressed(Button.B, function () {
    stationOn = false
})
let angle = 0
let stationOn = false
stationOn = false
angle = 0
fwdLights.ledRing1.setAllPixelsColor(0x000000)
basic.forever(function () {
    if (stationOn == true) {
        if (fwdSensors.sonar1.distance() > 0.1) {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
            rotateSensor()
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
        basic.pause(100)
    } else {
        fwdBase.rightServo.setEnabled(false)
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons une station de surveillance Hope Spot! Cette station va dissuader les navires d'entrer dans un Hope Spot en émettant un avertissement.

Nous allons le faire en trois parties :

1. **Construire** ta station
2. **Ajouter du code** pour lui donner vie
3. **Utiliser** et **étudier** ta station pour comprendre comment elle fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-render.webp" alt="Rendu complet de la station Hope Spot" style="display: block; width: 75%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs01.webp)

## Étape de construction 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs02.webp)

## Étape de construction 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs03.webp)

## Étape de construction 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs04.webp)

## Étape de construction 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs05.webp)

## Étape de construction 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs06.webp)

## Étape de construction 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs07.webp)

## Étape de construction 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs08.webp)

## Étape de construction 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs09.webp)

## Étape de construction 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs10.webp)

## Étape de construction 11 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs11.webp)

## Étape de construction 12 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs12.webp)

## Étape de construction 13 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs13.webp)

## Étape de construction 14 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs14.webp)

## Étape de construction 15 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs15.webp)

## Étape de construction 16 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs16.webp)

## Étape de construction 17 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-hopespots-sbs17.webp)

## Activité 2 : Code ton projet @showdialog

Maintenant que ta station est construite, connectons-la à l'ordinateur et téléversons du code pour qu'elle puisse détecter les navires et émettre des alertes.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climat est allumée et que ton micro:bit est connecté à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis choisis _Connecter un appareil_. Suis les instructions pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Clique sur le bouton `|Télécharger|` pour transférer le code sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêt·e·s à **utiliser** notre station de surveillance Hope Spot!

**Astuces pour le tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Pour plus de détails, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Étape 1

Cette station de surveillance va aider à protéger notre Hope Spot. Elle le fait en détectant les navires à proximité et en émettant un avertissement quand ils sont trop près de l'aire de conservation.

## Étape 2

Regarde de plus près la station physique.

Quels composants robotiques remarques-tu? Comment penses-tu qu'ils vont travailler ensemble pour que la station fonctionne comme prévu?

~hint Dis-m'en plus!
La station comprend :

-   Un **moteur servo positionnel** qui tourne entre 0° et 270°.
-   Un **capteur sonar** qui calcule la distance d'un objet en émettant des ondes sonores et en mesurant le temps que met « l'écho » à revenir.
-   Un **anneau DEL** qui peut afficher une variété de couleurs.
-   Toutes ces pièces sont connectées à la **plaque de connexion** par des **câbles**.
-   Enfin, la plaque de connexion est reliée au **micro:bit**, qui contient tout le code disant à nos composants robotiques quoi faire et quand le faire!
    hint~

## Étape 3

Examine le code dans l'espace de travail.

Que prédis-tu qu'il se passera lorsque tu lanceras le programme? Quelles parties du code ont influencé ta prédiction?

## Étape 4

Allume la station en appuyant sur le **bouton « A »** du micro:bit.

Est-ce que la station se comporte comme tu l'avais prédit? Sinon, qu'est-ce qui était différent? Essaie d'expliquer ces différences.

## Étape 5

Le moteur servo fait pivoter le capteur sonar pour qu'il puisse balayer la zone à la recherche de navires. Observe attentivement ce mouvement. Note les angles balayés par le capteur. _Astuce : il peut être utile de regarder aussi les simulateurs pour cela!_

D'après ton analyse, peux-tu identifier quelle partie du programme contrôle ce mouvement?

~hint Dis-m'en plus!

-   Dans le code, la fonction `||Functions:rotateSensor||` déplace le capteur sonar par incréments de 10°, jusqu'à 210°, puis revient à 0° pour commencer un nouveau balayage.
    hint~

```blocks
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}
```

## Étape 6

Les fonctions sont utiles parce qu'elles peuvent rendre les programmes plus faciles à lire. Dans notre code, où _appelons-nous_ la fonction `||Functions:rotateSensor||`?

~hint Dis-m'en plus!

-   Nous appelons la fonction `||Functions:rotateSensor||` chaque fois que la distance sonar est _supérieure à 0,1 m_ à l'aide d'une **instruction conditionnelle**. Autrement dit, le capteur continue de tourner tant qu'aucun navire n'est à proximité.
    hint~

```block
// @hide
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}

if (fwdSensors.sonar1.distance() > 0.1) {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
            // @highlight
            rotateSensor()
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
```

## Étape 7

Les fonctions rendent aussi le code réutilisable.

Peux-tu penser à d'autres situations ou projets où ce type de fonction de rotation pourrait être utile?

~hint Dis-m'en plus!

-   Les fonctions de rotation sont utiles pour balayer des plages, comme [suivre la lumière du soleil avec un capteur solaire](https://learn.forwardedu.com/make-your-solar-panel-look-like-the-real-world-version/).
    hint~

## Étape 8

Simule un navire qui approche en plaçant un objet près du capteur sonar. Observe comment la station réagit quand l'objet se rapproche.

Quelle partie du programme est responsable de cette réaction?

~hint Dis-m'en plus!

-   L'**instruction conditionnelle** dans le code contrôle le moment où la couleur de la DEL change. Elle devient rouge quand un objet est détecté _à moins de 0,1 m_.
    hint~

```block
// @hide
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}

if (fwdSensors.sonar1.distance() > 0.1) {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
            rotateSensor()
        } else {
            // @highlight
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
```

## Étape 9

Quelles fonctionnalités supplémentaires pourraient rendre cette station plus efficace pour protéger son Hope Spot? Comment pourrais-tu utiliser la trousse Action Climat pour intégrer ces fonctionnalités?

~hint Dis-m'en plus!

-   **Journalisation des données :** Enregistrer la distance et l'horodatage de chaque navire détecté pourrait aider à suivre les tendances d'activité des navires.
-   **Alertes radio :** Des signaux radio peuvent avertir des équipes à distance quand un navire est détecté.

Consulte le [tutoriel Modifier](https://makecode.microbit.org/#tutorial:https://github.com/forward-education/pxt-climate-action/hs-hopespots-modify) pour voir comment nous pouvons modifier notre programme pour inclure certaines de ces fonctionnalités.
hint~

## Étape 10

Imagine que cette station est construite à partir d'une [plateforme pétrolière](https://en.wikipedia.org/wiki/Oil_platform) récupérée.

Pourquoi les plateformes récupérées pourraient-elles être précieuses pour la conservation marine? Fais une recherche rapide pour justifier ta réponse.

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Fais la liste de 2 nouvelles choses que tu as apprises aujourd'hui.

Réfléchis de façon critique à l'impact de cette station sur la conservation marine. Comment des systèmes comme celui-ci pourraient-ils être déployés à grande échelle pour protéger plusieurs Hope Spots? Note toutes tes idées ou questions supplémentaires.

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

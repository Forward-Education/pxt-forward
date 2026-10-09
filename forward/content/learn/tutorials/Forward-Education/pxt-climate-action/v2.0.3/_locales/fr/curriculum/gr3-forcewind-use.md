# La force puissante du vent - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

## Activité 1 : Construis ton projet @showdialog

Construisons une éolienne mobile! Nous allons le faire en trois parties :

1. **Construire** notre éolienne
2. **Ajouter du code** pour la faire bouger
3. **Utiliser** notre éolienne pour comprendre son fonctionnement

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-render.webp" alt="Rendu complet de l'éolienne" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![Prends un long cadre blanc. Passe un servomoteur continu à travers le trou de servo du cadre. Assure-toi que le fil du servo est le plus proche de l'extrémité longue du cadre.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs01.webp)

## Étape de construction 2 @showdialog

![Connecte un bloc circulaire au servomoteur continu.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs02.webp)

## Étape de construction 3 @showdialog

![Ajoute un connecteur cube au bas du long cadre.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs03.webp).

## Étape de construction 4 @showdialog

![Connecte le long cadre à la plaque de base, de façon à ce qu'il se tienne debout comme une éolienne.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs04.webp)

## Étape de construction 5 @showdialog

![Fixe la carte d'extension au milieu d'un bloc de construction long. Connecte le servomoteur au port de moteur du milieu.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs05.webp)

## Étape de construction 6 @showdialog

![Prends la molette et un câble court. Connecte-les. Branche l'autre extrémité du câble dans un port de capteur de la carte d'extension.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs06.webp)

## Étape de construction 7 @showdialog

![Connecte ton micro:bit à l'ordinateur via le port USB.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs07.webp)

## Étape de construction 8 @showdialog

![Glisse le micro:bit dans la carte d'extension.](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-simplewind-sbs08.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de programmation 1 @showdialog

IMPORTANT! Assure-toi que la carte d'extension du kit d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" style="display: block; width: 45%; margin:auto;">

## Étape de programmation 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de programmation 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes prêts à **utiliser** notre éolienne!

**Astuces pour le tutoriel**

En parcourant les prochaines étapes :

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt pour plus d'informations, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

## Utilisation, étape 1

Repense à comment une éolienne fonctionne. Quelle partie de notre projet physique représente :

-   Le vent?
-   Les pales de l'éolienne?

~hint Dis-m'en plus!

-   La molette représente le vent!
-   Le bloc de construction circulaire vert représente les pales de l'éolienne.
    hint~

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
```

## Utilisation, étape 2

Regarde le code ci-dessous.

Que penses-tu qu'il arrivera aux pales de ton projet quand tu exerces une force sur (ou tournes) la molette? Essaie-le maintenant.

~hint Dis-m'en plus!

-   Quand nous tournons la molette vers la droite, le bloc de construction vert devrait commencer à tourner!
-   C'est ce qu'on appelle l'entrée et la sortie du code.
    hint~

```blocks
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    fwdBase.middleServo.setSpeed(50)
})
```

## Utilisation, étape 3

Que penses-tu qu'il se passera quand tu tournes la molette dans l'autre sens? Essaie-le maintenant!

~hint Dis-m'en plus!

-   Rien ne se passe! Il n'y a pas de code qui indique à l'ordinateur quoi faire quand la molette est tournée dans cette direction.
    hint~

## Utilisation, étape 4

Regarde ton code. Comment penses-tu que nous pouvons arrêter le moteur de tourner? Essaie-le!

~hint Dis-m'en plus!

-   Le moteur s'arrêtera quand tu appuieras sur la molette!
    hint~

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    fwdBase.middleServo.setSpeed(0)
})
```

## Utilisation, étape 5

Prêt pour plus?

Peux-tu ajouter les petits cadres verts à ton éolienne pour servir de pales? Ajoute une pièce à la fois et vérifie si elle peut encore bouger avec ces pièces supplémentaires!

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris dans ce projet?

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose que tu voudrais approfondir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour finir le tutoriel.

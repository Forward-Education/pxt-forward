# Système d'irrigation mobile - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(25, -25, 1000)
        basic.pause(3000)
        fwdMotors.drive(0, 0, 0)
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fwdMotors.pump.timedRun(1500)
        basic.pause(3000)
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
fwdMotors.setupDriving(fwdBase.rightServo, fwdBase.leftServo)
fwdLights.ledRing1.setAllPixelsColor(0xff0000)
```

## Activité 1 : Construis ton projet @showdialog

Construisons un système d'irrigation mobile! Nous allons le faire en trois parties :

1. **Construire** ton véhicule
2. **Ajouter du code** à ton véhicule pour lui donner vie
3. **Utiliser** et **étudier** ton véhicule pour comprendre comment il fonctionne

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-render.webp" alt="Rendu complet du système d'irrigation mobile" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs01.webp)

## Étape de construction 2 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs02.webp)

## Étape de construction 3 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs03.webp)

## Étape de construction 4 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs04.webp)

## Étape de construction 5 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs05.webp)

## Étape de construction 6 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs06.webp)

## Étape de construction 7 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs07.webp)

## Étape de construction 8 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs08.webp)

## Étape de construction 9 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs09.webp)

## Étape de construction 10 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs10.webp)

## Étape de construction 11 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs11.webp)

## Étape de construction 12 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs12.webp)

## Étape de construction 13 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs13.webp)

## Étape de construction 14 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs14.webp)

## Étape de construction 15 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs15.webp)

_Remarque : place simplement la pompe sur le dessus du véhicule. Nous n'utiliserons pas d'eau pendant le test du prototype._

## Étape de construction 16 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs16.webp)

## Étape de construction 17 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs17.webp)

_Remarque : si tu veux fixer le tube en plastique à la pompe, tu peux le fixer autour de ce cadre moyen et le faire passer par le trou du servo. Cela permettra à l'eau de sortir par l'arrière du véhicule._

## Étape de construction 18 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs18.webp)

## Étape de construction 19 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs19.webp)

## Étape de construction 20 @showdialog

![sbs1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/hs-mobileirrigation-sbs20.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui diront à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action Climat est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter un appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes maintenant prêt·e·s à **utiliser** notre système d'irrigation mobile!

**Astuces pour le tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu es prêt·e à en savoir plus, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Étape 1

Observe attentivement le système d'irrigation mobile que tu viens de construire. Peux-tu identifier et nommer chaque pièce que tu as utilisée?

~hint Dis-m'en plus!
Ce système utilise :

-   **Blocs de construction :** la plaque de base, quatre longs cadres avec des trous de servo, quatre cadres moyens, un cadre moyen avec des trous de servo, trois cadres fins, quatre petits cadres, quatre connecteurs cubes, huit connecteurs d'angle, et deux roues
-   **Pièces robotiques :** une plaque de connexion, un micro:bit, deux moteurs servo continus, un anneau DEL, un capteur tactile et un capteur sonar
    hint~

## Étape 2

Comment penses-tu que toutes ces pièces fonctionnent ensemble pour faire fonctionner le véhicule?

~hint Dis-m'en plus!

-   Les blocs de construction créent une structure capable de résister à diverses forces.
-   Le micro:bit reçoit une **entrée** de l'utilisateur provenant du capteur tactile.
-   Le micro:bit communique avec la pompe, les moteurs et l'anneau DEL, en indiquant à chacun quand s'activer. Ces composants fournissent notre **sortie**.
-   Toutes les pièces doivent être correctement connectées par la plaque de connexion et les câbles, et programmées pour assurer un fonctionnement harmonieux.
    hint~

## Étape 3

Regarde le code fourni ci-dessous.

Que prédis-tu qu'il se passera lorsque tu lanceras le programme? Quelles parties du code ont influencé ta prédiction?

## Étape 4

Fais démarrer le véhicule en appuyant sur le capteur tactile. Observe ce qui se passe.

Est-ce que le véhicule s'est comporté comme tu l'avais prédit? Sinon, qu'est-ce qui était différent? Peux-tu expliquer ces différences?

~hint Dis-m'en plus!
Quand le capteur tactile est activé, le véhicule :

1. Avance pendant 3 secondes.
2. S'arrête.
3. Allume les DEL vertes pour indiquer que l'arrosage est sur le point de commencer.
4. Fait fonctionner la pompe pendant 1,5 seconde pour arroser les cultures.
5. Allume les DEL rouges pour indiquer que l'arrosage est terminé.

Ce processus se répète 4 fois.
hint~

```blocks
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(25, -25, 1000)
        basic.pause(3000)
        fwdMotors.drive(0, 0, 0)
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        fwdMotors.pump.timedRun(1500)
        basic.pause(3000)
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
```

## Étape 5

Fais fonctionner le véhicule encore une fois. Cette fois, calcule la vitesse de ton véhicule d'irrigation mobile.

Connaître la vitesse va nous aider à comprendre l'efficacité du fonctionnement du véhicule.

~hint Dis-m'en plus!

-   **Comment faire :** essaie d'utiliser [cette feuille de calcul](https://docs.google.com/spreadsheets/d/19piwhyA8-yKC_VqT9BU_wR1LtD1rLymY5Uc_YWKD5a4/edit?usp=sharing). Mesure la distance parcourue par ton véhicule. Chronomètre le temps qu'il met à parcourir cette distance.
-   **Pente :** en traçant plusieurs points de données le long du trajet de ton véhicule, la pente de la droite de meilleur ajustement devrait représenter la vitesse du véhicule. Utilise la formule : **Vitesse = Distance / Temps**
-   **Analyse tes résultats :** à quelle vitesse ton véhicule se déplace-t-il? Quels facteurs influencent sa vitesse?
    hint~

## Modélisation de la conservation de l'eau @showdialog

Utilisons la vitesse pour commencer à faire quelques calculs sur la quantité d'eau que ce système est capable de conserver.

## Modélisation étape 1

D'abord, considère quelle quantité d'eau serait utilisée si la pompe fonctionnait _en continu_ sur un trajet de 100 cm?

_Remarque : suppose que le débit maximal de la pompe est d'environ 28 mL/seconde._

~hint Dis-m'en plus!
L'équation pour calculer la consommation d'eau d'un système continu serait : 𝑊(d) = 𝑟 × (d/𝑣)

Où :

-   𝑊(d) est la consommation d'eau totale en millilitres
-   𝑟 est le débit de la pompe en millilitres par seconde (28 mL/seconde)
-   d est la distance totale parcourue par le véhicule en centimètres
-   𝑣 est la vitesse du véhicule en centimètres par seconde
    hint~

## Modélisation étape 2

Heureusement, le prototype que nous venons de construire ne fait fonctionner la pompe que _de façon périodique_. Combien d'eau _ce_ prototype utiliserait-il sur un trajet de 100 cm? Quelle équation utiliserais-tu dans ce scénario?

Réfléchis aux variables à prendre en compte (p. ex. le temps, la distance, la vitesse du véhicule, la vitesse/le débit de la pompe, le temps de pompage, etc.)? Comment ces variables sont-elles liées à la consommation d'eau dans le prototype actuel?

~hint Dis-m'en plus!
Pour calculer la consommation d'eau du système d'irrigation mobile que nous venons de construire, nous utiliserons cette équation : 𝑊(d) = 𝑟 × d × fd × tp

Où :

-   𝑊(d) est la consommation d'eau en millilitres
-   𝑟 est le débit de la pompe en millilitres par seconde (28 mL/seconde)
-   fd est la fréquence de pompage (p. ex., le nombre d'activations par centimètre)
-   d est la distance totale parcourue en cm
-   tp est le temps de pompage par activation (1,5 seconde)
    hint~

## Modélisation étape 3

Enfin, il est temps de calculer combien d'eau ce prototype économise par rapport au système continu.

Soustrais l'eau utilisée par le prototype de l'eau utilisée par le système continu. Que t'indique cette différence sur l'efficacité de ta conception? Comment les économies d'eau réalisées grâce à ta conception pourraient-elles avoir un impact sur les pratiques agricoles dans les régions touchées par la pénurie d'eau?

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Fais la liste de 2 nouvelles choses que tu as apprises aujourd'hui.

Quelle est une chose que tu aimerais approfondir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

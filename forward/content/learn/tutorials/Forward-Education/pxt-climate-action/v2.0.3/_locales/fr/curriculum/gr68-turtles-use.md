# Lumières de plage sécuritaires pour les tortues - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons une lumière de plage sécuritaire pour les tortues! Nous allons faire cela en 3 parties :

1. **Construis** notre lumière
2. **Ajoute du code** pour la faire prendre vie
3. **Utilise** ou teste la lumière pour apprendre comment elle fonctionne <br>
   <img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-projectrender.webp" alt="projectrender" width="400"/>

## Étape de construction 1 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs01.webp)

## Étape de construction 2 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs02.webp)

## Étape de construction 3 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs03.webp)

## Étape de construction 4 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs04.webp)

## Étape de construction 5 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs05.webp)

## Étape de construction 6 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs06.webp)

## Étape de construction 7 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs07.webp)

## Étape de construction 8 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs08.webp)

## Étape de construction 9 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs09.webp)

## Étape de construction 10 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs10.webp)

## Étape de construction 11 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs11.webp)

## Étape de construction 12 @showdialog

![turtlesbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-sbs12.webp)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour le faire prendre vie avec du code! <br> Le code sera les instructions qui disent à notre micro:bit quoi faire.

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.
<br><img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" width="400">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, et clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.
![pair gif](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/DownloadButtonGIF.webp)

## Étape de code 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ.

## Activité 3 : Utilise ton projet @showdialog

Nous sommes prêts à **utiliser** notre lumière de plage sécuritaire pour les tortues! <br>
**Conseils**

1. Suis les instructions en haut de l'écran.
2. Chaque fois que tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

## Étape d'utilisation 1

Regarde ta lumière de plage sécuritaire pour les tortues. Peux-tu nommer toutes ses parties physiques?

~hint Dis-m'en plus!
Notre lumière a :

-   **Blocs de construction** : une plaque de base, trois cadres blancs moyens, deux petits cadres, un cercle, deux connecteurs cubes et deux connecteurs dos à dos
-   **Composants robotiques** : un micro:bit, une plaque de connexion, une pile, un anneau DEL et un capteur solaire
-   **Connecteurs de câbles** : un court et un long
    hint~

## Étape d'utilisation 2

À ton avis, quel est le but de chaque partie? Comment interagissent-elles les unes avec les autres?

~hint Dis-m'en plus!

-   Les **blocs de construction** sont comme les os de notre projet, fournissant structure, support et fonction de base!
-   Le **micro:bit** est comme le cerveau de notre projet. Il stocke tout le code (alias les instructions!) qui dit à notre lumière comment fonctionner.
-   La **plaque de connexion** envoie ces instructions du micro:bit au **capteur solaire** et à l'**anneau DEL** à travers des **câbles**. Le capteur est semblable à un organe comme nos yeux, tandis que l'anneau DEL agit comme un membre.
-   La **pile** sur la plaque de connexion alimente notre projet quand il n'est pas branché à l'ordinateur. C'est comme le cœur du projet!
    hint~

## Étape d'utilisation 3

Regardons les instructions (alias le code!) que nous avons ajoutées à notre lumière. Cela nous aidera à comprendre comment elle fonctionne.<br>
D'après le code dans l'espace de travail, peux-tu faire une première supposition sur le moment où la lumière devrait s'allumer? Quand s'éteindra-t-elle?

## Étape d'utilisation 4

Testons-la! Essaie de placer ta main au-dessus du capteur solaire pour bloquer la lumière et simuler la nuit. Que se passe-t-il?

~hint Dis-m'en plus!

-   Quand nos mains sont au-dessus du capteur, les DEL rouges s'allument. Quand nos mains sont retirées, les DEL s'éteignent.
-   Nous contrôlons la lumière avec une **instruction conditionnelle**.
-   Les instructions conditionnelles sont des règles « si-alors » utilisées en programmation. Elles ajoutent des points de contrôle à nos programmes et disent à l'ordinateur quoi faire dans différentes situations, comme afficher un message d'anniversaire si c'est ton anniversaire.
    hint~

## Étape d'utilisation 5

Peux-tu identifier l'instruction conditionnelle qui contrôle nos DEL? <br> Quelles règles le micro:bit utilise-t-il pour décider quand les DEL sont allumées?

~hint Dis-m'en plus!

-   Le micro:bit recueille des données du capteur solaire. Il allumera la lumière de plage quand les niveaux de lumière environnementale seront égaux ou inférieurs à 40 %.
-   C'est ce qu'on appelle une **expression booléenne**. Les expressions booléennes doivent être évaluées comme vraies ou fausses. Si le booléen est vrai, le micro:bit exécutera le code ci-dessous. Sinon, il passera à l'instruction `||logic:else||`.
    hint~

```block
    if (fwdSensors.solar1.lightLevel() <= 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape d'utilisation 6

Pense à la construction physique et au code derrière cette lumière. À ton avis, quelles caractéristiques la rendent « sécuritaire pour les tortues »?

~hint Dis-m'en plus!

-   Les cadres blancs moyens gardent la lumière basse.
-   Le cercle vert et les petits cadres dirigent la lumière vers le bas et l'empêchent de se répandre.
-   Les lumières DEL rouges sont difficiles à voir pour les tortues de mer.
-   L'instruction conditionnelle s'assure que la lumière n'est allumée que lorsque c'est absolument nécessaire.
    hint~

## Étape d'utilisation 7

Débranche ta lumière de l'ordinateur et essaie de te déplacer à différents endroits. <br> Comment la lumière réagit-elle?

## Étape d'utilisation 8

D'après ce que tu as appris, comment pourrais-tu améliorer la conception de la lumière de plage?

~hint Dis-m'en plus!
Tu pourrais changer la construction physique en couvrant les blocs de construction verts avec du papier de construction noir pour créer un meilleur écran de lumière.
Tu pourrais changer le code pour que :

-   les DEL s'allument à un pourcentage de lumière solaire plus bas
-   la luminosité des DEL change selon l'obscurité à l'extérieur
-   la lumière s'allume seulement quand des gens sont à proximité
    hint~

## Félicitations! @showdialog

Tu as terminé l'activité! <br> Est-ce que quelque chose t'a surpris dans ce projet?

## Réflexion @showdialog

Nomme 2 nouvelles choses que tu as apprises aujourd'hui. <br>Quelle est une chose que tu aimerais apprendre davantage?

## Réflexion @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

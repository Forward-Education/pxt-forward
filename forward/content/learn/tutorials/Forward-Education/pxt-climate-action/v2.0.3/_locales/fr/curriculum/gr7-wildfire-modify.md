# Détection des feux de forêt avec des véhicules autonomes - Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
microphone=microphone
```

## Activité 1 : Construis ton projet @showdialog

Construisons un véhicule de détection de feux de forêt! Nous allons faire cela en 4 parties :

1. **Construis** notre véhicule de détection de feux de forêt
2. **Ajoute du code** pour le faire bouger
3. **Modifie** le code pour apprendre comment le véhicule fonctionne
4. Complète un **défi** pour améliorer sa fonction

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/Project%20Render%20Forest%20Fires%20three%20quarter%20build.png" alt="Rendu complet du feu de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de construction 1 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs1.png)

## Étape de construction 2 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs2.png)

## Étape de construction 3 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs3.png)

## Étape de construction 4 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs4.png)

## Étape de construction 5 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs5.png)

## Étape de construction 6 @showdialog

![wildfiresb](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs6.png)

## Étape de construction 7 @showdialog

![wildfiresb](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs7.png)

## Étape de construction 8 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs8.png)

## Étape de construction 9 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs9.png)

## Étape de construction 10 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs10.png)

## Étape de construction 11 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs11.png)

## Étape de construction 12 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs12.png)

## Étape de construction 13 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs13.png)

## Étape de construction 14 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs14.png)

## Étape de construction 15 et 16 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs15.png)

## Étape de construction 17 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs17.png)

## Étape de construction 18 @showdialog

![wildfiresb](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs18.png)

## Étape de construction 19 @showdialog

![wildfiresbs](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr8-wildfires-sbs19.png)

## Activité 2 : Code ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour le faire prendre vie avec du code!

Le code sera les instructions qui disent à notre micro:bit quoi faire.

```template
basic.forever(function () {
    if (isDrivingEnabled) {
        fwdMotors.drive(50, -50, 1000)
        if (input.lightLevel() > 135) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
    } else {
        fwdMotors.drive(0, 0, 0)
    }
})

input.onButtonPressed(Button.A, function () {
    isDrivingEnabled = true
})

input.onButtonPressed(Button.B, function () {
    isDrivingEnabled = false
})

let isDrivingEnabled = false
isDrivingEnabled = false
fwdMotors.setupDriving(
fwdBase.rightServo,
fwdBase.leftServo
)
```

## Étape de code 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse d'action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Allume la plaque de connexion" style="display: block; width: 40%; margin:auto;">

## Étape de code 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_. Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp" alt="Rendu complet du feu de forêt" style="display: block; width: 60%; margin:auto;">

## Étape de code 3

Ensuite, clique sur le bouton `|Télécharger|` pour télécharger le projet de départ.

## Activité 3 : Modifie ton projet @showdialog

Nous sommes prêts à **modifier** notre véhicule de détection de feux de forêt!

Conseils

1. Suis les instructions en haut de l'écran.
2. Quand tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!
4. N'oublie pas de télécharger et de tester tout changement que tu fais!

## Étape de modification 1

Pense au but d'un véhicule de détection de feux de forêt. Quelles sont les 5 tâches principales qu'il devrait pouvoir accomplir?

~hint Dis-m'en plus!
Notre véhicule de détection de feux de forêt devrait pouvoir :

-   Démarrer (rouler!)
-   S'arrêter (freiner!)
-   Se déplacer à travers une forêt pour patrouiller une zone
-   Envoyer une alerte s'il détecte un feu
-   Éviter le feu!
    hint~

## Étape de modification 2

Testons-le! Débranche le véhicule de ton ordinateur et place-le sur un plancher dégagé. Appuie sur le bouton A du micro:bit pour commencer à rouler.

Pour simuler la lumière vive d'un feu, dirige une lampe de poche directement sur les DEL du micro:bit. Que remarques-tu? Fais cela quelques fois. Ensuite, appuie sur B pour arrêter le véhicule et note tes observations.

~hint Dis-m'en plus!
Le véhicule :

-   **Patrouille la zone** en utilisant une **instruction conditionnelle** qui dit « Si la variable `||variables:isDrivingEnabled||` est `||logic:true||`, alors `||fwdMotors:drive forward||`. »
-   **Envoie une alerte de feu** en utilisant une autre **instruction conditionnelle** qui vérifie si le capteur de lumière du micro:bit a détecté une lumière vive (au-dessus de « 135 »). Si oui, le micro:bit émet un son de bip à l'aide du bloc `||music:play tone||`.
-   **Évite de rouler dans le feu** en appliquant automatiquement les freins chaque fois qu'il détecte une lumière vive à l'aide du bloc `||fwdMotors:stop motors||`. Le véhicule `||fwdMotors:turns 15 degrees||` aussi _après_ avoir envoyé l'alerte.
    hint~

```block
if (isDrivingEnabled) {
        fwdMotors.drive(50, -50, 1000)
        if (input.lightLevel() > 135) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
    }
```

## Étape de modification 3

En ce moment, le véhicule de détection de feux de forêt patrouille pour détecter le feu à l'aide du capteur de lumière du micro:bit. S'il détecte une lumière vive au-dessus de « 135 », il enverra une alerte. C'est notre seuil de lumière.

Essaie de changer la valeur du seuil pour quelque chose de beaucoup plus bas, comme « 1 ». Teste de nouveau le véhicule. Que se passe-t-il?

~hint Dis-m'en plus!

-   Diminuer le seuil de lumière fera en sorte que le véhicule réagira plus sensiblement aux changements de lumière.
-   Si tu es près d'une lumière ou d'une fenêtre, il commencera à envoyer de fausses alertes basées sur les niveaux de lumière ambiante dans la pièce.
-   Si tu n'es pas près d'une fenêtre, tu remarqueras peut-être que ta lampe de poche n'a pas besoin d'être aussi près du micro:bit pour déclencher l'alerte.
-   N'oublie pas de retélécharger ton code.
    hint~

```block
        if (input.lightLevel() > 1) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
```

## Étape de modification 4

Que pourrait-il se passer si tu augmentais le seuil à « 250 »? Essaie maintenant!

Dirige une lumière sur les DEL du micro:bit. Comment cela affecte-t-il le comportement du véhicule?

~hint Dis-m'en plus!

-   Augmenter le seuil de lumière rend le véhicule moins sensible aux changements de lumière. Il pourrait même manquer de vrais feux maintenant.
-   Tu remarqueras peut-être que ton véhicule ne réagit plus du tout à la lampe de poche.
-   Ou tu remarqueras peut-être que tu dois placer la lampe de poche vraiment près des DEL pour déclencher l'alerte.
-   Il est important de choisir un seuil assez élevé pour éviter les fausses alarmes, mais assez raisonnable pour détecter de vrais feux.
-   _Note : Le capteur de lumière du micro:bit ne mesure que jusqu'à « 255 »._
    hint~

```block
        if (input.lightLevel() > 250) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
```

## Étape de modification 5

Remets ton seuil à « 135 ».

```block
        if (input.lightLevel() > 135) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
```

## Étape de modification 6

Une autre façon d'améliorer la précision de notre système d'alarme est d'ajouter un autre capteur.

Si nous envoyons une alerte basée seulement sur la lumière, nous pourrions réagir de façon inappropriée. Par exemple, que se passerait-il si notre véhicule venait juste d'entrer dans une partie particulièrement lumineuse de la forêt? Le véhicule pourrait envoyer une alerte même s'il n'y a pas de feu!

## Étape de modification 7

Notre projet a plusieurs autres capteurs qui peuvent recueillir de l'information de son environnement : un accéléromètre pour mesurer le mouvement du micro:bit, un capteur de température, un capteur sonar pour mesurer la distance, un capteur de ligne, une boussole, un capteur tactile et un capteur de microphone pour mesurer les sons.

Lequel de ces capteurs serait le plus approprié pour détecter un feu?

~hint Dis-m'en plus!

-   Les feux sont brillants, bruyants et chauds!
-   Nous pourrions utiliser le capteur de lumière, le microphone et le capteur de température pour déterminer s'il y a un feu à proximité.
-   Pour des raisons de sécurité, nous nous concentrerons aujourd'hui sur les capteurs de lumière et de microphone, mais le capteur de température serait vraiment pratique dans la vraie vie!
    hint~

## Étape de modification 8

Ajoutons du code qui permettra de déclencher l'alerte avec des bruits forts.

Clique avec le bouton droit sur l'expression `||input:light level||` `||logic:> 135||` et sélectionne « Dupliquer ». Remplace la variable `||input:light level||` par la variable `||input: sound level||` sous `||input:Input||`.

~hint Dis-m'en plus!

-   Le bloc sera hachuré.
    hint~

```block
if (input.soundLevel() > 135) {
	
}
```

## Étape de modification 9

Comment pourrions-nous ajouter cette expression à notre code existant?

~hint Dis-m'en plus!
Nous pourrions :

1. ajouter une autre **instruction conditionnelle**, ou
2. utiliser quelque chose appelé une **instruction conditionnelle composée** pour combiner deux expressions.

Nous allons essayer la deuxième option aujourd'hui!
hint~

## Étape de modification 10

Glisse un bloc `||logic:or||` de la catégorie `||logic:Logic||` dans l'espace de travail.

Remarque la forme de ce bloc et la forme des espaces vides. Comment pouvons-nous utiliser ce bloc pour combiner nos deux expressions en une seule instruction conditionnelle?

~hint Dis-m'en plus!

-   Ajoute l'expression `||input:light level||` `||logic:> 135||` du côté gauche de ce bloc.
-   Ajoute l'expression `||input:sound level||` `||logic:> 135||` du côté droit de ce nouveau bloc.
    hint~

```block
if (input.lightLevel() > 135 || input.soundLevel() > 135) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
```

## Étape de modification 11

Télécharge et teste ton nouveau code!

Que se passe-t-il quand tu diriges la lumière sur les DEL ou quand tu fais un bruit fort en applaudissant?

~hint Dis-m'en plus!

-   `||logic:or||` est un **opérateur booléen**. Il nous permettra de combiner et d'évaluer _deux_ expressions dans _une_ instruction conditionnelle.
-   Dans ce cas, le véhicule devrait envoyer une alerte s'il détecte une lumière vive _OU_ un bruit fort.
    hint~

```block
if (input.lightLevel() > 135 || input.soundLevel() > 135) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
```

## Étape de modification 12

Sélectionne la flèche vers le bas à côté de `||logic:or||` et change-la pour `||logic:and||`.

Teste ton nouveau code. Que se passe-t-il maintenant quand tu diriges la lumière sur les DEL ou quand tu fais un bruit fort en applaudissant?

~hint Dis-m'en plus!

-   `||logic:and||` est un autre **opérateur booléen**.
-   Avec ce changement, le véhicule enverra une alerte seulement quand il détecte une lumière vive _ET_ un bruit fort en même temps.
-   Cela réduira le nombre de fausses alarmes et améliorera la précision de notre système de détection!
    hint~

```block
if (input.lightLevel() > 135 && input.soundLevel() > 135) {
            fwdMotors.drive(0, 0, 0)
            music.playTone(262, music.beat(BeatFraction.Breve))
            // TODO: calibrate duration -- was turn(15) degrees in place
            fwdMotors.drive(50, 50, 1000)
        }
```

## Activité 4 : Le temps du défi! @showdialog

Maintenant que nous avons amélioré la précision de notre système de détection, nous allons personnaliser et améliorer son alerte.

## Étape du défi 1

Glisse une boucle `||loops:repeat 4 times||`, deux blocs `||basic:pause (ms) 100||`, et deux blocs `||music:play tone middle C for 1 beat||` dans l'espace de travail.

Comment pouvons-nous les combiner et les ajouter à notre code existant pour créer une alarme qui alterne entre deux tonalités - semblable à d'autres véhicules d'urgence?

Vérifie l'ampoule pour une solution possible! As-tu fait quelque chose de différent?

~hint Dis-m'en plus!

1. Change la note dans un des blocs `||music:play tone||`. Cela nous permettra d'alterner entre deux notes.
2. Change le nombre de temps que chaque note joue.
3. Place les blocs `||basic:pause (ms) 100||` entre les blocs `||music:play tone||`.
4. Entoure ces 4 blocs de la boucle `||loops:loop||` pour qu'elle répète la séquence 4 fois. Cela rendra notre alerte plus évidente.
5. Remplace le bloc original `||music: play tone middle C for 4 beats||` par ce nouveau bout de code.
   hint~

```block
if (input.lightLevel() > 135 && input.soundLevel() > 135) {
    fwdMotors.drive(0, 0, 0)
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.pause(100)
        music.playTone(523, music.beat(BeatFraction.Double))
        basic.pause(100)
    }
    // TODO: calibrate duration -- was turn(15) degrees in place
    fwdMotors.drive(50, 50, 1000)
}
```

## Explore

Y a-t-il des parties du code que tu ne comprends toujours pas? C'est le moment d'explorer!

~hint Dis-m'en plus!
Suis ces étapes :

1. Trouve une partie du code sur laquelle tu aimerais en apprendre plus
2. Fais un seul changement à ce bloc (ou enlève-le complètement)
3. Télécharge le nouveau code
4. Teste-le et observe ce qui a changé
5. Répète
   hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis au défi.

Comment as-tu surmonté ce défi? Comment cela t'a-t-il fait sentir?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

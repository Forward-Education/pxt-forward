# Station de surveillance Hope Spot - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
radio=radio
```

```template
// Le bouton A allume la station de surveillance
input.onButtonPressed(Button.A, function () {
    stationOn = true
})

// Fonction pour faire pivoter le capteur sonar par incréments de 10 degrés
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 10
    if (angle >= 210) {
        angle = 0
    }
}

// Le bouton B éteint la station de surveillance
input.onButtonPressed(Button.B, function () {
    stationOn = false
})

let angle = 0
let stationOn = false
stationOn = false // S'assure que la station est éteinte au départ
angle = 0 // S'assure que l'angle du servo positionnel commence à 0 degré
fwdLights.ledRing1.setAllPixelsColor(0x000000)

// Boucle principale pour surveiller les navires
basic.forever(function () {
    // Le reste du code ne s'exécute que si la variable stationOn est VRAIE. C'est ainsi que nous allumons et éteignons la station avec les boutons.
    if (stationOn == true) {
        // Vérifie si aucun objet n'est à proximité (distance > 0,1 m)
        if (fwdSensors.sonar1.distance() > 0.1) {
            fwdLights.ledRing1.setAllPixelsColor(0x000000) // Éteint l'anneau DEL (zone sécuritaire)
            rotateSensor() // Appelle la fonction rotateSensor pour continuer à balayer la zone
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000) // Règle l'anneau DEL au rouge (zone de danger)
        }
        basic.pause(100)
    } else {
        fwdBase.rightServo.setEnabled(false) // Désactive le servo si la station est éteinte
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons une station de surveillance Hope Spot! Cette station va dissuader les navires d'entrer dans un Hope Spot en émettant un avertissement.

Nous allons le faire en quatre parties :

1. **Construire** ta station
2. **Ajouter du code** pour lui donner vie
3. **Modifier** le code pour comprendre comment il fonctionne
4. Compléter quelques **défis** pour améliorer ta station

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

## Activité 3 : Modifie ton projet @showdialog

Nous sommes maintenant prêt·e·s à **modifier** notre station de surveillance Hope Spot!

**Astuces pour le tutoriel**

1. **Suis** les étapes en haut de l'écran.
2. Quand tu es prêt·e à en savoir plus, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!
4. N'oublie pas de `|Télécharger|` et de tester chaque changement que tu apportes!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/tellmore_hintbox_gif.webp" style="display: block; width: 80%; margin:auto;">

## Étape 1

Notre station de surveillance va aider à protéger notre Hope Spot. Elle le fait en détectant les navires avec le capteur sonar et en envoyant un avertissement lumineux DEL quand ils sont trop près de l'aire de conservation.

## Étape 2

Regarde le code dans l'espace de travail. Passe-le en revue attentivement pour comprendre en général ce que fait chaque bloc avant de continuer.

Si tu as des difficultés, tu peux toujours cliquer sur les commentaires pour plus d'information, ou allumer ta station en appuyant sur **A** sur le micro:bit.

~hint Dis-m'en plus!
Ce code :

1. S'assure que la station est ALLUMÉE quand le **bouton A** est enfoncé et ÉTEINTE quand le **bouton B** est enfoncé.
2. Fait pivoter le capteur sonar par incréments de 10° à l'aide de la **fonction** `||Functions:rotateSensor||` pour balayer la zone à la recherche de navires.
3. Déclenche une alerte visuelle en changeant l'anneau DEL au rouge chaque fois qu'un navire est détecté à l'aide d'une **instruction conditionnelle**.
   hint~

## Étape 3

Modifions la **fonction** `||Functions:rotateSensor||`.

Nous allons commencer par expérimenter avec sa plage de balayage et ses limites pour voir comment cela influence la capacité du capteur à détecter les navires.

## Étape 4

Trouve la fonction `||Functions:rotateSensor||` ci-dessous. Ajuste le nombre dans le bloc `||Variables:change angle by||`.

Télécharge ton code mis à jour. Comment cela influence-t-il le mouvement du capteur? Comment ce changement pourrait-il influencer la sensibilité de la station?

~hint Dis-m'en plus!

-   _Augmenter_ la valeur fait balayer la zone plus _rapidement_ au capteur.
-   _Diminuer_ la valeur fait balayer la zone plus _lentement_ au capteur, et donc de façon plus approfondie.
    hint~

```block
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    // @highlight
    angle += 20
    if (angle >= 210) {
        angle = 0
    }
}
```

## Étape 5

Ensuite, ajustons la limite du capteur. En ce moment, la fonction `||Functions:rotateSensor||` utilise une **instruction conditionnelle** pour remettre le capteur à 0° une fois qu'il atteint une limite supérieure de 210°. Teste quelques valeurs différentes pour cette limite supérieure.

Comment chaque changement influence-t-il le mouvement du capteur? Quelle valeur voudrais-tu utiliser dans une situation réelle?

~hint Dis-m'en plus!

-   _Augmenter_ le nombre _élargit_ la plage du capteur, alors que le _diminuer_ _limite_ la plage de détection.
-   Le moteur servo positionnel a une limite supérieure de 270°. Puisque nous voulons balayer autant que possible du Hope Spot, utilisons cette valeur!
    hint~

```block
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 20
    // @highlight
    if (angle >= 270) {
        angle = 0
    }
}
```

## Étape 6

Maintenant, expérimentons avec les seuils de détection du capteur sonar. Modifier le seuil sonar dans l'**instruction conditionnelle** changera la distance à laquelle le système commence à réagir aux navires.

Essaie plusieurs valeurs différentes avant de choisir celle qui fonctionne le mieux.

```block
// @hide
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 20
    // @highlight
    if (angle >= 270) {
        angle = 0
    }
}

        // @highlight
        if (fwdSensors.sonar1.distance() > .3) {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
            rotateSensor()
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
```

## C'est le moment du défi! @showdialog

Tu as réussi à modifier la **fonction** `||Functions:rotateSensor||` et à expérimenter avec la détection sonar.

Il est maintenant temps d'améliorer notre station en ajoutant des avertissements plus détaillés et des fonctionnalités de journalisation des données.

## Défi étape 1

En ce moment, l'anneau DEL de la station devient rouge quand un navire est détecté. Peux-tu étendre l'**instruction conditionnelle** principale pour attribuer des couleurs DEL _différentes_ selon la proximité du navire par rapport au Hope Spot? Par exemple :

-   **Noir/Éteint** : distance sécuritaire
-   **Jaune** : prudence (portée plus rapprochée)
-   **Rouge** : danger (très proche)

Essaie par toi-même, puis passe à l'étape suivante pour voir notre solution.

## Défi étape 2

Étends ta **conditionnelle** en cliquant sur l'icône **+** sous l'instruction else. Ensuite, ajuste chaque instruction (if, else if, else) pour régler :

-   la DEL **noir/éteint** pour une distance sécuritaire (p. ex., > 1 mètre).
-   la DEL **jaune** pour la prudence (p. ex., > 0,1 et < 1 mètre).
-   la DEL **rouge** pour le danger (p. ex., < 0,1 mètre).

Joue avec les valeurs de chaque expression pour optimiser ta station!

```block
// @hide
function logShip () {
    radio.sendString("ALERT")
    datalogger.log(
    datalogger.createCV("Angle", angle),
    datalogger.createCV("Distance", fwdSensors.sonar1.distance())
    )
    basic.pause(5000)
}

// @hide
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 20
    // @highlight
    if (angle >= 270) {
        angle = 0
    }
}

        if (fwdSensors.sonar1.distance() > 1) {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
            rotateSensor()
        } else if (fwdSensors.sonar1.distance() > .1 && fwdSensors.sonar1.distance() <= 1) {
            fwdLights.ledRing1.setAllPixelsColor(0xffff00)
            rotateSensor()
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
```

## Défi étape 3

Ensuite, mettons en place la journalisation des données pour enregistrer l'activité des navires.

La journalisation des données nous permettra de suivre chaque fois qu'un navire entre dans la zone de danger et d'enregistrer son emplacement exact. Ces données peuvent nous aider à analyser des tendances, comme la fréquence à laquelle les navires s'approchent du Hope Spot. En fin de compte, ces tendances peuvent orienter les futurs efforts de conservation.

## Défi étape 4

Utilise les blocs de l'[extension Data Logger](https://microbit.org/get-started/user-guide/data-logging/) pour enregistrer les données de localisation de chaque navire qui entre dans la zone de danger. Tu devrais aussi t'assurer qu'il y a un moyen de supprimer les anciennes données.

Essaie par toi-même d'abord, puis suis les prochaines étapes pour voir notre solution.

## Défi étape 5

Utilise le bloc `||Datalogger:log data||` pour enregistrer les données de `||fwdSensors:sonar distance||` et de `||variables:angle||` chaque fois qu'un navire est dans la « zone de danger ».

```block
// @hide
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 20
    // @highlight
    if (angle >= 270) {
        angle = 0
    }
}
        if (fwdSensors.sonar1.distance() > 1) {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
            rotateSensor()
        } else if (fwdSensors.sonar1.distance() > .1 && fwdSensors.sonar1.distance() <= 1) {
            fwdLights.ledRing1.setAllPixelsColor(0xffff00)
            rotateSensor()
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            // @highlight
            datalogger.log(
            datalogger.createCV("Angle", angle),
            datalogger.createCV("Distance", fwdSensors.sonar1.distance())
            )
        }
```

## Défi étape 6

Ajoute un bloc `||basic:pause||` après le bloc `||Datalogger:log data||`. Cela évitera d'enregistrer le même navire plusieurs fois de suite en succession rapide.

```block
// @hide
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 20
    if (angle >= 270) {
        angle = 0
    }
}
        if (fwdSensors.sonar1.distance() > 1) {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
            rotateSensor()
        } else if (fwdSensors.sonar1.distance() > .1 && fwdSensors.sonar1.distance() <= 1) {
            fwdLights.ledRing1.setAllPixelsColor(0xffff00)
            rotateSensor()
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            datalogger.log(
            datalogger.createCV("Angle", angle),
            datalogger.createCV("Distance", fwdSensors.sonar1.distance())
            )
            // @highlight
            basic.pause(5000)
        }
```

## Défi étape 7

Pour rendre le code plus facile à lire et à réutiliser, tu pourrais essayer de regrouper les blocs de journalisation des données dans une fonction personnalisée, comme nous l'avons fait avec `||functions:rotateSensor||`.

Dans la catégorie `||functions:Functions||`, crée une nouvelle **fonction** appelée `||functions:logShip||`. Déplace les blocs pertinents dans cette fonction et assure-toi de l'appeler dans la boucle principale du programme!

```blocks
// @hide
function rotateSensor () {
    fwdBase.rightServo.setAngleAndWait(angle)
    angle += 20
    if (angle >= 270) {
        angle = 0
    }
}

function logShip () {
    datalogger.log(
    datalogger.createCV("Angle", angle),
    datalogger.createCV("Distance", fwdSensors.sonar1.distance())
    )
    basic.pause(5000)
}

basic.forever(function () {
    if (stationOn == true) {
        if (fwdSensors.sonar1.distance() > 1) {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
            rotateSensor()
        } else if (fwdSensors.sonar1.distance() > .1 && fwdSensors.sonar1.distance() <= 1) {
            fwdLights.ledRing1.setAllPixelsColor(0xffff00)
            rotateSensor()
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            // @highlight
            logShip()
        }
        basic.pause(100)
    } else {
        fwdBase.rightServo.setEnabled(false)
    }
})
```

## Défi étape 8

Pour effacer les anciennes données du journal, utilise le bloc `||datalogger:deleteLog||` à l'intérieur d'un bloc **Entrée** unique comme `||Input:on button A+B pressed||`.

```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
```

## Teste-le!

Télécharge ton nouveau code.

Débranche ta station et teste-la en utilisant des objets pour représenter des navires à différentes distances.

Une fois que tu es satisfait·e de ton test, rebranche le micro:bit et [consulte les données du journal](https://microbit.org/get-started/user-guide/data-logging/#reading-data).

## Félicitations! @showdialog

Tu as terminé l'activité! Continue de tester ta station pour t'assurer que chaque fonctionnalité fonctionne comme prévu.

## Réflexion @showdialog

Quels défis as-tu rencontrés pendant cette activité? Comment les as-tu surmontés?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

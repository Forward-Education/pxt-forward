# Lumières de plage sécuritaires pour les tortues - Tutoriel Modifier

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
```

```template
fwdLights.ledRing1.setBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() < 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (fwdSensors.solar1.lightLevel() >= 40 && fwdSensors.solar1.lightLevel() < 80) {
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        fwdLights.ledRing1.setPixelColor(4, 0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons une lumière de plage sécuritaire pour les tortues! Nous allons faire cela en 4 parties :

1. **Construis** notre lumière
2. **Ajoute du code** pour la faire prendre vie
3. **Modifie** notre code pour apprendre comment il fonctionne
4. Complète quelques défis pour rendre notre lumière encore plus sécuritaire pour les tortues de mer!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/gr68-turtles-projectrender.webp" alt="projectrender" width="300"/>

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

## Activité 3 : Modifie ton projet @showdialog

Nous sommes prêts à **modifier** notre lumière de plage sécuritaire pour les tortues!<br>
**Conseils**

1. Suis les instructions en haut de l'écran.
2. Chaque fois que tu es prêt pour plus d'information, clique sur **« Dis-m'en plus! »**
3. Si tu as besoin d'aide avec le code, clique sur l'ampoule!

## Étape de modification 1

Regardons les instructions (alias le code!) que nous avons ajoutées à notre lumière. Cela nous aidera à comprendre comment elle fonctionne. <br>D'après le code dans l'espace de travail, peux-tu faire une première supposition sur le moment où la lumière devrait s'allumer? Quand devrait-elle s'éteindre?

## Étape de modification 2

Testons-la! Retourne ton projet sur le côté pour bien voir l'anneau DEL. Approche graduellement la paume de ta main du capteur solaire. Cela simule le coucher du soleil en bloquant lentement la lumière. Que remarques-tu?

~hint Dis-m'en plus!

-   Quand ta main est loin du capteur, toutes les lumières DEL de l'anneau sont éteintes.
-   Si ta main couvre complètement le capteur, toutes les DEL deviennent rouges.
-   Quand ta main est proche mais ne touche pas le capteur solaire, seulement 2 lumières DEL deviennent rouges.
    hint~

## Étape de modification 3

Regarde à nouveau le code dans l'espace de travail. <br> Quels blocs de code contrôlent les DEL? Quelle est la différence entre ces blocs?

~hint Dis-m'en plus!

-   Le bloc `||fwdSensors:set all ledRing LEDs to ()||` allume ou éteint toutes les DEL en même temps. Nous pouvons aussi choisir une couleur pour les lumières.
-   Le bloc `||fwdSensors:set ledRing (#) to ()||` change la couleur d'une DEL spécifique. Nous disons à l'ordinateur quelle DEL allumer en choisissant un nombre de 0 à 7.
-   Le bloc `||fwdSensors:set ledRing brightness to ()||` dit au micro:bit à quelle intensité les lumières devraient être quand elles sont allumées.
    hint~

```blocks
// @highlight
fwdLights.ledRing1.setBrightness(7)
basic.forever(function () {
    if (fwdSensors.solar1.lightLevel() < 40) {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (fwdSensors.solar1.lightLevel() >= 40 && fwdSensors.solar1.lightLevel() < 80) {
        // @highlight
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(4, 0xff0000)
    } else {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape de modification 4

Peux-tu identifier l'**instruction conditionnelle** qui contrôle _quand_ ces DEL s'allument? <br>Vérifie l'ampoule pour voir si tu avais raison!

~hint Dis-m'en plus!

-   Souviens-toi, les instructions conditionnelles agissent comme des points de décision ou des règles dans notre code.
-   Chaque règle dans notre code est écrite comme une question « vrai ou faux », appelée une **expression booléenne**. Si la réponse à la question est vraie, l'ordinateur fait ce que le code dit. Si elle est fausse, l'ordinateur vérifie la règle suivante.
    hint~

```block
    // @highlight
    if (fwdSensors.solar1.lightLevel() < 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (fwdSensors.solar1.lightLevel() >= 40 && fwdSensors.solar1.lightLevel() < 80) {
        fwdLights.ledRing1.setPixelColor(0, 0xff0000)
        fwdLights.ledRing1.setPixelColor(4, 0xff0000)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape de modification 5

Quelles sont les _règles précises_ qui aident le micro:bit à décider quoi faire?

~hint Dis-m'en plus!

-   Le micro:bit décide combien de DEL allumer selon la quantité de lumière présente sur la plage.
-   Toutes les DEL s'allument quand le niveau de lumière dans l'environnement est inférieur à 40 % (comme la nuit)! Le `||logic:<||` s'appelle un **opérateur de comparaison**. Il compare deux nombres.
-   Si le niveau de lumière est entre 40 % et 80 % (comme au crépuscule), alors seulement 2 DEL s'allument. Nous utilisons une **instruction conditionnelle composée** pour cela. Elle utilise l'opérateur `||logic:and||` pour s'assurer que les deux parties de la condition sont vraies.
-   Si aucune des conditions ci-dessus n'est remplie, alors toutes les DEL restent éteintes. C'est comme le jour et c'est la partie `||logic:else||` de la conditionnelle.
-   Cette caractéristique est importante pour la lumière des tortues parce qu'elle s'assure que nous n'obtenons la lumière la plus forte que pendant les heures les plus sombres.
    hint~

```block
    if (fwdSensors.solar1.lightLevel() < 40) {
    	
    } else if (fwdSensors.solar1.lightLevel() >= 40 && fwdSensors.solar1.lightLevel() < 80) {
    	
    } else {
    	
    }
```

## Étape de modification 6

Il est temps de personnaliser ta lumière de plage sécuritaire pour les tortues. Savais-tu que ces lumières n'ont pas besoin d'être rouges? Elles peuvent être de n'importe quelle couleur ayant une longue longueur d'onde, y compris la lumière orange et ambrée! <br>Essaie de changer la luminosité et la couleur de tes DEL. Ensuite, change les DEL spécifiques qui s'allument.

~hint Dis-m'en plus!

-   Change la luminosité en modifiant le bloc `||fwdSensors:set ledRing brightness to ()||` ou en changeant le nombre de DEL qui s'allument!
-   Tu peux changer la couleur en cliquant sur l'ovale rouge et en choisissant une nouvelle couleur dans la grille. Choisis une couleur sécuritaire pour les tortues! Tu peux toujours la remettre en rouge plus tard!
-   Si ta lumière s'allume trop facilement, tu devras peut-être changer les nombres dans tes expressions!
-   N'oublie pas de télécharger ton code après chaque changement pour voir l'impact sur la lumière de plage.
    hint~

## Le temps du défi! @showdialog

Une grande partie de la protection des tortues sur les plages consiste à s'assurer que les lumières ne sont aussi brillantes que nécessaire. <br> Ayons _plus_ de contrôle sur l'intensité de nos DEL. En ce moment, notre lumière change selon 3 situations différentes. Que se passerait-il si nous en ajoutions quelques-unes de plus?

## Étape du défi 1

D'abord, clique sur le symbole + en bas du bloc `||logic:if then else||`. Cela créera une autre règle ou condition que le micro:bit peut évaluer.

```block
    if (fwdSensors.solar1.lightLevel() < 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (fwdSensors.solar1.lightLevel() >= 40 && fwdSensors.solar1.lightLevel() < 80) {
        fwdLights.ledRing1.setPixelColor(1, 0xff8000)
        fwdLights.ledRing1.setPixelColor(7, 0xff8000)
    } else if (false) {
    	
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape du défi 2

Ensuite, glisse deux blocs `||fwdSensors:solar1 light level %||` de la catégorie Sensors. Prends deux blocs de comparaison `||logic:0 < 0||` et un opérateur `||logic:and||` de la catégorie Logic. <br> Essaie d'assembler ces blocs pour créer une expression qui peut être évaluée dans notre condition vide. Vérifie l'ampoule pour la réponse!

```block
    if (fwdSensors.solar1.lightLevel() < 40) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (fwdSensors.solar1.lightLevel() >= 40 && fwdSensors.solar1.lightLevel() < 80) {
        fwdLights.ledRing1.setPixelColor(1, 0xff8000)
        fwdLights.ledRing1.setPixelColor(7, 0xff8000)
    } else if (fwdSensors.solar1.lightLevel() < 0 && fwdSensors.solar1.lightLevel() < 0) {
    	
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape du défi 3

Change les nombres et les opérateurs de comparaison dans tes expressions pour t'assurer que les DEL répondent à tous les niveaux de lumière environnementale. Vérifie l'ampoule pour un exemple, mais sens-toi libre de choisir tes propres nombres!

```block
    if (fwdSensors.solar1.lightLevel() < 25) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (fwdSensors.solar1.lightLevel() >= 25 && fwdSensors.solar1.lightLevel() < 50) {
        fwdLights.ledRing1.setPixelColor(1, 0xff8000)
        fwdLights.ledRing1.setPixelColor(7, 0xff8000)
    } else if (fwdSensors.solar1.lightLevel() >= 50 && fwdSensors.solar1.lightLevel() < 75) {
    	
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape du défi 4

Que devrait-il se passer si cette nouvelle expression est évaluée comme vraie? <br> Eh bien, nous voulons créer une lumière _très_ faible. Il y a plusieurs façons de faire cela, alors essaie! Après avoir testé ton idée, vérifie l'ampoule pour notre solution. En quoi est-elle différente de la tienne?

```block
    if (fwdSensors.solar1.lightLevel() < 25) {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    } else if (fwdSensors.solar1.lightLevel() >= 25 && fwdSensors.solar1.lightLevel() < 50) {
        fwdLights.ledRing1.setPixelColor(1, 0xff8000)
        fwdLights.ledRing1.setPixelColor(7, 0xff8000)
    } else if (fwdSensors.solar1.lightLevel() >= 50 && fwdSensors.solar1.lightLevel() < 75) {
        // @highlight
        fwdLights.ledRing1.setPixelColor(1, 0xff8000)


    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape du défi 5

Maintenant nos DEL répondent très sensiblement aux différents niveaux de lumière environnementale. Peux-tu penser à autre chose que nous pourrions utiliser pour contrôler les lumières de plage?

~hint Dis-m'en plus!

-   Nous pourrions programmer les DEL pour qu'elles s'allument seulement quand des gens sont à proximité! Les capteurs sonar détectent la distance des objets dans leur environnement. Nous pouvons utiliser cette technologie pour détecter la proximité d'une personne à la lumière de plage!
-   Connecte le capteur sonar à ton projet et essaie d'écrire ta propre instruction conditionnelle pour vérifier si des gens sont à proximité.
-   N'oublie pas de télécharger et de tester ton code au fur et à mesure!
    hint~

## Étape du défi 6

Nous voulons savoir si des gens sont proches _avant_ de penser aux niveaux de lumière environnementale.<br>

Nous aurons besoin d'une autre instruction conditionnelle pour cela. Glisse un autre bloc `||logic:if then else||` dans l'espace de travail. Entoure-le d'une autre boucle `||basic:forever||` pour l'instant.

~hint Dis-m'en plus!

-   Si tu places ton instruction conditionnelle dans l'espace de travail sans boucle `||basic:forever||`, elle sera hachurée parce que le micro:bit ne sait pas quand évaluer la question.
-   Quand nous la mettons dans une boucle, cela devient logique pour le micro:bit, et en bonus, nous voyons mieux les blocs.
    hint~

```blocks
basic.forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
```

## Étape du défi 7

Maintenant nous devons créer une nouvelle expression pour voir si des gens sont plus proches que 0,1 m (10 cm) de notre lumière de plage. <br>
Glisse un bloc `||logic:0 < 0||` de la catégorie Logic. Ajoute un bloc `||fwdSensors:sonar1 distance (m)||` du côté gauche de ce bloc. Change le côté droit pour 0,1.

```blocks
basic.forever(function () {
    if (fwdSensors.sonar1.distance() < 0.1){
    	
    } else {
    	
    }
})
```

## Étape du défi 8

Les lumières devraient être éteintes s'il n'y a personne sur la plage. Pour ce faire, ajoute un bloc `||fwdSensors:set all ledRing LEDs to black||` après `||logic:else||`.

```blocks
basic.forever(function () {
    if (fwdSensors.sonar1.distance() < 0.1) {
    	
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape du défi 9

Dès que quelqu'un s'approche de la lumière de plage (< 10 cm), nous voulons commencer à évaluer _combien_ de lumière est nécessaire. Cela dépendra de l'obscurité à l'extérieur.<br>
Nous avons déjà fait cela! Nous pouvons glisser nos instructions conditionnelles originales à l'intérieur de cette nouvelle instruction conditionnelle.

~hint Dis-m'en plus!

-   Cela s'appelle une **conditionnelle imbriquée**. La première conditionnelle doit être vraie pour que l'une des conditions imbriquées soit testée.
-   Autrement dit, les expressions solaires ne seront évaluées que si des gens sont proches. Sinon, le micro:bit passe directement à l'instruction else finale et garde les DEL éteintes.
-   N'oublie pas de supprimer la boucle `||basic:forever||` supplémentaire maintenant que nous en avons terminé avec elle.
    hint~

```blocks
basic.forever(function () {
    if (fwdSensors.sonar1.distance() < 0.1) {
        // @highlight
        if (fwdSensors.solar1.lightLevel() < 25) {
            fwdLights.ledRing1.setAllPixelsColor(0xff8000)
        } else if (fwdSensors.solar1.lightLevel() >= 25 && fwdSensors.solar1.lightLevel() < 50) {
            fwdLights.ledRing1.setPixelColor(1, 0xff8000)
            fwdLights.ledRing1.setPixelColor(7, 0xff8000)
        } else if (fwdSensors.solar1.lightLevel() >= 50 && fwdSensors.solar1.lightLevel() < 75) {
            fwdLights.ledRing1.setPixelColor(1, 0xff8000)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0x000000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Explore

Débranche ta lumière de l'ordinateur et essaie de te déplacer à différents endroits. Comment la lumière réagit-elle? <br> Si rien ne se passe, que devrions-nous changer?

~hint Dis-m'en plus!

-   Si la lumière ne réagit pas, c'est peut-être parce que ta pièce est trop lumineuse ou parce que rien n'est proche du capteur sonar. Dans les deux cas, la lumière reste éteinte pour sauver les tortues!
-   Tu pourrais essayer de trouver une pièce plus sombre, approcher quelque chose du capteur sonar, ou changer les valeurs dans les expressions pour que la lumière se déclenche plus facilement.
    hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

## Réflexion @showdialog

Pense à quelque chose dans ce projet qui t'a mis au défi. <br>Comment as-tu surmonté ce défi? Comment cela t'a-t-il fait sentir?

## Réflexion @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

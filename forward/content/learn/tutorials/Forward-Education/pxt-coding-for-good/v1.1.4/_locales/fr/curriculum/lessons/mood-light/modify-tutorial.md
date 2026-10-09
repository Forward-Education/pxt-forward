# Lampe d'humeur – Tutoriel de modification

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
input.onButtonPressed(Button.A, function () {
    Mood = "Happy"
})
input.onButtonPressed(Button.B, function () {
    Mood = "Frustrated"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Mood = "Calm"
})
input.onButtonPressed(Button.AB, function () {
    Mood = ""
})
let Mood = ""
fwdLights.ledRing1.setBrightness(10)
Mood = ""
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
    else if (Mood == ""){
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
/* What other moods do you feel in your classroom? Write 3 below:
1. 
2. 
3. 
 */

/* Describe your algorithm below. How does your new mood work, from button press to spinning pattern?
Example: When you press A and B, the mood changes to ___, the LEDs are set to ___, then a loop keeps ___.
 */

/* Reflect:
Q1:
Q2: */

```

## Lampe d'humeur - Tutoriel de modification @showdialog

Dans ce tutoriel, tu vas **modifier** le code pour ajouter une nouvelle humeur et lui donner son propre motif animé.

1. **Construis** : Assemble ta lampe d'humeur

2. **Connecte** : Couple ton micro:bit et télécharge le code de départ

3. **Modifie** : Nomme une nouvelle humeur, donne-lui un motif et teste tes changements

## Préparation : branche les câbles @showdialog

IMPORTANT ! Assure-toi que ta lampe d'humeur est assemblée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Brancher le câble USB au micro:bit et à l'ordinateur, allumer la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Préparation : petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Explore : comment le programme fonctionne

Prends un moment pour regarder le code de départ dans ton espace de travail. Que fait chaque partie de ton programme ?

~hint Dis-m'en plus !

* Chaque ``||input:On Button Pressed||`` et ``||input:On Logo Event||`` est un **événement** qui donne un mot différent à la **variable** ``||variables:Mood||``.

* La **boucle** ``||basic:Forever||`` vérifie sans cesse ``||variables:Mood||`` et utilise la **sélection** pour décider de quelle couleur l'``||fwdLights:LED Ring||`` doit être.

* Pour l'instant, il y a trois humeurs : Happy (joyeuse), Calm (calme) et Frustrated (frustrée).

hint~

## Modifie : quelles autres humeurs ressens-tu ?

Happy, Calm et Frustrated ne sont pas les seules humeurs que l'on ressent dans une salle de classe.

Dans le commentaire de ton espace de travail, écris 3 humeurs de plus, avec une couleur que tu pourrais utiliser pour représenter chacune.

N'oublie pas d'expliquer **pourquoi** cette couleur représente ce sentiment.

~hint Dis-m'en plus !

Il n'y a pas de mauvaise réponse ici ! Un exemple pourrait être :
* **Excited (enthousiaste) :** Orange, ça donne une impression de grande énergie et de fun !

hint~

## Modifie : nomme ta nouvelle humeur

Ajoutons une nouvelle humeur à notre lampe ! Choisis une des trois idées que tu viens de trouver.

Dans ton espace de travail, trouve l'événement ``||input: On Buttons A+B Pressed||``. Écris l'humeur choisie entre les guillemets vides, là où ``||variables:Mood||`` est définie.

```blocks
input.onButtonPressed(Button.AB, function () {
    // @highlight
    Mood = "Excited"
})
```

## Modifie : tes conditions d'humeur

Ensuite, trouve la condition ``||logic:Else If||`` incomplète dans ta boucle ``||basic:Forever||``.

Écris la même humeur que celle de ton **événement** ``||input: On Buttons A+B Pressed||`` entre les guillemets vides de cette branche. Puis choisis une nouvelle couleur pour ton humeur dans le bloc ``||fwdLights:Set All LEDRing Pixels||``.

Clique sur ``|Télécharger|``. Que se passe-t-il pour l'``||fwdLights:LED Ring||`` quand tu appuies sur ``||input:A+B Buttons||`` ?

~hint Dis-m'en plus !

Ton micro:bit a suivi les instructions du bloc ``||fwdLights:Set All LEDRing Pixels||`` et s'est allumé de ta nouvelle couleur !

Si tu n'avais pas encore changé cette couleur, l'``||fwdLights:LED Ring||`` aurait plutôt **éteint** ses 8 pixels.

hint~

```blocks
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (Mood == "Excited") {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    }
})
```

## Modifie : ajoute un détail de pixel

Personnalisons notre émotion encore plus !

1. Prends un bloc ``||fwdLights:Set LEDRing Pixel [1]||`` dans le tiroir ``||fwdLights:Lights||``.

2. Place le bloc sous le bloc ``||fwdLights:Set All LEDRing Pixels||`` de ta nouvelle humeur, dans la boucle ``||basic:Forever||``.

3. Choisis une deuxième couleur pour représenter ta nouvelle émotion.

4. Clique sur ``|Télécharger|``.

Que se passe-t-il maintenant quand tu appuies sur ``||input:A+B Buttons||`` ?

~hint Dis-m'en plus !

Ton ``||fwdLights:LED Ring||`` affiche maintenant deux couleurs !

La séquence de ton programme est maintenant :

1. **Les 8 pixels** de l'``||fwdLights:LED Ring||`` s'allument de la première couleur (par exemple orange)

2. **Le pixel 1** de l'``||fwdLights:LED Ring||`` passe à la deuxième couleur (par exemple rose)

Le programme répète cette séquence encore et encore jusqu'à ce qu'une nouvelle ``||variables:Mood||`` soit définie.

hint~

```blocks
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (Mood == "Excited") {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
        // @highlight
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0080)
    }
})
```

## Modifie : fais bouger le motif

Maintenant, faisons bouger notre motif !

Fais glisser un bloc ``||fwdLights:Rotate Pattern||`` depuis le tiroir ``||fwdLights:Lights||`` et place-le sous ton bloc ``||fwdLights:Set LEDRing Pixel [1]||``.

Clique à nouveau sur ``|Télécharger|``. Remarques-tu quelque chose de différent quand tu appuies sur ``||input:A+B Buttons||`` ?

~hint Dis-m'en plus !

Le pixel rose a tourné du pixel 1 au pixel 2 !

hint~

```blocks
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (Mood == "Excited") {
        fwdLights.ledRing1.setAllPixelsColor(0xff8000)
        fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0080)
        // @highlight
        fwdLights.ledRing1.rotate(1)
    }
})
```

## Examine : pourquoi ça ne bouge pas ?

Tout le code placé dans une boucle ``||basic:Forever||`` s'exécute tant que ton micro:bit est alimenté.

Pourquoi penses-tu que le pixel rose de ton ``||fwdLights:LED Ring||`` ne tourne jamais au-delà du pixel 2 ?

~hint Dis-m'en plus !

Chaque fois que la **boucle** ``||basic:Forever||`` s'exécute, elle fait ces trois choses en **séquence** :

1. Mettre **tous les pixels** de l'``||fwdLights:LED Ring||`` à la première couleur (par exemple orange)

2. Mettre **le pixel 1** de l'``||fwdLights:LED Ring||`` à la deuxième couleur (par exemple rose)

3. ``||fwdLights:Rotate||`` le motif d'**1 pixel** (le rose passe du pixel 1 au pixel 2)

Puis elle recommence, remettant les **8 pixels** à leurs couleurs d'origine, le rose revenant au pixel 1, avant que tu puisses le voir avancer plus loin.

hint~

## Modifie : corrige le bogue

Changeons notre code pour qu'il fasse tourner notre motif en douceur, tout autour de l'``||fwdLights:LED Ring||``.

1. Fais glisser tes blocs ``||fwdLights:Set All LEDRing Pixels||`` et ``||fwdLights:Set LEDRing Pixel [1]||`` dans ton **événement** ``||input:On Buttons A+B Pressed||``.

2. Ajoute un bloc ``||basic:Pause||`` depuis le tiroir ``||basic:Basic||`` et place-le sous le bloc ``||fwdLights:Rotate Pattern||`` dans la boucle ``||basic:Forever||``.

3. Clique sur ``|Télécharger|`` et teste une dernière fois.

~hint Dis-m'en plus !

Maintenant, quand tu appuies sur ``||input:A+B Buttons||``, ton programme met à jour ``||variables:Mood||`` et règle les couleurs de l'``||fwdLights:LED Ring||`` une seule fois.

Ensuite, la **boucle** ``||basic:Forever||`` ne fait que faire tourner le motif, avec une courte pause entre chaque étape.

Si ta lampe d'humeur ne réagit pas du tout quand tu appuies sur ``||input:A+B Buttons||``, vérifie d'abord ton matériel. Est-ce que tout est bien branché ? Si elle réagit mais ne bouge pas comme tu t'y attends, c'est un problème de code, comme celui que nous venons de corriger.

hint~

```blocks
input.onButtonPressed(Button.AB, function () {
    Mood = "Excited"
    // @highlight
    fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    // @highlight
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0080)
})
```

```blocks
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (Mood == "Excited") {
        // @highlight
        fwdLights.ledRing1.rotate(1)
        // @highlight
        basic.pause(100)
    }
})
```

## Examine : décris ton algorithme

Dans le commentaire de ton espace de travail, décris tout ce qui se passe dans ton programme, du moment où quelqu'un appuie sur ``||input:A+B Buttons||`` jusqu'au motif qui tourne sur l'``||fwdLights:LED Ring||``.

Explique-le assez bien pour qu'un ou une partenaire puisse suivre sans regarder ton code.

~hint Dis-m'en plus !

Par exemple : quand tu appuies sur les deux boutons, ``||variables:Mood||`` devient Excited, et les couleurs des pixels de l'``||fwdLights:LED Ring||`` sont réglées une seule fois.

Ensuite, la boucle ``||basic:Forever||`` vérifie la condition d'humeur, avant de faire tourner le motif, un pixel à la fois.

hint~

## Réflexion

Dans ce tutoriel, tu as ajouté une nouvelle humeur à ta lampe d'humeur et découvert pourquoi son motif ne tournait pas. Note tes réponses aux questions ci-dessous sous forme de commentaires de code dans l'espace de travail.

1. Comment l'utilisation de motifs, et pas seulement de couleurs uniques, peut-elle aider les gens à communiquer plus clairement ?

2. Quels autres motifs créerais-tu pour personnaliser encore plus ta lampe d'humeur ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ce que tu as changé :

- ``||input: On Buttons A+B Pressed||`` : un nouvel **événement**, qui donne à ``||variables:Mood||`` la valeur de ton choix

- ``||logic:Else If||`` : une nouvelle branche, appelée **condition**, qui réagit à ta nouvelle ``||variables:Mood||``

- ``||fwdLights:Set All LEDRing Pixels||`` et ``||fwdLights:Set LEDRing Pixel [1]||`` : règlent le motif de couleurs de ton humeur une seule fois, en **séquence**

- ``||fwdLights:Rotate Pattern||`` : laissé seul dans la **boucle** ``||basic:Forever||``, pour qu'il puisse faire tourner ton motif en douceur

À l'étape suivante, clique sur le bouton ``|Terminé|`` pour terminer.

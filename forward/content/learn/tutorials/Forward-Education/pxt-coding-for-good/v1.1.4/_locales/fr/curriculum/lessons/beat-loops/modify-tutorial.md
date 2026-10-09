# Boîte à rythmes – Tutoriel de modification

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    music.changeTempoBy(20)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    music.changeTempoBy(-20)
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    music.setTempo(200)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (On) {
        On = false
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    } else {
        On = true
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    }
})
let On = false
music.setTempo(200)
On = true
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.forever(function () {
    if (On) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
    }
})
loops.everyInterval(5000, function () {
    if (On) {
    	
    }
})

/* Reflect:
Q1:
Q2:
Q3:
Q4:
Q5: */
```

## Boîte à rythmes - Tutoriel de modification @showdialog

Dans ce tutoriel, tu vas **modifier** ta boîte à rythmes pour ajouter une nouvelle couche sonore qui réagit à la distance de ta main, grâce au capteur sonar.

1. **Construis** : Assemble ta boîte à rythmes

2. **Connecte** : Couple ton micro:bit et télécharge le code de départ

3. **Modifie** : Ajoute une couche contrôlée par la distance et teste-la

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Préparation : Branche les câbles @showdialog

IMPORTANT ! Assure-toi que ta boîte à rythmes est assemblée, y compris le capteur sonar, et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Branche le câble USB au micro:bit et à l'ordinateur, allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Explore : Comment fonctionne le programme

Regarde le code de départ. Ta boucle ``||basic:Forever||`` joue un rythme régulier de type boum-boum-tchak, et le ``||fwdButtons:Dial||`` change son tempo.

Il y a aussi une nouvelle boucle vide ``||loops:Every 5000 ms||`` tout en bas. Que penses-tu qu'une deuxième boucle comme celle-ci pourrait te permettre de faire ?

~hint Dis-m'en plus !

La boucle ``||basic:Forever||`` fait continuer ton rythme. La boucle vide ``||loops:Every 5000 ms||`` est une **deuxième boucle** qui tourne avec son propre minuteur, toutes les 5 secondes, en même temps que ton rythme. Tu vas l'utiliser pour ajouter une nouvelle couche sonore.

hint~

## Modifie : Une boucle sur minuteur

Tes deux boucles vont tourner en même temps : le rythme dans ``||basic:Forever||``, et la couche dans ``||loops:Every 5000 ms||``.

À l'intérieur de la boucle ``||loops:Every 5000 ms||``, la vérification ``||logic:If On||`` est déjà là, donc ta couche ne joue que lorsque le rythme est activé.

~hint Dis-m'en plus !

Faire tourner la couche dans sa propre boucle est ce qui lui permet de jouer *sans* interrompre ton rythme. Deux boucles séparées peuvent tourner côte à côte, chacune selon son propre horaire.

hint~

## Modifie : Détecte la distance

Maintenant, utilisons le capteur sonar pour décider ce que fait la couche.

À l'intérieur du ``||logic:If On||`` de la boucle ``||loops:Every 5000 ms||``, ajoute un ``||logic:If ... else if||`` qui vérifie le sonar :

1. **Si** la distance du sonar dépasse **0,2**, **en dessous** (une main est proche)

2. **Sinon si** la distance du sonar dépasse **0,2**, **au-dessus** (rien de proche)

~hint Dis-m'en plus !

Le sonar mesure la distance en **mètres**, donc 0,2 veut dire environ 20 cm. « En dessous de 0,2 » veut dire que quelque chose est à moins de 20 cm, comme ta main. « Au-dessus de 0,2 » veut dire que l'espace est libre.

hint~

```blocks
loops.everyInterval(5000, function () {
    if (On) {
        // @highlight
        if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {

        // @highlight
        } else if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Over)) {

        }
    }
})
```

## Modifie : Superpose les sons

Donne à chaque choix son propre son et sa propre couleur, joués **en arrière-plan** pour que ton rythme continue :

1. Quand une main est **proche** : joue un son aigu et mets l'``||fwdLights:LED Ring||`` en cyan

2. Quand l'espace est **libre** : joue un son grave et mets l'``||fwdLights:LED Ring||`` en rouge

``|Télécharger|`` ton code et essaye-le.

~hint Dis-m'en plus !

« Jouer le son **en arrière-plan** » démarre le son et laisse le programme continuer, donc la couche joue par-dessus ton rythme au lieu de le mettre en pause.

hint~

```blocks
loops.everyInterval(5000, function () {
    if (On) {
        if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
            // @highlight
            music.play(music.createSoundExpression(WaveShape.Noise, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            // @highlight
            fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
        } else if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Over)) {
            // @highlight
            music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            // @highlight
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    }
})
```

## Exécute : Fais signe pour la couche

Regarde et écoute. Toutes les 5 secondes, approche ta main du sonar, puis éloigne-la.

Que se passe-t-il avec le son et l'``||fwdLights:LED Ring||`` à chaque fois ?

~hint Dis-m'en plus !

Toutes les 5 secondes, la couche vérifie le sonar une fois. Main proche : un son aigu et un anneau cyan. Espace libre : un son grave et un anneau rouge. Ton rythme continue pendant tout ce temps.

hint~

## Explore : Pourquoi une deuxième boucle ?

Ta couche vit dans sa propre boucle ``||loops:Every 5000 ms||`` et joue son son **en arrière-plan**.

Que penses-tu qu'il arriverait à ton rythme si tu mettais ce même son dans la boucle ``||basic:Forever||`` en utilisant « jouer jusqu'à la fin » à la place ?

~hint Dis-m'en plus !

Cela interromprait ton rythme. « Jouer jusqu'à la fin » met tout en pause jusqu'à ce que le son se termine, donc ton rythme régulier bégaierait chaque fois que la couche jouerait. Une boucle séparée plus « en arrière-plan » permet aux deux de tourner sans accroc.

hint~

## Modifie : Change le minuteur

Change la valeur de ``||loops:Every 5000 ms||`` pour un nombre plus petit, comme **1000**. ``|Télécharger|`` et teste.

Comment ressens-tu la couche maintenant, comparé à toutes les 5 secondes ?

~hint Dis-m'en plus !

À 1000 ms, la couche vérifie le sonar chaque seconde, donc elle réagit à ta main beaucoup plus vite et se répète plus souvent. Un nombre plus grand en fait un accent lent et occasionnel ; un nombre plus petit en fait une couche rapide et réactive.

hint~

## Réfléchis

Dans ce tutoriel, tu as **modifié** ta boîte à rythmes en ajoutant une deuxième boucle qui superpose un son contrôlé par le sonar à ton rythme. Note tes réponses dans l'espace de travail.

1. Pourquoi garder le rythme et la couche dans deux boucles séparées permet-il aux deux de jouer en même temps ?

2. Tu as joué la couche « en arrière-plan » au lieu de « jusqu'à la fin ». Qu'est-ce que « jusqu'à la fin » aurait fait à ton rythme ?

3. La distance du sonar est un petit nombre comme 0,2. Que signifie 0,2, et comment as-tu choisi ton seuil ?

4. Comment le passage du minuteur de 5000 à 1000 a-t-il changé la sensation de ta boîte à rythmes ?

5. Quelle couche ou règle supplémentaire ajouterais-tu si tu continuais à construire, et qu'est-ce qui la contrôlerait ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ce que tu as ajouté :

- ``||loops:Every 5000 ms||`` : une deuxième **boucle** qui superpose un son sur son propre minuteur, en parallèle de ton rythme

- ``||fwdSensors:Sonar||`` : détecte à quelle distance se trouve ta main et choisit quelle couche joue

- ``||logic:If / Else If||`` : une **sélection** qui choisit le son « proche » ou le son « libre »

- ``||music:Play Sound in Background||`` : permet à la couche de jouer sans arrêter le rythme

- ``||fwdLights:LED Ring||`` : cyan quand une main est proche, rouge quand l'espace est libre

À l'étape suivante, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

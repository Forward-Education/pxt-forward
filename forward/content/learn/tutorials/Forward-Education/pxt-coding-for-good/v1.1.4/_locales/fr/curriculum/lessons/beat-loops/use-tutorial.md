# Beat Box – Tutoriel d'utilisation

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

/* Reflect:
Q1:
Q2: */
```

## Beat Box - Tutoriel d'utilisation @showdialog

Dans ce tutoriel, tu vas **utiliser** un programme pour explorer le fonctionnement de ta Beat Box.

1. **Construis** : Assemble ta Beat Box

2. **Connecte** : Couple ton micro:bit et télécharge le code de départ

3. **Utilise** : Lance le programme et explore le code

## Préparation : petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Préparation : branche les câbles @showdialog

IMPORTANT ! Assure-toi que ta Beat Box est assemblée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Brancher le câble USB au micro:bit et à l'ordinateur, allumer la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Prédis et teste : comment ce programme fonctionne-t-il ?

Regarde le code dans ton espace de travail. Que penses-tu qu'il se passera quand tu le téléchargeras sur ton micro:bit ?

Clique sur ``|Télécharger|`` et essaye ton code !

~hint Dis-m'en plus !

Quand ton programme démarre, ``||variables:On||`` est déjà à vrai, donc ta Beat Box commence à jouer tout de suite : l'``||fwdLights:LED Ring||`` s'allume en blanc, et un rythme régulier kick-kick-hi-hat se répète encore et encore.

hint~

## Prédis et teste : tourner le sélecteur

Essaye de tourner le ``||fwdButtons:Dial||`` dans un sens. Que penses-tu qu'il va se passer ?

~hint Dis-m'en plus !

Tourner le ``||fwdButtons:Dial||`` change le tempo de ton rythme, grâce à ``||music:Change Tempo By||``. Le tourner dans un sens accélère le rythme, dans l'autre sens le ralentit.

hint~

## Examine : le bouton du sélecteur

Que se passe-t-il quand tu appuies sur le ``||fwdButtons:Dial Button||`` ? Pourquoi ? De quoi est-ce un exemple ?

~hint Dis-m'en plus !

Appuyer sur le ``||fwdButtons:Dial Button||`` remet ton tempo à 200, grâce à ``||music:Set Tempo||``. C'est un exemple d'**événement** : du code qui ne s'exécute qu'au moment où quelque chose de précis se produit, comme un appui sur un bouton.

hint~

## Prédis et teste : toucher le logo

Que se passe-t-il pour l'``||fwdLights:LED Ring||`` quand tu appuies sur le logo du micro:bit ?

~hint Dis-m'en plus !

Toucher le logo fait passer ``||variables:On||`` de vrai à faux, ou de faux à vrai. L'``||fwdLights:LED Ring||`` s'éteint quand tu touches le logo pendant qu'il est allumé, et se rallume si tu le touches à nouveau.

hint~

## Identifie : l'itération

L'**itération**, c'est quand le programme répète les mêmes étapes encore et encore.

Quelle partie de ton code utilise l'**itération** ?

~hint Dis-m'en plus !

La **boucle** ``||basic:Forever||`` continue de jouer les trois mêmes sons, encore et encore, tant que ``||variables:On||`` est vrai. Tu as déjà entendu cette répétition la première fois que tu as lancé ton programme.

hint~

```blocks
// @highlight
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
```

## Examine : regarde la boucle tourner

Ta boucle ``||basic:Forever||`` joue les trois mêmes sons encore et encore, sans que tu aies besoin de les écrire plus d'une fois.

Observe ta Beat Box pendant 10 secondes. Combien de fois le motif complet kick-kick-hi-hat se répète-t-il ?

~hint Dis-m'en plus !

Le nombre exact dépend de ton tempo : un tempo plus rapide signifie plus de répétitions dans les mêmes 10 secondes. C'est la puissance d'une boucle : un petit ensemble d'instructions peut se répéter autant de fois que nécessaire, sans que tu écrives jamais deux fois le même code.

hint~

## Identifie : la sélection et la séquence

La **sélection**, c'est quand le programme vérifie quelque chose avant de décider quoi faire. La **séquence**, c'est quand il exécute les étapes dans l'ordre, l'une après l'autre.

Regarde la boucle ``||basic:Forever||``. Que vérifie-t-elle avant de jouer le rythme ? Dans quel ordre les trois sons sont-ils joués ?

~hint Dis-m'en plus !

Le bloc ``||logic:If||`` vérifie d'abord ``||variables:On||`` : c'est la **sélection**. S'il est vrai, le programme joue trois sons dans cette **séquence** :

1. Un son de kick, puis un silence

2. Un deuxième son de kick, puis un silence

3. Un son de hi-hat, puis un silence plus long

hint~

```blocks
basic.forever(function () {
    // @highlight
    if (On) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
    }
})
```
## Examine : le son et la lumière ensemble

Ta Beat Box produit à la fois du son et de la lumière. D'où vient l'énergie de chacun ?

~hint Dis-m'en plus !

Les deux viennent de la même énergie électrique : le haut-parleur du micro:bit la transforme en énergie sonore, et l'``||fwdLights:LED Ring||`` la transforme en énergie lumineuse. Une seule source d'énergie, deux types d'énergie en sortie.

hint~

## Examine : des boucles à la main

Avant le code, la musicienne Delia Derbyshire créait des boucles à la main : elle enregistrait un son sur une bande magnétique, puis la coupait et collait les extrémités en cercle pour que le son se rejoue encore et encore. C'est comme ça qu'elle a créé le thème original de Doctor Who.

Ta boucle ``||basic:Forever||`` répète ton rythme de la même façon. Que fait ton code automatiquement que Delia devait faire à la main avec des ciseaux et du ruban adhésif ?

~hint Dis-m'en plus !

La boucle de bande de Delia et ta boucle ``||basic:Forever||`` font le même travail : répéter un son sans refaire le travail à chaque fois. Elle coupait et collait la bande à la main ; ton code répète les étapes pour toi, et tu peux changer le tempo instantanément avec le ``||fwdButtons:Dial||``.

hint~

## Examine : la forme d'un son

Les musiciens électroniques comme Delia changent le *ressenti* de la musique en choisissant différentes **ondes sonores**. Ton rythme fait la même chose. Regarde attentivement les blocs ``||music:Play Sound||`` dans ta boucle ``||basic:Forever||``.

Quelle **forme d'onde** chaque son utilise-t-il ? En quoi le kick semble-t-il différent du hi-hat ?

~hint Dis-m'en plus !

Tes deux kicks utilisent une onde **carrée (Square)**, qui sonne solide et percutante. Ton hi-hat utilise une onde de **bruit (Noise)**, qui ressemble à une rafale de parasites, sèche et grésillante. Des formes d'onde différentes créent des ressentis différents, même au même volume : c'est comme ça que la musique électronique installe une ambiance.

hint~

## Examine : pourquoi est-ce le logiciel qui décide ?

Ton ``||fwdButtons:Dial||`` ne signale qu'une direction, dans le sens horaire ou antihoraire. Pourquoi le tempo change-t-il exactement de 20 à chaque fois, plutôt que d'une autre valeur ?

~hint Dis-m'en plus !

Le sélecteur lui-même ne connaît rien à la musique ni au tempo, il signale seulement dans quel sens il a tourné. C'est le logiciel, le code que tu as écrit, qui décide ce que cette direction signifie : ici, changer le tempo de 20.

hint~

## Réflexion

Dans ce tutoriel, tu as utilisé un **événement**, l'**itération**, la **sélection** et la **séquence** pour construire une Beat Box qui garde le tempo et réagit au sélecteur. Note tes réponses dans l'espace de travail.

1. Quand tu touches le logo, la lumière s'éteint tout de suite, mais le rythme termine le motif en cours avant de se taire. Pourquoi penses-tu que la lumière et le son s'arrêtent à des moments différents ?

2. À quel genre de chanson ou d'ambiance ce rythme te fait-il penser ? Que changerais-tu pour qu'il sonne différemment ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ton programme :

- ``||fwdButtons:Dial Button||`` : un **événement** qui remet le tempo à 200 dès que tu appuies dessus

- ``||basic:Forever||`` : une **boucle** qui répète les trois mêmes sons, en utilisant la **sélection** pour vérifier si le rythme est activé

- ``||fwdButtons:Dial||`` : change le tempo en temps réel quand tu le tournes

- ``||variables:On||`` : garde en mémoire si ta Beat Box joue ou reste silencieuse

- ``||input:On Logo Event||`` : un événement qui allume ou éteint le rythme et la lumière quand tu touches le logo

À l'étape suivante, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

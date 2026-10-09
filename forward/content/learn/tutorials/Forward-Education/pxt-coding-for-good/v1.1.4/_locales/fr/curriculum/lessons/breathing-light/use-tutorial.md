# Lumière respirante – Tutoriel d'utilisation

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.8
```

```template
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (LightOn) {
        LightOn = false
    } else {
        LightOn = true
    }
})
let LightOn = false
let Loudness = 0
LightOn = true
basic.forever(function () {
    if (LightOn) {
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Loudness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})

/* Reflect:
Q1:
Q2: */
```

## Lumière respirante - Tutoriel d'utilisation @showdialog

Dans ce tutoriel, tu vas **utiliser** un programme pour explorer le fonctionnement de ta Lumière respirante.

1. **Construis** : assemble ta Lumière respirante

2. **Connecte** : couple ton micro:bit et télécharge le code de départ

3. **Utilise** : lance le programme et explore le code

## Préparation : petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Préparation : branche les câbles @showdialog

IMPORTANT ! Assure-toi que ta Lumière respirante est assemblée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connecte le câble USB au micro:bit et à l'ordinateur, allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Explore : observe le programme

Allume ta Lumière respirante dans une pièce calme et regarde le ``||fwdLights:LED Ring||``.

De quelle couleur est-il ? Reste-t-il parfaitement immobile, ou quelque chose change-t-il ?

~hint Dis-m'en plus !

Ton ``||fwdLights:LED Ring||`` brille en bleu, calme et stable.

Dans une pièce calme, seulement un peu d'énergie sonore atteint le microphone, donc la lumière reste douce.

hint~

## Prédis et essaie : toucher le logo

Regarde le code ``||input:On Logo Event||`` dans ton espace de travail.

**Prédis :** ce qui arrivera selon toi au ``||fwdLights:LED Ring||`` si :

1. Tu appuies sur le ``||input:Logo||`` une fois

2. Tu appuies sur le ``||input:Logo||`` une deuxième fois

Essaye ! Ta prédiction était-elle bonne ?

~hint Dis-m'en plus !

Le bloc ``||input:On Logo Event||`` est un **événement** ! Il attend que tu touches le logo, puis il s'exécute.

Toucher le ``||input:Logo||`` pendant que le ``||fwdLights:LED Ring||`` est allumé éteint la lumière.

Si tu appuies encore, la lumière se rallume.

hint~

```blocks
// @highlight
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (LightOn) {
        LightOn = false
    } else {
        LightOn = true
    }
})
```

## Prédis et essaie : taper des mains

**Prédis :** que va-t-il arriver au ``||fwdLights:LED Ring||`` si tu tapes des mains une fois, juste à côté de ta Lumière respirante ?

Tape des mains une fois, juste à côté de ta Lumière respirante. Observe le ``||fwdLights:LED Ring||``. Ta prédiction était-elle bonne ?

~hint Dis-m'en plus !

Un applaudissement envoie une bouffée d'énergie sonore dans le microphone, ce qui met la variable ``||variables:Loudness||`` à un nombre supérieur à 1.5.

Le ``||fwdLights:LED Ring||`` devient rouge un instant, puis redevient bleu quand la pièce est de nouveau calme.

hint~

```blocks
basic.forever(function () {
    if (LightOn) {
        // @highlight
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Loudness)
        // @highlight
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Identifie : la variable

Une **variable** stocke une information de ton programme qui peut changer. Il y a deux variables dans ce programme.

Regarde où se trouvent les variables dans ton programme, puis réponds aux questions ci-dessous pour chaque variable : (A) ``||variables:LightOn||``, (B) ``||variables:Loudness||``

1. Quelle information la variable stocke-t-elle ?

2. Quand cette information change-t-elle ?

~hint Dis-m'en plus !

A : ``||variables:LightOn||`` stocke si la lumière est allumée ou éteinte, vrai ou faux. L'information change quand tu appuies sur le ``||input:Logo||``.

B : ``||variables:Loudness||`` stocke le ``||input:Sound Level||`` capté par le microphone, et ``||math:Map||`` le convertit en une valeur entre 0 et 3. L'information change chaque fois que le programme s'exécute.

hint~

## Identifie : la séquence

La **séquence** veut dire que le programme exécute ses étapes dans l'ordre, l'une après l'autre, de haut en bas.

Regarde à l'intérieur de la boucle ``||basic:Forever||``, quand ``||variables:LightOn||`` est vrai. Que fait le programme en premier ? Que se passe-t-il juste après ?

~hint Dis-m'en plus !

La **séquence** du programme est :

1. Le microphone capte le ``||input:Sound Level||`` et le stocke dans la variable ``||variables:Loudness||``

2. La luminosité du ``||fwdLights:LED Ring||`` est réglée à la valeur de la variable ``||variables:Loudness||``

3. ``||logic:If||`` la valeur de ``||variables:Loudness||`` est supérieure à 1.5, le ``||fwdLights:LED Ring||`` passe au rouge

Si ces étapes s'exécutaient dans le désordre, la luminosité ou la couleur pourraient utiliser une ancienne valeur de ``||variables:Loudness||``.

hint~

```blocks
basic.forever(function () {
    if (LightOn) {
        // @highlight
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
         // @highlight
        fwdLights.ledRing1.setBrightness(Loudness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
        //@highlight
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Identifie : la sélection

La **sélection** veut dire que le programme vérifie des critères précis avant de décider quoi faire.

Regarde la boucle ``||basic:Forever||``. Quels critères le programme vérifie-t-il avant de décider ce que le ``||fwdLights:LED Ring||`` doit afficher ?

~hint Dis-m'en plus !

Il y a deux critères, l'un dans l'autre.

1. Est-ce que ``||variables:LightOn||`` est vrai ?

Seulement si c'est le cas, le programme fait un deuxième choix :

2. Est-ce que ``||variables:Loudness||`` est inférieur ou égal à 1.5 ?

hint~

```blocks
basic.forever(function () {
    if (LightOn) {
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Loudness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Identifie : l'itération

L'**itération** veut dire que le programme répète sans cesse les mêmes étapes.

Quelle partie de ton code utilise l'**itération** ?

~hint Dis-m'en plus !

La **boucle** ``||basic:Forever||`` ne s'arrête jamais de vérifier.

À chaque exécution, elle lit le bloc ``||input:Sound Level||`` pour capter l'énergie sonore de la pièce et la stocke dans la variable ``||variables:Loudness||``.

hint~

```blocks
// @highlight
basic.forever(function () {
    if (LightOn) {
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Loudness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Enquête : calme ou bruyant

Une Lumière respirante est censée être apaisante. Selon toi, pourquoi une pièce **calme** donne-t-elle un bleu apaisant, alors qu'un son **fort** donne un rouge d'alerte ?

~hint Dis-m'en plus !

Moins d'énergie sonore atteint le microphone, moins le programme a de quoi réagir : le ``||fwdLights:LED Ring||`` peut donc rester doux et stable, comme une respiration lente.

Une bouffée soudaine d'énergie sonore est un signal plus grand, donc le programme répond avec une couleur plus forte, plus alarmante. La réponse de la lumière correspond à la quantité d'énergie qu'elle capte. C'est ce qui la rend apaisante plutôt qu'aléatoire.

hint~

## Enquête : pourquoi utiliser une variable ?

Pourquoi le programme stocke-t-il la lecture du ``||input:Sound Level||`` dans la variable ``||variables:Loudness||``, au lieu de vérifier ``||input:Sound Level||`` deux fois dans la boucle ``||basic:Forever||`` ?

~hint Dis-m'en plus !

Stocker la lecture une seule fois dans la variable ``||variables:Loudness||`` garantit que les deux parties du programme, le réglage de la luminosité et le choix de la couleur, regardent toujours exactement la même lecture d'énergie sonore.

Si le programme vérifiait ``||input:Sound Level||`` deux fois, le son pourrait changer entre les deux vérifications. La couleur et la luminosité pourraient alors ne plus être d'accord.

hint~

## Réflexion

Dans ce tutoriel, tu as utilisé un **événement**, la **séquence**, la **sélection**, l'**itération** et deux **variables** pour construire une Lumière respirante qui réagit à l'énergie sonore. Note tes réponses dans l'espace de travail.

1. Pourquoi une pièce calme garde-t-elle la lumière apaisée, alors qu'un son fort la fait réagir ?

2. Quel autre son doux du quotidien ta Lumière respirante pourrait-elle détecter si tu l'essayais ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ton programme :

- ``||input:On Logo Event||`` : un **événement** qui allume ou éteint la lumière quand tu touches le logo

- ``||basic:Forever||`` : une **boucle** qui exécute ses étapes en **séquence**, transformant l'énergie sonore en une lecture ``||variables:Loudness||``

- ``||logic:If||`` : utilise la **sélection** pour vérifier si la lumière est allumée, puis le niveau de bruit de la pièce

- ``||fwdLights:LED Ring||`` : brille en bleu quand c'est calme, en rouge quand c'est bruyant, selon l'énergie sonore réelle

À la prochaine étape, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

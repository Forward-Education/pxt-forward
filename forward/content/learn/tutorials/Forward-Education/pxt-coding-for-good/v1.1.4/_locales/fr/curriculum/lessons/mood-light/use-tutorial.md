# Lampe d'humeur – Tutoriel d'utilisation

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
})

/* Reflect:
Q1:
Q2: */
```

## Tutoriel d'utilisation de la lampe d'humeur @showdialog

Dans ce tutoriel, tu vas **utiliser** un programme pour explorer comment fonctionne ta lampe d'humeur.

1. **Construis** : Assemble ta lampe d'humeur

2. **Connecte** : Couple ton micro:bit et télécharge le code de départ

3. **Utilise** : Exécute le programme et explore le code


## Préparation : Branche les câbles @showdialog

IMPORTANT ! Assure-toi que ta lampe d'humeur est assemblée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Branche le câble USB au micro:bit et à l'ordinateur, allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement en bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.


## Identifie : Les événements

Un **événement** s'exécute quand quelque chose de précis se produit, comme appuyer sur un bouton. Le code à l'intérieur de l'événement ne s'exécute que lorsque la condition est remplie.

Regarde ton code dans ton espace de travail : où un **événement** est-il utilisé ?

~hint Dis-m'en plus !

Le bloc ``||input:On Button Pressed||`` est un événement ! Il attend que tu appuies sur un bouton, puis il s'exécute.

hint~

```blocks
// @highlight
input.onButtonPressed(Button.A, function () {
    Mood = "Happy"
})
```

## Explore : Observe le programme

Maintenant que nous avons trouvé un événement, testons-le en vrai !

Débranche ta lampe d'humeur et allume-la. Regarde l'``||fwdLights:LED Ring||``.

Affiche-t-il une couleur, ou est-il éteint ?

~hint Dis-m'en plus !

L'``||fwdLights:LED Ring||`` reste éteint au début. Rien ne lui a encore dit quelle couleur afficher.

hint~

## Prédis : Humeur joyeuse

Regarde l'événement ``||input:On Button Pressed||`` pour le bouton A. Que penses-tu qu'il arrivera à l'``||fwdLights:LED Ring||`` quand tu appuieras dessus ?

```blocks
// @highlight
input.onButtonPressed(Button.A, function () {
    Mood = "Happy"
})
```

## Essaye : Humeur joyeuse

Appuie sur le ``||input:Button A||`` de ton micro:bit. Regarde l'``||fwdLights:LED Ring||``.

Quelle couleur est apparue ?

~hint Dis-m'en plus !

Appuyer sur le ``||input:Button A||`` met ``||variables:Mood||`` à "Happy", et l'``||fwdLights:LED Ring||`` devient vert.

hint~

## Identifie : Sélection et séquence

Tu viens de faire passer l'``||fwdLights:LED Ring||`` au vert ! Regardons comment le code a décidé cela.

La **sélection** signifie que le programme vérifie quelque chose avant de décider quoi faire. La **séquence** signifie qu'il vérifie les choses dans l'ordre, l'une après l'autre.

Regarde la boucle ``||basic:Forever||``. Quelle condition le programme a-t-il vérifiée en premier pour faire passer l'anneau au vert ?

~hint Dis-m'en plus !

Le bloc ``||logic:If||`` est une **condition**. Il vérifie ``||variables:Mood||`` dans cette **séquence** :

1. D'abord, est-ce que ``||variables:Mood||`` est "Happy" ?

2. Ensuite, est-ce que ``||variables:Mood||`` est "Calm" ?

3. Enfin, est-ce que ``||variables:Mood||`` est "Frustrated" ?

Puisque ``||variables:Mood||`` était "Happy", la première condition correspondait, donc l'anneau est devenu vert.

hint~

```blocks
basic.forever(function () {
    // @highlight
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
```

## Identifie : L'itération

L'**itération** signifie que le programme répète sans cesse les mêmes étapes.

Quelle partie de ton code utilise l'**itération** ?

~hint Dis-m'en plus !

La **boucle** ``||basic:Forever||`` vérifie sans cesse ``||variables:Mood||`` et met à jour l'``||fwdLights:LED Ring||``.

Tant que le micro:bit est alimenté, le code dans la **boucle** ``||basic:Forever||`` s'exécute.

hint~

```blocks
// @highlight
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    }
})
```

## Identifie : La variable

Une **variable** stocke dans ton programme une information qui peut changer.

Trouve la variable ``||variables:Mood||`` près du haut de ton programme. C'est la même que tu viens de mettre à "Happy" en appuyant sur un bouton.

~hint Dis-m'en plus !

La **variable** ``||variables:Mood||`` a commencé comme un texte vide, puisqu'aucune humeur n'avait encore été choisie.

C'est pourquoi l'``||fwdLights:LED Ring||`` était éteint avant que tu n'appuies sur quoi que ce soit.

hint~

```blocks
// @highlight
let Mood = ""
```

## Prédis : Humeur calme

Regarde l'``||input:On Logo Event||``. Que penses-tu qu'il arrivera à l'``||fwdLights:LED Ring||`` quand tu appuieras sur le logo à la place ?

```blocks
// @highlight
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Mood = "Calm"
})
```

## Essaye : Humeur calme

Appuie sur le ``||input:Logo||`` de ton micro:bit. Regarde l'``||fwdLights:LED Ring||``.

Quelle couleur est apparue ?

~hint Dis-m'en plus !

Appuyer sur le ``||input:Logo||`` met ``||variables:Mood||`` à "Calm", donc l'``||fwdLights:LED Ring||`` devient bleu.

hint~

## Explore : Pourquoi utiliser une variable ?

Pourquoi le programme définit-il ``||variables:Mood||`` à l'intérieur de chaque événement de bouton, au lieu de changer directement la couleur de l'``||fwdLights:LED Ring||`` à cet endroit ?

~hint Dis-m'en plus !

Stocker l'humeur dans une **variable** signifie que la boucle ``||basic:Forever||`` n'a qu'une seule chose à vérifier pour décider quelle couleur afficher.

Si la couleur était définie directement dans chaque événement de bouton, ajouter une nouvelle humeur plus tard obligerait à changer le code à plusieurs endroits.

L'``||fwdLights:LED Ring||`` lui-même ne peut pas décider quelle couleur afficher, il peut seulement s'allumer. C'est le logiciel, le code que tu écris, qui décide quelle couleur correspond à quelle humeur.

hint~

## Explore : Plus d'un motif

La couleur est une façon d'envoyer de l'information sans utiliser de mots.

Quel autre motif pourrais-tu utiliser pour montrer une émotion, comme un son ou une forme ? Pourquoi la couleur fonctionne-t-elle particulièrement bien pour une lampe d'humeur ?

~hint Dis-m'en plus !

Un son pourrait aussi fonctionner, comme un carillon joyeux ou un bourdonnement grave. Une forme ou un mouvement pourrait fonctionner, comme un motif qui tourne.

La couleur fonctionne bien ici parce qu'elle est silencieuse et facile à voir de l'autre bout d'une pièce, ce qui est utile dans une salle de classe où tu ne veux pas déranger avec du bruit.

hint~

## Réfléchis

Dans ce tutoriel, tu as utilisé des **événements**, une **séquence**, une **sélection**, une **itération** et une **variable** pour construire une lampe d'humeur. Note tes réponses dans l'espace de travail.

1. Pourquoi le programme vérifie-t-il ``||variables:Mood||`` dans une boucle au lieu de le vérifier une seule fois ?

2. Quelle humeur supplémentaire voudrais-tu ajouter à ta lampe d'humeur, et quelle couleur choisirais-tu pour elle ? Pourquoi cette couleur ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ton programme :

- ``||input:On Button Pressed||`` et ``||input:On Logo Event||`` : des **événements** qui s'exécutent quand tu appuies sur un bouton ou sur le logo, et qui définissent la variable ``||variables:Mood||``

- ``||basic:Forever||`` : une **boucle** qui vérifie sans cesse ``||variables:Mood||`` et utilise la **sélection** pour décider quelle couleur afficher

- ``||fwdLights:LED Ring||`` : s'allume en vert, en bleu ou en rose selon l'humeur

- ``||variables:Mood||`` : stocke l'humeur actuelle sous forme de texte ; change-la en appuyant sur un autre bouton ou sur le logo

À l'étape suivante, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.

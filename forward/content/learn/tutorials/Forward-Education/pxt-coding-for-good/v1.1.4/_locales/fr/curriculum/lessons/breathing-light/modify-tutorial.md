# Lumière de respiration – Tutoriel de modification

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.8
```

```template
let LightOn = false
let Inhale = true
LightOn = true
let Brightness = 0
let Loudness = 0

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (LightOn) {
        LightOn = false
    } else {
        LightOn = true
    }
})

loops.everyInterval(100, function () {
    if (Inhale) {
    
    } else {
     
    }
})

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
Q2:
Q3:
Q4:
Q5: */
```

## Lumière de respiration - Tutoriel de modification @showdialog

Dans ce tutoriel, tu vas **modifier** le code pour que ta lumière de respiration monte et descende comme une respiration lente quand la pièce est silencieuse.

1. **Construis** : Assemble ta lumière de respiration

2. **Connecte** : Couple ton micro:bit et télécharge le code de départ

3. **Modifie** : Ajoute un effet de respiration et teste tes changements

## Préparation : Petits écrans @showdialog

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/tutorial-drag.webp" alt="En survolant la barre grise, clique et fais glisser pour agrandir la fenêtre d'instructions." style="display: block; max-width: 650px; width: 100%; margin:auto;">

Pour utiliser ce tutoriel sur un petit écran, survole la barre grise, puis clique et fais glisser pour agrandir la fenêtre d'instructions.

## Préparation : Connecte les câbles @showdialog

IMPORTANT ! Assure-toi que ta lumière de respiration est assemblée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/plugin-on.webp" alt="Connecte le câble USB au micro:bit et à l'ordinateur, puis allume la plaque de connexion" style="display: block; max-width: 400px; width: 100%; margin:auto;">

## Préparation : Téléchargement @showdialog

Clique sur le bouton ``|Télécharger|`` pour télécharger le code de départ sur ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-coding-for-good/refs/heads/main/curriculum/general-assets/connect/download-code.webp" alt="Clique sur le bouton de téléchargement au bas de ton écran." style="display: block; max-width: 650px; width: 100%; margin:auto;">

## Enquête : Comment le programme fonctionne

Prends un moment pour regarder le code de départ dans ton espace de travail. Peux-tu décrire ce que fait chaque partie ?

~hint Dis-m'en plus !

1. Le bloc ``||input:On Logo Event||`` allume ou éteint la lumière.

2. La **boucle** ``||basic:Forever||`` lit le ``||input:Sound Level||`` et le stocke dans la variable ``||variables:Loudness||``.

3. Ensuite, la luminosité de l'``||fwdLights:LED Ring||`` est réglée à la valeur de ``||variables:Loudness||``.

4. Si la valeur du ``||input:Sound Level||`` est inférieure ou égale à 1,5, alors l'``||fwdLights:LED Ring||`` devient bleu. Sinon, la lumière devient rouge.

hint~

## Modifie : Une nouvelle fonction lumineuse

Ajoutons une nouvelle fonctionnalité à notre lumière de respiration !

- Quand tu inspires, la lumière s'intensifie de 0 à 3
- Quand tu expires, la lumière diminue de 3 à 0

~hint Dis-m'en plus !

Une lumière de respiration peut aider différentes personnes à se sentir plus calmes en les guidant pour prendre des respirations lentes et posées.

hint~

## Modifie : Rythme la respiration

Regarde la boucle ``||loops:Every 100 ms||`` dans ton espace de travail.

- Quand ce code s'exécute-t-il ?
- À quelle fréquence ?

~hint Dis-m'en plus !

Les blocs ``||loops:Every 'x' ms||`` fonctionnent comme une minuterie : le code à l'intérieur s'exécute quand le temps est écoulé.

Cette boucle ``||loops:Every 100 ms||`` s'exécute 10 fois par seconde, puisque 1000 ms = 1 seconde.

hint~

```blocks
loops.everyInterval(100, function () {
    if (Inhale) {
          } else {
        }
})
```

## Modifie : Ajoute les paliers de luminosité

Nous devons ajouter des instructions que la boucle ``||loops:Every 100 ms||`` va suivre.

- Quand ``||variables:Inhale||`` est **vrai**, cela veut dire qu'on inspire
- Quand ``||variables:Inhale||`` est **faux**, cela veut dire qu'on expire

1. Fais glisser un bloc ``||variables:Change Variable By||`` dans la branche vraie. Règle-le pour changer ``||variables:Brightness||`` de **1**.

2. Fais glisser un deuxième bloc ``||variables:Change Variable By||`` dans la branche ``||logic:Else||``. Règle-le pour changer ``||variables:Brightness||`` de **-1**.

~hint Dis-m'en plus !

Le bloc ``||variables:Change Variable By||`` ajoute le nombre que tu choisis à la valeur actuelle d'une variable.

- Le régler à 1 veut dire que ``||variables:Brightness||`` monte de 1 à chaque exécution de la boucle
- Le régler à -1 veut dire qu'elle descend de 1

hint~

```blocks
loops.everyInterval(100, function () {
    if (Inhale) {
        // @highlight
        Brightness += 1
    } else {
        // @highlight
        Brightness += -1
    }
})
```

## Modifie : Change la boucle Forever

1. Trouve le bloc ``||fwdLights:Set LED Ring Brightness||`` dans ta boucle ``||basic:Forever||``.

2. Change la variable de ``||variables:Loudness||`` à ``||variables:Brightness||``.

3. Clique sur ``|Télécharger|`` pour envoyer ton code.

Que remarques-tu ?

~hint Dis-m'en plus !

Quand nous téléchargeons notre programme pour la première fois, la ``||fwdLights:LED Ring Brightness||`` part de zéro et augmente, mais elle ne redescend jamais.

Rien dans notre programme n'a dit à la variable ``||variables:Inhale||`` d'arrêter d'inspirer.

hint~

```blocks
// @highlight
fwdLights.ledRing1.setBrightness(Brightness)
```

## Modifie : Ajoute la vérification des limites

Notre variable ``||variables:Brightness||`` compte de 0 à 3. Elle a besoin d'un moyen de savoir quand faire demi-tour.

1. Ajoute un bloc ``||logic:If||`` : si ``||variables:Brightness||`` est supérieure ou égale à 3, mets ``||variables:Inhale||`` à **faux**.

2. Ajoute un autre bloc ``||logic:If||`` : si ``||variables:Brightness||`` est inférieure ou égale à 0, mets ``||variables:Inhale||`` à **vrai**.

~hint Dis-m'en plus !

Le bloc ``||fwdLights:LED Ring Brightness||`` ne peut régler la luminosité qu'à un nombre entre 0 et 3.

Si ``||variables:Brightness||`` comptait plus haut que 3 ou plus bas que 0, l'``||fwdLights:LED Ring||`` ne deviendrait ni plus lumineux ni plus sombre.

hint~

```blocks
loops.everyInterval(100, function () {
    if (Inhale) {
        Brightness += 1
    } else {
        Brightness += -1
    }
    if (Brightness >= 3) {
    // @highlight
        Inhale = false
    } else if (Brightness <= 0) {
    // @highlight
        Inhale = true
    }
})
```

## Exécute : Essaye encore une fois

Clique sur ``|Télécharger|`` pour envoyer ton code à nouveau, puis reste assis en silence pendant un moment.

- Comment ta lumière de respiration se comporte-t-elle maintenant ?
- Quand tu fais un bruit fort, est-ce que quelque chose change ?

~hint Dis-m'en plus !

Ton ``||fwdLights:LED Ring||`` devrait maintenant s'atténuer et s'intensifier en douceur.

Pendant que tu fais un bruit fort, l'``||fwdLights:LED Ring||`` devrait devenir rouge jusqu'à ce que le silence revienne.

hint~

## Modifie : Change la taille du pas

Change la taille du pas de ``||variables:Brightness||`` de **1** à **0,1**, à la fois là où elle augmente et là où elle diminue.

Clique sur ``|Télécharger|`` et teste ton code. À quoi ressemble la respiration maintenant ?

~hint Dis-m'en plus !

Passer le pas à 0,1 veut dire que ``||variables:Brightness||`` a besoin de beaucoup plus de tours de boucle pour aller de 0 à 3, alors la respiration devient beaucoup plus douce, même si elle prend aussi plus de temps au total.

hint~

## Modifie : Change la vitesse de la boucle

Remets la taille du pas de ``||variables:Brightness||`` à **1**. Maintenant, change ton bloc ``||loops:Every 100 ms||`` pour qu'il s'exécute toutes les **500 ms** à la place.

Clique sur ``|Télécharger|`` et teste ton code à nouveau.

~hint Dis-m'en plus !

Ralentir la boucle à 500 ms garde les mêmes pas de 1 en nombres entiers, alors la respiration a toujours l'air un peu saccadée, juste plus lente.

Les deux changements font durer la respiration plus longtemps, mais seul le pas plus petit la rend plus douce.

hint~

## Enquête : Suivre la respiration

Décris ce qui arrive aux variables ``||variables:Brightness||`` et ``||variables:Inhale||`` lors des **trois prochaines** exécutions de la boucle ``||loops:Every 100 ms||``.

Scénario : la variable ``||variables:Brightness||`` a une valeur de **2**, et ``||variables:Inhale||`` est **vrai**.

Écris ta réponse dans le commentaire de ton espace de travail.

~hint Dis-m'en plus !

1. La variable ``||variables:Brightness||`` change de 1 et devient 3. Comme elle a atteint 3, ``||variables:Inhale||`` est mise à **faux**.

2. La variable ``||variables:Brightness||`` change de -1 et devient 2. La variable ``||variables:Inhale||`` reste fausse.

3. La variable ``||variables:Brightness||`` change encore de -1 et devient 1. La variable ``||variables:Inhale||`` reste fausse.

hint~

## Réfléchis

Dans ce tutoriel, tu as **modifié** un programme pour ajouter deux nouvelles **variables** et une deuxième **boucle** qui fait monter et descendre ta lumière de respiration comme une respiration lente. Note tes réponses aux questions ci-dessous sous forme de commentaires de code dans l'espace de travail.

1. Pourquoi la lumière restait-elle bloquée avant que tu ajoutes la vérification des limites, et comment son ajout a-t-il réglé le problème ?

2. Tu as choisi 100 ms et 1 pour tes pas de respiration. Pourquoi avoir choisi ces nombres, et les changerais-tu si tu recommençais ce projet ?

3. Dans tes propres mots, décris comment ta lumière de respiration décide de devenir plus lumineuse ou plus sombre. Explique-le assez bien pour qu'un partenaire puisse suivre sans regarder ton code.

4. Comment as-tu trouvé la version plus douce avec des pas de 0,1, comparée à tes pas de 1 au départ ? Est-ce que des pas moins nombreux mais plus grands rendraient une lumière de respiration plus apaisante, ou moins ?

5. Pourquoi le code de respiration vit-il dans sa propre boucle séparée, au lieu d'être ajouté directement dans la boucle ``||basic:Forever||`` ?

## Félicitations !

Tu as terminé ce tutoriel ! Voici un résumé de ce que tu as changé :

- ``||variables:Brightness||`` et ``||variables:Inhale||`` : suivent la luminosité et le sens de la respiration

- ``||loops:Every 100 ms||`` : une deuxième **boucle** qui respire en arrière-plan

- ``||logic:If||`` : la **sélection** inverse ``||variables:Inhale||`` au sommet ou au bas de sa plage

- ``||fwdLights:LED Ring||`` : respire en bleu quand c'est calme, clignote en rouge quand c'est bruyant

À la prochaine étape, clique sur le bouton ``|Terminé|`` pour quitter le tutoriel.


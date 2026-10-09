# Lampadaires intelligents - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(100)
})
basic.forever(function () {
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
    basic.pause(100)
})
```

## Lampadaires intelligents - Tutoriel Utiliser @showdialog

Aujourd'hui, nous construisons un **lampadaire intelligent**!

Ajoutons du **code de départ** pour nous assurer que notre lampadaire s'active lors de mouvements à proximité!

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-smartstreetlight-render.webp" alt="Rendu complet du lampadaire" style="display: block; width: 70%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code dans ton projet.

## Étape 4

Regarde le lampadaire que tu as construit. Peux-tu nommer les différentes parties que tu as utilisées pour le fabriquer? Sois précis!

~hint Dis-m'en plus!
Ce lampadaire utilise :

-   un **micro:bit** qui sera le « cerveau » de notre lampadaire. Il exécutera le code qui indique au lampadaire comment fonctionner.
-   un **capteur sonar** qui peut détecter quand un objet est à proximité (comme une personne ou une voiture)!
-   un **anneau de DEL** qui peut s'allumer.
    hint~

## Étape 5

Repense à la leçon. Pourquoi penses-tu que nous avons ajouté un [**capteur sonar**](https://learn.forwardedu.com/sonar-sensor/) à notre lampadaire?

~hint Dis-m'en plus!

-   Le capteur sonar fonctionne comme l'écholocalisation d'une chauve-souris! Il émet des ondes sonores et mesure le temps qu'elles prennent à rebondir. Cela permet au capteur de détecter sa distance par rapport aux objets.
-   Nous utilisons un capteur sonar parce que nous voulons que notre lumière s'allume quand des voitures et des personnes sont à proximité!
    hint~

## Étape 6

Regarde le code qui contrôle notre lampadaire. Lis-le de haut en bas. Ensuite, prédis ce qui se passera à mesure que tu approches ta main du capteur sonar.

## Étape 7

Ensuite, teste le lampadaire.

1. Approche lentement ta main du capteur sonar. Que se passe-t-il?
2. Éloigne ta main du capteur sonar. Que se passe-t-il?
3. Tiens ta main devant le capteur pendant quelques secondes. Que se passe-t-il?

Tes prédictions étaient-elles correctes?

## Étape 8

Ce projet utilise une **instruction conditionnelle** pour décider _quand_ la lumière doit s'allumer.

Peux-tu repérer l'instruction conditionnelle dans notre code?

~hint Dis-m'en plus!

-   Si un objet se trouve à moins de 0,2 m (ou 20 cm), alors l'anneau de DEL s'allume.
-   Sinon (si rien n'est à proximité), alors l'anneau de DEL s'éteint.
    hint~

```block
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape 9

En ce moment, ton lampadaire affiche la température actuelle sur l'écran du micro:bit. Dans de vraies villes, les lampadaires intelligents peuvent montrer la météo, afficher des avertissements de circulation, faire de la publicité pour des événements communautaires, etc.

```block
    basic.showNumber(input.temperature())
```

## Étape 10

Maintenant que tu as testé ton lampadaire intelligent, pense à comment tu pourrais l'_améliorer_.

~hint Dis-m'en plus!
Considère ce qui suit :

-   Combien de temps la lumière devrait-elle rester allumée _après_ avoir détecté un mouvement?
-   Pourquoi voudrais-tu changer la _couleur_ de l'anneau de DEL?
-   Quoi d'autre un lampadaire intelligent pourrait-il communiquer?
    hint~

## Réflexion

Avant de terminer :

-   Fais la liste de 2 nouvelles choses que tu as apprises aujourd'hui.
-   Quelle est une chose que tu aimerais approfondir?

## Terminé

Clique sur le bouton `|Terminé|` pour terminer ce tutoriel.

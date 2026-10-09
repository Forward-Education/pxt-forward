# Lampadaires intelligents - Tutoriel Modifier

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

## Lampadaires intelligents - Tutoriel Modifier @showdialog

Aujourd'hui, nous construisons et programmons un **lampadaire intelligent**!

Nous ajouterons du **code de départ** pour nous assurer que notre lampadaire s'active lors de mouvements à proximité. Ensuite, nous modifierons le code pour le personnaliser!

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

Commençons par réviser le code de départ qui contrôle notre lampadaire. Teste le projet en approchant ta main du capteur sonar!

~hint Dis-m'en plus!
Le lampadaire devrait :

-   afficher la température actuelle sur l'écran DEL du micro:bit
-   s'allumer si un objet (comme ta main!) s'approche du capteur sonar
    hint~

```blocks
basic.forever(function () {
    // @highlight
    basic.showNumber(input.temperature())
})

basic.forever(function () {
    // @highlight
    if (fwdSensors.sonar1.isPastThreshold(0.2, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## Étape 5

En ce moment, la lumière s'allume dès que quelque chose est à proximité (moins de 0,2 m ou 20 cm).

Comment pourrais-tu changer le code pour détecter des objets plus éloignés?

~hint Dis-m'en plus!

-   Change le nombre dans le bloc ``||fwdSensors:sonar distance||`` de « 0,2 m » à quelque chose de plus grand comme « 0,5 m » ou « 1 m ».

-   N'oublie pas de télécharger ton nouveau code avant de le tester!

hint~

```block
    // @highlight
    if (fwdSensors.sonar1.isPastThreshold(1, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape 6

Les lampadaires n'ont pas besoin d'être d'un blanc éclatant. Certaines villes utilisent différentes couleurs pour créer une ambiance et réduire la pollution lumineuse. Changeons la couleur de l'anneau de DEL!

Clique sur le cercle blanc dans le bloc ``||fwdSensors:set all ledRing LEDs to||`` et choisis une autre couleur.

```block
    if (fwdSensors.sonar1.isPastThreshold(1, fwdEnums.OverUnder.Under)) {
        // @highlight
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
```

## Étape 7

En ce moment, le micro:bit affiche la température, mais les lampadaires peuvent partager plusieurs types d'information! Et si on voulait plutôt qu'il affiche une icône ou un message?

Remplace le bloc ``||basic:show number||`` par un bloc ``||basic:show icon||`` ou ``||basic:show string||``.

```blocks
basic.forever(function () {
    // @highlight
    basic.showString("Traffic ahead!")
    basic.pause(100)
})

basic.forever(function () {
    // @highlight
    basic.showIcon(IconNames.Umbrella)
    basic.pause(100)
})
```

## Étape 8

Les lampadaires ne servent pas seulement à la sécurité. Ils peuvent aussi apporter de l'art et de la fête dans les villes!

Personnalisons ton lampadaire autour d'un thème précis. Change la couleur et le message de ton lampadaire pour célébrer un jour férié ou un événement qui compte pour toi!

## Étape 9

Fais un clic droit sur les nouveaux blocs que tu as ajoutés. Ajoute un commentaire décrivant comment ces blocs sont liés à ton thème.

## Étape 10 (facultative)

Utilise des fournitures artisanales comme du papier de bricolage pour personnaliser encore plus le poteau du lampadaire!

## Réflexion

Avant de terminer :

-   Pense à quelque chose de difficile dans ce projet.
-   Comment as-tu réussi à le résoudre? Comment t'es-tu senti?
-   Quelle est une autre chose que tu pourrais faire pour améliorer ton lampadaire? Essaie-le maintenant!

## Terminé

Clique sur le bouton `|Terminé|` pour terminer ce tutoriel.

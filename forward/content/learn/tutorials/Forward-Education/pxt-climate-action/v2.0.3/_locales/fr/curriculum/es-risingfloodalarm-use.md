# Détection d'inondation avec les alarmes côtières de Forward Education - Tutoriel Utiliser

```package
fwd-climate-action=github:Forward-Education/pxt-climate-action#v2.0.2
datalogger=datalogger
```

```template
basic.forever(function () {
   led.plotBarGraph(
   fwdSensors.moisture1.moistureLevel(),
   100
   )
   if (fwdSensors.moisture1.moistureLevel() < 33) {
       fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
   }
   if (fwdSensors.moisture1.moistureLevel() >= 33 && fwdSensors.moisture1.moistureLevel() < 66) {
       fwdLights.ledRing1.setAllPixelsColor(0xffff00)
   }
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons une alarme d'inondation pour aider à détecter les inondations côtières! Nous allons faire cela en trois parties :

1. **Construis** notre alarme d'inondation côtière
2. **Ajoute du code** pour donner vie à notre projet
3. **Utilise** les capteurs pour comprendre comment ils fonctionnent

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-render.webp" alt="Alarme d'inondation montante complète" style="display: block; width: 60%; margin:auto;">

## Composants électroniques requis @showdialog

![Composants électroniques requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs0A.webp)

## Blocs de construction requis @showdialog

![Blocs de construction requis](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs0B.webp)

## Étape de construction 1 @showdialog

![Étape de construction 1](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs01.webp)

## Étape de construction 2 @showdialog

![Étape de construction 2](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs02.webp)

## Étape de construction 3 @showdialog

![Étape de construction 3](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs03.webp)

## Étape de construction 4 @showdialog

![Étape de construction 4](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs04.webp)

## Étape de construction 5 @showdialog

![Étape de construction 5](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs05.webp)

## Étape de construction 6 @showdialog

![Étape de construction 6](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs06.webp)

## Étape de construction 7 @showdialog

![Étape de construction 7](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs07.webp)

## Étape de construction 8 @showdialog

![Étape de construction 8](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs08.webp)

## Étape de construction 9 @showdialog

![Étape de construction 9](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs09.webp)

## Étape de construction 10 @showdialog

![Étape de construction 10](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs10.webp)

## Étape de construction 11 @showdialog

![Étape de construction 11](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs11.webp)

## Étape de construction 12 @showdialog

![Étape de construction 12](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs12.webp)

## Activité 2 : Programme ton projet @showdialog

Nous devons connecter notre projet à l'ordinateur pour lui donner vie avec du code!

Le code sera l'ensemble des instructions qui indiquent à notre micro:bit quoi faire.

## Étape de programmation 1 @showdialog

IMPORTANT! Assure-toi que la plaque de connexion de ta trousse Action climatique est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 60%; margin:auto;">

## Étape de programmation 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape de programmation 3

Clique sur le bouton `|Télécharger|` pour télécharger le code de départ dans ton projet.

## Activité 3 : Utilise ton projet @showdialog

Maintenant que nous avons construit notre alarme d'inondation côtière pour aider à détecter les inondations, nous allons commencer par **utiliser** le code d'exemple pour voir comment il fonctionne.

Pendant les prochaines étapes :

-   **Utilise** les instructions en haut de l'écran.
-   Quand tu veux plus d'information, clique sur **« Dis-m'en plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule!**

## Étape 1

Observe attentivement l'alarme d'inondation que tu viens de construire. Peux-tu nommer les différentes parties qui la composent?

~hint Dis-m'en plus!

L'alarme d'inondation côtière utilise :

-   des **blocs de construction** pour faire la jetée.
-   des **pièces robotiques** pour contrôler la jetée avec du code.
-   des **capteurs** pour détecter l'humidité et communiquer des avertissements à la communauté.
    hint~

## Étape 2

Explorons comment ces parties travaillent ensemble pour aider à avertir les gens des inondations!

Selon toi, comment l'alarme d'inondation fonctionne-t-elle pendant une **marée basse** et une **marée haute**?

~hint Dis-m'en plus!

Pendant la marée basse, l'``||fwdSensors:LED ring||`` s'allume en **vert**

Pendant la marée haute, l'``||fwdSensors:LED ring||`` s'allume en **jaune**

hint~

## Étape de construction 13 @showdialog

Voyons comment notre alarme d'inondation réagit à l'eau!

Rappelle-toi que notre projet utilise des fils électroniques et des capteurs qui ne doivent pas être mouillés! Si une partie autre que les blocs de construction devient mouillée, **éteins ton projet et sèche-le complètement avant de continuer.**
![Étape de construction 13](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs13.webp)

## Étape 3

L'alarme d'inondation est reliée à un ``||fwdSensors:moisture sensor||`` qui détecte le niveau d'eau dans un contenant.

Regarde le code. Selon toi, comment l'``||fwdSensors:LED ring||`` va-t-il réagir quand tu verses seulement un peu d'eau dans le contenant?

~hint Dis-m'en plus!

Quand le ``||fwdSensors:moisture sensor||`` est submergé à moins de 1/3 (ou 33 %), l'``||fwdSensors:LED ring||`` devient vert.

hint~

```blocks
basic.forever(function () {
   if (fwdSensors.moisture1.moistureLevel() < 33) {
       // @highlight
       fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
   }
})
```

## Étape 4

Que remarques-tu qui se passe avec les ``||LED:LEDs||`` du micro:bit à mesure que tu remplis le contenant à moitié?

~hint Dis-m'en plus!
Les DEL du micro:bit documentent la hauteur de la marée!

1. Le ``||fwdSensors:moisture sensor||`` se remplit de 0 à 100 %
2. Les ``||LED:leds||`` affichent le pourcentage de montée de la marée.

Plus le pourcentage est élevé, plus il y a de ``||LED:leds||`` allumées!

hint~

```blocks
basic.forever(function () {
   // @highlight
   led.plotBarGraph(
   fwdSensors.moisture1.moistureLevel(),
   100
   )  })
```

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris dans ce projet?

## Réflexion @showdialog

1. Comment le micro:bit utilise-t-il les comparaisons (<,=,>) pour déterminer la hauteur de la marée?
2. Quels autres types d'alertes pourrais-tu ajouter à ton alarme d'inondation pour améliorer encore plus le système d'avertissement?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

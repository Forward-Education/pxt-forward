# Détection d'inondation avec les alarmes côtières de Forward Education - Tutoriel Modifier

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
   if (true){}
})
```

## Activité 1 : Construis ton projet @showdialog

Construisons une alarme d'inondation pour aider à détecter les inondations côtières! Nous allons faire cela en quatre parties :

1. **Construis** notre alarme d'inondation côtière
2. **Ajoute du code** pour donner vie à notre projet
3. **Modifie** notre projet pour en apprendre plus sur d'autres capteurs
4. Applique ce que nous avons appris dans un petit **défi**

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

## Activité 3 : Modifie ton projet @showdialog

Nous avons une alarme d'inondation côtière avec un capteur d'humidité pour détecter le niveau d'eau. Explorons comment optimiser nos capteurs en **modifiant** notre code!

Pendant les prochaines étapes :

-   Utilise les instructions en haut de l'écran pour **modifier** ton code.
-   Quand tu veux plus d'information, clique sur **« Dis-m'en plus! »**
-   Si tu as besoin d'aide avec le code, clique sur l'**ampoule**!

## Étape de modification 1

Observe attentivement l'alarme d'inondation que tu viens de construire. Ensuite, révise le code ci-dessous.

## Étape de construction 13 @showdialog

Voyons comment notre alarme d'inondation réagit à l'eau!

Rappelle-toi que notre projet utilise des fils électroniques et des capteurs qui ne doivent pas être mouillés! Si une partie autre que les blocs de construction devient mouillée, **éteins ton projet et sèche-le complètement avant de continuer.**
![Étape de construction 13](https://raw.githubusercontent.com/forward-education/pxt-climate-action/main/tutorial-assets/es-risingfloodalarm-sbs13.webp)

## Étape de modification 2

Selon toi, que va-t-il se passer quand le contenant est rempli

-   au 1/3 avec de l'eau?
-   à la moitié avec de l'eau?

Essaie-le maintenant et vois si tes prédictions sont correctes!

~hint Dis-m'en plus!

-   L'alarme d'inondation utilise des **instructions conditionnelles** pour nous indiquer la hauteur de la marée.
-   Le ``||fwdSensors:moisture sensor||`` détecte l'eau de 0 à 100 %

-   Quand l'eau est à moins de 1/3, l'``||fwdSensors:LED ring||`` s'allume en **vert**

-   Quand l'eau est à plus de 1/3, mais à moins de 2/3, l'``||fwdSensors:LED ring||`` s'allume en **jaune**

hint~

```blocks
basic.forever(function () {
   if (fwdSensors.moisture1.moistureLevel() < 33) {
       fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
   }
   if (fwdSensors.moisture1.moistureLevel() >= 33 && fwdSensors.moisture1.moistureLevel() < 66) {
       fwdLights.ledRing1.setAllPixelsColor(0xffff00)
   }
})
```

## Étape de modification 3

Notre alarme d'inondation nous indique quand la marée est basse et quand elle est haute.

Selon toi, que se passerait-il si une catastrophe naturelle faisait monter la marée à plus de 66 %?

~hint Dis-m'en plus!
L'alarme d'inondation côtière ne pourrait rien faire!

hint~

## Étape de modification 4

Ajoutons un paramètre pour alerter les gens s'il y a une inondation!

Créons une comparaison à l'aide du bloc ``||fwdSensors:moisture||`` et d'un bloc ``||logic:greater than or equal to||``.

~hint Dis-m'en plus!
Si le niveau d'eau est supérieur ou égal à 66 %, c'est une inondation!
hint~

```blocks
basic.forever(function () {
    if (fwdSensors.moisture1.moistureLevel() < 33) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    }
    if (fwdSensors.moisture1.moistureLevel() >= 33 && fwdSensors.moisture1.moistureLevel() < 66) {
        fwdLights.ledRing1.setAllPixelsColor(0xffff00)
    }
    // @highlight
    if (fwdSensors.moisture1.moistureLevel() >= 66) {
    	
    }
})
```

## Étape de modification 5

Ajoutons une couleur pour représenter un avertissement d'inondation!

Utilise l'``||fwdSensors:LED ring||`` pour donner une seule couleur à toutes les DEL.

~hint Dis-m'en plus!
Nous avons choisi le rouge pour représenter l'inondation, mais tu peux choisir n'importe quelle couleur autre que le vert et le jaune!
hint~

```blocks
basic.forever(function () {
   if (fwdSensors.moisture1.moistureLevel() >= 66) {
    // @highlight
       fwdLights.ledRing1.setAllPixelsColor(0xff0000)
   }
})
```

## Activité 4 : Défi

Maintenant que nous avons **modifié** notre code pour ajouter un autre paramètre à notre alarme côtière, nous allons compléter un petit défi!

## Étape du défi 1

Ajoutons un autre système d'alerte pour attirer l'attention des gens.

En ce moment, notre alarme d'inondation avertit les gens en cas d'inondation en faisant devenir l'``||fwdSensors:LED ring||`` rouge.

Imagine ce qui arriverait si nous n'étions pas assez près pour voir l'anneau de DEL. Pourquoi penses-tu que cela pourrait poser problème?

~hint Dis-m'en plus!
Si nous n'étions pas assez près pour voir les lumières d'avertissement, nous pourrions ne pas savoir s'il y a une inondation!
hint~

## Étape du défi 2

Mettons à jour le code pour que le micro:bit émette un son lorsqu'il y a un risque d'inondation.

Quand devrions-nous faire jouer un son à l'alarme d'inondation?

~hint Dis-m'en plus!

Si le niveau d'eau dépasse **les 2/3**, nous devrions faire un bruit jusqu'à ce que le niveau d'eau baisse!
hint~

## Étape du défi 3

Regarde l'instruction conditionnelle ci-dessous. Essaie d'utiliser un bloc ``||music:play||`` pour ajouter une alarme sonore à l'alarme d'inondation si le niveau d'eau est **supérieur ou égal aux 2/3**

~hint Dis-m'en plus!

Fais glisser le bloc ``||music:play||`` et un bloc ``||music:rest||`` sous le bloc qui règle l'``||fwdSensors:set LEDRing||`` au rouge.

hint~

```blocks
   if (fwdSensors.moisture1.moistureLevel() >= 66) {
       fwdLights.ledRing1.setAllPixelsColor(0xff0000)
       music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)),
       // @highlight
       music.PlaybackMode.UntilDone)
       // @highlight
       music.rest(music.beat(BeatFraction.Double))
   }
```

## Étape du défi 4

Teste les changements que tu as faits! Le son joue-t-il automatiquement quand il y a un risque d'inondation?

Ajoute assez d'eau dans le contenant pour que l'``||fwdSensors:LED ring||`` devienne rouge. Que se passe-t-il?

~hint Dis-m'en plus!

Quand le capteur d'humidité détecte **plus des 2/3** d'eau, le micro:bit devrait émettre un son!

Cela aide les gens loin de l'alarme d'inondation à entendre le bruit et à quitter la zone en toute sécurité.
hint~

## Félicitations! @showdialog

Tu as terminé l'activité!

Est-ce que quelque chose t'a surpris dans ce projet?

## Réflexion @showdialog

1. Comment le micro:bit utilise-t-il les comparaisons (<,=,>) pour déterminer la hauteur de la marée?
2. Comment l'utilisation du son et d'autres sens aide-t-elle à garder les gens en sécurité pendant une catastrophe naturelle?
3. Pense à quelque chose de difficile dans ce projet.
    - Comment as-tu réussi à le résoudre? Comment t'es-tu senti?

## Terminé! @showdialog

À l'étape suivante, tu peux cliquer sur le bouton `|Terminé|` pour terminer le tutoriel.

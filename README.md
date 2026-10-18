# [2forge.me](https://2forge.me)

Page d'accueil statique de `2forge.me`, portail vers mes sous-domaines. HTML, CSS et JavaScript natifs, hébergé sur GitHub Pages.

## Structure

```
index.html              page d'accueil (structure + métadonnées)
404.html                page d'erreur
CNAME                   domaine personnalisé GitHub Pages
.nojekyll               désactive Jekyll (fichiers servis tels quels)
robots.txt
assets/
  css/style.css         styles, variables de couleur en tête de fichier
  js/services.js        configuration des services (à modifier)
  js/main.js            génération des cartes
  fonts/                Bricolage Grotesque + JetBrains Mono (auto-hébergées, licence OFL)
  favicon.svg
  og.png                image de partage (1200×630)
```

Icônes disponibles : `play`, `power`, `server`, `braces`, `globe` (nouvelles icônes : objet `ICONS` dans `assets/js/main.js`).
Le compteur et la grille s'adaptent automatiquement.

## Tester en local

Ouvrir `index.html` directement fonctionne, ou :

```sh
python3 -m http.server 8000
```

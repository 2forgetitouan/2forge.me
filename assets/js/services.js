/**
 * Configuration des services affichés sur la page d'accueil.
 * C'est LE seul fichier à modifier pour ajouter, retirer ou changer un sous-domaine.
 *
 * Champs :
 *  - id          identifiant unique (sert pour les ancres / l'accessibilité)
 *  - name        nom affiché sur la carte
 *  - url         adresse complète (https://…)
 *  - icon        clé d'icône : "play" | "power" | "server" | "braces" | "globe"
 *                (d'autres se déclarent dans ICONS, assets/js/main.js)
 *  - description (optionnel) courte phrase affichée sous le nom. Vide = rien d'affiché.
 */
const SERVICES = [
  { id: "wiflix",  name: "Wiflix",  url: "https://wiflix.2forge.me",  icon: "play",   description: "" },
  { id: "wol",     name: "WOL",     url: "https://wol.2forge.me",     icon: "power",  description: "" },
  { id: "pelican", name: "Pelican", url: "https://pelican.2forge.me", icon: "server", description: "" },
  { id: "api",     name: "API",     url: "https://api.2forge.me",     icon: "braces", description: "" },
];

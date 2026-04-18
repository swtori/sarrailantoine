# Portfolio Antoine Sarrail

Portfolio professionnel sobre et minimaliste (HTML, CSS, JS) – thème sombre, responsive.

## Structure

- **index.html** – Accueil (photo, accroche, projet mis en avant)
- **about.html** – À propos (parcours, compétences, CV PDF)
- **projects.html** – Projets (grille en quinconce, chargés depuis JSON)
- **contact.html** – Contact (email, GitHub, LinkedIn, formulaire)
- **css/style.css** – Styles (thème noir/gris/bleu nuit, Inter)
- **js/main.js** – Navigation, année dynamique
- **js/projects.js** – Liste des projets (variable `PROJECTS`) et affichage en grille
- **js/contact.js** – Formulaire de contact (mailto par défaut)
- **data/** – Optionnel (plus utilisé pour les projets)
- **assets/** – Photo, CV PDF, captures des projets (voir `assets/README.md`)

## Ajouter un projet

1. Éditer **js/projects.js** : ajouter un objet dans la variable `PROJECTS` avec `id`, `title`, `url` (optionnel), `description`, `tags`, et éventuellement `image` (chemin vers une capture).
2. Si vous ajoutez une image : placer la capture dans **assets/projets/** et mettre le chemin dans `image`.

## Personnaliser

- **Email / réseaux** : modifier les liens dans `contact.html` et le mailto dans `js/contact.js`.
- **CV** : `img/cvAntoineAlternance.pdf` (section CV accueil + page À propos).
- **Photo** : `img/Antoine.png` (page d’accueil).

## Lancer en local

Ouvrir **index.html** dans un navigateur, ou servir le dossier avec un serveur local (pour que le chargement de `data/projects.json` fonctionne sans CORS) :

```bash
npx serve .
```

Ou avec Python : `python -m http.server 8000` puis aller sur `http://localhost:8000`.

## Technologies

HTML5, CSS3, JavaScript (vanilla). Aucune dépendance. Compatible tous navigateurs récents.

# Portfolio Antoine Sarrail

Portfolio professionnel sobre et minimaliste (HTML, CSS, JS) – thème sombre, responsive.

## Structure

- **index.html** – Accueil (photo, accroche, projet mis en avant)
- **about.html** – À propos (parcours, compétences, CV PDF)
- **projects.html** – Projets (grille en quinconce, chargés depuis JSON)
- **contact.html** – Contact (email, GitHub, LinkedIn, formulaire)
- **css/style.css** – Styles (thème noir/gris/bleu nuit, Inter)
- **js/main.js** – Navigation, année dynamique
- **js/projects.js** – Chargement des projets depuis `data/projects.json`
- **js/contact.js** – Formulaire de contact (mailto par défaut)
- **data/projects.json** – Liste des projets (facile à éditer)
- **assets/** – Photo, CV PDF, captures des projets (voir `assets/README.md`)

## Ajouter un projet

1. Éditer **data/projects.json** : ajouter un objet avec `id`, `title`, `image`, `description`, `tags`.
2. Placer la capture d’écran dans **assets/projets/** (ex. `projet-9.jpg`).
3. Mettre à jour le champ `"image"` dans le JSON (ex. `"assets/projets/projet-9.jpg"`).

## Personnaliser

- **Email / réseaux** : modifier les liens dans `contact.html` et le mailto dans `js/contact.js`.
- **CV** : placer le PDF dans `assets/cv-antoine-sarrail.pdf` (ou changer le lien dans `about.html`).
- **Photo** : placer `assets/photo.jpg` (ou adapter le `src` dans `index.html`).

## Lancer en local

Ouvrir **index.html** dans un navigateur, ou servir le dossier avec un serveur local (pour que le chargement de `data/projects.json` fonctionne sans CORS) :

```bash
npx serve .
```

Ou avec Python : `python -m http.server 8000` puis aller sur `http://localhost:8000`.

## Technologies

HTML5, CSS3, JavaScript (vanilla). Aucune dépendance. Compatible tous navigateurs récents.

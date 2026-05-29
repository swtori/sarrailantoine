# Portfolio Antoine Sarrail

Portfolio professionnel sobre et minimaliste (HTML, CSS, JS) – thème sombre, responsive.

## Structure

- **index.html** – Accueil (photo, accroche, projet mis en avant)
- **about.html** – À propos (parcours, compétences, CV PDF)
- **projects.html** – Projets (grille en quinconce, données dans `js/projects-data.js`)
- **contact.html** – Contact (email, GitHub, LinkedIn, formulaire)
- **css/style.css** – Styles (thème noir/gris/bleu nuit, Inter)
- **js/site-config.js** – URLs du blog / VPS (modifiable pour déploiement)
- **js/main.js** – Navigation, année dynamique, application des liens blog depuis `site-config.js`
- **js/projects-data.js** – Tableau `PROJECTS` (titres, URLs, images, fiches `projets/*.html`)
- **js/projects.js** – Grille projets + carrousel accueil
- **projets/** – Fiches projet (HTML + thème visuel propre à chaque page, CSS dans `css/projets/`)
- **js/contact.js** – Formulaire de contact (mailto par défaut)
- **data/** – Fichier d’exemple / historique (`projects.json`, non utilisé par défaut par la page projets)
- **assets/** – Photo, CV PDF, captures des projets (voir `assets/README.md`)

## Ajouter un projet

1. Éditer **js/projects-data.js** : ajouter un objet avec `id`, `title`, `url`, `github`, `description`, `tags`, `image`, `detailHref` (`projets/…html`), `carousel` (booléen pour l’accueil).
2. Créer la fiche **`projets/<id>.html`** et la feuille **`css/projets/<id>.css`** pour garder une DA distincte par projet.
3. Placer les captures dans **`img/<id-projet>/`** (ex. `img/lusciana/…`) et renseigner le chemin dans `image` (CV et photo restent à la racine de `img/`).

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

## Back-office blog local (PHP + SQLite)

Un module local est disponible dans `backend/` avec :

- Authentification (`admin` / `editor`)
- Gestion d'articles (brouillon / publié)
- Gestion des utilisateurs (admin uniquement)

### Structure

- `backend/bootstrap.php` : connexion DB + initialisation automatique
- `backend/lib/auth.php` : auth, rôles, CSRF, utilitaires
- `backend/public/` : pages publiques + dashboard admin

### Lancer le blog local

Installez PHP en local, puis lancez :

```bash
php -S localhost:8080 -t backend/public
```

Ensuite :

- Blog public : `http://localhost:8080/index.php`
- Connexion : `http://localhost:8080/login.php`

### Compte par défaut

- Email : `admin@local.test`
- Mot de passe : `admin123`

Pensez à créer un autre compte admin et à changer ce mot de passe dès les premiers tests.

## Technologies

HTML5, CSS3, JavaScript (vanilla). Aucune dépendance. Compatible tous navigateurs récents.

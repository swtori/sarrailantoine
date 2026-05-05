# Deploy VPS - sarrailantoine

Ce dossier est pret a etre envoye sur le VPS.

## Contenu

- `backend/` : code PHP du blog (auth, users, posts)
- `compose.sarrailantoine.yml` : stack Docker (FrankenPHP + MariaDB)
- `.env.example` : variables a copier dans `.env`

## Installation rapide

1. Copier ce dossier sur le VPS, par exemple:
   - `/home/luna/service_sarrailantoine`
2. Dans le dossier, creer `.env` depuis `.env.example`:
   - `cp .env.example .env`
3. Modifier les mots de passe et le domaine dans `.env`.
4. Lancer:

```bash
docker network create backend || true
docker compose -f compose.sarrailantoine.yml --env-file .env up -d
```

5. Test:
   - `http://IP_VPS:8088/login.php`

## Login par defaut

- email: `admin@local.test`
- mot de passe: `admin123`

## Note DB

Le fichier `backend/bootstrap.php` supporte:
- SQLite en local (par defaut)
- MySQL/MariaDB si `DB_DRIVER=mysql` (active via compose)

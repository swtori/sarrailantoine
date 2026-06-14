-- Migration : ajout des rôles sur une base USERS existante (IONOS / prod).
-- Exécuter une seule fois dans phpMyAdmin.

ALTER TABLE USERS
    ADD COLUMN role VARCHAR(20) NOT NULL DEFAULT 'lecteur';

-- Comptes administrateur (démo jury BTS SIO + admin historique)
UPDATE USERS SET role = 'administrateur' WHERE username IN ('jurybtssio', 'jurybts', 'admin');

-- Ancien rôle « accueil » → gestionnaire
UPDATE USERS SET role = 'gestionnaire' WHERE role = 'accueil';

-- Autres comptes existants : gestionnaire par défaut
UPDATE USERS SET role = 'gestionnaire'
WHERE role = 'lecteur' AND username NOT IN ('jurybtssio', 'jurybts', 'admin');

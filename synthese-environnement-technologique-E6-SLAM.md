# Synthèse — Environnement technologique (Épreuve E6, option SLAM)

> **Source :** ANNEXE VII-7 — Modèle d'attestation de respect de l'annexe II.E  
> **Référentiel :** BTS Services Informatiques aux Organisations (SIO) — Session 2026  
> **Épreuve :** E6 — Conception et développement d'applications (option SLAM)

Ce document synthétise les exigences de l'**environnement technologique** que doit mettre en place un centre d'examen ou un candidat individuel pour la certification du référentiel BTS SIO, option **SLAM** (Solutions Logicielles et Applications Métiers).

---

## Objet du document

Il s'agit d'un **modèle d'attestation** permettant de contrôler que l'environnement technologique respecte l'annexe II.E du référentiel. Pour chaque exigence, le centre doit renseigner :

| Colonne | Contenu attendu |
|---|---|
| **Éléments** | Exigence imposée par le référentiel |
| **Description de l'implantation** | Nom du service/outil et caractéristiques techniques dans le centre d'examen |
| **Remarques de la commission d'interrogation** | Observations lors du contrôle |

Une case **SLAM** permet d'identifier l'option concernée.

---

## 1. Environnement commun aux deux options (SISR et SLAM)

### 1.1 — Infrastructure du système d'information

L'environnement technologique supportant le SI de l'organisation cliente doit comporter **au minimum** :

| # | Élément requis |
|---|---|
| 1 | **Service d'authentification** |
| 2 | **SGBD** (Système de Gestion de Base de Données) |
| 3 | **Accès sécurisé à Internet** |
| 4 | **Environnement de travail collaboratif** |
| 5 | **Deux serveurs** (éventuellement virtualisés), basés sur des **systèmes d'exploitation différents**, dont **l'un est un logiciel libre (open source)** |
| 6 | **Solution de sauvegarde** |
| 7 | **Ressources à accès sécurisé et soumis à habilitation** |
| 8 | **Deux types de terminaux**, dont **un mobile** (smartphone ou tablette) |

### 1.2 — Outils de gestion de la sécurité

Des outils doivent être mobilisés pour :

| # | Domaine |
|---|---|
| 1 | **Gestion des incidents** |
| 2 | **Détection et prévention des intrusions** |
| 3 | **Chiffrement** |
| 4 | **Analyse de trafic** |

> **Remarque importante :** les logiciels de **simulation ou d'émulation** peuvent répondre à des besoins de l'organisation, mais **ne peuvent pas se substituer complètement** à des équipements réels dans l'environnement technologique d'apprentissage.

---

## 2. Exigences spécifiques à l'option SLAM

### 2.1 — Environnement de développement

L'environnement technologique SLAM doit comporter **au minimum** :

| # | Élément requis |
|---|---|
| 1 | **Un ou deux environnements de développement** disposant d'outils de gestion de tests, supportant un **cadre applicatif (framework)** et **au moins deux langages** |
| 2 | **Une bibliothèque de composants logiciels** |
| 3 | **Un SGBD avec langage de programmation associé** |
| 4 | **Un logiciel de gestion de versions et de suivi de problèmes** (type Git + issue tracker) |
| 5 | **Une solution permettant de tester les comportements anormaux** d'une application |

### 2.2 — Solutions applicatives opérationnelles

Les activités de l'organisation cliente doivent s'appuyer sur **au moins deux solutions applicatives opérationnelles** permettant un **accès sécurisé à des données hébergées sur un site distant**.

Dans les architectures de ces solutions, doivent figurer :

- L'exploitation de **mécanismes d'appel à des services applicatifs distants**
- **Au moins trois** des situations suivantes :

| Situation | Description |
|---|---|
| Client lourd | Code exécuté sur le système d'exploitation d'une solution technique d'accès **fixe** |
| Client web | Code exécuté dans un **navigateur Web** (client léger ou riche) |
| Client mobile | Code exécuté sur le système d'exploitation d'une solution technique d'accès **mobile** |
| Serveur | Code exécuté sur le système d'exploitation d'un **serveur** |

### 2.3 — Origine des solutions applicatives

Une solution applicative peut être issue de :

- Un **développement spécifique**, ou
- La **modification du code** d'un logiciel, notamment **open source**

### 2.4 — Opérationnalité et accessibilité du code source

Au moment de l'épreuve :

- Les solutions applicatives présentes dans le contexte doivent être **opérationnelles**
- Leur **code source** doit être **accessible** dans un **environnement de développement opérationnel**

---

## Checklist récapitulative

### Commun (SISR + SLAM)

- [ ] Service d'authentification
- [ ] SGBD
- [ ] Accès sécurisé à Internet
- [ ] Environnement collaboratif
- [ ] 2 serveurs (OS différents, dont 1 open source)
- [ ] Solution de sauvegarde
- [ ] Ressources sécurisées avec habilitation
- [ ] 2 types de terminaux (dont 1 mobile)
- [ ] Outils : gestion incidents, détection intrusions, chiffrement, analyse trafic

### Spécifique SLAM

- [ ] 1–2 environnements de dev (tests, framework, ≥ 2 langages)
- [ ] Bibliothèque de composants logiciels
- [ ] SGBD + langage associé
- [ ] Gestion de versions + suivi de problèmes
- [ ] Tests de comportements anormaux
- [ ] ≥ 2 solutions applicatives (accès distant sécurisé)
- [ ] Appels à services distants + ≥ 3 types d'exécution de code (lourd, web, mobile, serveur)
- [ ] Code source accessible et solutions opérationnelles le jour de l'épreuve

---

## Identification

Le document prévoit en bas de page l'identification du centre d'examen ou du candidat individuel (numéro, nom, prénom).

---

*Synthèse établie à partir des pages 21 à 24 de l'ANNEXE VII-7 (Session 2026).*

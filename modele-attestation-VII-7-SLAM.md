**ANNEXE VII-7**

**Modèle d'attestation de respect de l'annexe II.E – Environnement technologique pour la certification du référentiel**

**Épreuve E6 – Conception et développement d'applications (option SLAM)**

---

## CONTRÔLE DE L'ENVIRONNEMENT TECHNOLOGIQUE

*Annexe II.E – « Environnement technologique pour la certification » du référentiel du BTS SIO*

**Session 2026**

---


|     |
| --- |
|     |


**Identification du centre d'examen ou du candidat individuel**

Numéro : *À compléter*

Nom : **Sarrail**

Prénom : **Antoine**

Adresse (centre d'examen) : *Candidat individuel*

*Adresse postale si requise*

**Option**

☐ SISR ☑ **SLAM**

*(Solutions Logicielles et Applications Métiers)*

> **¹¹** Nom et adresse du centre d'examen ou identification de la personne candidate individuelle (numéro, nom, prénom).

*Page 21*

---

## 1. Environnement commun aux deux options

### 1.1 L'environnement technologique supportant le système d'information de l'organisation cliente comporte au moins :


| **Éléments**                                                                                                                               | **Description de l'implantation dans le centre d'examen** *(nom du service ou de l'outil et caractéristiques techniques)* | **Remarques de la commission d'interrogation** |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Un service d'authentification                                                                                                              | Sessions PHP, bcrypt, rôles RBAC                                                                                          |                                                |
| Un SGBD                                                                                                                                    | MySQL IONOS, MariaDB, MongoDB                                                                                             |                                                |
| Un accès sécurisé à internet                                                                                                               | Accès depuis l'AD, Accès sécurisé via httpS                                                                               |                                                |
| Un environnement de travail collaboratif                                                                                                   | Git, GitHub, Github Desktop                                                                                               |                                                |
| Deux serveurs, éventuellement virtualisés, basés sur des systèmes d'exploitation différents, dont l'un est un logiciel libre (open source) | Apache (MariaDB), IONOS Linux, VPS Docker                                                                                 |                                                |


*Page 21 (suite)*

---

**ANNEXE VII-7** *(suite)*

**Modèle d'attestation de respect de l'annexe II.E – Environnement technologique pour la certification du référentiel**

**Épreuve E6 – Conception et développement d'applications (option SLAM)**


| **Éléments**                                                                | **Description de l'implantation dans le centre d'examen** *(nom du service ou de l'outil et caractéristiques techniques)* | **Remarques de la commission d'interrogation** |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Une solution de sauvegarde                                                  | Backup auto quotidien IONOS rétention de 14j                                                                              |                                                |
| Des ressources dont l'accès est sécurisé et soumis à habilitation           | RBAC serveur, sessions, logs admin                                                                                        |                                                |
| Deux types de terminaux dont un mobile (type smartphone ou encore tablette) | Même testé sur mon téléphone physique, appli web mobile. Ordinateurs portables et utilisation de Smartphones.             |                                                |


### 1.2 Des outils sont mobilisés pour la gestion de la sécurité :


| **Éléments**                           | **Description de l'implantation dans le centre d'examen** *(nom du service ou de l'outil et caractéristiques techniques)* | **Remarques de la commission d'interrogation** |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Gestion des incidents                  | GitHub Issues, logs HTTP/SQL                                                                                              |                                                |
| Détection et prévention des intrusions | PDO préparé, RBAC, Fail2ban VPS, SonarQube                                                                                |                                                |
| Chiffrement                            | bcrypt, HTTPS IONOS, TLS VPS, WinSCP                                                                                      |                                                |
| Analyse de trafic                      | Logs JSON httpLog.php Gach, WireShark                                                                                     |                                                |


> **Remarque :** les logiciels de simulation ou d'émulation sont utilisés en réponse à des besoins de l'organisation. Ils ne peuvent se substituer complètement à des équipements réels dans l'environnement technologique d'apprentissage.

*Page 22*

---

**ANNEXE VII-7** *(suite)*

**Modèle d'attestation de respect de l'annexe II.E – Environnement technologique pour la certification du référentiel**

**Épreuve E6 – Conception et développement d'applications (option SLAM)**

## 2. Savoirs spécifiques à l'option « solutions logicielles et applications métiers » (SLAM)

### 2.1 L'environnement technologique supportant le système d'information de l'organisation cliente comporte au moins :


| **Éléments**                                                                                                                                              | **Description de l'implantation dans le centre d'examen** *(nom du service ou de l'outil et caractéristiques techniques)* | **Remarques de la commission d'interrogation** |     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | --- |
| Un ou deux environnements de développement disposant d'outils de gestion de tests et supportant un cadre applicatif (framework) et au moins deux langages | VS Code, PHP/JS, PHPUnit, Symfony 7.2 (domaineDeGach), Django                                                             |                                                |     |
| Une bibliothèque de composants logiciels                                                                                                                  | EmailJS, Package NPM, Bootstrap                                                                                           |                                                |     |
| Un SGBD avec langage de programmation associé                                                                                                             | PHP 8 PDO MySQL/MariaDB, MongoDB JS                                                                                       |                                                |     |
| Un logiciel de gestion de versions et de suivi de problèmes d'ordre logiciel                                                                              | Git GitHub                                                                                                                |                                                |     |
| Une solution permettant de tester les comportements anormaux d'une application                                                                            | PHPUnit (chevauchement réservations Gach)                                                                                 |                                                |     |


*Page 23*

---

**ANNEXE VII-7** *(suite)*

**Modèle d'attestation de respect de l'annexe II.E – Environnement technologique pour la certification du référentiel**

**Épreuve E6 – Conception et développement d'applications (option SLAM)**

### 2.2 Les activités de l'organisation cliente s'appuient sur au moins deux solutions applicatives opérationnelles permettant d'offrir un accès sécurisé à des données hébergées sur un site distant. Au sein des architectures de ces solutions applicatives doivent figurer l'exploitation de mécanismes d'appel à des services applicatifs distants et au moins trois des situations ci-dessous :


| **Éléments**                                                                                            | **Description de l'implantation dans le centre d'examen** *(nom du service ou de l'outil et caractéristiques techniques)* | **Remarques de la commission d'interrogation** |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Du code exécuté sur le système d'exploitation d'une solution technique d'accès fixe (type client lourd) | MAUI                                                                                                                      |                                                |
| Du code exécuté dans un navigateur Web (type client léger ou riche)                                     | JS vitrine Gach et portfolio                                                                                              |                                                |
| Du code exécuté sur le système d'exploitation d'une solution technique d'accès mobile                   | MAUI Application Mobile en C# .NET Framework, Electron ou Machine Virtuelle Androit (AVD)                                 |                                                |
| Du code exécuté sur le système d'exploitation d'un serveur                                              | Application web en PHP back-offices IONOS et VPS                                                                          |                                                |


*Page 24*

---

### 2.3 Une solution applicative peut être issue d'un développement spécifique ou de la modification du code d'un logiciel notamment open source.

**Description de l'implantation dans le centre d'examen** *(nom du service ou de l'outil et caractéristiques techniques)* :

Apps sur mesure PHP HTML JS

**Remarques de la commission d'interrogation :**

### 2.4 Les solutions applicatives présentes dans le contexte sont opérationnelles et leur code source est accessible dans un environnement de développement opérationnel au moment de l'épreuve.

**Description de l'implantation dans le centre d'examen** *(nom du service ou de l'outil et caractéristiques techniques)* :

GitHub opérationnel, clone VS Code local

**Remarques de la commission d'interrogation :**

---


|     |
| --- |
|     |


**Date :** 05/06/2026

**Signature du candidat ou du responsable du centre d'examen :**

---

*Page 24 (fin)*

---

*Reproduction du modèle ANNEXE VII-7 (pages 21 à 24) — BTS SIO, Session 2026, option SLAM.*

*Indications courtes préremplies — à développer et ajuster.*
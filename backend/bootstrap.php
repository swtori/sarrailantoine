<?php
declare(strict_types=1);

session_start();

const APP_NAME = "Blog Admin Local";
const DB_FILE = __DIR__ . "/database/app.sqlite";
const DEFAULT_ADMIN_EMAIL = "admin@local.test";
const DEFAULT_ADMIN_PASSWORD = "admin123";

// Choix du moteur DB :
// - local/dev : sqlite (par defaut, fichier backend/database/app.sqlite)
// - VPS/prod  : mysql (variables d'environnement DB_*)
$dbDriver = strtolower((string) (getenv("DB_DRIVER") ?: "sqlite"));
$pdo = createPdo($dbDriver);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

if ($dbDriver === "sqlite") {
    $pdo->exec("PRAGMA foreign_keys = ON");
}

initializeDatabase($pdo, $dbDriver);

function createPdo(string $dbDriver): PDO
{
    if ($dbDriver === "mysql") {
        // Connexion MySQL/MariaDB pour la production (VPS + Docker).
        $dbHost = (string) (getenv("DB_HOST") ?: "127.0.0.1");
        $dbPort = (string) (getenv("DB_PORT") ?: "3306");
        $dbName = (string) (getenv("DB_NAME") ?: "blog");
        $dbUser = (string) (getenv("DB_USER") ?: "root");
        $dbPass = (string) (getenv("DB_PASS") ?: "");
        $dsn = "mysql:host={$dbHost};port={$dbPort};dbname={$dbName};charset=utf8mb4";
        return new PDO($dsn, $dbUser, $dbPass);
    }

    if (!is_dir(__DIR__ . "/database")) {
        mkdir(__DIR__ . "/database", 0777, true);
    }

    // Connexion SQLite : un simple fichier local suffit.
    return new PDO("sqlite:" . DB_FILE);
}

function initializeDatabase(PDO $pdo, string $dbDriver): void
{
    if ($dbDriver === "mysql") {
        $pdo->exec(
            "CREATE TABLE IF NOT EXISTS users (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password_hash VARCHAR(255) NOT NULL,
                role VARCHAR(20) NOT NULL DEFAULT 'editor',
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4"
        );

        $pdo->exec(
            "CREATE TABLE IF NOT EXISTS posts (
                id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) NOT NULL UNIQUE,
                excerpt TEXT NULL,
                content LONGTEXT NOT NULL,
                status VARCHAR(20) NOT NULL DEFAULT 'draft',
                author_id INT UNSIGNED NOT NULL,
                created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME NULL,
                published_at DATETIME NULL,
                CONSTRAINT fk_posts_author FOREIGN KEY (author_id)
                    REFERENCES users(id) ON DELETE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4"
        );
    } else {
        $pdo->exec(
            "CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                role TEXT NOT NULL DEFAULT 'editor',
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
            )"
        );

        $pdo->exec(
            "CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                slug TEXT NOT NULL UNIQUE,
                excerpt TEXT,
                content TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT 'draft',
                author_id INTEGER NOT NULL,
                created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT,
                published_at TEXT,
                FOREIGN KEY(author_id) REFERENCES users(id) ON DELETE CASCADE
            )"
        );
    }

    $count = (int) $pdo->query("SELECT COUNT(*) FROM users")->fetchColumn();
    if ($count === 0) {
        $stmt = $pdo->prepare(
            "INSERT INTO users (name, email, password_hash, role) VALUES (:name, :email, :password_hash, :role)"
        );
        $stmt->execute([
            ":name" => "Admin",
            ":email" => DEFAULT_ADMIN_EMAIL,
            ":password_hash" => password_hash(DEFAULT_ADMIN_PASSWORD, PASSWORD_DEFAULT),
            ":role" => "admin",
        ]);
    }

    $postCount = (int) $pdo->query("SELECT COUNT(*) FROM posts")->fetchColumn();
    if ($postCount === 0) {
        seedDemoPosts($pdo);
    }
}

function seedDemoPosts(PDO $pdo): void
{
    $adminId = (int) $pdo->query("SELECT id FROM users WHERE email = " . $pdo->quote(DEFAULT_ADMIN_EMAIL) . " LIMIT 1")->fetchColumn();
    if ($adminId <= 0) {
        return;
    }

    $now = date("Y-m-d H:i:s");
    $demoPosts = [
        [
            "title" => "Bienvenue sur le blog Speedizycom",
            "slug" => "bienvenue-blog-speedizycom",
            "excerpt" => "Petit tour d'horizon des sujets que nous allons publier : web, SEO, contenu et IA.",
            "content" => "Ce blog va servir de journal de progression.\n\nVous y trouverez des retours d'experience sur la creation de sites web, des conseils de communication digitale et des tests d'outils d'IA pour aller plus vite sur la production.\n\nObjectif : publier des contenus utiles, concrets et faciles a appliquer.",
            "status" => "published",
            "published_at" => $now,
        ],
        [
            "title" => "Creer un site vitrine efficace en 2026",
            "slug" => "creer-site-vitrine-efficace-2026",
            "excerpt" => "Les points essentiels pour un site vitrine professionnel : message, design, performance.",
            "content" => "Un bon site vitrine doit d'abord etre clair : qui vous etes, ce que vous proposez, comment vous contacter.\n\nEnsuite, il doit etre rapide et responsive pour mobile / desktop.\n\nEnfin, il faut travailler le contenu SEO : titres, structure Hn, maillage interne, et pages services bien construites.",
            "status" => "published",
            "published_at" => $now,
        ],
        [
            "title" => "Comment l'IA accelere la production de contenu",
            "slug" => "ia-accelere-production-contenu",
            "excerpt" => "Prompting, relecture humaine et optimisation SEO : une methode efficace.",
            "content" => "L'IA permet de gagner du temps sur le premier jet d'article, les idees de structure et les variations de titres.\n\nMais la qualite finale depend toujours de la relecture humaine : correction du ton, ajout d'exemples reels et verification des informations.\n\nLa bonne approche : IA pour accelerer, humain pour valider.",
            "status" => "published",
            "published_at" => $now,
        ],
        [
            "title" => "Brouillon : checklist avant publication",
            "slug" => "brouillon-checklist-avant-publication",
            "excerpt" => "Article en cours de redaction, visible uniquement dans le dashboard.",
            "content" => "Checklist avant publication :\n- verifier l'introduction\n- ajouter des sous-titres clairs\n- controler les liens externes\n- relire orthographe et syntaxe\n- ajouter un appel a l'action en fin d'article",
            "status" => "draft",
            "published_at" => null,
        ],
    ];

    $stmt = $pdo->prepare(
        "INSERT INTO posts (title, slug, excerpt, content, status, author_id, published_at)
         VALUES (:title, :slug, :excerpt, :content, :status, :author_id, :published_at)"
    );

    foreach ($demoPosts as $post) {
        $stmt->execute([
            ":title" => $post["title"],
            ":slug" => $post["slug"],
            ":excerpt" => $post["excerpt"],
            ":content" => $post["content"],
            ":status" => $post["status"],
            ":author_id" => $adminId,
            ":published_at" => $post["published_at"],
        ]);
    }
}

<?php
declare(strict_types=1);
require_once __DIR__ . "/../lib/auth.php";
require_login();
verify_csrf();

$user = current_user();
$id = (int) ($_POST["id"] ?? 0);
$title = trim((string) ($_POST["title"] ?? ""));
$excerpt = trim((string) ($_POST["excerpt"] ?? ""));
$content = trim((string) ($_POST["content"] ?? ""));
$status = ($_POST["status"] ?? "draft") === "published" ? "published" : "draft";

if ($title === "" || $content === "") {
    exit("Titre et contenu obligatoires.");
}

$slug = slugify($title);
$publishedAt = $status === "published" ? date("Y-m-d H:i:s") : null;

if ($id > 0) {
    $stmt = $pdo->prepare("SELECT * FROM posts WHERE id = :id LIMIT 1");
    $stmt->execute([":id" => $id]);
    $existing = $stmt->fetch();
    if (!$existing) {
        exit("Article introuvable.");
    }
    if (!is_admin() && (int) $existing["author_id"] !== (int) $user["id"]) {
        http_response_code(403);
        exit("Accès refusé.");
    }

    $stmt = $pdo->prepare(
        "UPDATE posts
         SET title = :title, slug = :slug, excerpt = :excerpt, content = :content, status = :status,
             updated_at = :updated_at, published_at = :published_at
         WHERE id = :id"
    );
    $stmt->execute([
        ":title" => $title,
        ":slug" => $slug . "-" . $id,
        ":excerpt" => $excerpt,
        ":content" => $content,
        ":status" => $status,
        ":updated_at" => date("Y-m-d H:i:s"),
        ":published_at" => $publishedAt,
        ":id" => $id,
    ]);
} else {
    $stmt = $pdo->prepare(
        "INSERT INTO posts (title, slug, excerpt, content, status, author_id, published_at)
         VALUES (:title, :slug, :excerpt, :content, :status, :author_id, :published_at)"
    );
    $stmt->execute([
        ":title" => $title,
        ":slug" => $slug . "-" . time(),
        ":excerpt" => $excerpt,
        ":content" => $content,
        ":status" => $status,
        ":author_id" => $user["id"],
        ":published_at" => $publishedAt,
    ]);
}

header("Location: dashboard.php");
exit;

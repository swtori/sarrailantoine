<?php
declare(strict_types=1);
require_once __DIR__ . "/../lib/auth.php";
require_login();

$user = current_user();
$isEdit = isset($_GET["id"]);

$post = [
    "id" => null,
    "title" => "",
    "excerpt" => "",
    "content" => "",
    "status" => "draft",
];

if ($isEdit) {
    $id = (int) $_GET["id"];
    $stmt = $pdo->prepare("SELECT * FROM posts WHERE id = :id LIMIT 1");
    $stmt->execute([":id" => $id]);
    $found = $stmt->fetch();

    if (!$found) {
        http_response_code(404);
        exit("Article introuvable.");
    }

    if (!is_admin() && (int) $found["author_id"] !== (int) $user["id"]) {
        http_response_code(403);
        exit("Accès refusé.");
    }

    $post = $found;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $isEdit ? "Modifier l'article" : "Créer un article" ?></title>
  <link rel="stylesheet" href="admin.css">
</head>
<body>
  <div class="wrap">
    <div class="topbar">
      <h1><?= $isEdit ? "Modifier l'article" : "Nouvel article" ?></h1>
      <a class="btn btn-secondary" href="dashboard.php">Retour dashboard</a>
    </div>

    <form class="card" method="post" action="post_save.php">
      <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
      <input type="hidden" name="id" value="<?= (int) ($post["id"] ?? 0) ?>">

      <label>Titre
        <input type="text" name="title" required value="<?= e($post["title"]) ?>">
      </label>

      <label>Extrait
        <textarea name="excerpt" rows="3"><?= e($post["excerpt"]) ?></textarea>
      </label>

      <label>Contenu
        <textarea name="content" rows="12" required><?= e($post["content"]) ?></textarea>
      </label>

      <label>Statut
        <select name="status">
          <option value="draft" <?= $post["status"] === "draft" ? "selected" : "" ?>>Brouillon</option>
          <option value="published" <?= $post["status"] === "published" ? "selected" : "" ?>>Publié</option>
        </select>
      </label>

      <div class="row" style="margin-top: 12px;">
        <button type="submit">Enregistrer</button>
      </div>
    </form>
  </div>
</body>
</html>

<?php
declare(strict_types=1);
require_once __DIR__ . "/../lib/auth.php";
require_login();

$user = current_user();

if (is_admin()) {
    $stmt = $pdo->query(
        "SELECT posts.*, users.name AS author_name
         FROM posts
         JOIN users ON users.id = posts.author_id
         ORDER BY datetime(posts.created_at) DESC"
    );
} else {
    $stmt = $pdo->prepare(
        "SELECT posts.*, users.name AS author_name
         FROM posts
         JOIN users ON users.id = posts.author_id
         WHERE author_id = :author_id
         ORDER BY datetime(posts.created_at) DESC"
    );
    $stmt->execute([":author_id" => $user["id"]]);
}

$posts = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard blog</title>
  <link rel="stylesheet" href="admin.css">
</head>
<body>
  <div class="wrap">
    <div class="topbar">
      <div>
        <h1>Dashboard</h1>
        <p class="muted">Connecté en tant que <?= e($user["name"]) ?> (<?= e($user["role"]) ?>)</p>
      </div>
      <div class="row">
        <a class="btn btn-secondary" href="index.php">Blog public</a>
        <a class="btn" href="post_form.php">Nouvel article</a>
        <?php if (is_admin()): ?>
          <a class="btn btn-secondary" href="seed_demo.php">Simuler un blog</a>
          <a class="btn btn-secondary" href="users.php">Gérer utilisateurs</a>
        <?php endif; ?>
        <a class="btn btn-secondary" href="logout.php">Déconnexion</a>
      </div>
    </div>

    <?php if (!$posts): ?>
      <div class="card">
        <p>Tu n'as pas encore d'articles.</p>
      </div>
    <?php endif; ?>

    <?php foreach ($posts as $post): ?>
      <article class="card">
        <div class="row" style="justify-content: space-between; align-items: center;">
          <h2><?= e($post["title"]) ?></h2>
          <span class="tag <?= $post["status"] === "published" ? "status-published" : "status-draft" ?>">
            <?= e($post["status"]) ?>
          </span>
        </div>
        <p class="muted">Auteur : <?= e($post["author_name"]) ?></p>
        <?php if (!empty($post["excerpt"])): ?>
          <p><?= nl2br(e($post["excerpt"])) ?></p>
        <?php endif; ?>
        <div class="row">
          <a class="btn btn-secondary" href="post_form.php?id=<?= (int) $post["id"] ?>">Modifier</a>
          <form method="post" action="post_delete.php" onsubmit="return confirm('Supprimer cet article ?');">
            <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
            <input type="hidden" name="id" value="<?= (int) $post["id"] ?>">
            <button class="danger" type="submit">Supprimer</button>
          </form>
        </div>
      </article>
    <?php endforeach; ?>
  </div>
</body>
</html>

<?php
declare(strict_types=1);
require_once __DIR__ . "/../lib/auth.php";

$posts = $pdo->query(
    "SELECT posts.*, users.name AS author_name
     FROM posts
     JOIN users ON users.id = posts.author_id
     WHERE status = 'published'
     ORDER BY datetime(published_at) DESC, id DESC"
)->fetchAll();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog local</title>
  <link rel="stylesheet" href="admin.css">
</head>
<body>
  <div class="wrap">
    <div class="topbar">
      <h1>Blog local</h1>
      <div>
        <?php if (is_logged_in()): ?>
          <a class="btn btn-secondary" href="dashboard.php">Dashboard</a>
          <a class="btn btn-secondary" href="logout.php">Déconnexion</a>
        <?php else: ?>
          <a class="btn btn-secondary" href="login.php">Connexion</a>
        <?php endif; ?>
      </div>
    </div>

    <?php if (!$posts): ?>
      <div class="card">
        <p>Aucun article publié pour le moment.</p>
      </div>
    <?php endif; ?>

    <?php foreach ($posts as $post): ?>
      <article class="card">
        <h2><?= e($post["title"]) ?></h2>
        <p class="muted">
          Publié par <?= e($post["author_name"]) ?> le <?= e((string) $post["published_at"]) ?>
        </p>
        <?php if (!empty($post["excerpt"])): ?>
          <p><?= nl2br(e($post["excerpt"])) ?></p>
        <?php endif; ?>
        <div><?= nl2br(e($post["content"])) ?></div>
      </article>
    <?php endforeach; ?>
  </div>
</body>
</html>

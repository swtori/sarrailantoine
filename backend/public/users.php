<?php
declare(strict_types=1);
require_once __DIR__ . "/../lib/auth.php";
require_admin();

$error = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    verify_csrf();
    $name = trim((string) ($_POST["name"] ?? ""));
    $email = trim((string) ($_POST["email"] ?? ""));
    $password = (string) ($_POST["password"] ?? "");
    $role = ($_POST["role"] ?? "editor") === "admin" ? "admin" : "editor";

    if ($name === "" || $email === "" || $password === "") {
        $error = "Tous les champs sont obligatoires.";
    } else {
        try {
            $stmt = $pdo->prepare(
                "INSERT INTO users (name, email, password_hash, role) VALUES (:name, :email, :password_hash, :role)"
            );
            $stmt->execute([
                ":name" => $name,
                ":email" => $email,
                ":password_hash" => password_hash($password, PASSWORD_DEFAULT),
                ":role" => $role,
            ]);
            header("Location: users.php");
            exit;
        } catch (PDOException $exception) {
            $error = "Impossible de créer cet utilisateur (email déjà utilisé ?).";
        }
    }
}

$users = $pdo->query("SELECT id, name, email, role, created_at FROM users ORDER BY id DESC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Utilisateurs</title>
  <link rel="stylesheet" href="admin.css">
</head>
<body>
  <div class="wrap">
    <div class="topbar">
      <h1>Gestion des utilisateurs</h1>
      <a class="btn btn-secondary" href="dashboard.php">Retour dashboard</a>
    </div>

    <form class="card" method="post">
      <h2>Créer un utilisateur</h2>
      <?php if ($error): ?>
        <p class="error"><?= e($error) ?></p>
      <?php endif; ?>
      <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
      <div class="grid two">
        <label>Nom
          <input type="text" name="name" required>
        </label>
        <label>Email
          <input type="email" name="email" required>
        </label>
      </div>
      <div class="grid two">
        <label>Mot de passe
          <input type="password" name="password" required minlength="6">
        </label>
        <label>Rôle
          <select name="role">
            <option value="editor">editor</option>
            <option value="admin">admin</option>
          </select>
        </label>
      </div>
      <button type="submit">Créer</button>
    </form>

    <div class="card">
      <h2>Utilisateurs existants</h2>
      <?php foreach ($users as $u): ?>
        <p>
          <strong><?= e($u["name"]) ?></strong> - <?= e($u["email"]) ?>
          <span class="tag"><?= e($u["role"]) ?></span>
        </p>
      <?php endforeach; ?>
    </div>
  </div>
</body>
</html>

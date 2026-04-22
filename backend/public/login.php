<?php
declare(strict_types=1);
require_once __DIR__ . "/../lib/auth.php";

if (is_logged_in()) {
    header("Location: dashboard.php");
    exit;
}

$error = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    verify_csrf();
    $email = trim((string) ($_POST["email"] ?? ""));
    $password = (string) ($_POST["password"] ?? "");

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
    $stmt->execute([":email" => $email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user["password_hash"])) {
        login_user($user);
        header("Location: dashboard.php");
        exit;
    }
    $error = "Email ou mot de passe invalide.";
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connexion admin blog</title>
  <link rel="stylesheet" href="admin.css">
</head>
<body>
  <div class="wrap">
    <div class="card">
      <h1>Connexion blog local</h1>
      <p class="muted">Compte admin par défaut : admin@local.test / admin123</p>
      <?php if ($error): ?>
        <p class="error"><?= e($error) ?></p>
      <?php endif; ?>
      <form method="post">
        <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
        <label>Email
          <input type="email" name="email" required>
        </label>
        <label>Mot de passe
          <input type="password" name="password" required>
        </label>
        <button type="submit">Se connecter</button>
      </form>
      <p><a href="index.php">Voir le blog public</a></p>
    </div>
  </div>
</body>
</html>

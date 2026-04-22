<?php
declare(strict_types=1);
require_once __DIR__ . "/../lib/auth.php";
require_login();
verify_csrf();

$id = (int) ($_POST["id"] ?? 0);
if ($id <= 0) {
    header("Location: dashboard.php");
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM posts WHERE id = :id LIMIT 1");
$stmt->execute([":id" => $id]);
$post = $stmt->fetch();
if (!$post) {
    header("Location: dashboard.php");
    exit;
}

$user = current_user();
if (!is_admin() && (int) $post["author_id"] !== (int) $user["id"]) {
    http_response_code(403);
    exit("Accès refusé.");
}

$stmt = $pdo->prepare("DELETE FROM posts WHERE id = :id");
$stmt->execute([":id" => $id]);

header("Location: dashboard.php");
exit;

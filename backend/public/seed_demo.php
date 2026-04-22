<?php
declare(strict_types=1);
require_once __DIR__ . "/../lib/auth.php";
require_admin();

$existing = (int) $pdo->query("SELECT COUNT(*) FROM posts")->fetchColumn();
if ($existing > 0) {
    header("Location: dashboard.php");
    exit;
}

seedDemoPosts($pdo);
header("Location: dashboard.php");
exit;

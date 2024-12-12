<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];

    // Pakeisti is_blocked reikšmę į 1 (užblokuotas)
    $sql = "UPDATE users SET is_blocked = 1 WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$id]);

    echo json_encode(['status' => 'success']);
}
?>

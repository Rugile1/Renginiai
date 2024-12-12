<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];

    // Pakeisti is_blocked reikšmę į 0 (neblokuotas)
    $sql = "UPDATE users SET is_blocked = 0 WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$id]);

    echo json_encode(['status' => 'success']);
}
?>

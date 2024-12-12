<?php
include('db.php'); // Įtraukia ryšį su duomenų baze

// Patikriname, ar prisijungimas pavyko
if ($conn) {
    echo "Prisijungimas prie duomenų bazės pavyko!";
} else {
    echo "Nepavyko prisijungti prie duomenų bazės.";
}

// Uždaryti ryšį su duomenų baze
$conn->close();
?>

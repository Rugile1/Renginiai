<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "mydb"; 


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Nepavyko prisijungti: " . $conn->connect_error);
}
?>
<?php
include('db.php'); 
?>
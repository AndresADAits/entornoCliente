<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "usuariostiendademoviles";
$conn = mysqli_connect ($servername, $username, $password, $database);
// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
header('Content-Type: text/xml');
header('Cache-Control: no-cache, must-revalidate');


$sql = "SELECT * FROM stock";
$result = mysqli_query($conn, $sql);

echo '<?xml version="1.0" encoding="utf-8"?>
<moviles>';
while($row = mysqli_fetch_array($result))
 {
    echo "<stock>";
    echo "<marca>" . $row['marca'] . "</marca>";
    echo "<modelo>" . $row['modelo'] . "</modelo>";
    echo "<camara>" . $row['camara'] . "</camara>";
    echo "<precio>" . $row['precio'] . "</precio>";
    echo "<bateria>" . $row['bateria'] . "</bateria>";
    echo "</stock>";
 }
echo "</moviles>";



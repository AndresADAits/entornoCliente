<?php

$servername = "localhost";
$database = "usuariostiendademoviles";
$username = "root";
$password = "";
$conn = mysqli_connect ($servername, $username, $password, $database);


header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$marca = $_POST["marca"];
$modelo = $_POST["modelo"];
$precio = $_POST["precio"];
$bateria = $_POST["bateria"];
$oferta = $_POST["oferta"];



$sql = "INSERT INTO stock (marca,modelo,precio,bateria,oferta) VALUES ('$marca','$modelo','$precio','$bateria','$oferta');";


if (mysqli_query($conn, $sql)) {
    echo ("Registro añadido correctamente");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
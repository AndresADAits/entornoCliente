<?php
$servidor = "localhost";
$baseDatos = "usuariostiendademoviles";
$usuario = "root";
$pass = "";
$conn = mysqli_connect ($servidor, $usuario, $pass, $baseDatos);

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$marca = $_POST["marca"];
$modelo = $_POST["modelo"];
$precio = $_POST["precio"];
$capacidad = $_POST["capacidad"];




$sql = "INSERT INTO stock (marca,modelo,precio,capacidad) VALUES ('$marca','$modelo','$precio','$capacidad');";


if (mysqli_query($conn, $sql)) {
    echo ("Movil ha sido añadido!");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);


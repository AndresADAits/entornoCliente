<?php
// retrasamos 2 segundos la ejecución de esta página PHP.
$servername = "localhost";
$username = "root";
$password = "";
$database = "usuariostiendademoviles";
$conn = mysqli_connect ($servername, $username, $password, $database);
// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$marca = $_POST["marca"];
$modelo = $_POST["modelo"];
$camara = $_POST["camara"];
$precio = $_POST["precio"];
$bateria = $_POST["bateria"];

$sql = "INSERT INTO stock (marca,modelo,camara,precio,bateria) VALUES ('$marca','$modelo','$camara','$precio','$bateria');";


if (mysqli_query($conn, $sql)) {
    echo ("Registro añadido correctamente");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);


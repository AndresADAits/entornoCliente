<?php

$servername = "localhost";
$database = "usuariostiendademoviles";
$username = "root";
$password = "";
$conn = mysqli_connect ($servername, $username, $password, $database);

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
$marca = $_POST["marca"];

$sql = "SELECT marca,modelo,precio FROM stock WHERE marca LIKE '%$marca%'";

$result = mysqli_query($conn, $sql);


$inserMovil = array();
while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $inserMovil[] = $row;
}


echo json_encode($inserMovil);
<?php
sleep(2);
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "usuariostiendademoviles";

$marca = $_POST["marca"];
$modelo = $_POST["modelo"];
$precio = $_POST["precio"];
$bateria = $_POST["bateria"];


$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("INSERT INTO stock (marca,modelo,precio,bateria) VALUES ('$marca','$modelo','$precio','$bateria')");
$stmt->execute();

?>
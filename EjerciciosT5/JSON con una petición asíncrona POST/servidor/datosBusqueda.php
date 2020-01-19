<?php
sleep(2);
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "usuariostiendademoviles";

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT marca,modelo,bateria,oferta FROM stock WHERE marca LIKE '%".$_POST['nombre']."%'AND bateria LIKE '%".$_POST['bateria']."%'AND oferta LIKE '%".$_POST['oferta']."%'");
$stmt->execute();
$peliculas = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($peliculas);
?>
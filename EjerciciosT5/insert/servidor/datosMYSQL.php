<?php
sleep(2);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "usuariostiendademoviles";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "INSERT INTO stock (marca,modelo,precio,bateria) VALUES ('$marca','$modelo','$precio','$bateria')";
$resultado = $conexion->query($sql);
$peliculas = array();


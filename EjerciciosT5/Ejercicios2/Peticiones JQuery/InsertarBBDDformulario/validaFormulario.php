<?php
require_once "validacionServidor.php";

$errores = array();
$errores["marca"] = array();
$errores["modelo"] = array();
$errores["precio"] = array();
$errores["capacidad"] = array();


if(isset($_POST["marca"])){
    $errores["marca"] = validarMarca(trim($_POST["marca"]));
}
if(isset($_POST["modelo"])){
    $errores["modelo"] = validarModelo(trim($_POST["modelo"]));
}
if(isset($_POST["precio"])){
    $errores["precio"] = validarPrecio(trim($_POST["precio"]));
}
if(isset($_POST["capacidad"])){
    $errores["capacidad"] = validarCapacidad(trim($_POST["capacidad"]));
}


echo json_encode($errores);
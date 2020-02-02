<?php
require_once "prueba.php";

$errores = array();
$errores["modelo"] = array();
$errores["marca"] = array();
$errores["precio"] = array();
$errores["capacidad"] = array();
$errores["terminos"] = array();

if(isset($_POST["modelo"])){
    $errores["modelo"] = validarmodelo(trim($_POST["modelo"]));
}

if(isset($_POST["marca"])){
    $errores["marca"] = validarmarca(trim($_POST["marca"]),trim($_POST["modelo"]));
}
if(isset($_POST["precio"])){
    $errores["precio"] = validarprecio(trim($_POST["precio"]));
}
if(isset($_POST["capacidad"])){
    $errores["capacidad"] = validarcapacidad(trim($_POST["capacidad"]));
}
if(isset($_POST["terminos"])){
    $errores["terminos"] = validarterminos(trim($_POST["terminos"]));
}


echo json_encode($errores, JSON_FORCE_OBJECT);
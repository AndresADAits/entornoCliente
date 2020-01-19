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
//$modelo = $_POST["modelo"];
$bateria = $_POST["bateria"];

$sql = "SELECT marca,modelo,precio,bateria FROM stock WHERE marca LIKE '%$marca%' AND bateria LIKE '%$bateria%'"; //AND modelo LIKE '%$modelo%' 

$result = mysqli_query($conn, $sql);

$stock = array();
while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $stock[] = $row;
}

if(sizeof($stock)==0){
    echo json_encode($stock);
}else{
    echo json_encode($stock);
}

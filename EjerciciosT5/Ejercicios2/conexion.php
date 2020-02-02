<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

$modelo=$_POST["modelo"];
$marca=$_POST["marca"];
$precio=$_POST["precio"];
$capacidad=$_POST["capacidad"];

$conn = mysqli_connect( 'localhost', 'root', '', 'usuariostiendademoviles');
$sql =  "INSERT INTO `stock`( `modelo`, `marca`, `precio`,`capacidad`) VALUES ('$modelo','$marca',$precio,'$capacidad')";
$result=mysqli_query($conn,$sql);
?>
<?php
header('Content-Type: application/json');
require_once "validadorFormulario.php";
$errores = validarFormulario();
$hayErrores = false;
foreach($errores as $campo => $erroresCampo){
    if(count($erroresCampo)> 0){
        $hayErrores = true;
        break;
    }
}
if(!$hayErrores){
    echo json_encode($_POST["nombre"] + $_POST["apellidos"]+ $_POST["edad"]+ $_POST["profesion"]+ $_POST["terminos"]);
}else{
    echo "HAY ERRORES EN EL FORMULARIO";
}
?>
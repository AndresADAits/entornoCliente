<?php 
function validarFormulario(){
    $errores = [];
    if(isset($_POST["nombre"])){
       $nombre = $_POST["nombre"];
       $errores["nombre"] = [];
    
       if(!preg_match("/[A-Z]+/",$nombre)){
          $errores["nombre"]["mayusculas"] = "SOLO MAYUSCULAS";
       }
       if(strlen($nombre) <= 5){
          $errores["nombre"]["min"] =  "MAS DE 5 LETRAS";
       }
    }
    
    if(isset($_POST["apellido"])){
       $apellido = $_POST["apellido"];
       $errores["apellido"] = [];
       if($nombre===$apellido)){
          $errores["apellido"]["igualNombre"] = "ERROR APELLIDO DEBE SER DIFERENTE DE NOMBRE";
       }
    
    }

    if(isset($_POST["edad"])){
      $edad = $_POST["edad"];
      $errores["edad"] = [];

      if($edad<=20)){
         $errores["edad"]["menor"] = "SOLO MAYORES DE 21 ";
      }
   }

   if





    return $errores;
    }
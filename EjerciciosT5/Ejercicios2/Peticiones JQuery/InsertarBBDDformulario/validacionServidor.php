<?php

function validarMarca($marca){
    $errores = array();
    if($marca !== "") {

        if (strlen($marca) < 1) {
            $errores[] = "La marca debe tener al menos 1 caracteres";
        }
        if (!preg_match("/^[A-Z]*$/",$marca)) {
            $errores[] = "La marca sólo puede contener letras mayúsculas";
        }
    }else{
        $errores[] = "La marca esta no puede estar vacía";
    }
    return $errores;
}

function validarModelo($modelo){
    $errores = array();
    if($modelo !== "") {
       
        if (strlen($modelo) < 1) {
            $errores[] = "El modelo debe tener al menos 1 caracteres";
        }
        if (!preg_match("/^[A-Z]*$/",$modelo)) {
            $errores[] = "EL modelo sólo puede contener letras mayúsculas";
        }
    }else{
        $errores[] = "El modelo no puede estar vacio";
    }
    
    
    return $errores;
}

function validarPrecio($precio){
    $errores = array();
    if (!is_numeric($precio)) {
        $errores[] = "El precio debe ser un número";
    }
    return $errores;
}


function validarCapacidad($capacidad){
    $errores = array();
    if($capacidad !== "") {
        if (!is_numeric($capacidad)) {
            $errores[] = "La capacidad de la memoria debe ser un número";
        }
        
    }else{
        $errores[] = "Debe seleccionar un numero de capacidad";
    }
    return $errores;
}

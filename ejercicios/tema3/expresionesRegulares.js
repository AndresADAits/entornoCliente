//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(url) {
    return /^((https|http):\/\/www.+([0-9-A-Z-a-z])+(.es|.com)+\?+([0-9-A-Z-a-z])+=+([0-9]+&+([0-9-A-Z-a-z])+=+([0-9])))$/.test(url);
}


//Función que valia un password con las siguientes características
//Al menos existan 4 letras
//Al menos existan 4 numeros
//Tiene que haber un carácter !,?,-,$ o _
//Tiene que tener al menos una letra Mayúscula
//Ayuda: Pueden usarse varias expresiones regulares para validar el password
function esValidaPassword(password) {
    let recorreCaracter = password.split("");
    let cuentaNumeros = 0;
    let cuentaLetras = 0;
    for (let i = 0; i < recorreCaracter.length; i++) {
        console.log(recorreCaracter[i] + " ");
        if (/[0-9]/.test(recorreCaracter[i])) {
            cuentaNumeros++;
            console.log(cuentaNumeros);
        } else {
            //no pasa nada
        }
        //le podrias meter ñ? /[a-zñ]/
        if (/[a-z]/.test(recorreCaracter[i])) {
            cuentaLetras++;
            console.log(cuentaLetras);
        } else {
            //no pasa nada
        }
    }


    if ((cuentaNumeros => 4) && (cuentaLetras => 3)) {
        return /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\!\?\-\$\_])[A-Za-z-0-9\!\?\-\$\_]{9,}/.test(password);
    } else {
        return false;
    }

}

//Función que elimina todos los caracterés que no sean letras y
//números de una texto
function eliminaCaracteresRaros(texto) {

    /**
     *
     * let terminator=/([^a-zA-Z0-9])/g;
    let loOtro=terminator.test(texto);
    
    if (loOtro){
        return texto.replace(/[^a-zA-Z0-9]/g, "");
    }
     */

    /**
     * en una linea
     */
    return /([^a-zA-Z0-9])/.test(texto) ? texto.replace(/[^a-zA-Z0-9]/g, "") : texto
}
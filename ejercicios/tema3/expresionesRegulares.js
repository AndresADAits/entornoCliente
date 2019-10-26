//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(url){
return /^((https|http):\/\/www.+([0-9-A-Z-a-z])+(.es|.com)+\?+([0-9-A-Z-a-z])+=+([0-9]+&+([0-9-A-Z-a-z])+=+([0-9])))$/.test(url);
}


//Función que valia un password con las siguientes características
//Al menos existan 4 letras
//Al menos existan 4 numeros
//Tiene que haber un carácter !,?,-,$ o _
//Tiene que tener al menos una letra Mayúscula
//Ayuda: Pueden usarse varias expresiones regulares para validar el password
function esValidaPassword(password){
    /**
     * let expBasica = /[0-9-A-Z-a-z]/;
    let expChunga= /[Ñ,ñ,_,!,?,$]/;
    let expDeprueba =/([0-9])?/;
     */
    let spain=/([Ñ,ñ]+)/;
    let carac= /([!,?,$,_])+/;
    let mayus= /([A-Z])+/;
    let minusX3= /([a-z]+)/;

    /** la cosa es que recorra 
     * if(carac.test(password)||mayus.test(pass))
     */
}

//Función que elimina todos los caracterés que no sean letras y
//números de una texto
function eliminaCaracteresRaros(texto){

}
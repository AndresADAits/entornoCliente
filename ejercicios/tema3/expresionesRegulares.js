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
    /**
     * let expBasica = /[0-9-A-Z-a-z]/;
    let expChunga= /[Ñ,ñ,_,!,?,$]/;
    let expDeprueba =/([0-9])?/;
     */
    let valideitor=false;
    let caracter = "";
    separador = "", 
        caracter = password.split(separador);
        console.log(caracter);
    //let spain=/([Ñ,ñ]+)/;
    let carac = /([!,?,$,_])?/;
    let cuentCarac = 0;
    let mayus = /([A-Z])?/;
    let cuentMayus = 0;
    let minusXtres = /([a-z]?)/;
    let cuentMinusXtres = 0;
    let numeroXcuatro=/([0-9])?/;
    let cuentNumero=0;
    let cuentaLavieja=0;


    for (let i = 0; i < caracter.length; i++) {
      //  console.log(caracter[i]);

        if (carac.test(caracter[i])) {
            cuentCarac++;
            cuentaLavieja++;
            console.log("TIENE UN CARACTER ESPECIAL");
        } else {
            console.log("NO ENCUENTRA CARACTER ESPECIAL");
        }
        if (mayus.test(caracter[i])) {
            cuentMayus++;
            cuentaLavieja++;
            console.log("TIENE UNA LETRA MAYUSCULA");
        } else {
            console.log("NO ENCUENTRA MAYUSCULA");
        }
        if (minusXtres.test(caracter[i])) {
            cuentMinusXtres++;
            cuentaLavieja++;
            console.log("TIENE 3 MINUSCULAS");
        }
        else {
            console.log("NO ENCUENTRA MINUSCULA");
        }
        if (numeroXcuatro.test(caracter[i])) {
            cuentNumero++;
            cuentaLavieja++;
            console.log("TIENE 4 NUMEROS");
        }else{
            console.log("No encuentra numeroS!");
        } 
    }
    if (cuentaLavieja=9) {
        valideitor=true;
        
    } 
    /**if((cuentNumero===4)&&(cuentMinusXtres===3)&&(cuentMayus===1)&&(cuentCarac===1)){
        console.log("hemos triunfado hermanos");
        valideitor=true;

    }  */
  return valideitor;
}

//Función que elimina todos los caracterés que no sean letras y
//números de una texto
function eliminaCaracteresRaros(texto) {

}
//Expresiones regulares: objeto que describe un patron de caracteres
function pruebaTelefono(telefono) {
    let expresion = /([0-9]){9}/;
    let resultado = false;
    if (expresion.test(telefono)) {
        resultado = true;
    }
    return resultado// return /([0-9]){9}/.test(telefono)  para hacer en el return

}
function pruebaTelefonoMejor (telefono){
    return /^([0-9]){9}$/.test(telefono) //con ^y $ le decimos donde empieza y donde acaba.
    // porque en la de arriba si le mtes más de 9 da true
}

function telfSpain (telf){//vamos a obligar a que empice con 6 o 7 o 9
    return /^(9|7|6){1}([0-9]){8}$/.test(telf)

}
function telfIntSpain(tel){
    return /^\+34(9|7|6){1}([0-9]){8}$/.test(tel) // si pones el 34 antes lo coge pero el mas no, por eso \, para anular
    //el caracter especial.
    //hay que llamrlo en el navegador con "" entre el numero porque ya es una cadena.
}

function telInter(tel){
    return /^\+([A-Ya-yÑñ]){2,3}([0-9]){9}$/.test(tel);
}

function telInter(tel){
    return /^([0-9])+([a-z])*$/.test(tel); // con el + pido que almenos el primero sera un numero
                                            // con el * pido 0 o más ocurrrencias de letras minusculas. 
}                                              // con ? pido 0 o 1 ocurrencia

function valEmail(mail){
    return /^([0-9-A-Z-a-z-.])+([@])+([A-Z-a-z])+([.])+([A-Z-a-z])+$/.test(mail);
}
function valUrl(url){ //Esto lo va a subir jorge a git, para comprobar
    return /^((http|https):\/\/)+(www.)?(`[a-zA-Z])+([.])+(es|com)+$/.test(url);
}
function quitarNum(texto){
    
    let expresion= /([0-9])/g;

return texto.replace(expresion,"");
//return texto.replace(/([0-9])/g,""); en una linea.
}
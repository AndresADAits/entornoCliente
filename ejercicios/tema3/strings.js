//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";
function obtenerNuevaFrase(frase, trozoPalabra) {
    frase = frase.toLowerCase();
    let nuevaFrase = "";
    separador = " ", // un espacio en blanco
        palabras = frase.split(separador);

    for (let i = 0; i < palabras.length; i++) {
        let trocito = palabras[i]


        if ((palabras[i].includes(trozoPalabra)) === true) {
            if (palabras[i].startsWith(trozoPalabra)) {


            } else {
                if (palabras[i].endsWith(trozoPalabra)) {

                } else {

                    nuevaFrase += palabras[i] + " ";
            
                }
            }
        }
    }
    return nuevaFrase.trim();
}

//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase, trozoPalabra) {
    let fraseMin = frase.toLowerCase()
    let sumaPos = 0;
    let largoRecortado = frase.length;

    if (fraseMin.includes(trozoPalabra)) {

        sumaPos += fraseMin.lastIndexOf(trozoPalabra);

        sumaPos += fraseMin.indexOf(trozoPalabra);

    } else {
        console.log("No esta incluido");
    }
    return sumaPos;
}



//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color) {
    let ok = false;
    let colorMin = color.toLowerCase();
    let arrayPermitido = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "#"];

    if (colorMin.indexOf("#") === 0 && ((colorMin.length === 7) || (colorMin.length === 4))) {

        for (let i = 0; i < arrayPermitido.length; i++) {

            if (colorMin.includes(arrayPermitido[i])) {
                ok = true;
            }
        }
    }
    return ok;
}

//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueesba.?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(url) {
    let ok = false;
    arrayUrl = url.split(".");
    if (arrayUrl.length > 2) {
        if (url.startsWith("http://www.") || url.startsWith("https://www.")) {
            if (arrayUrl[2].startsWith("com") || arrayUrl[2].startsWith("es")) {
                if (arrayUrl[2].includes("&") === true) {
                    resultado = true;
                }
            }
        }
    }
    return ok;
}
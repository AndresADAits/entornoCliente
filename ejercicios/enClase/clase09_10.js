function pruebaChartAt(cadena, pos) {
    return cadena.charAt(pos);
}
/*
pruebaChartAt('hola',3);
"a"
*/
function pruebaUnicode(cadena, pos) {
    return cadena.charCodeAt(pos);
}
/**
 pruebaUnicode("/nn",2);
110
 */
function pruebaConcat() {
    let prueba = "hola";
    let nuevaPrueba = prueba.concat("hola1", "hola2", "hola3");
    console.log(prueba);
    return nuevaPrueba;
}
/**
 pruebaConcat();
clase09_10.js:18 hola
"holahola1hola2hola3"
 */
/*
metodos que puedes usar en consola y en javascritp

que este incluido
"prueba".includes("u")
true

que este incluido y en una posicion
"prueba".includes("u",3);
false
"prueba".includes("u",2);
true
 */
// Prueba -> pRUEBA
function convertirTam(cadena) {
    let resultado = "";
    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena.charAt(i);
        if (letra.localeCompare(letra.toLocaleUpperCase()) === 0) {
            resultado += letra.toLocaleLowerCase();
        } else {
            resultado += letra.toLocaleUpperCase();
        }
    }
    return resultado;
}
//invertir hola-->aloh
function invertirPalabra(palabra) {
    let tam = (palabra.length) - 1;
    let resultado = "";
    for (let i = tam; i >= 0; i--) {
        resultado += palabra.charAt(i);
    }
    return resultado;
}

function incluirPalabra(palabra, elemento, pos) {
    let resultado = "";
    let a = palabra.slice(0, pos);
    let b = palbra.slice(pos);
    resultado = a + elemento + b;
    return resultado;
}


function incluirPalabra2(palabra, elemento, pos) {
    let resultado = "";
    let a = palabra.slice(0, pos);
    let b = palbra.slice(pos);
    resultado = a + elemento + b;
    return resultado;
}

//devolver una cadena sin espacios y con subcadenas
function quitaEspacio(frase, numPalabras) {
    let resultado = "";
    let palabras = frase.split(" ");
    for (let i = 0; i < numPalabras; i++) {
        resultado += palabras[i] + " ";

    }
    return resultado.trim();
}

function quitaEspacioMejor(frase, numPalabras) {
    let resultado = "";
 return `$(frase.split(" ").slice(0,numPalabras)`.join();
}
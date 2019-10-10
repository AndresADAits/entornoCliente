//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a, b) {
//return a.toString().localeCompare(b.toString());
    if (a > b) {
        return 1;
    } else if (a == b) {
        return 0;
    } else {
        return -1;
    }
}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elementos) {
    let num = 0;
    for (x = 0; x < elementos.length; x++) {
        if (elementos[x] % 2 === 0) {
            num += elementos[x];
        }
    }
    return num;
}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elementos) {
    let num_mayor = elementos[0];
    for (x = 0; x < elementos.length; x++) {
        if (elementos[x] > num_mayor) {
            num_mayor = elementos[x];
        }
    }
    return num_mayor;
}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String) {
    let invertida = "";
    for (x = 0; x <= String.length; x++) {
        invertida += String.charAt(String.length - x)
    }
    return invertida;
}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(String) {
    let num = 0;
    for (x = 0; x < String.length; x++) {
        if (String[x] % 2 !== 0) {
            num++;
        }
    }
    return num;
}



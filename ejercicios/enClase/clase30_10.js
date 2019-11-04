/**
 * CREA UNA FUNCION QUE RECIBA POR PARAMETROS UNA LISTA DE NUMEROS 
 * Y DEVUELVE UNA FUNCION QE DANDO UN PARAMETRO Y , SUME TODOS LOS NUEMROS
 *  DE LA LSITA QUE SEAN DIVISIBLES POR "Y"
 */

function recibeNumeros(numeros) {


    return function (y) {
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % y === 0) {
                suma += numeros[i];
            }

        }
        return suma;
    }

}

let prueba1 = recibeNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9,]);

console.log(recibeNumeros(2));
console.log(recibeNumeros(3));

/*funcion flecha*/

let flechaAlert = (nombre, edad) => alert(nombre + " " + edad);

setTimeout(
    function () {
        flechaAlert("jose", 30)
    }

    , 3000);
//DECLARAR SOLO CON LET Y CONSTANT
///esta funcion hay que corregirla para poder porbar las demas
function corregirDeclaraciones() {
    /*var function = new Object();// palabra reservada mejor funcion
    var e%jemplo = "EJEMPLO";//no se puede meter ese caracter
    var 123prueba = 123;//no se puede empezar por numero, o _123prueba o prueba123
    var prueba.ejemplo = "EJERCICIO";//no se le puede poner punto, mejor prueba_ejemplo
    var prue ba = "PRUEBA";//no puede llevar espacio
    var prue+ba = "PRUEBA";//no puede llevar ese simbolo

    return true;
    */
}

function declararNumeros() {
    let numA = 12;
    let numB = 10;
    return typeof numA === "number"
        && typeof numB === "number"
        && numA > numB;
}
function noDefinido() {
    var x = null;
    var y = undefined;
    /*Como se nos pone como condicion no tocar el codigo ya escrito
    la solucion seria volver a declarar las variables pero al reves
    o más rapido 
    var x=y;
    var y=null; 
    */
    return x === undefined
        && y === null;
}
function declararSymbol() {
    //creamos el tipo primitivo Symbol
    var x = Symbol("simbolo")
    return typeof x === "symbol";
}

function declararFecha() {
    /* no valdria al declarar esto
    var hoy = Date();
    */
    var hoy = new Date();
    return hoy instanceof Date;//hoy es de tipo Date?

}

function declararExpresionRegular() {
    /* esta seria la forma normal de crear este objeto:
var expresion = new RegExp();
    */
    var expresion = /prueba/; //forma rapida, que es la recomendada, por ser óptima
    return expresion instanceof RegExp;
}
function declararFuncion() {// cuando declaramos la f es minuscula
    /*Se puede crear una variable que guarde una funcion*/
    var funcion = new Function(); //aqui mejor mayuscula, pero creo que minuscula funciona
    var funcion = declararFecha; // si lo llamo asi , guardo una funcion en una variable
    /*Si no le pongo parentesis, la guardo pero no llamo a la funcion */
    return funcion instanceof Function;
}



function declararObjeto() {
    //Puedo crear clases dentro de funciones, y en cualquier parte.
    class ObjetoPrueba { };
    let objeto = new ObjetoPrueba(); // Con o sin parentesis funciona

    return objeto instanceof ObjetoPrueba;
}

function declararArray() {
    let lista = new Array(); //asi creo un array, forma lenta
    let lista = []; //Forma rapida de crear un array vacio.
    //queremos crear uno de tamaño cinco y que la posicion 4 sea Correcto
    let lista = [0, 0, 0, 0, "Correcto"];
    // puedo uno asi random porque entra cualquier cosa
    //let lista = ["prueba",false,/kik/,declararfecha,"Correcto"];
    /*Añadir elemetos a un array
    lista.push("1");
    */

    return lista instanceof Array
        && lista.length === 5
        && lista[4] === "Correcto";

}


function declararArrayTipo() {
    /* Int8, Int16, Int32 porque son los bits que va a ocupar*/

    let listaEnteros = new Int32Array[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    return listaEnteros instanceof Int32Array
        && listaEnteros.length === 10;

}

//let x="SOY gLOBAL"; Si pusiera var me devolveria undefined
function declararVariableGlobal() {
    //window hace referencia a todo el ambito
    window.x = "SOY gLOBAL";// Al ser global, la puedo declarar en cualquier parte.
    //el var si tiene limitaciones de ambito , el let no tiene limitaciones de ambito
    return window.x
        && x === "SOY gLOBAL"
        ;

}

function declararPrototipo() {
    function prototipo(nombre) {
        this.nombre = nombre;
    }
    var objeto = new prototipo("ejemplo");


    return objeto.__proto__ === prototipo.prototype

}

//ESTA FUNCION DEBÉIS MODIFICAR EL CÓDIGO PARA QUE FUNCIONE
function declaracionConRetraso() {
    //hay que declarar y antes de usarlo...
    var y = 35;

    var resultado = y === 35;


    return resultado;
}


function declaracionLet() {
    /* hay que declarar en mi ambito y como no entra en el if no se declara
      let x = 0;
       if (x > 1) {
           let y = "bien";
       }
       return y === "bien";*/
    let x = 0;
    let y = "bien"
    if (x > 1) {
        let y = "bien";
    }
    return y === "bien";
}

//ESTA FUNCIÓN DEBÉIS MODIFICAR EL CÓDIGO PARA QUE FUNCIONE
function declaracionConst() {
    /*  No se puede modificar el valor de una constante.
    const valor = 10;
    valor += 20;
    valor = 30;
    return valor === 30;
*/
    const valor = 30;

    return valor === 30;
}

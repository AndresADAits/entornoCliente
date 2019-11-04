/*Queremos que ordene descendente este array , por nombre y por edad */

class Persona {
    construct(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let p1 = new Persona("Jorge", 99);
let p2 = new Persona("Pepito", 30);
let p3 = new Persona("Juanito", 10);
let p4 = new Persona("Lola", 30);
let p5 = new Persona("Maria", 50);
let personas = [p1, p2, p3, p4, p5];

console.log(personas.filter(x => x.edad > 18))

/**function inverEdad(a,b){

    return b.edad-a.edad;
}
function inverNombre(a,b){

    return -a.nombre.toLocaleLowerCase().localeCompare(b.nombre.toLocaleLowerCase());

}
personas.sort(inverEdad);
console.log(personas);

personas.sort(inverNombre);
console.log(personas); */

function pruebaFiltro() {
    let edades = [15, 20, 16, 40, 3, 7];
    console.log(edades.filter(x => x => 18));
    console.log(edades);
}

function obtenerPrecioMayorPar{
    let precio = [102, 501, 301, 202, 23];

    //queremos el más alto que sea par

    return precio.sort((a, b) => b - a).find(x => x % 2 === 0);

    //primero ordeno descendente y luego me paso el filtro de que sea par
}

//dada una lista de palabras, si alguna tiene vocales con expresiones regulares

function hayVocal{
    let cadenas = ["hl", "ag", "lo"];
    return console.log(cadenas.some(x => x.match(/[aeiou]/g)));
}

//LAS ANTERIORES FUNCIONES MODIFICAN LOS OBJETOS QUE CONTIENE EL ARRAY
//LA SIGUENTE CREA UN NUEVO ARRAY MODIFICADO

function edadesMultiplicadas{
    let edades = [10, 20, 30, 40, 50, 60, 100];
    console.log(edades.map(x => x * 7));
}

//OBTENER LA SUMA DE LAS EDADES DE TODOS LO ALUMNOS QAUE SEAN MAYHOR DE EDAD

// la clase persona , tendra nombre, edad y tipo( profesor o alumno)

class ada {
    construct(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;

    }
}

//habira que crear el array con las personas eedades y tipos

ada.filter(x=>x.edad>18)//filtro para mayores 18
.filter(x=>x.tipo==="Alumno")//filtro para que sean alumnos
.map(x=>x.edad)//crea un array solo con las edades para despues sumarlas
.reduce((a,x)=>a+x);


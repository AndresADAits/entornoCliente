function prueba() {
    var i = 0;
    return i;
}
/** 
@drescripcion Muestra nombre y apellidos juntos
@param (nombre) nombre es el nombre de la persona
@param (apellidos)  son los apellidos de la persona
@return (nombreCompleto) es el nombre más los apellidos de la persona
**/ 
/**
 *  barra del siete y dos asteriscos y luego tab y te saca solo los parametros
 * 
 * @param {*} nombre 
 * @param {*} apellidos 
 */
function pruebaNombre(nombre, apellidos){
    let nombreCompleto = nombre + " "+ apellidos;
    console.log (nombreCompleto);
    return nombreCompleto;
}
pruebaNombre; // si pones encima el curson te salen los paremetros comentados, y si haces control click te lleva a la funcion.


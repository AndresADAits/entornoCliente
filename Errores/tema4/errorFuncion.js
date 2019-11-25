function borraElementos(){
    let posi=$("#posi").val();
    let posj=$("#posj").val();
    let elementoABorrar=$(`[id='${posi}.${posj}']`);
    if (elementoABorrar.length >0) {
        elementoABorrar.remove();
        
    }else{
        alert("ESE ELEMENTO NO EXISTE");
    }
}

/**Al buscar div por posicion, no funcion por esto $(`[id='${posi}.${posj}']`);
 * que debe ser esto
 * $(`[id='${posi}_${posj}']`);
 * 
 * Solucionado cambiando punto por barrabaja
*/
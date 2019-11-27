let listadoProyecto = [];

$(function () {
    $("#tiempo").keyup(validaTiempo);
    /**$("#botonCrear").click(crearElementos);
    $("#botonColorear").click(colorear);
    $("#botonBorrar").click(borrarInput);
    $("#botonEsconder").click(esconder);
    $("#botonMostrar").click(mostrar); */
});
function validatiempo() {
    let  esCorrecto=true;
    let valorDuracion= $("#tiempo").val();
    $("#tiempo").removeClass("invalido");
    $("#tiempo")removeClass("valido");
    $("#erroresTiempo")empty();

    if(!/^[0-9]+$/.test(valorDuracion)){
        esCorrecto = false;
        let spanError = $("<span>SOLO SE PERMITEN NUMEROS</span>");
        $("#erroresTiempo").append(spanError);
    }
if (valorDuracion<3) {
    esCorrecto=false;
    let spanError=$("<span>EL NUMERO TIENE QUE SER MAYOR DE 3</span>");
    $("#erroresTiempo").append(spanError);
    
}
if(esCorrecto){
    $("#tiempo").addClass("valido");
}else{
    $("#tiempo").addClass("invalido");
}
}

        }



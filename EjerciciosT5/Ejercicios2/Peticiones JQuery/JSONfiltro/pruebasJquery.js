

function funcionAjaxAsincronaLoad(){
    $("#resultadoAsincronoLoad").load("datosJSON.php");
}

function funcionAjaxAsincronaError(){
    $.ajax({
        url: "datosError.php",
        beforeSend:function(){alert("EMPIEZA LA PETICIÓN AJAX")}
    })  .done( escribirResultado2())
        .fail(function(){{ $("#resultadoAsincronoError").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");}})
        .always(function(){alert("TERMINO LA PETICIÓN AJAX")});
}

function escribirResultado(respuesta){
    let divResultado =  document.getElementById("escribirResultado2");
    divResultado.innerHTML = "";
    var resultados= respuesta;
    let salida="<table border='1'><tr><th>MARCA</th><th>MODELO</th><th>PRECIO</th></tr>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.marca+"</td><td>"+
        objeto.modelo+"</td><td>"+objeto.precio+"</td>";
    }

    salida+="</table>";

    divResultado.innerHTML=salida;

}



function realizarPeticion(funcionCallback){
    $.ajax({
        url: "datosJSON.php",
        method: "POST",
        data: {marca: $('#marca').val()},
        dataType:'JSON',
        beforeSend:prepararLlamda
    })  .done(escribirResultado)
        .always(terminarLlamada);
}

function prepararLlamda(){
    $("#spinner").show();
}

function terminarLlamada(){
    $("#spinner").hide();
}


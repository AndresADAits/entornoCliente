$(function(){
    $("#botonCrear").click(crearElementos);
});
$(function(){
    $("#botonColorear").click(colorearElementos);
});
$(function(){
    $("#botonBorrar").click(borraElementos);
});
function crearElementos(){
    $("#elementos").empty();
    let numeroDivsACrear = $("#numDivs").val();
    for(let i = 1;i<=numeroDivsACrear;i++){
        let div = $("<div></div");
        let h1 = $(`<h1>DIV Nº${i}</h1>`);
        div.append(h1);
        for(let j = 1;j<=i;j++){
            let input = $("<input />");
            input.attr("type","text");
            input.val(`${i}.${j}`);
            input.attr("id",`${i}_${j}`);
            if(j % 2===0){
                tipo= "par";
            }else{
                tipo="impar";
            }
            input.attr("data-tipo",tipo);
            div.append(input);
        }
        $("#elementos").append(div);
    }
}

function colorearElementos(){
    $("[data-tipo='par']").addClass("inputImpar");

    $("[data-tipo='impar']").addClass("inputPar");
}
function borraElementos(){
    let posi=$("#posi").val();
    let posj=$("#posj").val();
    let elementoABorrar=$(`[id='${posi}_${posj}']`);
    if (elementoABorrar.length >0) {
        elementoABorrar.remove();
        
    }else{
        alert("ESE ELEMENTO NO EXISTE");
    }
}

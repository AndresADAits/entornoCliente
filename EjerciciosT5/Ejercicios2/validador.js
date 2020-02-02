function objetoXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}



function validarModelo() {
    let modeloInput = $("#modelo").val();
    let Input = $("#modelo");
    $.ajax({
            url: "prueba2.php",
            data: { modelo: modeloInput },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
               
                gestionarErrores(Input, text.modelo);
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validarMarca() {
    let inputmarca = $("#marca").val();
    let inputmodelo = $("#modelo").val();
    let Input = $("#marca");
    $.ajax({
            url: "prueba2.php",
            data: { marca: inputmarca, modelo: inputmodelo },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(Input, text.marca);
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validarPrecio() {
    let inputprecio = $("#precio").val();
    let Input = $("#precio");
    $.ajax({
            url: "prueba2.php",
            data: { precio: inputprecio },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(Input, text.precio);
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validarCapacidad() {
    let inputcapacidad = $("#capacidad").val();
    let Input = $("#capacidad");
    $.ajax({
            url: "prueba2.php",
            data: { capacidad: inputcapacidad },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(Input, text.capacidad);
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validarTerminos() {
    let inputterminos = $("#terminos:checked").val();
    let Input = $("#terminos")
    $.ajax({
            url: "prueba2.php",
            data: { terminos: inputterminos },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(Input, text.terminos);
            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    let inputmodelo = $("#modelo");
    let inputmarca = $("#marca");
    let inputprecio = $("#precio");
    let inputcapacidad = $("#capacidad");
    let inputterminos = $("#terminos:checked");
    $.ajax({
            url: "prueba2.php",
            data: { modelo: inputmodelo.val(), marca: inputmarca.val(), precio: inputprecio.val(), capacidad: inputcapacidad.val(), terminos: inputterminos.val() },
            method: "POST",
            dataType: "JSON",
            beforeSend: function() { $("#spinner").css("display", "block"); },
            success: function(text) {
                gestionarErrores(inputmodelo, text.modelo);
                gestionarErrores(inputmarca, text.marca);

                gestionarErrores(inputprecio, text.precio);
                gestionarErrores(inputcapacidad, text.capacidad);

                gestionarErrores(inputterminos, text.terminos);

                if (gestionarErrores(inputmodelo, text.modelo) === false && gestionarErrores(inputmarca, text.marca) === false &&
                    gestionarErrores(inputprecio, text.precio) === false && gestionarErrores(inputcapacidad, text.capacidad) === false &&
                    gestionarErrores(inputterminos, text.terminos) === false) {
                    $.ajax({
                        url: "prueba3.php",
                        data: { modelo: inputmodelo.val(), marca: inputmarca.val(), precio: inputprecio.val(), capacidad: inputcapacidad.val(), terminos: inputterminos.val() },
                        method: "POST",
                        dataType: "JSON",
                    });
                    $("#resultado").html("Se ha creado correctamente");
                }

            }
        })
        .fail(function() {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function() {
            $("#spinner").css("display", "none");
        });
}


function gestionarErrores(input, errores) {
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (Object.keys(errores).length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let i = 0; Object.keys(errores).length > i; i++) {
            divErrores.append("<div>" + errores[i] + "</div>");
        }
    }
    input.parent().next().remove();
    return hayErrores;
}

function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}
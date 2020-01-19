document.addEventListener("DOMContentLoaded",function(){
    let formularioAjaxMYSQL = document.getElementById("formularioMYSQL");
    formularioAjaxMYSQL.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaMYSQL();
    });

    let formularioAjaxPDO = document.getElementById("formularioPDO");
    formularioAjaxPDO.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincronaPDO();
    });

    let formularioCrear = document.getElementById("formularioCrear");
    formularioCrear.addEventListener("submit",function(event){
        event.preventDefault();
        hacerInsert();
    });
})

/////////////////////////////////////////////////////////
// Función crear objeto XMLHTTPRequest///////////////////
/////////////////////////////////////////////////////////

function objetoXHR(){
    if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ // El navegador no implementa la interfaz XHR de forma nativa
                                     // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}//Capturamos el error,
        }
    }
    /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error.
     Más información sobre gestión de errores en:
     HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
     */
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function realizarPeticionAsincronaMYSQL(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    document.getElementById("spinner").style ="display:block";
    miXHR = new objetoXHR();
    miXHR.open("GET", "servidor/datosMYSQL.php", true);
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);
}

function realizarPeticionAsincronaPDO(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    document.getElementById("spinner").style ="display:block";
    miXHR = new objetoXHR();
    miXHR.open("GET", "servidor/datosPDO.php", true);
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);
}

function comprobarEstadoPeticion(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                crearTablaJSON(this.responseText);
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            document.getElementById("spinner").style ="display:none";
            break;    
    }
}

function crearTablaJSON(respuesta){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados= JSON.parse(respuesta);
    //<th>DIRECTOR</th><th>DURACION</th>
    let salida="<table border='1'><tr><th>MARCA</th><th>MODELO</th><th>BATERIA</th><th>OFERTA</th>";

    for (let i=0; i < resultados.length; i++){
        let objeto = resultados[i];
        salida+="<tr><td>"+objeto.marca+"</td><td>"+
        objeto.modelo+"</td><td>"+objeto.bateria+"</td><td>"+objeto.oferta+"</td></tr>";
        /*+objeto.director+"</td><td>"+
        objeto.duracion +"</td></tr>"*/ 
    }

    salida+="</table>";

    divResultado.innerHTML=salida;

}

function hacerInsert(){
    let divResultado =  document.getElementById("resultado");
    divResultado.innerHTML = "";

    let nombre = document.getElementById("nombre").value;
    let modelo = document.getElementById("modelo").value;
    let precio = document.getElementById("precio").value;
    let bateria = document.getElementById("bateria").value;
    let oferta = document.getElementById("oferta").value;
   
    
    if(oferta){
        oferta = 1;
    }else{
        oferta =0;
    }
    document.getElementById("spinner").style ="display:block";
    
    miXHR = new objetoXHR();
    /*miXHR.open("GET", "servidor/datosBusqueda.php?nombre="+nombre, true);
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(null);*/

    miXHR.open("POST", "servidor/insertJSON.php", true);
    let datos = "nombre="+nombre+"&modelo="+modelo+"&precio="+precio+"&bateria="+bateria+"&oferta="+oferta;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    miXHR.send(datos);
}



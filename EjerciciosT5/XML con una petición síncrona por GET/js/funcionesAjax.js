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

/////////////////////////////////////////////////////////
// Función llamadaSincrona: carga el contenido de la url
// en el objeto que se le pasa como referencia,
// usando una petición AJAX de forma SINCRONA.
/////////////////////////////////////////////////////////
function llamadaSincrona(elementoDOM, url){
    if (miXHR){

        //Si existe el objeto miXHR
        miXHR.open('GET', url, false); //Abrimos la url, false=SINCRONA

        // Hacemos la petición al servidor. Como parámetro del método send:
        // null -> cuando usamos GET.
        // cadena con los datos -> cuando usamos POST

        miXHR.send(null);

        //Escribimos la respuesta recibida de la petición AJAX en el objeto DIV

        elementoDOM.appendChild(document.createTextNode(tratarResultadoXML(miXHR.responseText)));

    }
}
function funcionAjaxSincrona(){
    // para crear un objeto XHR lo podremos hacer con la siguiente llamada.
    miXHR = new objetoXHR();

    // Cargamos en el objeto con ID resultados el contenido
    // del fichero datos.txt empleando una petición AJAX.

    llamadaSincrona(document.getElementById("resultadoSincronoXML"),"Servidor/datosXML.php");
}

function llamadaAsincrona(url){
    if (miXHR){
        alert("Comenzamos la peticion AJAX");
        document.getElementById('estado').innerHTML = "";
        document.getElementById('resultadoAsincrono').innerHTML = "";

        //Si existe el objeto miXHR
        miXHR.open('GET', url, true); //Abrimos la url, false=ASINCRONA

        miXHR.onreadystatechange = comprobarEstadoPeticion;

        // Hacemos la petición al servidor. Como parámetro del método send:
        // null -> cuando usamos GET.
        // cadena con los datos -> cuando usamos POST

        miXHR.send(null);
    }
}

/////////////////////////////////////////////////////////
// Función comprobarEstadoPeticion: será llamada en cada cambio de estado de la petición.
// Cuando el estado de la petición(readyState) ==4 quiere decir que la petición ha terminado.
// Tendremos que comprobar cómo terminó(status): == 200 encontrado, == 404 no encontrado, etc.
// A partir de ese momento podremos acceder al resultado en responseText o responseXML
/////////////////////////////////////////////////////////
function comprobarEstadoPeticion(){

    switch(this.readyState){
// Evaluamos el estado de la petición AJAX
// Vamos mostrando el valor actual de readyState en cada llamada.
        case 0: document.getElementById('resultadoAsincronoJSON').innerHTML += "";
            break;
        case 1: document.getElementById('resultadoAsincronoJSON').innerHTML += "";
            break;
        case 2: document.getElementById('resultadoAsincronoJSON').innerHTML += "";
            break;
        case 3: document.getElementById('resultadoAsincronoJSON').innerHTML += "";
            break;
        case 4:
            document.getElementById('resultadoAsincronoJSON').innerHTML += "4 - Completado.";
            if (this.status == 200){
            // Si el servidor ha devuelto un OK
            // Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
                document.getElementById("resultadoAsincronoJSON").appendChild(document.createTextNode(tratarResultadoJSON(this.responseText)));
            }else if(this.status == 404){
                document.getElementById("resultadoAsincronoJSON").appendChild(document.createTextNode("Página no encontrada"));
            }else if(this.status == 500){
                document.getElementById("resultadoAsincronoJSON").appendChild(document.createTextNode("Error interno del servidor"));
            }else if(this.status === 'parsererror'){
                document.getElementById("resultadoAsincronoJSON").appendChild(document.createTextNode("Conversión a JSON fallida"));
            }else if(this.status === 'timeout'){
                document.getElementById("resultadoAsincronoJSON").appendChild(document.createTextNode("Tiempo de espera agotado"));
            }else if(this.status === 'abort'){
                document.getElementById("resultadoAsincronoJSON").appendChild(document.createTextNode("Petición AJAX abortada"));
            }
            document.getElementById("spinner").style ="display:none";
            break;
    }
}

function comprobarEstadoPeticion2(){

    switch(this.readyState){
// Evaluamos el estado de la petición AJAX
// Vamos mostrando el valor actual de readyState en cada llamada.
        case 0: document.getElementById('resultadoAsincronoJSON2').innerHTML += "";
            break;
        case 1: document.getElementById('resultadoAsincronoJSON2').innerHTML += "";
            break;
        case 2: document.getElementById('resultadoAsincronoJSON2').innerHTML += "";
            break;
        case 3: document.getElementById('resultadoAsincronoJSON2').innerHTML += "";
            break;
        case 4:
            document.getElementById('resultadoAsincronoJSON2').innerHTML += "";
            if (this.status == 200){
            // Si el servidor ha devuelto un OK
            // Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
                document.getElementById("resultadoAsincronoJSON2").appendChild(document.createTextNode("Registro creado correctamente"));
            }else if(this.status == 404){
                document.getElementById("resultadoAsincronoJSON2").appendChild(document.createTextNode("Página no encontrada"));
            }else if(this.status == 500){
                document.getElementById("resultadoAsincronoJSON2").appendChild(document.createTextNode("Error interno del servidor"));
            }else if(this.status === 'parsererror'){
                document.getElementById("resultadoAsincronoJSON2").appendChild(document.createTextNode("Conversión a JSON fallida"));
            }else if(this.status === 'timeout'){
                document.getElementById("resultadoAsincronoJSON2").appendChild(document.createTextNode("Tiempo de espera agotado"));
            }else if(this.status === 'abort'){
                document.getElementById("resultadoAsincronoJSON2").appendChild(document.createTextNode("Petición AJAX abortada"));
            }
            document.getElementById("spinner").style ="display:none";
            break;
    }
}

/////////////////////////////////////////////////////////
// Función llamadaAsincrona2: será llamada al realizar peticiones asíncronas.
// url => URL a dónde realizamos la petición
// tipo => GET o POST
// datos => datos que se enviarán por GET o POST. GET siempre sera null
// funcionCallback => funcion que se ejecutará despues de que termine el proceso asíncrono
/////////////////////////////////////////////////////////

function peticionAJAXJSON(){
    miXHR = new objetoXHR();
    if (miXHR){
        document.getElementById("spinner").style ="display:block";
        let marca = document.getElementById("marca").value;
        let camara = document.getElementById("camara").checked;
        let bateria = document.getElementById("bateria").value;
       
        if(camara){
            camara = new Date().getFullYear();
        }else{
            camara = "";
        }

        miXHR.open("POST", "servidor/datosJSON.php", true);
        miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        let texto = "marca="+marca+"&camara="+camara+"&bateria="+bateria;
        miXHR.onreadystatechange = comprobarEstadoPeticion;
        miXHR.send(texto);
    }
}
function crearRegistroJSON(){
    miXHR = new objetoXHR();
    if (miXHR){
        document.getElementById("spinner").style ="display:block";
        let marca = document.getElementById("marca2").value;
        let modelo = document.getElementById("modelo2").value;
        let camara = document.getElementById("camara2").value;
        let precio = document.getElementById("precio2").value;
        let bateria = document.getElementById("bateria2").value;

        miXHR.open("POST", "servidor/creardatosJSON.php", true);
        miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        let texto = "marca="+marca+"&modelo="+modelo+"&camara="+camara+"&precio="+precio+"&bateria="+bateria;
        miXHR.onreadystatechange = comprobarEstadoPeticion2;
        miXHR.send(texto);
    }
}


function ejecutarFuncionAjax(tipoRespuesta,funcion){
    return function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = "";
            switch(tipoRespuesta){
                case "XML":
                    respuesta = this.responseXML;
                    break;
                default :
                    respuesta = this.responseText;
                    break;
            }
            funcion(respuesta);

            
            document.getElementById("spinner").style ="display:none";
        }
    }
}


function llamadaAsincrona2(url,tipo,datos,tipoRespuesta,funcionCallback){
    miXHR = new objetoXHR();
    if (miXHR){
        document.getElementById("spinner").style ="display:block";

        miXHR.open(tipo, url, false);

        miXHR.onreadystatechange = ejecutarFuncionAjax(tipoRespuesta,funcionCallback);


        miXHR.send(datos);
    }
}





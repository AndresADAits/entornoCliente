
function tratarResultadoJSON(respuesta){
    var resultados= JSON.parse(respuesta)
    
    if(resultados.length === 0){
        document.getElementById("resultadoAsincronoJSON").innerHTML="No existen registros con los parametros indicados";
    }else{
        let salida="<table border='1'><tr><th>IDMOVIL</th><th>MARCA</th><th>MODELO</th><th>camara</th><th>precio</th><th>bateria</th></tr>";
        for (let i=0; i < resultados.length; i++){
            let objeto = resultados[i];
            salida+="<tr><td>"+
            objeto.idmovil+"</td><td>"+
            objeto.marca+"</td><td>"+
            objeto.modelo+"</td><td>"+
            objeto.camara+"</td><td>"+
            objeto.precio+"</td><td>"+
            objeto.bateria+"</td></tr>";
        }
        salida+="</table>";

        document.getElementById("resultadoAsincronoJSON").innerHTML=salida;
    }
    
}

function tratarResultadoXML(textoXMLRespuesta){
    let  datos=textoXMLRespuesta;

    // Tenemos que recorrer el fichero XML empleando los métodos del DOM
    let moviles = datos.documentElement.getElementsByTagName("stock");// sino es stock es moviles

    // En la variable salida compondremos el código HTML de la tabla a imprimir.
    let salida="<table border='1'><tr><th>MARCA</th><th>MODELO</th><th>CAMARA</th><th>PRECIO</th><th>BATERIA</th></tr>";

    // Hacemos un bucle para recorrer todos los elementos CD.
    for (let i=0;i<moviles.length;i++){
        salida+="<tr>";

        let marca =moviles[i].getElementsByTagName("marca");
        salida+="<td>" + marca[0].firstChild.nodeValue + "</td>";

        let modelo =moviles[i].getElementsByTagName("modelo");
        salida+="<td>" + modelo[0].firstChild.nodeValue + "</td>";

        let camara =moviles[i].getElementsByTagName("camara");
        salida+="<td>" + camara[0].firstChild.nodeValue + "</td>";

        let precio =moviles[i].getElementsByTagName("precio");
        salida+="<td>" + precio[0].firstChild.nodeValue + "</td>";

        let bateria =moviles[i].getElementsByTagName("bateria");
        salida+="<td>" + bateria[0].firstChild.nodeValue + "</td>";

        

    // Cerramos la fila.
        salida+="</tr>";
    }

    // Cuando ya no hay más peliculas cerramos la tabla.
    salida+="</table>";

    // Imprimimos la tabla dentro del contenedor resultados.
    document.getElementById("resultadoAsincronoXML").innerHTML=salida;
}
function SincronaXML(){
    llamadaAsincrona2("servidor/datosXML.php","GET",null,"XML",tratarResultadoXML);
}
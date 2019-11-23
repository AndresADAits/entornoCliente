/**let usuario1 = { nombre: "Thor", apellidos: "Perro", edad: 18, profesion: "profesor" };
let usuario2 = { nombre: "Capitan America", apellidos: "Gato", edad: 19, profesion: "limpiador" };


let listadoUsuarios = [usuario1, usuario2]; */
let listadoUsuarios = [];

document.addEventListener("DOMContentLoaded", function () {

    /**let boton = document.getElementById("mostrarUsuarios");
    boton.addEventListener("click", mostrarUsuarios); */

    //let selectEspecie = document.getElementById("esp");
    //selectEspecie.addEventListener("change",mostrarUsuariosFiltrados);

    //let boton2 = document.getElementById("botonMostrarOrdenados");
    //boton2.addEventListener("click",mostrarUsuariosOrdenados);

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup", validarNombre);

    let inputApellido = document.getElementById("apellido");
    inputApellido.addEventListener("keyup", validarApellido);

    let inputEdad = document.getElementById("edad");
    inputEdad.addEventListener("keyup", validarEdad);

    let inputProfesion = document.getElementById("profesion");
    inputProfesion.addEventListener("click", validarProfesion);

    let inputPolitica = document.getElementById("politica");
    inputPolitica.addEventListener("click", validarPolitica);

    let formulario = document.getElementById("formularioCrearUsuario");
    formulario.addEventListener("submit", validarFormulario);
})


function mostrarUsuarios() {
    /*let divListadoUsuarios = document.getElementById("listadoUsuarios");
    //Borro el contenido de el div ListadoUsuarios
    divListadoUsuarios.innerHTML = "";
    let ulUsuarios = document.createElement("ul");
    for(let animal of listadoUsuarios){
        let liAnimal = document.createElement("li");
        liAnimal.innerHTML = animal.nombre;
        ulUsuarios.appendChild(liAnimal);
    }  
    divListadoUsuarios.appendChild(ulUsuarios);*/
    mostrarUsuariosRefactorizados("listadoUsuarios", listadoUsuarios);
}

function mostrarUsuariosRefactorizados(idDivMostrar, lista) {
    let divListadoUsuarios = document.getElementById(idDivMostrar);
    //Borro el contenido de el div ListadoUsuarios
    divListadoUsuarios.innerHTML = "";
    let ulUsuarios = document.createElement("ul");
    for (let usuario of lista) {
        let liUsuarios = document.createElement("li");
        liUsuarios.innerHTML = usuario.nombre;
        ulUsuarios.appendChild(liUsuarios);
    }
    divListadoUsuarios.appendChild(ulUsuarios);
}
/**
function mostrarUsuariosFiltrados(){
    let selectEspecie = document.getElementById("esp");
    let especieSeleccionada = selectEspecie.value;
    let especiesFiltradas = filtrarPorEspecies(especieSeleccionada);repaso
    mostrarUsuariosRefactorizados("listadoUsuariosFiltrados",especiesFiltradas);

}

function filtrarPorEspecies(apellidos){
    return listadoUsuarios.filter( x => x.apellidos.toLocaleLowerCase() === apellidos.toLocaleLowerCase());
}

function mostrarUsuariosOrdenados(){
    listadoUsuarios.sort( (x,y) => - x.nombre.localeCompare(y.nombre) );
    mostrarUsuariosRefactorizados("listadoUsuariosOrdenados",listadoUsuarios);
}
 */

function validarNombre(event) {
    let esCorrecto = true;
    let inputNombre = document.getElementById("nombre");
    let valor = inputNombre.value;
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");


    //Comprobamos que usa solo letras o espacio
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS o ESPACIOS";
        listaErrores.appendChild(divError);
    }

    //comprobamos que es al menos tres caracteres

    if (valor.length < 4) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "AL MENOS DEBE SER DE 3 CARACTERES";
        listaErrores.appendChild(divError);
    }

    if (valor === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "ESTA VACIO";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputNombre.classList.add("inputCorrecto");
    } else {
        inputNombre.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarApellido(event) {
    let esCorrecto = true;
    let inputApellido = document.getElementById("apellido");
    let valor = inputApellido.value;
    let inputNombre = document.getElementById("nombre");
    let valor2 = inputNombre.value;

    let listaErrores = document.getElementById("erroresApellido");
    listaErrores.innerHTML = "";
    inputApellido.classList.remove("inputErroneo");
    inputApellido.classList.remove("inputCorrecto");

    //comprobamos que tiene 3 caracteres

    if (valor.length < 4) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "AL MENOS DEBE SER DE 3 CARACTERES";
        listaErrores.appendChild(divError);
    }

    //Comprobamos que el  nombre no es igual que apellido

    if (valor === valor2) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "EL APELLIDO ES IGUAL QUE EL NOMBRE";
        listaErrores.appendChild(divError);
    }


    //Comprobamos que usa solo letras o espacio
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS o ESPACIOS";
        listaErrores.appendChild(divError);
    }



    //COMPROBAMOS QUE NO ESTA VACIO

    if (valor === "") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "ESTA VACIO";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputApellido.classList.add("inputCorrecto");
    } else {
        inputApellido.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarEdad() {

    let esCorrecto = true;
    let inputEdad = document.getElementById("edad");
    let valor = inputEdad.value;
    let listaErrores = document.getElementById("erroresEdad");
    listaErrores.innerHTML = "";
    inputEdad.classList.remove("inputErroneo");
    inputEdad.classList.remove("inputCorrecto");


    //Comprobamos que usa solo letras o espacio
    if (!/^[0-9]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE NUMEROS";
        listaErrores.appendChild(divError);
    }

    //COMPROBAMOS QUE ES MAYOR DE 18
    if (valor < 18) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "ESTA MENOS DE 18";
        listaErrores.appendChild(divError);
    }
    if (esCorrecto) {
        inputEdad.classList.add("inputCorrecto");
    } else {
        inputEdad.classList.add("inputErroneo");
    }
    return esCorrecto;

}

function validarProfesion() {
    let esCorrecto = true;
    let inputProfesion = document.getElementById("profesion");
    let valor = inputProfesion.value;
    let listaErrores = document.getElementById("erroresProfesion");
    listaErrores.innerHTML = "";
    inputProfesion.classList.remove("inputErroneo");
    inputProfesion.classList.remove("inputCorrecto");


    //Comprobamos que usa solo letras o espacio
    if (valor === "ninguna") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO se puede ser LIMPIADOR, PROFESOR, RECEPCIONISTA O ADMINISTRADOR";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputProfesion.classList.add("inputCorrecto");
    } else {
        inputProfesion.classList.add("inputErroneo");
    }
    return esCorrecto;
}



function validarPolitica() {
    let esCorrecto = true;
    let inputPolitica = document.getElementById("politica");
    let valor = inputPolitica.value;
    let listaErrores = document.getElementById("erroresPolitica");
    listaErrores.innerHTML = "";
    inputPolitica.classList.remove("inputErroneo");
    inputPolitica.classList.remove("inputCorrecto");

    if (!inputPolitica.checked) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "ACEPTAR POLITICA";
        listaErrores.appendChild(divError);

    }

    if (esCorrecto) {
        inputPolitica.classList.add("inputCorrecto");
    } else {
        inputPolitica.classList.add("inputErroneo");
    }
    return esCorrecto;
}


function validarFormulario(event) {
    event.preventDefault();
    let esFormularioCorrecto = false;
    let esCorrectoNombre = validarNombre();
    let esCorrectoApellido = validarApellido();
    let esCorrectoEdad = validarEdad();
    let esCorrectoProfesion = validarProfesion();
    let esCorrectoPolitica = validarPolitica();
    /**let esCorrectoEspecie = validarEspecie();
    let esCorrectoedad = validaredad();
    let esVidaCorrecta = validarVida(); */
    /** if(esCorrectoedad 
         && esCorrectoNombre 
         && esCorrectoEspecie){
         esFormularioCorrecto = true;
     } */
    if (esCorrectoNombre && esCorrectoApellido && esCorrectoEdad && esCorrectoProfesion && esCorrectoPolitica
    ) {
        esFormularioCorrecto = true;
    }

    if (esFormularioCorrecto) {
        let formulario = event.target;
        //formulario.submit();

        //Crear un objeto USUARIO y añadirlo a la lista de Usuarios
        let usuario = {};
        let nombre = document.getElementById("nombre").value;
        let apellidos = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let profesion = document.getElementById("profesion").value;
        let politica = document.getElementById("politica").value;
        usuario.nombre = nombre;
        usuario.apellidos = apellidos;
        usuario.profesion = profesion;
        usuario.edad = edad;
        usuario.politica=politica;
        listadoUsuarios.push(usuario);
        alert("SE HA CREADO EL USUARIO CORRECTAMENTE");
        formulario.reset();

        let divNombre = document.getElementById("nombreUsuario");
        divNombre.innerHTML = usuario.nombre;

        let divApellidos = document.getElementById("apellidosUsuario");
        divApellidos.innerHTML = usuario.apellidos;

        let divEdad = document.getElementById("edadUsuario");
        divEdad.innerHTML = usuario.edad;

        let divProfesion = document.getElementById("profesionUsuario");
        divProfesion.innerHTML = usuario.profesion;

        let divPolitica = document.getElementById("politicaUsuario");
        divPolitica.innerHTML = usuario.politica;



    } else {
        alert("HAY ERRORES EN EL FORMULARIO");
    }

}
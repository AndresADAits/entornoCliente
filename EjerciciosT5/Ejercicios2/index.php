<!DOCTYPE html>
<html lang="en">
<head lang="en">
    <meta charset="UTF-8">
    <title>Ejemplo Ajax</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Incluimos librería Bootstrap css-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">


    <!-- Incluimos las librerís JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="ejemplo.js" defer></script>
    <link rel="stylesheet" href="css.css">
</head>
<body>

<form id="formulario" method="POST" action="" onsubmit="validarFormulario()">
        <label for="">Modelo</label>
        <input type="text" class="modelo" id="modelo" onchange="validarModelo()">
        <div class="error bg-danger"></div>
        <br>
        <label for="">Marca</label>
        <input type="text" class="marca" id="marca" onchange="validarMarca()">
        <div class="error bg-danger"></div>
        <br>
        <label for="">Precio</label>
        <input type="text" class="precio" id="precio" onchange="validarPrecio()">
        <div class="error bg-danger"></div>
        <br>
        <label for="">Capacidad</label>
        <select name="capacidad" id="capacidad"onchange="validarCapacidad()">
            <option value=""></option>
            <option value="32">32 MB</option>
            <option value="64">64 MB</option>
            <option value="128">128 MB/option>
            
        </select>
        <div class="error bg-danger"></div><br>
        <label for="">Aceptar Terminos*</label>
<input type="checkbox" name="" id="terminos" class="terminos" onclick="validarTerminos()">
<div class="error bg-danger"></div><br>
<button class="btn btn-success">Enviar Formulario</button>
<div id="resultado"></div>


    </form>
    <div class="modal fade" id="modal" data-backdrop="static">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">VALIDANDO</h5>
                        </div>
                        <div class="modal-body">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated w-100 bg-info" role="progressbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

</body>
</html>
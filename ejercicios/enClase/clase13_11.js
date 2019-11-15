document.addEventListener("DOMContentLoaded", function(event) {
    
    let input = document.getElementById("nombre");
input.addEventListerner("keyup",escribir);
let input2= document.getElementById("numero");
input.addEventListener("keyup", alertaSiNoEsNumero);
    });

    function escribir (event){
        let div= document.getElementById("resultado");
        //let teclaPulsada = event.key;
        //div.innerHTML +=teclaPulsada;

        let inputNombre=document.getElementById("nombre");
        div.innerHTML= inputNombre.value;

    }

    /**function alertaSiNoEsNumero(event){
        //let div= document.getElementById("resultado2");
        let inputNumero= document.getElementById("numero");
        let valor = inputNumero.value;
        let expretion= /^[0-9]*$/;
        inputNumero.classList.remove("");
        inputNumero.classList.remove();

        if (expretion.test(valor)) {
            
            inputNumero.classList

            
        }else{
            ([^0-9])
        }
       
        div.innerHTML=
    } */

function muestaOcultaPass(event){
    
}
    


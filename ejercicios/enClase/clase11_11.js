/**CREAR FUNCION QUE DADO UN NUMERO CREE ESE NUMERO DE DIVS PERO 
 * CON UN ANCHO Y UN ALTO DE 100PX POR EL ORDEN QUE SE MUESTRA. 
 * TODOS LOS DIVS TIENEN QUE TENER UN BORDE DE 1PX SOLID BLACK.
 * lOS DIVS IMPARES DEBEN TENER COLOR VERDE Y LOS PARE COLOR ROJO.
 * cADA DIV DEBE MOSTARAR SU NUMERO CORRESPONDIENTE CON UN H2 POR EJEMPLO: DIV 1 */

function creaDivs(numero) {
    for (let i = 1; i <= numero; i++) {//esto lo hago para luego no poner +1 en linea 11 y que me cuadre lo de par impar por color

        let div = document.createElement("div");
        let tamano = 100 * i;
        let h1=document.createElement("h1");
        h1.innerHTML=`DIV${i}`;
        div.style.width = `${tamano}px`;
        div.style.height = `${tamano}px`;

        if(i%2===0){
div.style.backgroundColor='red';

        }else{
            div.style.backgroundColor='green';
        }
div.style.border='1px solid black';
document.body.appendChild(div);
div.appendChild(h1);
    }
}
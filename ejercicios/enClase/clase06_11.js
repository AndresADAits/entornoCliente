
/**
 * Usando las siguientes propiedades DOM en document.body
 *
 * 
 * document.createElement
 * appendChild
 * setAttribute
 * 
 * crean una funcion que cree 10 divs con id que vaya cambiando de nombre respectivo
 * y dentro de cada uno 10 input con name div1_1 y asi sucesivamente.
 * 
 * 
 */

function creaDom(numero) {
  
    for (let i = 0; i < numero; i++) {
        let div = document.createElement("div");
        div.setAttribute("id", "div"+i);
        for (let j = 0; j < numero; j++) {
            let input= document.createElement("input");
            input.setAttribute("name", "div"+i+"_"+j);
            div.appendChild(input);
        }
        document.body.appendChild(div);
    }

}

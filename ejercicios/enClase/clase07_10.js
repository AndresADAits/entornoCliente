function contarVocales(lista) {
    let vocales = 0;
    for (let letra of lista) {
        console.log(letra);
        switch (letra) {
            case "A":
            case "a":
            case "E":
            case "e":
            case "I":
            case "i":
            case "O":
            case "o":
            case "U":
            case "u":
                vocales++;
                break;
        }
    }
    return vocales;
}

function factorial(num) {
    //para controlar que no entre por teclado '3' texto, que tambien valdria usamos typeof
    if (typeof num === 'number') {
        let sumafactorial = num;
        for (let i = num - 1; i >= 2; i--) {
            sumafactorial *= i;
        }
        return sumafactorial;
    }

}

function comparaLista(lista1, lista2) {
    let vida1 = 0;
    let vida2 = 0;
    let empate = 0;
    for (let letra of lista1) {
        if (lista1[letra] > lista2[letra]) {
            vida1++;
        }
        else if (lista1[letra] < lista2[letra]) {
            vida2++;
        }
        else {
            empate++;
        }
    }
    return vida1, vida2, empate;
    /*    console.log(`Wins de la lista1 = $vida1´);
    console.log(`Wins de la lista2 = $vida2´);
    console.log(`Empates = $empate´); */

}

comparaLista([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);

function concatenaLista(lista) {
    let resultado = "";
    let tamLista = lista.lenght;
    
    for (let i = 0; i < tamLista / 2; i++) {
        if (i === ( tamLista -i -1 )) {
            resultado += lista[i];
        }else{
            resultado += lista[i]
            resultado += lista[tamLista - i - 1];
        }
        console.log("EL REUSLTADO DE CONCATENAR ES :"+resultado);
        return resultado;
    }
}

    concatenaLista(["a", "b"]); 
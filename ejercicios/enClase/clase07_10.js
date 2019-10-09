function contarVocales(lista) {
    let vocales = 0;
    for (let letra of lista) {
        console.log(letra);
        switch (letra) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'á':
            case 'é':
            case 'í':
            case 'ó':
            case 'ú':
            case 'Á':
            case 'É':
            case 'Í':
            case 'Ó':
            case 'Ú':
            case 'ä':
            case 'ë':
            case 'ï':
            case 'ö':
            case 'ü':
            case 'Ä':
            case 'Ë':
            case 'Ï':
            case 'Ö':
            case 'Ü':
            case 'à':
            case 'è':
            case 'ì':
            case 'ò':
            case 'ù':
            case 'À':
            case 'È':
            case 'Ì':
            case 'Ò':
            case 'Ù':
            case 'â':
            case 'ê':
            case 'î':
            case 'ô':
            case 'û':
            case 'Â':
            case 'Ê':
            case 'Î':
            case 'Ô':
            case 'Û':
                vocales++;
                break;
        }
    }
    return vocales;
}

function factorial(num) {
    let sumafactorial = 0;
    if (typeof num === 'number') {
        let sumafactorial = num;
        for (var i = num - 1; i > 0; i--) {
            sumafactorial = sumafactorial * i;
        }
        return sumafactorial;
    } else {
        return "No has introducido un numero";
    }
}

function comparaLista(lista1, lista2) {
    let list1 = 0;
    let list2 = 0;

    for (let i = 0; i < lista1.length; i++) {
        if (typeof lista1[i] === 'number' && lista2[i] === 'number') {
            if (lista1[i] > lista2[i]) {
                list1++;
            } else if (lista1[i] < lista2[i]) {
                list2++;
            }
        }
    }
    if (list1 === list2) {
        console.log("Empate");
    } else {
        if (list1 > list2) {
            console.log(`Gana lista 1 con : ${list1}`);
        } else {
            console.log(`Gana lista 2 con : ${list2}`);
        }
    }
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
        console.log("EL RESuLTADO DE CONCATENAR ES :"+resultado);
        return resultado;
    }
}

    concatenaLista(["a", "b"]); 
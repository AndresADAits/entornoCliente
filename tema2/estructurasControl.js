function recorrerForIn() {
    //quizas para recorrer array de forma inversa, esta forma seria correcta
    let lista = ["Pepito", "Jaimito", "Richy", "Gilito", "Jorgito"]
    console.log("BUCLE FOR NORMAL");
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }

    //ahora el forin

    console.log("BUCLE FOR IN");
    for (let pos in lista) {
        console.log(lista[pos])
    }
    //finalmente la forma correcta actualmente para array
    //for of

    console.log("BUCLE FOR OF");
    for (let nombre of lista) {
        console.log(nombre);
    }

}


function esValidoFormatoRGB(color) {
    let ok = false;
    let colorMin = color.toLowerCase();
    let arrayPermitido = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    if ((colorMin.indexOf("#") === 0) && colorMin.length === (3||6)) {
        /**
         * El fallo esta aqui arriba, cuando digo que el length sea 3 o 6, que aparte de estar mal porque son 4 o 7, esta mal declarado y asi siempre me daba false, pusiera lo que pusiera,
         * finalmente cambio algo más al resolverlo pero es un error que me ha parecido significativo
         *  if (colorMin.indexOf("#") === 0 && ((colorMin.length === 7) || (colorMin.length === 4))) {
         */

        for (let i = 1; i < colorMin.length; i++) {
            if (colorMin[i].includes(arrayPermitido)) {
                ok = true;
            } else {
                ok = false;
            }
        }
    }
    return ok;
}
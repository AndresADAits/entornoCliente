
function validarTelefonoMovil(telefono) {
    let valido = false;

    if (telefono.length === 9) {
        if (telefono.startsWith("6") || telefono.startsWith("7")) {
            let tlf = telefono.slice("")
            for (let num of tlf) {
                switch (num) {
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        valido = true;
                        break;

                    default:
                        valido = false;
                        break;
                }
            }
        }
    }
    return valido;
}

function letraDni(dni) {
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let numDni = dni % 23;
    let letra = letras.charAt(numDni);
    return letra;
}

function dniValido(dni) {
    let valido = false;
    dni = dni.trim();
    if (dni.length === 9) {
        let numero = parseInt(dni.substring(0, 8));
        let letra = dni.charAt(8);
        let letraDNI = letraDni(numero);
        if (letra.toLocaleUpperCase() === letraDNI) {
            valido = true;
        }
    }
    return valido;
}

function emailValido(email) {
    let mailValido = false;
    let mail = email.trim().replace(" ", "");
    let textoMail = mail.split("@");

    if (textoMail[0].length >= 1
        && textoMail[1].length >= 3
    ) {
        let textoPunto = textoMail[1].split(".");
        if (textoPunto[0].length >= 1
            &&
            textoPunto[1].length >= 1
        ) {
            mailValido = true;
        }
    }

    return mailValido;
}

//minimo de 9 caracteres, todas las letras mayusculas, minimo de 2 numeros, y minimo un ! o ?

function validaPass(pass) {
    let ok = false;
    let esnumero = 0;
    let especial = 0;
    let cortado = pass.slice("");
    if (pass.length >= 9) { //compruebo el largo minimo
        if (pass == pass.toLocaleUpperCase()) {//compruebo que estan en mayusculas
            for (let num of cortado) {//recorro todos los caracteres 
                switch (num) {// Aqui compruebo que hay dos numeros y un especial
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        esnumero++;
                        break;
                    case "?":
                    case "!":
                        especial++
                        break;
                    default:
                        ok = false;
                        break;
                }
            }
        }
        if (esnumero >= 2 && especial >= 1) {// si hay al menos dos numero, un especial, lo demas en mayusculas y un length de 9
            ok = true;
        }
    }

    return ok;

}
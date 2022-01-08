function introducirNumero(valor) {
    if (document.forms["fPantalla"]["pantalla"].value == 0) {
        document.forms["fPantalla"]["pantalla"].value = valor;  
    } else {
        document.forms["fPantalla"]["pantalla"].value += valor;
    }
}

function borrar() {
    document.forms["fPantalla"]["pantalla"].value = 0;
}
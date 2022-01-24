var num1 = 0;
var operador = " ";
var num2 = 0;
var res = 0;

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

function suma() {
    num1 = document.forms["fPantalla"]["pantalla"].value;
    operador = "+";
    borrar();
}

function resta() {
    num1 = document.forms["fPantalla"]["pantalla"].value;
    operador = "-";
    borrar();
}

function multiplicacion() {
    num1 = document.forms["fPantalla"]["pantalla"].value;
    operador = "*";
    borrar();
}

function division() {
    num1 = document.forms["fPantalla"]["pantalla"].value;
    operador = "/";
    borrar();   
}

function raizCuadrada() {
    num1 = document.forms["fPantalla"]["pantalla"].value;
    operador = "raizCuad";
    borrar();     
}

function cubo() {
    num1 = document.forms["fPantalla"]["pantalla"].value;
    operador = "x^y";
    borrar();
}

function fraccion() {
    num1 = document.forms["fPantalla"]["pantalla"].value;
    operador = "1/x";
    borrar();
}

function mostrarResultado() {
    num2 = document.forms["fPantalla"]["pantalla"].value;    
    switch (operador) {
        case "+": res = parseFloat(num1) + parseFloat(num2);
        break;
        case "-": res = parseFloat(num1) - parseFloat(num2);
        break;
        case "*": res = parseFloat(num1) * parseFloat(num2);
        break;
        case "/": res = parseFloat(num1) / parseFloat(num2);
        break;
        case "raizCuad": res = Math.cbrt(num1);
        break;
        case "x^y": res = Math.pow(parseFloat(num1),parseFloat(num2));
        break;
        case "1/x": res = 1 / parseFloat(num1);
        break;
        default: res = "Operador invalido";
        break;
    }
    borrar();
    document.forms["fPantalla"]["pantalla"].value = res;
}
//Funciones sin parámetros

//Declaración de la funcion

function saludo() {

    //Tarea de la función
    console.log("Hola");
}

//Ejecución de la función

saludo();

//Funciones con parámetros

function operacion(digito1, digito2) {

    var resultado = digito1 + digito2;
    console.log(resultado);

}

operacion(5, 7);


//Funciones con retorno sin parámetros

function retorno1() {

    var numero = 5;
    return numero;

}

console.log(retorno1());

//Funciones con retorno con parámetros

function retorno2(numero) {


    return numero;
}

console.log(retorno2(10));
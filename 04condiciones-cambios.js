//Condiciones

var a = 5;
var b = 10;

if (a > b) {
    console.log("a es mayor que b");
} else if (a == b) {
    console.log("a es igual a b");
} else {
    console.log("a no es lo mismo que b, y es menor que b");
}


//Cambios

var dia = "Lunes";

switch (dia) {

    case "sabado":
        console.log("Voy a estudiar PHP");
        break;
    case "martes":
        console.log("Voy a estudiar CSS");
        break;
    case "jueves":
        console.log("Voy a estudiar HTML");
        break;
    case "domingo":
        console.log("Voy a descansar");
        break;

    default:
        console.log("Voy a estudiar JS"); //Caso por defecto igual al else
}
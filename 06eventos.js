var recuadro = document.querySelector("#recuadro");

//Eventos desde el DOM

function cambiarColor() {

    recuadro.style.background = "red";
}

//Eventos desde JS

var boton = document.querySelector("#boton");

boton.addEventListener("click", moverCaja);

function moverCaja() {

    recuadro.style.width = "500px";
    recuadro.style.transition = "1s width ease";
}
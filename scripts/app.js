var imagenPrincipal = document.getElementById("trabajos-uno__principal");


var imagenUno = document.getElementById("trabajos-uno__minUno");
var imagenDos = document.getElementById("trabajos-uno__minDos");
var imagenTres = document.getElementById("trabajos-uno__minTres");

imagenUno.onclick = function(){
    imagenPrincipal.src = "../images/trabajoPpal_1.png";
}
imagenDos.onclick = function(){
    imagenPrincipal.src = "../images/trabajoPpal_2.png";
}
imagenTres.onclick = function(){
    imagenPrincipal.src = "../images/trabajoPpal_3.png";
}
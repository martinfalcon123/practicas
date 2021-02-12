'use strict'

//bom - browser object model

function getBom(){
console.log(screen.Width);
//console.log(window.innerWidth);//para ver la anchura de la ventana

console.log(window.innerHeight);//para ver la altura de la ventana

console.log(window.location.href);//para sacar la localizacion
}

//CON ESTE METODO LO QUE PUEDO HACER ES REDIRECCIONAR AL OTRO SITIO
function redirect(url){
  window.location.href= url;
}

function abrirVetana(url){

  window.open(url,"","Width=400, height=700");
}


getBom();

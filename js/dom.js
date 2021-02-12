'use strict'

//DOM documente objet model

function cambiaColorLetra(color){
	caja.style.color = color;

}
function cambiaFondo(color){

	caja.style.background = color;
}

//CONSEGUIR ELEMNTOS CON ID CONCRETO 


//var caja =document.getElementById("micaja");

//var caja= document.querySelector("#micaja");  //# SE UTLIZA PARA SELECCIONAR ELEMNTOS DE UN ID
//caja.innerHTML= "texto en la caja desde html";
//caja.style.color="red";
 //con esta manera le cambio lo que dice en el texto desde js
//busco esse elemnto
//CON innerhtml me saque por panatalla los que esta enntre el div que esta guadado como "mi caja"

//caja.className="hola";

//CONSEGUIR
		/*var todosLosDivs= document.getElementsByTagName('div');
	var valor;
	for(valor in todosLosDivs){
	var parrafo= document.createElement("p");
	var texto= document.createTextNode(todosLosDivs[valor].textContent);

	parrafo.appendChild(texto);
	document.querySelector("#miseccion").appendChild(parrafo);
*/

//});
/*var todosLosDivs= document.getElementsByTagName('div');
console.log(todosLosDivs);
var contenido = todosLosDivs[2];
contenido.innerHTML="martin falcon"; //para acceder a un alemento del array
contenido.style.color ="red";
console.log(contenido);
*/
//CONSEGUIR ELEMENOS POR SU CLASE 

//console.log(caja); 

//conseguir elementos por su clase css

var divsRojos= document.getElementsByClassName('rojo');

console.log(divsRojos);

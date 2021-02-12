'use strict'

/*
1. pida 6 numero(s por pantalla y los meta en un array
2. mostrar el array entero / todo sus elementos en el cuerpo de pagina y en la consola
3. ordenarlo y mostrarlo
4. invertir su orden y mostrarlo
5. mostar cuantos elemntos tiene el array
6. busqueda de un valor introducido por el usuario que nos diga si lo encunetra y su indice
*/


function mostrarArray(elementos, textoCustom =""){
	document.write("<h1>contenido dentro del array"+textoCustom+"</h1>")

	document.write("<ul>");
	elementos.forEach((elemento, index) =>{
	document.write("<li>" +elemnto+ "</li> ");


	});
	document.write("</ul>")
}

//PIDE 6 NUMEROS 
var numeros = new Array(6);//solamente hasta 5 elemnetos introducidos por rl usuario
// var numeros=[]; creo un arrauy vacio
for(var i=0; i<=5;i++){//repite 5 veces
	//numeros [i]= parseInt(prompt("introduce un numero",0)); //pido al usuario que ingrese
	numeros.push(parseInt(prompt("introduce un numero",0))); //otra forma
}

//MOSTRAR EN EL CUERPO DE LA PAGINA
 mostrarArray(numeros);
// muestra el array entero por la consola
console.log(numeros);

//ordenar y mostrar
// con el metod sort los ordena

numeros.sort();
console.log(numeros);//aca low muestros

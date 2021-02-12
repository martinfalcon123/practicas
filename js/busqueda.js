'use strict'

var nuemero=444;
var texto1="bienvenido al curso de curso js";
var texto2="es muy buen curso";

//var busqueda= texto1.lastIndexOf("curso");
/*var busqueda= texto1.charAt(20);
var busqueda= texto1.startsWith("");*/
//var busqueda= texto1.includes("bienvenido");

// busqueda= texto1.replace("curso","clase");//replace reemplazo una palabra nueva que deseo
var busqueda= texto1.slice(14);//corto el texto y lo muestro apartir del string que le asigno

//var busqueda= texto1.split(" ");//me lo pone todo en array
var busqueda= texto1.trim();



//var busqueda= texto1.substr(14,9);
//para buscar la posicion de la palabra y hasta donde quiero verla 

//var busqueda= texto1.match(/curso/g);//busca todas las palabras que sean curso
//seach = indexOf
//indexOf me dice el numero de caracter en el que esta
//lastIndexOf me dice donde esta la ultima palabra 
console.log(busqueda);



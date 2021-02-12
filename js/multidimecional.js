'use strict'

var categorias= ['accion','terros','comedias'];
var peliculas=['la verdad duele','la vida es vella','gran torino'];


peliculas.reverse();

//SORT PARA ORDENAR ALFABETICAMENTE
//REVERSE PARA ORDENAR AL REVES

console.log(peliculas);
var cine=[categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][1]);


//COMO CONVERTIR UN ARRAY EN UN STRING
//para añadir elemetno al array
/*var elemento="";

do{
	var elemento=prompt("introduce tu peliculas");
	peliculas.push(elemento);




while(elemento!="ACAVAR"){


}

*/
//peliculas[0]= undefined;//ELIMINA EL PRIMER ELEMENTO DE MI ARRAY

//con este metodo elimino un elemnto de mi array
var indice = peliculas.indexOf('gran torino');
if (indice>-1){

peliculas.splice(indice, 1);

}

//con join lo convierto en string
var peliculas_string=peliculas.join();

console.log(peliculas_string);

//POP ME ELIMINA EL ULTIMO ELEMENTO DE UN ARRAY


var cadena = "texto1, texto2, texto3";
var cadena_array= cadena.split(", ");


console.log(cadena_array);

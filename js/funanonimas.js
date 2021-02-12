'use strict'

//Funciones anonimas9
// Es una funcion que no tiene nombre


var pelicula=function(nombre){
return "la pelicula es: "+ nombre;
}

function sumame(numero1, numero2,sumaYmuestra, sumaPorDos){
	// numero1 y numero2 son los parametros
	var sumar= numero1 + numero2;//la variable sumar suma los dos primeros parametros

	sumaYmuestra(sumar);//lo que hace cuando lo invoco abajo
	sumaPorDos(sumar);
	return sumar;
}

sumame(5,7, function(dato){// le doy valores a numero1 y 2 y funcion(dato) hace referencia a sumaymuestra

	console.log( "la suma es: ", dato);//lo musetro en pantalla

},
function(dato){//hace referencia sumapordos

	console.log("la suma por dos es : ",(dato*2));// lo multiplico por 2
});


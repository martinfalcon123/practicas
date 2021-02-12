'use stric'

/*
programa que pidad dos numero y qu enos idga cual es mayor cual el menor y si son iguales 
*/

//si los nummeor no son numeros o son menres o iguales a 0, no los vuelva a pedir 


var numero1= parseInt(prompt('introduce el primer numero',0));
var numero2=parseInt(prompt('introduce el seguno numero',0));

while(numero1<=0|| numero2<=0|| isNaN(numero1) || isNaN(numero2)){
	numero1=parseInt(prompt('introduce el primer numero',0));
	numero2=parseInt(prompt('introduce el seguno numero',0));


}


if (numero1==numero2){

	alert("los numeros son iguales ");


}else if(numero1>numero2){

	alert("el numero mayor es "+ numero1);
	alert("el numero menor es "+ numero2);

} else if (numero2> numero1){

	alert("el numero mayor es "+ numero2);
	alert("el numero menor es "+ numero1);;

}else {

	alert("introduce numero correctos");
}
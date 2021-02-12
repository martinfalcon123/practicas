'use stric'

//uso de var y let


// prueba con var

var numero=40;

console.log(numero);// valor 40

if(true){

	var numero=50;
	console.log(numero);// valor 50
}
console.log(numero);// valor 50

//prueba con let

var texto="curso de js";

console.log(texto);// valor ""
if(true){
let texto="curso de laravel";
console.log(texto);// laravel

}

console.log(texto);

var year=30;

if(year!=30){
	console.log("usted es millenial");

}else{
	console.log("uste no es millenial");
}

var año=2018;


if(año==2020 && año<2025){
	console.log("usted paso por el año de la covid-19"+ " que fue en el año " + año);


}else{

	console.log("aun no paso por covi-19");
}
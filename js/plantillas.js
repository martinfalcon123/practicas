'use strict'

//plantillas de textos

var nombre= prompt("mete tu nombre");

var apellidos= prompt("mete tus apellidos");

//var texto= "mi nombre es: "+ nombre+"mis apellidos son :"+apellidos;

//PRETAR MUCHAS ANENCION AESTO PORQUE ES LO NUEVO DE JAVASCRIP
var texto=`
<h1>hola que tal</h1>
<h3>mi nombre es: ${nombre}</h3>
<h3>mis apellido son: ${apellidos}</h3>
`;
document.write(texto);
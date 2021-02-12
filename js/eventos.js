'use strict'

//EVENTOS DEL RATON

function cambiarColor(){

  console.log("me has dado click");
  var bg= boton.style.background;//creo la variable lomque hace es que boton se pueda modificar el color del recuadro
  if(bg=="green"){//uso la variable bg y se asigno un nuevo color si es verde
    boton.style.background="red";//lo cambia red
    boton.style.padding="10px";//cambia el tamaño del recuadro del boton
    botno.border="1px solid #ccc"//cambia el tamaño del contorno de boton
  }else{
  boton.style.background="green";//sino vuelve a verde por que se genera un bucle
  }
  return true;

}

//EVENTO CLICK
var boton= document.querySelector("#boton"); //accedo al boton para asignarle funciones a continuacion

  boton.addEventListener('click',function(){ //funcion de calback
    cambiarColor();
  });

  //EVENTO MOUSE OVER

  boton.addEventListener('mouseover', function(){// con este evento cuando paso con el mause por enciam cambia de color "MOUESOVER"
    boton.style.background="#ccc";
  })

   boton.addEventListener('mouseout', function(){// con es te evento cuando salgo se hace negro "MOUSEOUT"
    boton.style.background="YELLOW";
  })


   //FOCUS
   var input=document,querySelector("#campo_nombre");
  input.addEventListener('focus',function()){
console.log("estas dentro del input");

  });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
   //BLUR
    var input= document.querySelector("#campo_nombre");
    input.addEventListener('focus',function(){

      console.log("estas fuera del input");
    })

   //KEYDOWN

   input.addEventListener('KEYDOWN',function(event){
    console.log("pulsando esta tecla", string.formCharCode(event.keyCode));

   });
   //KEYPRESS
   //KEYAPP
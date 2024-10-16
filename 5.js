/* 5. Crea un HTML con dos etiquetas que indiquen tu nombre y apellidos junto con dos botones.
- Un botón Correcto que cuando se hace onclick cambia el color de las etiquetas a verde.
- Un botón Incorrecto que cuando se hace onclick cambia el color de las etiquetas a rojo */

var b1 = document.querySelectorAll("button")[0];
var b2 = document.querySelectorAll("button")[1];

b1.addEventListener("click", function(){
    document.querySelector("#nombre5").style.color="green";
    document.querySelector("#apellido5").style.color="green";
});

b2.addEventListener("click", function(){
    document.querySelector("#nombre5").style.color="tomato";
    document.querySelector("#apellido5").style.color="tomato";
});
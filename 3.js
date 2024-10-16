
//3.1. Muestra por consola el título, tal y como está y todo en mayúsculas.

var titulo = document.querySelector("title").innerHTML;
console.log(titulo);
//3.2. Cambia el nombre a los input, indicando tu nombre y tu primer apellido.

document.querySelectorAll("input")[0].value = "Yucsan";
document.querySelectorAll("input")[1].value = "Chang";

//3.3. Añade un texto a la etiqueta <p> saludando. Por ejemplo: Hola Maria Millán.
var nombreUsu="Yucsan";
document.getElementById("saludo").innerHTML="Hola "+nombreUsu;

//3.4. Añade una etiqueta <p> justo debajo de la etiqueta de id saludo con el texto ¿Qué tal estás?

const para = document.createElement("p");
para.innerText = "¿Qué tal estás?";
document.body.appendChild(para);

//3.5. Cambia el texto del label apellido a ‘Apellidos:’ (haciendo uso de querySelector()).

document.querySelectorAll("label")[1].innerHTML="Apellidos";



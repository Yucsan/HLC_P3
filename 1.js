/*
1. Realice una función que pida al usuario una cadena y muestre en la consola:
- La cadena sin espacios todo junto.
- La cadena con todas las vocales ‘a’ cambiadas a la vocal ‘u’.
- Un array con todas las palabras de la cadena solicitada.
*/
var cadena = prompt("inserte una cadena de texto");

var cadenaSinEsp = cadena.replaceAll(" ","");
console.log(cadenaSinEsp);

//
var cambioVocales=cadenaSinEsp.replaceAll("a","ú");
console.log(cambioVocales);

var palabras = cadena.split(" ");
console.log(palabras);




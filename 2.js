/*
2. Crea una función para la creación de correos electrónicos corporativos. Los correos deberán
tener las siguientes condiciones:
- Correo electrónico: dos primeras letras del nombre, seguido de su primer apellido
completo y los dos últimos dígitos de su año de nacimiento. Junto con el dominio de la
empresa que es @emp.es.
- Contraseña: las 3 primeras letras del nombre en mayúscula, más la primera letra del
apellido, más la longitud del nombre seguido de un guion bajo y el último carácter de su
apellido.

Muestre además un ejemplo solicitando al usuario la información necesaria.
Por ejemplo: Jesús Doña, 1984.
Correo: jedona84@emp.es
Contraseña: JESd5_a
*/

var nombre = prompt("dame un tu nombre");
var apellido = prompt("dame tu apellido");
var anio = prompt("en que año naciste númerico");

var correo = nombre.substring(0,2)+apellido+anio.substring(anio.length-2,anio.length)+"@emp.es";
var clave = nombre.substring(0,3).toUpperCase()+apellido.substring(0,1)+nombre.length+"_"+apellido.charAt(apellido.length-1);
document.write(nombre+" "+anio);
document.write("<br>");
document.write(correo);
document.write("<br>");
document.write(clave);

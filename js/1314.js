//13. Dado el siguiente array de objetos:
const productos = [{ id: 1, nombre: 'Patata', precio: 1, imagen: 'patata'},
    { id: 2, nombre: 'Cebolla', precio: 1.2, imagen: 'cebolla' },
    { id: 3, nombre: 'Calabacin', precio: 2.1, imagen: 'calabacin' },
    { id: 4, nombre: 'Fresas', precio: 0.6, imagen: 'fresas' }];
/*
14. Recorre el array y representa en el HTML cada producto con su precio y una imagen.
Para añadir la imagen deberás descargar una imagen para cada producto y guardarla en una
carpeta img con el nombre de cada uno de ellos. Deberá añadir el atributo src para cada una de
las imágenes de forma dinámica.
Basándonos en el ejercicio anterior, añadiremos un botón Disponible para cada uno de los
productos de nuestro array con una clase disabled (color gris). Al clicar sobre este, se cambiará
la clase a enabled (color verde), si se vuelve a clicar comprobará su estado y lo cambiará al
contrario.
*/
for(i=0; i<productos.length; i++){
//creo elementos
const imagen = document.createElement("img");
const nombres = document.createElement("div");
const ids = document.createElement("span");
const spanNombres = document.createElement("span");

//divs
document.querySelector("#contenedor").appendChild(nombres);//posicion
nombres.setAttribute("id", productos[i].nombre+"Nom");//asigna ID
document.querySelector("#"+productos[i].nombre+"Nom").innerHTML+="Nombre Producto: <strong>"+productos[i].nombre+"</strong> </br> Precio: "+productos[i].precio+"€ </br>";//pinta

//span ID
document.querySelector("#"+productos[i].nombre+"Nom").appendChild(ids);
ids.setAttribute("id", productos[i].nombre+"id");
document.querySelector("#"+productos[i].nombre+"id").innerHTML= "ID: "+productos[i].id

//imgs
document.querySelector("#contenedor").appendChild(imagen);
imagen.setAttribute("id", productos[i].nombre);
document.querySelector("#"+productos[i].nombre).src = "imagenes14/"+productos[i].imagen+".png";

}

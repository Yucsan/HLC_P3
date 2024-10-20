
/*
11. Simulamos una lista de la compra. Tenemos un HTML con un título (Lista de la compra) y
una lista de productos, que estará vacía. Tendremos un botón de añadir con un onclick que al
clicarlo preguntará al usuario por el producto a añadir (haciendo uso de prompt), tras indicarlo
se añadirá a la lista (añadiendo el nodo correspondiente al elemento lista).
*/

var productos = ["leche", "huevos", "pan", "sardinas", "aceite"];
var cont = 0;
var agrega = document.querySelector("#agrega");
var confirma = false;
agrega.addEventListener("click", function () {

   confirma = confirm("Deseas Agregar el producto?")
    if(confirma){ //confirmas producto
        if (cont < productos.length) {
            var pro = document.createElement("li");
            pro.innerHTML = productos[cont];
            cont++;
            document.querySelector("#lista").appendChild(pro);
        } else {
            alert("ya esta llena la bolsa mamon");
        }
    }

});
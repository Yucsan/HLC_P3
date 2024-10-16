/*
4. Crea una lista de 3 elementos, cuando se clique sobre ellos (onclick=) se mostrará la
dirección de la web (href) en un input.
*/

var grupoLi = document.querySelectorAll("ul li");
console.log(grupoLi);

grupoLi.forEach(modi);

function modi(item, index){
    //console.log(item);
    item.addEventListener("click", function() {
        var url=window.location;
        document.getElementById("url").value = url;
      }); 
}
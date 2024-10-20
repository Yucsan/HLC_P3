/*
    10. Reutiliza el primer párrafo del HTML del ejercicio anterior de la práctica anterior. Tendremos
    por tanto un HTML con un párrafo, junto con dos etiquetas que tendrán un onclick:
    1ª etiqueta: Aumentar letra.
    2ª etiqueta: Disminuir letra.
    Se creará una función para cada una de las etiquetas donde se aumentará en uno o disminuirá
    en uno el tamaño de la letra según dónde pulse el usuario.
    */

    var mas = document.querySelector("#mas");
    var parrafo=document.querySelector("p");
    


    const estilo = window.getComputedStyle(parrafo);
    const tamanoFuente = estilo.fontSize;//recupero el tamaño de fuente
    var x = (tamanoFuente.length)-2;
    console.log(x)
    var tam = parseInt(tamanoFuente.substring(0,x));
    //alert(tamanoFuente);
    mas.addEventListener("click", function(){
        tam++;
        document.querySelector("p").style.fontSize=tam+"px";
        console.log(tam);
    });
    menos.addEventListener("click", function(){
        tam--;
        document.querySelector("p").style.fontSize=tam+"px";
        console.log(tam);
    });
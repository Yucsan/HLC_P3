 /*
        Crea un HTML con tres párrafos cogiendo la información del siguiente enlace
        Añade también una etiqueta span con un onclick. Este llamará una función llamada mostrar.
        Al cargar el HTML solo se mostrará el primer párrafo, los otros dos estarán ocultos. Si se
        clica sobre el span “Mostrar más…” este mostrará los otros dos párrafos y cambiará el valor
        del span a “Mostrar menos…”. Si clica sobre “Mostrar menos…” ocultará los dos párrafos y
        volverá a cambiar el nombre del span.
        */
        for (i = 1; i < 3; i++)
            document.querySelectorAll("p")[i].style.display = "none";

        var mostrar = document.querySelector("#mostrar");
        mostrar.style.color = "seagreen";

        var control = false;//variable de control
        mostrar.addEventListener("click", function () {
            if (!control) {
                for (i = 1; i < 3; i++) {
                    document.querySelectorAll("p")[i].style.display = "block";
                }
                mostrar.innerHTML = "MOSTRAR MENOS"
                mostrar.style.color = "tomato";
                control = true;
            } else {
                for (i = 1; i < 3; i++) {
                    document.querySelectorAll("p")[i].style.display = "none";
                }
                mostrar.innerHTML = "MOSTRAR MAS"
                mostrar.style.color = "seagreen";
                control = false;
            }

        });
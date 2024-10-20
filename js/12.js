var productos=["leche","huevos","pan","sardinas","aceite"];
var opc=["si","no"];
var cont=0;
var agrega = document.querySelector("#agrega");
agrega.addEventListener("click", function(){
    if(cont<productos.length){
        
        //creo producto
        var pro = document.createElement("li");
        pro.innerHTML=productos[cont];//texto producto
        pro.setAttribute("id", productos[cont]+"prod");//asigno id

        //botones si y no producto
        var btn1 = document.createElement("button");
        var btn2 = document.createElement("button");
        btn1.innerHTML=opc[0];
        btn2.innerHTML=opc[1];
        //asigno ids botones si no producto
        var idAux=productos[cont]+"**";
        btn1.setAttribute("id", idAux+'si');
        btn2.setAttribute("id", idAux+'no');
        
        // Asignar funciones a los botones
        btn1.addEventListener("click", function() {
            si(pro.id); 
        });
        btn2.addEventListener("click", function() {
            no(pro.id); 
        });

        var idBtns= "#"+productos[cont]+"prod";//rescato el id del padre para colocar los botones
        cont++;
        document.querySelector("#lista").appendChild(pro);
        document.querySelector(idBtns).appendChild(btn1);
        document.querySelector(idBtns).appendChild(btn2);
        
        //console.log(btn1.parentNode.id);
        

    }else{
        alert("ya esta llena la bolsa mamon");
    }
});

//funciones si no
var si = (producto) => document.querySelector("#"+producto).style.color="seagreen";
var no = (producto) => document.querySelector("#"+producto).style.color="tomato";
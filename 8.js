/**
 Modificando el ejercicio anterior. Tendremos dos Arrays: ciudades_gratis (Sevilla, Madrid,
Valencia, Barcelona) y ciudades_gastos(Cantabria, Pontevedra, Toledo, Segovia).
Se añade las siguientes condiciones:
- Si la ciudad que indica el usuario está en el array ciudades_gastos se preguntará por los
gastos de envío, y se añade a la etiqueta junto a la fecha.
- Si la ciudad que indica el usuario está en el array ciudades_gratis se añadirá a la etiqueta
un mensaje diciendo que los gastos son gratuitos y se añade la fecha.
- Si la ciudad no se encuentra en ninguno de los arrays, se añadirá un mensaje a la
etiqueta diciendo que no se pueden realizar envíos y se oculta la etiqueta de la fecha de
envío.
 */

var ciudadesGratis = ["sevilla","madrid","valencia","barcelona"];
var ciudadesGastos = ["cantabria","pontevedra","toledo","segovia"];
var fechaHTML8=document.querySelector("#fecha8");

let funFecha = ()=>{
    fecha = new Date();
    dia = fecha.getDate()+1;
    mes = fecha.getMonth()+1;
    anio = fecha.getFullYear();
    horas = fecha.getHours();
    mins = fecha.getMinutes();
    seg = fecha.getSeconds();
    fechaHTML8.innerHTML=dia +'/'+mes+'/'+anio +' '+horas+':'+mins+':'+seg;
}

const element = document.getElementById("demo");
setInterval(function() {
    funFecha();
}, 1000);


var dimeCiudad = prompt("Indíca la ciudad").toLowerCase();
var gastos;
var ciudadCapital = dimeCiudad.charAt(0).toUpperCase()+dimeCiudad.substring(1).toLowerCase();
console.log(ciudadCapital);

if(ciudadesGastos.includes(dimeCiudad)){

    gastos = prompt("dime cuantos son los ghastos de envio a: "+ciudadCapital);
    document.querySelector("#gastos8").innerHTML = gastos;
    document.querySelector("#mensaje").innerHTML = "se añaden los gastois de envío";

}else if(ciudadesGratis.includes(dimeCiudad)){
    
    document.querySelector("#gastos8").innerHTML = "GRATIS";
    document.querySelector("#mensaje").innerHTML = "Sin gastos de envío";

}else{
    //no se pueden realizar envíos y se oculta la etiqueta de la fecha de envío.
    document.querySelector("#mensaje").innerHTML = "no se pueden realizar envíos";
    document.querySelector("#etiqueta").style.display = "none"; 
    
}

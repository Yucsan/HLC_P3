/**
 * 
 * Crea una función que cuando la página esté cargada (puede hacer uso de window.onload):
- Cambie el valor de la ciudad a Sevilla.
- Los gastos de envío cambien su valor a 3€.
- La fecha de envío sea el día actual (haz uso de las funciones de fecha).
 */


//load -- DOMContentLoaded  -- estan estas 2 opciones
//diferencias load: espera que se carguen las hojas de estilo  DOMContentLoaded: no espera a que se carguen las hojas de estilo
//referencia https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

var ciudad = document.getElementById("ciudad");
let gastos = document.getElementById("gastos");
let fechaHTML = document.getElementById("fecha");
// variables fecha
let fecha, dia, mes, anio, horas, mins, seg;

let funFecha = ()=>{
    fecha = new Date();
    dia = fecha.getDate()+1;
    mes = fecha.getMonth()+1;
    anio = fecha.getFullYear();
    horas = fecha.getHours();
    mins = fecha.getMinutes();
    seg = fecha.getSeconds();
    fechaHTML.innerHTML=dia +'/'+mes+'/'+anio +' '+horas+':'+mins+':'+seg;
}

const element = document.getElementById("demo");
setInterval(function() {
    funFecha();
}, 1000);


//load
window.addEventListener("load", (event) => {
    ciudad.innerHTML = "Sevilla___()()()";
  });

//DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    ciudad.innerHTML = "Sevilla******";
});

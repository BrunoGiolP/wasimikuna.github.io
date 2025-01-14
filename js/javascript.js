function siguiente() {
    var modal1 = document.getElementById("uno");
    modal1.classList.remove("activo");
    var modal2 = document.getElementById("dos");
    modal2.classList.add("activo");
 }

 function siguiente2() {
    var modal1 = document.getElementById("dos");
    modal1.classList.remove("activo");
    var modal2 = document.getElementById("tres");
    modal2.classList.add("activo");
 }

 function finalizar() {
   var modal2 = document.getElementById("tres");
   modal2.classList.remove("activo");
   var modal4 = document.getElementById("fin");
   modal4.classList.add("activo");
}

function reinicio() {
   var modal1 = document.getElementById("uno");
    modal1.classList.add("activo");
   var modal4 = document.getElementById("fin");
   modal4.classList.remove("activo");
}


 function volver1() {
    var modal1 = document.getElementById("uno");
    modal1.classList.add("activo");
    var modal2 = document.getElementById("dos");
    modal2.classList.remove("activo");
 }

 function volver2() {
    var modal1 = document.getElementById("dos");
    modal1.classList.add("activo");
    var modal2 = document.getElementById("tres");
    modal2.classList.remove("activo");
 }

 function volver3() {
    var modal1 = document.getElementById("uno");
    modal1.classList.add("activo");
    var modal2 = document.getElementById("tres");
    modal2.classList.remove("activo");
 }

 function toggleButton(){
    const campo0 = document.getElementById('T_Doc');
    const campo1 = document.getElementById('num_documento');
    const campo2 = document.getElementById('nombre_apellido');
    const campo3 = document.getElementById('celular');
    const toggleButton = document.getElementById('checkbox');
    
    toggleButton.addEventListener("click", () => {
        campo0.toggleAttribute("disabled");
        campo1.toggleAttribute("disabled");
        campo2.toggleAttribute("disabled");
        campo3.toggleAttribute("disabled");
      });
 }

 function botones(){
   var botonera1 = document.getElementById("crear_incidencia");
   var botonera2 = document.getElementById("buscar_incidencia");
   var botonera3 = document.getElementById("contenedor_botones");
   var botonera4 = document.getElementById("boton_principal");
   var botonera5 = document.getElementById("call_center");
   botonera1.classList.toggle("boton_activo");
   botonera2.classList.toggle("boton_activo");
   botonera3.classList.toggle("animacion_desactivada");
   botonera4.classList.toggle("animacion_desactivada");
   botonera5.classList.toggle("boton_activo")
 }
 
 function salud(){
   var tipo_salud = document.getElementById("salud");
   var tipo_calidad = document.getElementById("calidad");
   var tipo_otros = document.getElementById("otros");
   tipo_salud.classList.add("salud_activada");
   tipo_calidad.classList.remove("calidad_activada");
   tipo_calidad.classList.remove("otros_activada");
   tipo_otros.classList.remove("calidad_activada");
   tipo_otros.classList.remove("otros_activada");
 }

 function calidad(){
   var tipo_salud = document.getElementById("salud");
   var tipo_calidad = document.getElementById("calidad");
   var tipo_otros = document.getElementById("otros");
   tipo_salud.classList.remove("salud_activada");
   tipo_salud.classList.remove("otros_activada");
   tipo_calidad.classList.add("calidad_activada");
   tipo_otros.classList.remove("salud_activada");
   tipo_otros.classList.remove("otros_activada");
 }

 function otros(){
   var tipo_salud = document.getElementById("salud");
   var tipo_calidad = document.getElementById("calidad");
   var tipo_otros = document.getElementById("otros");
   tipo_salud.classList.remove("salud_activada");
   tipo_salud.classList.remove("otros_activada");
   tipo_calidad.classList.remove("salud_activada");
   tipo_calidad.classList.remove("calidad_activada");
   tipo_otros.classList.add("otros_activada");
 }

function resultado_busqueda(){
   var detalle_busqueda_incidencia = document.getElementById("detalle_busqueda_incidencia");
   var buscar_documento = document.getElementById("buscar_documento");
   var resultado_busqueda = document.getElementById("resultado_busqueda");
   buscar_documento.classList.remove("activo");
   resultado_busqueda.classList.add("activo");
   detalle_busqueda_incidencia.classList.remove("activo");
}

function salir_bsuqueda(){
   var detalle_busqueda_incidencia = document.getElementById("detalle_busqueda_incidencia");
   var buscar_documento = document.getElementById("buscar_documento");
   var resultado_busqueda = document.getElementById("resultado_busqueda");
   buscar_documento.classList.add("activo");
   resultado_busqueda.classList.remove("activo");
   detalle_busqueda_incidencia.classList.remove("activo");
}

function detalle_busqueda_incidencia(){
   var detalle_busqueda_incidencia = document.getElementById("detalle_busqueda_incidencia");
   var buscar_documento = document.getElementById("buscar_documento");
   var resultado_busqueda = document.getElementById("resultado_busqueda");
   buscar_documento.classList.remove("activo");
   resultado_busqueda.classList.remove("activo");
   detalle_busqueda_incidencia.classList.add("activo");
}

function salir_detalle(){
   var detalle_busqueda_incidencia = document.getElementById("detalle_busqueda_incidencia");
   var buscar_documento = document.getElementById("buscar_documento");
   var resultado_busqueda = document.getElementById("resultado_busqueda");
   buscar_documento.classList.remove("activo");
   resultado_busqueda.classList.add("activo");
   detalle_busqueda_incidencia.classList.remove("activo");
}

window.onscroll = function() {
   console.log(window.scrollY);
   var nav = document.getElementById('home');
   if ( window.scrollY > 100 ) {
       nav.classList.add("navbar1");
   } else {
       nav.classList.remove("navbar1");
   }
}


// Initialization for ES Users
import { Tab, initMDB } from "mdb-ui-kit";

initMDB({ Tab });
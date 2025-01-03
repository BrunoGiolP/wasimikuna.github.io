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
 
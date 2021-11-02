 // Guardar los siguientes datos del usuario 
/**
 * Nombre:
 * Apellido:
 * Edad:
 * Telefono:
 * Celular:
 * Dirección:
 */

const btn1= document.getElementById("btn1");
const nom= document.getElementById("nom");
const apellid= document.getElementById("apellido");
const age= document.getElementById("edad");
const telf= document.getElementById("telf");
const cel= document.getElementById("cel");
const dir= document.getElementById("dir");


btn1.onclick = function() {
   datos();
}

 const datos = () => {

    let nombre = prompt("ingrese nombrer");
    let apellido = prompt("ingrese apellido");
    let edad = prompt("ingrese edad");
    let telefono = prompt("ingrese telefono");
    let celular = prompt("ingrese celular");
    let direccion = prompt("ingrese direccion");

    nom.innerHTML="Nombre:"+ nombre;
    apellid.innerHTML="Apellido:"+ apellido;
    age.innerHTML="Edad:"+ edad;
    telf.innerHTML="Telefono:"+ telefono;
    cel.innerHTML="Celular:"+ celular;
    dir.innerHTML="Dirección:"+ direccion;

    localStorage.setItem("nombre", nombre)
    localStorage.setItem("apellido", apellido)
    localStorage.setItem("edad", edad)
    localStorage.setItem("telefono", telefono)
    localStorage.setItem("celular", celular)
    localStorage.setItem("direccion", direccion)

 }


 if(localStorage.getItem("nombre")){
   nom.innerHTML="Nombre:"+ localStorage.getItem("nombre");
 } 
 if(localStorage.getItem("apellido")){
   apellid.innerHTML="Apellido:"+ localStorage.getItem("apellido");
 } 
 if(localStorage.getItem("edad")){
   age.innerHTML="Edad:"+ localStorage.getItem("edad");
 } 
 if(localStorage.getItem("telefono")){
   telf.innerHTML="Telefono:"+ localStorage.getItem("telefono");

 if(localStorage.getItem("celular")){
   cel.innerHTML="Celular:"+ localStorage.getItem("celular");
 } 

 if( localStorage.getItem("direccion")){
   dir.innerHTML="Direccion:"+ localStorage.getItem("direccion");
 }  

}


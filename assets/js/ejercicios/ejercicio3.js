const btn2= document.getElementById("btn3");
const idnombre= document.getElementById("idnombre");  

btn2.onclick = function() {
    datos2();
 }

 const datos2 = () => {
    let nombre = prompt("ingrese nombre"); 

    idnombre.innerHTML="Dato: " + nombre; 

 }
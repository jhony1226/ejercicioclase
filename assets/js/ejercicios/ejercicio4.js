const btn2= document.getElementById("btn4");
const idnombre= document.getElementById("idnombre");  

btn2.onclick = function() {
    datos2();
 }

 const datos2 = () => {
    let nombre = prompt("ingrese departamento"); 

    idnombre.innerHTML="Dato: " + nombre; 

 }
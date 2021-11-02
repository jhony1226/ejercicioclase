const btn2= document.getElementById("btn2");
const idnombre= document.getElementById("idnombre"); 
const idsalario= document.getElementById("idsalario");

btn2.onclick = function() {
    datos2();
 }

 const datos2 = () => {
    let nombre = prompt("ingrese nombre");
    let salario = prompt("ingrese salario");

    idnombre.innerHTML="Nombre: " + nombre;
    idsalario.innerHTML="Salario: " + salario; 

 }


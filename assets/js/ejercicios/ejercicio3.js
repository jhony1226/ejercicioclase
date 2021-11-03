const btn3= document.getElementById("btn3");
const idnombre3= document.getElementById("idnombre3");  

btn3.onclick = function() {
    datos3();
 }

 const datos3= () => {
    let nombre = prompt("ingrese una de las siguientes palabras\n casa-mesa-perro-gato ");  
    nombre=nombre.toLowerCase();

      switch(nombre){
         case "casa":idnombre3.innerHTML="HOUSE"; 
         break;
         case "mesa":idnombre3.innerHTML="TABLE"; 
         break;
         case "perro":idnombre3.innerHTML="DOG";   
         break;
         case "gato":idnombre3.innerHTML="CAT";  
         break;
         default: 
          alert("no se encontro traduccion");

      }

    

 }
// variables globales 


const btnuser= document.getElementById("btnuser");
const welcome= document.getElementById("welcome");

const userData = () =>{
    let userNane= prompt("ingrese nombre");
    welcome.innerHTML="bienvenido  "+ userNane;
}

btnuser.onclick = function() {
    userData();
}
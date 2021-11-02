// local storage

const btnuser= document.getElementById("btnuser");
const welcome= document.getElementById("welcome");

const userData = () =>{
    let userNane= prompt("ingrese nombre");
    welcome.innerHTML="bienvenido  "+ userNane;
    localStorage.setItem("user", userNane)
}

if(localStorage.getItem("user")){
    welcome.innerHTML="bienvenido  "+ localStorage.getItem("user");
}
btnuser.onclick = function() {
    userData();
}
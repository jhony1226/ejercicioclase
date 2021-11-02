
const btnUser = document.getElementById("btnuser");

const userData = () => {
   let user= prompt("ingresa  tu nombre");
   let edad= prompt("ingresa tu edad");
   alert("tu nombre es  "+ user+ "  edad "+ edad);

}

btnuser .onclick= function () {
    userData();
}
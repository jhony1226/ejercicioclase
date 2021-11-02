//condicionales
const btnuser = document.getElementById("btnuser");

const netflix = () => {
  let user = prompt("ingrese nombrer");
  let age = prompt("ingrese edad");
  let epilepcia = prompt("sufre enfermedad \n responde: \n Si \n No");

  console.log(age, user, epilepcia);

  if (user == null || age == null || epilepcia == null || user == "" || age == "" || epilepcia == "") {
    return alert("datos incorrectos");
  }
  user.toLowerCase();
  epilepcia.toLowerCase();

  if (age >= 18 && epilepcia == "no") {
    alert("tiene permisos para ver");
    if (epilepcia == "si" || epilepcia == "no") {
      alert("no tiene permisos");
    } else {
      alert(" favor ingrese biein los datos");
    }
  }
  
};

btnuser.onclick = function () {
  netflix();
};

/**
 * == igual en valor
 * <= menror que
 * >= mayor que
 * === compara tipo y valor
 * != diferente
 * !== diferente con tipo de dato
 * logicos
 * && y
 * ||  o
 *
 */

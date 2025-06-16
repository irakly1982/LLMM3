const myObj = JSON.parse(this.responseText);
document.getElementById("demo").innerHTML = myObj.employees.length;

const myObj = JSON.parse(this.responseText);
let txt = "<table border='1'><tr><th>Nombre</th><th>Apellido</th></tr>";
for (let i = 0; i < myObj.employees.length; i++) {
  txt +=
    "<tr><td>" +
    myObj.employees[i].firstName +
    "</td><td>" +
    myObj.employees[i].lastName +
    "</td></tr>";
}
txt += "</table>";
document.getElementById("demo").innerHTML = txt;

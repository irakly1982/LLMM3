const myObj = JSON.parse(this.responseText);
document.getElementById("demo").innerHTML = myObj.age;

document.getElementById("demo").innerHTML = myObj.pets[0].type;

document.getElementById("demo").innerHTML = myObj.pets[0].name;

document.getElementById("demo").innerHTML = myObj.pets.length;

let txt = "";
for (let i = 0; i < myObj.pets.length; i++) {
  txt += myObj.pets[i].name + "<br>";
}
document.getElementById("demo").innerHTML = txt;

let txt = `Nombre: ${myObj.name}, Edad: ${myObj.age}, Mascotas: `;
for (let i = 0; i < myObj.pets.length; i++) {
  txt += `${myObj.pets[i].name} (${myObj.pets[i].type}), `;
}
document.getElementById("demo").innerHTML = txt;

let txt = "<table border='1'><tr><th>Nombre</th><th>Tipo</th></tr>";
for (let i = 0; i < myObj.pets.length; i++) {
  txt +=
    "<tr><td>" +
    myObj.pets[i].name +
    "</td><td>" +
    myObj.pets[i].type +
    "</td></tr>";
}
txt += "</table>";
document.getElementById("demo").innerHTML = txt;

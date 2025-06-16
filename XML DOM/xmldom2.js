let titulos = "";
let n = document.getElementsByTagName("TITLE").length;
for (let i = 0; i < n; i++) {
  titulos +=
    document.getElementsByTagName("TITLE")[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = titulos;

let precios = "";
let p = document.getElementsByTagName("PRICE").length;
for (let i = 0; i < p; i++) {
  precios +=
    document.getElementsByTagName("PRICE")[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = precios;

let companias = "";
let c = document.getElementsByTagName("COMPANY").length;
for (let i = 0; i < c; i++) {
  companias +=
    document.getElementsByTagName("COMPANY")[i].childNodes[0].nodeValue +
    "<br>";
}
document.getElementById("demo").innerHTML = companias;

document.getElementsByTagName("title")[0].childNodes[0].nodeValue;

let titulos = "";
let t = document.getElementsByTagName("title");
for (let i = 0; i < t.length; i++) {
  titulos += t[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("demo").innerHTML = titulos;

document.getElementsByTagName("book")[3].attributes.length;

let attrs = document.getElementsByTagName("book")[3].attributes;
for (let i = 0; i < attrs.length; i++) {
  console.log(attrs[i].nodeValue);
}

document.getElementsByTagName("book")[2].getElementsByTagName("author").length;

let autores = document
  .getElementsByTagName("book")[2]
  .getElementsByTagName("author");
for (let i = 0; i < autores.length; i++) {
  console.log(autores[i].childNodes[0].nodeValue);
}

let libros = document.getElementsByTagName("book");
let tabla =
  "<table border='1'><tr><th>Título</th><th>Autor</th><th>Precio</th><th>Año</th></tr>";
for (let i = 0; i < libros.length; i++) {
  let titulo =
    libros[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
  let autor =
    libros[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;
  let precio =
    libros[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
  let year = libros[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;
  tabla += `<tr><td>${titulo}</td><td>${autor}</td><td>${precio}</td><td>${year}</td></tr>`;
}
tabla += "</table>";
document.getElementById("demo").innerHTML = tabla;

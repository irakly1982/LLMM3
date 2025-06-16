document.getElementsByTagName("title")[0].childNodes[0].nodeValue;

document.getElementsByTagName("year")[0].childNodes[0].nodeValue;

document.getElementsByTagName("price")[1].childNodes[0].nodeValue;

document.getElementsByTagName("author")[0].childNodes[0].nodeValue;

document.getElementsByTagName("book")[2].getElementsByTagName("author")[0]
  .childNodes[0].nodeValue;

document.getElementsByTagName("book")[2].getElementsByTagName("author")[1]
  .childNodes[0].nodeValue;

document.getElementsByTagName("book")[0].attributes[0].nodeName;

document.getElementsByTagName("book")[0].attributes[0].nodeValue;

document.getElementsByTagName("book")[2].getElementsByTagName("author").length;

let l = document
  .getElementsByTagName("book")[2]
  .getElementsByTagName("author").length;
let a = document.getElementsByTagName("book")[2].getElementsByTagName("author");
for (let i = 0; i < l; i++) {
  console.log(a[i].childNodes[0].nodeValue);
}

document.getElementsByTagName("book")[3].attributes.length;

let atributos = document.getElementsByTagName("book")[3].attributes;
for (let i = 0; i < atributos.length; i++) {
  console.log(atributos[i].nodeValue);
}

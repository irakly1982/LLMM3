fetch(
  "https://corsproxy.io/?http://www.aemet.es/xml/municipios/localidad_21041.xml"
)
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "text/xml");

    let municipio = xml.getElementsByTagName("nombre")[0].textContent;
    let prediccion = xml.getElementsByTagName("prediccion")[0];
    let dia = prediccion.getElementsByTagName("dia")[0];

    // Temperaturas
    let tmax = dia
      .getElementsByTagName("temperatura")[0]
      .getElementsByTagName("maxima")[0].textContent;
    let tmin = dia
      .getElementsByTagName("temperatura")[0]
      .getElementsByTagName("minima")[0].textContent;

    // Estado del cielo
    let estados = dia.getElementsByTagName("estado_cielo");
    let cielos = [];
    for (let i = 0; i < estados.length; i++) {
      cielos.push(
        estados[i].getAttribute("periodo") + ": " + estados[i].textContent
      );
    }

    console.log(`Localidad: ${municipio}`);
    console.log(`Temperatura Máxima: ${tmax}°C`);
    console.log(`Temperatura Mínima: ${tmin}°C`);
    console.log(`Cielo por horas:`, cielos);
  });

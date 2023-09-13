const express = require('express');
const router = express.Router();

// Define la función para seleccionar una imagen al azar
function seleccionarImagenAlAzar(imagenes) {
  var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
  return imagenes[indiceAleatorio];
}

// Lista de URLs de imágenes
var imagenes = [
  '../img/1.jpg',
  '../img/2.jpg',
  '../img/3.png',
  '../img/4.png',
  '../img/5.png',
  // Agrega más URLs de imágenes aquí
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'ITGAM', author: "Eddy" });
});

router.get('/about/tec', function (req, res, next) {
  res.render('tecnm');
});

router.get('/about/api/tec/', function (req, res, next) {
  // Llama a la función para seleccionar una imagen al azar
  var imagenAleatoria = seleccionarImagenAlAzar(imagenes);

  // Objeto de respuesta con la información, incluyendo la imagen aleatoria
  var tecInfo = {
    name: "Instituto Tecnológico de Gustavo A Madero",
    description: "El Tecnológico Nacional de México (TecNM) es una Institución de Educación Superior Tecnológica, órgano desconcentrado de la Secretaria de Educación Pública (SEP), que fue creada por decreto presidencial el 23 de julio de 2014. El Instituto Tecnológico de Gustavo A. Madero es uno de los 254 institutos y centros ubicados en todo el país, que tiene presencia en más de 600 localidades, en los 32 estados de todo el país.",
    mission: "“Formar con responsabilidad y excelencia a profesionistas capaces de enfrentar y resolver los retos que se presentan en el ámbito nacional e internacional.”",
    values: "*Respeto    *Liderazgo    *Perseverancia    *Responsabilidad",
    image: imagenAleatoria  // Asigna la imagen aleatoria aquí
  };

  // Envía el objeto de respuesta como JSON
  res.send(tecInfo);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
// un GET / se ejecutara esta
//registro de middlewares de app,tenemos enrutadores 

router.get('/', function (req, res, next) {
  res.render('index', { title: 'ITGAM', author: "Eddy" });
});

router.get('/about/tec', function (req, res, next) {
  res.render('tecnm');
});





router.get('/about/api/tec/', function (req, res, next) {
  res.send({
    name: "Instituto Tecnologico de Gustavo A Madero",
    description: "El Tecnológico Nacional de México (TecNM) es una Institución de Educación Superior Tecnológica, órgano desconcentrado de la Secretaria de Educación Pública (SEP), que fue creada por decreto presidencial el 23 de julio de 2014. El Instituto Tecnológico de Gustavo A. Madero es uno de los 254 institutos y centros ubicados en todo el país, que tiene presencia en más de 600 localidades, en los 32 estados de todo el país.",
    mission: "“Formar con responsabilidad y excelencia a profesionistas capaces de enfrentar y resolver los retos que se presentan en el ámbito nacional e internacional.”",
    values: "*Respeto    *Liderazgo    *Perseverancia    *Responsabilidad",
    image: "imagen aleatoria del tec"
  })
});



module.exports = router;

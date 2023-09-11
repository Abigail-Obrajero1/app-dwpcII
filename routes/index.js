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
    name: "INSTITUO TECNOLOGICO DE GUSTAVO A MADERO",
    description: "",
    mision: 'dsf',
    values: 'dsf',
    image: 'dsf'
  })
});



module.exports = router;

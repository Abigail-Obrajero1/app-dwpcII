const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (_, res) {
  res.render('index', { title: 'ITGAM', author: "Eddy" });
});

module.exports = router;

var express = require('express');
var router = express.Router();
const connection = require("../database");

/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM datamakanan', function(err, results) {
    if (err) {
      console.log("database error");
    }
    const data = { datamakanan: results };
    res.render("index", data);
  });
});

//Hapus data
router.get('/delete', function(req, res, next) {
  const id = req.query.id;
  connection.query(`DELETE FROM datamakanan WHERE id = "${id}"`, function(err) {
    if (err) {
      console.log("database error");
    }
    res.redirect("/");
  });
});

module.exports = router;

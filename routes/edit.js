var express = require('express');
var router = express.Router();
const connection = require("../database");

// view and passing
router.get('/', function(req, res, next) {
    const id = req.query.id;

    connection.query('SELECT * FROM datamakanan WHERE id = ' + id, function(err, results) {
      if (err) {
        console.log("database error");
      }
      const data = { datamakanan: results };
      // console.log(data.datamakanan[0].id);
      res.render("edit", data);
    });
});

//ubah data
router.post('/', function(req, res, next) {
    const id = req.body.id;
    const nama_jajanan = req.body.nama_jajanan;
    const harga = req.body.harga;
    const stok = req.body.stok;
    connection.query(
        `UPDATE datamakanan set nama_jajanan = '${nama_jajanan}',harga = '${harga}',stok = '${stok}' WHERE id = "${id}"`);
    res.redirect("/");
});

module.exports = router;
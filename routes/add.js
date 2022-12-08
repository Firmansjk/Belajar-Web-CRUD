var express = require('express');
var router = express.Router();
const connection = require("../database");

// view
router.get('/', function(req, res, next) {
    res.render("add");
});

//tambah data
router.post('/', function(req, res, next) {
    // connection.query(`ALTER TABLE datamakanan AUTO_INCREMENT = 1`, );
    const id = req.body.id;
    const nama_jajanan = req.body.nama_jajanan;
    const harga = req.body.harga;
    const stok = req.body.stok;
    connection.query(
        `insert into datamakanan(nama_jajanan, harga, stok) value('${nama_jajanan}', '${harga}', '${stok}')`);
    res.redirect("/");
});

module.exports = router;
const db = require("../config/database.js");

const ProductosController = {
  create(req, res) {
    let post = { nombre: req.body.nombre, precio: req.body.precio };
    let sql = "INSERT INTO productos SET ?";
    db.query(sql, post, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Nuevo producto aniadidoooo!");
    });
  },
};

module.exports = ProductosController;

const db = require("../config/database.js");

const ProductosController = {
  create(req, res) {
    let prod = { nombre: req.body.nombre, precio: req.body.precio };
    let sql = "INSERT INTO productos SET ?";
    db.query(sql, prod, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Nuevo producto aniadidoooo!");
    });
  },
  update(req, res) {
    let sql = `UPDATE productos SET nombre = '${req.body.nombre}', precio = '${req.body.precio}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Producto actualisado correctamente!");
    });
  },
};

module.exports = ProductosController;

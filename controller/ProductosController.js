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
  assingCategoriToProduct(req, res) {
    let sql = `INSERT INTO categorias_productos VALUES (${req.body.idCat},${req.body.idProd})`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categoria asignada a producto correctamente!");
    });
  },
};

module.exports = ProductosController;

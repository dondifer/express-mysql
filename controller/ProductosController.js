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
  getProdAll(req, res) {
    let sql = `SELECT * FROM productos;`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },
  getProdAndCateg(req, res) {
    let sql = `SELECT productos.nombre as producto, categorias.nombre as categoria FROM categorias_productos 
INNER JOIN productos ON categorias_productos.id_productos = productos.id
INNER JOIN categorias ON categorias_productos.id_categorias = categorias.id`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },
  getProdById(req, res) {
    let sql = `SELECT * FROM productos WHERE id = ${req.params.id};`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },
  getProdDesc(req, res) {
    let sql = `SELECT * FROM productos ORDER BY id DESC;`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },
  getProdByName(req, res) {
    let sql = `SELECT * FROM productos WHERE nombre = '${req.params.name}';`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  },
  deleteProdById(req, res) {
    let sql = `DELETE FROM productos WHERE id = ${req.params.id};`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Product deleted successfully");
    });
  },
};

module.exports = ProductosController;

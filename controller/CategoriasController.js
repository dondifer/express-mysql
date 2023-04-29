const db = require("../config/database.js");

const CategoriasController = {
  create(req, res) {
    let categ = { nombre: req.body.nombre };
    let sql = "INSERT INTO categorias SET ?";
    db.query(sql, categ, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categoria añadida");
    });
  },
  update(req, res) {
    let sql = `UPDATE categorias SET nombre = '${req.body.nombre}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categoria actualisada correctamente!");
    });
  },
};

module.exports = CategoriasController;

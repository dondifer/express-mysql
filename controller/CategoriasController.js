const db = require("../config/database.js");

const CategoriasController = {
  create(req, res) {
    let post = { nombre: req.body.nombre };
    let sql = "INSERT INTO categorias SET ?";
    db.query(sql, post, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Categoria añadida");
    });
  },
};

module.exports = CategoriasController;

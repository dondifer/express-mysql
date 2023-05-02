const express = require("express");

const routerCat = express.Router();
const CategoriasController = require("../controller/CategoriasController");

routerCat.post("/", CategoriasController.create);
routerCat.put("/id/:id", CategoriasController.update);
routerCat.get("/", CategoriasController.getCatAll);
routerCat.get("/id/:id", CategoriasController.getCatById);

module.exports = routerCat;

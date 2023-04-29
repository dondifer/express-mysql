const express = require("express");

const routerProd = express.Router();
const ProductosController = require("../controller/ProductosController");

routerProd.post("/", ProductosController.create);
routerProd.put("/id/:id", ProductosController.update);
routerProd.post("/assignCat", ProductosController.assingCategoriToProduct);
routerProd.get("/", ProductosController.getProdAll);
routerProd.get("/prodAndCateg", ProductosController.getProdAndCateg);

module.exports = routerProd;

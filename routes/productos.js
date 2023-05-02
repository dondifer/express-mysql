const express = require("express");

const routerProd = express.Router();
const ProductosController = require("../controller/ProductosController");

routerProd.post("/", ProductosController.create);
routerProd.put("/id/:id", ProductosController.update);
routerProd.post("/assignCat", ProductosController.assingCategoriToProduct);
routerProd.get("/", ProductosController.getProdAll);
routerProd.get("/prodAndCateg", ProductosController.getProdAndCateg);
routerProd.get("/id/:id", ProductosController.getProdById);
routerProd.get("/desc", ProductosController.getProdDesc);
routerProd.get("/name/:name", ProductosController.getProdByName);
routerProd.delete("/:id", ProductosController.deleteProdById);
module.exports = routerProd;

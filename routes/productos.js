const express = require("express");

const routerProd = express.Router();
const ProductosController = require("../controller/ProductosController");

routerProd.post("/", ProductosController.create);
routerProd.put("/id/:id", ProductosController.update);

module.exports = routerProd;

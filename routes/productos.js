const express = require("express");

const routerProd = express.Router();
const ProductosController = require("../controller/ProductosController");

routerProd.post("/", ProductosController.create);

module.exports = routerProd;

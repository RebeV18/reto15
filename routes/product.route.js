const express = require("express");

const {
  getProducts,
  createProduct,
  getProductByID,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const productsRouter = express.Router();

productsRouter.get("/", getProducts);
productsRouter.post("/", createProduct);
productsRouter.get("/:id", getProductByID);
productsRouter.put("/:id", editProduct);
productsRouter.delete("/:id", deleteProduct);


module.exports = productsRouter;
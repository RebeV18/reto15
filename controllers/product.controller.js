const Product = require("../models/products");

const product = new Product();

const getProducts = (req, res) => {
  try {
    const products = product.getProducts();
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};

const getProductByID = (req, res) => {
  try {
    const id = req.params.id;
    const productSearch = product.getProductByID(id);
    if (!productSearch) {
      res.send("Producto no encontrado");
    }
    res.send(productSearch);
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};

const createProduct = (req, res) => {
  try {
    const newProduct = req.body;
    product.createProduct(newProduct);
    res.send("Producto creado");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};

const editProduct = (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    product.editProduct(id, newData);
    res.send("Producto actualizado");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};

const deleteProduct = (req, res) => {
  try {
    const id = req.params.id;
    product.deleteProduct(id);
    res.send("Producto eliminado o no existe");
  } catch (error) {
    console.error(error);
    res.status(404).send("Error ingresando al servidor");
  }
};


module.exports = {
  getProducts,
  getProductByID,
  createProduct,
  editProduct,
  deleteProduct,
};

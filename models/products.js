const fs = require("fs");
const path = require("path");
const pathToFile = path.join(__dirname, "../data/products.json");
const { v4: uuid4 } = require("uuid");

class Product {
  constructor() {
    this.products = this.getProducts();
  }

  save() {
    fs.writeFileSync(pathToFile, JSON.stringify(this.products));
  }

  getProducts() {
    try {
      const dataBaseProducts = fs.readFileSync(pathToFile, "utf-8");
      return dataBaseProducts ? JSON.parse(dataBaseProducts) : [];
    } catch (error) {
      console.error("Error leyendo archivo products.json:", error);
      return [];
    }
  }

  getProductByID(id) {
    const productFind = this.products.find(product => product.id == id);
    return productFind;
  }

  createProduct(product) {
    const newProduct = {
      id: uuid4(),
      ...product,
    };
    this.products.push(newProduct);
    this.save();
  }

  deleteProduct(id) {
    this.products = this.products.filter(product => product.id != id);
    this.save();
  }

  editProduct(id, newData) {
    this.products = this.products.map((product) => {
      if (product.id == id) {
        return {
          id,
          ...product,
          ...newData,
        };
      }
      return product;
    });
    this.save();
  }
}

module.exports = Product;

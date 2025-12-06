const { fetchAllProducts, fetchProductById } = require("../models/productModel");

const getAllProducts = (req, res) => {
    const products = fetchAllProducts();
    res.send(products);
};

const getProductById = (req, res) => {
    let id = parseInt(req.params.id);
    let product = fetchProductById(id);

    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Product not found" });
    }
};

module.exports = { getAllProducts, getProductById };

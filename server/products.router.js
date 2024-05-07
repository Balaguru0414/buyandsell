const express = require("express");
const { createProduct, getAllProducts } = require("./products.controller");
const router = express.Router();

router.post("/products/add", createProduct);

router.get("/products/get", getAllProducts);

module.exports = router;

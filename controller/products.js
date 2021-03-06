const Product = require('../models/Product');
const productModel = require('../models/Product');

exports.createProduct = async (req, res, next) => {
  try {
    const createdProduct = await productModel.create(req.body);
    console.log('createdProduct:', createdProduct);
    res.status(201).json(createdProduct);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const allProducts = await productModel.find({});
    res.status(200).json(allProducts);
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

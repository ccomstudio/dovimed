const Product = require('../models/productModel');
const Package = require('../models/packageModel');
const Form = require('../models/formModel');

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({})
res.status(200).json(products[0].products);
};

exports.getSingleProduct = async (req, res) => {
  const products = await Product.find({})
  const id=req.params;
res.status(200).json(products[0].description);
};

exports.getAllPackages = async (req, res) => {
  const packages = await Package.find({})
res.status(200).json(packages[0].packages);
};

exports.getSinglePackage = async (req, res) => {
  const packages = await Package.find({})
  const id=req.params;
res.status(200).json(packages[0].description);
};

exports.getForm = async (req, res) => {
  const form = await Form.find({})
res.status(200).json(form);
};
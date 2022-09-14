const express = require('express')
const router = express.Router()

const {getAllProducts,getAllPackages,getSingleProduct,getSinglePackage,getForm} = require('../controllers/products')

router.route('/products').get(getAllProducts)
router.route('/product/:id').get(getSingleProduct)
router.route('/packages').get(getAllPackages)
router.route('/package/:id').get(getSinglePackage) 
router.route('/form').get(getForm) 

module.exports = router

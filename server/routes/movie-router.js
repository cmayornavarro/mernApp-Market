const express = require('express')

const ProductCtrl = require('../controllers/product-ctrl')

const router = express.Router()

router.post('/Product', ProductCtrl.createProduct)
router.put('/Product/:id', ProductCtrl.updateProduct)
router.delete('/Product/:id', ProductCtrl.deleteProduct)
router.get('/Product/:id', ProductCtrl.getProductById)
router.get('/Products', ProductCtrl.getProducts)

module.exports = router
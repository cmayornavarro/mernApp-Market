const Product = require('../models/product-model')

createProduct = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a Product',
        })
    }

    const product = new Product(body) 

    if (!Product) {
        return res.status(400).json({ success: false, error: err })
    }

    product
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: product._id,
                message: 'Product created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Product not created!',
            })
        })
}

updateProduct = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Product.findOne({ _id: req.params.id }, (err, Product) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Product not found!',
            })
        }
        Product.name = body.name
        Product.time = body.time
        Product.rating = body.rating
        Product.country = body.country
        Product
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: Product._id,
                    message: 'Product updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Product not updated!',
                })
            })
    })
}

deleteProduct = async (req, res) => {
    await Product.findOneAndDelete({ _id: req.params.id }, (err, Product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Product) {
            return res
                .status(404)
                .json({ success: false, error: `Product not found` })
        }

        return res.status(200).json({ success: true, data: Product })
    }).catch(err => console.log(err))
}

getProductById = async (req, res) => {
    await Product.findOne({ _id: req.params.id }, (err, Product) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!Product) {
            return res
                .status(404)
                .json({ success: false, error: `Product not found` })
        }
        return res.status(200).json({ success: true, data: Product })
    }).catch(err => console.log(err))
}

getProducts = async (req, res) => {
    await Product.find({}, (err, Products) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Products.length) {
            return res
                .status(404)
                .json({ success: false, error: `Product not found` })
        }
        return res.status(200).json({ success: true, data: Products })
    }).catch(err => console.log(err))
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProducts,
    getProductById,
}
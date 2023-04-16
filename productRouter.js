
const express = require('express')
const router = express.Router()
const productController = require('./productController')
const Product = require('./productModel')

/* ----------Insertar un nuevo producto------------ */
router.post('/product/', async (req, res) => {
    try {
        const newProduct = new Product({ ...req.body })
        productController.saveProduct(newProduct, (err, result) => {
            if (err) {
                res.status(400).send('Error while saving customer', err)
            }
            else {
                res.status(200).send(result)
            }
        })

    } catch (err) {
        res.status(500).send('Internal server error', err)
    }
})
/* ----------Buscar todos los productos------------ */
router.get('/product/', async (req, res) => {
    try {
        productController.getProduct(Product, (err, result) => {
            if (err) {
                res.status(400).send('')
            } else {
                res.status(200).send(result)
            }
        })

    } catch (err) {
        res.status(500).send('Internal server error', err)
        console.log(err);
    }
})
/* ----------Buscar un producto por su ID------------ */
router.get('/product/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        productController.getProductById(Product, productId, (err, result) => {
            if (err) {
                res.status(400).send('Error getting customer', err)
            }
            else {
                res.status(200).send(result)
            }
        })

    } catch (err) {
        res.status(500).send('Internal server error', err)
        console.log(err);
    }
})

/* ----------Eliminar un producto por su ID------------ */
router.delete('/product/:id', async (req, res) => {
    try {
        const productId = req.params.id
        productController.deleteProductById(Product, productId, (err, result) => {
            if (err) {
                res.status(400).send('', err)
            } else {
                res.status(200).send(result)
            }
        })
    } catch (err) {
        res.status(500).send('Internal server error', err)
        console.log(err);
    }
})
/* ----------Actualizar un producto por su ID------------ */
router.put('/product/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        productController.updateProductById(Product, productId, updatedData, options, (err, result) => {
            if (err) {
                res.status(400).send('', err)
            } else {
                res.status(200).send(result)
            }
        })
    } catch (err) {
        res.status(500).send('Internal server error', err)
        console.log(err);
    }
})
/* ----------Hallar producto por precio------------ */
router.get('/product/articulo/:Price', async(req,res)=>{
    try {
        const productPrice = req.params.Price;
        productController.getProductByPrice(Product, productPrice, (err, result)=>{
            if (err) {
                res.status(400).send('', err)
            } else {
                res.status(200).send(result)
            }
        })
    } catch (err) {
        res.status(500).send('Internal server error', err)
        console.log(err);
    }
})
/* ----------Ver caracteristicas de un producto por su nombre------------ */
router.get('/product/buscar/:Name', async (req, res) => {
    try {
        const productName = req.params.Name;
        productController.getProductByName(Product, productName, (err, result) => {
            if (err) {
                res.status(400).send('Error getting customer', err)
            } else {
                res.status(200).send(result)
            }
        })
    } catch (err) {
        res.status(500).send('Internal server error', err)
        console.log(err);
    }
})
/* ----------Mostrar cuantos productos hay en el almacen---------- */
router.get('/stock/', async(req, res)=>{
    try {
        productController.getProductStored(Product, (err, result)=>{
            if (err) {
                res.status(400).send(' ',err)
            } else {
                res.status(200).send(result)
            }
        })  
    } catch (err) {
        res.status(500).send('Internal server error', err)
        console.log(err)
    }
})
module.exports = router
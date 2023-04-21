

const mongoose = require('mongoose');
require('../dbconfig/dbfile')

async function saveProduct(product, done) {
    const data = await product.save()
    done(undefined, data)
}

async function getProduct(product, done) {
    const data = await product.find()
    done(undefined, data)
}
async function getProductById(product, productId, done) {
    const data = await product.findById(productId)
    done(undefined, data)
}

async function deleteProductById(product, productId, done) {
    const data = await product.findByIdAndDelete(productId)
    done(undefined, data)
}

async function updateProductById(product, productId, updatedData, options, done) {
    const data = await product.findByIdAndUpdate(productId, updatedData, options)
    done(undefined, data)
}

async function getProductByPrice(product, productPrice, done) {
    const data = await product.find(
        {
            productPrice: productPrice
        },
        {
            _id: 0,
            productName: 1,
            productPrice: 1,
            category: 1,
        })
    done(undefined, data)
}

async function getProductByName(product, productName, done) {
    const data = await product.find(
        {
            productName: productName
        },
        {
            _id: 0,
            productName: 1,
            productPrice: 1,
            productDetails: 1,
        })
    done(undefined, data)
}

async function getProductStored(product, done) {
    const data = await product.aggregate([
        {
            $group: {
                _id: {NOMBRE_DEL_PRODUCTO:"$productName", PRECIO_DEL_PRODUCTO:"$productPrice"},
                CANTIDAD_ALMACENADA: {$sum:1}          
            }
        }
    ])
    done(undefined, data)
}
module.exports = {
    saveProduct, getProductById, getProduct, deleteProductById,
    updateProductById, getProductByPrice, getProductByName, getProductStored
}

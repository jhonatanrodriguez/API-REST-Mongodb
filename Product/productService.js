
const productDao = require('./productDAO')

function saveProduct(product, done){
    productDao.saveProduct(product, done)
}

function getProduct(product,done){
    productDao.getProduct(product, done)
}

function getProductById(product, productId, done){
    productDao.getProductById(product, productId, done)
}

function deleteProductById(product, productId, done){
    productDao.deleteProductById(product, productId, done)
}

function updateProductById(product, productId, updatedData, options, done){
    productDao.updateProductById(product, productId, updatedData, options, done)
}

function getProductByPrice(product, productPrice, done){
    productDao.getProductByPrice(product, productPrice,done)
}

function getProductByName(product, productName, done){
    productDao.getProductByName(product, productName, done)
}

function getProductStored(product, done){
    productDao.getProductStored(product, done)
}
module.exports = { saveProduct, getProductById, getProduct, deleteProductById, 
    updateProductById, getProductByPrice ,getProductByName, getProductStored}


const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productId : {
        type:String,
        requiere:true
    },
    productName : {
        type:String,
        requiere:true
    },
    productDetails : {
        type:String,
        requiere:true
    },
    productPrice : {
        type:Number,
        requiere:true
    },
    category : {
        type:String,
        requiere:true
    },
    productCreated : {
        type: Date,
        require:true
    },
    amountStored : {
        type: Number,
        require:true
    }
})

const Product = mongoose.model('product', productSchema)

module.exports= Product
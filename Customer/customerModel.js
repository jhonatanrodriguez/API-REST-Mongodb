
const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
    customerId :{
        type:String,
        require:  true
    },
    customerName :{
        type:String,
        require: true
    },
    customerAge :{
        type:String,
        require: true
    },
    customerAddress :{
        type:String,
        require: true
    }
});
const customer = mongoose.model('customer', customerSchema);

module.exports = customer
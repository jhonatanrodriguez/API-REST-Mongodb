
const mongoose = require('mongoose');
require('../dbconfig/dbfile')

async function saveCustomer(customer, done){
    const data = await customer.save()
    done(undefined,data)
}
async function getCustomerById(customer, customerId, done){
    const data = await customer.findById(customerId)
    done(undefined,data)
}

async function getCustomer(customer, done){
    const data = await customer.find()
    done(undefined,data)
}
 
async function updateCustomerById(customer, customerId, updatedData, options, done){
    const data = await customer.findByIdAndUpdate(customerId, updatedData, options,)
    done(undefined, data)
}

async function deleteCustomerById(customer, customerId, done){
    const data = await customer.findByIdAndDelete(customerId)
    done(undefined, data)

}

module.exports = { saveCustomer, getCustomerById, getCustomer, updateCustomerById, deleteCustomerById }
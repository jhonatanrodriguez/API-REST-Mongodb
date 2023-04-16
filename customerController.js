
const customerService = require('./customerService')

function saveCustomer(customer, done){
    customerService.saveCustomer(customer, done)
}

function getCustomerById(customer, customerId, done){
    customerService.getCustomerById(customer, customerId, done)
}

function getCustomer(customer, done){
    customerService.getCustomer(customer, done)
}

function updateCustomerById(customer, customerId, updatedData, options, done){
    customerService.updateCustomerById(customer, customerId, updatedData, options, done)
}

function deleteCustomerById(customer, customerId, done){
    customerService.deleteCustomerById(customer, customerId, done)
}

 module.exports = { saveCustomer, getCustomerById, getCustomer, updateCustomerById, deleteCustomerById }
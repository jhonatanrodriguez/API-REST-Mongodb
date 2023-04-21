
const customerDao = require('./customerDAO')

function saveCustomer(customer, done){
    customerDao.saveCustomer(customer, done)
}

function getCustomerById(customer, customerId, done){
    customerDao.getCustomerById(customer, customerId, done)
}

function getCustomer(customer, done){
    customerDao.getCustomer(customer, done)
}

function updateCustomerById(customer, customerId, updatedData, options, done){
    customerDao.updateCustomerById(customer, customerId, updatedData, options, done)
}

function deleteCustomerById(customer, customerId, done){
    customerDao.deleteCustomerById(customer, customerId, done)
}

 module.exports = { saveCustomer, getCustomerById, getCustomer, updateCustomerById, deleteCustomerById }
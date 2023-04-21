
const express = require('express')
const router = express.Router()
const customerController = require('./customerController')
const customer = require('./customerModel')


/* ----------Insertar un nuevo cliente------------ */
router.post('/', async(req, res)=>{
    try {
        const newCustomer = new customer({...req.body})
        customerController.saveCustomer(newCustomer,(err, result)=>{
            if(err){
                res.status(400).send({'msg': 'Error while saving customer', 'error':err})
            }
            else{
                res.status(200).send(result)
            }
        })
    } catch(err){
        res.status(500).send('Internal server error')
    }
})
/* ----------Buscar un cliente por su ID------------ */
router.get('/:id', async(req, res)=>{
    try {
        const customerId = req.params.id;
        customerController.getCustomerById(customer, customerId, (err, result)=>{
            if(err){
                res.status(400).send('Error getting customer', err)
            }
            else{
                res.status(200).send(result)
            }
        })
    } catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
})
/* ----------Buscar todos los clientes----------- */
router.get('/', async(req,res)=>{
    try {
        customerController.getCustomer(customer, (err,result)=>{
            if(err){
                res.status(400).send('')
            }else{
                res.status(200).send(result)
            }
        })  
    } catch (err) {
        res.status(500).send('')
    }
})
/* ----------Actualizar un cliente por su ID------------ */
router.put('/:id', async(req, res)=>{
    try {
        const customerId = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        customerController.updateCustomerById(customer, customerId, updatedData, options, (err, result)=>{
            if(err){
                res.status(400).send('esto')     
            }else{
                res.status(200).send(result)
            }
        })
    } catch (err) {
        res.status(500).send(err)
    }
})
/* ----------Eliminar un cliente por su ID------------ */
router.delete('/:id', async(req, res)=>{
    try {
        const customerId = req.params.id;
        customerController.deleteCustomerById(customer, customerId, (err, result)=>{
            if (err) {
                res.status(400).send(' ')
            } else {
                res.status(200).send(result)
            }
        })
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router
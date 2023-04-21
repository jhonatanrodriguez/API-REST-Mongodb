
const express = require('express');
const app = express()
const productRouter = require('./productRouter');
/* const bodyParser = require('body-parser'); */

/* app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
})); */

app.use(express.json());
app.use(productRouter)
app.listen(3000,()=>{
    console.log('listening....');
})





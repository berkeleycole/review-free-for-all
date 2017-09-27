var express = require('express');
var bodyParser = require('body-parser')
var Product = require('./models').Product
var app = express();


app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    Product.findAll().then( (products) =>{
      res.json({products: products})
    })
});

app.post('/products/create', (req, res) => {
  Product.create({
    name: req.body.name,
    description: req.body.description
}).then((res)=>{
    res.status(201)
    res.json({products: ["you created a new product", res]})
  })
})

module.exports = app

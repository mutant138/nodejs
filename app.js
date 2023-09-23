const express = require('express');
const bodyParser = require('body-parser')
const app= express();
app.use(bodyParser.urlencoded())
app.use("/add-product",(req,res,next)=>{
    //console.log('In another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>')
})
app.post('/product',(req,res,next)=>{
   console.log(req.body)
   res.redirect('/')
})
app.use('/',(req,res,next)=>{
    //console.log('In another middleware');
    res.send('<h2>Hell from Express JS<h2>')
})

//const { log } = require('console');
//console.log(routes.someText)


app.listen(3000);

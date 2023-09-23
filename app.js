const express = require('express');

const app= express();

app.use("/add-product",(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>The add product</h1>')
})
app.use('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from Express</h1>')
})

//const { log } = require('console');
//console.log(routes.someText)

app.listen(3000);

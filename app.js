const http = require('http');

const express = require('express');
 const bodyParser = require('body-parser');
const app= express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/users',(req,res, next)=>{
   console.log('middleware that handle /user');
    res.send('<h1>middleware that handle /user</h1>');
});
app.use('/add-product',(req,res, next)=>{
    console.log('middleware that handle /');
   res.send('<h1><form action="/body" method= "post"><input type="text" name="title"><button type="submit">add product</button></form></h1>');
});
app.post('/body',(req,res,next)=>{
    console.log(req.body);
                res.redirect('/');
});
app.use('/',(req,res,next)=>{
      res.send('<h1>hello</h1>');
});
app.listen(3000);
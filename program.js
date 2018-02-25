var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');


//app.use(bodyParser.urlencoded({extended: false}));
//app.use(require('stylus').middleware(process.argv[3]));

//app.post('/form',function(req,res){
//    console.log(req,res);
//	res.send(req.body.str.split('').reverse().join(''));
//});

//app.get('/search',function(req,res){
//    var query = req.query
//   res.send(query)

//})

app.get('/books',function(req,res){
    fs.readFile(process.argv[3],function(err,content){
    if(err){
        res.send(500);
    }
    try{
        var books = JSON.parse(content.toString());
        res.json(books);
    }catch(error){
        res.send(500)
    }
    })
})

app.listen(process.argv[2]);

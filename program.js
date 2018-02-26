<<<<<<< HEAD
const http = require('http')
const url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true)
  const time = new Date(parsedUrl.query.iso)
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
=======
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
>>>>>>> 29a2c7d4b51e9a8b160076c83f401ce521b6b685

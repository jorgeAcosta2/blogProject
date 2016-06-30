var express = require('express');
var app = express();
var path = require("path"),
    fs = require("fs"),
    bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

//After seeing arrow functions in the express/node/everywhere documentation so much
//I decided to read up on them and 
//switch over to using them in this server.js file

/*var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}
*/
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//app.get('/',(req,res)=>{
    //app.use(express.static(__dirname + '/'));
    //res.sendFile(path.join(__dirname + '/'));
//});

var homepaths = ['/','/index.html'];

app.route(homepaths)
    .get((req,res)=>{
    app.use(express.static(__dirname + '/'));
    res.sendFile(path.join(__dirname + '/'));
    })
    .post((req, res)=>{
    res.send(req.body);
    console.log("Name:" + req.body.user , "Comment: "  + req.body.comment);
    res.end();
    })
    .delete((req,res)=>{
    console.log(req.body);
    res.send('Something happened??????');
    });

app.listen(3000,()=>{
    console.log('http://localhost:3000/index.html');
});










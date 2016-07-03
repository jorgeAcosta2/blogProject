var express = require('express');
var app = express();
var path = require("path"),
    fs = require("fs"),
    bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var database = require('./database');
var CommentSchema = require('./database.js');

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

var homepaths = ['/','/index.html'];

app.route(homepaths)
    .get((req,res)=>{
    app.use(express.static(__dirname + '/'));
    res.sendFile(path.join(__dirname + '/'));
    })  //end get
    .post((req, res)=>{
        //res.send(req.body);
    console.log("Name:" + req.body.user , "Comment:"  + req.body.comment);
    CommentSchema.create(req.body,(e,comment)=>{
        if(e){
            return console.log(e);
        }else{
            res.send(comment);
            console.log({'comment':comment});
        }
    }); //end CommentSchema
        //res.end();
    })  //end post request
    .delete((req,res)=>{
    console.log(req.body);
    res.send(req.body.id);
    });

app.get('/testdb',(req,res)=>{
    CommentSchema.find({},(e,comment)=>{
        if(e){
            return console.log(e);
        }else{
            res.send("fan fucking tastic");
            console.log('success');
        }
    });
});

app.listen(3000,()=>{
    console.log('http://localhost:3000/index.html');
});










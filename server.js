var express = require('express');
var app = express();
var path = require("path"),
    fs = require("fs"),
    bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var database = require('./database');
var User = require('./database.js');

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
app.set('views','./views');
app.set('view engine','pug');
var homepaths = ['/','/index.html'];

app.route(homepaths)
    .get((req,res,next)=>{
    app.use(express.static(__dirname + '/'));
    res.sendFile(path.join(__dirname + '/index.html'));
    //res.render('index');
    })  //end get
    .post((req, res)=>{
    User.create(req.body,function(e,comment){
        if(e){return console.log(e)}
        else{console.log('New comment saved: '+comment); res.send(comment)};
    });
        //res.end();
    })  //end post request
    .delete((req,res)=>{
    console.log(req.body);
    res.send(req.body.id);
    });

app.get('/comments',function(req,res){
   User.find({},function(err,user){
        res.json(user);
            //end foreach
    });     //end find  
});

app.listen(3000,()=>{
    console.log('http://localhost:3000/index.html');
});










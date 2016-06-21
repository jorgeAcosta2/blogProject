var express = require('express');
var app = express();
var path = require("path");

app.get('/',(req,res) => {
    app.use(express.static(__dirname + '/'));
    res.sendFile(path.join(__dirname + '/'));
});
app.listen(3000,function(){
    console.log("It's running, http://localhost:3000");
});

app.post('/', (req,res) => {
   console.log(res); 
});








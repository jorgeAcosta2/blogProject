var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogproject',(e)=>{
    if(e){
        console.log('Error: failed connecting to Mongodb');
    }else{
        console.log('Successfully connected to Mongodb');
    }
});
//schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    user: String,
    comment: String
});

var User = mongoose.model('User',userSchema);

module.exports = User;
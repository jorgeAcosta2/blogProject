var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogproject',(e)=>{
    if(e){
        console.log('Error: failed connecting to Mongodb');
    }else{
        console.log('Successfully connected to Mongodb');
    }
});

//schema

var commentSchema = new mongoose.Schema({
    user: String,
    comment: String
});

var model = mongoose.model('CommentSchema',commentSchema);

module.exports = model;
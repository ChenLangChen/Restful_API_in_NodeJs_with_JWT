const mongoose = require('mongoose');

// Creating the schema 
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type: String,
        required: true,
        max:1024,
        min: 6
    },
    date:{
        type: Date,
        default: Date.now
    }
})

// 'User' decides the name of the collection --> 'users', and it's case insensitive 
// This step creates a new collection 
module.exports = mongoose.model('User', userSchema);





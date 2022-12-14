const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,

    },
    quote:{
        type:Number,
        default:0
    },
},
    {collection:'user-data'}
);

const model = mongoose.model('User', User);
module.exports = model;

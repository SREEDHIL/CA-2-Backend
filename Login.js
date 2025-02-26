const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:Number,
        required:true
    }
});

const Login = mongoose.model('Login',LoginSchema);
module.exports = {Login}
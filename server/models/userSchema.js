const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
    },
    password : {
        type : String,
        required : true,
        minLenght : 5,
    }

});

module.exports = mongoose.model("userschema" , UserSchema);


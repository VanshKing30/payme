const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const AccountSchema = new mongoose.Schema({
    usedId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    balance : {
        type : Number,
        required : true,
    },
});

module.exports = mongoose.model("accountSchema" , AccountSchema); 

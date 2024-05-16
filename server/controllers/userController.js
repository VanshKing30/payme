const User = require("../models/userSchema");
const Account = require("../models/accountSchema");
const zod = require('zod');
const authMiddleware = require("../middlewares/authMiddleware");
require("dotenv").config();

//zod validation first 

const signupSchema = zod.object({
    username : zod.string(),
    password : zod.string.min(5),
    firstName : zod.string(),
    lastName : zod.string()
});




exports.userSignup = async(req , res) =>{
    try{

    }
    catch(e){

    }
}
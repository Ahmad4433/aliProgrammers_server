const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({

first_name:{
    type:String
},
last_name:{type:String},
email:{type:String},
password:{type:String},
password_otp:{type:Number},
password_otp_exp:{type:String},
role:{type:String,default:'user'},
is_active:{type:Boolean,default:false},
image:{type:String},
verification_secret:{type:String}

},{timestamps:true})


module.exports = mongoose.model('User',userSchema)
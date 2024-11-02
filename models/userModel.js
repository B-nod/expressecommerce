const mongoose = require('mongoose')
const uuidv1 = require('uuidv1')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    role:{
        type:Number,
        default:0
    },
    hased_password:{
        type:String,
        required:true,
        trim:true
    },
    salt:String,
    isVerified:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})

// virtual fields
userSchema.virtual('password')
.set(function(password){
    this._password = password
    this.salt = uuidv1()
    this.hased_password=this.encryptPassword(password)
})
.get()

module.exports = mongoose.model('User', userSchema)
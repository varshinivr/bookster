const mongoose=require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose')
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    }
})


userSchema.plugin(passportLocalMongoose)
const userModel=mongoose.model('user',userSchema)

module.exports=userModel
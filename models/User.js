var mongoose = require ('mongoose')

const UserSchema = mongoose.Schema({ 
    email : {type:String ,unique:true},
    username:{type:String , unique:true},   
    password:{type:String},   
    profile_pic:{type:String,default:'/profile.png'} ,
    about:{type:String,default:""},   
    firstName:{type:String,default:""},   
    lastName:{type:String,default:""},    
    phone:{type:String,default:""},   
    country:{type:String,default:""},    
    role:{type:String,default:""},    
}) 
mongoose.models={}
module.exports=  mongoose.model('User',UserSchema);
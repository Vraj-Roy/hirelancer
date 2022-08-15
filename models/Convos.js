var mongoose = require ('mongoose')

const ConvosSchema = mongoose.Schema({ 
    user1 : {type:String },
    user2 : {type:String},  
    channelName : {type:String,unique:true},  
},) 
mongoose.models={}
module.exports=  mongoose.model('Convos',ConvosSchema);
var mongoose = require ('mongoose')

const MessageSchema = mongoose.Schema({ 
    from : {type:String },
    to : {type:String},
    message : {type:String},
    date:{type:String, default:Date.now() }
},{timestamps: true}) 
mongoose.models={}
module.exports=  mongoose.model('Message',MessageSchema);
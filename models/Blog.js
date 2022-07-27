var mongoose = require ('mongoose')

const BlogSchema = mongoose.Schema({ 
    title : {type:String}, 
    description : {type:String},
    img:{type:String},
    slug:{type:String}, 
},{timestamps: true}) 
mongoose.models={}
module.exports=   mongoose.model('Blog',BlogSchema );
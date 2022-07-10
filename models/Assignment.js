const mongoose= require('mongoose');

const assignmentSchema = mongoose.Schema({ 
    assignmentName:{type:String},  
    dueDate:{type:String},
    description:{type:String},
    tags:{type:Array},
    postedBy:{type:String,},
    slug:{type:String,},
    postedOn:{type:String, default:Date.now() }
})
    
mongoose.models={};
module.exports=mongoose.model('Assignment',assignmentSchema)
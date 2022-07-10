var mongoose = require ('mongoose')

const FreelancerProfileSchema = mongoose.Schema({ 
    email : {type:String ,unique:true},
    username:{type:String , unique:true},    
    education:{type:String} ,
    youDo:{type:String},   
    englishProficiency:{type:String},
    skills:{type:Array},  
    description:{type:String}  
}) 
mongoose.models={}
module.exports=  mongoose.model('Freelancer',FreelancerProfileSchema);
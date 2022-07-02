const mongoose= require('mongoose');

const JobSchema = mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    tags:{type:Array},
    postedBy:{type:String},
    price:{type:Number},
},{ timestamps: true}) 
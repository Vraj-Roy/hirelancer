import connectDb from '../../../middleware/db';
import Message from '../../../models/Message'
import Convos from '../../../models/Convos'
const jwt = require("jsonwebtoken");

const addMessage=async(req,res)=>{ 
    await connectDb() 
    let user =  jwt.verify(req.body.token,'!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
    
    if(user && (req.body.to!==req.body.from)){
        
        let C1=await Convos.findOne({user1:req.body.from} && {user2:req.body.to}) 
        let C2=await Convos.findOne({user1:req.body.to} && {user2:req.body.from})  

        if( C1|| C2){
            let M=new Message({
                from:req.body.from,   
                message : req.body.message,
                to:req.body.to
             })
             M.save(); 
             res.json(M)

            }else{
                let from=req.body.from;
                let to=req.body.to;
                let channelName=((from<to)?from.toString()+to.toString():(to.toString()+from.toString()))
                let newConvo=new Convos({
                    user1:req.body.from,   
                    user2:req.body.to,
                    channelName:channelName
                })
                newConvo.save();
                let M=new Message({
                    from:req.body.from,   
                    message : req.body.message,
                    to:req.body.to
                 })
                 M.save();
                 res.json(M) 
            }
            
        }else{
            res.json({success:false})
    
        }

}

export default addMessage
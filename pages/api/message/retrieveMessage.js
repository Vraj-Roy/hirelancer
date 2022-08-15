import connectDb from '../../../middleware/db';
import Message from '../../../models/Message'
import User from '../../../models/User'
const jwt = require("jsonwebtoken");

const retrieveMessage=async(req,res)=>{ 
    await connectDb() 
    let user =  jwt.verify(req.body.token,'!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
    let U=await User.find({username:user.username})
    let M=await Message.find({
        $or: [
            { $and: [{from:U[0].uid},{to:req.body.to}] },
            { $and: [{to:U[0].uid},{from:req.body.to}] }
        ] 
    })
    res.json(M) 
}

export default retrieveMessage
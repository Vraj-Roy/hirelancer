import connectDb from '../../../middleware/db';
import User from '../../../models/User'
const jwt = require("jsonwebtoken");

const getUid=async(req,res)=>{ 
    await connectDb() 
    let user =  jwt.verify(req.body.token,'!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
    let U=await User.find({username:user.username})
     res.json(U[0].uid)
}

export default getUid
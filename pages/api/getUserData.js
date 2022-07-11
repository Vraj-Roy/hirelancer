import User from "../../models/User"; 
const jwt = require("jsonwebtoken"); 
import connectDb from './../../middleware/db'; 

const getuserdata=async(req,res)=>{
    
    
    await connectDb();  
    if(req.body.token){
       
        let user = jwt.verify(req.body.token,'!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                if(user){ 
                    let u = await User.findOne({email:user.email}); 
                if(u){
                    res.json({success:true,
                    username:u.username,
                    profile:u.profile_pic
            })

                }else{
                    res.json({success:false,message:"user not found "}) 
                }
                } 
                else{
                    res.json({success:false}) 
                }
        } 
    
}
export default getuserdata;
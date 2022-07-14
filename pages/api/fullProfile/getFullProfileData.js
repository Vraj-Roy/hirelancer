import connectDb from './../../../middleware/db';
import User from './../../../models/User' 
const jwt = require("jsonwebtoken");

const getFullProfileData=async(req,res)=>{
    await connectDb();
    if(req.body.settings){
  
        let user = jwt.verify(req.body.token,'!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                if(user){ 
                    let U = await User.findOne({email:user.email}); 
                if(U){
                    res.json({success:true,
                                userData:U
            })

                }else{
                    res.json({success:false,message:"user not found "}) 
                }
                } 
                else{
                    res.json({success:false}) 
                }
    }else{

        let U= await User.findOne({username:req.body.username})
        if(U){
            res.json({success:true,U})
        }else{
            res.json({success:false,message:"User not found"})
            
        }
    }
}
export default getFullProfileData
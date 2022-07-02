import User from "../../models/User"; 
import connectDb from './../../middleware/db';
var bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");

const login = async(req,res)=>{
    if(req.method=="POST"){
        await connectDb(); 
        let user=await User.findOne({email:req.body.email});
        if(user){
            let b= bcrypt.compareSync(req.body.password,user.password)            
            if(b){
                var token = jwt.sign({ email:req.body.email  }, '!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                res.json({success:true,token})
            }else{
                 res.json({success:false,message:"wrong password"})
                
            }
        }else{
            
             res.json({success:false,message:"user not found"})
        }
    }
}
export default login 
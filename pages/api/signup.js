import User from "../../models/User"; 
import connectDb from './../../middleware/db';
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const Signup = async(req,res)=>{  
    if(req.method=="POST"){
        await connectDb(); 
        var salt =  bcrypt.genSaltSync(10);
        
          
        var hash =  bcrypt.hashSync(req.body.password, salt);
        let user=await User.findOne({email:req.body.email});
        if(!user){
            let U = new User({ 
                email:req.body.email,
                password: hash 
            })
            await U.save(); 
                var token = jwt.sign({ email:req.body.email  }, '!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                res.json({success:true,token})
        }else{
                res.json({success:false})
                
        }
          
 
        // console.log(U.save())
    }
}
export default Signup
// if(method==)

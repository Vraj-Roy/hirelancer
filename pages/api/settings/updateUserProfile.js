import User from './../../../models/User'
const jwt = require("jsonwebtoken"); 
import connectDb from './../../../middleware/db';
    const updateUserProfile=async(req,res)=>{
        
    if(req.method==="POST"){

        console.log("profile:+", req.body.user.profile_pic) 
        await connectDb(); 
        let username = jwt.verify(req.body.token,'!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
        let isExist= await User.findOne({username:req.body.user.username})
        
        if((username.username && !isExist ) || (isExist.username==username.username) ){
            let U=await User.findOneAndUpdate({username:username.username},{
                    username:req.body.user.username,
                    profile_pic:req.body.user.profile_pic,
                    about:req.body.user.about,  
                    firstName:req.body.user.firstName,
                    lastName:req.body.user.lastName, 
                    profile_pic:req.body.profile_pic, 
                    country:req.body.user.country, 
            })

            var token = jwt.sign({ email:username.email , username:req.body.user.username}, '!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+'); 
            res.json({success:true,token:token})
        }else if(isExist){ 
            res.json({success:false})
            
        }else{ 
            res.json({success:false})
            
        }
    }

    }
export default updateUserProfile;
import connectDb from '../../middleware/db';
import User  from '../../models/User';
import Freelancer  from '../../models/FreelancerProfile';
const jwt = require("jsonwebtoken"); 

const uploadAssignment=async(req,res)=>{
        await connectDb();  
        if(req.method="POST"){  
            if( req.body.token=="" || req.body.username==""|| req.body.firstName=="" || req.body.lastName=="" || req.body.youDo=="",req.body.education=="",req.body.englishProficiency=="",req.body.description=="" ){
                res.json({success:false,message:"empty fields"})
               
        }else{
            try{
                let user =  jwt.verify(req.body.token,'!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                    if(!user){
                        res.json({success:false,message:"invalid token"}); 
                    }else{  
                        
                        let U =  await User.findOneAndUpdate({email:user.email},{ 
                            username:req.body.username, 
                            firstName:req.body.firstName,   
                            lastName:req.body.lastName,
                            role:"teacher",
                            country:req.body.country,     
                            phone:req.body.phone     
                        }
                        )
                        U.save(); 
                        console.log(req.body.skills)
                        let F = new Freelancer({
                            email:user.email,
                            username:req.body.username,
                            education:req.body.education,
                            youDo:req.body.youDo,   
                            englishProficiency:req.body.englishProficiency,      
                            skills:req.body.skills,  
                            country:req.body.country,
                            description:req.body.description    
                        }) 
                        await F.save();
                        res.json({success:true,message:"Succesfully uploaded"}); 
                        
                }
            }catch(e){
                res.json({success:false, message:e.message})
            }   
        }
}
}
export default uploadAssignment;
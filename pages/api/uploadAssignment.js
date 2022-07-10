import connectDb from './../../middleware/db';
import User, { findOneAndUpdate } from '../../models/User';
import Assignment from '../../models/Assignment';
const jwt = require("jsonwebtoken"); 
var randomstring = require("randomstring");
const uploadAssignment=async(req,res)=>{
        await connectDb();
        if(req.method="POST"){ 
            if( req.body.token=="" || req.body.username==""|| req.body.firstName=="" || req.body.lastName=="" || req.body.assignmentName=="" || req.body.date=="" ||  req.body.description=="" ||  req.body.tags==""   ){
                res.json({success:false,message:"empty fields"})
               
        }else{
            try{
                let user =  jwt.verify(req.body.token,'!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                    if(!user){
                        res.json({success:false,message:"invalid token"}); 
                    }else{  
                        
                        let U =  await User.findOneAndUpdate({email:user.email},{ 
                            username:req.body.username, 
                            profile_pic:"/profile" , 
                            firstName:req.body.firstName,   
                            lastName:req.body.lastName,
                            role:"student"     
                        }
                        )
                        U.save(); 
                        
                        let slug=randomstring.generate(9)
                        let A = new Assignment({
                            assignmentName:req.body.assignmentName, 
                            dueDate:req.body.date,
                            description:req.body.description,
                            postedBy:req.body.username,
                            tags:req.body.tags,     
                            slug:slug       
                        })
                        A.save();
                        res.json({success:true,message:"Succesfully uploaded"}); 
                        
                }
            }catch(e){
                res.json({success:false, message:e.message})
            }   
        }
}
}
export default uploadAssignment;
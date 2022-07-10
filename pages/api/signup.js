import User from "../../models/User"; 
import connectDb from './../../middleware/db';
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const Signup = async(req,res)=>{  
    if(req.method=="POST"){

        await connectDb(); 
        
        if(req.body.type!="google"){
            // console.log("Not Google")
            var salt =  bcrypt.genSaltSync(10);
            var hash=bcrypt.hashSync(req.body.password, salt); 

            let userMail=await User.findOne({email:req.body.email});
            let userUserName=await User.findOne({username:req.body.username});  

            if(!userMail && !userUserName){
                console.log("uniqie username")
                let U = new User({ 
                    email:req.body.email,
                    username:req.body.username.replace(/\s/g,''), 
                    password: hash  
                })

                await U.save(); 
                var token = jwt.sign({ email:req.body.email  }, '!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                res.json({success:true,token})
            }else if(!userMail&&userUserName){
                console.log(" username same")
                var isUnique = false;
                var i = 0;
                while(isUnique==false){
                    let userUserName=await User.findOne({username:req.body.username+i});
                    if(!userUserName){
                        
                        let U = new User({ 
                        email:req.body.email,
                        username:req.body.username.replace(/\s/g,'')+i, 
                        password: hash  
                        })

                    await U.save();
                    isUnique==true; 
                    }else{
                        i++;
                    }
                }
            
            var token = jwt.sign({ email:req.body.email  }, '!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
            res.json({success:true,token})

        }
        else{
                res.json({success:false,message:"User already exist"})
                
        }
        }else{ 
            // console.log()
            var salt =  bcrypt.genSaltSync(10);
            var hash =  bcrypt.hashSync(req.body.userData.image, salt); 
            let userMail=await User.findOne({email:req.body.userData.email});
            let userUserName=await User.findOne({username:req.body.userData.name});
            
            if(!userMail&&!userUserName){
                let U = new User({ 
                    email:req.body.userData.email,
                    username:req.body.userData.Name,
                    password: hash  
                })
                await U.save(); 
                var token = jwt.sign({ email:req.body.email  }, '!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                res.json({success:true,token})
        }else{
                res.json({success:false,message:"User already exist"})
                
        }
        }
        
          
          
          
 
        // console.log(U.save())
    }
}
export default Signup
// if(method==)

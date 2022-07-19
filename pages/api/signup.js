import User from "../../models/User"; 
import connectDb from './../../middleware/db';
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
var randomstring = require("randomstring");
import { getToken } from "next-auth/jwt"

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
                let U = new User({ 
                    email:req.body.email,
                    username:req.body.username.replace(/\s/g,''), 
                    password: hash  
                })

                await U.save(); 
                var token = jwt.sign({ email:req.body.email,username:req.body.username  }, '!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                res.json({success:true,token})
            }else if(userUserName && !userMail){
                res.json({success:false,message:"Username is already exist "})
                
                 
            } 
        else{
                res.json({success:false,message:"another account is already linked with this email "})
                
        }
        }else{
            let secret="v"
            const googleToken= await getToken({ req, secret })
            // console.log(googleToken)
            var salt =  bcrypt.genSaltSync(10);
            var hash =  bcrypt.hashSync(googleToken.picture , salt); 
            let userMail=await User.findOne({email:googleToken.email});
            let userUserName=await User.findOne({username:googleToken.name});
            
            if(!userMail && !userUserName){
                console.log("1")
                let U = new User({  
                    email:googleToken.email,
                    username:googleToken.name,
                    password: hash  
                })
                await U.save(); 
                var token = jwt.sign({ email: googleToken.email, usenname: googleToken.name  }, '!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                res.json({success:true,token})
            }else if(!userMail && userUserName){
                let secret="v"
                console.log("dif username")
                const googleToken= await getToken({ req, secret })
                console.log(googleToken)
                var salt =  bcrypt.genSaltSync(10);
                var hash =  bcrypt.hashSync(googleToken.picture , salt);  
                let random=randomstring.generate(9)
                let newUserName=googleToken.name+random;
                let userUserName=await User.findOne({username:newUserName});
                console.log(newUserName)
                
                if(!userUserName){
                    let U = new User({  
                        email:googleToken.email,
                        username:newUserName,
                        password: hash  
                    })
                    await U.save(); 
                    var token = jwt.sign({ email: googleToken.email, usenname:newUserName  }, '!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
                    res.json({success:true,token})
                }
                
            }else{  
                res.json({success:false,message:"Email already exist"})
        }
        }
        
          
          
          
 
        // console.log(U.save())
    }
}
export default Signup
// if(method==)

const jwt = require("jsonwebtoken"); 
import connectDb from './../../../middleware/db';
import User from './../../../models/User'
const bcrypt = require('bcrypt');

const passwordReset = async(req,res) => {
    if(req.method==="POST"){
        await connectDb();  
        let user = jwt.verify(req.body.token,'!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+');
        let isExist= await User.findOne({username:user.username})
        if(isExist){ 
            const match = await bcrypt.compare(req.body.password.old, isExist.password);

                if(match){ 
                    var salt =  bcrypt.genSaltSync(10);
                    var hash =  bcrypt.hashSync(req.body.password.new, salt);   
                    await User.findOneAndUpdate({username:isExist.username},{password:hash})
                    res.json({success:true}) 
                }else{ 
                    res.json({success:false})

                }
          
        }else{
            res.json({error:"not found"})
        }
        
    }
} 
export default passwordReset
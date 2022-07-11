import connectDb from './../../../middleware/db';
import User from './../../../models/User'

const getFullProfileData=async(req,res)=>{
    await connectDb();
    let U= await User.findOne({username:req.body.username})
    if(U){
        res.json({success:true,U})
    }else{
        res.json({success:false,message:"User not found"})

    }
}
export default getFullProfileData
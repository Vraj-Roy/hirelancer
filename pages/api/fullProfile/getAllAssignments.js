import connectDb from './../../../middleware/db';
import Assignment from './../../../models/Assignment'

const getAllAssignments=async(req,res)=>{
    await connectDb();
    let A= await Assignment.find({postedBy:req.body.username}) 
    res.json({success:true,A})  
}
export default getAllAssignments;
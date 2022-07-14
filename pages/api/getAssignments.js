import Assignment from "../../models/Assignment"; 
import connectDb from './../../middleware/db';

const getassignments=async(req,res)=>{
    await connectDb();
    let A = await Assignment.find().sort([['postedOn', -1]])
    res.json(A);    
}
export default getassignments;
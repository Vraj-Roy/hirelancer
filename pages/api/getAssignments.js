import Assignment from "../../models/Assignment"; 
import connectDb from './../../middleware/db';

const getassignments=async(req,res)=>{
    await connectDb();
    let A = await Assignment.find() 
    res.json(A);    
}
export default getassignments;
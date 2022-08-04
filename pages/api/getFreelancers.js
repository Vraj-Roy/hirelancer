import Freelancer from "../../models/FreelancerProfile"; 
import connectDb from './../../middleware/db'; 

const getfreelancers=async(req,res)=>{
    await connectDb();
    let F = await Freelancer.find()
    res.json(F);        
} 
export default getfreelancers;
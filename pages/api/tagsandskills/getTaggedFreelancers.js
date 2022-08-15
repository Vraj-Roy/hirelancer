import Freelancer from "../../../models/FreelancerProfile"
import connectDb from "../../../middleware/db" 
const getTaggedPosts = async(req,res) => { 

    await connectDb();
    console.log(req.body.slug)
    let T= await Freelancer.find({ 
        skills:req.body.slug
    }).collation({locale:"en",strength:2}).sort([['postedOn', -1]])
    res.json(T)
    
}

export default getTaggedPosts
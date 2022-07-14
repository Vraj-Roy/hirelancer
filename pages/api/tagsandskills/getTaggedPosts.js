import Assignments from "../../../models/Assignment"
import connectDb from "../../../middleware/db"
const getTaggedPosts = async(req,res) => { 

    await connectDb();
    let T= await Assignments.find({
        tags:req.body.slug
    }).collation({locale:"en",strength:2}).sort([['postedOn', -1]])
    res.json(T)
    
}

export default getTaggedPosts
import Assignments from "../../models/Assignment"
import connectDb from "../../middleware/db"
const getSpecicPost = async(req,res) => { 

    await connectDb();
    let A= await Assignments.findOne({
        slug:req.body.slug
    })
    res.json(A)
    
}

export default getSpecicPost
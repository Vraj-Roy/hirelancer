import connectDb from '../../../middleware/db';
import Blog from '../../../models/Blog'

const getSpecificBlog = async(req,res) => {
    await connectDb()
    let B=await Blog.findOne({slug:req.body.slug}) 
    res.json(B)
}

export default getSpecificBlog
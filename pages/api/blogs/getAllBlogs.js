import connectDb from '../../../middleware/db';
import Blog from '../../../models/Blog'

const getAllBlogs = async(req,res) => {
    await connectDb()
    let B=await Blog.find({},{title:1,img:1,slug:1,createdAt:1})
    res.json(B)
}

export default getAllBlogs
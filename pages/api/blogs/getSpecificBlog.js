import connectDb from '../../../middleware/db';
import Blog from '../../../models/Blog'

const getSpecificBlog = async(req,res) => {
    await connectDb()
    let B=await Blog.findOne({slug:req.body.slug}) 
    if(B){
        res.json({success:true,blog:B})
    }else{
        res.json({success:false})
    }
}

export default getSpecificBlog
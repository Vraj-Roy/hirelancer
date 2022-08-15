import connectDb from '../../../middleware/db';
import Blog from '../../../models/Blog'

const addBlog=async(req,res)=>{ 
    await connectDb()
    const slug=req.body.title.replace(/\s+/g, '-');
     let B=new Blog({   
        title : req.body.title,
        description : req.body.description,
        img:req.body.img,
        slug:slug, 
     })
     B.save();
     res.json({success:true})
}

export default addBlog
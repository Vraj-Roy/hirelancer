import connectDb from '../../../middleware/db'; 
const auth = async(req,res) => {
    await connectDb()
    if(req.method=="POST"){

        if(req.body.name=="Abhishek"&&req.body.password=="EmpireState"){
            res.json({success:true})
        }else{
            res.json({success:false})
            
        }
    }else{
        res.json({success:false})

    }
}

export default auth
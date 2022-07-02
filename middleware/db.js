import mongoose from "mongoose";

const  connectDb = async()=>{

    if(mongoose.connections[0].readyState){ 
        return;
    }
       mongoose.connect("mongodb+srv://Vraj:yiZyCa8ipDI8kqWW@hirelancercluster.xgdl5ud.mongodb.net/hirelancer") .then(() => console.log("Database connected!"))
       .catch(err => console.log(err));
        


    }
export default connectDb
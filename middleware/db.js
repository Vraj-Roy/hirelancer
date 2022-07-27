import mongoose from "mongoose";

const  connectDb = async()=>{ 
    if(mongoose.connections[0].readyState){  
        return;
    } 
       mongoose.connect(process.env.DB_URI).then(() => console.log("Database connected!"))
       .catch(err => console.log(err));
        


    }
export default connectDb
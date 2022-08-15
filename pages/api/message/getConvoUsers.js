import connectDb from "../../../middleware/db";
import Message from "../../../models/Message";
import User from "../../../models/User";
import Convos from '../../../models/Convos'
const jwt = require("jsonwebtoken");

const retrieveConvoUsers = async (req, res) => {
  await connectDb();
  let user = jwt.verify(
    req.body.token,
    "!@#$%^&*()_+KingInTheNorth!@#$%^&*()_+"
  );
  let U = await User.findOne({ username: user.username });
  let result=[]
  let C=await Convos.find({from:U.uid}||{to:U.uid}) 

  for (let item in C) {   
    if(C[item].user1==U.uid){
      result.push({to:C[item].user2,channel:C[item].channelName})
    }else if(C[item].user2==U.uid){
      result.push({to:C[item].user1,channel:C[item].channelName}) 
  } 
  }  
  let UData;
  let AllUsers=[];

  for (let item in result) {  
    
    const fetchUser=async()=>{
        let U=await User.findOne({uid:result[item].to}) 
        return U;  
    }
     UData=await fetchUser();
     if(UData){
         AllUsers.push({uid:UData.uid,profile_pic:UData.profile_pic,username:UData.username,channel:result[item].channel})
     }
      

  } 
  res.json(AllUsers);
}; 
export default retrieveConvoUsers;

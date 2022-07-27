import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";  
import Assignment from './../../components/Assignment' 
const Slug = ({ data, posts }) => { 
  const router = useRouter();
  const { Slug } = router.query;  
    const [userData,setUserData]=useState("");
    const [ assignmentData,setassignmentData]=useState("");
    const [loader,setLoader]=useState(true);  
    const fetchUserData = async () => { 
       
        let res = await fetch(`${process.env.URL_PATH}` + "/api/fullProfile/getFullProfileData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: Slug,token:localStorage.getItem('token') }),
    });
    let response = await res.json(); 
    console.log(response  )

    if(response.U.role=="" && response.sameUser){
      router.push("/signup/options")
   }  
    setLoader(false)
    setUserData(response)
  };
    const fetchUserAssignments = async () => { 
       
        let res = await fetch(`${process.env.URL_PATH}` + "/api/fullProfile/getAllAssignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: Slug,token:localStorage.getItem('token')}),
    });
    let response = await res.json(); 
    setLoader(false)
    setassignmentData(response)

  };

  if (Slug && (userData=="") && (assignmentData=="")) {
    fetchUserData();
    fetchUserAssignments();
  }
   
         
  if(!userData ){
    console.log(userData)
     return (
       <div className="flex  h-[80vh] w-[90vw] overflow-hidden justify-center items-center">
        <div className="  text-4xl  rounded-md">Loading</div>
      </div>
        ) 
  }  
  if(!userData.success){
     return (
       <div className="flex  h-[80vh] w-[90vw] overflow-hidden justify-center items-center">
        <div className="  text-4xl  rounded-md">Sorry User Not found</div>
      </div>
        ) 
  }  
 

  return (
    <>


      {userData.success && (
        <>
        <div className="md:w-[80vw] mx-5 md:mx-auto">

      <div className="overflow-hiden rounded-full ml-20 mr-auto flex items-center   my-8 ">
        <div className="flex flex-col justify-center ">
        <img src={userData.U.profile_pic+".png"} className="w-28 h-28 rounded-full  border-4 border-white" alt="" /><div className="text-center text-xl"> {'@' + userData.U.username}</div>
        </div>
        <div className="text-4xl font-bold hidden md:block md:ml-40">Profile</div>
      </div>
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className=" font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12 ">Username</div>
          <div className="    border-2   py-2 px-3      text-md  rounded-lg   w-[60%] md:w-[40%]  ">{userData.U.username}</div>
        </div>
         
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
        <div className=" font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12 ">Email</div>
        <div className="    border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]   ">{userData.U.email==""?'Not Provided':userData.U.email }</div>
        </div>

        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className="font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12 ">First Name</div>
          <div className="   border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]  ">{userData.U.firstName==""?'Not Provided':userData.U.firstName  }</div>
        </div>
         
      
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className="font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12  ">Last Name</div>
          <div className="   border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]  ">{userData.U.lastName==""?'Not Provided':userData.U.lastName   }</div>
        </div>
      
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className="font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12  ">Bio</div>
          <div className={`border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]  ` + (userData.U.about==""?'text-red-600 font-bold':"")}>{userData.U.about==""?"Not Provided":userData.U.about}</div>
        </div>
         
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className="font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12  ">Role</div>
          <div className="   border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]  ">{userData.U.role==""?'Not Provided':userData.U.role}</div>
        </div>  
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className="font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12  ">Country</div>
          <div className="   border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]  ">{userData.U.country==""?'Not Provided':userData.U.country}</div>
        </div>  
        </div>
        </>
      )}
        { assignmentData.success && (assignmentData.A).map(a=>{ return <Assignment key={a._id}  Slug={a.slug?a.slug:""}  assignmentName={a.assignmentName} createdAt={a.postedOn} description={a.description} dueDate={a.dueDate} postedBy={a.postedBy} tags={a.tags} />  
        })
        }
    </>
  );
};

export default Slug;

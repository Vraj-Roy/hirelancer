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
       
        let res = await fetch(`${process.env.URL_PATH}` + "api/fullProfile/getFullProfileData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: Slug }),
    });
    let response = await res.json(); 
    console.log(response  ) 
    setLoader(false)
    setUserData(response)
  };
    const fetchUserAssignments = async () => { 
       
        let res = await fetch(`${process.env.URL_PATH}` + "api/fullProfile/getAllAssignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: Slug }),
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
      <div className="overflow-hiden rounded-full mx-auto w-28 h-28 my-8">
        <img src={userData.U.profile_pic+".png"} className="w-28 h-28 rounded-full " alt="" />
      </div>
        <div className="flex justify-center items-start  my-5 gap-x-5">
          <div className="border-2 border-orange-500   px-2 md:px-10  text-xl py-2 rounded-md w-full  md:w-[30%] h-12 ">Username</div>
          <div className="  bg-orange-500   text-white  px-2 md:px-10      text-xl py-2 rounded-md w-full md:w-[30%] mih-h-12 ">{userData.U.username}</div>
        </div>
         

        <div className="flex justify-center items-center my-5 gap-x-5 ">
          <div className="border-2 border-orange-500   px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">Role</div>
          <div className="  bg-orange-500   text-white  px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">{userData.U.role==""?'Not Provided':userData.U.role}</div>
        </div>
         
        <div className="flex justify-center items-center my-5 gap-x-5">
          <div className="border-2 border-orange-500   px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">Email</div>
          <div className="  bg-orange-500   text-white  px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">{userData.U.email==""?'Not Provided':userData.U.email }</div>
        </div>
         
      
        <div className="flex justify-center items-center my-5 gap-x-5">
          <div className="border-2 border-orange-500   px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">about</div>
          <div className="  bg-orange-500   text-white  px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] min-h-12 ">{userData.U.about==""?"Not Provided":userData.U.about}</div>
        </div>
         
      
        <div className="flex justify-center items-center my-5 gap-x-5">
          <div className="border-2 border-orange-500   px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">First Name</div>
          <div className="  bg-orange-500   text-white  px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">{userData.U.firstName==""?'Not Provided':userData.U.firstName  }</div>
        </div>
         
      
        <div className="flex justify-center items-center my-5 gap-x-5">
          <div className="border-2 border-orange-500   px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">Last Name</div>
          <div className="  bg-orange-500   text-white  px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">{userData.U.lastName==""?'Not Provided':userData.U.lastName   }</div>
        </div>
         
      
        <div className="flex justify-center items-center my-5 gap-x-5">
          <div className="border-2 border-orange-500   px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] h-12 ">Phone</div>
          <div className="  bg-orange-500   text-white  px-2 md:px-10  text-xl py-2 rounded-md w-full md:w-[30%] min-h-12 ">{userData.U.phone==""?"Not Provided":userData.U.phones  }</div>
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

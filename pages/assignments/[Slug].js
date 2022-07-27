import { useRouter } from "next/router";
import { useEffect, useState } from "react";        
import { AssignMentLoader } from "../../content loaders/Loader";
import Assignment from "../../components/Assignment";

const Slug = () => {
    const router = useRouter();
    const { Slug } = router.query; 
    const [assignment,setAssignment]=useState(null);
    const [loader,setLoader]=useState(true); 
    const fetchPost = async () => { 
    let res = await fetch(`${process.env.URL_PATH}/api/getSpecicPost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({slug:Slug}),
    });
    let response = await res.json();
    setLoader(false)
    setAssignment(response)
    console.log(response)
  };
  if (Slug && !assignment) {
    fetchPost();
  }

  return (
    <>
     { loader && <AssignMentLoader  className= " m-5 p-5 md:mx-auto w-full  md:w-[60vw] md:p-10 border-4 rounded-xl"/>}
        
        {assignment && <Assignment  Slug={assignment.slug?assignment.slug:""}  assignmentName={assignment.assignmentName} createdAt={assignment.postedOn} description={assignment.description} dueDate={assignment.dueDate} dueTime={assignment.dueTime} postedBy={assignment.postedBy} tags={assignment.tags} /> }
    </>
  )
  }
export default Slug;

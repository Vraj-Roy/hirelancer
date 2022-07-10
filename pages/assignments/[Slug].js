import { useRouter } from "next/router";
import { useEffect, useState } from "react";        
import { AssignMentLoader } from "../../content loaders/Loader";
import Assignment from "../../components/assignment";

const Slug = () => {
    const router = useRouter();
    const { Slug } = router.query;
    const [assignment,setAssignment]=useState(null);
    const [loader,setLoader]=useState(true); 
    const fetchPost = async () => { 
    let res = await fetch("http://localhost:3000/api/getSpecicPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({slug:Slug}),
    });
    let response = await res.json();
    setLoader(false)
    setAssignment(response)
  };
  if (Slug) {
    fetchPost();
  }

  return (
    <>
     { loader && <AssignMentLoader B V className= " m-5 p-5 md:mx-auto w-full  md:w-[60vw] md:p-10 border-4 rounded-xl"/>}
        
        {assignment && <Assignment  Slug={assignment.slug?assignment.slug:""}  assignmentName={assignment.assignmentName} createdAt={assignment.postedOn} description={assignment.description} dueDate={assignment.dueDate} postedBy={assignment.postedBy} tags={assignment.tags} /> }
    </>
  )
  }
export default Slug;

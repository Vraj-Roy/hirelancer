import Assignment from "../components/assignment";
import { useEffect, useState } from 'react';
import { AssignMentLoader } from "../content loaders/Loader";
const Assignments=()=>{
    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true);    
    useEffect(() => {
       const getAllAssignments=async()=>{
            let res = await fetch('http://localhost:3000/api/getAssignments',{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            let response=await res.json();
            setLoader(false)
            setData(response)
            console.log(response)
       }
       getAllAssignments();
    }, [])
     
    return(
         <>
          { loader && [1,2,3].map(l=> <AssignMentLoader key={l}  className= " m-5 p-5 md:mx-auto w-full  md:w-[60vw] md:p-10 border-4 rounded-xl"/>)}
         {data &&  data.map((d)=>{ return (
             <Assignment  key={d._id} Slug={d.slug?d.slug:""}  assignmentName={d.assignmentName} createdAt={d.postedOn} description={d.description} dueDate={d.dueDate} postedBy={d.postedBy} tags={d.tags} /> 
         )
         })

         }
         </>
    )
}
export default Assignments;
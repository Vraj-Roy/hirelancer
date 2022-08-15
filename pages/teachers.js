import Freelancer from '../components/Freelancer';
import {FreelancerLoader} from '../content loaders/Loader'; 
import { useEffect, useState } from 'react';
import Router, { useRouter } from "next/router";
const Freelancers=()=>{ 
    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
       const getAllAssignments=async()=>{
            let res = await fetch(`${process.env.URL_PATH}/api/getFreelancers`,{
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
           <div className="w-fit gap-x-2 flex items-center flex-nowrap mx-auto mt-10 ">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          className=" border-2 rounded-md h-12 border-orange-500 outline-orange-600 px-3 w-[85vw] md:max-w-[55vw] text-lg"
        />{" "}
        <button
          onClick={() => Router.push(`/teachers/tags/${searchQuery}`)}
          className="min-w-fit rounded-md   w-[10vw] md:w-[5vw] border-2 border-orange-500  h-12"
        >
          search
        </button>
      </div>
         { loader && [1,2,3].map(l=> <FreelancerLoader key={l}  className= "mx-auto w-full md:w-[60vw] lg:w-[40vw] md:p-10 border-4 rounded-xl mt-5"/>)}
         {data &&  data.slice(0).reverse().map((d)=>{ return (
             <Freelancer  key={d._id} youDo={d.youDo} username={d.username} description={d.description}  skills={d.skills} country={d.country} /> 
         )  
         })

         }
        </>
    )
}
export default Freelancers;
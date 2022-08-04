import Freelancer from '../components/Freelancer';
import {FreelancerLoader} from '../content loaders/Loader'; 
import { useEffect, useState } from 'react';
const Freelancers=()=>{ 
    const [data,setData]=useState([])
    const [loader,setLoader]=useState(true);
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
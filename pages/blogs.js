import Link from 'next/link'
import {motion} from 'framer-motion'
import Blog from '../components/Blog'
import { useEffect, useState } from 'react';
const Blogs=()=>{
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
      const fetchBlogs=async()=>{
          let res=await fetch('http://localhost:3000/api/blogs/getAllBlogs',{
            method:"GET",
            headers: {
              "Content-Type": "application/json",
            },  
          })
          let response=await res.json()
          setBlogs(response)
          console.log(response)
      }
      fetchBlogs()
  }, [])
  
    return(
        <>
         
        <div className="flex flex-wrap gap-5 mt-10 m-auto justify-center items-center fit-content ">
        {blogs && blogs.map((b)=>{ return <Blog key={b.slug} slug={b.slug} title={b.title} desc={b.desc} img={b.img} /> })}
        <div className="w-96 h-0"></div>
        <div className="w-96 h-0"></div>
        <div className="w-96 h-0"></div>
          
        </div> 
        </>
    )
}

export default Blogs;
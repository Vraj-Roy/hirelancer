import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@mui/material"; 
import {useRouter} from 'next/router'
import Blog from '../components/Blog'
import SiteReviews from '../components/SiteReviews'
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
      const fetchBlogs=async()=>{
          let res=await fetch(`${process.env.URL_PATH}`+'/api/blogs/getAllBlogs',{
            method:"GET",
            headers: {
              "Content-Type": "application/json",
            },  
          })
          let response=await res.json()
          setBlogs(response) 
      }
      fetchBlogs()
  }, [])
  return (
 <> 
 {/* Post Job */} 
 <div style={{backgroundColor:"#ffd700"}}>

 <div className=" flex flex-wrap md:flex-nowrap justify-around   2xl:w-[1500px] mx-auto">
 
 
  <div className="md:w-[50%]">
  {/* <div className=" text-2xl md:text-5xl mx-10 md:ml-40 mr-20 mx-auto mt-10 md:mt-20">Authentic Assignment Help INDIA </div> */}
  <div className="   mx-10 md:ml-40 md:mr-20 mt-10 font-bold text-4xl text-blue-700">Are you looking for urgent homework help online? </div>
  <div className="   mx-10 md:ml-40 md:mr-20 mt-10 font-bold  text-3xl  ">Or want homework writing help. </div> 
  <div className=" text-lg md:text-2xl mx-10 md:ml-40 md:mr-20 mt-10">Get instant homework help with complex programming, mathematics, or engineering assignments help. </div> 
  <div className=" text-lg md:text-2xl mx-10 md:ml-40 md:mr-20 mt-10"> ITassignmentHelp is the Best choice for students to get assignments done online at an affordable price. </div> 
  </div>
 
 
 <div className=" w-auto  md:w-[800px] mx-3   h-fit  pt-5 rounded-lg">
    
    {/* <h2 className="text-3xl text-center text-orange- mb-4">Signup</h2> */}
    <div className="md:mx-12 px-2 bg-white 600 rounded-xl   ">
      <div className="font-bold text-4xl text-center py-5 text-blue-600">Get IT Assignment Help Now!</div>
    <div className="mx-auto flex flex-wrap font-bold text-3xl">
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
         <div className="mx-auto flex flex-wrap font-bold text-3xl">
              <div className="px-2 md:w-1/2">
                <div className="relative mb-4">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Your Assignment Title
                  </label>
                  <input
                    type="text"
                    id="assignmentName"
                    name="assignmentName"
                    className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="px-2 md:w-1/2">
                <div className="relative mb-4">
                  <label
                    htmlFor="date"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    placeholder="Enter Your 10 digit phone number"
                    id="date"
                    name="date"
                    className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
             
            </div>
              
        <div className="px-2 w-full">
          <div className="relative mb-4">
            <label
              htmlFor="requirements"
              className="leading-7 text-sm text-black font-semibold"
            >
              Description
            </label>
            <textarea
              rows="10"
              cols="30"
              id="requirements"
              name="requirements"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
           
           
           
          </div>
        </div>  
        <div className="px-2 w-full">
          <div className="relative mb-4">
            <label
              htmlFor="add_file"
              className="leading-7 text-sm text-black font-semibold"
            >
              Add File
            </label>

        <input type="file" className=" w-full  bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 name="" id="add_file" />
           
           
           
          </div>
        </div>
       
      <button
      
      onClick={null}
        type="submit"
        className="w-full py-2 mb-5  rounded-md bg-orange-600 text-gray-100  focus:outline-none"
      >
       Post a Job
      </button>
       
  
    </div>
  </div>
  </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffd700" fillOpacity="1" d="M0,160L30,181.3C60,203,120,245,180,234.7C240,224,300,160,360,138.7C420,117,480,139,540,170.7C600,203,660,245,720,266.7C780,288,840,288,900,261.3C960,235,1020,181,1080,144C1140,107,1200,85,1260,85.3C1320,85,1380,107,1410,117.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
</svg>
    {/* Conatiners containg vaiours fields */}
      <div className="container     mx-auto">
        <div className="flex flex-wrap m-auto justify-center items-center fit-content ">
          <Link href={"/"}>
            <motion.div
              initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              className="
              py-10
              m-5
              cursor-pointer
              w-64 
              h-80  
              rounded-lg
              flex flex-col
              justify-around
              items-center
              bg-white   
              "
            >
              <img
                className="h-1/2  sm:h-full sm:md:w-1/2 object-cover"
                src="https://static.vecteezy.com/system/resources/previews/002/363/076/original/computer-icon-free-vector.jpg"
                alt="image"
              />
              <div
                className="
                flex
                flex flex-col
                items-baseline
                justify-around 
                h-full
                items-baseline 
                md:w-1/2
                "
              >
                <div className="flex flex-col justify-start items-baseline">
                  <h1 className="text-md font-normal mb-0 text-black font-sans">
                    Programming and development
                  </h1>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h1 className="text-gray-500 text-sm ">
                    {" "}
                    105,005 freelancers
                  </h1>
                </div>
              </div>
            </motion.div>
          </Link>
          <Link href={"/"}>
            <motion.div
              initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              className="
             py-10
             m-5
             cursor-pointer
             w-64 
             h-80  
             rounded-lg
             flex flex-col
             justify-around
             items-center
             bg-white   
             "
            >
              <img
                className="h-1/2  sm:h-full sm:md:w-1/2 object-cover"
                src="https://static.vecteezy.com/system/resources/previews/002/363/076/original/computer-icon-free-vector.jpg"
                alt="image"
              />
              <div
                className="
                flex
                flex flex-col
                items-baseline
                justify-around 
                h-full
                items-baseline 
                md:w-1/2
                "
              >
                <div className="flex flex-col justify-start items-baseline">
                  <h1 className="text-md font-normal mb-0 text-black font-sans">
                    Desgin and art
                  </h1>
                </div>

                <div className=" flex justify-between items-center">
                  <h1 className="text-gray-500 text-sm">
                    {" "}
                    105,005 freelancers
                  </h1>
                </div>
              </div>
            </motion.div>
          </Link>
          <Link href={"/"}>
            <motion.div
              initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              className="
             py-10
             m-5
             cursor-pointer
             w-64 
             h-80  
             rounded-lg
             flex flex-col
             justify-around
             items-center
             bg-white   
             "
            >
              <img
                className="h-1/2  sm:h-full sm:md:w-1/2 object-cover"
                src="https://static.vecteezy.com/system/resources/previews/002/363/076/original/computer-icon-free-vector.jpg"
                alt="image"
              />
              <div
                className="
                flex
                flex flex-col
                items-baseline
                justify-around 
                h-full
                items-baseline 
                md:w-1/2
                "
              >
                <div className="flex flex-col justify-start items-baseline">
                  <h1 className="text-md font-normal mb-0 text-black font-sans">
                    Writing and translation
                  </h1>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h1 className="text-gray-500 text-sm">
                    {" "}
                    105,005 freelancers
                  </h1>
                </div>
              </div>
            </motion.div>
          </Link>
          <Link href={"/  "}>
            <motion.div
              initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              className="
             py-10
             m-5
             cursor-pointer
             w-64 
             h-80  
             rounded-lg
             flex flex-col
             justify-around
             items-center
             bg-white   
             "
            >
              <img
                className="h-1/2   sm:h-full sm:md:w-1/2 object-cover"
                src="https://static.vecteezy.com/system/resources/previews/002/363/076/original/computer-icon-free-vector.jpg"
                alt="image"
              />
              <div
                className="
                flex
                flex flex-col
                items-baseline
                justify-around 
                h-full
                items-baseline 
                md:w-1/2
                "
              >
                <div className="flex flex-col justify-start items-baseline">
                  <h1 className=" text-black font-sans">Sales and Marketing</h1>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h1 className="text-gray-500 text-sm">
                    {" "}
                    105,005 freelancers
                  </h1>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
        <div className="flex space-x-2 mt-5 justify-center">
        <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.05 },
            }}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            See More
          </motion.button>
        </div>
      </div>
            
      {/* Blogs Section  */}
      <div className="mx-auto  flex py-4 border-gray-500  justify-center text-4xl font-semibold border-y-2 mt-10 " >Blogs</div>
      {/* Blogs Cards */} 
        
      <div className="flex flex-wrap gap-5 mt-10 m-auto justify-center items-center fit-content 2xl:w-[1500px] mx-auto ">
        {blogs && blogs.map((b)=>{ return <Blog key={b.slug+Math.random()} slug={b.slug} title={b.title} desc={b.desc} img={b.img} /> })}
        {[1,,2,3,4,5,6,7,8,9,10].map((bDummy)=>{return <div key={bDummy} className="w-96 h-0"></div>})}
          
      </div>
      <div className="mx-auto  flex py-4 border-gray-500  justify-center text-4xl font-semibold border-y-2 mt-10 " >Reviews</div>
      {/* Blogs Cards */} 
        
      <div className="flex flex-wrap gap-10 mt-10 m-auto justify-center items-center fit-content 2xl:w-[1500px]">
      <SiteReviews key={Math.random()}  title={"title"} desc={"b.desc"} img={"/b.img"} /> 
      <SiteReviews key={Math.random()}  title={"title"} desc={"b.desc"} img={"/b.img"} /> 
      <SiteReviews key={Math.random()}  title={"title"} desc={"b.desc"} img={"/b.img"} /> 
      <SiteReviews key={Math.random()}  title={"title"} desc={"b.desc"} img={"/b.img"} /> 
      <SiteReviews key={Math.random()}  title={"title"} desc={"b.desc"} img={"/b.img"} />  
      
        {[1,,2,3,4,5,6,7,8,9,10].map((bDummy)=>{return <div key={bDummy} className="w-96 h-0"></div>})}
          
      </div>
    </>
  );
}

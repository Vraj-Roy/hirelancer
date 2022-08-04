import  { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import  Image  from 'next/image';

const Slug = () => {
  const router = useRouter();
  const { Slug } = router.query;
  const [loader, setLoader] = useState(true);
const [blog, setBlog] = useState(false)
  const fetchPost = async () => {
    setLoader(true);
    let res = await fetch(
      `${process.env.URL_PATH}/api/blogs/getSpecificBlog`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug: Slug }),
      }
    );
    let response = await res.json();
    console.log(response);
    setBlog(response)
    setLoader(false); 
  };

  useEffect(() => {
    fetchPost(); 
  }, [Slug]);

  if(blog){
    return (
    <>
      <div className="flex justify-around  flex-wrap"> 
<div className=" md:w-[50vw] mt-5">

      <div className="mx-auto text-center font-bold text-4xl">{blog.title}</div>
      {blog.img && <div className=" my-5   mx-auto w-fit px-5 py-2"><Image width={600} height={400}    objectFit="contain"  alt={blog.title} src={blog.img}/></div>}
      <div className="mx-auto   text-justify  w-full p-5 font-semibold text-xl">{blog.description}</div>
    <div className=" w-auto   mx-3   h-fit  pt-5 rounded-lg">
</div>
</div>
    
    {/* <h2 className="text-3xl text-center text-orange- mb-4">Signup</h2> */}
   <div className="border-t-2 border-orange-500 md:border-none md:w-[40vw] "> 
    <div className="  px-2 md:fixed bg-white 600 rounded-xl   ">
    <div className="mx-auto flex flex-wrap font-bold text-3xl">
          <div className="px-2 md:">
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
          <div className="px-2 md:">
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
              <div className="px-2 md:">
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
              <div className="px-2 md:">
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
 
    </>
  );
}else{
  return <>
  <div className="flex fixed justify-center items-center w-[100vw] h-[80vh]"><div className="text-3xl font-bold">Sorry, Blog Not Found</div></div>
  </>
}
};
export default Slug;

import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddBlog from '../../components/AddBlog';
const BlogAdd = () => { 
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [addBlog, setAddBlog] = useState(false)
  const onChange=(e)=>{
    if(e.target.name==="name"){
      setName(e.target.value)
    }else if(e.target.name==="password"){
      setPassword(e.target.value)
    } 
}
const onsubmit=async(e)=>{
    e.preventDefault();
    let res = await fetch(`${process.env.URL_PATH}`+'/api/blogs/auth',{
      method: 'POST', 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,password}),
    })  
    let response=await res.json();
    if(response.success){
      setAddBlog(true)
      toast.success("Login Succesfull");
    }else{
      toast.error("Wrong Credentials");
  }
}
 return (<>
   <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  {!addBlog && <div>
    <div className='md:w-fit my-3 px-5 mx-auto mt-10 ' ><input onChange={onChange} name="name" value={name}  placeholder='Enter your Name' className='text-black border-2 w-full md:w-[800px] mx-auto px-2 h-10' type="text" /></div>
    <div className='md:w-fit my-3 px-5  mx-auto  '><input onChange={onChange} name="password" value={password}  placeholder='Enter your Password' className='text-black border-2 w-full md:w-[800px] mx-auto h-10 px-2' type="password" /></div> 
    <div className='w-fit my-3  mx-auto  '><button onClick={onsubmit} className="bg-blue-500 text-white mx-auto px-4 py-2 rounded w-fit" >Login</button></div>
  </div>}
 {addBlog && <AddBlog/> }
  </>
  )
}

export default BlogAdd
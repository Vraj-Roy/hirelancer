 
import React, { useEffect } from 'react'  
import { useState } from "react"; 
import { useRouter } from 'next/router';  
import {useSession,signIn,signOut} from 'next-auth/react'

const Signup = ({resetKey}) => { 
  const [userInputs, setUserInputs] = useState({username:"",firstName:"",lastName:"",date:"",assignmentName:"",description:""});  
  const [tags, setTags] = useState([])
  const [loading,setLoading]=useState(false)
  const {data:session} = useSession()  
  const router=useRouter();
  
  useEffect(() => {
     const getData=async()=>{
      const tokenData= localStorage.getItem('token')
      if(tokenData){

      let res=await fetch(`${process.evv.URL_PATH}api/getUserData`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token:tokenData}),
      })
      let response=await res.json(); 
      if(response.success){  
        setUserInputs({username:response.username,firstName:"",lastName:"",date:"",assignmentName:"",description:""}) 
      }else{ 
        console.log("failed") 
        console.log(response)
      }
      
    }
     }
     getData();
  }, [])
  
  
  const onChange= (e)=>{
    setUserInputs({...userInputs,[e.target.name]:e.target.value})
  }
  const onSubmit = async(e)=>{
    e.preventDefault(); 
    const data= {...userInputs , token:localStorage.getItem('token'),tags}
    
    let res=await fetch(`${process.evv.URL_PATH}api/uploadAssignment`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let response=await res.json(); 
    if(response.success){  
      router.push('/assignments')
    }else{ 
      console.log("failed") 
      console.log(response)
    }
    
  }   
  
  function handleKeyDown(e){
    if(e.keyCode==8 )
    { if(e.target.value=="" ){
      let popped=tags.pop();
      setTags(tags.filter((el, i) => i !== popped))
    }else{
      return
    }
  } 
    // If user did not press enter key, return
    if(e.key !== 'Enter') return
    // Get the value of the input
    const value = e.target.value
    // If the value is empty, return
    if(!value.trim()) return
    // Add the value to the tags array
    setTags([...tags, value])
    // Clear the input
    e.target.value = ' '
}
function removeTag(index){
  setTags(tags.filter((el, i) => i !== index))
}
  return (
    <>
       <div className="text-center mx-auto font-semibold text-xl bg-orange-500 text-gray-100 p-5 my-5"> 
        Fill The Below form to complete your profile
       </div>
    <div  >
      <div className={`main-bg w-full   overflow-hidden flex flex-wrap md:flex-nowrap  items-center justify-center `}>
  <div className="w-full  md:w-[60vw]   rounded-lg">
    
    {/* <h2 className="text-3xl text-center text-orange- mb-4">Signup</h2> */}
    <div className="md:px-12 pb pb-10">
    <div className="mx-auto flex flex-wrap md:flex-nowrap font-bold text-3xl">
    
    <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="username" className="leading-7 text-sm text-gray-600">
              Username
              </label>
              <input  
                value={userInputs.username} 
                readOnly 
                type="username"
                id="username"
                name="username"
                className="w-full text-sm bg-gray-100 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
  {/* <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
              </label>
              <input 
                type="email "
                id="email"
                name="email"
                value={localStorage.getItem('token')}
                readOnly
                className="w-full text-sm bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div> */}
  
          </div>
          <div className="flex flex-wrap md:flex-nowrap font-bold "> 

<div className="px-2 w-full">
    <div className="relative mb-4">
      <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">
      First Name
      </label>
      <input 
      value={userInputs.firstName}
                onChange={onChange}
        type="firstName"
        id="firstName"
        name="firstName"
        className="w-full text-sm bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
    </div>
  </div>
<div className="px-2 w-full">
    <div className="relative mb-4">
      <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">
      Last Name
      </label>
      <input 
      value={userInputs.lastName}
                onChange={onChange}
        type="lastName"
        id="lastName"
        name="lastName"
        className="w-full text-sm bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  </div>
        </div>
            <div className="mx-auto flex flex-wrap md:flex-nowrap font-bold text-3xl">
                
                <div className="px-2 md:w-1/2">
                    <div className="relative mb-4">
                    <label
                        htmlFor="phone"
                        className="leading-7 text-sm text-gray-600"
                    >
                        Your Assignment Title
                    </label>
                    <input
                    value={userInputs.assignmentName}
                onChange={onChange}
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
                    value={userInputs.date}
                onChange={onChange}
                        type="date"
                        placeholder="Enter Due Date for your assignment"
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
                htmlFor="description"
                className="leading-7 text-sm text-black font-semibold"
                >
                Description
                </label>
                <textarea
                rows="10"
                cols="30"
                id="description"
                name="description"
                value={userInputs.description}
                onChange={onChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
            
            
            </div>
            <h2>Enter Some Tags ...</h2>
            <div className="tags-input-container border-2 border-black p-2 rounded-sm min-w-[80vw, 600px] mt-5 flee items-center flex-wrap  ">
            {  tags.map((tag, index) => ( <div key={index}  className=" text-lg mx-1 my-1 tag-item bg-gray-300 inline-block py-1 px-2 rounded-xl  ml-2">
                <span className="text">{tag}</span>
                <span className="close ml-2 text-red-800  cursor-pointer" onClick={() => removeTag(index)}>&times;</span>
            </div>
            )) }
            <input type="text" onKeyDown={handleKeyDown} className="flex-grow ml-2 outline-none p-1 " placeholder="Type somthing" />
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
      
      onClick={onSubmit}
        type="submit"
        className="w-full py-2 mb-5  rounded-md bg-orange-600 text-gray-100  focus:outline-none"
      >
       Submit
      </button>
 
 
      <div className='h-10 w-10 m-auto mt-2'>
       {loading && <img src="/loading.gif"/> }
      </div>
  
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default Signup
 
import React from 'react'
import Image from 'next/Image'
import Link from "next/dist/client/link";
import { useState } from "react"; 
import { useRouter } from 'next/router';  
import {useSession,signIn,signOut} from 'next-auth/react'

const Signup = ({resetKey}) => { 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading,setLoading]=useState(false)
  const {data:session} = useSession()  
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
              <label htmlFor="majors" className="leading-7 text-sm text-gray-600">
              Username
              </label>
              <input 
                type="majors"
                id="majors"
                name="majors"
                className="w-full text-sm bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
     { session && <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="majors" className="leading-7 text-sm text-gray-600">
              Email
              </label>
              <input 
                type="email "
                id="majors"
                name="majors"
                value={session.user.email}
                readOnly
                className="w-full text-sm bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
  }
          </div>
          <div className="flex flex-wrap md:flex-nowrap font-bold "> 

<div className="px-2 w-full">
    <div className="relative mb-4">
      <label htmlFor="majors" className="leading-7 text-sm text-gray-600">
      First Name
      </label>
      <input 
        type="majors"
        id="majors"
        name="majors"
        className="w-full text-sm bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
    </div>
  </div>
<div className="px-2 w-full">
    <div className="relative mb-4">
      <label htmlFor="majors" className="leading-7 text-sm text-gray-600">
      Last Name
      </label>
      <input 
        type="majors"
        id="majors"
        name="majors"
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
 
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
       <div className="text-center  mx-auto font-semibold text-xl bg-orange-500 text-gray-100 p-5 my-5"> 
        Fill The Below form to complete your profile
       </div>
    <div  >
      <div className={`main-bg w-full   overflow-hidden flex  items-center justify-center `}>
  <div className="w-full  md:w-[60vw]   rounded-lg">
   
    {/* <h2 className="text-3xl text-center text-orange- mb-4">Signup</h2> */}
    <div className="md:px-12 pb-10">
     
    <div className="mx-auto font-bold text-3xl">
        <div className="mx-auto flex  font-bold text-3xl">
        
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

        <div className="flex"> 

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

       


        <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="majors" className="leading-7 text-sm text-gray-600">
              Add a title to tell the world what you do
              </label>
              <input
                placeholder='Example: Full Stack Developer | Web  Mobile'
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
              Add Education
              </label>
              <input
                placeholder='Example: B Tech, M Tech'
                type="majors"
                id="majors"
                name="majors"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        <div className="px-2 w-full"> 
            <div className="relative mb-4">
              <label htmlFor="majors" className="leading-7 text-sm text-gray-600">
              Your English Proficiency
              </label>
              <select  className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <option>Basic</option>
                <option>Conversational</option>
                <option>Fluent</option>
                <option>Native</option>
              </select>
            </div>
          </div>
  
          <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="majors" className="leading-7 text-sm text-gray-600">
              Add Skills
              </label>
              <input
                placeholder='Example: React Javascript'
                type="majors"
                id="majors"
                name="majors"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>



            </div>
              
      
        
         
         <button
      
      onClick={null}
        type="submit"
        className="w-full py-2 mb-5  rounded-md bg-orange-600 text-gray-100  focus:outline-none"
      >
       Submit
      </button>
 
 
       
  
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default Signup
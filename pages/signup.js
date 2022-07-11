import { getToken } from "next-auth/jwt"
import React, { useEffect } from 'react' 
import Link from "next/dist/client/link";
import { useState } from "react"; 
import { Router, useRouter } from 'next/router';  
import {useSession,signIn,signOut} from 'next-auth/react'

const Signup = ({resetkey}) => {  
  const {data:session} = useSession()    
  const router= useRouter()    
  const [userData,setUserData] = useState({email:"",password:"",username:""});  
  const onChange=async(e)=>{
      setUserData({...userData,[e.target.name]:e.target.value})
      
    }
  const onsubmit = async() =>{ 
    let res=await fetch(`${process.env.URL_PATH}api/signup`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    let response=await res.json(); 
    if(response.success){  
      localStorage.setItem('token',response.token);   
      resetkey();
      router.push('/signup/options')
    }else{ 
      console.log(response.message) 
    }
    
  }


 

  return(   <>
       
        <div  >
          <div className={`main-bg w-full h-[90vh] overflow-hidden flex  items-center justify-center `}>
      <div className="w-full md:w-1/3   rounded-lg">
        <div className="flex font-bold justify-center mt-6">
          <img
            className="h-16 w-auto mb-5"
            src="/freelancer.png"
            alt="freelancing"
          />
        </div>
 
        <div className="px-12 pb-10">
       
        <div className="w-full mb-2">
                  <div className="flex items-center">
                    <i className=" fill-current text-gray-400 text-xs z-10 fas fa-user" />
                    <input
                      onChange={onChange}
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={userData.username}
                  className={'w-full border rounded px-4 py-2   focus:outline-orange-500 '}
                    />
                  </div>
                </div>

        <div className="w-full mb-2">
                  <div className="flex items-center">
                    <i className=" fill-current text-gray-400 text-xs z-10 fas fa-user" />
                    <input
                      onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={userData.email}
                  className={'w-full border rounded px-4 py-2   focus:outline-orange-500 '}
                    />
                  </div>
                </div>
        <div className="w-full mb-2">
                  <div className="flex items-center">
                    <i className=" fill-current text-gray-400 text-xs z-10 fas fa-lock" />
                    <input
                      onChange={onChange}
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={userData.password}
                      className={'w-full border rounded px-4 py-2   focus:outline-orange-50 '}      
                    />
                  </div>
                </div>
        
                 
                
          <Link href="/forgot" >
            <a className="text-xs text-gray-500 float-right mb-4">
            Forgot Password?
            </a>
          </Link>
    
          <button
          
          onClick={onsubmit}
            type="submit"
            className="w-full py-2 mb-5  rounded-md bg-orange-600 text-gray-100  focus:outline-none"
          >
           Sign Up  
          </button>
          <button
            // onClick={()=>signIn('google')} 
            onClick={()=>signIn('google',{callbackUrl: `${process.evv.URL_PATH}signup/options`})}
            type="submit"
            className="w-full py-2 mb-5 flex align-middle text-center justify-center rounded-md border-2 hover:bg-gray-100 bg-white text-black  focus:outline-none"
          >
             <img style={{width:"20px",height:"20px"}} className="mx-2 mt-1 " src="/google_svg.svg" alt="" />
           
             Continue with Google {''}
               
            
          </button>
          <button
            type="submit"
            className="w-full py-2 mb-5 flex align-middle text-center justify-center rounded-md bg-white border-2 hover:bg-gray-100 text-black  focus:outline-none"
          >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="24" height="24"
              viewBox="0 0 48 48"
              style={{ fill:"#000000",marginRight:"5px"}}><path fill="#0288d1" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><rect width="4" height="15" x="14" y="19" fill="#fff"></rect><path fill="#fff" d="M16,17L16,17c-1.2,0-2-0.9-2-2c0-1.1,0.8-2,2-2c1.2,0,2,0.9,2,2C18,16.1,17.2,17,16,17z"></path><path fill="#fff" d="M35,24.5c0-3-2.5-5.5-5.5-5.5c-1.9,0-3.5,0.9-4.5,2.3V19h-4v15h4v-8c0-1.7,1.3-3,3-3s3,1.3,3,3v8h4	C35,34,35,24.9,35,24.5z"></path></svg>  
             Continue with Linkedin {''}
               
            
          </button>
         
          
      
        </div>
      </div>
    </div>
    </div>
    
        </>)
 
  
}

export default Signup
import Link from 'next/link'
import { useLayoutEffect,useEffect,useState  } from 'react';
import {useRouter} from 'next/router'
import {signIn,signOut} from 'next-auth/react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSession  } from 'next-auth/react'

const Options = ({resetkey}) =>{
    const router=useRouter();  
    const { data: session } = useSession();
    // useEffect(() => {
    //     if(!localStorage.getItem('token')){
    //         router.push('/login')
    //     }
    // }, [])
    
  useEffect(() => {
    
const send=async()=>{   
   
         
        let res=await fetch(`${process.env.URL_PATH}/api/signup`,{
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({type:"google"}),
        })
        let response=await res.json();  
        if(response.success){  
            // signOut();
          resetkey();
          if(response.successcode==1){
            localStorage.setItem('token',response.token);  
            router.push('/')
          }else{
            localStorage.setItem('token',response.token);  
          } 
          
        }else{  
          console.log("failed") 
          toast.error("You have another account with the email");
          setTimeout(() => {
            router.push('/signup')  
          }, 1500);
        }
        
      }  
     
    send();
      }, [])

        return(<>
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
        <div className="container main w-full h-[80vh] flex justify-center items-center">
            <Link href="/signup/teacher"><div className="bg-orange-500 hover:bg-orange-600 cursor-pointer p-10 text-lg font-semibold mx-5 rounded text-white">Sign up as teacher</div></Link>
            <Link href="/signup/student"><div className="bg-orange-500 hover:bg-orange-600 cursor-pointer p-10 text-lg font-semibold mx-5 rounded text-white">Sign up as Student</div></Link>
        </div>
        </>
        )
    
}
export default Options;
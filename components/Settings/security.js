import Link from 'next/link'
import { useState } from 'react'; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Security = ({user}) => {
    const [password,setPassword]=useState({old:"",new:"",repeat:""})
    const savePasswordChanges=async()=>{
        if(password.new!==password.repeat){
            toast.error("Your New and Repeat Password doesn't  match");
            return
        }
        const token=localStorage.getItem('token')  
        let res = await fetch(`${process.env.URL_PATH}`+'/api/settings/passwordReset',{ 
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({token:token,user,password }),
          })  
          let response=await res.json() 
          if(response.success){
            toast.success("Your Password is Changed Succesfully");
        }else{
            
            toast.error("Wrong Password");
          }
    }
    const onChange=(e)=>{
        setPassword({...password,[e.target.name]:e.target.value})
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
  <div className="font-bold  p-4  text-gray-700 text-2xl py-2 border-b-2 border-orange-500 ">Reset Password</div>
    <div className="flex flex-col md:flex-row     my-5 gap-x-5  border-b-2 pb-6">
                                  <div className=" font-bold  p-4  text-gray-700 text-sm md:text-md py-2 rounded-md md:w-[30%]     h-12 ">Enter Your Old Password</div>
                                  <input value={password.old} name="old" onChange={onChange}  type="text" id="username"  className="    border-2   py-2 px-3      text-md  rounded-lg    md:w-[40%]  "/>
                            </div>
    <div className="flex flex-col md:flex-row     my-5 gap-x-5  border-b-2 pb-6">
                                  <div className=" font-bold  p-4  text-gray-700 text-sm tmd:ext-md py-2 rounded-md md:w-[30%]     h-12 ">Enter Your New Password</div>
                                  <input  value={password.new} name="new" onChange={onChange} type="text" id="username"  className="    border-2   py-2 px-3      text-md  rounded-lg    md:w-[40%]  "/>
                            </div>
    <div className="flex flex-col md:flex-row     my-5 gap-x-5  border-b-2 pb-6">
                                  <div className=" font-bold  p-4  text-gray-700 text-sm md:text-md py-2 rounded-md md:w-[30%]     h-12 ">Repeat Your New Password</div>
                                  <input  value={password.repeat} name="repeat" onChange={onChange} type="text" id="username"  className="    border-2   py-2 px-3      text-md  rounded-lg    md:w-[40%]  "/>
                            </div>
                            
                <div className="container h-fit mx-auto w-11/12 xl:w-full">
                    <div className={`w-full py-4 sm:px-0 bg-white  border-gray-500 flex justify-end`}>
                    <Link href={`/profile/${user.username}`}><button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 -700 rounded text-orange-600 dark:text-orange-600 px-6 py-2 text-xs mr-4" >Cancel</button></Link>
                        <button onClick={savePasswordChanges} className="bg-orange-700 focus:outline-none transition duration-150 ease-in-out hover:bg-orange-600 rounded text-white px-8 py-2 text-sm" type="submit">
                            Save
                        </button>
                    </div>
                </div>
  </>
  ) 
}

export default Security
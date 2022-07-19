 
import { useEffect,useState } from 'react';
import Link from 'next/link';  
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = ({resetkey}) => {
    const [user,setUser]=useState({about: "", country: "", email: "", firstName: "",  lastName: "", phone: "" , profile_pic: "", username: ""})
 
    useEffect(() => {
        const getUserData=async()=>{
        const token=localStorage.getItem('token')    
        let res = await fetch(`${process.env.URL_PATH}`+'/api/fullProfile/getFullProfileData',{
        method: 'POST', 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token:token,settings:true}),
      })    
        let data=await res.json();   

    
        setUser(data.userData)
    }
        getUserData();
    }, [])
    const onChange = (e)=>{
        e.preventDefault(); 
        setUser({...user,[e.target.name]:e.target.value})
        
    }
    const color="light-theme"
 
    const saveChanges = async(event) => {
        event.preventDefault();
        const token=localStorage.getItem('token')    
        let res = await fetch(`${process.env.URL_PATH}`+'/api/settings/updateUserProfile',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token:token,user}),
      })    
        let response=await res.json(); 
        if (response.success){ 
            localStorage.setItem('token',(response.token))
            resetkey();
            toast.success("Your settings changes are saved succesfully");
        }else if(!response.success){
            toast.error("Sorry, Username already exists ");
        }
        
         
    };
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
               
            <div className={`  ${color} `}>
                <div className={` mx-auto ${color} rounded`}> 
                    <div className="mx-auto">
                        <div className=" ">
                            <div className="rounded relative">
                                
                                {/* <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" /> */}
                                {/* <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                                    <p className="text-xs text-gray-100">Change Cover Photo</p>
                                    <div className="ml-2 text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                    </div>
                                </div> */}
                                <div className=" rounded-full bg-no-repeat mx-auto ">
                                    <img src="/profile.png  " alt="profile" className="mx-auto mt-5  z-0 h-48 w-48 rounded-full object-cover rounded-full shadow " />
                                    <div className="absolute  opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                                    <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                        <p className="text-xs text-gray-100">Edit Picture</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4  flex flex-col xl:w-2/6 lg:w-1/2  md:mx-auto max-w-[80%] w-full mx-5">
                                <label htmlFor="username"className={`pb-2 text-sm font-bold text-gray-800 ${color}`}>
                                    Username
                                </label>
                                <input value={user.username}  name="username" onChange={onChange}  type="text" id="username" required className="border-gray-300 dark:border-gray-700 px-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange-700 border-2 bg-transparent placeholder-gray-500 text-black "  />
                            </div>
                            <div className="mt-4  flex flex-col xl:w-2/6 lg:w-1/2  md:mx-auto max-w-[80%] w-full mx-5">
                                <label htmlFor="about" className={`pb-2 text-sm font-bold text-gray-800 ${color}`}>
                                    About
                                </label>
                                <textarea id="about" value={user.about} onChange={onChange} name="about" className="bg-transparent w  border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange-700 border-2 resize-none placeholder-gray-500 text-black " placeholder="Let the world know who you are" rows={2}  />
                                <p className="w-full text-right text-xs pt-1 text-black ">Character Limit: 200</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`container mx-auto  ${color} mt-10 rounded px-4`}>
                    <div className="xl:w-full border-b border-gray-300  py-5">
                        <div className="flex   mx-auto  w-fit items-center">
                            <p className={`text-lg  ${color} font-bold`}>Personal Information</p>
                            <div className="ml-2 cursor-pointer text-gray-600 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto pt-4">
                        <div className="container flex flex-wrap gap-10 md:justify-around justify-start  mx-auto">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 w-[80%]">
                                <label htmlFor="FirstName" className={`pb-2 text-sm font-bold ${color}`}>
                                    First Name
                                </label>
                                <input type="text" value={user.firstName} onChange={onChange} id="FirstName" name="firstName" required className="border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-orange-700 border-2 placeholder-gray-500 text-black "  />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 w-[80%]">
                                <label htmlFor="LastName" className={`pb-2 text-sm font-bold ${color}`}>
                                    Last Name
                                </label>
                                <input type="text" id="LastName" value={user.lastName} onChange={onChange} name="lastName" required className="border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-orange-700 border-2 placeholder-gray-500 text-black "  />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 w-[80%]">
                                <label htmlFor="Email"  className={`pb-2 text-sm font-bold ${color}`}>
                                    Email
                                </label>
                                <div className="border-green-400 shadow-sm rounded flex">
                                    <div className="px-4 py-3 ${color} flex items-center border-r border-green-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <rect x={3} y={5} width={18} height={14} rx={2} />
                                            <polyline points="3 7 12 13 21 7" />
                                        </svg>
                                    </div>
                                    <input type="text" id="Email" name="email" value={user.email}  onChange={onChange} className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-black " placeholder="example@gmail.com" />
                                </div>
                                <div className="flex justify-between items-center pt-1 text-green-400">
                                    <p className="text-xs">Email submission success!</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                        <path
                                            className="heroicon-ui"
                                            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                              0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                            stroke="currentColor"
                                            strokeWidth="0.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 w-[80%]">
                                <label htmlFor="phone"  className={`pb-2 text-sm font-bold ${color}`}>
                                    Phone
                                </label>
                                <div className="border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                                    <input type="" id="phone" value={user.phone} onChange={onChange} name="phone" required className="pl-3 py-3 w-full text-sm focus:outline-none border-transparent focus:border-orange-700 border-2 bg-transparent rounded placeholder-gray-500 text-black " placeholder="Enter Your Phone " />
                                    <div className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-black ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 15 12 9 18 15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                             
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 w-[80%]">
                                <label htmlFor="Country"  className={`pb-2 text-sm font-bold ${color}`}>
                                    Country
                                </label>
                                <input type="text" id="Country" value={user.country} onChange={onChange} name="country" required className="bg-transparent border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange-700 border-2 placeholder-gray-500 text-black " placeholder="" />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 w-[80%]">
                                <div className="flex items-center pb-2">
                                    <label htmlFor="ZIP"  className={`pb-2 text-sm font-bold ${color}`}>
                                        Role
                                    </label>
                                    <div className="ml-2 cursor-pointer text-gray-600 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <input type="text" value={user.role }  readOnly   className="bg-gray-200  
                                
                                
                                border-red-400 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange-700 border-2 placeholder-gray-500 text-black"/>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={`container mx-auto mt-10 rounded bg-gray-100 ${color} w-11/12 xl:w-full`}>
                    <div className="xl:w-full py-5 px-8">
                        <div className="flex items-center mx-auto">
                            <div className="container mx-auto">
                                <div className="mx-auto xl:w-full">
                                    <p className={`text-lg ${color} font-bold`}>Alerts</p>
                                    <p className="text-sm text-black  pt-1">Get updates of any new activity or features. Turn on/off your preferences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto pb-6">
                        <div className="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 ${color}">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={3} y={5} width={18} height={14} rx={2} />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                            <p className={`text-lg ${color} font-bold`}>Via Email</p>
                        </div>
                        <div className="px-8">
                            <div className="flex justify-between items-center mb-8 mt-4">
                                <div className="w-9/12">
                                    <p className={`text-lg ${color} font-bold`}>Comments</p>
                                    <p className="text-sm  :text-gray-400">Get notified when a post or comment is made</p>
                                </div>
                                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                    <input type="checkbox" name="email_comments" id="toggle1" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white ${color}-400 absolute shadow-sm appearance-none cursor-pointer border-transparent top-0 bottom-0 m-auto" />
                                    <label htmlFor="toggle1" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 ${color}-800 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-9/12">
                                    <p className={`text-lg ${color} font-bold`}>Job Applications</p>
                                    <p className="text-sm ">Get notified when a candidate applies to a job posting</p>
                                </div>
                                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                    <input type="checkbox" name="email_job_application" id="toggle2" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white ${color}-400 absolute shadow-sm appearance-none cursor-pointer border-transparent top-0 bottom-0 m-auto" />
                                    <label htmlFor="toggle2" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 ${color}-800 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-9/12">
                                    <p className={`text-lg ${color} font-bold`}>Product Updates</p>
                                    <p className="text-sm text-black ">Get notifitied when there is a new product feature or upgrades</p>
                                </div>
                                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                    <input type="checkbox" name="email_product_update" id="toggle3" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white ${color}-400 absolute shadow-sm appearance-none cursor-pointer border-transparent top-0 bottom-0 m-auto" />
                                    <label htmlFor="toggle3" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 ${color}-800 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className="pb-4 border-b border-gray-300 dark:border-gray-700 px-8">
                            <div className="flex items-center text-gray-800 ${color}">
                               
                                <p className={`text-lg ${color} font-bold mt-5`}>Push Notifications</p>
                            </div>
                        </div>
                        <div className="px-8">
                            <div className="flex justify-between items-center mb-8 mt-4">
                                <div className="w-9/12">
                                <p className={`text-lg font-bold  ${color} pb-1`}>Comments</p>
                                    <p className="text-sm text-gray-400">Get notified when a post or comment is made</p>
                                </div>
                                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                    <input type="checkbox" name="notification_comment" id="toggle4" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white ${color}-400 absolute shadow-sm appearance-none cursor-pointer border-transparent top-0 bottom-0 m-auto" />
                                    <label htmlFor="toggle4" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 ${color}-800 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-9/12">
                                <p className={`text-lg font-bold  ${color} pb-1`}>Job Applications</p>
                                    <p className="text-sm text-black ">Get notified when a candidate applies to a job posting</p>
                                </div>
                                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                    <input type="checkbox" name="notification_application" id="toggle5" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white ${color}-400 absolute shadow-sm appearance-none cursor-pointer border-transparent top-0 bottom-0 m-auto" />
                                    <label htmlFor="toggle5" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 ${color}-800 cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-9/12">
                                <p className={`text-lg font-bold  ${color} pb-1`}>Product Updates</p>
                                    <p className="text-sm text-black ">Get notifitied when there is a new product feature or upgrades</p>
                                </div>
                                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                                    <input type="checkbox" name="notification_updates" id="toggle6" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white ${color}-400 absolute shadow-sm appearance-none cursor-pointer border-transparent top-0 bottom-0 m-auto" />
                                    <label htmlFor="toggle6" className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 ${color}-800 cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container mx-auto w-11/12 xl:w-full">
                    <div className={`w-full py-4 sm:px-0 bg-white ${color}  border-t-2 border-gray-500 flex justify-end`}>
                    <Link href={`/profile/${user.username}`}><div className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 ${color}-700 rounded text-orange-600 dark:text-orange-600 px-6 py-2 text-xs mr-4" >Cancel</div></Link>
                        <button onClick={saveChanges} className="bg-orange-700 focus:outline-none transition duration-150 ease-in-out hover:bg-orange-600 rounded text-white px-8 py-2 text-sm" type="submit">
                            Save
                        </button>
                    </div>
                </div>
            </div>
         </>
    );
};
export default Settings;

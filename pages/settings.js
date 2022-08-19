 
import { useEffect,useState } from 'react';
import Link from 'next/link';  
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from 'axios';
import Image from 'next/image'
import GeneralInfo from '../components/Settings/generalInfo';
import PersonalInfo from './../components/Settings/personalInfo';
import Security from '../components/Settings/security';

const Settings = ({resetkey}) => {
    const [user,setUser]=useState({about: "", country: "", email: "", firstName: "",  lastName: "", phone: "" , profile_pic: "", username: ""})
    const [imageSrc, setImageSrc] = useState(false);
    const [image, setImage] = useState(false);
    const [tab, setTab] = useState(1);

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
      if(e.target.name=="myfile"){
        setImage(e.target.files[0]);
        setImageSrc(URL.createObjectURL(e.target.files[0])); 
        }
        else{
            setUser({...user,[e.target.name]:e.target.value})
        }
        
    } 
 
    const saveChanges = async(event) => {
        event.preventDefault();
        const token=localStorage.getItem('token')    
        let res;
        const fd = new FormData();
        let url;
        if(image){
            fd.append("file", image);
            fd.append("upload_preset", "bftgwga1");
            res = await Axios.post(
              "https://api.cloudinary.com/v1_1/iassignmenthelp/image/upload",
              fd
            );
            url = res.data.url;
        }   
        res = await fetch(`${process.env.URL_PATH}`+'/api/settings/updateUserProfile',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token:token,user,profile_pic:url}),
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
      
      <div className="font-bold text-4xl text-center md:text-left md:text-3xl md:w-[1500px] md:left-[750px] p-5 text-gray-700  fixed z-20 bg-white w-[100vw]">Profile Settings</div>
      <div className="font-bold text-4xl text-center md:text-left md:text-3xl md:w-[80vw] p-5 text-gray-700  invisible ">Profile Settings</div>
      <div className="md:grid    p-3 rounded-md bg-white mx-auto md:w-[1500px]" style={{gridTemplateColumns:"25% 75%"}}>
        <div className="hidden md:block"></div>
      <div className="md:fixed border-r-2 md:h-[100vh] ">
        <div className="flex md:block">
        <div onClick={()=>setTab(1)} className={'font-semibold cursor-pointer rounded-md p-2 m-2 text-xl w-fit md:w-[300px]' + (tab===1?" bg-orange-300 text-orange-800 ":" text-gray-800 " )   }>General</div>
        <div onClick={()=>setTab(2)} className={'font-semibold cursor-pointer rounded-md p-2 m-2 text-xl w-fit md:w-[300px]' + (tab===2?" bg-orange-300 text-orange-800 ":" text-gray-800 " )   }>Personal Info</div>
        <div onClick={()=>setTab(3)} className={'font-semibold cursor-pointer rounded-md p-2 m-2 text-xl w-fit md:w-[300px]' + (tab===3?" bg-orange-300 text-orange-800 ":" text-gray-800 " )   }>Security</div>
        </div>
      </div>

      <div className={`   `}>
            {tab===1 &&
                 <GeneralInfo onChange={onChange} imageSrc={imageSrc} user={user}/>
                }
                {tab===2 &&
                 <PersonalInfo onChange={onChange} imageSrc={imageSrc} user={user}/>
                }
                {tab===3 &&
                          <Security user={user}/>
                      }
              {tab!==3 && <div className="container h-fit mx-auto w-11/12 xl:w-full">
                    <div className={`w-full py-4 sm:px-0 bg-white  border-gray-500 flex justify-end`}>
                    <Link href={`/profile/${user.username}`}><button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 -700 rounded text-orange-600 dark:text-orange-600 px-6 py-2 text-xs mr-4" >Cancel</button></Link>
                        <button onClick={saveChanges} className="bg-orange-700 focus:outline-none transition duration-150 ease-in-out hover:bg-orange-600 rounded text-white px-8 py-2 text-sm" type="submit">
                            Save
                        </button>
                    </div>
                </div>}
            </div>
            </div>
         </>
    );
};
export default Settings;

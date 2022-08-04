 
import { useEffect,useState } from 'react';
import Link from 'next/link';  
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from 'axios';
import Image from 'next/image'
const Settings = ({resetkey}) => {
     var options = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    const [user,setUser]=useState({about: "", country: "", email: "", firstName: "",  lastName: "", phone: "" , profile_pic: "", username: ""})
    const [imageSrc, setImageSrc] = useState(false);
    const [image, setImage] = useState(false);
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
        console.log(data.userData)
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
            console.log(response)
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
               
            <div className={`   `}>
                <div className={` mx-auto  rounded`}> 
                    <div className="mx-auto">
                        <div className=" "> 
                                     <div className="font-bold text-4xl text-center md:text-left md:text-6xl md:w-[80vw] mx-auto text-gray-700 mt-2 border-b-2 pb-5">Settings</div>
                            <div className="md:w-[80vw] mx-5 md:mx-auto">
                            <div className=" rounded-full bg-no-repeat mx-auto mt-5 text-center "> 
                                
                               
                                <label htmlFor="img" className=" w-fit h-fit  inline-block rounded-full cursor-pointer    "   > 
                                <input
                                    id="img"
                                    onChange={onChange}
                                    name="myfile"
                                    type="file"
                                    placeholder="Username"
                                    className="hidden" 
                                    accept="image/png, image/jpeg"
                                    />
                                
                                <img
                                      src={(imageSrc)?imageSrc:user.profile_pic}
                                      className=" hover:opacity-75 mx-auto w-40 h-40 object-scale-down rounded-full bg-black   overflow-hidden"
                                      alt="" 
                                      objectFit="contain" 
                                      />    
                                        </label>
                                        {/* <label  htmlFor="img">
                                    <div className="cursor-pointer h-fit w-fit flex flex-col mt-2 justify-center items-center z-10 text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                        <p className="text-xs text-gray-900">Edit Picture</p>
                                    </div>
                                        </label>  */}
                                </div>
                            <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
                                  <div className=" font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12 ">Username</div>
                                  <input value={user.username}  name="username" onChange={onChange}  type="text" id="username"  className="    border-2   py-2 px-3      text-md  rounded-lg   w-[60%] md:w-[40%]  "/>
                            </div>
                            <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
                                <label htmlFor="about" className={`font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12  `}>
                                    About
                                </label>
                                <textarea rows={5} id="about" value={user.about} onChange={onChange} name="about" className="    border-2   py-2 px-3      text-md  rounded-lg   w-[60%] md:w-[40%]  " placeholder="Let the world know who you are"   /> 
                             
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className={`container mx-auto    rounded px-4`}>
                    <div className="xl:w-full border-b border-gray-300  pb-5">
                        <div className="flex   mx-auto  w-fit items-center">
                            <p className={`text-lg   font-bold`}>Personal InhtmlFormation</p>
                            <div className="ml-2 cursor-pointer text-gray-600 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                                    </div> 
                 <div className="md:w-[80vw] mx-5 md:mx-auto">
 
        
         
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
        <div className=" font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12 ">Email</div>
        <input type="text" id="Email" name="email" value={user.email}  onChange={onChange} className=" border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]  " placeholder="example@gmail.com" />
        </div>

        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className="font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12 ">First Name</div>
          <input type="text" id="firstName" name="firstName" value={user.firstName}  onChange={onChange} className=" border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]  " placeholder="example@gmail.com" />
        </div>
         
      
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className="font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12  ">Last Name</div>
          <input type="text" id="lastName" name="lastName" value={user.lastName}  onChange={onChange} className=" border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]  " placeholder="example@gmail.com" />
        </div> 
         
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className="font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12  ">Role</div>
          <div className="   border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%]  ">{user.role==""?'Not Provided':user.role}</div>
        </div>  
        <div className="flex     my-5 gap-x-5  border-b-2 pb-6">
          <div className="font-bold  p-4  text-gray-700 text-md py-2 rounded-md w-[30%]     h-12  ">Country</div>
          <select  
              id="country"
              name="country" 
              value={user.country} 
              onChange={onChange}
              className=" border-2   py-2 px-3      text-md rounded-lg   w-[60%] md:w-[40%] "
               >
              {options.map((c)=> <option key={c} value={c}>{c}</option> )} 

               </select>
              
        </div>  
        </div>
                <div className="container mx-auto w-11/12 xl:w-full">
                    <div className={`w-full py-4 sm:px-0 bg-white   border-t-2 border-gray-500 flex justify-end`}>
                    <Link href={`/profile/${user.username}`}><div className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 -700 rounded text-orange-600 dark:text-orange-600 px-6 py-2 text-xs mr-4" >Cancel</div></Link>
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

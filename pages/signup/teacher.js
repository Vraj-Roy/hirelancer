 
import React from 'react'
import Image from 'next/image'
import Link from "next/dist/client/link";
import { useState , useEffect} from "react"; 
import { useRouter } from 'next/router';  
import {useSession,signIn,signOut} from 'next-auth/react'

const Signup = ({resetkey}) => { 
  var options = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  const [userInputs, setUserInputs] = useState({username:"",firstName:"",lastName:"",youDo:"",education:"",englishProficiency:"" , description:"",country:"",phone:""});  
  const [skills, setSkills] = useState([])
   const [loading,setLoading]=useState(false)
  const {data:session} = useSession() 
  const router=useRouter();
  useEffect(() => {
  const getData=async()=>{
    const tokenData= localStorage.getItem('token')
    if(tokenData){

    let res=await fetch(`${process.env.URL_PATH}/api/getUserData`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({token:tokenData}),
    })
    let response=await res.json(); 
    if(response.success){  
      setUserInputs({username:response.username,firstName:"",lastName:"",youDo:"",education:"",englishProficiency:"",description:"",country:"",phone:""}) 
      
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
  const data= {...userInputs , token:localStorage.getItem('token'),skills}
  
  let res=await fetch(`${process.env.URL_PATH}/api/uploadFreelancerprofile`,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  let response=await res.json(); 
  if(response.success){  
    router.push('/teachers')
    resetkey()
  }else{    
    console.log("failed, sorry not found. ") 
    console.log(response)
  }
  
}   
// @timneutkens  @nachoiacovino  @donnypangilinan 
function handleKeyDown(e){
  if(e.keyCode==8 )
  { if(e.target.value=="" ){
    let popped=skills.pop();
    setSkills(skills.filter((el, i) => i !== popped))
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
  // Add the value to the skills array
  setSkills([...skills, value])
  // Clear the input
  e.target.value = ' '
}
function removeTag(index){
setSkills(skills.filter((el, i) => i !== index))
}
  return (
    <>
       <div className="text-center  mx-auto font-semibold text-xl bg-orange-500 text-gray-100 p-5 my-5"> 
        Fill The Below form to complete your profile
       </div>
    <div  >
      <div className={`main-bg w-full   overflow-hidden flex  items-center justify-center `}>
  <div className="w-full  md:w-[900px]   rounded-lg">
   
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
                value={userInputs.username} 
                readOnly 
                type="username"
                id="username"
                name="username"
                className="w-full text-sm bg-gray-100 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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

       


        <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="youDo" className="leading-7 text-sm text-gray-600">
              Add a title to tell the world what you do
              </label>
              <input
                placeholder='Example: Full Stack Developer | Web  Mobile'
                type="text"
                id="youDo"
                name="youDo"
                onChange={onChange}
                value={userInputs.youDo}
                className="w-full text-sm bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="youDo" className="leading-7 text-sm text-gray-600">
               What you do Offer
              </label>
              <textarea
                placeholder=''   
                id="description"
                name="description"
                onChange={onChange}
                value={userInputs.description}
                className="w-full text-sm bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="education" className="leading-7 text-sm text-gray-600">
              Add Education
              </label>
              <input
                placeholder='Example: B Tech, M Tech'
                type="text"
                id="education"
                name="education"
                onChange={onChange}
                value={userInputs.education}
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="education" className="leading-7 text-sm text-gray-600">
              Your Country
              </label>
              <select  
              id="country"
              name="country" 
              value={userInputs.country} 
              onChange={onChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               >
              {options.map((c)=> <option key={c} value={c}>{c}</option> )} 

               </select>
              
            </div> 
          </div>
        <div className="px-2 w-full">
            <div className="relative mb-4">
              <label htmlFor="education" className="leading-7 text-sm text-gray-600">
              Your Phone
              </label>
              <input 
                type="text"
                id="phone"
                name="phone"
                onChange={onChange}
                value={userInputs.phone}
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        <div className="px-2 w-full"> 
            <div className="relative mb-4">
              <label htmlFor="englishProficiency" className="leading-7 text-sm text-gray-600">
              Your English Proficiency
              </label>
              <select id="englishProficiency" name="englishProficiency" onChange={onChange} value={userInputs.englishProficiency}  className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <option value="Basic">Basic</option>
                <option value="Conversational">Conversational</option>
                <option value="Fluent">Fluent</option>
                <option value="Native">Native</option>
              </select>
            </div>
          </div>
  
         
        


            </div>
          <div className='my-2'>
          <div className="leading-7 text-sm font-bold ml-2 text-gray-600" >Enter what you are good at</div>
            <div className="skills-input-container border-2 border-black p-2 rounded-sm   mt-5 flee items-center flex-wrap  ">
            {  skills.map((tag, index) => ( <div key={index}  className=" text-lg mx-1 my-1 tag-item bg-gray-300 inline-block py-1 px-2 rounded-xl  ml-2">
                <span className="text">{tag}</span>
                <span className="close ml-2 text-red-800  cursor-pointer" onClick={() => removeTag(index)}>&times;</span>
            </div>
            )) }
            <input type="text" onKeyDown={handleKeyDown} className="flex-grow ml-2 outline-none p-1 " placeholder="Type somthing" />
        </div>
            </div>
              
      
        
         
         <button
      
      onClick={onSubmit}
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
import React from 'react'

const PersonalInfo = ({onChange,imageSrc,user}) => {
     var options = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    
  return (<div className="  overflow-y-auto ">
       
                 <div className="  mx-5 md:mx-auto">
 
        
         
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
    </div>
  )
}

export default PersonalInfo
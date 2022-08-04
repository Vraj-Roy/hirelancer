 
const Contact = () => {
  return (
   <>
   <div className="bg-cyan-500 py-8 ">

    <div className="w-[80vw] mx-auto    ">
        <div className=" pb-10  flex flex-col  ">
    <span className="font-bold text-3xl text-gray-200">Contact With Us</span>
    <span className="font-semibold mt-5 text-gray-200">We would love to hear your queries and get in touch with you</span>
    <span className="font-semibold  text-gray-200">Feel Free to get in touch with us</span>
        </div>
    
    <div className="flex flex-wrap md:flex-nowrap shadow-md rounded-md overflow-hidden" >
        <div className="bg-white md:w-3/5 md:p-5 pb-5 w-full ">
            <div className="flex flex-col md:flex-row gap-x-10 md:m-5">
                <div className="w-[80%] mx-auto md:w-1/2">
                <label className="block text-lg text-orange-600 my-5" htmlFor="name" >Name</label>
                <input className=" border-b-2  text-lg w-full outline-none" type="text" name="name" id="name" />
                </div>
                <div className="w-[80%] mx-auto md:w-1/2">
                <label className="block text-lg  text-orange-600 my-5" htmlFor="phone" >Phone</label>
                <input className=" border-b-2  w-full outline-none" type="text" name="phone" id="phone" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-x-10 md:m-5">
                <div className="w-[80%] mx-auto md:w-1/2">
                <label className="block text-lg text-orange-600 my-5" htmlFor="email" >Email</label>
                <input className=" border-b-2  text-lg w-full outline-none" type="text" name="email" id="email" />
                </div>
                <div className="w-[80%] mx-auto md:w-1/2">
                <label className="block text-lg text-orange-600 my-5" htmlFor="subject" >Subject</label>
                <input className=" border-b-2  text-lg  w-full outline-none" type="text" name="subject" id="subject" />
                </div>
            </div>
                <div className="w-[80%] mx-auto md:m-5      ">
                <label className="block text-lg mb-2 text-orange-600" htmlFor="message" >Message</label>
                    <textarea className=" border-2  text-lg  w-full outline-none" name="" id="message"   rows="5"></textarea>
                </div>
                <button className="rounded-3xl bg-orange-500 px-8 py-2 mx-5 text-white shadow-md shadow-orange-600">SEND</button>

        </div>
        <div className="bg-orange-500 md:w-2/5 w-full">
<div className="flex gap-y-5 flex-col px-5 md:px-12 py-5 md:py-8">
            <div className="font-bold text-white text-xl">Reach Us</div>
            <div className=" text-white " style={{display:"grid",gridTemplateColumns:"35% 65%"}}>
                <div className="w-[60px]">Email</div>
                <div className="break-all">dalkkmdamlk@falkmf.com</div>
            </div>
            <div className=" text-white " style={{display:"grid",gridTemplateColumns:"35% 65%"}}>
                <div className="w-[60px]">Phone</div>
                <div className="">32313133</div>
            </div>
            <div className=" text-white " style={{display:"grid",gridTemplateColumns:"35% 65%"}}>
                <div className="w-[60px]">Address</div>
                <div className="">#112, 7th street, opposite great tower of george, Birmingham, England, Uk</div>
            </div>
</div>
        </div>
    </div>
    </div>
   </div> 
   </>
  )
}

export default Contact
import React from 'react'

const GeneralInfo = ({onChange,imageSrc,user}) => {
  return (<>
     <div className={` mx-auto  rounded w-full`}> 
                    <div className="mx-auto">
                        <div className=" "> 
                                     
                            <div className=" mx-5 md:mx-auto">
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
                                      src={(imageSrc ? imageSrc:(user.profile_pic=="/profile"?"profile.png":user.profile_pic ))}
                                      className=" hover:opacity-75 mx-auto w-40 h-40 object-scale-down rounded-full bg-black   overflow-hidden"
                                      alt="" 
                                      objectfit="contain" 
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
     </>
  )
}

export default GeneralInfo
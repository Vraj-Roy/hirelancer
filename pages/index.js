import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Image from "next/Image";

export default function Home() {
  return (
 <>
 {/* Post Job */}
 <div className=" w-auto  md:w-[60vw] mrs-auto  mt-10  rounded-lg">
    
    {/* <h2 className="text-3xl text-center text-orange- mb-4">Signup</h2> */}
    <div className="md:px-12 px-2 ">
    <div className="mx-auto flex flex-wrap font-bold text-3xl">
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
         <div className="mx-auto flex flex-wrap font-bold text-3xl">
              <div className="px-2 md:w-1/2">
                <div className="relative mb-4">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Your Assignment Title
                  </label>
                  <input
                    type="text"
                    id="assignmentName"
                    name="assignmentName"
                    className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="px-2 md:w-1/2">
                <div className="relative mb-4">
                  <label
                    htmlFor="date"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    placeholder="Enter Your 10 digit phone number"
                    id="date"
                    name="date"
                    className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
             
            </div>
              
        <div className="px-2 w-full">
          <div className="relative mb-4">
            <label
              htmlFor="requirements"
              className="leading-7 text-sm text-black font-semibold"
            >
              Description
            </label>
            <textarea
              rows="10"
              cols="30"
              id="requirements"
              name="requirements"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
           
           
           
          </div>
        </div>  
        <div className="px-2 w-full">
          <div className="relative mb-4">
            <label
              htmlFor="add_file"
              className="leading-7 text-sm text-black font-semibold"
            >
              Add File
            </label>

        <input type="file" className=" w-full  bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                 name="" id="add_file" />
           
           
           
          </div>
        </div>
       
      <button
      
      onClick={null}
        type="submit"
        className="w-full py-2 mb-5  rounded-md bg-orange-600 text-gray-100  focus:outline-none"
      >
       Post a Job
      </button>
       
  
    </div>
  </div>
    {/* Conatiners containg vaiours fields */}
      <div className="container     mx-auto">
        <div className="flex flex-wrap m-auto justify-center items-center fit-content ">
          <Link href={"/"}>
            <motion.div
              initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              className="
              py-10
              m-5
              cursor-pointer
              w-64 
              h-80  
              rounded-lg
              flex flex-col
              justify-around
              items-center
              bg-white   
              "
            >
              <img
                className="h-1/2  sm:h-full sm:md:w-1/2 object-cover"
                src="https://static.vecteezy.com/system/resources/previews/002/363/076/original/computer-icon-free-vector.jpg"
                alt="image"
              />
              <div
                className="
                flex
                flex flex-col
                items-baseline
                justify-around 
                h-full
                items-baseline 
                md:w-1/2
                "
              >
                <div className="flex flex-col justify-start items-baseline">
                  <h1 className="text-md font-normal mb-0 text-black font-sans">
                    Programming and development
                  </h1>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h1 className="text-gray-500 text-sm ">
                    {" "}
                    105,005 freelancers
                  </h1>
                </div>
              </div>
            </motion.div>
          </Link>
          <Link href={"/"}>
            <motion.div
              initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              className="
             py-10
             m-5
             cursor-pointer
             w-64 
             h-80  
             rounded-lg
             flex flex-col
             justify-around
             items-center
             bg-white   
             "
            >
              <img
                className="h-1/2  sm:h-full sm:md:w-1/2 object-cover"
                src="https://static.vecteezy.com/system/resources/previews/002/363/076/original/computer-icon-free-vector.jpg"
                alt="image"
              />
              <div
                className="
                flex
                flex flex-col
                items-baseline
                justify-around 
                h-full
                items-baseline 
                md:w-1/2
                "
              >
                <div className="flex flex-col justify-start items-baseline">
                  <h1 className="text-md font-normal mb-0 text-black font-sans">
                    Desgin and art
                  </h1>
                </div>

                <div className=" flex justify-between items-center">
                  <h1 className="text-gray-500 text-sm">
                    {" "}
                    105,005 freelancers
                  </h1>
                </div>
              </div>
            </motion.div>
          </Link>
          <Link href={"/"}>
            <motion.div
              initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              className="
             py-10
             m-5
             cursor-pointer
             w-64 
             h-80  
             rounded-lg
             flex flex-col
             justify-around
             items-center
             bg-white   
             "
            >
              <img
                className="h-1/2  sm:h-full sm:md:w-1/2 object-cover"
                src="https://static.vecteezy.com/system/resources/previews/002/363/076/original/computer-icon-free-vector.jpg"
                alt="image"
              />
              <div
                className="
                flex
                flex flex-col
                items-baseline
                justify-around 
                h-full
                items-baseline 
                md:w-1/2
                "
              >
                <div className="flex flex-col justify-start items-baseline">
                  <h1 className="text-md font-normal mb-0 text-black font-sans">
                    Writing and translation
                  </h1>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h1 className="text-gray-500 text-sm">
                    {" "}
                    105,005 freelancers
                  </h1>
                </div>
              </div>
            </motion.div>
          </Link>
          <Link href={"/  "}>
            <motion.div
              initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
              }}
              className="
             py-10
             m-5
             cursor-pointer
             w-64 
             h-80  
             rounded-lg
             flex flex-col
             justify-around
             items-center
             bg-white   
             "
            >
              <img
                className="h-1/2   sm:h-full sm:md:w-1/2 object-cover"
                src="https://static.vecteezy.com/system/resources/previews/002/363/076/original/computer-icon-free-vector.jpg"
                alt="image"
              />
              <div
                className="
                flex
                flex flex-col
                items-baseline
                justify-around 
                h-full
                items-baseline 
                md:w-1/2
                "
              >
                <div className="flex flex-col justify-start items-baseline">
                  <h1 className=" text-black font-sans">Sales and Marketing</h1>
                </div>

                <div className="w-full flex justify-between items-center">
                  <h1 className="text-gray-500 text-sm">
                    {" "}
                    105,005 freelancers
                  </h1>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
        <div className="flex space-x-2 mt-5 justify-center">
        <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.05 },
            }}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            See More
          </motion.button>
        </div>
      </div>
            
      {/* Blogs Section  */}
      <div className="mx-auto  flex py-4 border-gray-500  justify-center text-4xl font-semibold border-y-2 mt-10 " >Blogs</div>
      {/* Blogs Cards */} 
      <div className="flex flex-wrap m-auto justify-center items-center fit-content ">
        <Link href={"/"}>
          <motion.div
            initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
            className="
              p-10
              m-5
              cursor-pointer
              w-96 
              h-80  
              rounded-lg
              flex flex-col
              justify-around
              items-center
              bg-white   
              "
          >
            <img
              className="h-1/2  sm:h-full sm:w-full object-contain"
              src="https://miro.medium.com/max/1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg"
              alt="image"
            />
            <div
              className="
                flex
                flex flex-col 
                items-baseline
                justify-around 
                h-full
                items-baseline 
                w-full
                "
            >
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-xl font-normal mt-5 text-black font-sans">
                  Why Next Js is getting popular?
                </h1>
              </div>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-3 mt-7 py-2.5 bg-gray-900 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          </motion.div>
        </Link>
        
        <Link href={"/"}>
          <motion.div
            initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
            className="
              p-10
              m-5
              cursor-pointer
              w-96 
              h-80  
              rounded-lg
              flex flex-col
              justify-around
              items-center
              bg-white   
              "
          >
            <img
              className="h-1/2  sm:h-full sm:w-full object-contain"
              src="https://miro.medium.com/max/1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg"
              alt="image"
            />
            <div
              className="
                flex
                flex flex-col 
                items-baseline
                justify-around 
                h-full
                items-baseline 
                w-full
                "
            >
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-xl font-normal mt-5 text-black font-sans">
                  Why Next Js is getting popular?
                </h1>
              </div>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-3 mt-7 py-2.5 bg-gray-900 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          </motion.div>
        </Link>

        <Link href={"/"}>
          <motion.div
            initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
            className="
              p-10
              m-5
              cursor-pointer
              w-96 
              h-80  
              rounded-lg
              flex flex-col
              justify-around
              items-center
              bg-white   
              "
          >
            <img
              className="h-1/2  sm:h-full sm:w-full object-contain"
              src="https://miro.medium.com/max/1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg"
              alt="image"
            />
            <div
              className="
                flex
                flex flex-col 
                items-baseline
                justify-around 
                h-full
                items-baseline 
                w-full
                "
            >
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-xl font-normal mt-5 text-black font-sans">
                  Why Next Js is getting popular?
                </h1>
              </div>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-3 mt-7 py-2.5 bg-gray-900 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          </motion.div>
        </Link>

        <Link href={"/"}>
          <motion.div
            initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
            className="
              p-10
              m-5
              cursor-pointer
              w-96 
              h-80  
              rounded-lg
              flex flex-col
              justify-around
              items-center
              bg-white   
              "
          >
            <img
              className="h-1/2  sm:h-full sm:w-full object-contain"
              src="https://miro.medium.com/max/1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg"
              alt="image"
            />
            <div
              className="
                flex
                flex flex-col 
                items-baseline
                justify-around 
                h-full
                items-baseline 
                w-full
                "
            >
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-xl font-normal mt-5 text-black font-sans">
                  Why Next Js is getting popular?
                </h1>
              </div>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-3 mt-7 py-2.5 bg-gray-900 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          </motion.div>
        </Link>

        <Link href={"/"}>
          <motion.div
            initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
            className="
              p-10
              m-5
              cursor-pointer
              w-96 
              h-80  
              rounded-lg
              flex flex-col
              justify-around
              items-center
              bg-white   
              "
          >
            <img
              className="h-1/2  sm:h-full sm:w-full object-contain"
              src="https://miro.medium.com/max/1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg"
              alt="image"
            />
            <div
              className="
                flex
                flex flex-col 
                items-baseline
                justify-around 
                h-full
                items-baseline 
                w-full
                "
            >
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-xl font-normal mt-5 text-black font-sans">
                  Why Next Js is getting popular?
                </h1>
              </div>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-3 mt-7 py-2.5 bg-gray-900 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          </motion.div>
        </Link>

        <Link href={"/"}>
          <motion.div
            initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
            className="
              p-10
              m-5
              cursor-pointer
              w-96 
              h-80  
              rounded-lg
              flex flex-col
              justify-around
              items-center
              bg-white   
              "
          >
            <img
              className="h-1/2  sm:h-full sm:w-full object-contain"
              src="https://miro.medium.com/max/1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg"
              alt="image"
            />
            <div
              className="
                flex
                flex flex-col 
                items-baseline
                justify-around 
                h-full
                items-baseline 
                w-full
                "
            >
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-xl font-normal mt-5 text-black font-sans">
                  Why Next Js is getting popular?
                </h1>
              </div>

              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-3 mt-7 py-2.5 bg-gray-900 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out"
              >
                Read More
              </button>
            </div>
          </motion.div>
        </Link>
      </div>
    </>
  );
}

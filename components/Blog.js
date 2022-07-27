import Link from 'next/link'
 import {motion} from 'framer-motion'
 import { useRouter } from 'next/router';
import Image  from 'next/image';

 const Blog = ({title,desc,img,slug}) => {
    const router= useRouter();

   return (
    <motion.div
    initial={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)" }}
    whileHover={{
      scale: 1.02,
      boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
    }}
    className="
      px-10
      py-5 
      w-96 
      h-72  
      rounded-lg
      flex 
      flex-col
      justify-around
      items-center
      bg-white   
      "
  >
   {img && <Image
      className="h-1/2  sm:h-full sm:w-full object-contain"
    //   src="https://miro.medium.com/max/1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg"
      width={1000}
      height={1000}
      objectFit="cover"
      src={img} 
      alt="image"
    />
   } 
   {!img &&  <img
      className="h-1/2  sm:h-full sm:w-full object-contain"
      src="https://miro.medium.com/max/1400/1*94Z17dA4rkLL5pOon2ZbCw.jpeg" 
      alt="image"
    />
    }
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
        <Link href="/">
        <h1 className="text-xl font-normal   text-black font-sans cursor-pointer">
          {title}
        </h1>
        </Link>
      </div>

      <button
        onClick={()=>router.push(`/blogs/${slug}`)}
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="inline-block px-3  py-2.5 bg-gray-900 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-   active:shadow-lg transition duration-150 ease-in-out"
      >
        Read More
      </button>
    </div>
  </motion.div> 
   )
 }
 
 export default Blog
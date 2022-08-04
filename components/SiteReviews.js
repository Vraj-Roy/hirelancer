import Link from 'next/link'
 import {motion} from 'framer-motion'
 import { useRouter } from 'next/router';
import Image  from 'next/image';
import { RatingStar } from "rating-star";
 const SiteReviews = ({title,desc,img,slug}) => {
    const router= useRouter();

   return (
   <>
        <div className="w-96 h-fit shadow-md rounded-xl">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto  text-center mt-4 ">
        <img className="h-full rounded-full w-full" src="https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg"/>
            </div>
                <div className="w-fit mx-auto my-4"><RatingStar id="123" rating={3.5} size={40  }/></div>
            <div className="px-8 pb-8 text-justify"> Manchester United Football Club, commonly referred to as Man United, or simply United, is a professional football club based in the Old Trafford area of Manchester, England. The club competes in the Premier League, the top division in the English football league system. 
                </div>
         
      
        </div> 
   </>
   )
 }
 
 export default SiteReviews
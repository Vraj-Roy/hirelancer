import Link from 'next/link'
import { useLayoutEffect,useEffect,useState  } from 'react';
import {useRouter} from 'next/router'
import {useSession,signIn,signOut} from 'next-auth/react'
const Options = () =>{
    const router=useRouter();
    const {data:session} = useSession()   
    const [userData,setUserData] = useState({email:"",password:"",username:""});  

    useEffect(() => {
        if(!localStorage.getItem('token')){
            router.push('/login')
        }
    }, [])
    
  useEffect(() => {
        if(session){
            console.log(session.user.name) 
        const send=async()=>{ 
            
        const username=session.user.name;
        const email=session.user.email;
        const profile=session.user.image;
        const type="google";
        setUserData({username,email,profile,type});

        let res=await fetch(`http://localhost:3000/api/signup`,{
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username,email,profile,type:"google"}),
        })
        let response=await res.json();  
        if(response.success){  
            signOut();
          localStorage.setItem('token',response.token);  
          console.log("success")
          
        }else{ 
          console.log("failed")
            console.log(userData)
            router.push('/')
          // toast.error("Username already exists");
        }
        
      }
        send();
    }
      }, [session])

        return(<>
        <div className="container main w-full h-[80vh] flex justify-center items-center">
            <Link href="/signup/teacher"><div className="bg-orange-500 hover:bg-orange-600 cursor-pointer p-10 text-lg font-semibold mx-5 rounded text-white">Sign up as teacher</div></Link>
            <Link href="/signup/student"><div className="bg-orange-500 hover:bg-orange-600 cursor-pointer p-10 text-lg font-semibold mx-5 rounded text-white">Sign up as Student</div></Link>
        </div>
        </>
        )
    
}
export default Options;
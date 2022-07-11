import Link from "next/link";
import { useState , useEffect } from "react";
import {useRouter} from 'next/router';
import { Button } from "@mui/material";
import {useSession,signIn,signOut} from 'next-auth/react'
const Navbar = () => {
  const router=useRouter()
  const {data:session} = useSession() 
  const [mobileMenu,setMobileMenu]=useState(false) 
  const [hasMounted, setHasMounted] = useState(false);
  const [userData,setUserData]=useState(null);
  const [token, setToken]=useState(null)
  useEffect(() => {
    setHasMounted(true);
    let tokenn=localStorage.getItem('token');
    setToken(tokenn)
    
    const fetchUserData = async () => { 
      let res = await fetch(`${process.env.URL_PATH}api/getUserData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token:tokenn}),
      }); 
      let response = await res.json(); 
      setUserData(response)  
    }; 
    if (!userData) {
      fetchUserData();
    }
  }, []);
    // if(!session){
    //   return <></>
    // }
   
  return (
    <>
    
      <nav className="bg-white fixed w-[100vw] z-40 border-b-2">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 py-2">
          <div className="  flex items-center justify-between h-16 ">
            <div className="   flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                onClick={()=>mobileMenu?setMobileMenu(false):setMobileMenu(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                 
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/*
      Icon when menu is open.

      Heroicon name: outline/x

      Menu open: "block", Menu closed: "hidden"
    */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-betweem  ">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                <img
                  className="block lg:hidden h-8 w-auto cursor-pointer"
                  src="/freelancer.png"
                  alt="Workflow"
                  />
                  </Link>
                <Link href="/">
                <img
                  className="hidden lg:block h-8 w-auto cursor-pointer"
                  src="https://seeklogo.com/images/F/freelancer-com-logo-2B5CE1A961-seeklogo.com.png"
                  alt="Workflow"
                  />
                  </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex ">
                  {/* Current: "bg-gray-900 text-white", Default: "text-black  " */}
                  <Link href="/freelancers">
                    <div className=" px-3 py-2 rounded-md text-md font-medium cursor-pointer">
                      Find Freelancers
                    </div>
                  </Link>
                  <Link href="/assignments">
                    <div className="text-black   px-3 py-2 rounded-md text-md font-medium cursor-pointer">
                      Find Assignments
                    </div>
                  </Link>
                  <Link href="/about">
                    <div className="text-black   px-3 py-2 rounded-md text-md font-medium cursor-pointer">
                      About
                    </div>
                  </Link>
                  <Link href="/solutions">
                    <div className="text-black   px-3 py-2 rounded-md text-md font-medium cursor-pointer">
                      Solutions
                    </div>
                  </Link>
                  <Link href="/blogs">
                    <div className="text-black   px-3 py-2 rounded-md text-md font-medium cursor-pointer">
                      Blogs
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" inset-y-0  hidden   sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              {!hasMounted && <div></div>}
              {hasMounted && <div className="ml-3 relative">
              
              {session && <div>
              <img className="rounded-full h-10  w-10 inline " src={session.user.image }/>
                 <div className="h-12  w-fit inline mx-2 cursor-pointer" onClick={()=>signOut()}>{session.user.name}</div>
                  
              </div>
              }
              {(!session && !token)  &&  <div>
                    <button onClick={()=>router.push('/login')}  className="mx-2 py-2 px-3 text-white rounded-md  bg-orange-600 hover:bg-orange-700"   >Login</button>
                    <button onClick={()=>router.push('/signup')} className="mx-2 py-2 px-3 text-white rounded-md bg-orange-600 hover:bg-orange-700"   >Sign Up</button>
                  </div>

                }
              {(1 && userData )  &&  <div className="flex justify-center items-center">
                  <div className="font-semibold text-xl">
                  {userData.username}
                  </div>
                  <div className="h-12 w-12 ml-4 rounded-full overflow-hidden">
                    <img src={userData.profile+`.png`} alt="" />
                  </div>
                  </div>

                }
                 </div>
                }
                {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
                {/* <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                > */}
                  {/* Active: "bg-gray-100", Not Active: "" */}
                  {/* <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-0"
              >
                Your Profile
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-1"
              >
                Settings
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabIndex={-1}
                id="user-menu-item-2"
              >
                Sign out
              </Link> */}
                {/* </div> */}
             
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
          <div className=" sm:hidden bg-white relative ">
        <div className={`px-2 bg-white border-2  h-[100vh]   absolute w-[100vw]   border-t-2   duration-200 ease-in back `+ (mobileMenu?'left-[0vw]':'left-[-100vw]') } id="mobile-menu">
            {/* Current: "bg-gray-900 text-white", Default: "text-black  " */}
            {(!session && 0) &&  <div className="flex justify-around my-3">
              <button onClick={()=>router.push('/login')}  className="mx-2 py-2 px-3 text-white rounded-md  bg-orange-600 hover:bg-orange-700"   >Login</button>
              <button onClick={()=>router.push('/signup')} className="mx-2 py-2 px-3 text-white rounded-md bg-orange-600 hover:bg-orange-700"   >Sign Up</button>
             </div>
               
              }
               {(1 && userData )  &&  <div>
                  {userData.username}
                  </div>

                }
            <Link  href="/freelancers"><div className="  block px-3 py-2  text-base font-medium border-b-2 border-orange-400 my-2" 
              >
              Find Freelancers
            </div>
              </Link>
            <Link  href="/assignments"><div className="text-black   block px-3 py-2  text-base font-medium border-b-2 border-orange-400 my-2"
              >
              Find Assignments
            </div>
              </Link>
            <Link  href="/about"><div className="text-black   block px-3 py-2  text-base font-medium border-b-2 border-orange-400 my-2"
              >
              About
            </div>
              </Link>
            <Link  href="/solution"><div className="text-black   block px-3 py-2  text-base font-medium border-b-2 border-orange-400 my-2"
              >
              Solutions
            </div>
              </Link>
             
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar = ({resetkey   }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);
  const [hamburgerMenu, setHamburgrMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    let tokenn = localStorage.getItem("token");
    setToken(tokenn);

    const fetchUserData = async () => { 
      let res = await fetch(`${process.env.URL_PATH}/api/getUserData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: tokenn }),
      });
      let response = await res.json();
      if(response.role==""){
        router.push('/signup/options')
      }
      setUserData(response);
    };
    if (!userData) {
      fetchUserData();
    }
  }, []);
  const onChangeMobileMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    hamburgerMenu ? setHamburgrMenu(false) : setHamburgrMenu(true);
  };
  return (
    <>
      <nav className="bg-white fixed w-[100vw] z-40 border-b-2">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 py-2">
          <div className="  flex items-center justify-between h-16 ">
            <div className="   flex items-center sm:hidden">
              {/* Mobile menu button*/}
    
              <div className="  " onClick={onChangeMobileMenu}>
                <div className="flex flex-col md:hidden  ">
                  <div 
                  className={
                      `h-[3px] w-[26px] my-[3px] bg-black origin-top-left   transition ` +
                      (hamburgerMenu ? "rotate-45" : "rotate-0")
                    }
                  ></div>
                  <div
                    className={
                      `h-[3px] w-[26px] my-[3px] bg-black transition ` +
                      (hamburgerMenu ? "opacity-0" : "opacity-1")
                    }   
                  ></div>
                  <div
                    className={
                      `h-[3px] w-[26px] my-[3px] bg-black origin-bottom-left  transition ` +
                      (hamburgerMenu ? "-rotate-45" : "rotate-0")
                    }
                  ></div>
                </div>
              </div>
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
                    src="freelancer.png"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex ">
                  {/* Current: "bg-gray-900 text-white", Default: "text-black  " */}
                  <Link href="/teachers">
                    <div className=" px-3 py-2 rounded-md text-md font-medium cursor-pointer">
                      Find Teachers
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
            <div className=" inset-y-0    sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              {!hasMounted && <div></div>}
              {hasMounted && (
                <div className="ml-3 relative">
                  {/* {session && (
                    <div>
                      <img
                        className="rounded-full h-10  w-10 inline "
                        src={session.user.image}
                      />
                      <div
                        className="h-12  w-fit inline mx-2 cursor-pointer"
                        onClick={() => signOut()}
                      >
                        {session.user.name}
                      </div>
                    </div>
                  )} */}
                  {token && userData &&  !userData.role && (
                    <div>
                      <button
                        onClick={() => router.push("/login")}
                        className="mx-2 py-2 px-3 text-white rounded-md  bg-orange-600 hover:bg-orange-700"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => router.push("/signup")}
                        className="mx-2 py-2 px-3 text-white rounded-md bg-orange-600 hover:bg-orange-700"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                  {!token && (
                    <div>
                      <button
                        onClick={() => router.push("/login")}
                        className="mx-2 py-2 px-3 text-white rounded-md  bg-orange-600 hover:bg-orange-700"
                      >
                        Login
                      </button>
                      <button
                        onClick={() => router.push("/signup")}
                        className="mx-2 py-2 px-3 text-white rounded-md bg-orange-600 hover:bg-orange-700"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                  {userData && userData.role &&  (
                    <>
                    <div className="relative">

                    <div className="flex flex-col justify-center items-center cursor-pointer" onClick={()=>dropDown?setDropDown(false):setDropDown(true)}>
                    
                    <div className="flex items-center gap-x-2">
                        <div className="h-12 w-12  rounded-full overflow-hidden">
                        <img src={userData.profile + `.png`} alt="" />
                      </div>
                      <div className="  font-semibold text-lg bg-orange-500 p-1 text-white rounded text-sm ">
                        {userData.role}
                      </div>
                      </div>
                      
                      <div className="font-semibold text-lg">
                        {userData.username}
                      </div>
                    </div>{ dropDown && <div onClick={()=>setDropDown(false)} className="absolute -right-4  text-white text-lg mr-1 rounded-md overflow-hidden ">
                        <Link href={`/profile/${userData.username}`}><div className="bg-orange-500 hover:bg-orange-700 border-red-600 border-b-2 cursor-pointer px-4 py-1">Profile</div></Link>
                        <Link href="/settings"><div className="bg-orange-500 hover:bg-orange-700 border-red-600 border-b-2  px-4 py-1 cursor-pointer">Settings</div></Link>
                         <div onClick={()=>{localStorage.removeItem('token'),resetkey(),signOut({callbackUrl: `${process.env.URL_PATH}/login`  })}} className="bg-red-500 hover:bg-red-700 border-y-pink-200 cursor-pointer px-4 py-1">Logout</div>
                    </div>}
                    </div>
                    
                    </>
                  )}
                </div>
              )}
       
             
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className=" sm:hidden bg-white relative ">
          <div
            className={
              `px-2 bg-white border-2  h-[100vh]   absolute w-[100vw]   border-t-2   duration-200 ease-in back ` +
              (mobileMenu ? "left-[0vw]" : "left-[-100vw]")
            }
            id="mobile-menu"
          >
            {/* Current: "bg-gray-900 text-white", Default: "text-black  " */}
         
            <Link href="/teachers">
              <div
                onClick={onChangeMobileMenu}
                className="  block px-3 py-2  text-base font-medium border-b-2 border-orange-400 my-2"
              >
                Find Teachers
              </div>
            </Link>
            <Link href="/assignments">
              <div
                onClick={onChangeMobileMenu}
                className="text-black   block px-3 py-2  text-base font-medium border-b-2 border-orange-400 my-2"
              >
                Find Assignments
              </div>
            </Link>
            <Link href="/about">
              <div
                onClick={onChangeMobileMenu}
                className="text-black   block px-3 py-2  text-base font-medium border-b-2 border-orange-400 my-2"
              >
                About
              </div>
            </Link>
            <Link href="/solution">
              <div
                onClick={onChangeMobileMenu}
                className="text-black   block px-3 py-2  text-base font-medium border-b-2 border-orange-400 my-2"
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

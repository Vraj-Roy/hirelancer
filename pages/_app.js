import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {SessionProvider} from 'next-auth/react'
import { useState , useEffect } from 'react'; 
import LoadingBar from 'react-top-loading-bar';
import {useRouter} from 'next/router'
import CookieConsent from "react-cookie-consent";

function MyApp({ Component, pageProps }) {
  
  const[key,setKey]=useState();
  const[progress,setProgress]=useState(0);
  const[cookiesBarVisible,setCookiesBarVisible]=useState("")
  const[consent,setConsent]=useState("")
  const router=useRouter();

  const resetkey=()=>{
    setKey(Math.random());
  } 
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(70)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  }, ) 
  useEffect(() => { 
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    // console.log(getCookie('Cookie-Consent'))
    if(getCookie('Cookie-Consent')=="true"){
      setCookiesBarVisible("hidden")
      setConsent("true")
    }else{
      setCookiesBarVisible("show") 
      setConsent("false")
    } 
  },[] ) 
  useEffect(()=>{
    console.log(consent)
  },[consent])
  return ( 
  <SessionProvider>
   <LoadingBar
        color='#EA580C'
        progress={progress}
        onLoaderFinished={() => setProgress(0)} 
        height={4} 
      />
  <Navbar resetkey={resetkey} key={key}/>
  <div className="dummy_div h-20"/>
  <Component {...pageProps} resetkey={resetkey} consent={consent} setCookiesBarVisible={setCookiesBarVisible} />
  
  {cookiesBarVisible && 
  <CookieConsent
  visible={cookiesBarVisible}
  enableDeclineButton
  buttonText="Accept"
  declineButtonText="Reject"
  cookieName="Cookie-Consent"
  onDecline={()=>{setCookiesBarVisible("hidden");setConsent("false")}}
  onAccept={()=>{setCookiesBarVisible("hidden");setConsent("true")}}
  style={{
    background: "#F97316", 
    border:"2px solid black",
    height:"100px",
    fontSize:"20px",
    alignItems:"center",
    textShadow: "2px 2px black",
  }}
  buttonStyle={{
    borderRadius:"10px"
  }}
  declineButtonStyle={{
    borderRadius:"10px"
  }} 
>
We Use Cookies for Login Purpose
</CookieConsent>  
  }
  </SessionProvider>  
  )
}

export default MyApp

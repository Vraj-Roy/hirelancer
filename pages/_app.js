import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {SessionProvider} from 'next-auth/react'
import { useState , useEffect } from 'react'; 
import LoadingBar from 'react-top-loading-bar';
import {useRouter} from 'next/router'
function MyApp({ Component, pageProps }) {
  
  const[key,setKey]=useState();
  const[progress,setProgress]=useState(0);
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
  console.log("renderd")
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
  <Component {...pageProps} resetkey={resetkey} />
  </SessionProvider>  
  )
}

export default MyApp

import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {SessionProvider} from 'next-auth/react'
import { useState } from 'react';
function MyApp({ Component, pageProps }) {
  
  const[key,setKey]=useState();
  const resetkey=()=>{
    setKey(Math.random());
  } 
  return ( 
  <SessionProvider>
  <Navbar key={key}/>
  <div className="dummy_div h-20"/>
  <Component {...pageProps} resetkey={resetkey} />
  </SessionProvider>  
  )
}

export default MyApp

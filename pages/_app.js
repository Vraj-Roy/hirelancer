import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {SessionProvider} from 'next-auth/react'
function MyApp({ Component, pageProps }) {

  return ( 
  <SessionProvider>
  <Navbar/>
  <div className="dummy_div h-20"/>
  <Component {...pageProps} />
  </SessionProvider>  
  )
}

export default MyApp

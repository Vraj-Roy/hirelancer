import { NextResponse } from "next/server";  
import { getToken } from "next-auth/jwt"

export default async function middleware (req){
    
    // const {cookies} = req; 
    const url = req.url;
 
    // if(url.includes('profile')){
    //     if (cookies.isAuthenticated == undefined){
    //         console.log("undefined")
    //         return NextResponse.redirect('http://localhost:3000/login');
    //     }
    //     else if(cookies.isAuthenticated == "true"){
    //         console.log("true")     
    //         return NextResponse.next()
    //     }else{
    //         console.log("false")
    //         return NextResponse.redirect('http://localhost:3000/login')

    //     }    
    // } 
    if(url.includes('https://accounts.google.com/')){
        try {
        let secret="v"
        const token = await getToken({ req, secret }) 
        if(token=="null" || token==null){
            return NextResponse.redirect('http://localhost:3000/login') 
        }
        
    } catch (error) { 
        return NextResponse.redirect('http://localhost:3000/login') 
    }
        }
    return NextResponse.next()
}
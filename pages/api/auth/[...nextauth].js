import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from './mongo'
export default NextAuth({
    providers:[
        GoogleProvider({
             clientId:process.env.CLIENT_ID,
             clientSecret:process.env.CLIENT_SECRET,
             secret:"v",
            }),   
    ], 
    session: {
        strategy: 'jwt', 
      }, 
    secret:"v", 
    // adapter: MongoDBAdapter(clientPromise),
})
import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from './mongo'
export default NextAuth({
    providers:[
        GoogleProvider({
             clientId:"770196948820-9t6prrdkjmunndedktub7m3m1qocgl36.apps.googleusercontent.com",
             clientSecret:"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",
            //  clientId:"770196948820-ih0tr4cpkhcj2dbi0bu9hbbq02tj58f0.apps.googleusercontent.com",
            //  clientSecret:"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",
             secret:"v",
            }),   
    ], 
    session: {
        strategy: 'jwt', 
      }, 
    secret:"v", 
    // adapter: MongoDBAdapter(clientPromise),
})
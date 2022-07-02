import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers:[
        GoogleProvider({
             clientId:"770196948820-9t6prrdkjmunndedktub7m3m1qocgl36.apps.googleusercontent.com",
             clientSecret:"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",
            }),
    ],
    secret:"4aa467467b458f5784e3bd251886b463",
    // callbacks: {
    //     async jwt(token, user, account, profile, isNewUser) {
    //       if (account?.accessToken) {
    //         token.accessToken = account.accessToken;
    //       }
    //       return token;
    //     },
    //   },
})
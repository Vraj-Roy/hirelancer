import Ably from "ably/promises";

export default async function handler(req, res) {
    const client = new Ably.Rest(process.env.ABLY_API);
    console.log("token request ran")
    const clientId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    //   client.connection.on(function(stateChange) {
    //     console.log('New connection state is ' + stateChange.current);
    //   });
    // client.connection.close()
    const tokenRequestData = await client.auth.createTokenRequest({ clientId:clientId });
    res.status(200).json(tokenRequestData); 
}; 
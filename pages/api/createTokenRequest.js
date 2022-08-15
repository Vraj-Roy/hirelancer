import Ably from "ably/promises";

export default async function handler(req, res) {
    const client = new Ably.Realtime(process.env.ABLY_API);
    console.log("token request ran")
     
    //   client.connection.on(function(stateChange) {
    //     console.log('New connection state is ' + stateChange.current);
    //   });
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: "Next-JS-Ably" });
    res.status(200).json(tokenRequestData); 
};
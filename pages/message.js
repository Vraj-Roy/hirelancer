import React, { useEffect, useState } from "react";     
import dynamic from "next/dynamic";
import Chatbox from './../components/Chatbox';
import Link from 'next/link';

const Message = () => {
  console.log("rendered")
  const [to, setTo] = useState(false);
  const [from, setFrom] = useState(false);
  const [convoUsers, setConvoUsers] = useState([]);
  const [user, setUser] = useState("");
  const [channelName, setChannelName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  
  useEffect(()=>{
    const getUid=async()=>{ 
      console.log("getuid users ran")
      let res = await fetch(
        `${process.env.URL_PATH}` + "/api/message/getFromUid",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: localStorage.getItem("token") }),
        }
      );
      let response = await res.json(); 
      setFrom(response)
    }
    const getChatUsers=async()=>{
      console.log("chat users ran")
      let res = await fetch(
        `${process.env.URL_PATH}` + "/api/message/getConvoUsers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: localStorage.getItem("token") }),
        }
      );
      let response = await res.json(); 
      setConvoUsers(response)  
      console.log(response)
    }
    getUid()
    getChatUsers()
  },[]) 
  if(convoUsers){
    return (
    <>
      <div className={"md:grid  "} style={{ gridTemplateColumns: "30% 70%" }}>
        <div className={" h-[89vh] overflow-auto " + (to?"md:block hidden":"block " )}> 
        {convoUsers && convoUsers.map((c)=>{
          return <><div className={to==c.uid?'bg-gray-500':''} onClick={()=>{setTo(c.uid);setUser(c.username);setChannelName(c.channel);setProfilePic(c.profile_pic)}}>
          <div className="border-2 p-4 flex items-center gap-5 cursor-pointer">
            <img src="/profile.png" className="w-12 h-12 rounded-full" alt="" />
            <div>
              <div>{c.username}</div>
              <div>mY Message</div>
            </div>
          </div>
            </div>
          </>
        })}
         
        </div>
        <div className={"md:block "+ to?"block":""}>
     {to && <Chatbox from={from} to={to} profilePic={profilePic} channelName={channelName} user={user}/> }
        </div>
      </div>
    </>
  );
      }
};

export default Message;

import React, { useEffect, useState } from "react";
import { useChannel } from "../pages/api/AblyReactEffect/AblyReactEffect";
import dynamic from "next/dynamic"; 
import Link from 'next/link';

const Chatbox = ({from,to,channelName,user}) => {
  let inputBox = null;
  let messageEnd = null;
  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const [dbMessages, setDbMessages] = useState([]);

  const messageTextIsEmpty = messageText.trim().length === 0; 
    const [channel, ably] = useChannel(channelName, (message) => {
      // Here we're computing the state that'll be drawn into the message history
      // We do that by slicing the last 199 messages from the receivedMessages buffer
  
      const history = receivedMessages.slice(-199);
      setMessages([...history, message]);
  
      // Then finally, we take the message history, and combine it with the new message
      // This means we'll always have up to 199 message + 1 new message, stored using the
      // setMessages react useState hook  
    }); 
  const sendChatMessage = async(messageText) => {

    const token=localStorage.getItem('token')
    
    channel.publish({ name:channelName, data: messageText });
    setMessageText("");
    inputBox.focus();

    await fetch(
      `${process.env.URL_PATH}` + "/api/message/addMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token, message: messageText,from:from,to:to }),
      }
    ); 
  };
  const handleFormSubmission = async (event) => {
    // console.log("to: "+to, "from: "+from)
    event.preventDefault(); 
    // console.log() 
    sendChatMessage(messageText);

    const token = localStorage.getItem("token");
   
  };
  const handleKeyPress = (event) => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  };
  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";
    if (author == "me") {
      return (
        <div
          key={index}
          className="bg-blue-500 p-2  text-white w-fit ml-auto  rounded-tl-lg rounded-tr-lg rounded-bl-lg"
        >
          {message.data}
        </div>
      );
    } else if (author == "other") {
      return (
        <div className="flex gap-x-5">
          <img
            src="/profile.png"
            className="w-12 h-12 rounded-full self-end"
            alt=""
          />
          <div className="bg-gray-200   p-2 mr-auto   rounded-tl-lg rounded-tr-lg rounded-br-lg">
            {message.data}
          </div>
          {messages}
          <div
            ref={(element) => {
              messageEnd = element;
            }}
          ></div>
        </div>
      );
    }
  });
  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });
  useEffect(() => {
    const getMessages = async () => {
      const token = localStorage.getItem("token");
      let res = await fetch(
        `${process.env.URL_PATH}` + "/api/message/retrieveMessage ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: token, to:to }),
        }
      );
      let response = await res.json();
      console.log(response);
      setDbMessages(response);
    };
    setMessages([])
    getMessages();
  }, [to]);

    return (
      <div
      className=" grid h-[89vh]  "
      style={{ gridTemplateRows: "10% 80% 10%" }}
    >
      <div className="border-2 text-blue-600 text-xl font-bold p-5">
        {user}
      </div>
      <div className="border-2 flex flex-col gap-y-5 p-5 overflow-auto">
         
       
      {dbMessages && dbMessages.map((m) => {
              if (m.from == from &&  m.Message!=="") {
                return   (
                  <div className="bg-blue-500 p-2  text-white w-fit ml-auto  rounded-tl-lg rounded-tr-lg rounded-bl-lg">
                    {m.message}
                  </div>
                );
              } else if (m.from !== from) {
                return (
                  <div className="flex gap-x-5">
                    <img
                      src="/profile.png"
                      className="w-12 h-12 rounded-full self-end"
                      alt=""
                    />
                    <div className="bg-gray-200   p-2 mr-auto   rounded-tl-lg rounded-tr-lg rounded-br-lg">
                      {m.message}
                    </div> 
                    <div
                      ref={(element) => {
                        messageEnd = element;
                      }}
                    ></div>
                  </div>
                );
              }
            })}
            {messages} 
     
        <div
          ref={(element) => {
            messageEnd = element;
          }}
        ></div>
      </div>
      <div className="bg-gray-200 border-t-2 border-gray-500 py-2 px-4 flex gap-x-5">
        <input
          type="text"
          ref={(element) => {
            inputBox = element;
          }}
          value={messageText}
          placeholder="Type Your Message"
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-2 h-full rounded-lg outline-none px-4 text-lg"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2  rounded-md"
          onClick={handleFormSubmission}
          disabled={messageTextIsEmpty}
        >
          Send
        </button>
      </div>
    </div>
      
  )
}

export default Chatbox
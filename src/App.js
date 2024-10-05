import React, { useState, useRef } from "react";
import "./App.css";
import {Auth} from "./components/Auth";
import Chat from "./Chat"
import Cookies from "universal-cookie";
const cookies = new Cookies();
export default function App() {

  //using states to check if the guy is signed-in;
  const[isAuth, setIsAuth]=useState(cookies.get("auth-token"))
  
  if (isAuth){
    return(
      <div className="chat-room">
        <Chat /> 
      </div>
    )
  }

  //If he is not, then render the Auth component;
  if (!isAuth){
  return (
    <div className="container">
      <Auth setIsAuth={setIsAuth}/>
      <Chat/>
    </div>
  )
  }
  
  
    
  
}

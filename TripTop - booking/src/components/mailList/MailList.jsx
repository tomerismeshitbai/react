import "./mailList.css"
import { useNavigate } from "react-router-dom";
import React from "react";

const MailList = () => {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button onClick={Login}>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList;
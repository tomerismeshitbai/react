import React from 'react'
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/");
  };
  const Login = () => {
    navigate("/login");
  };
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo" onClick={handleLogo}>TripTop - booking</span>
            <div className="navItems">
                <button className="navButton" onClick={Login}>Register</button>
                <button className="navButton" onClick={Login}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
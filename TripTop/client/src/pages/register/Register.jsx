import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/register", formData);
      console.log(response.data); 
      navigate("/")
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit"  className="rButton">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

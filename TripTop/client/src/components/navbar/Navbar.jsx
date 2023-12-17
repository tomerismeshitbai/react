import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const Login = () => {
    navigate("/login");
  };

  const Register = () => {
    navigate("/register");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TripTopbooking</span>
        </Link>
        {user ? <div class="name">  {user.username} </div> : (
          <div className="navItems">
            <button className="headerBtn" onClick={Register} >Register</button>
            <button className="headerBtn" onClick={Login} >Login</button>
          </div>
        )}
        {user && <button className="SignOut" onClick={Login} >Sign out</button>}
      </div>
    </div>
  );
};

export default Navbar;
import { NavLink } from "react-router-dom";
import "../assets/Header.css";
import logo from "../images/logo.png";
import Login from "../pages/Login";

const showLogin = () => {
  document.getElementById("id01").style.display = "block";
  
  var modal = document.getElementById("id01");
  // When the user clicks anywhere outside of the login page, the login page gets closed
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};

const Header = () => {
  return (
    <>
      <Login />
      <div id="header">
        <div>
          <NavLink to="/home" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>
            <button className="btn btn-outline-danger loginBtn" onClick={showLogin}>
              LogIn
            </button>
        </div>
      </div>
    </>
  );
};

export default Header;

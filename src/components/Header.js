import { NavLink } from "react-router-dom";
import "../assets/Header.css";
import logo from "../images/logo.png";

const showLogin = () => {

  /*document.getElementById("id01").style.display = "block";
  
  var modal = document.getElementById("id01");
  // When the user clicks anywhere outside of the login page, the login page gets closed
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };*/
};

const Header = () => {
  return (
    <>
      <div id="header">
        <div>
          <NavLink to="/home" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>
          <button className="btn btn-outline-danger loginBtn">
            <a target="_blank" href="http://localhost/CSI_RUBIX_/Github_folder/registration%20and%20login%20page/register.php" >
              Register
            </a>
          </button>
          <button className="btn btn-outline-danger loginBtn">
            <a target="_blank" href="http://localhost/CSI_RUBIX_/Github_folder/registration%20and%20login%20page/login.php" >
              LogIn
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
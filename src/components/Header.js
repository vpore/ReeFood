import { Link, NavLink } from "react-router-dom";
import "../assets/Header.css";
import logo from "../images/csilogo.png";

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
          
          <Link target="_blank" to="http://localhost/CSI_RUBIX_/Github_folder/registration%20and%20login%20page/register.php" >
            <button className="btn btn-outline-danger regiBtn">
              Register
            </button>
          </Link>
          <Link target="_blank" to="http://localhost/CSI_RUBIX_/Github_folder/registration%20and%20login%20page/login.php" >
            <button className="btn btn-outline-danger loginBtn">
              LogIn
            </button>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Header;
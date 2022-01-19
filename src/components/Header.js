import { Link, NavLink } from "react-router-dom";
import "../assets/Header.css";
import logo from "../images/csilogo.png";

const Header = () => {
  return (
    <>
      <div id="header">
        <div>
          <NavLink to="/home" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>
          
          <a target="_blank" href="http://localhost/CSI_RUBIX_/Github_folder/registration%20and%20login%20page/register.php" >
            <button className="btn btn-outline-danger regiBtn">
              Register
            </button>
          </a>
          <a target="_blank" href="http://localhost/CSI_RUBIX_/Github_folder/registration%20and%20login%20page/login.php" >
            <button className="btn btn-outline-danger loginBtn">
              LogIn
            </button>
          </a>
          
        </div>
      </div>
    </>
  );
};

export default Header;
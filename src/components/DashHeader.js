import { NavLink } from "react-router-dom";
import '../assets/Dashboard.css';

// import '../assets/Header.css';
import logo from "../images/csilogo.png";

const DashHeader = () => {
    return (
        <nav className="navbar">
            <div className="nav">
                <img src={logo} className="brand-logo" alt=""></img>
                <a className="logoutBtn btn btn-outline-success" href="http://localhost/CSI_RUBIX_/Github_folder/registration%20and%20login%20page/register.php">Logout</a>
                {/* <div className="nav-items"> */}
                {/* for Recipies page search bar  */}
                {/* <div className="search">
                        <input type="text" className="search-box" placeholder="search items , recipes , and many more..."></input>
                        <a href="search.html">
                        <button className="search-btn">search</button>
                        </a>
                    </div> */}
                {/* <a href="signup.html"> */}
                {/* <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user login"></img> */}
                {/* </a> */}
                {/* </div> */}
            </div>
            <ul className="links-container" style={{ marginBottom: 0 }}>
                <NavLink to='/dashboard' className="link-item link">Home</NavLink>
                <NavLink to='/aboutus' className="link-item link">About Us</NavLink>
                <NavLink to='/recipe' className="link-item link">Recipes</NavLink>
                {/* <NavLink to='/expiry' className="link-item link">Items approaching Expiry</NavLink> */}
                <NavLink to='/feedback' className="link-item link">Feedback</NavLink>
                <NavLink to='/recommendations' className="link-item link">Recommendations</NavLink>


            </ul>
        </nav >
    );
};

export default DashHeader;
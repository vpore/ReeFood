import { NavLink } from "react-router-dom";

import '../assets/Header.css';
import logo from "../images/logo.png";

const DashHeader = () => {
    return(
        <div id="header">
        <div>
            <img src={logo} alt="logo"/>
            <ul id="navigation">
                <NavLink to='/dashboard' className='navItem'>Dashboard</NavLink>
                <NavLink to='/expiry' className='navItem'>Expiry</NavLink>
                <NavLink to='/recipe' className='navItem'>Food Recipes</NavLink>
                <NavLink to='/recom' className='navItem'>Recommendations</NavLink>
            </ul>
        </div>
        </div>
    );
};

export default DashHeader;
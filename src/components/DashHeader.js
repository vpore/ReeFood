import '../assets/Header.css';
import logo from "../images/logo.png";

const DashHeader = () => {
    return(
        <div id="header">
        <div>
            <img src={logo} alt="logo"/>
            <ul id="navigation">
                <li>Dashboard</li>
                <li>Expiry</li>
                <li>Food Recipes</li>
                <li>Recommendations</li>
            </ul>
        </div>
        </div>
    );
};

export default DashHeader;
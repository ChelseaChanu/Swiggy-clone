import logo from "../../assets/Images/logo.png";
import MediaIcon from './MediaIcon';

import { Link } from "react-router-dom";

const Navbar = ()=>{
  return(
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logoContainer">
          <img className="navbar__container__logoContainer__logo" src={logo} alt="logo" />
        </div>
        <div className="navbar__container__lists">
          <ul className="navbar__container__lists__lists">
            <li><Link to="/about" className="navigateTo">About Us</Link></li>
            <li><Link to="/value" className="navigateTo">Values At Swiggy</Link></li>
          </ul>
        </div>
        <MediaIcon liClassName="mediaNavbar"/>
      </div>
    </div>
  );
}

export default Navbar;
import MediaIcon from "./MediaIcon";
import { Link } from "react-router-dom";

const Footer = ()=>{
  return(
    <div className="footer">
      <div className="footer__lists">
        <ul className="footer__lists__lists">
          <li><Link to="/about" className="navigateToFooter">About Us</Link></li>
          <li><Link to="/value" className="navigateToFooter">Values At Swiggy</Link></li>
        </ul>
      </div>
      <MediaIcon liClassName= "mediaFooterLists" ulClassName="mediaFooterList"/>
      <div className="footer__copyright"> © 2024 Swiggy </div>
    </div>
  );
}

export default Footer;
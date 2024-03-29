// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faLinkedinIn,faSquareFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const MediaIcon = (props)=>{
  const {liClassName, ulClassName} = props;
  return(
    <div className="mediaIcon">
      <ul className={`mediaIcon__mediaIconList ${ulClassName}`}>
        {/* <li className={liClassName}><FontAwesomeIcon icon={faLinkedinIn} /></li> */}
        {/* <li className={liClassName}><FontAwesomeIcon icon={faSquareFacebook} /></li> */}
        {/* <li className={liClassName}><FontAwesomeIcon icon={faInstagram} /></li> */}
        <li className={liClassName}>
          {/* <FontAwesomeIcon icon={faTwitter} /> */}
        </li>
      </ul>
    </div>
  );
}

export default MediaIcon;
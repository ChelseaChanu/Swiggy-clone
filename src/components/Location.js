import { useContext, useState, useEffect } from "react";
import useGeolocation from "../utils/useGeolocation";
import { DataContext } from "./DataContextProvider";

const Location = (props)=>{
  const {onClose} = props;
  const[address, setAddress] = useState("");
  const {latitude, longitude} = useGeolocation(address);
  const{setLatitude, setLongitude, setApiAddress} = useContext(DataContext);

  const handleInputChange = (event)=>{
    setAddress(event.target.value);
  }

  const handleKeyDown = async(event)=>{
    if(event.key==='Enter'){
      setLatitude(latitude);
      setLongitude(longitude);
      setApiAddress(address);
      onClose();
    }
  }

  const handleCancelBtn = ()=>{
    setAddress("");
  }

  return(
    <div className="location">
      <div className="location__leftSection">
        <div className="location__leftSection__details">
          <div className="location__leftSection__details__closeBtn" onClick={onClose}>X</div>
          <div className="location__leftSection__details__input">
            <input className="location__leftSection__details__input__input" 
            type="text" 
            spellcheck="false"
            value={address}
            placeholder="Search for area, street name.."
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            >
            </input>
            <button className="location__leftSection__details__input__btn" onClick={handleCancelBtn}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="location__rightSection" onClick={onClose}></div>
    </div>
  )
}

export default Location;
import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/Images/search-icon.png"
import closeIcon from "../../assets/Images/close.png"
import { DataContext } from "./DataContextProvider";
import LoginPage from "./LoginPage";
import Location from "./Location";
import { LOGO__URL } from "../utils/constants";

import useSearchFilter from "../utils/useSearchFilter";
import useModal from "../utils/useModal";
// import { HouseLine } from "@phosphor-icons/react";

const Header = () => {
  const {data, handleFilter, loginStatus, updateLoginStatus, apiAddress} = useContext(DataContext);
  const { inputValue, handleSearch, getValue } = useSearchFilter(data, handleFilter);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const {isModalOpen, openModal, closeModal} = useModal();

  // display and close status bar
  const displaySearchBar = ()=>{
    setSearchIsOpen(!searchIsOpen);
  }

  // silde in side bar of login 
  const displayLogin=()=>{
    if (loginStatus === "Logout") {
      updateLoginStatus("Login");
      closeModal("loginModal");
    }
     else {
      openModal("loginModal");
    }
  }

  return (
    <div className="header">
      <div className="header__container">
        <div className="flex" >
          <div className="header__container__container__logoContainer">
            <img className="header__container__container__logoContainer__logo" src={LOGO__URL} alt="logo" />
            <p className="header__container__container__logoContainer__location" onClick={()=>openModal("locationModal")}>{apiAddress}</p>
          </div>
          { searchIsOpen && 
          <div className="header__container__container__searchContainer">
            <input type="text" className="header__container__container__searchContainer__search" 
            value={inputValue} 
            onChange={getValue} 
            onKeyDown={handleSearch}
            placeholder="Search for food or restaurants"/>
            <button className="header__container__container__searchContainer__btn" type="submit" onClick={handleSearch}>
              {/* <img src={searchIcon} alt="search-icon" /> */}
              <MagnifyingGlass size={32} weight="thin"/>
            </button>
          </div>
          }
          <div className="header__container__container__features">
            <div className="header__container__container__features__expandSearch">
              <button className="header__container__container__features__expandSearch__btn" type="submit" onClick={displaySearchBar}>
                <img src={searchIsOpen? closeIcon:searchIcon} alt="search-icon" />
              </button>
            </div>
            <ul className="flex gap-4">
              <li>
                <Link to="/" className="navigateTo">
                  {/* <HouseLine size={32} weight="thin" />Home */}
                </Link>
              </li>
              <li><Link to="/about" className="navigateTo">About Us</Link></li>
              <li><Link to="" className="navigateTo"></Link></li>
              <li id="login" onClick={displayLogin}>{loginStatus}</li>
            </ul>
          </div>
        </div>
      </div>
      {isModalOpen("loginModal") && <LoginPage onClose={()=>closeModal("loginModal")} />}
      {isModalOpen("locationModal") && <Location onClose={()=>closeModal("locationModal")}/>}
    </div>
  );
};

export default Header;
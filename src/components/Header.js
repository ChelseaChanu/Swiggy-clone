import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContextProvider";
import LoginPage from "./LoginPage";
import Location from "./Location";
import { LOGO_URL } from "../utils/constants";

import useSearchFilter from "../utils/useSearchFilter";
import useModal from "../utils/useModal";

import { Home, ShoppingCart, User, Info, Search } from "react-feather";

const Header = () => {
  const {data, handleFilter, loginStatus, updateLoginStatus, apiAddress} = useContext(DataContext);
  const { inputValue, handleSearch, getValue } = useSearchFilter(data, handleFilter);
  const {isModalOpen, openModal, closeModal} = useModal();

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
    <div className="fixed top-0 left-0 w-full h-20 px-8 py-3 bg-white shadow-[0_15px_40px_-20px_rgba(40,44,63,.15)] z-[1000]">
      <div className="flex items-center justify-between" >
        <div className="flex items-center gap-1">
          <img className="w-15 h-14" src={LOGO_URL} alt="logo" />
          <p className="font-[Montserrat] text-sm truncate w-[10rem] cursor-pointer" onClick={()=>openModal("locationModal")}>{apiAddress}</p>
        </div>
        <div className="flex items-center gap-3 w-[35rem] px-4 py-3 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.24)] rounded-3xl">
          <input className="w-[95%] outline-none border-none"
            type="text"
            value={inputValue} 
            onChange={getValue} 
            onKeyDown={handleSearch}
            placeholder="Search for food or restaurants"/>
          <button type="submit" onClick={handleSearch}>
           <Search strokeWidth={1} size={24} color="gray"/>
          </button>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/" className="text-base flex items-center gap-1 font-[Montserrat] hover:text-[#fc8019]">
                <Home strokeWidth={1} size={22}/>Home
              </Link>
            </li>
            <li>
              <Link to="/about"  className="text-base flex items-center gap-1 font-[Montserrat] hover:text-[#fc8019]">
                <Info strokeWidth={1} size={22}/>About Us
              </Link>
            </li>
            <li>
              <Link to=""  className="text-base flex items-center gap-1 font-[Montserrat] hover:text-[#fc8019]">
                <ShoppingCart strokeWidth={1} size={22}/>Cart
              </Link>
            </li>
            <li id="login" onClick={displayLogin}  className="cursor-pointer text-base flex items-center gap-1 font-[Montserrat] hover:text-[#fc8019]">
              <User strokeWidth={1} size={22}/>{loginStatus}
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen("loginModal") && <LoginPage onClose={()=>closeModal("loginModal")} />}
      {isModalOpen("locationModal") && <Location onClose={()=>closeModal("locationModal")}/>}
    </div>
  );
};

export default Header;
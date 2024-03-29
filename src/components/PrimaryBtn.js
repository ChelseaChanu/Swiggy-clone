import { useState, useEffect } from "react";

const PrimaryBtn = (props)=>{
  const {buttonName, filterFunc, onFilter} = props;

  // filter restau based on rating
  const filterRestau = ()=>{
    const filtered = filterFunc();
    // setRestauList(filtered);
    onFilter(filtered);
  }
  return(
    <button className="primary-btn" onClick={filterRestau}>{buttonName}</button>
  );
}

export default PrimaryBtn;
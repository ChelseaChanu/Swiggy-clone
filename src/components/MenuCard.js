import { useState } from 'react';

const MenuCard = (props)=>{
  const {isVeg, name, description, defaultPrice, imgUrl} = props;
  const imagePath = isVeg === 1 ? require("../../assets/Images/Veg_symbol.jpg") : require("../../assets/Images/non__veg.png");
  const imgStyle = isVeg === 1 ? {}: {width:'25px'};

  return(
    <div className="menuCard">
      <div className="menuCard__details">
        <img src={imagePath} alt="image" className="menuCard__details__itemType" style={imgStyle}/>
        <h3 className="menuCard__details__title">{name}</h3>
        <p className="menuCard__details__price">{`₹${defaultPrice/100}`}</p>
        <div className="menuCard__details__items">{description}</div>
      </div>
      <div className="menuCard__item">
        {imgUrl===null?<div style={{height:'50%'}}></div> :<img src={imgUrl} alt="image"/>}
        <button className="menuCard__item__btn">ADD</button>
      </div>
    </div>
  )
}

export default MenuCard;
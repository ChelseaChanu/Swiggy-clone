import goldenStar from "../../assets/Images/star--golden.png";
import { CDN_URL } from "../utils/constants";

const RestauCard = (props)=>{
  const {restauData} = props;
  const {cloudinaryImageId, name, avgRating, cuisines, locality} = restauData.info;
  const {deliveryTime} = restauData.info.sla;
  return(
    <div className="restauContainer__restauCard">
      <div className="restauContainer__restauCard__image">
        <img className="restauContainer__restauCard__image__img" src={CDN_URL+cloudinaryImageId} alt="image"/>
      </div>
      <div className="restauContainer__restauCard__details">
        <h3 className="restauContainer__restauCard__details__name">{name}</h3>
        <div className="restauContainer__restauCard__details__info">
          <img className="restauContainer__restauCard__details__info__star" src={goldenStar} alt="star"/>
          <p className="restauContainer__restauCard__details__info__rating">{avgRating}</p>
          <p className="restauContainer__restauCard__details__info__deliveryTime">{deliveryTime} mins</p>
        </div>
        <p className="restauContainer__restauCard__details__cuisine">{cuisines.join(', ')}</p>
        <p className="restauContainer__restauCard__details__address">{locality}</p>
      </div>
    </div>
  );
};

export default RestauCard;
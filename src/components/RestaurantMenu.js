import MenuCard from './MenuCard';

import { CDN_URL } from '../utils/constants';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import ShimmerUI from './ShimmerUI';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = ()=>{
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  if(resInfo===null) return <ShimmerUI/>;
  
  const {name, cuisines, areaName, avgRatingString, totalRatingsString} = resInfo?.cards[0]?.card?.card?.info;
  const {lastMileTravelString} = resInfo?.cards[0]?.card?.card?.info?.sla;
  const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="restaurantMenu appBody">
      <div className="restaurantMenu__container">
        <div className="restaurantMenu__container__details">
          <h1 className="restaurantMenu__container__details__restaurantName">{name}</h1>
          <div className="restaurantMenu__container__details__restaurantDetails">
            <div className="restaurantMenu__container__details__restaurantDetails__restaurantNameAddress">
              <p className="restaurantMenu__container__details__restaurantDetails__restaurantNameAddress__name">{name}</p>
              <p className="restaurantMenu__container__details__restaurantDetails__restaurantNameAddress__cuisine">{cuisines.join(", ")}</p>
              <p className="restaurantMenu__container__details__restaurantDetails__restaurantNameAddress__address">{`${areaName}, ${lastMileTravelString}`}</p>
            </div>
            <div className="restaurantMenu__container__details__restaurantDetails__restaurantRatings">
              <p className="restaurantMenu__container__details__restaurantDetails__restaurantRatings__avgRating">
                {/* <span><FontAwesomeIcon icon={faStar} style={{ fontSize: '14px' }}/></span>{avgRatingString} */}
              </p>
              <p className="restaurantMenu__container__details__restaurantDetails__restaurantRatings__totalRating">{totalRatingsString}</p>
            </div>
          </div>
        </div>
        <div className="restaurantMenu__container__recommendation">
          <h3 className="restaurantMenu__container__recommendation__title">{`Recommended (${itemCards?.length===undefined? 0: itemCards?.length})`}</h3>
          {itemCards?.map((item)=>(
            <MenuCard
            key={item.card.info.id}
            isVeg={item.card.info.isVeg}
            name={item.card.info.name}
            description={ item.card.info.description}
            defaultPrice={item.card.info.defaultPrice || item.card.info.price}
            imgUrl={item.card.info.imageId !==undefined? `${CDN_URL}fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`:null}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
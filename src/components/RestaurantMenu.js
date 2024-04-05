import MenuCard from './MenuCard';
import { Star } from 'react-feather';
import { CDN_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
import ShimmerUI from './ShimmerUI';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = ()=>{
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  if(resInfo===null) return <ShimmerUI/>;
  console.log(resInfo);
  
  const {name, cuisines, areaName, avgRatingString, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;
  const {lastMileTravelString} = resInfo?.cards[2]?.card?.card?.info?.sla;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="relative top-[80px] py-4 w-[800px] mx-auto pb-20">
      <div className="px-1">
        <div className="flex flex-col border-b-[1px] border-gray-200 pt-4 pb-8">
          <h1 className="font-[BasicGrotesque] w-[1180px] mx-auto text-3xl text-grey-900 font-bold py-3">{name}</h1>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center gap-1">
              <p className="font-[BasicGrotesque] text-[#02060CBF] text-lg font-bold">{name}</p>
              <p className="font-[BasicGrotesque] text-[#02060CEA] text-base font-medium">{cuisines.join(", ")}</p>
              <p className="font-[BasicGrotesque] text-[#02060C99] text-sm font-extralight">{`${areaName}, ${lastMileTravelString}`}</p>
            </div>
            <div className="flex flex-col gap-1 border border-gray-300 py-4 px-3 rounded-md">
              <div className="flex items-center justify-center">
                <Star strokeWidth={1} size={18} color="green" fill="green"/> 
                <p>{avgRatingString}</p>
              </div>
              <p className="bg-gray-200 h-[1px] w-[95%] mx-auto"></p>
              <p className="">{totalRatingsString}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="font-[BasicGrotesque] w-[1180px] mx-auto text-2xl text-grey-900 font-bold py-3">{`Recommended (${itemCards?.length===undefined? 0: itemCards?.length})`}</h3>
          {itemCards?.map((item)=>(
            <MenuCard
            key={item.card.info.id}
            isVeg={item.card.info.isVeg}
            name={item.card.info.name}
            description={ item.card.info.description}
            defaultPrice={item.card.info.defaultPrice || item.card.info.price}
            imgUrl={item.card.info.imageId !==undefined? `${CDN_URL}fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`:null}
            rating={item.card.info.ratings.aggregatedRating.rating}
            ratingCount={item.card.info.ratings.aggregatedRating.ratingCountV2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
import { Link } from "react-router-dom";
import RestauCard from "./RestauCard";

const RestauContainer = ({filterRestau})=>{
  return(
    <div className="w-[1180px] grid grid-cols-4 gap-8 mx-auto pt-7 pb-24">
      {
        filterRestau?.map((restaurant)=> 
          <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id} className="restauLink">
            <RestauCard restauData = {restaurant}/>
          </Link>
        )
      }
    </div>
  );
};

export default RestauContainer;
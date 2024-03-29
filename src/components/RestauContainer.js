import { Link } from "react-router-dom";
import RestauCard from "./RestauCard";

const RestauContainer = ({filterRestau})=>{
  return(
    <div className="restauContainer">
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
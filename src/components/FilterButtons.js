import PrimaryBtn from "./PrimaryBtn";

const FilterButtons = (props)=>{
  const {onFilter, restauList} = props;

  const getNumericalData = (string)=>{
    const parts = string.split(/\D+/).filter(ele=> ele !== "");
    const numberValue = parseInt(parts[0],10);
    console.log("Called");
    return numberValue;
  }

  return(
    <div className="filterButtons">
      <PrimaryBtn 
      buttonName="Ratings 4.0+"
      filterFunc={()=>
        restauList.filter(restau => restau.info.avgRating > 4.0)
      }
      onFilter={onFilter}/>
      <PrimaryBtn 
      buttonName="Less than 300"
      filterFunc={()=>
        restauList.filter(restau => getNumericalData(restau.info.costForTwo) <= 300)
      }
      onFilter={onFilter}/>
    </div>
  );
}

export default FilterButtons;
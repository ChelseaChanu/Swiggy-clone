import React,{useRef, useState} from "react";
import { FaStar } from "react-icons/fa";

const AccordionItem = (props)=>{
  const {isVeg, name, description, defaultPrice, imgUrl, rating, ratingCount} = props;
  const imagePath = isVeg === 1 ? require("../../assets/Images/Veg_symbol.jpg") : require("../../assets/Images/non__veg.png");
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState("more");

  const veg = {
    width: '16px',
  }

  const nonVeg = {
    width: '25px',
  }
  const imgStyle = isVeg === 1 ? veg : nonVeg;

  const showFullDescrip = ()=>{
    if(showMore){
      setShow("more");
    }
    else{
      setShow("less");
    }
    setShowMore(! showMore);
  }

  return(
    <div className="bg-white flex justify-between items-start border-b-[1px] pt-5 pb-10 border-gray-200 w-full">
      <div className="w-[65%]">
        <img src={imagePath} alt="image" className="rounded-md pb-1" style={imgStyle}/>
        <h3 className="font-[BasicGrotesque] text-[#02060CBF] text-lg font-bold pb-1">{name}</h3>
        <p className="font-[BasicGrotesque] text-[#02060CEA] text-base font-medium pb-1">{`₹${defaultPrice/100}`}</p>
        {rating !==undefined? 
          (
            <div className="flex gap-1 items-center">
              <FaStar strokeWidth={1} size={14} color="green" fill="green"/>
              <p>{rating}</p>
              <p>{`(${ratingCount})`}</p>
            </div>
          ): null
        }
        <div className="flex items-end">
        <div className={`${showMore? "": "line-clamp-2"} font-[BasicGrotesque] text-[#02060C99] text-base font-extralight leading-5 pt-1`}>
          {description}
        </div>
        <p className="font-[BasicGrotesque] text-[#02060C99] text-base font-bold leading-5 cursor-pointer" onClick={showFullDescrip}>{show}</p>
        </div>
      </div>
      <div className="relative w-[155px] h-[145px] rounded-xl">
        {imgUrl===null?<div style={{height:'50%'}}></div> :<img className='w-full h-full rounded-xl object-cover' src={imgUrl} alt="image"/>}
        <button className="absolute bottom-[-20px] left-1/2 translate-x-[-50%] cursor-pointer w-[70%] bg-white shadow-[0px_3px_8px_rgba(0,_0,_0,_0.24)] text-green-400 border border-gray-300 px-4 py-2 font-bold rounded-md">ADD</button>
      </div>
    </div>
  )
}

export default AccordionItem;
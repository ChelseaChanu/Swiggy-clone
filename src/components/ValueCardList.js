import React from 'react'
import CoreValues from './CoreValues';

const ValueCardList = (props)=>{
  const {childClass, parentClass, data} = props;

  return(
    <div className={`cardListContainer ${parentClass}`}>
      <div className="cardListContainer__imageContainer">
        <img src={data.titleImage} alt='image'/>
      </div>
      <div className="cardListContainer__container">
        {
          data.cards.map((card,index)=>(
            <CoreValues
            key={index}
            classname={childClass}
            titleColor={data.titleColor}
            imageUrl={card.imageUrl}
            count={card.count}
            title={card.title}
            points={card.points}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ValueCardList;
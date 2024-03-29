const CoreValues = (props)=>{
  const {classname, titleColor, imageUrl, count, title, points}= props;
  return(
    <div className={`principleCard ${classname}`}>
      <div className="principleCard__imageContainer">
        <img src={imageUrl} alt="image"/>
      </div>
      <div className="principleCard__content">
        <h2 className="principleCard__content__cardNumber" >{count}</h2>
        <h3 className="principleCard__content__title" style={{color:titleColor}}>{title}</h3>
        <div className="principleCard__content__lists">
          <ul className="principleCard__content__lists__lists">
            {points.map((point,index)=>(
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
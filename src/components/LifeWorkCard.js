const LifeWorkCard = (props)=>{
  const {link, imageUrl, title, details} = props;
  return(
    <div className="lifeCardContainer">
      <div className="lifeCardContainer__cardImg">
        <a href={link} className="lifeCardContainer__cardImg__link">
          <img src={imageUrl} alt="image"/>
        </a>
      </div>
      <div className="lifeCardContainer__content">
        <h4 className="lifeCardContainer__content__title">{title}</h4>
        <p className="lifeCardContainer__content__details">{details}</p>
      </div>
    </div>
  );
}

export default LifeWorkCard;
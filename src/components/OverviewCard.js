const OverviewCard = (props)=>{
  const {count, description} = props;
  return(
    <div className="aboutUs__body__overview__container__cards__overviewCard">
      <h3 className="aboutUs__body__overview__container__cards__overviewCard__count">{count}+</h3>
      <h2 className="aboutUs__body__overview__container__cards__overviewCard__descrip">{description}</h2>
    </div>
  );
}

export default OverviewCard;
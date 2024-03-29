const ShimmerUI = ()=>{
  const shimmer = Array.from({length: 20}).map((ele,ind)=>{
    return(
      <div key={ind} className="shimmerBody__shimmerContainer__shimmerCard">
        <div className="shimmerBody__shimmerContainer__shimmerCard__image"></div>
          <div className="shimmerBody__shimmerContainer__shimmerCard__detailsContainer">
          <div className="shimmerBody__shimmerContainer__shimmerCard__detailsContainer__details"></div>
          <div className="shimmerBody__shimmerContainer__shimmerCard__detailsContainer__details"></div>
        </div>
      </div>
    );
  })
  return(
    <div className="shimmerBody">
      <div className="shimmerBody__shimmerContainer">
        {shimmer}
      </div>
    </div>
  );
}

export default ShimmerUI;
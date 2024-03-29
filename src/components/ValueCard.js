import MediaIcon from './MediaIcon';

const ValueCard = (props)=>{
  const {title, description, btnName, imageUrl, classname} = props;

  // function to bold certain part of title
  const boldTitle=(text)=>{
    const boldText = text.match(/\*\*(.*?)\*\*/g).map((match)=> match.replace(/\*\*/g,""));
    const separate = text.split("**").filter((ele)=>ele!="");
    const desiredText = separate.map((ele)=>ele==boldText? <strong>{ele}</strong> : ele);
    return desiredText;
  };

  return(
    <div className={`container ${classname}`}>
      <div className="container__left-section">
        <h3 className="container__left-section__title">{boldTitle(title)}</h3>
        <p className="container__left-section__content">{description}</p>
        {
          typeof btnName === "string"?<button className="aboutUs-btn">{btnName}</button>: <MediaIcon/>
        }
      </div>
      <div className="container__right-section">
        <img src={imageUrl} alt="image" />
      </div>
    </div>
  );
}

export default ValueCard;
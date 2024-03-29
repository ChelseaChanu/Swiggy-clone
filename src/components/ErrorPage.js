const ErrorPage = ()=>{
  return(
    <div className="errorPage">
      <div className="errorPage__container">
        <div className="errorPage__container__imgCont">
          <img src={require('../../assets/Images/error-image.jpg')} alt="error" />
        </div>
        <h2 className="errorPage__container__message">404</h2>
        <h2 className="errorPage__container__message">Oops! Something went wrong</h2>
      </div>
    </div>
  )
}

export default ErrorPage;
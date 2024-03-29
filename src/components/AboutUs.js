import { useEffect } from 'react';
import MapComponent from './MapComponent';
import Navbar from './Navbar';
import OverviewCard from './OverviewCard';
import ValueCard from './ValueCard';

const AboutUs = ()=>{
  useEffect(()=>{
    document.title = "Swiggy About";
  },[]);

  return(
    <div className="aboutUs">
      <Navbar/>
      <div className="aboutUs__body">
        <div className="aboutUs__body__mission">
          <img src={require('../../assets/Images/inverted-commas.png')} alt="comma" className="aboutUs__body__mission__invertedComma" />
          <h3 className="aboutUs__body__mission__content">
          Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. 
          Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
          </h3>
        </div>
        <div className="aboutUs__body__journey">
          <div className="aboutUs__body__journey__container">
            <h2 className="aboutUs__body__journey__container__content">The Swiggy<b>Journey</b></h2>
            <img src={require('../../assets/Images/Swiggy-Journey.jpg')} alt="comma" className="aboutUs__body__journey__container__img" />
          </div>
        </div>
        <div className="aboutUs__body__future">
          <div className="aboutUs__body__future__container">
            <div className="aboutUs__body__future__container__container">
              <h1 className="aboutUs__body__future__container__container__content">What’s In Store For The Future?</h1>
              <p className='aboutUs__body__future__container__container__details'>Swiggy has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</p>
            </div>
          </div>
        </div>
        <div className="aboutUs__body__overview">
          <div className="aboutUs__body__overview__container">
            <h1 className="aboutUs__body__overview__container__title">Changing<br/><strong>the game</strong></h1>
            <div className="aboutUs__body__overview__container__cards">
              <OverviewCard count="150000" description="Restaurant Partners Countrywide"/>
              <OverviewCard count="5000" description="Employees across the Country"/>
              <OverviewCard count="260000" description=
              {`Delivery
                Executives`
              }/>
              <OverviewCard count="500" description=
              {`Cites
                PAN India`
              }/>
            </div>
          </div>
        </div>
        <div className="aboutUs__body__companyValue">
          <ValueCard 
          key={1}
          title="**Swiggy's** first Jamboree"
          description="After two years of remote working at Swiggy, we had the first installment of our in-office Jamboree! It was a fun-filled week that covered - interesting knowledge sharing sessions with leaders, teams getting together in-person, and activities ranging from concerts to game sessions. Here's a glimpse into the makings of this delightful week."
          btnName="Swiggy's first Jamboree"
          imageUrl={require("../../assets/Images/jamboree-2022.jpg")}
          />
          <ValueCard 
          key={2}
          title="**Swiggster Speak:** Experiencing Swiggy's Future of Work"
          description="From finding time to workout to spending precious moments with family and prioritising mental health — Swiggy's Remote-First way of working has been helping Swiggsters across the country. Watch this video to understand how things have been changing for them."
          btnName="Remote-First Future Of Work"
          imageUrl={require("../../assets/Images/future-of-work.jpg")}
          classname="reverse"
          />
          <ValueCard 
          key={3}
          title="We Are Swiggy | **The Inside Scoop**"
          description="Want to know what's buzzing at the Swiggy side of the planet? There here is what you need to follow. We Are Swiggy channels on Social Media will give you an inside-out view of the everyday serious and fun stuff within our world. All you need to do is to click your preferred channel and make sure you follow us."
          imageUrl={require("../../assets/Images/about_img3.jpg")}
          />
          <ValueCard 
          key={4}
          title="**What's Buzzing at** Swiggy?"
          description="From food guides to the culture inside, we are sure you are curious to learn more about what's happening inside and around the Swiggy world. Well, if that's the case, you have landed at the right spot. Swiggy Diaries is a journal of everything you need to know about our side of the planet. So dive in and get on with it."
          btnName="Turn the page"
          imageUrl={require("../../assets/Images/Swiggy-Diaries_1.jpg")}
          classname="reverse"
          />
        </div>
        <MapComponent/>
      </div>
    </div>
  )
}
export default AboutUs;
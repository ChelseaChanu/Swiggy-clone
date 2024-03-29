import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ValueCard from "./ValueCard";
import ValueCardList from "./ValueCardList";

import { values } from "../utils/valuesAtSwiggyData";
import LifeWorkCard from "./LifeWorkCard";

const ValuesAtSwiggy = ()=>{
  useEffect(()=>{
    document.title = "Swiggy Value";
  },[]);
  
  return(
    <div className="swiggyValues">
      <Navbar/>
      <div className="swiggyValues__body">
        <div className="swiggyValues__body__topComponent">
          <h1 className="swiggyValues__body__topComponent__title">Swiggy</h1>
          <h3 className="swiggyValues__body__topComponent__subTitle">Values</h3>
          <p className="swiggyValues__body__topComponent__content">the guiding light</p>
        </div>
        <div className="swiggyValues__body__principle">
          <ValueCardList data={values[0]}/>
        </div>
        <div className="swiggyValues__body__principle">
          <ValueCardList childClass="flexContainer" parentClass="addBorder" data={values[1]}/>
        </div>
        <div className="swiggyValues__body__principle">
          <ValueCardList childClass="flexContainer" data={values[2]}/>
        </div>
        <ValueCard
          title="What We Value **At Swiggy**"
          description="Our actions are strongly defined by the Swiggy values. Through ups, downs, and everything in between; Swiggsters put these values into practice in their everyday ways of working. Read on to get a taste of how Swiggsters live and breathe these values and how it forms the backbone of our culture."
          btnName="Turn the page"
          imageUrl={require("../../assets/Images/What-We-Value-At-Swiggy.jpg")}
        />
      </div>
      <div className="swiggyValues__workContainer">
        <h1 className="swiggyValues__workContainer__title">Swiggy Value Shots <strong>- Listen In!</strong></h1>
        <div className="swiggyValues__workContainer__container">
          <LifeWorkCard
            key={1}
            link="https://www.youtube.com/watch?v=0Lrj509oX8M&feature=youtu.be"
            imageUrl={require('../../assets/Images/Sachit-Arora.jpg')}
            title="Sachit Arora"
            details="Durga Puja is a time marked with celebration. Sachit Arora - Clusterhead, Business Operations, talks about his experience during this festival and how the value of ‘Move Fast, Break Barriers and Deliver Results,’ helped him and his team meet challenges head-on."
          />
          <LifeWorkCard
            key={2}
            link="https://www.youtube.com/watch?v=VrBqyGsrECM"
            imageUrl={require('../../assets/Images/Sidharth-Bhakoo.jpg')}
            title="Sidharth Bhakoo"
            details="The best way to understand our values is to hear what Swiggsters have to say about them. In this Swiggy Value Shot, Sidharth Bhakoo, Vice President – National Business, explains why and how we 'Think Big' at Swiggy."
          />
          <LifeWorkCard
            key={3}
            link="https://www.youtube.com/watch?v=VEsqEsFqNdw&feature=youtu.be"
            imageUrl={require('../../assets/Images/Mansi.jpg')}
            title="Mansi Pakhiddey"
            details="As we all know, COVID-19 came with many setbacks, and no business was left untouched by it. In this Swiggy Value Shot, Mansi Pakhiddey, Director, Business Operations, explains how the value, ‘Move fast, Break Barriers, and Deliver results’, helped her proactively come up with unique planning to work around pandemic-led obstacles."
          />
        </div>
      </div>
    </div>
  );
}

export default ValuesAtSwiggy;
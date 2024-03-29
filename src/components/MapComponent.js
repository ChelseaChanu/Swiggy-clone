import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const MapComponent = () => {
  const coords = [12.9310, 77.6899];
  return (
    <div className="aboutUs__body__location__container">
      <div className="aboutUs__body__location__container__left-section">
        <h4 className="aboutUs__body__location__container__left-section__title">Get In <strong>Touch</strong></h4>
        <h2 className="aboutUs__body__location__container__left-section__subTitle">Head Office</h2>
        <p className="aboutUs__body__location__container__left-section__content"><strong>Bundl Technologies Pvt. Ltd.</strong><br/>
          No. 55 Sy No 8 to 14 I & J Block - Ground Floor, Embassy Tech Village | Outer Ring Road, Devarbisanahalli, Varthur Bengaluru - 560130
        </p>
        <div className="aboutUs__body__location__container__left-section__contact">
          <img src={require('../../assets/Images/whatsapp.png')} alt='whatsapp'/>
          <p>Get Location</p>
        </div>
      </div>
      <div className="aboutUs__body__location__container__right-section">
        <div id="map" className="circular-map">
          <MapContainer center={coords} zoom={15} className='map-container'>
            <TileLayer
              attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coords}></Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;

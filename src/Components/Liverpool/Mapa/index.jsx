import React from 'react';
import './index.css';

const Mapa = () => {
  return (
    <div className="map-info">
      <a href="#" onClick={() => window.open('https://www.google.com/maps?q=260+Picton+Road,+L15+4LP', '_blank')}>
        <img className='img-mapa' src="../../../../../public/img/Liverpool/maps.png" alt="mapa" />
      </a>
      <div className="map-text" onClick={() => window.open('https://www.google.com/maps?q=260+Picton+Road,+L15+4LP', '_blank')}>
      <h2> <img src="../../../../../public/img/google-maps.png" width={30} alt="" /> Endereço <img width={50} src="../../../../../public/img/house.png" alt="" /> </h2>
        <p>260 Picton Road, L15 4LP, Liverpool, UK</p>
      </div>
    </div>
  );
};

export default Mapa;

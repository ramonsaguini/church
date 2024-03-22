import React from 'react';
import './index.css';

const Mapa = () => {
  return (
    <div className="map-info">
      <a href="#" onClick={() => window.open('https://www.google.com/maps?q=194+Chapel+St,+Salford+M3+6BY', '_blank')}>
        <img className='img-mapa' src="../img/Manchester/mapa.png" alt="mapa" />
      </a>
      <div className="map-text" onClick={() => window.open('https://www.google.com/maps?q=194+Chapel+St,+Salford+M3+6BY', '_blank')}>
      <h2> <img src="../../../../../public/img/google-maps.png" width={30} alt="" /> Endereço <img width={50} src="../../../../../public/img/house.png" alt="" /> </h2>
        <p>194 Chapel St. Salford, M3 6BY, Manchester, UK</p>
      </div>
    </div>
  );
};

export default Mapa;

import React from 'react';
import './Mapa.css';

const Mapa = () => {
  return (
    <div className="map-info">
      <a href="#" onClick={() => window.open('https://www.google.com/maps?q=194+Chapel+St,+Salford+M3+6BY', '_blank')}>
        <img className='img-mapa' src="../../../../public/img/Manchester/mapa.png" alt="mapa" />
      </a>
      <div className="map-text" onClick={() => window.open('https://www.google.com/maps?q=194+Chapel+St,+Salford+M3+6BY', '_blank')}>
        <h2>Nosso endereço</h2>
        <p>194 Chapel St. Salford, M3 6BY, Manchester, UK</p>
      </div>
    </div>
  );
};

export default Mapa;

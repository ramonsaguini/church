import React from 'react';
import './Mapa.css';

const Mapa = () => {
  return (
    <div className="map-info">
      <a href="#" onClick={() => window.open('https://www.google.com/maps?q=260+Picton+Road,+L15+4LP', '_blank')}>
        <img className='img-mapa' src="../../../../public/img/Liverpool/maps.png" alt="mapa" />
      </a>
      <div className="map-text" onClick={() => window.open('https://www.google.com/maps?q=260+Picton+Road,+L15+4LP', '_blank')}>
        <h2>Nosso endereço</h2>
        <p>260 Picton Road, L15 4LP, Liverpool, UK</p>
      </div>
    </div>
  );
};

export default Mapa;

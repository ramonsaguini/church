import React from 'react';
import './index.css';

const Mapa = () => {
  return (
    <div className="map-info">
      <a href="#" onClick={() => window.open('https://www.google.com/maps?q=Av.+Men+Marcelo,+Antares,+Maceió+-+AL,+57048-015,+Brasil', '_blank')}>
        <img className='img-mapa' src="../../img/Maceio/mapa.png" alt="mapa" />
      </a>
      <div className="map-text" onClick={() => window.open('https://www.google.com/maps?q=MANAH+CHURCH+-+Av+Men+Marcelo,+Antares,+Maceió+-+AL,+57048-015,+Brasil', '_blank')}>
        <h2> <img src="../img/google-maps.png" width={30} alt="" /> Endereço <img width={50} src="../img/house.png" alt="" /> </h2>
        <p>Av. Men Marcelo - Antares, Maceió - AL, 57048-015, Brasil</p>
      </div>
    </div>
  );
};

export default Mapa;

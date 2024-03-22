import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Eventos.css';
import imagens from './imagensManchester.json';

const Eventos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <div className="slick-prev"></div>, 
    nextArrow: <div className="slick-next"></div>,
  };

  return (
    <div className="slide-container">
      <div className="text-center">
        <p className='textp'><img className='img-manchester' src="../../../../../public/img/manah-logo-black.jpg" alt="" /> Galeria  </p>
        
      </div>
      <Slider {...settings} className="slider">
        {imagens.map((imagem) => (
          <div key={imagem.id} className="slide-item">
            <img className="slide-img" src={imagem.src} alt={imagem.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Eventos;

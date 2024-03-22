import React from 'react';
import './index.css';

function YouTubeVideo() {
  return (
    <div>
      <div className="text-center textp">
      <h1>Seja Bem-Vindo a Manah Maceió!</h1>
    </div>
    <div className='principal-video'>
      <div className='container-video'>
        
        <p className='textp'>
          <img className='img-manchester' src="../../../../../public/img/manah-logo-black.jpg" alt="" />
           Cultos
        </p>
        <a href="https://www.youtube.com/@MANAHCHURCH/featured" target="_blank" rel="noopener noreferrer">
          <img
            src="../../../../img/youtube1.png"
            alt="Link para o canal do YouTube"
            width="50%"
            height="auto"
            className='centralizar'
          />
        </a>
      </div>
    </div>
    </div>
  );
}

export default YouTubeVideo;
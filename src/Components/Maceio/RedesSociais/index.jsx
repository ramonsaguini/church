import React from 'react';
import './index.css'; // You can define additional styling in this CSS file

const RedesSociais = () => {
  return (
    <div className='main-container'>
      <div className='second-container'>
        <div className="social-icons">
          <h2>Redes Sociais</h2>
        </div>
        <div className="social-icons">
          <div className="social-icon">
            <a href="https://www.facebook.com/manahchurchmaceio/" target='_blank'>
              <img className='facebook' src="/img/facebook.png" width={40} alt="Facebook" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/manahchurchmaceio/" target='_blank'>
              <img className='instagram' src="/img/instagram.png" width={40} alt="Instagram" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.youtube.com/@MANAHCHURCH" target='_blank'>
              <img className='youtube' src="/img/youtube.png" width={40} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default RedesSociais;

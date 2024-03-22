import React from 'react';
import './RedesSociais.css'; // You can define additional styling in this CSS file

const RedesSociais = () => {
  return (
    <div className='main-container'>
      <div className='second-container'>
        <div className="social-icons">
          <h2>Redes Sociais</h2>
        </div>
        <div className="social-icons">
          <div className="social-icon">
            <a href="https://www.facebook.com/manahchurch/" target='_blank'>
              <img className='facebook' src="/img/facebook.png" width={40} alt="Facebook" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://twitter.com/manah_church" target='_blank'>
              <img className='twitter' src="/img/twitter.png" width={40} alt="Twitter" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/manahchurchmanchester/" target='_blank'>
              <img className='instagram' src="/img/instagram.png" width={40} alt="Instagram" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.youtube.com/@manahchurchmanchester5098" target='_blank'>
              <img className='youtube' src="/img/youtube.png" width={40} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default RedesSociais;

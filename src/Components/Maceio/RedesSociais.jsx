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
            <a href="https://facebook.com">
              <img className='facebook' src="/img/facebook.png" width={40} alt="Facebook" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://twitter.com">
              <img className='twitter' src="/img/twitter.png" width={40} alt="Twitter" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://instagram.com">
              <img className='instagram' src="/img/instagram.png" width={40} alt="Instagram" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://youtube.com">
              <img className='youtube' src="/img/youtube.png" width={40} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesSociais;

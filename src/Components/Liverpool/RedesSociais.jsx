import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './RedesSociais.css';

const RedesSociais = () => {
  return (
    <div className='main-container'>
      <div className='second-container'>
        <div className="social-icons">
          <h2>Nossas Redes Sociais</h2>
        </div>
        <div className="social-icons">
          <div className="social-icon facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </div>
          <div className="social-icon twitter ">
          </div>
          <div className="social-icon instagram">
          </div>
          <div className="social-icon youtube">
          </div>
        </div>
      </div>
    </div>

  );
};

export default RedesSociais;

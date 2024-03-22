import React from 'react';
import { Link } from 'react-router-dom';
import '../Main/index.css';
import VersiculoRotativo from '../Versiculos/index';

function Main() {
  
  return (
    <div className="text-center">
      {/* Links dos Locais */}
      <div className="d-flex justify-content-center align-items-center m-3">
        <div className='text-center text-decoration-none'>
          <Link to="/Manchester" className="text-decoration-none">
            <img src="public/img/manah-logo-black.jpg" alt="manchester" className="circle-image img-locals" />
            <p className='black'>Manchester </p>
          </Link>
        </div>
        <div className='text-center text-decoration-none'>
          <Link to="/Liverpool" className="text-decoration-none">
            <img src="public/img/manah-logo-black.jpg" alt="liverpool" className="circle-image img-locals" />
            <p className='black'>Liverpool</p>
          </Link>
        </div>
        <div className='text-center text-decoration-none'>
          <Link to="/Maceio" className="text-decoration-none">
            <img src="public/img/manah-logo-black.jpg" alt="maceio" className="circle-image img-locals" />
            <p className='black'>Maceio</p>
          </Link>
        </div>
      </div>
      <div>
      <VersiculoRotativo />

      </div>

    </div>
  );
}

export default Main;

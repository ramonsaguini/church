import React, { useState, useEffect, useRef } from 'react';
import './index.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('pt'); // 'pt' para português, 'en' para inglês
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bannermanah d-flex align-items-end ">
      <div className="container d-flex justify-content-between">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="./">Inicio</a>
            </li>
            <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`} ref={dropdownRef}>
              <a className="nav-link dropdown-toggle " href="#" role="button" id="navbarDropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Localizações
              </a>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="./Manchester">Manchester</a></li>
                <li><a className="dropdown-item" href="./Liverpool">Liverpool</a></li>
                <li><a className="dropdown-item" href="./Maceio">Maceio</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="./Sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="https://www.instagram.com/escolademissoesmanah/" target='_black'>Missões</a>
            </li>

          </ul>
        </div>
        <div className="nav-item dropdown"> {/* Movido para a direita */}
          <button className="btn btn-secondary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            {language === 'pt' ? <img src='/img/brasil.png' style={{ width: '20px', marginRight: '5px' }} alt="Bandeira do Brasil" /> : <img src='./img/reinoUnido.png' style={{ width: '20px', marginRight: '5px' }} alt="Bandeira do Reino Unido" />}

          </button>
          <ul className="dropdown-menu" aria-labelledby="languageDropdown">
            <li><button className="dropdown-item" onClick={() => handleLanguageChange('pt')}><img src='/img/brasil.png' style={{ width: '20px', marginRight: '5px' }} alt="Bandeira do Brasil" /> Português</button></li>
            <li><button className="dropdown-item" onClick={() => handleLanguageChange('en')}><img src='/img/reinoUnido.png' style={{ width: '20px', marginRight: '5px' }} alt="Bandeira do Reino Unido" /> English </button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

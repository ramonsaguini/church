import React, { useState, useEffect, useRef } from 'react';
import './index.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bannermanah d-flex align-items-end ">
      <div className="container ">
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
              <a className="nav-link " href="#">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Missoes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

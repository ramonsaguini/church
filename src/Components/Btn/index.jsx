import React from 'react';
import { Link } from 'react-router-dom';
import '../Btn/index.css';

const Btn = () => {
  return (
    <Link to="./" className="btn-link">
      Inicio
    </Link>
  );
};

export default Btn;
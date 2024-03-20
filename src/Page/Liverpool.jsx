import { useEffect } from 'react';
import Eventos from '../Components/Liverpool/Eventos.jsx';
import Mapa from '../Components/Liverpool/Mapa.jsx';
import '../Components/Liverpool/Eventos.css';
import '../Components/Liverpool/Mapa.css';
import RedesSociais from '../Components/Liverpool/RedesSociais.jsx';
import '../Components/Liverpool/RedesSociais.css';

function Liverpool() {

  return (
    <>
      <Eventos />
      <RedesSociais />
      <Mapa />
    
      </>
    

    );
  }

  export default Liverpool;
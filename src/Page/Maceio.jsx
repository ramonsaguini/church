import { useEffect } from 'react';
import Eventos from '../Components/Maceio/Eventos.jsx';
import Mapa from '../Components/Maceio/Mapa.jsx';
import '../Components/Maceio/Eventos.css';
import '../Components/Maceio/Mapa.css';
import RedesSociais from '../Components/Maceio/RedesSociais.jsx';   




function Maceio() {

  return (
    <>
      <Eventos />
      <RedesSociais/>
      <Mapa />
    
      </>
    

    );
  }

  export default Maceio;
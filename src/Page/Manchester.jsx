import { useEffect } from 'react';
import Eventos from '../Components/Manchester/Eventos.jsx';
import Mapa from '../Components/Manchester/Mapa.jsx';
import '../Components/Manchester/Eventos.css';
import '../Components/Manchester/Mapa.css';
import RedesSociais from '../Components/Manchester/RedesSociais.jsx';
import YouTubeVideo from '../Components/Manchester/youtube.jsx';




function Manchester() {

  return (
    <>
      <YouTubeVideo/>
      <Eventos />
      <Mapa />
      <RedesSociais />
      
    
      </>
    

    );
  }

  export default Manchester;
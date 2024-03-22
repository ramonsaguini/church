import { useEffect } from 'react';
import Eventos from '../Components/Manchester/NossosCultos/index.jsx';
import Mapa from '../Components/Manchester/Mapa/index.jsx';
import '../Components/Manchester/NossosCultos/index.css';
import '../Components/Manchester/Mapa/index.css';
import RedesSociais from '../Components/Manchester/RedesSociais/index.jsx';
import YouTubeVideo from '../Components/Manchester/Youtube/index.jsx';




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
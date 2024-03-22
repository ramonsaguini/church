import { useEffect } from 'react';
import Eventos from '../Components/Liverpool/NossosCultos/index.jsx';
import Mapa from '../Components/Liverpool/Mapa/index.jsx';
import '../Components/Liverpool/NossosCultos/index.css';
import '../Components/Liverpool/Mapa/index.css';
import RedesSociais from '../Components/Liverpool/RedesSociais/index.jsx';
import YouTubeVideo from '../Components/Liverpool/Youtube/index.jsx';




function Liverpool() {

  return (
    <>
      <YouTubeVideo/>
      <Eventos />
      <Mapa />
      <RedesSociais />
      
      
    
      </>
    

    );
  }

  export default Liverpool;
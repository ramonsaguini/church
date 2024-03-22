import { useEffect } from 'react';
import Eventos from '../Components/Maceio/NossosCultos/index.jsx';
import Mapa from '../Components/Maceio/Mapa/index.jsx';
import '../Components/Maceio/NossosCultos/index.css';
import '../Components/Maceio/Mapa/index.css';
import RedesSociais from '../Components/Maceio/RedesSociais/index.jsx';
import YouTubeVideo from '../Components/Maceio/Youtube/index.jsx';




function Maceio() {

  return (
    <>
      <YouTubeVideo/>
      <Eventos />
      <Mapa />
      <RedesSociais />
      
      
    
      </>
    

    );
  }

  export default Maceio;
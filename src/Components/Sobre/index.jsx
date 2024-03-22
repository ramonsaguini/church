import React from 'react';
import '../Sobre/index.css'

function Sobre() {
  return (
    <div className="d-flex flex-column align-items-center">
      <p className='textp'> <img className='img-logo-red' src="../../../../../public/img/manah-logo-black.jpg" alt="" />Manah Church</p>
      <p className="text-center">Bem-vindo à nossa página "Sobre". Aqui você encontrará informações sobre a Manah Church em Manchester.</p>
      <h3 className="text-center textp">Nossa Missão</h3>
      <p className="text-center">Nossa missão é compartilhar o amor de Deus, fortalecer a fé e servir à comunidade local.</p>
      <h3 className="text-center textp">Nossa Equipe</h3>
      <p className="text-center">Temos uma equipe pastoral dedicada e uma comunidade vibrante de membros que trabalham juntos para alcançar nossos objetivos e cuidar uns dos outros.</p>
      <h3 className="text-center textp">Entre em Contato</h3>
      <p className="text-center">Se você tiver alguma dúvida, gostaria de participar de nossos eventos ou deseja obter mais informações sobre a Manah Church em Manchester, não hesite em entrar em contato conosco.</p>
    </div>
  );
}

export default Sobre;
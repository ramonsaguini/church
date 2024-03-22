import React, { useState, useEffect } from 'react';
import './youtube.css';

function YouTubeVideo() {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    fetchMostRecentVideo();
  }, []);

  const apiKey = 'AIzaSyCp7cPfWZv9jFr20-c3qcre3mdRu4rbjME';
  const fetchMostRecentVideo = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_nx71jlQ9khBIIBZ5cLaLg&order=date&type=video&key=${apiKey}`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const mostRecentVideoId = data.items[0].id.videoId;
        setVideoId(mostRecentVideoId);
      } else {
        console.error('No videos found for the given channel.');
      }
    } catch (error) {
      console.error('Error fetching most recent video:', error);
    }
  };

  if (!videoId) {
    return <div>Loading...</div>;
  }

  return (
    <div className='principal-video'>
      <div className='container-video'>
        <p className='textp'><img className='img-manchester' src="../../../../../public/img/manah-logo-black.jpg" alt="" /> Último Culto</p>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          width="80%" // Largura definida como 80% da largura do contêiner pai
          height="500px" // Altura ajustada automaticamente para manter a proporção
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          className='centralizar'
        ></iframe>
      </div>
    </div>
  );
}

export default YouTubeVideo;

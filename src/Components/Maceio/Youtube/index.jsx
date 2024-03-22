import React, { useState, useEffect } from 'react';
import './index.css';
import YoutubeApiKey from '../../../../YoutubeApikey';

function YouTubeVideo() {
  const [videoInfo, setVideoInfo] = useState(null);
  
  useEffect(() => {
    fetchMostRecentVideo();
  }, []);
  
  
  const apiKey = YoutubeApiKey();
  const channelId = 'UCaSzCVzO1Qhbd53nKBgOKAA';

  const fetchMostRecentVideo = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&key=${apiKey}`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const mostRecentVideo = data.items[0];
        const liveBroadcastContent = mostRecentVideo.snippet.liveBroadcastContent;
        let startDate = '';
        if (liveBroadcastContent === 'live') {
          startDate = mostRecentVideo.snippet.publishedAt;
        } else {
          startDate = mostRecentVideo.snippet.publishedAt;
        }
        setVideoInfo({
          videoId: mostRecentVideo.id.videoId,
          title: mostRecentVideo.snippet.title,
          startDate: formatDate(startDate),
        });
      } else {
        console.error('No videos found for the given channel.');
      }
    } catch (error) {
      console.error('Error fetching most recent video:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate() -1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (!videoInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className='principal-video'>
      <div className='container-video'>
        <p className='textp'><img className='img-manchester' src="../../../../../public/img/manah-logo-black.jpg" alt="" /> Culto - {videoInfo.startDate}</p>
        <iframe
          src={`https://www.youtube.com/embed/${videoInfo.videoId}`}
          width="80%"
          height="500px"
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

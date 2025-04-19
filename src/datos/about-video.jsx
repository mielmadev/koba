import React from 'react';

export default function AboutVideo({ videoUrl }) {
  return (
    <div className='about-video'>
      <iframe 
        src={videoUrl} 
        title="Mini-documental KOBA LIVE" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe>
    </div>
  );
}
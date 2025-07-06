import React from "react"
import "./aboutVideo.scss"

// URL de privacidad mejorada de YouTube para evitar cookies
const videoUrl = "https://www.youtube-nocookie.com/embed/Bq7QldlGt2U?rel=0&showinfo=0"

export default function AboutVideo() {
  return (
    <div className="about-video">
      <iframe
        src={videoUrl}
        title="Mini-documental KOBA LIVE"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

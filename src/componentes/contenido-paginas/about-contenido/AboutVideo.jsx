import React from "react"
import "./AboutVideo.scss"

// URL actualizada con parámetros adicionales para mejor compatibilidad
const videoUrl = "https://www.youtube.com/embed/Bq7QldlGt2U?rel=0&showinfo=0"

export default function AboutVideo() {
  return (
    <div className="about-video">
      <iframe
        src={videoUrl}
        title="Mini-documental KOBA LIVE"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

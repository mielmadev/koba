import React from "react"

const videoUrl = "https://www.youtube.com/embed/Bq7QldlGt2U"

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

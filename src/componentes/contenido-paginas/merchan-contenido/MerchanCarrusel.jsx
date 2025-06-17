import React, { useState, useRef, useEffect } from "react"
import "./merchan-carrusel.scss"

import merch1 from "@imagenes/merchan/Merch-2023_01-150x150.webp"
import merch2 from "@imagenes/merchan/Merch-2023_02-150x150.webp"
import merch3 from "@imagenes/merchan/Merch-2023_03-150x150.webp"
import merch4 from "@imagenes/merchan/Merch-2023_04-150x150.webp"
import merch5 from "@imagenes/merchan/Merch-2023_05-150x150.webp"
import merch6 from "@imagenes/merchan/Merch-2023_06-150x150.webp"
import merch7 from "@imagenes/merchan/Merch-2023_07-150x150.webp"
import merch8 from "@imagenes/merchan/Merch-2023_08-150x150.webp"
import merch9 from "@imagenes/merchan/Merch-2023_09-150x150.webp"

const imagenesMerchan = [merch1, merch2, merch3, merch4, merch5, merch6, merch7, merch8, merch9]

const MerchanCarrusel = () => {
  const [actual, setActual] = useState(0)
  const total = imagenesMerchan.length
  const startX = useRef(null)

  // Movimiento automático
  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % total)
    }, 3200)
    return () => clearInterval(timer)
  }, [total])

  // Swipe/touch
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    if (startX.current === null) return
    const endX = e.changedTouches[0].clientX
    if (endX - startX.current > 40) setActual((prev) => (prev - 1 + total) % total)
    else if (startX.current - endX > 40) setActual((prev) => (prev + 1) % total)
    startX.current = null
  }

  // Teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase()
      if (["arrowleft", "a", "anterior"].includes(key)) {
        setActual((prev) => (prev - 1 + total) % total)
      } else if (["arrowright", "d", "siguiente", "posterior"].includes(key)) {
        setActual((prev) => (prev + 1) % total)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [total])

  return (
    <div
      className="merchan-carrusel"
      tabIndex={0}
      aria-label="Carrusel de merchandising KOBA. Usa flechas izquierda/derecha, anterior/siguiente, o haz clic en los laterales para navegar."
      style={{ outline: "none" }}
    >
      <div
        className="merchan-carrusel__imagenes"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {imagenesMerchan.map((img, idx) => {
          let pos = (idx - actual + total) % total
          if (pos > total / 2) pos -= total
          if (Math.abs(pos) > 2) return null
          let clase = "merchan-carrusel__imagen"
          if (pos === 0) clase += " actual"
          else if (pos === -1) clase += " anterior"
          else if (pos === 1) clase += " siguiente"
          else if (pos === -2) clase += " lateral-izq"
          else if (pos === 2) clase += " lateral-der"

          // Click: derecha/siguiente/posterior avanza, izquierda/anterior retrocede
          let onClick = undefined
          if (pos === 1 || pos === 2) onClick = () => setActual((prev) => (prev + 1) % total)
          if (pos === -1 || pos === -2)
            onClick = () => setActual((prev) => (prev - 1 + total) % total)

          return (
            <img
              key={idx}
              src={img}
              alt={`Merchandising KOBA ${idx + 1}`}
              className={clase}
              loading="lazy"
              style={{ zIndex: 10 - Math.abs(pos), cursor: onClick ? "pointer" : "default" }}
              onClick={onClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MerchanCarrusel

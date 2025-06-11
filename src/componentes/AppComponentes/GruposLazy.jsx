import { lazy } from "react"

// Ahora solo se necesita una ruta genérica para todos los grupos
const GRUPOS_LAZY = [
  {
    key: "GRUPOGEN",
    // Ruta genérica para cualquier grupo: /bandas/:nombreBanda
    // Para añadir un grupo nuevo, solo asegúrate de que el nombreBanda coincida con el nombre en los datos y el fondo esté en assets/imagenes/fondos
    path: "/bandas/:nombreBanda",
    label: "Grupo genérico",
    component: lazy(() => import("@paginas-grupos/GrupoPagGenerico"))
  }
]

export default GRUPOS_LAZY

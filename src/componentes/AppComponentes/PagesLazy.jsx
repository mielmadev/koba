import { lazy } from "react"

// Definición dinámica de páginas y rutas
const PAGES_LAZY = [
  {
    key: "INICIO",
    path: "/",
    label: "Inicio",
    component: lazy(() =>
      window.FORZAR_FALLBACK
        ? new Promise(res => setTimeout(() => res(import("@paginas-principales/KobaIVPag")), 3500))
        : import("@paginas-principales/KobaIVPag")
    )
  },
  {
    key: "FAQ",
    path: "/faq",
    label: "FAQ",
    component: lazy(() =>
      window.FORZAR_FALLBACK
        ? new Promise(res => setTimeout(() => res(import("@paginas-principales/FaqPag")), 3500))
        : import("@paginas-principales/FaqPag")
    )
  },
  {
    key: "ABOUT",
    path: "/about",
    label: "About",
    component: lazy(() =>
      window.FORZAR_FALLBACK
        ? new Promise(res => setTimeout(() => res(import("@paginas-principales/AboutPag")), 3500))
        : import("@paginas-principales/AboutPag")
    )
  },
  {
    key: "MERCHANDISING",
    path: "/merchandising",
    label: "Merchan",
    component: lazy(() =>
      window.FORZAR_FALLBACK
        ? new Promise(res => setTimeout(() => res(import("@paginas-principales/MerchanPag")), 3500))
        : import("@paginas-principales/MerchanPag")
    )
  },
  {
    key: "CONTACTO",
    path: "/contacto",
    label: "Contacto",
    component: lazy(() =>
      window.FORZAR_FALLBACK
        ? new Promise(res => setTimeout(() => res(import("@paginas-principales/ContactoPag")), 3500))
        : import("@paginas-principales/ContactoPag")
    )
  }
]

export default PAGES_LAZY

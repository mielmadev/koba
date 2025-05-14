import { lazy } from "react"

// Definición dinámica de páginas y rutas
const PAGES_LAZY = [
  {
    key: "INICIO",
    path: "/",
    label: "Inicio",
    component: lazy(() => import("@paginas-principales/2025Pag"))
  },
  {
    key: "FAQ",
    path: "/faq",
    label: "FAQ",
    component: lazy(() => import("@paginas-principales/FaqPag"))
  },
  {
    key: "ABOUT",
    path: "/about",
    label: "About",
    component: lazy(() => import("@paginas-principales/AboutPag"))
  },
  {
    key: "MERCHANDISING",
    path: "/merchandising",
    label: "Merchandising",
    component: lazy(() => import("@paginas-principales/MerchanPag"))
  },
  {
    key: "CONTACTO",
    path: "/contacto",
    label: "Contacto",
    component: lazy(() => import("@paginas-principales/ContactoPag"))
  },
  {
    key: "BANDAS",
    path: "/bandas",
    label: "Bandas",
    component: lazy(() => import("@paginas-principales/BandasPag"))
  }
]

export default PAGES_LAZY

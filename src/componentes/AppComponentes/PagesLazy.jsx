import { lazy } from "react"

// Definición dinámica de páginas y rutas
const PAGES_LAZY = [
  {
    key: "INICIO",
    path: "/",
    label: "Inicio",
    component: lazy(() => import("@paginas-principales/KobaIVPag"))
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
    label: "Merchan",
    component: lazy(() => import("@paginas-principales/MerchanPag"))
  },
  {
    key: "CONTACTO",
    path: "/contacto",
    label: "Contacto",
    component: lazy(() => import("@paginas-principales/ContactoPag"))
  },
  // {
  //   key: "POLITICA_PRIVACIDAD",
  //   path: "/politica-privacidad",
  //   label: "Política de privacidad",
  //   component: lazy(() => import("@paginas-principales/PoliticaPrivacidadPag"))
  // },
  // Ruta MielmaDev eliminada de PAGES_LAZY para que no aparezca en el menú ni navegación
]

export default PAGES_LAZY

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.scss"
import App from "./App.jsx"
import Encabezado from "./componentes/encabezado/Encabezado.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Encabezado />
  </StrictMode>
)

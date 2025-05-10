import AboutDatosLista from "./AboutDatosLista";
import AboutVideo from "./AboutVideo";
import "./AboutContenido.scss";

const AboutContenido = () => {
  return (
    <div className="contenido">
      <AboutDatosLista />
      <AboutVideo />
    </div>
  );
};

export default AboutContenido;

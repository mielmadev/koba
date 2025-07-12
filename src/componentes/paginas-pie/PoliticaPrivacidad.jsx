import React from "react"
import "./PoliticaPrivacidad.scss"

const PoliticaPrivacidad = () => (
  <div className="contenido-pag">
    <div className="politica-privacidad">
      <h1>Política de Privacidad</h1>
      <p>En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos sobre el tratamiento de tus datos personales en este sitio web.</p>

      <h2>Responsable del tratamiento</h2>
      <p><strong>KobaLive</strong> – Desarrollador: MielmaDev<br />Correo de contacto: <a href="mailto:mielmadev@gmail.com">mielmadev@gmail.com</a></p>

      <h2>Datos que se recogen</h2>
      <ul>
        <li><strong>Formulario de contacto:</strong> nombre, correo electrónico y mensaje.</li>
        <li><strong>No se usan cookies de seguimiento ni analítica.</strong> Solo se emplea la versión de YouTube sin cookies para vídeos y el iframe de Spotify para música.</li>
        <li><strong>Nota sobre Spotify:</strong> El iframe de Spotify puede utilizar cookies propias y de terceros, que no pueden ser gestionadas ni eliminadas desde este sitio web. Para más información, consulta la política de privacidad de Spotify.</li>
      </ul>

      <h2>Finalidad del tratamiento</h2>
      <ul>
        <li>Responder a consultas y solicitudes enviadas a través del formulario.</li>
        <li>No se realizan envíos comerciales ni cesión de datos a terceros.</li>
      </ul>

      <h2>Legitimación</h2>
      <p>La base legal para el tratamiento es el consentimiento del usuario al enviar el formulario.</p>

      <h2>Conservación de los datos</h2>
      <p>Los datos se conservan solo el tiempo necesario para responder a la consulta y cumplir obligaciones legales.</p>

      <h2>Derechos de los usuarios</h2>
      <ul>
        <li>Acceder, rectificar y suprimir sus datos.</li>
        <li>Solicitar la limitación u oposición al tratamiento.</li>
        <li>Ejercer estos derechos escribiendo a <a href="mailto:mielmadev@gmail.com">mielmadev@gmail.com</a>.</li>
      </ul>

      <h2>Destinatarios</h2>
      <p>No se ceden datos a terceros. El envío de mensajes se realiza mediante el servicio <strong>EmailJS</strong>, que cumple con la normativa europea de protección de datos.</p>

      <h2>Seguridad</h2>
      <p>Se aplican medidas técnicas y organizativas para proteger los datos personales.</p>

      <h2>Modificaciones</h2>
      <p>Esta política puede actualizarse. Se recomienda revisarla periódicamente.</p>
    </div>
  </div>
)

export default PoliticaPrivacidad

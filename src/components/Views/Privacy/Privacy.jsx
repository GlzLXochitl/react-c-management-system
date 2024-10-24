import React from "react";

//import '../../styles/views/common/privacy.css';

function Privacy() {
  return (
    <>
      <div className="jumbotron jumbotron-privacy jumbotron-fluid" id="jumbotron-privacy">
        <div className="container">
        <h1 className="display-4">
            <b>Política de Privacidad</b>
            <br />
            Tu privacidad es importante para nosotros
          </h1>
          
        </div>
      </div>
      <div className="container-body-disposition-privacy">
        <div className="container" id="container-text">
          <div className="elements-disposition porfile-info-style">
            En la Universidad Tecnológica Metropolitana de Aguascalientes, nos
            comprometemos a proteger la privacidad de nuestros estudiantes,
            maestros y administradores en el uso de nuestro sistema de gestión
            de créditos. Al registrarte en el sistema, recopilamos información
            necesaria para brindarte un servicio eficiente y personalizado.
            <br /> <br />
            La información que recopilamos se utiliza exclusivamente para
            gestionar y administrar los créditos académicos, facilitando así la
            comunicación entre los distintos usuarios del sistema. Nuestro
            objetivo es crear un entorno seguro donde tanto estudiantes como
            maestros puedan interactuar y acceder a la información relevante
            para su desarrollo académico.
            <br />
            <br />
            El acceso a la información está restringido al personal autorizado,
            garantizando así que solo quienes necesiten dicha información en el
            ejercicio de sus funciones puedan acceder a ella. Nos esforzamos por
            implementar medidas de seguridad adecuadas para proteger la
            información personal y minimizar riesgos de acceso no autorizado.
            <br />
            <br />
            Los usuarios de nuestro sistema tienen derechos sobre su
            información, que incluyen la posibilidad de acceder a ella y
            solicitar correcciones o eliminaciones, conforme a la normativa
            aplicable.
            <br />
            <br />
            Nos reservamos el derecho de realizar modificaciones a esta política
            y te informaremos sobre cualquier cambio a través del sistema. Si
            tienes preguntas o inquietudes sobre nuestras prácticas de
            privacidad, no dudes en contactarnos.
            <div className="data-time-site-privacy date">
              <address>
                Univercidad Tecnológica Metropolitana de Aguascalientes
                <br />
                Av. Gerónimo de la Cueva s/n, Villas del Río, 20126
                Aguascalientes, Ags.
                <br />
                (+52) 449 910 20 00
              </address>
              Marzo 22, del 2024
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy;

import React from "react";

const Portafolio11 = () => {
  return (
    <section id="Portafolio11" className="imageblock-section switchable switchable-content pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <div className="img-logo">
                <div className="img-container">
                  <img
                    src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/escola%20lumen%20logo.png?updatedAt=1700487127454"
                    alt="Escola Lumen infantil i primària"
                    className="img-fluid"
                  />
                  <img
                    src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/petit%20lumen%20logo.png?updatedAt=1700487129350"
                    alt="El petit Lumen Escola bressol"
                    className="img-fluid"
                    style={{ marginLeft: '30px' }}
                  />
                </div>
              </div>
              <p>
                La <a href="https://www.escolalumen.net/">Escola Lumen</a> y el <a href="https://www.elpetitlumen.es/es/">Petit Lumen</a>
                son un centro escolar con un proyecto Pedagógico que garantiza una escuela plural y abierta. Este sitio web ha sido
                desarrollado utilizando la <strong>plataforma WordPress, demostrando su capacidad para crear contenido dinámico y funcional
                de manera efectiva</strong>. La presencia de características personalizadas y una interfaz amigable son testamento del desarrollo.
                El uso de plugins y temas característicos también es evidente en la estructura y diseño del sitio.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 order-first order-md-last">
            <img
              src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/lumen.png?updatedAt=1700223243240"
              alt="Lumen"
              className="img-fluid img-with-shadow-br"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio11;

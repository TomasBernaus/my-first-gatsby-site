import React from "react";

const Portafolio15 = () => {

  return (
    <section id="Portafolio15" className="imageblock-section switchable switchable-content pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <div className="img-logo">
                <img
                  src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/cemcat.png?updatedAt=1700490062014"
                  alt="Cemcat"
                  className="img-fluid"
                />
              </div>
              <p>
                eCemcat es una herramienta de gestión clínica e investigación como punto de unión de diferentes bases de datos
                del equipo medico del Centro de Esclerosis Múltiple de Cataluña <a href="https://www.cem-cat.org/">(Cemcat)</a>, además de ofrecer funcionalidades
                como único canal de comunicación fundamental e inevitable entre profesionales y pacientes.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 order-first order-md-last">
            <img
              src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/cemcat.png?updatedAt=1700223241254"
              alt="Cemcat"
              className="img-fluid img-with-shadow-br"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio15;

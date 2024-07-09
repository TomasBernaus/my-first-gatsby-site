import React from "react";

const Portafolio6 = () => {
  return (
    <section id="Portafolio6" className="gray-light-bg imageblock-section switchable switchable-content pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <img
              src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/ijm.png?updatedAt=1700223241344"
              alt="Institut Jaume Miró"
              className="img-fluid img-with-shadow-bl"
            />
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <div className="img-logo mb-150">
                <img
                  src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/jaume%20mimo%20%20logo.png?updatedAt=1700487127623"
                  alt="Jaume Mimó"
                />
              </div>
              <p className="right-text">
                La <a href="https://borsa.ciclesfp.cat/">bolsa de trabajo del Instituto Jaume Mimó</a>, es un proyecto que impulsa la incorporación
                de sus alumnos en el ámbito laboral mediante la FP Dual. Desarrollado en Drupal con capacidades multiusuario y roles que permite
                un viaje fluido al usuario gracias a su diseño intuitivo y personalizable. Drupal combina la gestión del usuario con la eficiencia del manejo de contenido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio6;

import React from "react";

const Portafolio8 = () => {
  return (
    <section id="Portafolio8" className="gray-light-bg imageblock-section switchable switchable-content pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <img
              src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/unida.png?updatedAt=1700223243022"
              alt="Unida"
              className="img-fluid img-with-shadow-bl"
              width="100%"
              height="200px"
            />
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <div className="img-logo">
                <img
                  src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/unida%20logo.png?updatedAt=1700487129080"
                  alt="unida"
                  className="img-fluid"
                />
              </div>
              <p className="right-text">
                <a href="https://www.unida.es/">UNIDA</a> es una iglesia con la misión de predicar y enseñar el Evangelio
                de Jesucristo para ayudar a la gente a amar a Dios, amar a la gente y cambiar el mundo. El sitio web
                desarrollado se componen de
                <strong>tecnología JAMStack desarrollado con GatsbyJS y Drupal como CMS, basado en un entorno Decouple CMS</strong>.
                El resultado es un sitio web que funciona sin servidor y como consecuencia
                el sitio web tiene un alto rendimiento que mejora el SEO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio8;

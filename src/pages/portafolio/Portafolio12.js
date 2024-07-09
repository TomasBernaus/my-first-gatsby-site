import React from "react";

const Portafolio12 = () => {

  return (
    <section id="Portafolio12" className="gray-light-bg imageblock-section switchable switchable-content pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <img
              src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/gsk.png?updatedAt=1700223241475"
              alt="epoc."
              className="img-fluid img-without-shadow"
              width="100%"
              height="200px"
            />
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <div className="img-logo">
                <div className="img-container">
                  <img
                    src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/gsk1%20logo%20rmbg.png?updatedAt=1700568003672"
                    alt="GSK-1"
                    className="img-fluid"
                  />
                  <img
                    src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/gsk2%20logo%20rmbg.png?updatedAt=1700568003795"
                    alt="GSK-2"
                    className="img-fluid"
                  />
                </div>
              </div>
              <p className="right-text">
                Junto con el Grupo de Respiratorio en Atención Primaria <strong>(GRAP) y GSK</strong> se ha desarrollado las Apps
                <strong>CheckEPOC</strong> y <strong>CheckASMA</strong>
                que pretendem ser una herramienta de ayuda para los profesionales sanitarios en su consulta médica, mediante un
                cuestionario integrado para comprenderel nivel de control del EPOC y ASMA del paciente. Estas
                <strong> APPs están desarrolladas en React Native</strong> que nos permite desarrollar para
                <strong> iOS y Android</strong> utilizando un único código base, lo que agiliza el desarrollo, reduce los costes
                y ofrece un rendimiento nativo, con una experiencia fluida y consistente en ambas plataformas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio12;

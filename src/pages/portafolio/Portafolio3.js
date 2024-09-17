import React from "react";

const Portafolio3 = () => {

  return (
    <section id="Portafolio3" className="imageblock-section switchable switchable-content pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <div className="img-logo">
                <img
                  src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/botanical%20%20logo.png?updatedAt=1700487127608"
                  alt="Botanical"
                  className="img-fluid"
                />
              </div>
              <p>
                <a href="https://botanical-responsiblefabrics.com/">BOTANICAL</a> es un equipo de expertos de la industria con más de 50 años de
                experiencia y conocimiento en todos los aspectos de la fabricación textil, desde la planta de procesamiento húmedo hasta la tela
                y el hilo. Este sitio web ha sido <strong>meticulosamente diseñado y desarrollado con programación a medida.</strong>
                La solución personalizada refleja la singularidad de los objetivos y requisitos del proyecto,
                permitiendo una experiencia en línea completamente única y adaptada a las necesidades específicas.
                Cada aspecto del sitio demuestra el esfuerzo dedicado a crear una solución exclusiva y precisa.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 order-first order-md-last">
            <img
              src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/botanical.png?updatedAt=1700223241416"
              alt="Botanical"
              className="img-fluid img-with-shadow-br"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio3;

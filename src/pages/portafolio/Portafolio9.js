import React from "react";

const Portafolio9 = () => {

  return (
    <section id="Portafolio9" className="imageblock-section switchable switchable-content pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <div className="img-logo">
                <img
                  src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/mamasame%20logo.png?updatedAt=1700487129217"
                  alt="cafés Mama Same"
                  className="img-fluid"
                />
              </div>
              <p>
                <a href="https://www.cafesmamasame.com/es">Cafés Mama Same</a> es una empresa de torrefactores desde 1989, seleccionando los
                mejores orígenes y tostando diariamente para que puedas disfrutar del mejor café en hostelería, casa u oficina.
                Este sitio web ha sido construido a través de la <strong>plataforma Drupal, con módulo de e-Commerce,
                evidenciando su versatilidad para desarrollar contenido altamente adaptable e interactivo.</strong>
                La implementación de módulos personalizados y su enfoque en la escalabilidad son indicativos del desarrollo.
                La arquitectura flexible y las características distintivas de Drupal también se reflejan en la funcionalidad y apariencia del sitio.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 order-first order-md-last">
            <img
              src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/mamasame.png?updatedAt=1700223243263"
              alt="Cafés Mama Same"
              className="img-fluid img-with-shadow-br"
              width="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portafolio9;

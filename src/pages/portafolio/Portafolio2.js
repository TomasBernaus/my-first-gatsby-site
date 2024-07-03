import React, { useState, useEffect } from "react";
import _data from "../../data";

const Portafolio2 = () => {
  const [ setAboutUs] = useState({});

  useEffect(() => {
    /**
     * Your ajax will goes here to get data then call setState
     */
    setAboutUs(_data.ITDOaboutUs1);
  }, []);

  return (
    <section
      id="Portafolio2"
      className="gray-light-bg imageblock-section switchable switchable-content pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-7">
            <img
              data-src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/flexes.png?updatedAt=1700223241234"
              src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/flexes.png?updatedAt=1700223241234"
              alt="Flexes"
              className="img-fluid img-without-shadow"
            />
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="about-content ml-20">
              <div className="img-logo">
                <img
                  data-src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/flexes%20logo.png?updatedAt=1700487127564"
                  src="https://ik.imagekit.io/tbernaus/itdo%20portafolio/logos/flexes%20logo.png?updatedAt=1700487127564"
                  alt="Flex"
                  className="img-fluid"
                />
              </div>
              <p className="right-text">
                Junto al equipo de Forcadell hemos dado luz a <a href="http://www.myflexes.com"> www.myflexes.com</a>, creando una
                <strong>plataforma web atractiva que acompaña a los clientes de Forcadell</strong>
                en el proceso de búsqueda de espacios Coworking en Barcelona.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio2;
